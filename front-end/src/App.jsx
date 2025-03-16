import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
// Front End Router
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
import AppointmentSuccess from "./Components/Pages/AppointmentSuccess";
import ComplainSuccess from "./Components/Pages/ComplainSuccess";
// Admin Panel Routes
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import AllPatients from "./Components/AdminPanel/AllPatients";
import NewPatients from "./Components/AdminPanel/NewPatients";
import AddDoctors from "./Components/AdminPanel/AddDoctors";
import EditDoctors from "./Components/AdminPanel/EditDoctors";


function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  // Define routes where Header and Navbar should NOT be displayed
  const adminRoutes = [
    "/adminPanel",
    "/allPatients",
    "/newPatients",
    "/addDoctors",
    "/editDoctors",
  ];

  const isAdminRoute = adminRoutes.includes(location.pathname);

  return (
    <div className='App'>
      {/* Render Header and Navbar only if not in admin routes */}
      {!isAdminRoute && <Header />}
      {!isAdminRoute && <Navbar />}

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
        <Route path='/appointmentSuccess' element={<AppointmentSuccess />} />
        <Route path='/complainSuccess' element={<ComplainSuccess />} />
        {/* AdminPanel Routes */}
        <Route path='/adminPanel' element={<AdminPanel />} />
        <Route path='/allPatients' element={<AllPatients />} />
        <Route path='/newPatients' element={<NewPatients />} />
        <Route path='/addDoctors' element={<AddDoctors />} />
        <Route path='/editDoctors' element={<EditDoctors />} />
      </Routes>

      {/* Render Footer only if not in admin routes */}
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
