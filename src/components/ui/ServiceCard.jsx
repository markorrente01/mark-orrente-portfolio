import { IoColorPaletteOutline } from "react-icons/io5";
import { cn } from "@/lib/Utils"

const H3 = ({children})=>{
  return(
    <h3 className='mt-4 font-medium text-text-primary text-lg md:text-xl lg:text-2xl'>
          {children}
      </h3>
  )
}

const P = ({children, others})=>{
  return (
    <p className={cn('leading-[1.7] text-text-secondary/50 text-sm sm:text-base mt-2 font-medium', others)}>
      {children}
    </p>
  )
}
const ServiceCard = ({icon, title, description, featured, ...props}) => {
  return (
    <div {...props}>
      <a href="#contact" className={cn('relative block overflow-hidden group bg-bg-card text-center rounded-2xl px-5 pt-5 pb-7 border border-text-secondary/12',
          'cardShadow expHover hover:border-accent-primary hover:cursor-pointer'
        )}>
          {/* rendered featured badge if the feature is true */}
        {featured && <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
              <span
                className={cn('block tracking-wider absolute top-4 -right-10 rotate-45 bg-accent-primary text-white text-xs font-semibold px-10 py-1')}>
                FEATURED
              </span>
          </div>}
        <div className='w-0 group-hover:w-full h-[4px] transition-all duration-300 ease-out bg-accent-primary absolute inset-0'></div>
          <div className={cn('w-15 h-15 md:w-18 md:h-18 bg-accent-primary/12 rounded-xl m-auto flex items-center justify-center', 
            'soft-transition group-hover:bg-accent-primary group-hover:rotate-[10deg] group-hover:scale-105'
          )}>
            {icon}
          </div>
          <H3>{title}</H3>
          <P>{description}</P>

    </a>
    </div>
    
  )
}

export default ServiceCard;
