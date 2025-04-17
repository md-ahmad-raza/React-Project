import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-left'>
          <a href='mailto:smarthospitalrc@gmail.com' className='email-link'>
            📧 abc@gmail.com
          </a>
        </div>
        <div className='header-right'>
          <Link to='/profile' className='profile-link'>
            👤 Profile
          </Link>

          <Link to='/complain' className='complain-link'>
            📝 Complain
          </Link>

          {/* Corrected Login Button */}
          <Link to='/login' className='login-button'>
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
