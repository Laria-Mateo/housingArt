import Hero from '../components/Hero'
import About from '../components/About'
import Models from '../components/Models'
import Process from '../components/Process'
import Assembly from '../components/Assembly'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Models />
      <Process />
      <Assembly />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home 