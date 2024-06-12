import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import background_login from "../assets/background_login.jpg";
import axios from "axios";
import { toast } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login successful. Welcome!");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900 flex justify-center items-center h-[85vh]">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 h-auto lg:h-4/5">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex flex-col justify-center">
          <div>
            <img src="" alt="Logo" className="w-mx-auto" />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1 mt-8">
              <form onSubmit={registerUser} className="mx-auto max-w-xs">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username:
                </label>
                <input
                  name="username"
                  type="text"
                  id="username"
                  placeholder="Enter your name"
                  autoComplete="username"
                  aria-required="true"
                  required
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mt-5"
                >
                  Email:
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  aria-required="true"
                  required
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mt-5"
                >
                  Password:
                </label>
                <input
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  autoComplete="new-password" // Changed to match the standard values
                  aria-required="true"
                  required
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Register</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by <br />
                  <Link
                    to="termsOfService"
                    className="border-b border-gray-500 border-dotted tracking-wide"
                  >
                    Terms of Service
                  </Link>
                  <span className="tracking-wide">&nbsp;and its&nbsp;</span>
                  <Link
                    to="privacyPolicy"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${background_login})`,
              backgroundPosition: "top",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
