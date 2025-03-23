"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

interface DualSliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  className?: string;
  formatValue?: (value: number) => string;
  showValues?: boolean;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: [number, number];
  value?: [number, number];
  onValueChange?: (value: [number, number]) => void;
}

const DualSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  DualSliderProps
>(
  (
    {
      className,
      formatValue = (value) => value.toString(),
      showValues = true,
      min = 0,
      max = 100,
      step = 1,
      defaultValue = [25, 75],
      value,
      onValueChange,
      ...props
    },
    ref,
  ) => {
    const [localValue, setLocalValue] =
      React.useState<[number, number]>(defaultValue);
    const displayValue = value || localValue;

    const handleValueChange = React.useCallback(
      (newValue: number[]) => {
        const typedValue = newValue as [number, number];
        if (!value) {
          setLocalValue(typedValue);
        }
        onValueChange?.(typedValue);
      },
      [onValueChange, value],
    );

    return (
      <div className={cn("space-y-4", className)}>
        <SliderPrimitive.Root
          ref={ref}
          min={min}
          max={max}
          step={step}
          value={value || localValue}
          onValueChange={handleValueChange}
          className="relative flex w-full touch-none select-none items-center"
          {...props}
        >
          <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
            <SliderPrimitive.Range className="absolute h-full bg-primary" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
          <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
        </SliderPrimitive.Root>
        {showValues && (
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">
              {formatValue(displayValue[0])}
            </span>
            <span className="text-sm text-muted-foreground">
              {formatValue(displayValue[1])}
            </span>
          </div>
        )}
      </div>
    );
  },
);
DualSlider.displayName = "DualSlider";

export { DualSlider };
