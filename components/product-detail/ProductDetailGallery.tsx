"use client";

import { useState } from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductDetailGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      src: "https://placehold.co/600x600",
      alt: "T-shirt front view",
      thumbnail: "https://placehold.co/200x200",
    },
    {
      src: "https://placehold.co/600x600",
      alt: "T-shirt back view",
      thumbnail: "https://placehold.co/200x200",
    },
    {
      src: "https://placehold.co/600x600",
      alt: "T-shirt on model",
      thumbnail: "https://placehold.co/200x200",
    },
  ];

  return (
    <div className="flex flex-col gap-4 max-lg:h-full md:flex-row">
      <div className="order-2 grid gap-2 max-md:grid-cols-3 md:grid-rows-3 lg:order-1">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "w-full overflow-hidden rounded-lg border-2 transition-all md:w-[150px]",
              selectedImage === index
                ? "border-primary"
                : "border-border hover:border-primary/50",
            )}
            onClick={() => setSelectedImage(index)}
          >
            <AspectRatio ratio={1} className="relative" key={index}>
              <Image
                src={image.thumbnail}
                alt={image.alt}
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
          src={images[selectedImage].src || "https://placehold.co/200x200"}
          alt={images[selectedImage].alt}
          fill
          className="object-cover"
          priority
          sizes="50vw"
        />
      </div>
    </div>
  );
};

export default ProductDetailGallery;
