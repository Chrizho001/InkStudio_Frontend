import staff1 from "../assets/man_staff2.jpg";
import staff2 from "../assets/man_staff.webp";
import staff3 from "../assets/girl_staff.webp";

const Staff = () => {
  return (
    <section  className="container flex flex-col items-center justify-center my-16 py-4">
      <div className="flex flex-col py-4">
        <h1 className="text-2xl font-bold text-white font-cairo text-center uppercase">
          our staff
        </h1>
        <div className="flex py-2 space-x-2 items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-secondary"></div>
          <div className="w-2 h-2 rounded-full bg-secondary"></div>
          <div className="w-2 h-2 rounded-full bg-secondary"></div>
        </div>
      </div>

      <div className="flex flex-row py-4 px-2 w-full gap-x-3 gap-y-10 items-center justify-center">
        <div className="flex flex-col text-center items-center">
          <img
            src={staff1}
            className="object-cover w-[280px] h-[220px] sm:h-[280px] md:h-[320px]  grayscale"
            alt="staff image"
          />
          <span className="text-sm font-semibold font-cairo mt-4">
            George Evans
          </span>
          <span className="text-[12px] text-secondary font-normal ">Tattoo master</span>
        </div>
        <div className="flex flex-col text-center items-center">
          <img
            src={staff2}
            className="object-cover w-[280px] h-[220px] sm:h-[280px] md:h-[320px] grayscale"
            alt="staff image"
          />
          <span className="text-sm font-semibold font-cairo mt-4">
            Adam Spencer
          </span>
          <span className="text-[12px] font-normal text-secondary ">Tattoo master</span>
        </div>
        <div className="flex flex-col text-center items-center">
          <img
            src={staff3}
            className="object-cover w-[280px] h-[220px] sm:h-[280px] md:h-[320px] grayscale"
            alt="staff image"
          />
          <span className="text-sm font-semibold font-cairo mt-4">
            Sarah Obafemi
          </span>
          <span className="text-[12px] font-normal text-secondary ">Tattoo master</span>
        </div>
      </div>
    </section>
  );
};

export default Staff;
