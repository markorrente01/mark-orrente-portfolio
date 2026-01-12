import { useState, useEffect, useRef } from 'react';
import projectImage from '@/assets/images/projectest.jpg';
import { cn } from '@/lib/Utils';
import { HiOutlineEye } from 'react-icons/hi';
import { MdOpenInNew } from 'react-icons/md';

const Features = ({children, others})=>{
  return (
    <div className={cn('border bg-accent-primary/15 w-22',
    'rounded-2xl md:rounded-3xl text-center py-1.5', others)}>
      <p className="font-medium text-xs text-accent-primary">{children}</p>
    </div>
  )
}
const P = ({children, others})=>{
  return (
    <p className={cn('text-text-secondary/80 font-semibold', others)}>
      {children}
    </p>
  )
}
const IconContainer = ()=>{
    const iconHover = 'group-hover:scale-105 group-hover:translate-y-[1px] group-hover:text-white';
    const ContainerHover = 'soft-transition hover:scale-105 hover:bg-accent-primary';
    return (
        <div className='flex gap-2'>
            <div className={cn('group bg-white rounded-full flex items-center justify-center w-11 h-11', 
                ContainerHover)}>
                <HiOutlineEye className={cn('w-6 h-6 border-accent-primary text-accent-primary', 
                    iconHover
                )}/>
            </div>
            <div className={cn('group bg-white rounded-full flex items-center justify-center w-11 h-11', 
                ContainerHover)}>
                <MdOpenInNew className={cn('w-6 h-6 border-accent-primary text-accent-primary', 
                    iconHover
                )}/>
            </div>
        </div>
        
    )
}
const ProjectCard = () => {
    // logic for auto hover on devices that does not have mouse control
    const [viewActive, setViewActive] = useState(false);
    const cardRef = useRef(null);
    useEffect(()=>{
        // this ensures we run the logic on only devices that does not have mouse control
        const touchDevice = window.matchMedia('(pointer: coarse)').matches;
        const observer = new IntersectionObserver(([entry])=>{
            if (touchDevice) {
                setViewActive(entry.isIntersecting)
            }
        }, {threshold: 0.5 } //triggers the auto hover when it has viewport has touched 50% of the card
    );
        if (cardRef.current) {
            observer.observe(cardRef.current)
        }
        // unmounts the intersection observer to avoid memory leak
        return ()=>observer.disconnect()
    }, [])

  return (
    <div className='project-container ' ref={cardRef}>
        {/* container for image and overlay */}
      <div className='relative overflow-hidden rounded-xl'>
        <img src={projectImage} alt="project image" className='project-image soft-transition rounded-xl' />
        {/* overlay */}
        <div className={cn('overlayMiddle projectGradient flex flex-col justify-between p-6  absolute text-white w-full h-full',
            viewActive ? 'opacity-1' : 'opacity-0'
        )}>
            {/* text area container */}
            <div>
                <div className={cn('text-center text-accent-primary font-bold text-xs tracking-[0.03em]',
                'bg-white py-1 w-31 rounded-sm'
            )}
            >
                CREATIVE DESIGN
            </div>
            <div>
                <P others='text-white text-xl tracking-wide mt-2'>Visual Identity System</P>
            </div>
            </div>
            {/* icons area container */}
            <div className='flex justify-end'>
                <IconContainer />
            </div>
        </div>
      </div>

        {/* projects stack, features and date */}
        <div className='mt-4 flex justify-between items-center'>
            <div className='flex gap-1'> 
                <Features others='w-20'>
                    BRANDING
                </Features>
                <Features others='w-18'>
                    IDENTITY
                </Features>
            </div>
            <P others='text-sm'>2025</P>
        </div>
        
    </div>
  )
}

export default ProjectCard
