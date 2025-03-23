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
  { name: "On Sale", href: "/" },
  { name: "New Arrivals", href: "/" },
  { name: "Brands", href: "/" },
];