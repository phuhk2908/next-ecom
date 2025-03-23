"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import { SlidersVertical } from "lucide-react";
import ProductFilter from "./ProductFilter";
import { useState } from "react";

const ProductFilterMobile = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="block rounded-full bg-[#F0F0F0] p-2 lg:hidden">
          <SlidersVertical className="size-4 text-black" />
        </div>
      </DrawerTrigger>
      <DrawerContent className="h-[calc(100%-64px)]">
        <ProductFilter setOpen={setOpen} />
      </DrawerContent>
    </Drawer>
  );
};

export default ProductFilterMobile;
