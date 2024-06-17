import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import background_login from "../assets/background_login.jpg";
import axios from "axios";
import { toast } from "react-hot-toast";
import { UserContext } from "../../context/userContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post("/login", { email, password });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setUser(response.data);
        setData({ email: "", password: "" });
        toast.success("Logged in successfully");
        navigate("/userDashboard");
      }
    } catch (err) {
      toast.error("Login failed");
      console.log("Error during login: ", err);
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
              <form onSubmit={loginUser} className="mx-auto max-w-xs">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email:
                </label>
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  aria-required="true"
                  required
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
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  aria-required="true"
                  required
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
                  <span className="ml-3">Log In</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by <br />
                  <Link
                    to="/termsOfService"
                    className="border-b border-gray-500 border-dotted tracking-wide mr-1"
                  >
                    Terms of Service
                  </Link>
                  <span className="tracking-wide mx-1">and its</span>
                  <Link
                    to="/privacyPolicy"
                    className="border-b border-gray-500 border-dotted ml-1"
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

export default Login;
