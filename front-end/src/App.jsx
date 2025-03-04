import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Component/Header";
import Navbar from "./Components/Component/Navbar";
import Footer from "./Components/Component/Footer";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Navbar />
        <Routes>
          {/* Define your routes properly */}
          <Route path='/' element={<Home />} />
          <Route path='/complain' element={<h2>Complain Page</h2>} />
          <Route path='/login' element={<h2>Login Page</h2>} />
          <Route path='/calendar' element={<h2>Annual Calendar</h2>} />
          <Route path='/appointment' element={<h2>Appointment Page</h2>} />
          <Route path='/events' element={<h2>Events Page</h2>} />
          <Route path='/about' element={<h2>About Us</h2>} />
          <Route path='/gallery' element={<h2>Gallery Page</h2>} />
          <Route path='/contact' element={<h2>Contact Us</h2>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
