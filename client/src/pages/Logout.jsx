// src/pages/Logout.js
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { UserContext } from "../../context/userContext";

const Logout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const response = await axios.post("/logout");
        if (response.status === 200) {
          setUser(null);
          toast.success("Logged out successfully");
          navigate("/");
        } else {
          throw new Error("Logout failed");
        }
      } catch (err) {
        console.error("Logout error: ", err);
        toast.error("Logout failed");
      }
    };
    logoutUser();
  }, [navigate, setUser]);

  return <div>Logging out...</div>;
};

export default Logout;
