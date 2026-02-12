import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";

import { toast } from "react-toastify";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
    const [visible, setIsVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);

    const [loading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        new_password: "",
        re_new_password: "",
    });

    const navigate = useNavigate();
    const { uid, token } = useParams(); // get uid/token from URL

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!formData.new_password || !formData.re_new_password) {
            toast.error("Please fill in both fields.");
            setIsLoading(false);
            return;
        }

        if (formData.new_password !== formData.re_new_password) {
            toast.error("Passwords do not match.");
            setIsLoading(false);
            return;
        }

        try {
            const data = { ...formData, uid: uid, token: token };
            const response = await axios.post(
                "https://tattooapp.onrender.com/auth/users/reset_password_confirm/",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );

            setIsLoading(false);
            toast.success("password reset successful");
            navigate("/auth/login");
        } catch (error) {
            const errorMessage =
                error.response.data.detail ||
                Object.values(error.response.data || {})
                    .flat()
                    .join(" ") ||
                "Password reset failed.";

            toast.error(errorMessage);
            setIsLoading(false);
        }
    };

    return (
        <section className="h-screen w-full mx-auto flex flex-col items-center justify-center bg-slate-900 py-2 px-2 lg:px-4">
            <div className="w-full flex items-start py-6 mb-2 md:w-[550px] lg:w-[600px]">
                <h1 className="text-3xl font-semibold font-cairo text-white py-2">
                    Reset password
                </h1>
            </div>
            <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col space-y-6 md:w-[550px] lg:w-[600px] lg:py-4 items-center justify-center"
            >
                <div className="w-full rounded-full border-1 border-secondary px-3 py-2 flex flex-row justify-between items-center">
                    <input
                        value={formData.new_password}
                        type={visible ? `text` : `password`}
                        placeholder="Password"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                new_password: e.target.value,
                            })
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
                        value={formData.re_new_password}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                re_new_password: e.target.value,
                            })
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
                        `Reset password`
                    )}
                </button>
            </form>

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

export default ResetPassword;
