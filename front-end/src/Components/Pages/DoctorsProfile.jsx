import React from "react";
import { useParams } from "react-router-dom";
import "../Style/DoctorsProfile.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Smith",
    department: "Cardiology",
    experience: "15 Years",
    about:
      "Dr. Smith is a highly experienced cardiologist specializing in heart diseases and treatments. He has successfully treated thousands of patients and continues to contribute to medical research.",
    image: "doctor1.png",
  },
  {
    id: 2,
    name: "Dr. Rabada",
    department: "Dermatology",
    experience: "10 Years",
    about:
      "Dr. Rabada is a leading dermatologist with expertise in skin treatments and cosmetic dermatology.",
    image: "doctor2.png",
  },
];

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return <h2>Doctor not found!</h2>;
  }

  return (
    <div className='doctor-profile'>
      <div className='profile-card'>
        <img src={doctor.image} alt={doctor.name} className='profile-img' />
        <h2>{doctor.name}</h2>
        <p className='department'>{doctor.department}</p>
        <p className='experience'>Experience: {doctor.experience}</p>
        <p className='about'>{doctor.about}</p>
        <button className='appointment-btn'>Book Appointment</button>
      </div>
    </div>
  );
};

export default DoctorProfile;
