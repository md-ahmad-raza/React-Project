import { useNavigate } from "react-router-dom";
import "../Style/Profile.css";
const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session data or token
    localStorage.removeItem("authToken"); // Example for JWT token
    sessionStorage.clear(); // Clear session storage if used
    navigate("/logout"); // Navigate to the logout confirmation page
  };

  const handleteditProfile = () => {
    // Clear session data or token
    localStorage.removeItem("authToken"); // Example for JWT token
    sessionStorage.clear(); // Clear session storage if used
    navigate("/editProfile"); // Navigate to the logout confirmation page
  };

  return (
    <div className='profile-page'>
      <div className='profile-wrapper'>
        <h1 className='profile-title'>User Profile</h1>
        <div className='profile-details'>
          <div className='detail-item'>
            <label>Username:</label>
            <span>Ahmad Raza</span>
          </div>

          <div className='detail-item'>
            <label>Email:</label>
            <span>abc@example.com</span>
          </div>

          <div className='detail-item'>
            <label>Phone:</label>
            <span>+1 234 567 890</span>
          </div>
        </div>

        <div className='profile-actions'>
          <button className='edit-btn' onClick={handleteditProfile}>
            Edit Profile
          </button>
          <button className='logout-btn' onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
