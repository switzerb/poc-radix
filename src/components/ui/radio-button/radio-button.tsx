"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

type RadioGroupProps = React.ComponentProps<typeof RadioGroupPrimitive.Root>;
type RadioGroupItemProps = React.ComponentProps<typeof RadioGroupPrimitive.Item>;

const RadioGroup =
({ className, ...props } : RadioGroupProps) => {
    return (
            <RadioGroupPrimitive.Root
                    data-slot="radio-group"
                    className={cn("grid gap-2", className)}
                    {...props}
            />
    )
}
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = ({ className, ...props }: RadioGroupItemProps) => {
    return (
            <RadioGroupPrimitive.Item
                    data-slot="radio-group-item"
                    className={cn(
                            "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                            className
                    )}
                    {...props}
            >
                <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                    <Circle className="h-3.5 w-3.5 fill-primary" />
                </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>
    )
}
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
