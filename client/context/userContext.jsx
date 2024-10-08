import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) {
        try {
          const { data } = await axios.get("/profile");
          setUser(data);
        } catch (err) {
          console.error("Error fetching profile: ", err);
          setUser(null);
        }
      }
    };

    fetchProfile();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
