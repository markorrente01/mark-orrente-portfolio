import HeroSec from '@/components/layouts/HeroSec';
import Navbar from '@/components/layouts/Navbar';
import About from '@/components/layouts/About';
import Resume from '@/components/layouts/Resume';
import Services from '@/components/layouts/Services';
import ScrollButton from '@/components/ui/ScrollTop'

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

      {/* footer */}
    </div>
  )
}

export default Home
