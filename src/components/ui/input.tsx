import * as React from "react"

import { cn } from "@/shared/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'border border-[#E5E5F0] rounded-xl p-3 focus-visible:ring-1 focus-visible:ring-[#E5E5F0] focus-visible:border-[#E5E5F0] outline-none w-full',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
