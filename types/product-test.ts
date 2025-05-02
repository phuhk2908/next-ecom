type AttributeValue = {
  id: number;
  values: {
    id: number;
    id_attributes: number;
    value: string;
    attribute: {
      name: string;
    };
  };
};

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

type Variant = {
  id: number;
  sku: string;
  price: string;
  weight: string;
  inventory_quantity: number;
  is_active: boolean;
  deleted_at: null;
  created_at: string;
  updated_at: string;
  attribute_values: AttributeValue[];
  product_images: ProductImage[];
};

type Product = {
  id: number;
  description: string;
  id_type: number;
  slug: string;
  id_category: number;
  name: string;
  rating: null;
  is_active: boolean;
  deleted_at: null;
  created_at: string;
  updated_at: string;
  category: {
    name: string;
    level: number;
    slug: string;
  };
  _count: {
    variants: number;
  };
  type: {
    name: string;
  };
  variants: Variant[];
};

type AttributeOption = {
  name: string;
  values: string[];
};

// Type for inventory by attribute
type InventoryByAttribute = {
  [attributeName: string]: {
    [attributeValue: string]: number;
  };
};
