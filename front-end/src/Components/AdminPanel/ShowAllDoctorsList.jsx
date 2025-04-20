import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../AdminStyle/ShowAllDoctorsList.css";

const ShowAllDoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [formData, setFormData] = useState({
    DoctorName: "",
    Degree: "",
    Experience: "",
    About: "",
    Image: "",
  });

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:3000/api/addDoctors/view"
      );

      // Adjusted to match your backend response structure
      const doctorData = response.data.doctors || response.data.data || [];

      if (!Array.isArray(doctorData)) {
        throw new Error("Invalid data format: Expected an array");
      }

      setDoctors(doctorData);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      toast.error(error.response?.data?.message || "Error fetching doctors");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (doctor) => {
    setEditingDoctor(doctor);
    setFormData({
      DoctorName: doctor.DoctorName,
      Degree: doctor.Degree,
      Experience: doctor.Experience,
      About: doctor.About,
      Image: doctor.Image || "",
    });
  };

  const handleDelete = async (doctorId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/addDoctors/delete/${doctorId}`
      );

      if (response.status === 200) {
        setDoctors(doctors.filter((doc) => doc._id !== doctorId));
        toast.success(response.data.message || "Doctor deleted successfully!");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error(error.response?.data?.message || "Error deleting doctor");
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/addDoctors/update/${editingDoctor._id}`,
        formData
      );

      if (response.status === 200) {
        toast.success(response.data.message || "Doctor updated successfully!");
        setEditingDoctor(null);
        fetchDoctors();
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error(error.response?.data?.message || "Error updating doctor");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className='doctors-page'>
      <ToastContainer position='top-center' autoClose={3000} />
      <div className='doctors-container'>
        <h1>All Doctors</h1>

        {loading ? (
          <p>Loading doctors...</p>
        ) : doctors.length === 0 ? (
          <p>No doctors found.</p>
        ) : (
          <div className='doctors-grid'>
            {doctors.map((doctor) => (
              <div key={doctor._id} className='doctor-card'>
                <div className='doctor-image'>
                  <img
                    src={doctor.Image || "https://via.placeholder.com/150"}
                    alt={doctor.DoctorName}
                  />
                </div>
                <div className='doctor-details'>
                  <h2 className='doctor-name'>{doctor.DoctorName}</h2>
                  <p className='doctor-degree'>{doctor.Degree}</p>
                  <p className='doctor-experience'>
                    <strong>Experience:</strong> {doctor.Experience} years
                  </p>
                  <p className='doctor-about'>
                    <strong>About:</strong> {doctor.About}
                  </p>
                  <div className='doctor-actions'>
                    <button
                      className='edit-btn'
                      onClick={() => handleEdit(doctor)}
                    >
                      Edit
                    </button>
                    <button
                      className='delete-btn'
                      onClick={() => handleDelete(doctor._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {editingDoctor && (
          <div className='doctor-edit-form'>
            <h3>Edit Doctor</h3>
            <form>
              <label htmlFor='DoctorName'>Name</label>
              <input
                type='text'
                name='DoctorName'
                placeholder="Enter doctor's name"
                required
                onChange={handleChange}
                value={formData.DoctorName}
              />

              <label htmlFor='Degree'>Degree</label>
              <input
                type='text'
                name='Degree'
                placeholder="Enter doctor's degree"
                required
                onChange={handleChange}
                value={formData.Degree}
              />

              <label htmlFor='Experience'>Experience (years)</label>
              <input
                type='number'
                name='Experience'
                placeholder='Enter years of experience'
                required
                onChange={handleChange}
                value={formData.Experience}
              />

              <label htmlFor='About'>About</label>
              <textarea
                name='About'
                placeholder="Enter doctor's bio"
                required
                onChange={handleChange}
                value={formData.About}
              />

              <label htmlFor='Image'>Image URL</label>
              <input
                type='text'
                name='Image'
                placeholder='Enter image URL'
                onChange={handleChange}
                value={formData.Image}
              />

              <div className='doctor-form-footer'>
                <button
                  type='button'
                  onClick={() => setEditingDoctor(null)}
                  className='cancel-btn'
                >
                  Cancel
                </button>
                <button
                  type='button'
                  className='update-btn'
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <div className='back-to-panel'>
        <Link to='/adminPanel' className='back-link'>
          ← Back to Admin Panel
        </Link>
      </div>
    </div>
  );
};

export default ShowAllDoctorsList;
