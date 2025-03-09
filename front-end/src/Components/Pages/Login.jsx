import "../Style/Login.css"; // Separate CSS file for styling

const LoginPage = () => {
  return (
    <div className='login-page'>
      <div className='login-wrapper'>
        <h1 className='login-title'>User Login Panel</h1>
        <div className='login-box'>
          <h2>Login Here</h2>

          <form>
              <div className='input-group'>
              <label htmlFor='email'>
                <i className='icon-envelope'></i>
              </label>
              <input
                type='email'
                id='email'
                placeholder='e.g. email@example.com'
                required
              />
            </div>
            <div className='input-group'>
              <label htmlFor='password'>
                <i className='icon-lock'></i>
              </label>
              <input
                type='password'
                id='password'
                placeholder='e.g. password'
                required
              />
            </div>
            <button type='submit' className='login-btn'>
              Login
            </button>
            <div class='login-link'>
              <p>
                <b>
                  Don't have an account?/ <a href='/signup'>Signup</a>
                </b>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
