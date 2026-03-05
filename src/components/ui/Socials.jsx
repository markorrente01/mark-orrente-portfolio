import { cn } from '@/lib/Utils';

const Socials = ({link, icon, label}) => {
  return (
    <div data-aos='zoom-in'>
      <a className={cn('flex items-center justify-center md:w-20 md:h-20 w-15 h-15 rounded-full bg-text-primary/10', 
        'transform transition-all duration-300 ease-out hover:bg-accent-primary hover:-translate-y-0.5')}
        href={link} target='_blank' rel="noopener noreferrer">
      {icon}
    </a>
    </div>
    
  )
}

export default Socials