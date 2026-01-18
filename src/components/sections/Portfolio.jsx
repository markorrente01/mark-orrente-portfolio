import React from 'react';
import { Header } from '@/components/ui/SectionHeader';
import Project from '@/components/ui/Project';
import { cn } from '@/lib/Utils';

const H2 = ({children})=>{
  return(
    <h2 className='relative tracking-wide leading-[0.8] mb-4 font-bold text-text-primary text-2xl'>
          {children}
      </h2>
  )
}
const P = ({children})=>{
  return (
    <p className='relative leading-[1.3] text-text-secondary/90 text-base mt-2 mb-6 font-medium'>
      {children}
    </p>
  )
}

const Portfolio = () => {
    const content = `
          I deliver clean-code solutions that bridge the gap between complex ideas and 
          intuitive user interfaces. From concept to deployment, I ensure your digital 
          products are fast, accessible, and built to last.
      `;
  return (
    <section id='portfolio' className='sectionCenter mt-20 mb-10'>
        <Header 
            header='PORTFOLIO' 
            subHeading='Portfolio' 
            content={content}
            others='mb-10'
            data-aos='fade-up'
            />
            <Project />
            <div data-aos='fade-up' className='sm:flex border-t border-text-primary/10 pt-12'>
                <div>
                     <H2>Like what you see?</H2>
                    <P>
                        Your vision deserves a digital experience that is as functional as it is beautiful. 
                        Whether you have a fully-fleshed idea or just a spark of inspiration, I can help you bring it to 
                        life with clean code and modern design.
                    </P>
                </div>
               
                <div className='flex justify-center sm:justify-end items-center w-full'>
                    <button className={cn('soft-transition rounded-md bg-accent-primary py-3.5 sm:h-10  sm:py-0 text-white text-sm font-bold',
                        'hover:shadow-[0_5px_10px_2px_theme(colors.accent.primary/0.3)] hover:-translate-y-0.5'
                    )}>
                      <a href="#contact" className='px-7 sm:px-5 md:px-7 py-3.5'>Let's Work Together</a>
                        
                    </button>
                </div>
                
            </div>
    </section>
  )
}

export default Portfolio
