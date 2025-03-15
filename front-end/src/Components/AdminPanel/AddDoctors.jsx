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

  const [preview, setPreview] = useState(null); // For image preview

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDoctorData({ ...doctorData, image: file });
      setPreview(URL.createObjectURL(file)); // Preview the selected image
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!doctorData.image) {
      alert("Please select an image before submitting.");
      return;
    }

    console.log("Doctor Added:", doctorData);
    alert("Doctor successfully added!");

    // Reset data and preview after submission
    setDoctorData({
      name: "",
      degree: "",
      experience: "",
      about: "",
      image: null,
    });

    setPreview(null);
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

        {/* Image Upload Section */}
        <input type='file' accept='image/*' onChange={handleImageChange} />

        {/* Image Preview */}
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
