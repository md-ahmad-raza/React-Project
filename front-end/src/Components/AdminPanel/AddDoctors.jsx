// AddDoctors.jsx
import React, { useState } from "react";
import "../AdminStyle/Add Doctors.css";

const AddDoctors = () => {
  const [doctorData, setDoctorData] = useState({
    name: "",
    degree: "",
    experience: "",
    about: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Added:", doctorData);
    alert("Doctor successfully added!");
    setDoctorData({
      name: "",
      degree: "",
      experience: "",
      about: "",
      image: "",
    });
  };

  return (
    <div className='add-doctor-page'>
      <h2 className='title'>Add a New Doctor</h2>
      <form className='add-doctor-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Doctor Name'
          value={doctorData.name}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='degree'
          placeholder='Degree'
          value={doctorData.degree}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='experience'
          placeholder='Experience (e.g., 5 Yrs)'
          value={doctorData.experience}
          onChange={handleChange}
          required
        />
        <textarea
          name='about'
          placeholder='About the Doctor'
          value={doctorData.about}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='image'
          placeholder='Image URL'
          value={doctorData.image}
          onChange={handleChange}
        />
        <button type='submit' className='submit-btn'>
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctors;
