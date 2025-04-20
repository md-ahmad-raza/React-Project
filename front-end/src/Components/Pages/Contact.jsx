import { useState } from "react";
import "../Style/Contact.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"; // Optional: for better user messages
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (name && email && message) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/feedback/insert",
          {
            Name: name,
            Email: email,
            Message: message,
          }
        );

        if (response.status === 201) {
          toast.success("Feedback sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // clear form
        } else {
          toast.error("Failed to send feedback.");
        }
      } catch (error) {
        console.error("Error sending feedback:", error);
        toast.error("An error occurred while sending feedback.");
      }
    } else {
      toast.warning("Please fill in all fields.");
    }
  };

  return (
    <div className='contact-us-container'>
      <ToastContainer position='top-center' autoClose={3000} />
      <h2 className='section-title'>Contact Us</h2>
      <p className='contact-description'>
        We love to hear from you! Reach out to us for any inquiries or feedback.
      </p>

      <div className='contact-content'>
        {/* Contact Form */}
        <div className='contact-form'>
          <h3>Give Feedback</h3>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                placeholder='Your Email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                rows='5'
                placeholder='Your Message'
                value={formData.message}
                onChange={handleChange}
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
          <p>123 AirPort main Road, Wellness City, Janakpur</p>
          <p>Email: contact@healthcare.com</p>
          <p>Phone: +977 234 567 8910</p>

          <h3>Follow Us</h3>
          <div className='social-icons'>
            <a href='#' aria-label='Facebook'>
              <img src='facebook.png' alt='Facebook' />
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
