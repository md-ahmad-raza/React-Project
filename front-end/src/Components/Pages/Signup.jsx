import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/Signup.css";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/signup/insert", formData);
      alert("registered successfully");
      setFormData({ username: "", email: "", phone: "", password: "" });

      navigate("/"); // Redirect to homepage after signup
    } catch (err) {
      alert("Signup failed");
      console.error(err);
    }
  };

  return (
    <div className='login-page'>
      <div className='login-wrapper'>
        <h1 className='login-title'>User Signup Panel</h1>
        <div className='login-box'>
          <h2>Signup Here</h2>
          <form onSubmit={handleSubmit}>
            {["username", "email", "phone", "password"].map((field) => (
              <div className='input-group' key={field}>
                <input
                  type={
                    field === "email"
                      ? "email"
                      : field === "password"
                      ? "password"
                      : "text"
                  }
                  id={field}
                  placeholder={`Enter your ${field}`}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            <button type='submit' className='login-btn'>
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
