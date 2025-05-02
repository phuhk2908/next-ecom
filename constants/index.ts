import { Product } from "@/types/product";

export const routes: RouteItem[] = [
  {
    name: "Shop",
    href: "/",
    children: [
      {
        name: "Men",
        href: "/shop/men",
        children: [
          { name: "T-Shirts", href: "/shop/men/t-shirts" },
          { name: "Jeans", href: "/shop/men/jeans" },
          { name: "Shoes", href: "/shop/men/shoes" },
        ],
      },
      {
        name: "Women",
        href: "/shop/women",
        children: [
          { name: "Dresses", href: "/shop/women/dresses" },
          { name: "Tops", href: "/shop/women/tops" },
          { name: "Accessories", href: "/shop/women/accessories" },
        ],
      },
      { name: "Kids", href: "/shop/kids" },
      { name: "Accessories", href: "/shop/accessories" },
    ],
  },
  { name: "On Sale", href: "/#" },
  { name: "News", href: "/news" },
  { name: "Brands", href: "/#" },
];

export const faqData = [
  {
    category: "Product Information",
    items: [
      {
        question: "What features does your platform offer?",
        answer:
          "Our platform offers a comprehensive suite of tools including analytics, automation, collaboration features, and integrations with popular third-party services. We continuously add new features based on customer feedback.",
      },
      {
        question: "Is there a free trial available?",
        answer:
          "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial. You can upgrade to a paid plan at any time during or after your trial period.",
      },
      {
        question: "Do you offer custom solutions?",
        answer:
          "We provide tailored solutions for businesses with specific needs. Our team will work with you to understand your requirements and develop a custom implementation that meets your goals.",
      },
      {
        question: "What platforms do you support?",
        answer:
          "Our service works across all major platforms including Windows, macOS, iOS, and Android. We also offer web-based access so you can use our platform from any device with an internet connection.",
      },
      {
        question: "How often do you release updates?",
        answer:
          "We release minor updates and bug fixes weekly, with major feature updates typically deployed monthly. All updates are automatically applied to our cloud-based platform with zero downtime.",
      },
    ],
  },
  {
    category: "Technical Support",
    items: [
      {
        question: "How can I contact customer support?",
        answer:
          "Our support team is available 24/7 via live chat, email, and phone. Premium plans include dedicated support representatives and faster response times.",
      },
      {
        question: "Do you offer implementation assistance?",
        answer:
          "Yes, all paid plans include basic implementation support. Enterprise plans include dedicated onboarding specialists and customized training sessions for your team.",
      },
      {
        question: "Is there a knowledge base or documentation?",
        answer:
          "We maintain comprehensive documentation, video tutorials, and a searchable knowledge base. These resources are regularly updated with each new feature release.",
      },
      {
        question: "Can I request new features?",
        answer:
          "Absolutely! We encourage customers to submit feature requests through our feedback portal. Our product team reviews all suggestions and incorporates popular requests into our development roadmap.",
      },
    ],
  },
];

export const fakeTestimonials = [
  {
    name: "Emily Rogers",
    text: "Absolutely amazing service! The team was professional, efficient, and exceeded all of my expectations. I will definitely be using them again in the future!",
    rating: 5,
  },
  {
    name: "James Williams",
    text: "I've never had such a smooth experience. From start to finish, everything was handled with care and attention to detail. Highly recommend!",
    rating: 4,
  },
  {
    name: "Sophia Clark",
    text: "A fantastic company to work with! Their customer service is top-notch, and they went above and beyond to ensure I was satisfied with my purchase.",
    rating: 5,
  },
  {
    name: "Michael Harris",
    text: "This was the best decision I've made in a long time. The product quality was superb, and the delivery was fast and reliable. Will be coming back for more!",
    rating: 4,
  },
  {
    name: "Lily Thompson",
    text: "The best experience I've had in a long time! Everyone was so friendly, and they took the time to answer all of my questions. Highly recommend them!",
    rating: 5,
  },
  {
    name: "Daniel Martinez",
    text: "I was thoroughly impressed with how easy everything was. Great communication, quick response times, and I got exactly what I was looking for.",
    rating: 4,
  },
];

