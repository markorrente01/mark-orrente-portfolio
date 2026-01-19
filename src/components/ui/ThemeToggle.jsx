import { Moon, Sun } from 'lucide-react';
import React from 'react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/Utils';

const ThemeToggle = () => {
    const [isLightMode, setIsLightMode] = useState(false);

    const toggle = ()=>{
        if(isLightMode){
            document.documentElement.classList.remove('light');
            setIsLightMode(false);
            localStorage.setItem('theme', 'dark')
        }
        else{
            document.documentElement.classList.add('light');
            setIsLightMode(true);
            localStorage.setItem('theme', 'light')
        }
    }
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

  return (
    <button onClick={toggle} className={cn('flex items-center justify-center w-13 h-13 rounded-full',
        'transform transition-all duration-300 ease-out hover:bg-accent-primary hover:-translate-y-0.5'
    )}>
      {isLightMode ? <Moon className='text-text-primary'/> : <Sun className='text-text-primary'/>}
    </button>
  )
}

export default ThemeToggle
