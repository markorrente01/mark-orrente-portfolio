import { Progress } from "@/components/ui/Progress";

const SkillSub = ({skill}) => {
  return (
    <div>
    <div className="mt-5 mb-2  flex justify-between font-bold text-[0.85rem] sm:text-sm md:text-base">
            <p className="text-text-primary">{skill.name}</p>
            <data className="text-accent-primary" value={skill.value} >{skill.value}%</data>
    </div>
    <div><Progress value={skill.value}/></div>
    </div>
    
  )
}

export default SkillSub