export const FIELD_NAMES = {
  name: "Full Name",
  email: "Email",
  password: "Password",
  confirmPassword: "Confirm password",
};

export const FIELD_TYPES = {
  name: "text",
  email: "email",
  password: "password",
  confirmPasswrod: "password",
};

export const categories = [
  {
    id: 1,
    name: "Men",
    path: "men",
    level: 0,
    slug: "shop/men",
    description: "Men's fashion and accessories",
    productCount: 1200,
    children: [
      {
        id: 2,
        name: "Clothing",
        path: "men.clothing",
        level: 1,
        slug: "mens-clothing",
        description: "Apparel for men",
        productCount: 800,
        children: [
          {
            id: 3,
            name: "T-Shirts",
            path: "men.clothing.tshirts",
            level: 2,
            slug: "mens-tshirts",
            description: "Men's T-Shirts",
            productCount: 250,
            children: [],
          },
          {
            id: 4,
            name: "Jeans",
            path: "men.clothing.jeans",
            level: 2,
            slug: "mens-jeans",
            description: "Men's jeans and denim",
            productCount: 180,
            children: [],
          },
        ],
      },
      {
        id: 5,
        name: "Shoes",
        path: "men.shoes",
        level: 1,
        slug: "mens-shoes",
        description: "Footwear for men",
        productCount: 400,
        children: [
          {
            id: 6,
            name: "Sneakers",
            path: "men.shoes.sneakers",
            level: 2,
            slug: "mens-sneakers",
            description: "Casual sneakers",
            productCount: 200,
            children: [],
          },
          {
            id: 7,
            name: "Formal Shoes",
            path: "men.shoes.formal",
            level: 2,
            slug: "mens-formal-shoes",
            description: "Formal and dress shoes",
            productCount: 120,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Women",
    path: "women",
    level: 0,
    slug: "shop/women",
    description: "Women's fashion and accessories",
    productCount: 1500,
    children: [
      {
        id: 9,
        name: "Clothing",
        path: "women.clothing",
        level: 1,
        slug: "womens-clothing",
        description: "Apparel for women",
        productCount: 1000,
        children: [
          {
            id: 10,
            name: "Dresses",
            path: "women.clothing.dresses",
            level: 2,
            slug: "womens-dresses",
            description: "Fashionable dresses",
            productCount: 400,
            children: [],
          },
          {
            id: 11,
            name: "Tops",
            path: "women.clothing.tops",
            level: 2,
            slug: "womens-tops",
            description: "Tops and blouses",
            productCount: 300,
            children: [],
          },
        ],
      },
      {
        id: 12,
        name: "Shoes",
        path: "women.shoes",
        level: 1,
        slug: "womens-shoes",
        description: "Footwear for women",
        productCount: 500,
        children: [
          {
            id: 13,
            name: "Heels",
            path: "women.shoes.heels",
            level: 2,
            slug: "womens-heels",
            description: "High heels and pumps",
            productCount: 200,
            children: [],
          },
          {
            id: 14,
            name: "Flats",
            path: "women.shoes.flats",
            level: 2,
            slug: "womens-flats",
            description: "Comfortable flat shoes",
            productCount: 150,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 15,
    name: "About Us",
    path: "about-us",
    level: 0,
    slug: "about-us",
    description: "Learn more about our brand and mission",
    productCount: 0,
    children: [],
  },
  {
    id: 16,
    name: "Contact",
    path: "contact",
    level: 0,
    slug: "contact",
    description: "Get in touch with us",
    productCount: 0,
    children: [],
  },
  {
    id: 17,
    name: "Blogs",
    path: "blogs",
    level: 0,
    slug: "blogs",
    description: "Fashion news, tips, and trends",
    productCount: 0,
    children: [],
  },
];

export const product = {
  // Enhanced product data with more variants, sizes, and colors
  id: 7,
  description:
    "Premium quality product with multiple color and size options. Made with high-quality materials for durability and comfort.",
  id_type: 1,
  slug: "this-is-an-example-product",
  id_category: 3,
  name: "This is an example product",
  rating: null,
  is_active: true,
  deleted_at: null,
  created_at: "2025-04-28T14:20:42.885Z",
  updated_at: "2025-04-28T14:20:42.885Z",
  category: {
    name: "Category 03",
    level: 1,
    slug: "category-03",
  },
  _count: {
    variants: 8,
  },
  type: {
    name: "VariantProduct",
  },
  variants: [
    {
      id: 1,
      sku: "RED-S-001",
      price: "12.9",
      weight: "20",
      inventory_quantity: 12,
      is_active: true,
      deleted_at: null,
      created_at: "2025-04-28T14:20:42.890Z",
      updated_at: "2025-04-28T14:20:42.890Z",
      attribute_values: [
        {
          id: 1,
          values: {
            id: 1,
            id_attributes: 1,
            value: "Red",
            attribute: {
              name: "Color",
            },
          },
        },
        {
          id: 2,
          values: {
            id: 2,
            id_attributes: 2,
            value: "S",
            attribute: {
              name: "Size",
            },
          },
        },
      ],
      product_images: [
        {
          image: {
            id: 1,
            url: "https://placehold.co/600x400?text=Red+S",
            alt_text: "Red Small Size",
            deleted_at: null,
            created_at: "2025-04-28T14:20:11.208Z",
            updated_at: "2025-04-28T14:20:11.208Z",
          },
        },
      ],
    },
    {
      id: 2,
      sku: "RED-M-002",
      price: "13.9",
      weight: "22",
      inventory_quantity: 8,
      is_active: true,
      deleted_at: null,
      created_at: "2025-04-28T14:20:42.890Z",
      updated_at: "2025-04-28T14:20:42.890Z",
      attribute_values: [
        {
          id: 3,
          values: {
            id: 1,
            id_attributes: 1,
            value: "Red",
            attribute: {
              name: "Color",
            },
          },
        },
        {
          id: 4,
          values: {
            id: 3,
            id_attributes: 2,
            value: "M",
            attribute: {
              name: "Size",
            },
          },
        },
      ],
      product_images: [
        {
          image: {
            id: 2,
            url: "https://placehold.co/600x400?text=Red+M",
            alt_text: "Red Medium Size",
            deleted_at: null,
            created_at: "2025-04-28T14:20:11.208Z",
            updated_at: "2025-04-28T14:20:11.208Z",
          },
        },
      ],
    },
    {
      id: 3,
      sku: "RED-L-003",
      price: "14.9",
      weight: "24",
      inventory_quantity: 0, // Out of stock
      is_active: true,
      deleted_at: null,
      created_at: "2025-04-28T14:20:42.890Z",
      updated_at: "2025-04-28T14:20:42.890Z",
      attribute_values: [
        {
          id: 5,
          values: {
            id: 1,
            id_attributes: 1,
            value: "Red",
            attribute: {
              name: "Color",
            },
          },
        },
        {
          id: 6,
          values: {
            id: 4,
            id_attributes: 2,
            value: "L",
            attribute: {
              name: "Size",
            },
          },
        },
      ],
      product_images: [
        {
          image: {
            id: 3,
            url: "https://placehold.co/600x400?text=Red+L",
            alt_text: "Red Large Size",
            deleted_at: null,
            created_at: "2025-04-28T14:20:11.208Z",
            updated_at: "2025-04-28T14:20:11.208Z",
          },
        },
      ],
    },
    {
      id: 4,
      sku: "BLUE-S-004",
      price: "12.9",
      weight: "20",
      inventory_quantity: 15,
      is_active: true,
      deleted_at: null,
      created_at: "2025-04-28T14:20:42.890Z",
      updated_at: "2025-04-28T14:20:42.890Z",
      attribute_values: [
        {
          id: 7,
          values: {
            id: 5,
            id_attributes: 1,
            value: "Blue",
            attribute: {
              name: "Color",
            },
          },
        },
        {
          id: 8,
          values: {
            id: 2,
            id_attributes: 2,
            value: "S",
            attribute: {
              name: "Size",
            },
          },
        },
      ],
      product_images: [
        {
          image: {
            id: 4,
            url: "https://placehold.co/600x400?text=Blue+S",
            alt_text: "Blue Small Size",
            deleted_at: null,
            created_at: "2025-04-28T14:20:11.208Z",
            updated_at: "2025-04-28T14:20:11.208Z",
          },
        },
      ],
    },
    {
      id: 5,
      sku: "BLUE-M-005",
      price: "13.9",
      weight: "22",
      inventory_quantity: 10,
      is_active: true,
      deleted_at: null,
      created_at: "2025-04-28T14:20:42.890Z",
      updated_at: "2025-04-28T14:20:42.890Z",
      attribute_values: [
        {
          id: 9,
          values: {
            id: 5,
            id_attributes: 1,
            value: "Blue",
            attribute: {
              name: "Color",
            },
          },
        },
        {
          id: 10,
          values: {
            id: 3,
            id_attributes: 2,
            value: "M",
            attribute: {
              name: "Size",
            },
          },
        },
      ],
      product_images: [
        {
          image: {
            id: 5,
            url: "https://placehold.co/600x400?text=Blue+M",
            alt_text: "Blue Medium Size",
            deleted_at: null,
            created_at: "2025-04-28T14:20:11.208Z",
            updated_at: "2025-04-28T14:20:11.208Z",
          },
        },
      ],
    },
    {
      id: 6,
      sku: "BLACK-S-006",
      price: "11.9",
      weight: "20",
      inventory_quantity: 20,
      is_active: true,
      deleted_at: null,
      created_at: "2025-04-28T14:20:42.890Z",
      updated_at: "2025-04-28T14:20:42.890Z",
      attribute_values: [
        {
          id: 11,
          values: {
            id: 6,
            id_attributes: 1,
            value: "Black",
            attribute: {
              name: "Color",
            },
          },
        },
        {
          id: 12,
          values: {
            id: 2,
            id_attributes: 2,
            value: "S",
            attribute: {
              name: "Size",
            },
          },
        },
      ],
      product_images: [
        {
          image: {
            id: 6,
            url: "https://placehold.co/600x400?text=Black+S",
            alt_text: "Black Small Size",
            deleted_at: null,
            created_at: "2025-04-28T14:20:11.208Z",
            updated_at: "2025-04-28T14:20:11.208Z",
          },
        },
      ],
    },
    {
      id: 7,
      sku: "GREEN-M-007",
      price: "13.9",
      weight: "22",
      inventory_quantity: 5,
      is_active: true,
      deleted_at: null,
      created_at: "2025-04-28T14:20:42.890Z",
      updated_at: "2025-04-28T14:20:42.890Z",
      attribute_values: [
        {
          id: 13,
          values: {
            id: 7,
            id_attributes: 1,
            value: "Green",
            attribute: {
              name: "Color",
            },
          },
        },
        {
          id: 14,
          values: {
            id: 3,
            id_attributes: 2,
            value: "M",
            attribute: {
              name: "Size",
            },
          },
        },
      ],
      product_images: [
        {
          image: {
            id: 7,
            url: "https://placehold.co/600x400?text=Green+M",
            alt_text: "Green Medium Size",
            deleted_at: null,
            created_at: "2025-04-28T14:20:11.208Z",
            updated_at: "2025-04-28T14:20:11.208Z",
          },
        },
      ],
    },
    {
      id: 8,
      sku: "GREEN-XL-008",
      price: "15.9",
      weight: "26",
      inventory_quantity: 3,
      is_active: true,
      deleted_at: null,
      created_at: "2025-04-28T14:20:42.890Z",
      updated_at: "2025-04-28T14:20:42.890Z",
      attribute_values: [
        {
          id: 15,
          values: {
            id: 7,
            id_attributes: 1,
            value: "Green",
            attribute: {
              name: "Color",
            },
          },
        },
        {
          id: 16,
          values: {
            id: 5,
            id_attributes: 2,
            value: "XL",
            attribute: {
              name: "Size",
            },
          },
        },
      ],
      product_images: [
        {
          image: {
            id: 8,
            url: "https://placehold.co/600x400?text=Green+XL",
            alt_text: "Green Extra Large Size",
            deleted_at: null,
            created_at: "2025-04-28T14:20:11.208Z",
            updated_at: "2025-04-28T14:20:11.208Z",
          },
        },
      ],
    },
  ],
};
