import about from "../assets/about.jpg";
const About = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="flex flex-col md:flex-row items-center justify-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={about}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              We are dedicated to providing you with the tools and resources to
              create a professional resume that helps you land your dream job.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700">
              Our vision is to empower individuals to showcase their skills and
              experiences effectively through a well-crafted resume, ultimately
              enabling them to succeed in their careers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
