import welcomeImage from "../assets/welcome2.jpg";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full h-screen  mx-auto flex justify-center items-center bg-center bg-cover md:py-8 bg-primaryDark2">
      <div
        style={{ backgroundImage: `url(${welcomeImage})` }}
        className="w-full md:w-[400px] lg:w-[400px] h-full relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-primary/60 w-full h-full flex flex-col justify-between ">
          <div className="flex flex-col justify-between w-full h-[380px] py-2 px-3">
            <p className="text-2xl md:text-2xl lg:text-3xl font-cairo font-semibold ">
              <span className="text-secondary">Ink</span>Studio
            </p>
            <h3 className="font-cairo text-3xl text-gray-200 font-semibold">
              Ink Your Story. <br />
              Wear Your Art.
            </h3>
          </div>

          <div className="w-full h-[350px] bg-gray-200 opacity-100 rounded-tr-[140px] flex items-center justify-center">
            <div className="flex flex-col gap-y-4 justify-center py-3 text-black font-cairo px-3 ">
              <h3 className="text-2xl font-bold ">Explore</h3>
              <p className="text-sm font-semibold">
                Explore unique tattoo designs, connect with top artists, and
                book your next masterpiece. Sign up now to get started.
              </p>
              <button
                onClick={() => navigate("/auth/signup")}
                className="w-full bg-black text-white py-3 rounded-full text-lg font-semibold cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                Sign up
              </button>
              <button className="text-sm font-normal">
                Already have an account? <br />{" "}
                <span
                  onClick={() => navigate("/auth/login")}
                  className="text-blue-500 py-3 font-bold cursor-pointer"
                >
                  Sign in
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
