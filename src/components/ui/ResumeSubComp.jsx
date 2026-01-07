import React from 'react';
import { cn } from "@/lib/Utils"
import { SectionHeader, ResumeHeader } from '@/components/ui/SectionHeader';
import { GrPersonalComputer } from "react-icons/gr";

const H3 = ({children})=>{
  return(
    <h3 className='mt-4 font-medium text-text-primary text-xl md:text-2xl lg:text-3xl'>
          {children}
      </h3>
  )
}

const SubHead =({children})=>{
  return(
    <p className='mt-2 mb-1 font-medium text-text-primary/50 text-sm md:text-base lg:text-xl'>
      {children}
    </p>
  )
}

const P = ({children})=>{
  return (
    <p className='leading-[1.7] text-text-secondary/50 text-sm sm:text-base mt-4 mb-6 font-medium'>
      {children}
    </p>
  )
}

const Points = ({children, others})=>{
  return (
    <div className={cn('border bg-accent-primary/15 w-22', others,
    'rounded-2xl md:rounded-3xl text-center py-1.5 md:py-2')}>
      <p className="font-medium text-xs text-accent-primary">{children}</p>
    </div>
  )
}

const bulletPoints = ['Leadership', 'Architecture', 'Strategy'];

const ResumeSubComp = () => {
  return (
    <div>

        <div>
        <SectionHeader 
        header='EXPERIENCE' 
        subHeading='Professional Journey'
        />
        </div>

        <div className={cn('border border-accent-primary rounded-2xl py-4 px-5 md:px-7 md:py-6', 
          'cardGradient hover:-translate-y-1.5')}>
            <div className='md:justify-between flex flex-col md:flex-row items-center'>
                <div className={cn('bg-gradient-to-r from-accent-primary to-accent-primary/50',
                     'flex justify-center items-center rounded-xl w-12 py-3.5 mb-4')}>
                <GrPersonalComputer className='text-text-primary w-5 h-5'/>
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


      </div>
  )
}

export default ResumeSubComp
