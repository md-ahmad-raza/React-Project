import { useState } from "react";
import "../Style/About-us.css"; // Separate CSS file for About Us

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleLearnMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className='about-us'>
      <div className='about-content'>
        <div className='about-text'>
          <h2>About Us</h2>
          <p>
            Welcome to our healthcare center, where your health and well-being
            are our top priorities. With a team of world-class specialists,
            cutting-edge facilities, and a patient-centric approach, we strive
            to provide unparalleled care to our community.
          </p>
          <p>
            Our journey began with a vision to revolutionize healthcare services
            by integrating compassion, technology, and expertise. Today, we are
            proud to be recognized as one of the leading healthcare providers.
          </p>
          {showMore && (
            <>
              <p>
                At the core of our mission lies the belief that every individual
                deserves access to quality healthcare. This is why we
                continuously invest in advanced medical equipment, training
                programs, and expanding our services to meet the growing needs
                of our patients.
              </p>
              <p>
                We take pride in fostering an environment where innovation and
                empathy go hand in hand, ensuring our patients receive
                personalized care in a safe and comfortable setting.
              </p>
              <p>
                Our dedicated team is here to support you on your health
                journey, offering preventive care, diagnostics, treatments, and
                follow-up care to help you achieve optimal well-being.
              </p>
            </>
          )}
          <button className='learn-more' onClick={toggleLearnMore}>
            {showMore ? "Show Less" : "Learn More"}
          </button>
        </div>
        <div className='about-image'>
          <img src='About.png' alt='About Us' className='responsive-image' />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
