import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Ratings } from "./shared/Ratings";
import { Badge } from "./ui/badge";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

const ProductCard = () => {
  return (
    <div className="flex size-full flex-col rounded-xl border">
      <div className="relative overflow-hidden rounded-lg">
        <AspectRatio ratio={1}>
          <Image
            src="https://placehold.co/400.png"
            alt="Image"
            width={400}
            height={400}
          />
        </AspectRatio>

        <Badge className="absolute right-2 top-2 bg-[#ff3333]/10 text-[#ff3333]">
          -20%
        </Badge>
      </div>

      <div className="mt-4 flex flex-col gap-2 p-2">
        <span className="line-clamp-1 text-[16px] font-bold lg:text-[20px]">
          Gradient Graphic T-shirt
        </span>
        <div className="flex items-center gap-2">
          <Ratings size={16} rating={4.5} variant="yellow" totalStars={5} />
          <span className="text-sm">4.5/5</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="item-start flex gap-x-1">
            <span className="text-[20px] font-bold lg:text-[24px]">$180</span>
            <span className="text-[14px] text-base font-bold text-black/40 line-through">
              $180
            </span>
          </div>

          <Button className="rounded-full" size="icon">
            <ShoppingBag className="size-2 lg:size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
