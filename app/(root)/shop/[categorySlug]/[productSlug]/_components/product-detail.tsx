"use client";

import { useState, useEffect } from "react";
import ProductImages from "./product-images";
import { AddToCartButton } from "./add-to-cart-button";
import { AttributeSelector } from "./attribute-selector";
import { InventoryStatus } from "./inventory-status";
import { ProductDescription } from "./product-description";
import ProductInfo from "./product-info";
import { QuantitySelector } from "./quantity-selector";

// // Define types
// type AttributeValue = {
//   id: number;
//   values: {
//     id: number;
//     id_attributes: number;
//     value: string;
//     attribute: {
//       name: string;
//     };
//   };
// };

// type ProductImage = {
//   image: {
//     id: number;
//     url: string;
//     alt_text: string;
//     deleted_at: null;
//     created_at: string;
//     updated_at: string;
//   };
// };

// type Variant = {
//   id: number;
//   sku: string;
//   price: string;
//   weight: string;
//   inventory_quantity: number;
//   is_active: boolean;
//   deleted_at: null;
//   created_at: string;
//   updated_at: string;
//   attribute_values: AttributeValue[];
//   product_images: ProductImage[];
// };

// type Product = {
//   id: number;
//   description: string;
//   id_type: number;
//   slug: string;
//   id_category: number;
//   name: string;
//   rating: null;
//   is_active: boolean;
//   deleted_at: null;
//   created_at: string;
//   updated_at: string;
//   category: {
//     name: string;
//     level: number;
//     slug: string;
//   };
//   _count: {
//     variants: number;
//   };
//   type: {
//     name: string;
//   };
//   variants: Variant[];
// };

// type AttributeOption = {
//   name: string;
//   values: string[];
// };

// // Type for inventory by attribute
// type InventoryByAttribute = {
//   [attributeName: string]: {
//     [attributeValue: string]: number;
//   };
// };

