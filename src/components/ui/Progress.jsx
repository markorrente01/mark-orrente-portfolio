"use client"

import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/Utils";

function Progress({ className, value, ...props }) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-bg-card relative h-3 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-accent-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress };
