import React from 'react';
import { Header } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/Utils';
import ResumeSubComp from "@/components/ui/ResumeSubComp"

const Resume = () => {
    const content = `
        Frontend developer with hands-on experience building scalable, 
        responsive web applications using React and Next.js, focused on 
        clean code, performance optimization, and delivering user-centric 
        digital experiences.
    `;
  return (
    <section id='resume' className='sectionCenter mt-20'>
      <Header 
      header='RESUME' 
      subHeading='Resume' 
      content={content}
      />
      <ResumeSubComp />
        
    </section>
  )
}

export default Resume;
