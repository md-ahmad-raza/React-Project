import "../Style/Contact.css";

const ContactUs = () => {
  return (
    <div className='contact-us-container'>
      <h2 className='section-title'>Contact Us</h2>
      <p className='contact-description'>
        We love to hear from you! Reach out to us for any inquiries or feedback.
      </p>

      <div className='contact-content'>
        {/* Contact Form */}
        <div className='contact-form'>
          <h3>Get in Touch</h3>
          <form>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' placeholder='Your Name' />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' placeholder='Your Email' />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                rows='5'
                placeholder='Your Message'
              ></textarea>
            </div>
            <button type='submit' className='submit-button'>
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className='contact-info'>
          <h3>Our Address</h3>
          <p>1234 Healthcare Blvd, Wellness City, Country</p>
          <p>Email: contact@healthcare.com</p>
          <p>Phone: +1 234 567 890</p>

          <h3>Follow Us</h3>
          <div className='social-icons'>
            <a href='#' aria-label='Facebook'>
              <img src='facebook.png' alt='Facebook' />
            </a>
            <a href='#' aria-label='Twitter'>
              <img src='twitter.png' alt='Twitter' />
            </a>
            <a href='#' aria-label='Instagram'>
              <img src='instagram.png' alt='Instagram' />
            </a>
            <a href='#' aria-label='LinkedIn'>
              <img src='linkedin.png' alt='LinkedIn' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
