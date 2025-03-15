import React, { useState } from "react";
import "../AdminStyle/EditDoctors.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Smith",
    degree: "MBBS, MD- Surgeon",
    experience: "4 Yrs",
    about: "A surgeon specializing in comprehensive medical care.",
    image: "doctor1.png",
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
    about: "Specializes in primary healthcare and chronic disease management.",
    image: "doctor3.png",
  },
  {
    id: 4,
    name: "Dr. Sophie Taylor",
    degree: "BDS, Dental Care",
    experience: "3 Yrs",
    about: "A Dental Care Expert.",
    image: "doctor4.png",
  },
  {
    id: 5,
    name: "Dr. Kumar",
    degree: "MBBS, General Physician",
    experience: "6 Yrs",
    about: "Expert in general health and chronic disease treatment.",
    image: "doctor5.png",
  },
];

const EditDoctors = () => {
  const [doctorData, setDoctorData] = useState(doctors);
  const [editMode, setEditMode] = useState(null);

  const handleChange = (id, field, value) => {
    const updatedDoctors = doctorData.map((doctor) =>
      doctor.id === id ? { ...doctor, [field]: value } : doctor
    );
    setDoctorData(updatedDoctors);
  };

  const handleEdit = (id) => {
    setEditMode(id);
  };

  const handleSave = (id) => {
    setEditMode(null);
    alert(`Doctor ID: ${id} edited successfully!`);
  };

  const handleDelete = (id) => {
    const updatedDoctors = doctorData.filter((doctor) => doctor.id !== id);
    setDoctorData(updatedDoctors);
    alert(`Doctor ID: ${id} deleted successfully!`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Doctor Data:", doctorData);
    alert("Doctor details updated successfully!");
  };

  return (
    <div className='edit-doctors-page'>
      <h2 className='title'>Doctors CRUD Operation</h2>
      <h3 className='title-text'>Edit, Delete, Update</h3>
      <form className='edit-doctors-form' onSubmit={handleSubmit}>
        <table className='doctor-table'>
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Degree</th>
              <th>Experience</th>
              <th>About</th>
              <th>Image URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctorData.map((doctor) => (
              <tr key={doctor.id}>
                <td>
                  <input
                    type='text'
                    value={doctor.name}
                    onChange={(e) =>
                      handleChange(doctor.id, "name", e.target.value)
                    }
                    placeholder='Doctor Name'
                    disabled={editMode !== doctor.id}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={doctor.degree}
                    onChange={(e) =>
                      handleChange(doctor.id, "degree", e.target.value)
                    }
                    placeholder='Degree'
                    disabled={editMode !== doctor.id}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={doctor.experience}
                    onChange={(e) =>
                      handleChange(doctor.id, "experience", e.target.value)
                    }
                    placeholder='Experience'
                    disabled={editMode !== doctor.id}
                  />
                </td>
                <td>
                  <textarea
                    value={doctor.about}
                    onChange={(e) =>
                      handleChange(doctor.id, "about", e.target.value)
                    }
                    placeholder='About the Doctor'
                    disabled={editMode !== doctor.id}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={doctor.image}
                    onChange={(e) =>
                      handleChange(doctor.id, "image", e.target.value)
                    }
                    placeholder='Image URL'
                    disabled={editMode !== doctor.id}
                  />
                </td>
                <td className='actions'>
                  {editMode === doctor.id ? (
                    <button
                      type='button'
                      className='save-btn'
                      onClick={() => handleSave(doctor.id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      type='button'
                      className='edit-btn'
                      onClick={() => handleEdit(doctor.id)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    type='button'
                    className='delete-btn'
                    onClick={() => handleDelete(doctor.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button type='submit' className='submit-btn'>
          Update Doctors
        </button>
      </form>
    </div>
  );
};

export default EditDoctors;
