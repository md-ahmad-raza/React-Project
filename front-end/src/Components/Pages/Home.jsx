import { useState, useEffect } from "react";
// Combined CSS file for Home and Doctors components
import "../Style/Home.css";

const Home = () => {
  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselImages = [
    {
      src: "image1.png",
      caption: "Access World-Class Specialists Without Leaving Home",
    },
    { src: "image2.jpg", caption: "Healthcare at Your Fingertips" },
    { src: "image3.jpg", caption: "Your Health, Our Priority" },
    { src: "image4.jpg", caption: "Quality Medical Care, Anytime, Anywhere" },
    {
      src: "image5.jpg",
      caption: "Expert Consultations from the Comfort of Your Home",
    },
    { src: "image6.jpg", caption: "Bringing Healthcare Closer to You" },
    { src: "image7.jpg", caption: "Your Trusted Partner in Health" },
    { src: "image8.jpg", caption: "Book Appointments with Ease" },
    { src: "image9.jpg", caption: "Seamless Virtual Healthcare Experience" },
    { src: "image10.jpg", caption: "Personalized Care, Just a Click Away" },
  ];
  //git

  const latestNews = [
    "🚑 Emergency services are now 24/7!",
    "💉 Free health checkups this weekend.",
    "👩‍⚕️ New specialists have joined our team!",
    "🏥 Book your consultation online now!",
    "🗓 Health awareness camp on Sunday.",
    "🌟 Awarded the Best Healthcare Provider of the Year!",
    "📱 Download our app for easier appointments.",
    "🩺 New advanced diagnostic tools are now available.",
    "🏥 Grand opening of our new branch next week!",
    "💊 Special discounts on medicines this month.",
  ];
  const TopDoctors = [
    {
      name: "Dr.Smith",
      title: "MBBS, MD-Surgeon",
      image: "doctor1.png",
    },
    {
      name: "Dr Rabada",
      title: "MBSS, MD-Orthopedic",
      image: "doctor2.png",
    },
    {
      name: "Dr Marya",
      title: "MBBS, General Physician",
      image: "doctor3.png",
    },
    {
      name: "Dr.Sophie Taylor",
      title: " BDS, Dental Care",
      image: "doctor4.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 2000); // Change slide every 10 seconds
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className='home-container'>
      {/* Hero Section */}
      <div className='hero-section'>
        {/* Carousel */}
        <div className='carousel'>
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img src={image.src} alt={`Slide ${index + 1}`} />
              <div className='carousel-caption'>
                <h2>{image.caption}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Latest News */}
        <div className='latest-news'>
          <h3>Latest News</h3>
          <div className='news-container'>
            <div className='news-scroller'>
              {latestNews.map((news, index) => (
                <div className='news-item' key={index}>
                  {news}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className='features1-section'>
        <div className='feature1-card'>
          <h3>General Physician</h3>
          <p>
            We provides a range of non-surgical health care to patients by Top
            Doctors.
          </p>
          <a href='/doctors'>
            <button>See Doctors</button>
          </a>
        </div>
        <div className='feature1-card'>
          <h3>Surgeon</h3>
          <p>
            We performing surgical procedures to diagnose or treat diseases or
            injuries by the well experienced Doctors.
          </p>

          <a href='/doctors'>
            <button>See Doctors</button>
          </a>
        </div>
        <div className='feature1-card'>
          <h3>Dental Care</h3>
          <p>
            diagnose, prevent, and treat diseases and conditions of the teeth,
            gums, and mouth.
          </p>
          <a href='/doctors'>
            <button>See Doctors</button>
          </a>
        </div>
        <div className='feature1-card'>
          <h3>Orthopedics</h3>
          <p>
            we are carying the musculoskeletal system, which includes bones,
            joints, muscles, ligaments, and tendons.
          </p>
          <a href='/doctors'>
            <button>See Doctors</button>
          </a>
        </div>
      </div>
      {/* Featured Services Section */}
      <div className='featured-services'>
        <h2>Our Featured Services</h2>
        <p>
          We provide a range of top-notch healthcare services to cater to your
          needs.
        </p>
        <div className='services-container'>
          <div className='service-card'>
            <div className='service-icon'>
              <img src='service-icon1.png' alt='Icon 1' />
            </div>
            <h3>Cardiology</h3>
            <p>
              Advanced cardiac care with expert cardiologists and
              state-of-the-art technology.
            </p>
          </div>
          <div className='service-card'>
            <div className='service-icon'>
              <img src='service-icon2.png' alt='Icon 2' />
            </div>
            <h3>Pediatrics</h3>
            <p>Comprehensive health services for children and adolescents.</p>
          </div>
          <div className='service-card'>
            <div className='service-icon'>
              <img src='service-icon3.png' alt='Icon 3' />
            </div>
            <h3>Orthopedics</h3>
            <p>
              Exceptional care for bones, joints, and muscles with advanced
              treatments.
            </p>
          </div>
          <div className='service-card'>
            <div className='service-icon'>
              <img src='service-icon4.png' alt='Icon 4' />
            </div>
            <h3>Dental Care</h3>
            <p>
              High-quality dental care services with experienced professionals.
            </p>

            <p>
              High-quality dental care services with experienced professionals.
            </p>
          </div>
        </div>
      </div>
      {/* Doctors Section */}
      <section className='topdoctors-section'>
        <h2 className='section-title'>Top Doctors</h2>
        <div className='topdoctors-container'>
          {TopDoctors.map((doctor, index) => (
            <div className='topdoctors-card' key={index}>
              <img
                src={doctor.image}
                alt={doctor.name}
                className='topdoctors-image'
              />
              <h3 className='topdoctors-name'>{doctor.name}</h3>
              <p className='topdoctors-title'>{doctor.title}</p>
            </div>
          ))}
        </div>
      </section>
      ;
    </div>
  );
};

export default Home;
