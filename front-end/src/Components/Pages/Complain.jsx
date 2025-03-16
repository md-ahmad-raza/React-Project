import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Style/Complain.css";

const ComplaintPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    patientName: "",
    description: "",
    department: "General Medicine",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { patientName, description, department, date } = formData;

    if (patientName && description && department && date) {
      // Redirect to success page after form submission
      navigate("/ComplainSuccess");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className='complaint-page'>
      <div className='form-container'>
        <h2 className='form-title'>Complaint Management</h2>
        <form className='complaint-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='complaintId'>Complaint ID</label>
            <input
              type='text'
              id='complaintId'
              placeholder='Enter complaint ID'
              disabled
            />
          </div>
          <div className='form-group'>
            <label htmlFor='patientName'>Patient Name</label>
            <input
              type='text'
              id='patientName'
              placeholder='Enter patient name'
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <textarea
              id='description'
              placeholder='Enter complaint description'
              rows='4'
              onChange={handleChange}
            ></textarea>
          </div>
          <div className='form-group'>
            <label htmlFor='department'>Department</label>
            <select id='department' onChange={handleChange}>
              <option>General Medicine</option>
              <option>Cardiology</option>
              <option>Orthopedics</option>
              <option>Pediatrics</option>
              <option>Dental</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='date'>Date</label>
            <input type='date' id='date' onChange={handleChange} />
          </div>

          <div className='form-buttons'>
            <button
              type='reset'
              className='reset-btn'
              onClick={() =>
                setFormData({
                  patientName: "",
                  description: "",
                  department: "General Medicine",
                  date: "",
                })
              }
            >
              Clear
            </button>
            <button type='submit' className='submit-btn'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintPage;
