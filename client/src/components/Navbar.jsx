// src/components/Navbar.js
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaBars, FaTimes } from "react-icons/fa";
import DropdownNavbar from "./DropdownNavbar";

const Header = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <FaBookOpen className="w-7 h-7 text-green-600" />
          <span>Logo</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-green-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className="md:flex md:items-center md:mr-8">
            <DropdownNavbar />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
