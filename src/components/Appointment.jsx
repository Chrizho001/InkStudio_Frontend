import appointment_image from "../assets/appoint.jpg";
import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import { FaRegCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import api from "../axios/api";
import { Spinner } from "flowbite-react";

const Appointment = () => {
  const [time, setTime] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const createAppointment = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.post("/ink_studio/booking/", {
        start_time: time,
        end_time: endTime,
        session_date: date,
        tattoo_description: description,
      });
      console.log("Appointment created:", response.data);
      setIsLoading(false);
      setOpenModal(true);
    } catch (error) {
      console.error(
        "Failed to create appointment:",
        error.response.data || error.message
      );
      toast.error(
        JSON.stringify(error.response.data.detail) || "Signup failed"
      );
      setIsLoading(false);
    }
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

          {/* appointment form */}
          <form
            onSubmit={createAppointment}
            className="flex flex-col justify-center items-center gap-4 w-full lg:w-[650px] py-6 font-cairo text-lg"
          >
            <div className="w-full flex flex-col lg:flex-row gap-4">
              <input
                required={true}
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Tattoo descritpion"
                className="bg-black border-none focus:outline-none focus:right-2 focus:ring-secondary  text-gray-100 w-full py-4 text-lg"
                id=""
              />
            </div>

            <div className="w-full flex flex-row gap-4 items-center justify-center">
              <div className="flex flex-col w-full">
                <label htmlFor="time">Start time</label>
                <input
                  type="time"
                  value={time}
                  name="time"
                  required={true}
                  id="#time"
                  onChange={(e) => setTime(e.target.value)}
                  className="bg-black rounded-lg border-none focus:outline-none focus:right-2 focus:ring-secondary  text-gray-100 w-full py-4 text-lg"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="time">End time</label>
                <input
                  type="time"
                  value={endTime}
                  required={true}
                  name="time"
                  id="#time"
                  onChange={(e) => setEndTime(e.target.value)}
                  className="bg-black rounded-lg border-none focus:outline-none focus:right-2 focus:ring-secondary  text-gray-100 w-full py-4 text-lg"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="date">Date</label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                name="date"
                required={true}
                id=""
                className="bg-black rounded-lg border-none focus:outline-none focus:right-2 focus:ring-secondary  text-gray-100 w-full py-4 text-lg"
              />
            </div>

            <div>
              <button className="text-lg font-semibold w-fit font-cairo py-2 px-6 my-4 bg-secondary hover:scale-110 transition-transform duration-300 ">
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
        </div>
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
                Appointment successfuly created <br /><br /><br />
                An email has been sent to you from our team, we look forward to
                seeing you at our salon.
              </h3>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </section>
  );
};

export default Appointment;
