import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import useGoogleAnalytics from './hooks/useGoogleAnalytics'

function App() {

  useGoogleAnalytics();

  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <About />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
