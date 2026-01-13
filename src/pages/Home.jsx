import HeroSec from '@/components/sections/HeroSec';
import Navbar from '@/components/sections/Navbar';
import About from '@/components/sections/About';
import Resume from '@/components/sections/Resume';
import Services from '@/components/sections/Services';
import ScrollButton from '@/components/ui/ScrollTop'
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

const Home = () => {
  return (
    <div className='relative min-h-screen'>
      <ScrollButton />
      <Navbar />
      <main className='py-70 bg-bg-primary' id='home'>
        <HeroSec />
      </main>
        <About />
        <Resume />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home
