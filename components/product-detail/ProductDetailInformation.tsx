"use client";

import { useState } from "react";
import ColorRadio from "../shared/ColorRadio";
import { Ratings } from "../shared/Ratings";
import SizeRadio from "../shared/SizeRadio";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

const ProductDetailInformation = () => {
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    "black",
  );
  const [selectedSize, setSelectedSize] = useState<string | undefined>("xs");

  return (
    <div className="flex w-full flex-col gap-4">
      <h2 className="font-integral text-4xl font-bold">
        One Life Graphic T-shirt
      </h2>
      <div className="flex items-center gap-2">
        <Ratings size={16} rating={4.5} variant="yellow" totalStars={5} />
        <span className="text-sm">4.5/5</span>
      </div>

      <div className="flex items-center gap-x-2.5">
        <div className="item-start flex gap-x-1">
          <span className="text-[20px] font-bold lg:text-[24px]">$180</span>
          <span className="text-[14px] text-base font-bold text-black/40 line-through">
            $180
          </span>
        </div>

        <Badge className="bg-[#ff3333]/10 text-[#ff3333]">20%</Badge>
      </div>

      <p className="text-black/60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempore
        quibusdam explicabo totam voluptatum unde suscipit incidunt,
        perferendis, dolorem voluptates aperiam architecto. Ut deleniti impedit
        unde excepturi repudiandae, commodi qui.
      </p>

      <Separator />

      <div className="flex flex-col gap-y-2">
        <span className="text-black/60">Select Colors</span>
        <ColorRadio
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>

      <Separator />

      <div className="flex flex-col gap-y-2">
        <span className="text-black/60">Select Colors</span>
        <SizeRadio
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      </div>
    </div>
  );
};

export default ProductDetailInformation;
