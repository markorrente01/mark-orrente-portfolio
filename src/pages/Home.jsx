import HeroSec from '@/components/HeroSec';
import Navbar from '@/components/Navbar';

const Home = () => {
  return (
    <div className='min-h-[200vmin]'>
      <Navbar />
      <main className='pt-50'>
        <HeroSec />
      </main>

      {/* footer */}
    </div>
  )
}

export default Home
