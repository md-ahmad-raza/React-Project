import "../Style/Logout.css";

const Logout = () => {
  return (
    <div className='logout-page'>
      <div className='logout-wrapper'>
        <h1 className='logout-title'>Logout Successful</h1>
        <div className='logout-box'>
          <p>You have successfully logged out.</p>
          <a href='/login' className='back-to-login'>
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Logout;
