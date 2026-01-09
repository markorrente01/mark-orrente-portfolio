import React from 'react';
import { cn } from "@/lib/Utils"
import { SectionHeader, ResumeHeader } from '@/components/ui/SectionHeader';
import { GrPersonalComputer } from "react-icons/gr";
import { RiRemoteControlLine } from "react-icons/ri";

const H3 = ({children})=>{
  return(
    <h3 className='mt-4 font-medium text-text-primary text-xl md:text-2xl lg:text-3xl'>
          {children}
      </h3>
  )
}

const SubHead =({children, others})=>{
  return(
    <p className={cn('mt-2 mb-1 font-medium text-text-primary/50 text-sm md:text-base lg:text-xl', others)}>
      {children}
    </p>
  )
}

const P = ({children, others})=>{
  return (
    <p className={cn('leading-[1.7] text-text-secondary/50 text-sm sm:text-base mt-4 mb-6 font-medium', others)}>
      {children}
    </p>
  )
}

const Points = ({children, others})=>{
  return (
    <div className={cn('border bg-accent-primary/15 w-22',
    'rounded-2xl md:rounded-3xl text-center py-1.5 md:py-2', others)}>
      <p className="font-medium text-xs text-accent-primary">{children}</p>
    </div>
  )
}

const bulletPoints = ['Leadership', 'Architecture', 'Strategy'];

const ResumeSubComp = () => {
  return (
    <div className='md:flex md:gap-10'>

{/* ------------------- experience container start ------------------- */}
    <div>
      {/* <div> */}
        <SectionHeader 
        header='EXPERIENCE' 
        subHeading='Professional Journey'
        />
        {/* </div> */}
{/* ---------------- experience 1 container start ------------------------ */}
        <div className={cn('mb-8 group relative overflow-hidden border border-accent-primary rounded-2xl py-4 px-5 md:px-7 md:py-6', 
          'cardGradient expHover cardShadow')}>
            <div className='w-0 group-hover:w-full transition-all duration-300 ease-out h-[4px] bg-accent-primary absolute inset-0'></div>
            <div className='md:justify-between flex flex-col md:flex-row items-center'>
                <div className={cn('bg-gradient-to-r from-accent-primary to-accent-primary/50',
                     'flex justify-center items-center rounded-xl w-12 py-3.5 mb-4')}>
                <GrPersonalComputer className='text-white w-5 h-5'/>
                </div>
                <ResumeHeader>
                  CURRENT
                </ResumeHeader>
            </div>

            <H3>
              Lead Frontend Developer
            </H3>
            <SubHead>
              AshpotMicrosystems
            </SubHead>
            <Points others='w-27 border-none'>
              2025 - present
            </Points>

            <P>
              Spearheaded React and Next.js frontend architecture, optimizing 
              performance, streamlining workflows, and delivering polished, scalable, 
              production-ready user interfaces for products.
            </P>

            <div className='flex gap-2'>
              {
                bulletPoints.map((points, index)=>{
                  return (
                    <Points key={index} others='border-accent-primary/30'>{points}</Points>
                  )
                })
              }
            </div>
      </div>
{/* ---------------- experience 1 container end ------------------------ */}

{/* ---------------- experience 2 container start ------------------------ */}
        <div className={cn('group relative overflow-hidden border border-accent-primary rounded-2xl py-4 px-5 md:px-7 md:py-6', 
          'expHover cardShadow bg-bg-card')}>
            <div className='w-0 group-hover:w-full transition-all duration-300 ease-out h-[4px] bg-accent-primary absolute inset-0'></div>
            <div className='md:justify-between flex flex-col md:flex-row items-center'>
                <div className={cn('bg-gradient-to-r from-accent-primary to-accent-primary/50',
                     'flex justify-center items-center rounded-xl w-12 py-3.5 mb-4')}>
                <RiRemoteControlLine className='text-white w-5 h-5'/>
                </div>
                <ResumeHeader>
                  FREELANCE
                </ResumeHeader>
            </div>

            <H3>
              Senior Frontend Developer
            </H3>
            <SubHead>
              Upwork.com
            </SubHead>
            <Points others='w-27 border-none'>
              2025 - present
            </Points>

            <P others='mb-2'>
              Delivering end-to-end frontend solutions with React and Next.js, 
              translating client requirements into polished, scalable interfaces 
              optimized for performance and maintainability.
            </P>
      </div>
{/* ---------------- experience 2 container end ------------------------ */}

    </div>
    {/* ----------------experience container end----------------------- */}

{/* --------------- education container start ------------------------- */}
    <div>
      <SectionHeader 
          header='EDUCATION' 
          subHeading='Academic Background'
        />
        <div>
          {/* ------------- education 1 container start ------------------ */}
          <div className={cn('bg-bg-card mb-8 relative overflow-hidden border border-text-secondary/12 rounded-2xl py-4 px-5 md:px-7 md:py-6', 
          'eduHover cardShadow hover:border-accent-primary')}>
            <div className='md:justify-between flex flex-col md:flex-row'>
                <Points others='md:py-1 w-25 md:flex md:items-center md:justify-center border-none'>
                  2022 - 2025
              </Points>
              <SubHead>
                BACHELOR
              </SubHead>
            </div>

            <H3>
              Bachelor of Computer Science
            </H3>
            <SubHead others='mt-1'>
                Ogbannaya Onu Polytechnic Aba, Abia
              </SubHead>

            <P others='mb-2'>
              Built a strong foundation in computer science principles, including data 
              structures, algorithms, software engineering, databases, and web technologies, 
              with hands-on project experience and collaborative development practices.
            </P>
      </div>
          {/* ------------- education 1 container end ------------------ */}

{/* --------------education 2 container start ---------------------------*/}
<div className={cn('bg-bg-card relative overflow-hidden border border-text-secondary/12 rounded-2xl py-4 px-5 md:px-7 md:py-6', 
          'eduHover cardShadow hover:border-accent-primary')}>
            <div className='md:justify-between flex flex-col md:flex-row'>
                <Points others='md:py-1 border-none w-16 md:flex md:items-center md:justify-center'>
                  2025
              </Points>
              <SubHead>
                CERTIFICATE
              </SubHead>
            </div>

            <H3>
              Web Development
            </H3>
            <SubHead others='mt-1'>
                Ashpot Academy of Technology
              </SubHead>

            <P others='mb-2'>
              Completed an intensive web development programme focused on building 
              responsive, production-ready web applications using modern frontend
               technologies, best practices, and real-world project workflows.
            </P>
      </div>
{/* --------------education 2 container end ---------------------------*/}
        </div>
    </div>
{/* --------------- education container end ------------------------- */}
  </div>
  )
}

export default ResumeSubComp
