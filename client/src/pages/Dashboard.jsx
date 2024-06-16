import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import axios from "axios";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get("/profile");
        console.log("Fetched user data:", data);
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };

    if (!user) {
      fetchUserData();
    }
  }, [user, setUser]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
    </div>
  );
};

export default Dashboard;
