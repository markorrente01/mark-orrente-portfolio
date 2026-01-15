import { Header } from '@/components/ui/SectionHeader';
import ResumeSubComp from "@/components/ui/ResumeSubComp";
import { cn } from '@/lib/Utils'

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
      <div className='flex justify-between gap-5'>
         <button
            className={cn('mt-10 w-full soft-transition rounded-md bg-accent-primary text-white text-base font-bold',
                'hover:shadow-[0_5px_10px_2px_theme(colors.accent.primary/0.3)] hover:-translate-y-0.5 animate-[bounce_4s_infinite]'
            )}>
              <a
              href='/Mark_Ogbonna_CV.pdf'
              target="_blank"
              className='block py-4'
              >Preview CV</a>
          </button>
          <button
            className={cn('mt-10 w-full soft-transition rounded-md bg-accent-primary text-white text-base font-bold',
                'hover:shadow-[0_5px_10px_2px_theme(colors.accent.primary/0.3)] hover:-translate-y-0.5 animate-[bounce_4s_infinite]'
            )}>
              <a
              href='/Mark_Ogbonna_CV.pdf'
              download="Mark_Ogbonn's_CV.pdf"
              className='block py-4'
              >Download CV</a>
          </button>
      </div>
          
      
    </section>
  )
}
export default Resume;