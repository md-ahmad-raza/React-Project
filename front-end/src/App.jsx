import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Component/Header";
import Navbar from "./Components/Component/Navbar";
import Footer from "./Components/Component/Footer";
import Home from "./Components/Pages/Home";
import AnnualCalendar from "./Components/Pages/AnnualCalender";
import Appointment from "./Components/Pages/Appointment";
import AboutDoctors from "./Components/Pages/AboutDoctors";
import About from "./Components/Pages/About";
import Gallery from "./Components/Pages/Gallery";
import Contact from "./Components/Pages/Contact";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Complain from "./Components/Pages/Complain";

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
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/complain' element={<Complain />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
