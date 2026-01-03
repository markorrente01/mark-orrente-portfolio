import { cn } from "@/lib/Utils";
import { X } from "lucide-react";
const MobileNav = ({setNavBarIsOpen, navLinks}) => {
  return (
    <div className={cn('relative bg-bg-secondary/80 overflow-auto md:hidden h-full w-full fixed center',
        'flex flex-col gap-5 items-center text-text-primary text-lg pt-15', 'transition-all duration-1000 ease-out'
    )}>
      <X onClick={()=>setNavBarIsOpen(false)} className="top-5 right-4 absolute"/>
      <div className={cn('bg-bg-card py-3 px-4 rounded-md w-[90%] h-[90%]',
        'flex flex-col gap-1.5'
      )}>
        {navLinks.map(link => <a 
        href={`#${link}`} key={link}
        className="py-2.5 transition-all duration-300 ease-out hover:text-accent-primary">
          {link}</a>)}
      </div>
    </div>
  )
}

export default MobileNav