export default function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [selectedAttributes, setSelectedAttributes] = useState<
    Record<string, string>
  >({});
  const [availableAttributes, setAvailableAttributes] = useState<
    AttributeOption[]
  >([]);
  const [inventoryByAttribute, setInventoryByAttribute] =
    useState<InventoryByAttribute>({});
  const [availableAttributeValues, setAvailableAttributeValues] = useState<
    Record<string, string[]>
  >({});

  // Calculate inventory by attribute
  useEffect(() => {
    if (!product.variants.length) return;

    const inventoryMap: InventoryByAttribute = {};

    // Initialize inventory map for each attribute and value
    product.variants.forEach((variant) => {
      variant.attribute_values.forEach((attrValue) => {
        const name = attrValue.values.attribute.name;
        const value = attrValue.values.value;

        if (!inventoryMap[name]) {
          inventoryMap[name] = {};
        }

        if (!inventoryMap[name][value]) {
          inventoryMap[name][value] = 0;
        }

        // Add inventory quantity to the attribute value
        inventoryMap[name][value] += variant.inventory_quantity;
      });
    });

    setInventoryByAttribute(inventoryMap);
  }, [product.variants]);

  // Extract all available attributes from variants
  useEffect(() => {
    if (!product.variants.length) return;

    // Set default variant to the first one
    setSelectedVariant(product.variants[0]);

    // Extract all unique attributes
    const attributeMap = new Map<string, Set<string>>();

    product.variants.forEach((variant) => {
      variant.attribute_values.forEach((attrValue) => {
        const name = attrValue.values.attribute.name;
        const value = attrValue.values.value;

        if (!attributeMap.has(name)) {
          attributeMap.set(name, new Set());
        }
        attributeMap.get(name)?.add(value);
      });
    });

    // Convert to array of attribute options
    const attributes: AttributeOption[] = [];
    attributeMap.forEach((values, name) => {
      attributes.push({
        name,
        values: Array.from(values),
      });
    });

    setAvailableAttributes(attributes);

    // Set default selected attributes from first variant
    const defaultAttributes: Record<string, string> = {};
    product.variants[0].attribute_values.forEach((attrValue) => {
      const name = attrValue.values.attribute.name;
      const value = attrValue.values.value;
      defaultAttributes[name] = value;
    });

    setSelectedAttributes(defaultAttributes);
  }, [product]);

  // Update available attribute values based on current selection
  useEffect(() => {
    if (
      !product.variants.length ||
      Object.keys(selectedAttributes).length === 0
    )
      return;

    const newAvailableValues: Record<string, string[]> = {};

    // For each attribute
    availableAttributes.forEach((attribute) => {
      const attributeName = attribute.name;

      // Skip the attribute we're currently checking
      const otherAttributes = { ...selectedAttributes };

      // Find all possible values for this attribute given other selections
      const possibleValues = new Set<string>();

      product.variants.forEach((variant) => {
        // Check if this variant matches our other selected attributes
        const matchesOtherAttributes = Object.entries(otherAttributes)
          .filter(([name]) => name !== attributeName)
          .every(([name, value]) => {
            return variant.attribute_values.some(
              (av) =>
                av.values.attribute.name === name && av.values.value === value,
            );
          });

        // If it matches, add its value for the current attribute to possible values
        if (matchesOtherAttributes) {
          const attrValue = variant.attribute_values.find(
            (av) => av.values.attribute.name === attributeName,
          );
          if (attrValue && variant.inventory_quantity > 0) {
            possibleValues.add(attrValue.values.value);
          }
        }
      });

      newAvailableValues[attributeName] = Array.from(possibleValues);

      // If current selection is not in available values, select first available
      if (
        selectedAttributes[attributeName] &&
        !newAvailableValues[attributeName].includes(
          selectedAttributes[attributeName],
        )
      ) {
        if (newAvailableValues[attributeName].length > 0) {
          setSelectedAttributes((prev) => ({
            ...prev,
            [attributeName]: newAvailableValues[attributeName][0],
          }));
        }
      }
    });

    setAvailableAttributeValues(newAvailableValues);
  }, [product.variants, availableAttributes, selectedAttributes]);

  // Find matching variant when attributes change
  useEffect(() => {
    if (Object.keys(selectedAttributes).length === 0) return;

    // Find variant that matches all selected attributes
    const matchingVariant = product.variants.find((variant) => {
      // Check if all selected attributes match this variant
      return Object.entries(selectedAttributes).every(
        ([attrName, attrValue]) => {
          return variant.attribute_values.some(
            (av) =>
              av.values.attribute.name === attrName &&
              av.values.value === attrValue,
          );
        },
      );
    });

    if (matchingVariant) {
      setSelectedVariant(matchingVariant);
      setQuantity(1); // Reset quantity when variant changes
    }
  }, [selectedAttributes, product.variants]);

  const handleAttributeChange = (attributeName: string, value: string) => {
    setSelectedAttributes((prev) => ({
      ...prev,
      [attributeName]: value,
    }));
  };

  const incrementQuantity = () => {
    if (selectedVariant && quantity < selectedVariant.inventory_quantity) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addToCart = () => {
    if (!selectedVariant) return;

    // Here you would implement your cart logic
    console.log("Adding to cart:", {
      productId: product.id,
      variantId: selectedVariant.id,
      quantity,
      price: selectedVariant.price,
      attributes: selectedAttributes,
    });

    alert(`Added ${quantity} item(s) to cart`);
  };

  if (!product) return <div>Product not found</div>;

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Product Images */}
      <ProductImages
        images={selectedVariant?.product_images || []}
        productName={product.name}
      />

      {/* Product Details */}
      <div className="space-y-6">
        <ProductInfo
          name={product.name}
          category={product.category}
          sku={selectedVariant?.sku || ""}
          price={selectedVariant?.price || "0"}
        />

        {/* Attributes Selection */}
        <AttributeSelector
          attributes={availableAttributes}
          selectedAttributes={selectedAttributes}
          inventoryByAttribute={inventoryByAttribute}
          availableAttributeValues={availableAttributeValues}
          onAttributeChange={handleAttributeChange}
        />

        {/* Inventory Status */}
        <InventoryStatus
          inventoryQuantity={selectedVariant?.inventory_quantity || 0}
        />

        {/* Quantity Selector */}
        <QuantitySelector
          quantity={quantity}
          maxQuantity={selectedVariant?.inventory_quantity || 0}
          onIncrement={incrementQuantity}
          onDecrement={decrementQuantity}
        />

        {/* Add to Cart Button */}
        <AddToCartButton
          disabled={
            !selectedVariant || selectedVariant.inventory_quantity === 0
          }
          onClick={addToCart}
        />

        {/* Product Description */}
        <ProductDescription description={product.description} />
      </div>
    </div>
  );
}
