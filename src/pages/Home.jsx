import HeroSec from '@/components/sections/HeroSec';
import Navbar from '@/components/sections/Navbar';
import About from '@/components/sections/About';
import Resume from '@/components/sections/Resume';
import Services from '@/components/sections/Services';
import ScrollButton from '@/components/ui/ScrollTop'
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import { useEffect, useState } from 'react';
import { RotateLoader } from 'react-spinners';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (loading) {
    return (
      <div className="bg-bg-card fixed inset-0 z-50 flex items-center justify-center">
        <RotateLoader color="hsl(359, 100%, 65%)" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidde">
      <ScrollButton />
      <Navbar />
      <main className="py-70 bg-bg-primary" id="home">
        <HeroSec />
      </main>
      <About />
      <Resume />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
 
}

export default Home
