import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Logout from "./pages/Logout";
import Template1 from "./templates/template1/Template_1";
import Template2 from "./templates/template2/Template_2";
import EditProfile from "./pages/EditProfile";
import PrivateRoute from "./components/PrivateRoute";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        <Navbar />
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/termsOfService" element={<TermsOfService />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/template1"
            element={
              <PrivateRoute>
                <Template1 />
              </PrivateRoute>
            }
          />
          <Route
            path="/template2"
            element={
              <PrivateRoute>
                <Template2 />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
