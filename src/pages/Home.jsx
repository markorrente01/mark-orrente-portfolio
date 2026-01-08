import HeroSec from '@/components/layouts/HeroSec';
import Navbar from '@/components/layouts/Navbar';
import About from '@/components/layouts/About';
import Resume from '@/components/layouts/Resume';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main className='py-70 bg-bg-primary' id='home'>
        <HeroSec />
      </main>
        <About />
        <Resume />

      {/* footer */}
    </div>
  )
}

export default Home
