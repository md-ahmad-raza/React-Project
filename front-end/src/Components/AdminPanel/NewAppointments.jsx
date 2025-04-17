import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../AdminStyle/NewAppointments.css";

const NewAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to check if two dates are the same day (ignoring time)
  const isSameDay = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  // Fetch appointments from backend
  const fetchAppointments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/appointment/view"
      );
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

  // Filter today's appointments
  const filterNewAppointments = () => {
    const today = new Date();

    return appointments.filter((appt) => {
      // Convert the appointment date string to a Date object
      const apptDate = new Date(appt.date);
      return isSameDay(apptDate, today);
    });
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const newAppointments = filterNewAppointments();

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className='new-appointments-page'>
      <ToastContainer position='top-center' autoClose={3000} />
      <div className='appointments-container'>
        <h2>New Appointments (Today)</h2>

        {loading ? (
          <p>Loading appointments...</p>
        ) : newAppointments.length === 0 ? (
          <p>No new appointments today.</p>
        ) : (
          <table className='appointments-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Reason</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {newAppointments.map((appt, index) => (
                <tr key={index}>
                  <td>{appt.name}</td>
                  <td>{appt.email}</td>
                  <td>{appt.phone}</td>
                  <td>{appt.reason}</td>
                  <td>{formatDate(appt.date)}</td>
                  <td>{appt.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default NewAppointments;
