import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/AboutDoctors.css"; // ✅ Make sure this path is correct

const AboutDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/addDoctors/view")
      .then((res) => res.json())
      .then((data) => {
        if (data.doctors) {
          setDoctors(data.doctors);
        } else {
          console.error("No doctors found in response");
        }
      })
      .catch((err) => {
        console.error("Failed to load doctors:", err);
      });
  }, []);

  return (
    <div className='doctors-page'>
      <h2 className='title'>Our Doctors</h2>
      <div className='doctors-container'>
        {doctors.length > 0 ? (
          doctors.map((doctor) => (
            <div className='doctor-card' key={doctor._id}>
              <img
                src={doctor.Image}
                alt={doctor.DoctorName}
                className='doctor-image'
              />
              <div className='doctor-info'>
                <h3 className='doctor-name'>{doctor.DoctorName}</h3>
                <p className='doctor-degree'>{doctor.Degree}</p>
                <p>
                  <strong>Experience:</strong> {doctor.Experience}
                </p>
                <p>
                  <strong>About:</strong> {doctor.About}
                </p>
                <button
                  className='book-btn'
                  onClick={() => navigate(`/appointment/${doctor._id}`)}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No doctors available</p>
        )}
      </div>
    </div>
  );
};

export default AboutDoctors;
