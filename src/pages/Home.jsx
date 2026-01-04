import HeroSec from '@/components/HeroSec';
import Navbar from '@/components/Navbar';
import About from '@/components/About';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main className='pt-73 mb-73' id='home'>
        <HeroSec />
      </main>
        <About />

      {/* footer */}
    </div>
  )
}

export default Home
