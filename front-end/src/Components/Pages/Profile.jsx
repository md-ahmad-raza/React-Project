// Profile.jsx
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Style/Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/logout");
  };

  return (
    <div className='profile-page'>
      <div className='profile-wrapper'>
        <h1 className='profile-title'>User Profile</h1>
        <div className='profile-details'>
          <div className='detail-item'>
            <label>Username:</label>
            <span>{userData.username}</span>
          </div>
          <div className='detail-item'>
            <label>Email:</label>
            <span>{userData.email}</span>
          </div>
          <div className='detail-item'>
            <label>Phone:</label>
            <span>{userData.phone}</span>
          </div>
        </div>

        <div className='profile-actions'>
          <button className='logout-btn' onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
