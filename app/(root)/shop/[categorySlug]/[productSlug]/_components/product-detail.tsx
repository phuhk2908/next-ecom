"use client";

import { Product, Variant } from "@/types/product";
import { useEffect, useState } from "react";
import ImageGallery from "./image-gallery";
import QuantitySelector from "../../../../../../components/quantity-selector";
import VariantSelector from "./variant-selector";
import { Button } from "../../../../../../components/ui/button";
import { Skeleton } from "../../../../../../components/ui/skeleton";

interface ProductDetailProps {
  product: Product;
}

const ProductDetailSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-9 w-2/3" />

      <div className="mt-4">
        <Skeleton className="h-7 w-24" />
      </div>

      <Skeleton className="mt-4 h-20 w-full" />

      {/* Variant Selectors Skeleton */}
      <div className="mt-6 space-y-6">
        <div className="space-y-3">
          <Skeleton className="h-6 w-32" />
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-6 w-6 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Quantity Selector Skeleton */}
      <div className="mt-6">
        <Skeleton className="h-5 w-16" />
        <div className="mt-2 flex w-28 items-center justify-between">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
        </div>
      </div>

      {/* Inventory Status Skeleton */}
      <div className="mt-4">
        <Skeleton className="h-5 w-20" />
      </div>

      <div className="mt-3">
        <Skeleton className="h-10 w-28" />
      </div>
    </div>
  );
};

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [selectedAttributes, setSelectedAttributes] = useState<
    Record<string, string>
  >({});
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [quantity, setQuantity] = useState(1);

  const getUniqueAttributes = () => {
    const attributes: Record<string, Set<string | Record<string, string>>> = {};

    product.variant.forEach((variant: Variant) => {
      variant.attribute_value.forEach((attr: any) => {
        const attrName = attr.attribute.name;

        if (!attributes[attrName]) {
          attributes[attrName] = new Set();
        }

        if (attrName === "Color") {
          attributes[attrName].add(
            JSON.stringify({
              value: attr.value,
              hexcode: attr.hexcode,
            }),
          );
        } else {
          attributes[attrName].add(attr.value);
        }
      });
    });

    return Object.entries(attributes).map(([name, values]) => ({
      name,
      values: Array.from(values).map((value) =>
        name === "Color" ? JSON.parse(value as string) : value,
      ),
    }));
  };

  const attributes = getUniqueAttributes();

  useEffect(() => {
    const defaults: Record<string, string> = {};
    attributes.forEach((attr) => {
      if (attr.name === "Color") {
        defaults[attr.name] = (attr.values[0] as any).value;
      } else {
        defaults[attr.name] = attr.values[0] as string;
      }
    });
    setSelectedAttributes(defaults);
  }, []);

  useEffect(() => {
    if (Object.keys(selectedAttributes).length === attributes.length) {
      const matchingVariant = product.variant.find((variant) => {
        return Object.entries(selectedAttributes).every(
          ([attrName, attrValue]) => {
            return variant.attribute_value.some(
              (av) => av.attribute.name === attrName && av.value === attrValue,
            );
          },
        );
      });

      setSelectedVariant(matchingVariant || null);

      if (matchingVariant) {
        setQuantity(1);
      }
    } else {
      setSelectedVariant(null);
    }
  }, [selectedAttributes, product.variant, attributes.length]);

  const handleAttributeChange = (attributeName: string, value: string) => {
    setSelectedAttributes((prev) => ({
      ...prev,
      [attributeName]: value,
    }));
  };

  // Check if a specific attribute value combination is available
  const isAttributeValueAvailable = (
    attributeName: string,
    attributeValue: string,
  ) => {
    return product.variant.some(
      (v) =>
        v.attribute_value.some(
          (attr) =>
            attr.attribute.name === attributeName &&
            attr.value === attributeValue,
        ) &&
        // For non-color attributes, also check that the selected color is compatible
        (attributeName === "Color" ||
          v.attribute_value.some(
            (attr) =>
              attr.attribute.name === "Color" &&
              attr.value === selectedAttributes["Color"],
          )) &&
        v.inventory_stock > 0,
    );
  };

  return (
    <div className="mt-9 grid grid-cols-1 gap-10 lg:grid-cols-2">
      <ImageGallery variant={selectedVariant} productName={product.name} />

      {!selectedVariant ? (
        <ProductDetailSkeleton />
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

          <div className="mt-4">
            <p className="text-xl font-semibold text-gray-900">
              $
              {selectedVariant
                ? selectedVariant.price.toFixed(2)
                : product.price.toFixed(2)}
            </p>
          </div>

          <p className="mt-4 text-gray-600">{product.description}</p>

          {/* Variant Selectors */}
          <div className="mt-6 space-y-6">
            <VariantSelector
              attributes={attributes}
              selectedAttributes={selectedAttributes}
              onChange={handleAttributeChange}
              isAttributeValueAvailable={isAttributeValueAvailable}
            />
          </div>

          {/* Quantity Selector */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
            <QuantitySelector
              quantity={quantity}
              setQuantity={setQuantity}
              max={selectedVariant?.inventory_stock || 0}
            />
          </div>

          {/* Inventory Status */}
          {selectedVariant && (
            <div className="mt-4">
              <p
                className={`text-sm ${selectedVariant.inventory_stock > 5 ? "text-green-600" : selectedVariant.inventory_stock > 0 ? "text-yellow-600" : "text-red-600"}`}
              >
                {selectedVariant.inventory_stock > 5
                  ? "In Stock"
                  : selectedVariant.inventory_stock > 0
                    ? `Low Stock - Only ${selectedVariant.inventory_stock} left`
                    : "Out of Stock"}
              </p>
            </div>
          )}

          <div className="mt-3">
            <Button size="lg">Add to cart</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
