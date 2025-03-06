import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Component/Header";
import Navbar from "./Components/Component/Navbar";
import Footer from "./Components/Component/Footer";
import Home from "./Components/Pages/Home";
import AnnualCalendar from "./Components/Pages/AnnualCalender";
import Appointment from "./Components/Pages/Appointment";
import AboutDoctors from "./Components/Pages/AboutDoctors";
import About from "./Components/Pages/About-us";


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calendar' element={<AnnualCalendar />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/appointment/:doctorId' element={<Appointment />} />{" "}
          <Route path='/doctors' element={<AboutDoctors />} />
          <Route path='/about' element={<About-us/>} />
          <Route path='/complain' element={<h2>Complain Page</h2>} />
          <Route path='/login' element={<h2>Login Page</h2>} />
          <Route path='/gallery' element={<h2>Gallery Page</h2>} />
          <Route path='/contact' element={<h2>Contact Us</h2>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
