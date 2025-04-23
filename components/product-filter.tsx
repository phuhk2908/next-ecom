"use client";

import { ChevronRight, SlidersVertical, X } from "lucide-react";
import { Separator } from "./ui/separator";
import { Dispatch, SetStateAction, useState } from "react";
import { DualSlider } from "./ui/dual-slider";
import ColorRadio from "./shared/color-radio";
import SizeRadio from "./shared/size-radio";
import { Button } from "./ui/button";
import ExpandableContainer from "./shared/expandable-container";

interface ProductFilterProps {
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const ProductFilter = ({ setOpen }: ProductFilterProps) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 800]);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    "black",
  );
  const [selectedSize, setSelectedSize] = useState<string | undefined>("xs");

  return (
    <aside className="hide-scrollbar flex w-full flex-col gap-6 rounded-lg px-6 py-5 max-lg:overflow-y-scroll lg:border">
      <div className="flex items-center justify-between">
        <span className="text-[20px] font-bold">Filters</span>
        <SlidersVertical className="hidden size-6 text-black/40 lg:block" />
        {setOpen && (
          <X onClick={() => setOpen(false)} className="cursor-pointer" />
        )}
      </div>

      <Separator />

      <div className="w-full space-y-[22.5px] text-black/60">
        <div className="flex items-center justify-between">
          <span className="text-[16px]">T-Shirts</span>
          <ChevronRight className="size-4" />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[16px]">Shorts</span>
          <ChevronRight className="size-4" />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[16px]">Shirts</span>
          <ChevronRight className="size-4" />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[16px]">Hoodies</span>
          <ChevronRight className="size-4" />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[16px]">Jeans</span>
          <ChevronRight className="size-4" />
        </div>
      </div>

      <Separator />

      <ExpandableContainer title="Prices">
        <DualSlider
          min={0}
          max={1000}
          step={10}
          value={priceRange}
          onValueChange={setPriceRange}
        />
      </ExpandableContainer>

      {/* Filter colors */}
      <ExpandableContainer title="Colors">
        <ColorRadio
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          isProductFilter={true}
        />
      </ExpandableContainer>

      {/* Filter sizes */}
      <ExpandableContainer title="Sizes">
        <SizeRadio
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          isProductFilter={true}
        />
      </ExpandableContainer>

      <Button>Apply filters</Button>
    </aside>
  );
};

export default ProductFilter;
