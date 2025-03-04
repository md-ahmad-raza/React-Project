import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link className='navbar-logo'>Doctor Appointment Book</Link>
        <button className='menu-toggle' onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? "mobile-menu" : ""}`}>
          <li>
            <Link to='/' className='nav-item'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/calender' className='nav-item'>
              Annual Calendar
            </Link>
          </li>
          <li>
            <Link to='/apointment' className='nav-item'>
              Appointment
            </Link>
          </li>
          <li>
            <Link to='/events' className='nav-item'>
              About Doctors
            </Link>
          </li>
          <li>
            <Link to='/about' className='nav-item'>
              About Us
            </Link>
          </li>
          <li>
            <Link to='/gallery' className='nav-item'>
              Gallery
            </Link>
          </li>
          <li>
            <Link to='/contact' className='nav-item'>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
