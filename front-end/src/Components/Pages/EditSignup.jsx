import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/EditSignup.css";

const EditSignup = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/signup/view")
      .then((res) => {
        const user = res.data.data.find((u) => u._id === id);
        if (user) setFormData(user);
      })
      .catch((err) => console.error("Failed to load user", err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/api/signup/update/${id}`,
        formData
      );
      alert("User updated successfully");
      navigate("/signup-list");
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div className='edit-user'>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        {["username", "email", "phone", "password"].map((field) => (
          <div key={field}>
            <label>{field}</label>
            <input
              id={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type='submit'>Update</button>
      </form>
    </div>
  );
};

export default EditSignup;
