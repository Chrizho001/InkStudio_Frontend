import aboutPic from "../assets/aboutPic.jpg";
import aboutPic2 from "../assets/aboutPic2.jpg";

const About = () => {
  const scrollToSection = () => {
    const section = document.getElementById("#booking");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="#about" className="w-full flex flex-col lg:flex-row  px-2 py-16 bg-primaryDark2">
      <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row-reverse lg:gap-x-8 lg:py-8">
        <div className="py-2 flex flex-col gap-2.5 text-center lg:text-start items-center justify-center md:w-[500px] lg:w-[550px] ">
          <h1 className="text-3xl font-cairo font-bold uppercase text-center py-3 lg:text-4xl">
            About 
            Salon
          </h1>
          <p className="text-sm font-normal leading-relaxed text-gray-300 font-cairo lg:text-[16px]">
            At Ink Studio, tattooing is more than art—it's a personal journey.
            We specialize in custom designs that reflect your story, your style,
            and your spirit.
          </p>
          <p className="text-sm font-normal leading-relaxed text-gray-200 font-cairo lg:text-[16px]">
            Whether you're getting your first tattoo or adding to a collection,
            we’re here to make it unforgettable.
          </p>
          <button onClick={scrollToSection} className="text-sm w-fit font-cairo py-2 px-3 my-4 bg-secondary font-semibold lg:text-[16px] hover:scale-110 transition-transform duration-300">
            Book a session
          </button>
        </div>

        <div className=" flex flex-row items-center justify-center space-x-3 sm:space-x-4 mt-2 py-4 ">
          <img
            src={aboutPic}
            className="w-[160px] h-[260px] sm:w-[185px] sm:h-[280px] md:w-[200px] md:h-[290px] lg:w-[250px] lg:h-[320px] object-cover grayscale"
            alt=""
          />
          <img
            src={aboutPic2}
            className="w-[160px] h-[260px] sm:w-[185px] sm:h-[280px] md:w-[200px] md:h-[290px] lg:w-[250px] lg:h-[320px] object-cover grayscale"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
