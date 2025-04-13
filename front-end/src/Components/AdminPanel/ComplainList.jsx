import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../AdminStyle/ComplainList.css";

const ComplainList = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingComplaint, setEditingComplaint] = useState(null);
  const [formData, setFormData] = useState({
    PatientName: "",
    Description: "",
    Departments: "General Medicine",
    Date: "",
  });

  const fetchComplaints = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/complaints/view"
      );
      const data = response.data.data;

      if (!Array.isArray(data)) {
        throw new Error("Invalid data format: Expected an array");
      }

      setComplaints(data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
      toast.error("Error fetching complaints");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (complaint) => {
    setEditingComplaint(complaint);
    setFormData({ ...complaint });
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/complaints/delete/${id}`
      );

      if (response.status === 200) {
        setComplaints(complaints.filter((item) => item._id !== id));
        toast.success("Complaint deleted successfully!");
      } else {
        throw new Error("Failed to delete complaint");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Error deleting complaint");
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedData = {
        ...formData,
        Date: new Date(formData.Date).toISOString(), // ensure ISO format for backend
      };

      const response = await axios.put(
        `http://localhost:3000/api/complaints/update/${editingComplaint._id}`,
        updatedData
      );

      if (response.status === 200) {
        toast.success("Complaint updated successfully!");
        setEditingComplaint(null);
        fetchComplaints(); // refresh list
      } else {
        throw new Error("Failed to update complaint");
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Error updating complaint");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  return (
    <div className='complain-list-page'>
      <ToastContainer position='top-center' autoClose={3000} />
      <div className='complain-list-container'>
        <h2>Complaint List</h2>
        {loading ? (
          <p>Loading complaints...</p>
        ) : complaints.length === 0 ? (
          <p>No complaints found.</p>
        ) : (
          <table className='complain-table'>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Description</th>
                <th>Department</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complain, index) => (
                <tr key={index}>
                  <td>{complain.PatientName}</td>
                  <td>{complain.Description}</td>
                  <td>{complain.Departments}</td>
                  <td>{new Date(complain.Date).toLocaleDateString()}</td>
                  <td>
                    <button
                      className='edit-btn'
                      onClick={() => handleEdit(complain)}
                    >
                      Edit
                    </button>
                    <button
                      className='delete-btn'
                      onClick={() => handleDelete(complain._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {editingComplaint && (
          <div className='complain-edit-form'>
            <h3>Edit Complaint</h3>
            <form>
              <label htmlFor='PatientName'>Patient Name</label>
              <input
                type='text'
                name='PatientName'
                value={formData.PatientName}
                onChange={handleChange}
              />

              <label htmlFor='Description'>Description</label>
              <textarea
                name='Description'
                rows='3'
                value={formData.Description}
                onChange={handleChange}
              ></textarea>

              <label htmlFor='Departments'>Department</label>
              <select
                name='Departments'
                value={formData.Departments}
                onChange={handleChange}
              >
                <option value='General Medicine'>General Medicine</option>
                <option value='Cardiology'>Cardiology</option>
                <option value='Orthopedics'>Orthopedics</option>
                <option value='Pediatrics'>Pediatrics</option>
                <option value='Dental'>Dental</option>
              </select>

              <label htmlFor='Date'>Date</label>
              <input
                type='date'
                name='Date'
                value={formData.Date}
                onChange={handleChange}
              />

              <div className='edit-buttons'>
                <div className='cancel-container'>
                  <button
                    type='button'
                    className='cancel-btn'
                    onClick={() => setEditingComplaint(null)}
                  >
                    Cancel
                  </button>
                </div>
                <div className='update-container'>
                  <button
                    type='button'
                    className='update-btn'
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplainList;
