import React, { useState } from "react";
import "../AdminStyle/AllPatients.css";

const Patients = [
  {
    id: 1,
    name: "Apple",
    email: "a@gmail.com",
    phone: "1111122222",
    date: "10 Jan 2025",
    time: "10:00 PM",
  },
  {
    id: 2,
    name: "Mango",
    email: "b@gmail.com",
    phone: "3333344444",
    date: "11 Jan 2025",
    time: "11:00 AM",
  },
  {
    id: 3,
    name: "Banana",
    email: "c@gmail.com",
    phone: "5555566666",
    date: "12 Jan 2025",
    time: "09:00 AM",
  },
  {
    id: 4,
    name: "Orange",
    email: "d@gmail.com",
    phone: "7777788888",
    date: "13 Jan 2025",
    time: "02:00 PM",
  },
  {
    id: 5,
    name: "Grapes",
    email: "e@gmail.com",
    phone: "9999900000",
    date: "14 Jan 2025",
    time: "04:00 PM",
  },
];

const EditPatients = () => {
  const [patientData, setPatientData] = useState(Patients);
  const [editMode, setEditMode] = useState(null);

  const handleChange = (id, field, value) => {
    const updatedPatients = patientData.map((patient) =>
      patient.id === id ? { ...patient, [field]: value } : patient
    );
    setPatientData(updatedPatients);
  };

  const handleEdit = (id) => {
    setEditMode(id);
  };

  const handleSave = (id) => {
    setEditMode(null);
    alert(`Patient ID: ${id} edited successfully!`);
  };

  const handleDelete = (id) => {
    const updatedPatients = patientData.filter((patient) => patient.id !== id);
    setPatientData(updatedPatients);
    alert(`Patient ID: ${id} deleted successfully!`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Patient Data:", patientData);
    alert("Patient details updated successfully!");
  };

  return (
    <div className='edit-patients-page'>
      <h2 className='title'>Patients CRUD Operation</h2>
      <h3 className='title-text'>Edit, Delete, Update</h3>

      <form className='edit-patients-form' onSubmit={handleSubmit}>
        <table className='patients-table'>
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patientData.map((patient) => (
              <tr key={patient.id}>
                <td>
                  <input
                    type='text'
                    value={patient.name}
                    onChange={(e) =>
                      handleChange(patient.id, "name", e.target.value)
                    }
                    placeholder='Patient Name'
                    disabled={editMode !== patient.id}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={patient.email}
                    onChange={(e) =>
                      handleChange(patient.id, "email", e.target.value)
                    }
                    placeholder='Email'
                    disabled={editMode !== patient.id}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={patient.phone}
                    onChange={(e) =>
                      handleChange(patient.id, "phone", e.target.value)
                    }
                    placeholder='Phone'
                    disabled={editMode !== patient.id}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={patient.date}
                    onChange={(e) =>
                      handleChange(patient.id, "date", e.target.value)
                    }
                    placeholder='Date'
                    disabled={editMode !== patient.id}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={patient.time}
                    onChange={(e) =>
                      handleChange(patient.id, "time", e.target.value)
                    }
                    placeholder='Time'
                    disabled={editMode !== patient.id}
                  />
                </td>
                <td className='actions'>
                  {editMode === patient.id ? (
                    <button
                      type='button'
                      className='save-btn'
                      onClick={() => handleSave(patient.id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      type='button'
                      className='edit-btn'
                      onClick={() => handleEdit(patient.id)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    type='button'
                    className='delete-btn'
                    onClick={() => handleDelete(patient.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button type='submit' className='submit-btn'>
          Update Patients
        </button>
      </form>
    </div>
  );
};

export default EditPatients;
