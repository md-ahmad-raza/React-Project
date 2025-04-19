import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/AboutDoctors.css";


// Doctor Data
const doctors = [
  {
    id: 1,
    name: "Dr.Smith",
    degree: "MBBS, MD- Surgeon",
    experience: "4 Yrs",
    about: "A surgeon specializing in comprehensive medical care.",
    image: "doctor1.png", // Use imported images
  },
  {
    id: 2,
    name: "Dr. Rabada",
    degree: "MBBS, MD- Orthopedics",
    experience: "2 Yrs",
    about: "Specialist in Orthopedic care and Rehabilitation.",
    image: "doctor2.png",
  },
  {
    id: 3,
    name: "Dr. Marya",
    degree: "MBBS, General Physician",
    experience: "2 Yrs",
    about: "Specialize in primary health care and chronic disease Management.",
    image: "doctor3.png",
  },
  {
    id: 4,
    name: "Dr.Sophie Taylor",
    degree: "BDS, Dental Care",
    experience: "3 Yrs",
    about: "A Dental Care Expert.",
    image: "doctor4.png",
  },
  {
    id: 5,
    name: "Dr.Kumar",
    degree: "MBBS, General physician",
    experience: "6 Yrs",
    about: "Expert in general health and chronic disease treatment.",
    image: "doctor5.png",
  },
];

const AboutDoctors = () => {
  const navigate = useNavigate();

  return (
    <div className='doctors-page'>
      <h2 className='title'>Our Doctors</h2>
      <div className='doctors-container'>
        {doctors.map((doctor) => (
          <div className='doctor-card' key={doctor.id}>
            <img
              src={doctor.image}
              alt={doctor.name}
              className='doctor-image'
            />
            <div className='doctor-info'>
              <h3 className='doctor-name'>{doctor.name}</h3>
              <p className='doctor-degree'>{doctor.degree}</p>
              <p>
                <strong>Experience:</strong> {doctor.experience}
              </p>
              <p>
                <strong>About:</strong> {doctor.about}
              </p>
              <button
                className='book-btn'
                onClick={() => navigate(`/appointment/${doctor.id}`)}
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutDoctors;
