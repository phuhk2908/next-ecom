"use client";

import { Variant } from "@/types/product";
import { useState } from "react";
import { AspectRatio } from "../../../../../../components/ui/aspect-ratio";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Skeleton } from "../../../../../../components/ui/skeleton";

interface ImageGalleryProps {
  variant: Variant | null;
  productName: string;
}

const ImageGallerySkeleton = () => {
  return (
    <div className="flex flex-col gap-4 max-lg:h-full md:flex-row">
      <div className="order-2 grid gap-2 max-md:grid-cols-3 md:grid-rows-3 lg:order-1">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="w-full overflow-hidden rounded-lg border-2 border-border md:w-[150px]"
          >
            <AspectRatio ratio={1} className="relative">
              <Skeleton className="absolute inset-0" />
            </AspectRatio>
          </div>
        ))}
      </div>

      <div className="order-1 flex-1 lg:order-2">
        <AspectRatio ratio={1} className="relative">
          <Skeleton className="absolute inset-0 rounded-lg" />
        </AspectRatio>
      </div>
    </div>
  );
};

const ImageGallery = ({ variant, productName }: ImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!variant) {
    return <ImageGallerySkeleton />;
  }

  return (
    <div className="flex flex-col gap-4 max-lg:h-full md:flex-row">
      <div className="order-2 grid gap-2 max-md:grid-cols-3 md:grid-rows-3 lg:order-1">
        {variant.images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "w-full overflow-hidden rounded-lg border-2 transition-all md:w-[150px]",
              currentImageIndex === index
                ? "border-primary"
                : "border-border hover:border-primary/50",
            )}
            onClick={() => setCurrentImageIndex(index)}
          >
            <AspectRatio ratio={1} className="relative" key={index}>
              <Image
                src={image.src}
                alt={image.alt || productName}
                fill
                sizes="50vw"
                className="object-cover"
              />
            </AspectRatio>
          </div>
        ))}
      </div>

      <div className="relative order-1 w-full overflow-hidden rounded-lg bg-muted/20 max-md:aspect-square lg:order-2">
        <Image
          src={
            variant.images[currentImageIndex].src ||
            "https://placehold.co/200x200"
          }
          alt={variant.images[currentImageIndex].alt as string}
          fill
          className="object-cover"
          priority
          sizes="50vw"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
