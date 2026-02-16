import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookingButtons from './components/BookingButtons'
import Reviews from './components/Reviews'
import AboutOsteopathy from './components/AboutOsteopathy'
import AboutMe from './components/AboutMe'
import Formations from './components/Formations'
import BookingReasons from './components/BookingReasons'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Reviews />
      <AboutOsteopathy />
      <AboutMe />
      <Formations />
      <BookingReasons />
      <BookingButtons />
      <Footer />
    </>
  )
}
