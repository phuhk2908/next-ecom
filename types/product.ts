// types/product.ts
export interface Attribute {
  name: string;
}

export interface AttributeValue {
  value: string;
  hexcode?: string; // Optional for Color attributes
  attribute: Attribute;
}

export interface Variant {
  name: string;
  price: number;
  inventory_stock: number;
  images: {
    src: string;
    alt: string;
  }[];
  attribute_value: AttributeValue[];
}

export interface Product {
  name: string;
  price: number;
  description: string;
  variant: Variant[];
}
