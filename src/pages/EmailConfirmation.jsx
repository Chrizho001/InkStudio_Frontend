import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EmailConfirmation = () => {
  const { uid, token } = useParams(); // get uid/token from URL
  const navigate = useNavigate();

  const handleActivate = async () => {
    const url = "https://tattooapp.onrender.com/auth/users/activation/";
    try {
      const response = await axios.post(
        url,
        { uid, token },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 204) {
        console.log("Account activated successfully");
        toast.success("Account activated successfully!");
        navigate("/auth/login");
      }
    } catch (error) {
      console.log("Activation failed:", error.response.data || error.message);

      toast.error("Activation failed. Please try again.");
    }
  };

  return (
    <section className="w-full h-screen mx-auto flex flex-col justify-center items-center py-6 bg-slate-900">
      <div className="flex flex-col px-2 text-center gap-y-4 h-full justify-center items-center lg:w-[500px]">
        <h1 className="text-2xl font-semibold font-cairo py-2 text-gray-200">
          Thank You For Signing Up
        </h1>
        <p className="text-lg font-normal font-cairo text-gray-300">
          Click on the button to activate your account and get started
        </p>
        <button
          onClick={handleActivate}
          className="px-6 py-3 lg:w-fit font-semibold text-lg text-gray-200 font-cairo bg-secondary rounded-full mt-4 hover:scale-110 transition-transform duration-300"
        >
          Activate your account
        </button>
      </div>
    </section>
  );
};

export default EmailConfirmation;
