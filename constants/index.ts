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
    slug: "men",
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
    slug: "women",
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
  name: "Classic Cotton T-Shirt",
  price: 29.99,
  description:
    "Our premium cotton t-shirt combines comfort with style, perfect for everyday wear.",
  variant: [
    {
      name: "Red-XS",
      price: 29.99,
      inventory_stock: 11,
      images: [
        "https://placehold.co/450x450?text=Red-XS-Front",
        "https://placehold.co/450x450?text=Red-XS-Back",
        "https://placehold.co/450x450?text=Red-XS-Side",
      ],
      attribute_value: [
        { value: "Red", hexcode: "#E53E3E", attribute: { name: "Color" } },
        { value: "XS", attribute: { name: "Size" } },
      ],
    },
    {
      name: "Red-S",
      price: 29.99,
      inventory_stock: 5,
      images: [
        "https://placehold.co/450x450?text=Red-S-Front",
        "https://placehold.co/450x450?text=Red-S-Back",
      ],
      attribute_value: [
        { value: "Red", hexcode: "#E53E3E", attribute: { name: "Color" } },
        { value: "S", attribute: { name: "Size" } },
      ],
    },
    {
      name: "Blue-XS",
      price: 32.99,
      inventory_stock: 8,
      images: [
        "https://placehold.co/450x450?text=Blue-XS-Front",
        "https://placehold.co/450x450?text=Blue-XS-Back",
        "https://placehold.co/450x450?text=Blue-XS-Detail",
      ],
      attribute_value: [
        { value: "Blue", hexcode: "#3182CE", attribute: { name: "Color" } },
        { value: "XS", attribute: { name: "Size" } },
      ],
    },
    {
      name: "Black-XS",
      price: 29.99,
      inventory_stock: 3,
      images: [
        "https://placehold.co/450x450?text=Black-XS-Front",
        "https://placehold.co/450x450?text=Black-XS-Back",
        "https://placehold.co/450x450?text=Black-XS-Side",
        "https://placehold.co/450x450?text=Black-XS-Detail",
      ],
      attribute_value: [
        { value: "Black", hexcode: "#2D3748", attribute: { name: "Color" } },
        { value: "XS", attribute: { name: "Size" } },
      ],
    },
  ],
};
