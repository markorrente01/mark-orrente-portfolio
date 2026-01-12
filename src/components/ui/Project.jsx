import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { cn } from '@/lib/Utils';

const Project = () => {
    const [activeCategory, setActiveCategory] = useState('All Projects');
    const categories = ['All Projects', 'Web Apps', 'Landing Pages'];
    const message = [
      {content: 'Still Working on The Portfolio Projects.', category: 'All Projects'},
      {content: 'Still Working on The Portfolio Web Apps Projects.', category: 'Web Apps'},
      {content: 'Still Working on Them Landing Pages.', category: 'Landing Pages'}
    ]
    const handleFilter = (category)=>{
          // setActiveCategory(category === 'All Projects' ? null : category)
          setActiveCategory(category)
        }
        // const filterMessage = activeCategory ? (message.filter(content=>activeCategory===content.category)) : message;
        const filterMessage = activeCategory && (message.filter(content=>activeCategory===content.category));
  return (
        <section className="mb-15">
            <div className="flex flex-wrap justify-center gap-2.5 md:gap-3.5 mb-10">
          {categories.map((category, index)=>{
            return (
                <button onClick={()=>handleFilter(category)} key={index} className={cn('rounded-md border border-text-secondary/12 text-text-primary py-2.5 px-4',
                    'transform transition-all duration-300 ease-out ', 'text-[0.85rem] sm:text-sm md:text-base',
                     activeCategory === category || (category === 'All Projects' && activeCategory === null) ? 'bg-accent-primary text-white' : '')}>
                        {category}
                </button>
            )
          })}
        </div>
        {/* <div className="sm:grid-cols-2 md:grid-cols-3 grid auto-cols-fr gap-x-6 gap-y-10"> */}
        <div className="">
          {
            filterMessage.map((message, index)=>{
              return(<h1 key={index} className="text-text-primary text-center text-2xl sm:text-3xl font-bold">{message.content}</h1>)
            })
          }
        </div>
       
        </section>
  )
  
}

export default Project;
