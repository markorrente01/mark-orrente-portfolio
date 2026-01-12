import {cn} from "@/lib/Utils";
export const Header = ({header, subHeading, content, others}) => {
  return (
    <div className={others}>
      <div className='flex flex-col items-center gap-1'>
        <p className='text-base sm:text-lg text-accent-primary/85 tracking-wider'>{header}</p>
        <div className='w-9 h-[0.031rem] sm:w-11 md:w-12 lg:w-13 bg-accent-primary/85'></div>
      </div>
      <h2 className='my-4 heading text-center'>
          {subHeading}
      </h2>
      <article className='text-text-secondary text-base sm:text-lg text-center'>
                {content}
            </article>
    </div>
      
  )
}

export const SectionHeader = ({header, subHeading}) => {
  return (
    <div className="mb-5 md:mb-10">
      <div className={cn('bg-gradient-to-r from-accent-primary to-accent-primary/50 m-auto mt-12 mb-5', 
    'rounded-2xl md:rounded-3xl text-center py-1.5 md:py-2 w-28 md:w-30')}>
      <p className="font-bold text-sm md:text-base text-white">{header}</p>
    </div>
        <h3 className='my-4 text-center font-semibold text-text-primary text-xl md:text-2xl lg:text-3xl'>
          {subHeading}
      </h3>
    </div>
    
  )
}
export const ResumeHeader = ({children}) => {
  return (
      <div className={cn('bg-accent-primary/15 w-22 md:w-24 border border-accent-primary', 
    'rounded-2xl md:rounded-3xl text-center py-2')}>
      <p className="font-semibold text-xs text-accent-primary">{children}</p>
    </div>
  )
}

