import "../Style/Signup.css"; // Separate CSS file for styling

const SignupPage = () => {
  return (
    <div className='login-page'>
      <div className='login-wrapper'>
        <h1 className='login-title'>User Signup Panel</h1>
        <div className='login-box'>
          <h2>Signup Here</h2>

          <form>
            <div className='input-group'>
              <label htmlFor='username'>
                <i className='icon-user'></i>
              </label>
              <input
                type='text'
                id='username'
                placeholder='e.g. username'
                required
              />
            </div>

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
              <label htmlFor='phone'>
                <i className='icon-phone'></i>
              </label>
              <input
                type='tel'
                id='phone'
                placeholder='e.g. Enter your phone number'
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
              Signup
            </button>

            <div className='login-link'>
              <p>
                <b>
                  Already have an account?/ <a href='login'>Login</a>
                </b>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
