import appointment_image from "../assets/appoint.jpg";
import { Datepicker } from "flowbite-react";
import { useState, useEffect } from "react";

const Appointment = () => {
  const [time, setTime] = useState(""); // default time in 24-hour format
  useEffect(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    setTime(`${hours}:${minutes}`);
  }, []);

  return (
    <section id="#booking"
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
            action=""
            className="flex flex-col justify-center items-center gap-4 py-3 w-full font-cairo text-lg"
          >
            <div className="w-full flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="bg-black border-none focus:outline-none focus:right-2 focus:ring-secondary  text-gray-100 w-full py-4 text-lg"
                id=""
              />
              <input
                type="text"
                name="name"
                placeholder="Email"
                className="bg-black border-none focus:outline-none focus:right-2 focus:ring-secondary  text-gray-100 w-full py-4 text-lg"
                id=""
              />
            </div>

            <div className="w-full flex flex-row gap-4 items-center justify-center">
              <Datepicker title="Pick a date" className="bg-black" />

              <input
                type="time"
                value={time}
                name="time"
                id="#time"
                onChange={(e) => setTime(e.target.value)}
                className="bg-black rounded-lg border-none focus:outline-none focus:right-2 focus:ring-secondary  text-gray-100 w-full py-4 text-lg"
              />
            </div>

            <div>
              <button className="text-lg font-semibold w-fit font-cairo py-2 px-6 my-4 bg-secondary ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
