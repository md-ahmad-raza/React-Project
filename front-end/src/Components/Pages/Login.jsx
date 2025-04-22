import { useNavigate } from "react-router-dom";
import "../Style/Login.css"; // Separate CSS file for styling

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Example logic for redirection based on email type
    if (email === "admin@gmail.com" && password === "123") {
      navigate("/adminPanel");
    } else {
      navigate("/");
    }
  };

  return (
    <div className='login-page'>
      <div className='login-wrapper'>
        <h1 className='login-title'>Login Here</h1>
        <div className='login-box'>
          <form onSubmit={handleLogin}>
            <div className='input-group'>
              <label htmlFor='email'>
                <i className='icon-envelope'></i>
              </label>
              <input
                type='email'
                id='email'
                name='email'
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
                name='password'
                placeholder='e.g. password'
                required
              />
            </div>
            <button type='submit' className='login-btn'>
              Login
            </button>
            <div className='login-link'>
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
