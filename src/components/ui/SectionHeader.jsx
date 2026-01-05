export const Header = ({header}) => {
  return (
      <div className='flex flex-col items-center gap-1'>
        <p className='text-lg sm:text-xl text-accent-primary/85'>{header}</p>
        <div className='w-9 h-[0.031rem] sm:w-11 md:w-12 lg:w-13 bg-accent-primary/85'></div>
      </div>
  )
}

export const SectionHeader = ({header}) => {
  return (
    <div className="bg-accent-primary/10 rounded-xl md:rounded-2xl w-25 md:w-28.5 text-center py-1.5">
      <p className="text-xs text-accent-primary font-bold md:text-sm">{header}</p>
    </div>
  )
}

