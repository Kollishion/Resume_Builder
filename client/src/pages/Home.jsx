import hero from "../assets/hero.jpg";

const Home = () => {
  return (
    <div className="mt-32">
      <div className="content flex">
        <div className="left flex flex-col justify-center w-1/2 px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Build your <span className="text-green-600">perfect resume</span>{" "}
            effortlessly.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Create a professional resume in minutes. Our intuitive platform
            guides you through the process, ensuring you stand out from the
            crowd.
          </p>
          <button className="btn bg-green-600 text-white font-semibold px-8 py-3 rounded duration-500">
            Get Started
          </button>
        </div>
        <div className="right w-1/2">
          <img src={hero} alt="boy" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;
