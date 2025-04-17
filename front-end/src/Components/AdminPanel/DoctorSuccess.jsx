import React from "react";
import "../AdminPanel/DoctorSuccess.css"; // Import CSS file

const AppointmentSucess = () => {
  return (
    <div className='thankyou-body'>
      <div className='thank-you-container'>
        <h1>Thank You!</h1>
        <p>Doctor has been Added successfully.</p>
        <a href='/AdminPanel.jsx'>Return to Admin Panel</a>
      </div>
    </div>
    //
  );
};

export default AppointmentSucess;
