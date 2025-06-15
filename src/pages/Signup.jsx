import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { FaRegCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [visible, setIsVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    re_password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // const { email, first_name, last_name, password, re_password } = formData;
    try {
      const response = await axios.post(
        "https://tattooapp.onrender.com/auth/users/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setOpenModal(true);

      setIsLoading(false);
    } catch (error) {
      toast.error(
        JSON.stringify(error.response.data.detail) || "Signup failed"
      );
      setIsLoading(false);
    }
  };

  const navigate = useNavigate();

  return (
    <section className="h-screen w-full mx-auto flex flex-col items-center justify-center bg-slate-900 py-2 px-2 lg:px-4">
      <div className="w-full flex items-start py-6 mb-2 md:w-[550px] lg:w-[600px]">
        <h1 className="text-3xl font-semibold font-cairo text-white py-2">
          Sign Up
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col space-y-6 md:w-[550px] lg:w-[600px] lg:py-4 items-center justify-center"
      >
        <div className="flex flex-row justify-between w-full gap-x-3  py-2">
          <div className="w-full rounded-full border-1 border-secondary px-3 py-2 flex flex-row justify-between items-center">
            <input
              value={formData.first_name}
              type="text"
              placeholder="First Name"
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
              className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm text-white font-semibold font-cairo w-full "
            />
          </div>

          <div className="w-full rounded-full border-1 border-secondary px-3 py-2 flex flex-row justify-between items-center">
            <input
              value={formData.last_name}
              type="text"
              placeholder="Last Name"
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
              className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm text-white font-semibold font-cairo w-full "
            />
          </div>
        </div>

        <div className="w-full rounded-full border-1 border-secondary px-3 py-2 flex flex-row justify-between items-center">
          <input
            type="email"
            value={formData.email}
            placeholder="Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm text-white font-semibold font-cairo w-full "
          />
        </div>

        <div className="w-full rounded-full border-1 border-secondary px-3 py-2 flex flex-row justify-between items-center">
          <input
            value={formData.password}
            type={visible ? `text` : `password`}
            placeholder="Password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
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
            value={formData.re_password}
            onChange={(e) =>
              setFormData({ ...formData, re_password: e.target.value })
            }
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

        <button
          type="submit"
          className="px-6 py-3 w-full lg:w-full font-semibold text-lg text-gray-200 font-cairo bg-secondary rounded-full mt-4 hover:scale-110 transition-transform duration-300"
        >
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

        <button className="text-sm font-semibold font-cairo text-secondary/70">
          Forgot Password?
        </button>
      </form>

      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <ModalHeader />
        <ModalBody>
          <div className="text-center">
            <FaRegCheckCircle className="mx-auto mb-4 h-14 w-14 text-green-300" />
            <h3 className="mb-5 text-sm font-normal text-gray-200 ">
              Sign up successful <br />
              An activation link has been sent to your email. <br /> Click on it
              to activate your account
            </h3>
          </div>
        </ModalBody>
      </Modal>

      <div className="flex gap-x-4 text-sm font-cairo text-gray-200 items-center justify-center mt-4 ">
        <span>Already have an account?</span>
        <button
          onClick={() => navigate("/auth/login")}
          className="text-secondary text-lg cursor-pointer"
        >
          Sign In
        </button>
      </div>
    </section>
  );
};

export default Signup;
