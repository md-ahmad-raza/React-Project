import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../AdminStyle/ContactList.css";

const ContactList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedData, setEditedData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/feedback/view"
      );
      const feedbackData = Array.isArray(response.data)
        ? response.data
        : response.data.data;
      setFeedbacks(feedbackData);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
      toast.error("Failed to load feedback list.");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedData({ ...feedbacks[index] });
  };

  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/feedback/update/${id}`,
        editedData
      );
      if (response.status === 200) {
        toast.success("Feedback updated successfully!");
        setEditIndex(null);
        fetchFeedbacks();
      }
    } catch (error) {
      console.error("Error updating feedback:", error);
      toast.error("Failed to update feedback.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      try {
        await axios.delete(`http://localhost:3000/api/feedback/delete/${id}`);
        toast.success("Feedback deleted successfully!");
        fetchFeedbacks();
      } catch (error) {
        console.error("Error deleting feedback:", error);
        toast.error("Failed to delete feedback.");
      }
    }
  };

  return (
    <div className='contact-list-container'>
      <ToastContainer position='top-center' autoClose={3000} />

      <h2 className='section-title'>Feedback Received</h2>

      <div className='feedback-list'>
        {feedbacks.length > 0 ? (
          feedbacks.map((fb, index) => (
            <div className='feedback-card' key={fb._id}>
              {editIndex === index ? (
                <>
                  <input
                    type='text'
                    name='Name'
                    value={editedData.Name}
                    onChange={handleChange}
                  />
                  <input
                    type='email'
                    name='Email'
                    value={editedData.Email}
                    onChange={handleChange}
                  />
                  <textarea
                    name='Message'
                    rows='3'
                    value={editedData.Message}
                    onChange={handleChange}
                  ></textarea>
                  <div className='feedback-actions'>
                    <button
                      className='update-button'
                      onClick={() => handleUpdate(fb._id)}
                    >
                      Update
                    </button>
                    <button
                      className='cancel-button'
                      onClick={() => setEditIndex(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h4>{fb.Name}</h4>
                  <p>
                    <strong>Email:</strong> {fb.Email}
                  </p>
                  <p>
                    <strong>Message:</strong> {fb.Message}
                  </p>
                  <div className='feedback-actions'>
                    <button
                      className='edit-button'
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className='delete-button'
                      onClick={() => handleDelete(fb._id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p className='no-feedback'>No feedback available.</p>
        )}
      </div>

      <div className='back-to-panel'>
        <Link to='/adminPanel' className='back-link'>
          ← Back to Admin Panel
        </Link>
      </div>
    </div>
  );
};

export default ContactList;
