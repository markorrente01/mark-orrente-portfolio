import { cn } from '@/lib/Utils';

const Socials = ({link, icon, label}) => {
  return (
    <div data-aos='zoom-in'>
      <a className={cn('flex items-center justify-center md:w-13 md:h-13 w-11 h-11 rounded-full bg-text-primary/10', 
        'transform transition-all duration-300 ease-out hover:bg-accent-primary hover:-translate-y-0.5')}
        href={link} target='_blank' rel="noopener noreferrer">
      {icon}
    </a>
    </div>
    
  )
}

export default Socials