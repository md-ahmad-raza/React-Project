import React from "react";
import { Link } from "react-router-dom";
import "../AdminStyle/AdminPanel.css";

const AdminPanel = () => {
  return (
    <div className='admin-panel-body'>
      <div className='container'>
        <div className='sidebar'>
          <h1>Admin Panel</h1>
          <ul>
            <li>
              <a href='/appointmentList'>Show All Patients</a>
            </li>
            <li>
              <a href='/newAppointments'>Show New Registered Patients</a>
            </li>
            <li>
              <a href='/allDoctorsList'>Show All Doctors</a>
            </li>
            <li>
              <Link to='/addDoctors'>Add Doctors</Link>
            </li>
            <li>
              <a href='/complainList'>Show Complaints</a>
            </li>

            <li>
              <a href='/contactList'>Show FeedBack</a>
            </li>

            <li>
              <a href='/login' className='logout-btn'>
                LogOut
              </a>
            </li>
          </ul>
        </div>

        <div className='main-content'>
          <h2>Welcome to the Admin Panel</h2>
          <p>
            Select an option from the sidebar to manage patients, doctors, or
            complaints and feedback.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
