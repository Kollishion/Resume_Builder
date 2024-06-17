import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  // Check if user is null or undefined before rendering
  if (!user) {
    return <div>Loading...</div>;
  }

  // Destructure 'name' property from user object
  const { name } = user;

  return (
    <div>
      <div className="mt-24">
        <h1>Welcome, {name}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
