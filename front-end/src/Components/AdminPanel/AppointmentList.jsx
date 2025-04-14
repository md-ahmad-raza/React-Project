import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../AdminStyle/AppointmentList.css";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [formData, setFormData] = useState({
    reason: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/appointment/view"
      );
      console.log("Backend response:", response.data);
      const data = response.data.data;

      if (!Array.isArray(data)) {
        throw new Error("Invalid data format: Expected an array");
      }

      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      toast.error("Error fetching appointments");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (appointment) => {
    setEditingAppointment(appointment);
    setFormData({ ...appointment });
  };

  const handleDelete = async (appointmentId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/appointment/delete/${appointmentId}`
      );
      if (response.status === 200) {
        setAppointments(
          appointments.filter((appt) => appt._id !== appointmentId)
        );
        toast.success("Appointment deleted successfully!");
      } else {
        throw new Error("Failed to delete appointment");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Error deleting appointment");
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/appointment/update/${editingAppointment._id}`,
        formData
      );

      if (response.status === 200) {
        toast.success("Appointment updated successfully!");
        setEditingAppointment(null);
        fetchAppointments();
      } else {
        throw new Error("Failed to update appointment");
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Error updating appointment");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className='appointment-list-page'>
      <ToastContainer position='top-center' autoClose={3000} />
      <div className='appointment-list-container'>
        <h2>Appointment List</h2>

        {loading ? (
          <p>Loading appointments...</p>
        ) : appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          <table className='appointment-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Reason</th>
                <th>Date</th>
                <th>Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt, index) => (
                <tr key={index}>
                  <td>{appt.name}</td>
                  <td>{appt.email}</td>
                  <td>{appt.phone}</td>
                  <td>{appt.reason}</td>
                  <td>{appt.date}</td>
                  <td>{appt.time}</td>
                  <td>
                    <button
                      className='edit-btn'
                      onClick={() => handleEdit(appt)}
                    >
                      Edit
                    </button>
                    <button
                      className='delete-btn'
                      onClick={() => handleDelete(appt._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {editingAppointment && (
          <div className='appointment-edit-form'>
            <h3>Edit Appointment</h3>
            <form>
              <label htmlFor='reason'>Reason for Visit</label>
              <select
                name='reason'
                required
                onChange={handleChange}
                value={formData.reason}
              >
                <option value=''>Select a reason</option>
                <option value='checkup'>Check-Up</option>
                <option value='admit'>Admit</option>
                <option value='consultation'>Consultation</option>
              </select>

              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                placeholder='Enter your name'
                required
                onChange={handleChange}
                value={formData.name}
              />

              <label htmlFor='email'>Email Address</label>
              <input
                type='email'
                name='email'
                placeholder='Enter your email'
                required
                onChange={handleChange}
                value={formData.email}
              />

              <label htmlFor='phone'>Phone Number</label>
              <input
                type='tel'
                name='phone'
                placeholder='Enter your phone number'
                required
                onChange={handleChange}
                value={formData.phone}
              />

              <label htmlFor='date'>Select Date</label>
              <input
                type='date'
                name='date'
                required
                onChange={handleChange}
                value={formData.date}
              />

              <label htmlFor='time'>Select Time</label>
              <select
                name='time'
                required
                onChange={handleChange}
                value={formData.time}
              >
                <option value=''>Select a time</option>
                <option value='08:00 AM'>08:00 AM</option>
                <option value='09:00 AM'>09:00 AM</option>
                <option value='10:00 AM'>10:00 AM</option>
              </select>

              <div className='appointment-footer'>
                <button
                  type='button'
                  onClick={() => setEditingAppointment(null)}
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

export default AppointmentList;
