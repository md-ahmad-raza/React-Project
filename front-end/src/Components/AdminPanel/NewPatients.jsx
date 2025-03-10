import React from "react";
import "../AdminStyle/NewPatients.css";

const ShowNewRegisteredPatients = ({ patients = [] }) => {
  return (
    <div className='new-patients-container'>
      <h2 className='title'>Newly Registered Patients</h2>
      {patients.length === 0 ? (
        <p className='no-data'>No new patients registered.</p>
      ) : (
        <table className='patients-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.email}</td>
                <td>{patient.phone}</td>
                <td>{patient.date}</td>
                <td>{patient.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowNewRegisteredPatients;
