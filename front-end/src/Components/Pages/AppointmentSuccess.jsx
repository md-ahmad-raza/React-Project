import React from "react";
import "../Style/AppointmentSuccess.css"; // Import CSS file

const AppointmentSucess = () => {
  return (
    <div className='thankyou-body'>
      <div className='thank-you-container'>
        <h1>Thank You!</h1>
        <p>Your Appointment has been Booked successfully.</p>
        <a href='/'>Return to Home Page</a>
      </div>
    </div>
  );
};

export default AppointmentSucess;
