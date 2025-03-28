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
