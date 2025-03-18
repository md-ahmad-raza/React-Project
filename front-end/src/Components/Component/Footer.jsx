import "./Footer.css"; // Import the CSS file for styles

const Footer = () => {
  return (
    <>
      <footer className='footer-container'>
        <div className='footer-grid'>
          {/* Navigation Links */}
          <div>
            <h4 className='footer-title'>Navigation</h4>
            <ul className='footer-links'>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/about'>About</a>
              </li>
              <li>
                <a href='/gallery'>Gallery</a>
              </li>
              <li>
                <a href='/contact'>Contact Us</a>
              </li>
              <li>
                <a href='/calendar'>Annual Calendar</a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className='social-icons'>
            <a href='#' className='icon'>
              <img src='./facebook.png' alt='Facebook' className='icon-img' />
            </a>

            <a href='#' className='icon'>
              <img src='./linkedin.png' alt='LinkedIn' className='icon-img' />
            </a>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className='footer-title'>Contact</h4>
            <ul className='footer-links'>
              <li className='contact-item'>
                <img
                  src='./email.png'
                  alt='Email Icon'
                  className='contact-icon'
                />
                abc@gmail.com
              </li>
              <li className='contact-item'>
                <img
                  src='./phone.png'
                  alt='Phone Icon'
                  className='contact-icon'
                />
                9999955555
              </li>
              <li className='contact-item'>
                <img
                  src='./address.png'
                  alt='Address Icon'
                  className='contact-icon'
                />
                AirPort main Road, Janakpur
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
      </footer>
      <div className='footer-bottom'>
        © abc Hospital & Research Center 2025 All rights reserved
      </div>
    </>
  );
};

export default Footer;
