"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

interface SizeRadioProps {
  selectedSize: string | undefined;
  setSelectedSize: Dispatch<SetStateAction<string | undefined>>;
}

const sizes = [
  { value: "xs", label: "X-Small" },
  { value: "s", label: "Small" },
  { value: "m", label: "Medium" },
  { value: "l", label: "Large" },
  { value: "xl", label: "X-Large" },
  { value: "xxl", label: "XX-Large" },
  { value: "3xl", label: "3X-Large" },
  { value: "4xl", label: "4X-Large" },
];

const SizeRadio = ({ selectedSize, setSelectedSize }: SizeRadioProps) => {
  return (
    <RadioGroup
      value={selectedSize}
      onValueChange={setSelectedSize}
      className="flex flex-wrap"
    >
      {sizes.map((size) => (
        <div key={size.value} className="relative flex-grow">
          <RadioGroupItem
            value={size.value}
            id={size.value}
            className="sr-only"
          />
          <label
            htmlFor={size.value}
            className={cn(
              `flex w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm transition-colors`,
              selectedSize === size.value
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700",
              selectedSize !== size.value && "hover:bg-black hover:text-white",
            )}
          >
            {size.label}
          </label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default SizeRadio;
