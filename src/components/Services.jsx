// import piercing from "../assets/piercing.jpg";
import { FaPenNib } from "react-icons/fa";
import { GiLaserBlast } from "react-icons/gi";
import { GiCrystalEarrings } from "react-icons/gi";
import { Carousel } from "flowbite-react";
import { GiGlobeRing } from "react-icons/gi";
import { GiSyringe } from "react-icons/gi";
import { FaPenFancy } from "react-icons/fa6";
import { FaPenAlt } from "react-icons/fa";
import tattooMan from "../assets/tattoo_man.png";

const Services = () => {
  return (
    <section id="#services" className="container flex flex-col px-2 py-16">
      <h1 className="text-4xl font-bold text-white font-cairo text-center">
        Our Services
      </h1>
      <div className="flex py-2 space-x-2 items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-secondary"></div>
        <div className="w-2 h-2 rounded-full bg-secondary"></div>
        <div className="w-2 h-2 rounded-full bg-secondary"></div>
      </div>
      <p className="text-sm text-gray-300 font-light py-4 text-center">
        Ink Studio is a tattoo shop located at the east coast. We offer a broad
        range of services aimed at satisfying our patrons.
      </p>
      <div className="w-full flex flex-col ">
        <div className="flex flex-col lg:flex-row space-y-6  w-full">
          {/* Services List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 py-4 mt-2.5 place-content-center gap-x-3 gap-y-4 text-[14px] text-sm  sm:text-sm px-2">
            {/* first div */}
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-x-2.5 py-3 ">
                <GiSyringe className="text-secondary text-3xl" />
                <span className="uppercase text-sm font-semibold">
                  tattooing
                </span>
              </div>
              <p className="font-normal text-gray-300 font-cairo text-left">
                for a premium result at our saloon we combine modern and traditional methods.
              </p>
            </div>

            {/* second div */}
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-x-2.5 py-3 ">
                <GiGlobeRing className="text-secondary text-3xl" />
                <span className="uppercase text-sm font-semibold">
                  piercing
                </span>
              </div>
              <p className="font-normal text-gray-300 font-cairo text-left">
                Want some extra hooks in your body? Our saloon got you covered!
              </p>
            </div>

            {/* third div */}
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-x-2.5 py-3 ">
                <FaPenFancy className="text-secondary text-3xl" />
                <span className="uppercase text-sm font-semibold">
                  tattoo design
                </span>
              </div>
              <p className="text-sm font-normal text-gray-300 font-cairo text-left">
                Leave it to us to give you that stunning design
              </p>
            </div>

            {/* fourth div */}
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-x-2.5 py-3 ">
                <FaPenAlt className="text-secondary text-3xl" />
                <span className="uppercase text-sm font-semibold">
                  tattoo coverup
                </span>
              </div>
              <p className="font-normal text-sm text-gray-300 font-cairo text-left">
                Our tattoo coverup is impeccable, we make sure no spot is
                untouched
              </p>
            </div>
          </div>
          {/* service image */}
          <div className="relative flex items-center justify-center mt-4 w-full">
            <img
              src={tattooMan}
              width={350}
              className="object-cover grayscale"
              alt=""
            />
            <div class="absolute -bottom-5 left-0 w-full h-[70px] bg-primary blur-md "></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
