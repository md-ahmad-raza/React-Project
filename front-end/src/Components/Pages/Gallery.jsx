
  import "../Style/Gallery.css"; // Import the custom CSS file

  const Gallery = () => {
    const items = [
      { title: "Your Health", subtitle: "Operation Theatre", image: "gallery1.png" },
      { title: "Procedures", subtitle: "We Perform Some Of The Latest, Cutting-Edge Surgic", image: "gallery2.png" },
      { title: "Recreation Centre", subtitle: "Pathology", image: "gallery3.png" },
      { title: "Specialities", subtitle: "Health Offers Superspecialist Care In Over 30 Medi", image: "gallery4.png" },
      { title: "Hospitals and Directions", subtitle: "One of India’s Largest Hospital Network with Ove", image: "gallery5.png" },
      { title: "Health & Wellness", subtitle: "The choices you make each day can have a huge effe", image: "gallery6.png" },
      { title: "Emergency Services", subtitle: "24/7 Emergency Support", image: "gallery7.png" },
      { title: "Pharmacy", subtitle: "Get Medicines Easily and Quickly", image: "gallery8.png" },
      { title: "Diagnostics", subtitle: "State-of-the-Art Diagnostic Facilities", image: "gallery9.png" },
      { title: "Outpatient Services", subtitle: "Efficient and Accessible Outpatient Care", image: "gallery10.png" },
      { title: "Pediatrics", subtitle: "Comprehensive Child Health Services", image: "gallery11.png" },
      { title: "Orthopedics", subtitle: "Expert Care for Bones and Joints", image: "gallery12.png" },
      { title: "Cardiology", subtitle: "Advanced Heart Care", image: "gallery13.png" },
      { title: "Neurology", subtitle: "Specialized Neurological Services", image: "gallery14.png" },
      { title: "Dermatology", subtitle: "Skin Care by Experts", image: "gallery15.png" },
      { title: "Mental Health", subtitle: "Support for Emotional Well-Being", image: "gallery16.png" },
    ];
    

    return (
      <div className="gallery-container">
        {items.map((item, index) => (
          <div key={index} className="gallery-card">
            <img src={item.image} alt={item.title} className="gallery-image" />
            <div className="gallery-overlay">
              <h3 className="gallery-title">{item.title}</h3>
              <p className="gallery-subtitle">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default Gallery;
