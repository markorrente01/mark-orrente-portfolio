import { BsBriefcase } from "react-icons/bs";
import { cn } from "@/lib/Utils"

const AbtBox = ({icon, heading, subHeading}) => {
  return (
    <div className={cn('bg-bg-card border border-text-secondary/10 flex gap-4 px-4 py-3.5 rounded-2xl',
        'transform transition-all duration-300 ease-out hover:border-accent-primary hover:-translate-y-1'
    )}>
      <div className="flex items-center">
        {icon}
      </div>

      <div className="flex flex-col gap-1 items-start">
        <p className="text-sm text-text-secondary/40">{heading}</p>
        <p className="text-sm text-text-primary font-bold">{subHeading}</p>
      </div>
    </div>
  )
}

export default AbtBox
