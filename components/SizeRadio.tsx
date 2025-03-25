"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

interface SizeRadioProps {
  selectedSize: string | undefined;
  setSelectedSize: Dispatch<SetStateAction<string | undefined>>;
  isProductFilter?: boolean;
}

const sizes = [
  { value: "xs", label: "XS" },
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" },
  { value: "xxl", label: "XXL" },
  { value: "3xl", label: "3XL" },
  { value: "4xl", label: "4XL" },
];

const SizeRadio = ({
  selectedSize,
  setSelectedSize,
  isProductFilter = false,
}: SizeRadioProps) => {
  return (
    <RadioGroup
      value={selectedSize}
      onValueChange={setSelectedSize}
      className="flex flex-wrap"
    >
      {sizes.map((size) => (
        <div
          key={size.value}
          className={cn("relative", isProductFilter && "flex-grow")}
        >
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
