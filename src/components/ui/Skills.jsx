import { useState, useEffect } from "react";
import AOS from 'aos';
import {cn} from "@/lib/Utils";
import SkillSub from "@/components/ui/SkillSub";

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const categories = ['All Skills', 'Core Skills', 'Styling & Ui', 
        'Tools & Workflow']
    const skillsInfo = [
        {name: 'React.js & Next.js', value: 96, category: 'Core Skills'},
        {name: 'Typescript', value: 94, category: 'Core Skills'},
        {name: 'Javascript (ES6)', value: 97, category: 'Core Skills'},
        {name: 'HTML5 & CSS3', value: 95, category: 'Core Skills'},
        {name: 'Responsive Design', value: 95, category: 'Core Skills'},
        {name: 'API Integration', value: 90, category: 'Core Skills'},
        {name: 'Tailwind CSS', value: 92, category: 'Core Skills'},
        {name: 'SCSS/SASS', value: 90, category: 'Styling & Ui'},
        {name: 'UI/UX Implementation', value: 95, category: 'Styling & Ui'},
        {name: 'Git & GitHub', value: 93, category: 'Tools & Workflow'},
        {name: 'Node.js', value: 90, category: 'Tools & Workflow'},
        {name: 'Debugging & Error Handling', value: 89, category: 'Core Skills'},
        {name: 'Figma to Code', value: 94, category: 'Styling & Ui'},
        
    ];
    const filteredSkills = activeCategory ? skillsInfo.filter(skill=>skill.category===activeCategory)
      : skillsInfo;
    const handleFilter = (category)=>{
      setActiveCategory(category === 'All Skills' ? null : category)
    }

    // handle reanimate on state change to rerender new skills
    useEffect(() => {
      AOS.refresh();
    }, [activeCategory, filteredSkills]);

  return (
    <section>
        <div className="flex flex-wrap justify-center gap-2.5 md:gap-3.5 md:mb-4">
      {categories.map((category, index)=>{
        return (
            <button data-aos='fade-down' onClick={()=>handleFilter(category)} key={index} className={cn('rounded-md border border-text-secondary/12 text-text-primary py-2.5 px-4',
                'transform transition-all duration-300 ease-out ', 'text-[0.85rem] sm:text-sm md:text-base',
                 activeCategory === category || (category === 'All Skills' && activeCategory === null) ? 'bg-accent-primary text-white' : '')}>
                    {category}
            </button>
        )
      })}
    </div>

    <div className="grid md:grid-cols-2 md:gap-5.5">
        {filteredSkills.map((skill, index)=>{
          return (
            <SkillSub skill={skill} key={skill.name} data-aos='fade-up'/>
          )
        })}
    </div>
    
    </section>
    
  )
}

export default Skills
