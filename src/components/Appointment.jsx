import appointment_image from "../assets/appoint.jpg";
import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import { FaRegCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import api from "../axios/api";
import { Spinner } from "flowbite-react";

const Appointment = () => {
    const [time, setTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [errors, setErrors] = useState({}); // <- per-field errors

    const createAppointment = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({}); // reset previous errors

        try {
            const response = await api.post("/ink_studio/booking/", {
                start_time: time,
                end_time: endTime,
                session_date: date,
                tattoo_description: description,
            });
            setLoading(false);
            setOpenModal(true);
        } catch (error) {
            setLoading(false);

            if (error.response && error.response.data) {
                const data = error.response.data;
                if (typeof data === "object") {
                    // DRF usually sends errors in {field: [messages]} format
                    setErrors(data);
                } else if (data.detail) {
                    toast.error(data.detail);
                } else {
                    toast.error("Failed to create appointment. Try again.");
                }
            } else {
                toast.error("Network error. Check your connection.");
            }
        }
    };

    const renderError = (field) => {
        return errors[field] ? (
            <p className="text-red-400 text-sm mt-1">{errors[field][0]}</p>
        ) : null;
    };

    return (
        <section
            id="#booking"
            className="w-full relative mx-auto bg-cover bg-center h-[600px] mt-6"
            style={{ backgroundImage: `url(${appointment_image})` }}
        >
            <div className="absolute inset-0 bg-primary opacity-75 flex items-center justify-center">
                <div className="container mx-auto flex flex-col items-center justify-center py-4 px-3">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-white font-cairo text-center">
                            Make An Appointment
                        </h1>
                        <div className="flex py-2 space-x-2 items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        </div>
                    </div>

                    <form
                        onSubmit={createAppointment}
                        className="flex flex-col justify-center items-center gap-4 w-full lg:w-[650px] py-6 font-cairo text-lg"
                    >
                        {/* Description */}
                        <div className="w-full">
                            <input
                                required
                                type="text"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Tattoo description"
                                className="bg-black border-none focus:outline-none focus:ring-secondary text-gray-100 w-full py-4 text-lg rounded-lg"
                            />
                            {renderError("tattoo_description")}
                        </div>

                        {/* Time */}
                        <div className="w-full flex flex-row gap-4 items-center justify-center">
                            <div className="flex flex-col w-full">
                                <label htmlFor="time">Start time</label>
                                <input
                                    type="time"
                                    value={time}
                                    name="start_time"
                                    required
                                    onChange={(e) => setTime(e.target.value)}
                                    className="bg-black rounded-lg border-none focus:outline-none focus:ring-secondary text-gray-100 w-full py-4 text-lg"
                                />
                                {renderError("start_time")}
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="end_time">End time</label>
                                <input
                                    type="time"
                                    value={endTime}
                                    name="end_time"
                                    required
                                    onChange={(e) => setEndTime(e.target.value)}
                                    className="bg-black rounded-lg border-none focus:outline-none focus:ring-secondary text-gray-100 w-full py-4 text-lg"
                                />
                                {renderError("end_time")}
                            </div>
                        </div>

                        {/* Date */}
                        <div className="flex flex-col w-full">
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                value={date}
                                name="session_date"
                                required
                                onChange={(e) => setDate(e.target.value)}
                                className="bg-black rounded-lg border-none focus:outline-none focus:ring-secondary text-gray-100 w-full py-4 text-lg"
                            />
                            {renderError("session_date")}
                        </div>

                        {/* Submit */}
                        <div>
                            <button className="text-lg font-semibold w-fit font-cairo py-2 px-6 my-4 bg-secondary hover:scale-110 transition-transform duration-300">
                                {loading ? (
                                    <div className="flex gap-3 items-center justify-center">
                                        <Spinner
                                            color="info"
                                            aria-label="Info spinner example"
                                            size="md"
                                        />
                                    </div>
                                ) : (
                                    `Submit`
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Success modal */}
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
                                <h3 className="mb-5 text-sm font-normal text-gray-200">
                                    Appointment successfully created <br />
                                    An email has been sent to you from our team.
                                    We look forward to seeing you at our salon.
                                </h3>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
