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
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import AllPatients from "./Components/AdminPanel/AllPatients";
import NewPatients from "./Components/AdminPanel/NewPatients";
import AddDoctors from "./Components/AdminPanel/AddDoctors";
import EditDoctors from "./Components/AdminPanel/EditDoctors";

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
          <Route path='/appointment/:doctorId' element={<Appointment />} />
          <Route path='/doctors' element={<AboutDoctors />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/complain' element={<Complain />} />
          {/* AdminPanel */}
          <Route path='/adminPanel' element={<AdminPanel />} />
          <Route path='/adminPanel' element={<AllPatients  />} />
          <Route path='/adminPanel' element={<NewPatients />} />
          <Route path='/adminPanel' element={<AddDoctors />} />
          <Route path='/adminPanel' element={<EditDoctors />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
