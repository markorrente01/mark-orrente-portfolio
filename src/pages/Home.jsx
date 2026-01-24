import { useState, useEffect } from 'react';
import { DotLoader } from 'react-spinners';
import {cn} from '@/lib/Utils'
import HeroSec from '@/components/sections/HeroSec';
import Navbar from '@/components/sections/Navbar';
import About from '@/components/sections/About';
import Resume from '@/components/sections/Resume';
import Services from '@/components/sections/Services';
import ScrollButton from '@/components/ui/ScrollTop';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';


const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isLightMode, setIsLightMode] = useState(false);
    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme==='light') {
            document.documentElement.classList.add('light');
            setIsLightMode(true);
        } else {
            document.documentElement.classList.remove('light');
            setIsLightMode(false);
        }
    }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className={cn("fixed inset-0 z-[9999] flex flex-col items-center justify-center",
          isLightMode ? 'bg-[hsl(0 0% 100%)]' : 'bg-[hsl(0 0% 2%)]'
        )}>
          <DotLoader 
            color="hsl(359 100% 65%)" 
            loading={loading} 
            size={70} 
            speedMultiplier={1}
          />
        </div>
      ) : (
        <div className="relative min-h-screen animate-in fade-in duration-1000">
          <ScrollButton />
          <Navbar />
          <main className="py-70 bg-bg-primary">
            <HeroSec />
          </main>
          <About />
          <Portfolio />
          <Resume />
          <Services />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;