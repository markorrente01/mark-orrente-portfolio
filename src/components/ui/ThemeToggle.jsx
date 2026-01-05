import { Moon, Sun } from 'lucide-react';
import React from 'react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/Utils';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggle = ()=>{
        if(isDarkMode){
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
            localStorage.setItem('theme', 'light')
        }
        else{
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
            localStorage.setItem('theme', 'dark')
        }
    }
    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme==='dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, [])

  return (
    <button onClick={toggle} className={cn('flex items-center justify-center w-13 h-13 rounded-full',
        'transform transition-all duration-300 ease-out hover:bg-accent-primary hover:-translate-y-0.5'
    )}>
      {isDarkMode ? <Sun className='text-text-primary'/> : <Moon className='text-text-primary'/>}
    </button>
  )
}

export default ThemeToggle
