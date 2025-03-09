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
          <button className='login-button'>
            <Link to='/login' className='nav-item'>
              Login
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
