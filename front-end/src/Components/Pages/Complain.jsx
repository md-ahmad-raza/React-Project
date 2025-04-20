import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Style/Complain.css";

const ComplaintPage = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    description: "",
    department: "General Medicine", // default value
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { patientName, description, department, date } = formData;

    if (patientName && description && department && date) {
      try {
        const response = await fetch(
          "http://localhost:3000/api/complaints/insert",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              PatientName: patientName,
              Description: description,
              Departments: department,
              Date: date,
            }),
          }
        );

        const result = await response.json();

        if (response.ok) {
          toast.success("Complaint submitted successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // Reset form after successful submission
          setFormData({
            patientName: "",
            description: "",
            department: "General Medicine",
            date: "",
          });
        } else {
          toast.error("Failed to submit complaint: " + result.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } catch (error) {
        console.error("Error submitting complaint:", error);
        toast.error("An error occurred while submitting the complaint.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.warning("Please fill in all fields.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className='complaint-page'>
      <ToastContainer />
      <div className='form-container'>
        <h2 className='form-title'>Complaint Box</h2>
        <form className='complaint-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='complaintId'>Complaint ID</label>
            <input
              type='text'
              id='complaintId'
              placeholder='Auto-generated'
              disabled
            />
          </div>
          <div className='form-group'>
            <label htmlFor='patientName'>Patient Name</label>
            <input
              type='text'
              id='patientName'
              placeholder='Enter patient name'
              value={formData.patientName}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <textarea
              id='description'
              placeholder='Enter complaint description'
              rows='4'
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className='form-group'>
            <label htmlFor='department'>Department</label>
            <select
              id='department'
              value={formData.department}
              onChange={handleChange}
            >
              <option>General Medicine</option>
              <option>Cardiology</option>
              <option>Orthopedics</option>
              <option>Pediatrics</option>
              <option>Dental</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='date'>Date</label>
            <input
              type='date'
              id='date'
              value={formData.date}
              onChange={handleChange}
            />
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
