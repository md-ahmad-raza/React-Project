import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Front End Router
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
import Profile from "./Components/Pages/Profile";
import Logout from "./Components/Pages/Logout";
import EditProfile from "./Components/Pages/EditProfile";
// Admin Panel Routes
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
                 {/* Front End Routes */}
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
          <Route path='/profile' element={<Profile />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/editProfile' element={<EditProfile />} />
          {/* AdminPanel Routes */}
          <Route path='/adminPanel' element={<AdminPanel />} />
          <Route path='/allPatients' element={<AllPatients />} />
          <Route path='/newPatients' element={<NewPatients />} />
          <Route path='/addDoctors' element={<AddDoctors />} />
          <Route path='/editDoctors' element={<EditDoctors />} />
        </Routes>
        <Footer />
      </div>
    </Router>



    
  );
}

export default App;
