import { useState } from "react";
import contact from "../assets/contact.jpg";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    feedbackText: "",
  });
  const handleSubmitFeedback = async (e) => {
    e.preventDefault();
    try {
      const { name, email, feedbackText } = data;
      const response = await axios.post("/feedback", {
        name,
        email,
        feedbackText,
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({ name: "", email: "", feedbackText: "" });
        toast.success("Feedback Submitted Successfully");
        navigate("/");
      }
    } catch (error) {
      toast.error("Feedback Submission failed");
      console.log("Feedback submission failed: ", error);
    }
  };
  return (
    <div className="container mx-auto py-12 flex items-center justify-center w-full min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <br />
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="flex flex-col md:flex-row items-center justify-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={contact}
              alt="Contact Us"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-6">
              Have a question or feedback? We had love to hear from you. Reach
              out to us using the form below, and we will get back to you as
              soon as possible.
            </p>
            <form className="w-full max-w-lg" onSubmit={handleSubmitFeedback}>
              <div className="flex flex-wrap mb-6">
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    autoComplete="name"
                    aria-required="true"
                    required
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-6">
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    autoComplete="name"
                    aria-required="true"
                    required
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-6">
                <div className="w-full">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                    autoComplete="name"
                    aria-required="true"
                    required
                    value={data.feedbackText}
                    onChange={(e) =>
                      setData({ ...data, feedbackText: e.target.value })
                    }
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="btn bg-green-600 text-white font-semibold px-8 py-3 rounded duration-500"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
