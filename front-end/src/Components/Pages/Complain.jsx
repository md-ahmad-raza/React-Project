
import "../Style/Complain.css";

const ComplaintPage = () => {
  return (
    <div className="complaint-page">
      <div className="form-container">
        <h2 className="form-title">Complaint Management</h2>
        <form className="complaint-form">
          <div className="form-group">
            <label htmlFor="complaintId">Complaint ID</label>
            <input type="text" id="complaintId" placeholder="Enter complaint ID" disabled />
          </div>
          <div className="form-group">
            <label htmlFor="patientName">Patient Name</label>
            <input type="text" id="patientName" placeholder="Enter patient name" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" placeholder="Enter complaint description" rows="4"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <select id="department">
              <option>General Medicine</option>
              <option>Cardiology</option>
              <option>Orthopedics</option>
              <option>Pediatrics</option>
              <option>Dental</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" />
          </div>
        
          <div className="form-buttons">
          <button type='reset' className='reset-btn'>
              Clear
            </button>
            <button type='submit' className='submit-btn'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintPage;
