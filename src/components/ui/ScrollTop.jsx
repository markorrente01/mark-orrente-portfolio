import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { cn } from '@/lib/Utils'

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(()=>{
        const toggleVisibility = ()=>{
            //if user scrolls down to a certain point then show the button
            if(window.pageYOffset > 30){
                setIsVisible(true)
            }else setIsVisible(false);
        }
        window.addEventListener('scroll', toggleVisibility);
        return ()=>window.removeEventListener('scroll', toggleVisibility);
    }, [])

    //function to handle scroll back to top
    const handleScroll = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
    <>
        {isVisible && 
        <button 
            onClick={handleScroll}
            className='transition text-white bg-accent-primary hover:bg-accent-primary/50 p-3 rounded-lg fixed top-[90vmin] right-[20px]'
            >
            <FaArrowUp />
        </button>}
    </>
    
  )
}

export default ScrollButton;
