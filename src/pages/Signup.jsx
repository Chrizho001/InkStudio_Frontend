import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [visible, setIsVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  return (
    <section className="h-screen w-full flex flex-col items-center justify-between bg-slate-900 py-8">
      <form className="w-full p-2 flex flex-col space-y-6">
        <h1 className="text-3xl font-semibold font-cairo text-white py-6">
          Sign Up
        </h1>

        <div className="w-full rounded-full border-1 border-secondary px-3 py-2 flex flex-row justify-between items-center">
          <input
            type="text"
            placeholder="First Name"
            className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm text-white font-semibold font-cairo w-full "
          />
        </div>

        <div className="w-full rounded-full border-1 border-secondary px-3 py-2 flex flex-row justify-between items-center">
          <input
            type="text"
            placeholder="Last Name"
            className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm text-white font-semibold font-cairo w-full "
          />
        </div>

      

        <div className="w-full rounded-full border-1 border-secondary px-3 py-2 flex flex-row justify-between items-center">
          <input
            type={visible ? `text` : `password`}
            placeholder="Password"
            className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm text-white font-cairo w-full "
          />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsVisible(!visible);
            }}
          >
            {visible ? (
              <FaEyeSlash className="text-2xl" />
            ) : (
              <FaEye className="text-2xl" />
            )}
          </button>
        </div>


        <div className="w-full rounded-full border-1 border-secondary px-3 py-2 flex flex-row justify-between items-center">
          <input
            type={confirmVisible ? `text` : `password`}
            placeholder="Confirm Password"
            className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm text-white font-cairo w-full "
          />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setConfirmVisible(!confirmVisible);
            }}
          >
            {confirmVisible ? (
              <FaEyeSlash className="text-2xl" />
            ) : (
              <FaEye className="text-2xl" />
            )}
          </button>
        </div>

        <button className="px-6 py-3 lg:w-fit font-semibold text-lg text-gray-200 font-cairo bg-secondary rounded-full mt-4">
          Sign Up
        </button>

        <button className="text-sm font-semibold font-cairo text-secondary/70">
          Forgot Password?
        </button>
      </form>

      <div className="flex gap-x-4 text-sm font-cairo text-gray-200 items-center justify-center ">
        <span>Already have an account?</span>
        <button className="text-secondary text-lg">Sign In</button>
      </div>
    </section>
  );
};

export default Signup;
