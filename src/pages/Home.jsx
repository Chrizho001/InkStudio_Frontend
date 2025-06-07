import Hero from "../components/Hero"
import About from '../components/About'
import Services from "../components/Services";
import Testimonial from "../components/Testimonial"
import Staff from "../components/Staff";
import Appointment from "../components/Appointment";
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <Staff />
      <Appointment />
      <Footer />
    </main>
  )
}

export default Home