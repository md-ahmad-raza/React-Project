import { useNavigate } from "react-router-dom";
import "../Style/Login.css"; // Your custom styling

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status === 200) {
        alert("Login successful!");

        // You can optionally check if user is admin here
        if (email === "abc@admin.com") {
          navigate("/adminPanel");
        } else {
          navigate("/"); // Redirect regular users
        }
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error("Login Error:", error);
    }
  };

  return (
    <div className='login-page'>
      <div className='login-wrapper'>
        <h1 className='login-title'>User Login Panel</h1>
        <div className='login-box'>
          <h2>Login Here</h2>

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
                  Don't have an account? <a href='/signup'>Signup</a>
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
