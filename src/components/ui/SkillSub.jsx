"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/Progress";
import { UseInView } from "@/hooks/UseInView";

const SkillSub = ({ skill, ...props }) => {
  const { ref, isInView } = UseInView({ threshold: 0.5 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      setProgress(skill.value);
    }
  }, [isInView, skill.value]);

  return (
    <div ref={ref} {...props}>
      <div className="mt-5 mb-2 flex justify-between font-bold text-[0.85rem] sm:text-sm md:text-base">
        <p className="text-text-primary">{skill.name}</p>
        <data className="text-accent-primary" value={skill.value}>
          {skill.value}%
        </data>
      </div>

      <Progress value={progress} />
    </div>
  );
};

export default SkillSub;
