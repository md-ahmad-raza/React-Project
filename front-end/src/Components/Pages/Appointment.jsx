import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Appointment.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookAppointment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    reason: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { reason, name, email, phone, date, time } = formData;

      if (!reason || !name || !email || !phone || !date || !time) {
        toast.error("Please fill in all fields");
        setIsSubmitting(false);
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        toast.error("Please enter a valid email address");
        setIsSubmitting(false);
        return;
      }

      if (!/^\d{10,15}$/.test(phone)) {
        toast.error("Please enter a valid phone number (10-15 digits)");
        setIsSubmitting(false);
        return;
      }

      const response = await axios.post(
        "http://localhost:3000/api/appointment/insert",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setFormData({
          reason: "",
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
        });

        setTimeout(() => navigate("/AppointmentSuccess"), 1000);
      } else {
        throw new Error(response.data.message || "Failed to book appointment");
      }
    } catch (error) {
      console.error("Booking error:", error);

      let errorMessage = "Error booking appointment";
      if (error.response) {
        errorMessage = error.response.data.message || errorMessage;
      } else if (error.request) {
        errorMessage = "No response from server. Please try again.";
      }

      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateTimes = () => {
    const times = [];
    for (let hour = 8; hour <= 17; hour++) {
      const timeSlot = `${hour > 12 ? hour - 12 : hour}:00 ${
        hour >= 12 ? "PM" : "AM"
      }`;
      times.push(timeSlot);
    }
    return times;
  };

  return (
    <div className='appointment-page'>
      <ToastContainer position='top-center' autoClose={3000} />
      <div className='appointment-container'>
        <div className='appointment-header'>
          <h2>Book Appointment</h2>
        </div>
        <div className='appointment-content'>
          <form onSubmit={handleSubmit}>
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
              pattern='[0-9]{10,15}'
              title='10-15 digit phone number'
            />

            <label htmlFor='date'>Select Date</label>
            <input
              type='date'
              name='date'
              required
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              value={formData.date}
            />

            <label htmlFor='time'>Select Time</label>
            <select
              name='time'
              required
              onChange={handleChange}
              value={formData.time}
            >
              {generateTimes().map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>

            <div className='appointment-footer'>
              <button
                type='button'
                className='cancel-btn'
                onClick={() =>
                  setFormData({
                    reason: "",
                    name: "",
                    email: "",
                    phone: "",
                    date: "",
                    time: "",
                  })
                }
                disabled={isSubmitting}
              >
                Clear
              </button>
              <button
                type='submit'
                className='book-btn'
                disabled={isSubmitting}
              >
                {isSubmitting ? "Booking..." : "Book Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
