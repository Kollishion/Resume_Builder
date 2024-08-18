import { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { UserContext } from "../../context/userContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  return user ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
