import { useState } from "react";
import "../Style/Appointment.css";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    reason: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { reason, name, email, phone, date, time } = formData;
    if (reason && name && email && phone && date && time) {
      setMessage("Appointment Booked Successfully!");
    } else {
      setMessage("Please fill in all fields.");
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
      <div className='appointment-container'>
        <div className='appointment-header'>
          <h2>Book Appointment</h2>
          <button
            className='close-btn'
            onClick={() => (window.location.href = "/")}
          >
            ×
          </button>
        </div>
        <div className='appointment-content'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='reason'>Reason for Visit</label>
            <select name='reason' required onChange={handleChange}>
              <option value=''>Select a reason</option>
              <option value='checkup'>Yearly Check-Up</option>
              <option value='consultation'>Consultation</option>
              <option value='followup'>Follow-Up</option>
            </select>

            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              required
              onChange={handleChange}
            />

            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              required
              onChange={handleChange}
            />

            <label htmlFor='phone'>Phone Number</label>
            <input
              type='tel'
              name='phone'
              placeholder='Enter your phone number'
              required
              onChange={handleChange}
            />

            <label htmlFor='date'>Select Date</label>
            <input
              type='date'
              name='date'
              required
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
            />

            <label htmlFor='time'>Select Time</label>
            <select name='time' required onChange={handleChange}>
              {generateTimes().map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>

            <div className='appointment-footer'>
              <button
                type='reset'
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
              >
                Clear
              </button>
              <button type='submit' className='book-btn'>
                Book Now
              </button>
            </div>
          </form>
          {message && (
            <p
              style={{
                color: message.includes("Successfully") ? "green" : "red",
              }}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
