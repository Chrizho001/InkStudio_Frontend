import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner } from "flowbite-react";

const Login = () => {
  const [visible, setIsVisible] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const url = "https://tattooapp.onrender.com/auth/jwt/create/";

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);

      navigate("/");
      setIsLoading(false);
    } catch (error) {
      console.log(
        "Login failed:",
        error.response.data.detail || "Login failed. Please try again."
      );
      toast.error(
        error.response.data.detail || "Login failed. Please try again"
      );
      setIsLoading(false);
    }
  };

  return (
    <section className="h-screen w-full mx-auto flex flex-col items-center justify-center bg-slate-900 py-8  px-2 lg:px-4">
      <div className="w-full flex items-start py-6 mb-2 md:w-[550px] lg:w-[600px] ">
        <h1 className="text-3xl font-semibold font-cairo text-white py-2">
          Sign Up
        </h1>
      </div>
      <form
        onSubmit={handleLogin}
        className="w-full flex flex-col space-y-6 md:w-[550px] lg:w-[600px] lg:py-4 items-center justify-center p-2"
      >
        <div className="w-full rounded-full border-1 border-secondary px-3 py-2 flex flex-row justify-between items-center">
          <input
            value={formData.email}
            required={true}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="text"
            placeholder="Email"
            className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm text-white font-semibold font-cairo w-full "
          />
        </div>

        <div className="w-full rounded-full border-1 border-secondary px-3 py-2 flex flex-row justify-between items-center">
          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type={visible ? `text` : `password`}
            required={true}
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

        <button className="px-6 py-3 w-full font-semibold text-lg text-gray-200 font-cairo bg-secondary rounded-full mt-4 hover:scale-110 transition-transform duration-300">
          {loading ? (
            <div className="flex gap-3 items-center justify-center">
              <Spinner
                color="info"
                aria-label="Info spinner example"
                size="md"
              />
            </div>
          ) : (
            `Sign in`
          )}
        </button>

        <button className="text-sm font-semibold font-cairo text-secondary/70 cursor-pointer">
          Forgot Password?
        </button>
      </form>

      <div className="flex gap-x-4 text-sm font-cairo text-gray-200 items-center justify-center py-6 mt-3 ">
        <span>Don't have an account?</span>
        <button
          onClick={() => navigate("/auth/signup")}
          className="text-secondary text-lg cursor-pointer"
        >
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default Login;
