import { Carousel } from "flowbite-react";
import testimony_bg from "../assets/testimonybg.jpg";

const Testimonial = () => {
  return (
    <section id="#testimonial"
      className="w-full relative flex  mx-auto h-[600px] bg-cover bg-center py-8 my-16"
      style={{ backgroundImage: `url(${testimony_bg})` }}
    >
      <div className="absolute inset-0  bg-primary opacity-85 flex flex-col items-center justify-center py-12">
        <div className="container mx-auto flex flex-col">
          <h1 className="text-2xl font-bold text-white font-cairo text-center">
            TESTIMONIALS
          </h1>
          <div className="flex py-2 space-x-2 items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
          </div>
        </div>
        {/* Carouse */}
        <div className="container mx-auto h-[70%] flex flex-col py-8 items-center justify-center text-center px-3 grayscale-0">
          <Carousel
            slideInterval={3000}
            leftControl=" "
            rightControl=" "
            className="w-full"
            indicators={false}
          >
            <div className="flex w-full h-[200px] items-center justify-center space-x-4">
              <span className="text-secondary/50 text-8xl ">"</span>
              <p className="text-sm font-cairo font-normal px-1 w-full tracking-wide">
                Absolutely love my new ink! The artist really took the time to
                understand what I wanted and brought it to life better than I
                imagined. Already planning my next session! <br />
                <br />
                <span className="py-4 text-lg font-semibold text-secondary">
                  Austin J. Thomas
                </span>
              </p>
              <span className="text-secondary/50 text-8xl ">"</span>
            </div>

            <div className="flex w-full h-[200px] items-center justify-center space-x-4">
              <span className="text-secondary/50 text-8xl ">"</span>
              <p className="text-sm font-cairo font-normal px-1 w-full tracking-wide">
                Hands down the best tattoo experience I've had. From the
                consultation to the aftercare instructions, everything was
                smooth. The studio was spotless and welcoming, and the artist
                made me feel comfortable the entire time. My tattoo healed
                beautifully! <br />
                <br />
                <span className="py-4 text-lg font-semibold text-secondary">
                  Henry Allen
                </span>
              </p>
              <span className="text-secondary/50 text-8xl ">"</span>
            </div>

            <div className="flex w-full h-[200px] items-center justify-center space-x-4">
              <span className="text-secondary/50 text-8xl ">"</span>
              <p className="text-sm font-cairo font-normal px-1 w-full tracking-wide">
                Incredible detail and artistry. I came in with a rough idea, and
                they transformed it into a piece I’m proud to wear forever. The
                atmosphere was chill, and the staff were super friendly. 10/10
                would recommend
                <br />
                <br />
                <span className="py-4 text-lg font-semibold text-secondary">
                  John Wycliffe
                </span>
              </p>
              <span className="text-secondary/50 text-8xl ">"</span>
            </div>

            <div className="flex w-full h-[200px] items-center justify-center space-x-4">
              <span className="text-secondary/50 text-8xl ">"</span>
              <p className="text-sm font-cairo font-normal px-1 w-full tracking-wide">
                I was nervous about getting my first tattoo, but the artists
                here made the experience unforgettable. They listened to what I
                wanted, added their creative touch, and the final result was
                even better than I imagined. <br />
                <br />
                <span className="py-4 text-lg font-semibold text-secondary">
                  Susan Alexis
                </span>
              </p>
              <span className="text-secondary/50 text-8xl ">"</span>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
