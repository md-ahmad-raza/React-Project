import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../AdminStyle/AdminPanel.css";

const AdminPanel = () => {
  return (
    <div className='admin-panel-body'>
    <div className='container'>
      <div className='sidebar'>
        <h1>Admin Panel</h1>
        <ul>
          <li>
            <a href='/AllPatients'>Show All Patients</a>
          </li>
          <li>
            <a href='/NewPatients'>Show New Registered Patients</a>
          </li>
          <li>
            <a href='/EditDoctors'>Show All Doctors</a>
          </li>
          <li>
            <Link to='/AddDoctors'>Add Doctors</Link>
          </li>
          <li>
            <a href='/ShowComplainServlet'>Show Complains</a>
          </li>
          <li>
            <a href='/AdminLogOutServlet'>LogOut</a>
          </li>
        </ul>
      </div>

      <div className='main-content'>
        <h2>Welcome to the Admin Panel</h2>
        <p>
          Select an option from the sidebar to manage patients, doctors, add
          doctors or complaints.
        </p>
      </div>
    </div>
    </div>
  );
};

export default AdminPanel;
