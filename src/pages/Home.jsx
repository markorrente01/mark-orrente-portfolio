import HeroSec from '@/components/HeroSec';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Resume from '@/components/Resume';

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
