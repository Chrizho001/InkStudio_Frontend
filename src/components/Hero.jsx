import hero_image from "../assets/hero1.png";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div  className="container flex flex-col md:px-2.5 lg:px-3 ">
      <Navbar />
      {/* main hero section */}
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Hero text div */}
        <div className="flex flex-col px-2 mt-10 font-cairo w-full md:w-[370px] lg:w-[400px] lg:gap-y-3">
          <h1 className="text-[80px] font-semibold relative">
            <span className="absolute -top-7 left-0 text-secondary text-[40px] font-semibold">
              Ink
            </span>
            Studio
            <span className="block font-bold text-xl text-gray-400 uppercase">
              Tattoo Salon
            </span>
          </h1>

          <span className="py-4 text-sm font-normal text-white leading-normal ">
            Dive into our world of ink, explore stunning designs, and book your
            session to wear your art proudly—book a session to start your
            journey!
          </span>
          <div className="mt-6 ">
            <button className="text-xl font-semibold font-cairo py-2 px-3 bg-secondary ">
              Book a session
            </button>
          </div>
        </div>
        {/* Hero image div */}
        <div className="mt-2 lg:w-[600px]">
          <div className="w-full">
            <img
              src={hero_image}
              className="w-full h-full lg:h-[750px] object-contain grayscale "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
