import {cn} from '@/lib/Utils';

const ContactCard = ({icon, heading, subHeading}) => {
  return (
    <div className={cn('group bg-bg-card border border-text-secondary/12 flex gap-4 p-6 rounded-lg',
        'transform transition-all duration-300 ease-out hover:border-accent-primary',
        'cardShadow'
    )}>
      <div className={cn('flex items-center justify-center rounded-full bg-accent-primary/12 w-12 h-12',
        'group-hover:bg-accent-primary'
      )}>
        {icon}
      </div>

      <div className="flex flex-col gap-1 items-start">
        <p className="text-base sm:text-xl text-text-secondary font-bold">{heading}</p>
        <p className="text-sm sm:text-lg text-text-primary">{subHeading}</p>
      </div>
    </div>

  )
}

export default ContactCard;