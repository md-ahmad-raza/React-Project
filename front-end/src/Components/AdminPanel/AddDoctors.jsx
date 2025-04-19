import React, { useState } from "react";

import "../AdminStyle/Add Doctors.css";

const AddDoctors = () => {
  const [doctorData, setDoctorData] = useState({
    name: "",
    degree: "",
    experience: "",
    about: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDoctorData({ ...doctorData, image: reader.result });
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      DoctorName: doctorData.name,
      Degree: doctorData.degree,
      Experience: doctorData.experience,
      About: doctorData.about,
      Image: doctorData.image,
    };

    try {
      const res = await fetch("http://localhost:3000/api/addDoctors/insert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      console.log("Server response:", result); // ✅ Add this to debug

      if (res.ok && result.success) {
        alert("Doctor successfully added!");
        setDoctorData({
          name: "",
          degree: "",
          experience: "",
          about: "",
          image: null,
        });
        setPreview(null);
      } else {
        alert(result.message || "Failed to add doctor.");
      }
    } catch (error) {
      console.error("Error adding doctor:", error);
      alert("Something went wrong while adding doctor.");
    }
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
        <input type='file' accept='image/*' onChange={handleImageChange} />

        {preview && (
          <div className='image-preview'>
            <img src={preview} alt='Doctor Preview' />
          </div>
        )}

        <button type='submit' className='submit-btn1'>
          Add Doctor
        </button>

        
      </form>
      
    </div>
  );
};

export default AddDoctors;
