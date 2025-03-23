"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dispatch, SetStateAction } from "react";

interface ColorRadioProps {
  selectedColor: string | undefined;
  setSelectedColor: Dispatch<SetStateAction<string | undefined>>;
}

const ColorRadio = ({ selectedColor, setSelectedColor }: ColorRadioProps) => {
  const colors = [
    { value: "black", class: "bg-black", classActive: "ring-black" },
    { value: "blue", class: "bg-blue-600", activeClass: "ring-blue-600" },
    { value: "red", class: "bg-red-600", activeClass: "ring-red-600" },
    { value: "green", class: "bg-green-600", activeClass: "ring-green-600" },
    { value: "yellow", class: "bg-yellow-400", activeClass: "ring-yellow-400" },
    { value: "purple", class: "bg-purple-600", activeClass: "ring-purple-600" },
  ];

  return (
    <RadioGroup
      value={selectedColor}
      onValueChange={setSelectedColor}
      className="grid grid-cols-6 gap-3"
    >
      {colors.map((color) => (
        <div
          key={color.value}
          className="relative flex items-center justify-center"
        >
          <RadioGroupItem
            value={color.value}
            id={color.value}
            className="sr-only"
          />
          <label
            htmlFor={color.value}
            className={`size-6 cursor-pointer rounded-full ${color.class} flex items-center justify-center ring-offset-2 ring-offset-background transition-all ${
              selectedColor === color.value ? `ring-2 ${color.activeClass}` : ""
            }`}
          >
            {selectedColor === color.value && (
              <span className="relative size-2 rounded-full bg-white opacity-80" />
            )}
          </label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default ColorRadio;
