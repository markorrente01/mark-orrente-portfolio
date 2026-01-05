import { cn } from "@/lib/Utils";
import { X } from "lucide-react";

const MobileNav = ({setNavBarIsOpen, navLinks, activeSection}) => {
  return (
    <div className={cn('relative bg-bg-secondary/80 overflow-auto lg:hidden h-full w-full fixed center',
        'flex flex-col gap-5 items-center text-text-primary text-lg pt-15', 'transition-all duration-1000 ease-out'
    )}>
      <X onClick={()=>setNavBarIsOpen(false)} className="top-5 right-4 absolute"/>
      <div className={cn('bg-bg-card py-3 px-4 rounded-md w-[90%] h-[90%]',
        'flex flex-col gap-1.5'
      )}>
        {navLinks.map(link => <a onClick={()=>setNavBarIsOpen(false)}
        href={`#${link.id}`} key={link.id}
        className={cn('py-2.5 transition-all duration-300 ease-out',
          activeSection === link.id ? 'text-accent-primary' : 'hover:text-accent-primary'
        )}>
          {link.name}</a>)}
      </div>
    </div>
  )
}
export default MobileNav;