import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  // Check if user is null or undefined before rendering
  if (!user) {
    return <div>Loading...</div>;
  }

  // Destructure 'name' property from user object
  const { name } = user;

  return (
    <div className="resume-builder">
      <div className="container">
        <h1>Welcome {name}! Choose a template:</h1>
        <ul className="template-list">
          <li>
            <Link to="/template1">
              <button>Template 1</button>
            </Link>
          </li>
          <li>
            <Link to="/template2">
              <button>Template 2</button>
            </Link>
          </li>
        </ul>
      </div>
      <footer className="footer">&copy; 2024 Resume Builder</footer>
    </div>
  );
};

export default Dashboard;
