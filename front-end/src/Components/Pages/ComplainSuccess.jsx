import React from "react";
import "../Style/ComplainSucess.css"; // Import CSS file

const ComplainSuccess = () => {
  return (
    <div className='thankyou-body'>
      <div className='thank-you-container'>
        <h1>Thank You!</h1>
        <p>Your Complaint has been Submited successfully.</p>
        <a href='/'>Return to Home Page</a>
      </div>
    </div>
  );
};

export default ComplainSuccess;
