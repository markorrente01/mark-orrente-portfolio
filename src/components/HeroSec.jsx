import { Typewriter } from 'react-simple-typewriter';
import { cn } from '@/lib/Utils';
import Socials from '@/components/ui/Socials';
import {FaLinkedin, FaTiktok} from 'react-icons/fa';
import { FaUpwork, FaXTwitter } from 'react-icons/fa6';


const HeroSec = () => {
    const words = ['Developer', 'Freelancer', 'Digital Marketer'];
    const socials = [
      {
        icon: <FaLinkedin className='socialIcon'/>,
        link: 'https://www.linkedin.com/in/mark-ogbonna'
      },
      {
        icon: <FaXTwitter className='socialIcon'/>,
        link: 'https://www.linkedin.com/in/mark-ogbonna'
      },
      {
        icon: <FaTiktok className='socialIcon'/>,
        link: 'https://www.linkedin.com/in/mark-ogbonna'

      },
      {
        icon: <FaUpwork className='socialIcon'/>,
        link: 'https://www.linkedin.com/in/mark-ogbonna'
      }
    ]
  return (
    <section>
      <div className='text-center text-text-primary relative'>
      <h1 className='text-2xl font-bold leading-relaxed sm:text-4xl md:text-4xl lg:text-5xl'>Hi, I'm Mark Ogbonna</h1>
      <p className='text-base sm:text-xl md:text-2xl mb-7.5 lg:mb-10'>I'm a <span className={cn("relative inline-block text-accent-primary",
        "before:-bottom-1 before:content-[''] before:w-full before:h-[2px] before:bg-accent-primary before:absolute",
        "text-base sm:text-xl md:text-2xl"
      )}>
        <Typewriter 
        cursor={true} 
        cursorBlinking={true}
        delaySpeed={3000}
        deleteSpeed={70}
        typeSpeed={100}
        words={words}
        loop={false}
        />
        </span></p>
       
    </div>
    
      <div className='flex justify-center gap-4 md:gap-6'>
          {socials.map((social, i)=> <Socials link={social.link} icon={social.icon} key={i}/>)}
      </div>

    </section>
    
  )
}

export default HeroSec
