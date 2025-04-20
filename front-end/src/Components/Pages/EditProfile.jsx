import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/EditProfile.css"; // Ensure this path matches your project structure

const EditProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock save logic; you can replace this with API call logic
    console.log("Updated Profile Data:", formData);
    alert("Profile updated successfully!");
    navigate("/profile");
  };

  return (
    <div className='edit-profile-page'>
      <div className='edit-profile-wrapper'>
        <h1 className='edit-profile-title'>Edit Profile</h1>
        <form onSubmit={handleSubmit} className='edit-profile-form'>
          <div className='input-group'>
            <label>Username:</label>
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className='input-group'>
            <label>Email:</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className='input-group'>
            <label>Phone:</label>
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className='edit-actions'>
            <button type='submit' className='save-btn'>
              Save
            </button>
            <button
              type='button'
              className='cancel-btn'
              onClick={() => navigate("/profile")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
