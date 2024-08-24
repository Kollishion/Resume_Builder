import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

function DropdownNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-center w-full rounded-md md:ml-5 border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          Options
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 sm:left-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {user ? (
              <>
                <Link
                  to="/logout"
                  className="btn bg-green-600 hover:bg-green-400 text-white font-semibold px-3 py-1 rounded duration-500 mb-2 md:mr-4 md:mb-0"
                >
                  Logout
                </Link>
                <Link
                  to="/edit-profile"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  id="menu-item-1"
                >
                  Edit-Profile
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn bg-green-600 hover:bg-green-400 text-white font-semibold px-3 py-1 rounded duration-500 mb-2 md:mr-4 md:mb-0"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn bg-green-600 hover:bg-green-400 text-white font-semibold px-3 py-1 rounded duration-500"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownNavbar;
