import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileNav from "@/components/MobileNav";
import UseScrollSpy from "@/hooks/UseScrollSpy";
import { cn } from "@/lib/Utils";

const Navbar = () => {
    const [navBarIsOpen, setNavBarIsOpen] = useState(false);
    const navLinks = [
      {name: 'Home', id: 'home'},
      {name: 'About', id: 'about'},
      {name: 'Resume', id: 'resume'},
      {name: 'Services', id: 'services'},
      {name: 'Portfolio', id: 'portfolio'},
      {name: 'Contact', id: 'contact'}
    ];
    const activeSection = UseScrollSpy(navLinks.map(link=>link.id))
  return (
    <div className="md:px-6 lg:px-25 py-3 px-5 bg-bg-secondary/80 shadow-xl w-full fixed z-50">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
        <h1 className="text-text-primary text-3xl font-bold">ORTECH</h1>
        </div>

       <div className="flex gap-4 md:gap-4 lg:gap-5 xl:gap-7.5 items-center">
        <div className="hidden text-text-primary text-lg md:flex gap-3 md:gap-5 lg:gap-6 xl:gap-10">
          {navLinks.map(link => <a 
            href={`#${link.id}`} key={link.id}
            className={cn('py-4 transition-all duration-300 ease-out', 
            activeSection === link.id ? 'text-accent-primary' : 'hover:text-accent-primary')}>
            {link.name}</a>)}
        </div>
        <ThemeToggle />
        {!navBarIsOpen && <button onClick={()=>setNavBarIsOpen(true)} className="flex items-center justify-center md:hidden text-text-primary text-lg">
          <Menu /></button>}
        {navBarIsOpen && <MobileNav activeSection={activeSection} setNavBarIsOpen={setNavBarIsOpen} navLinks={navLinks}/>}
       </div>
      </nav>
    </div>
  )
}

export default Navbar
