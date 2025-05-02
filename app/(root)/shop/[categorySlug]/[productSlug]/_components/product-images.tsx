"use client";

import { useState } from "react";
import Image from "next/image";

type ProductImage = {
  image: {
    id: number;
    url: string;
    alt_text: string;
    deleted_at: null;
    created_at: string;
    updated_at: string;
  };
};

interface ProductImagesProps {
  images: ProductImage[];
  productName: string;
}

export default function ProductImages({
  images,
  productName,
}: ProductImagesProps) {
  const [currentImage, setCurrentImage] = useState<string>(
    images.length > 0
      ? images[0].image.url
      : "https://placehold.co/600x400?text=Product+Image",
  );

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
        <Image
          src={currentImage || "/placeholder.svg"}
          alt={productName}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnail gallery */}
      {images.length > 0 && (
        <div className="flex gap-2 overflow-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              className="relative h-20 w-20 cursor-pointer overflow-hidden rounded-md border"
              onClick={() => setCurrentImage(img.image.url)}
            >
              <Image
                src={img.image.url || "/placeholder.svg"}
                alt={img.image.alt_text || `Product image ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
