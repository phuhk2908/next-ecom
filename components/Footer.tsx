import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "./ui/separator";

const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
];

const footerNavigation = [
  {
    title: "Company",
    links: ["About", "Features", "Works", "Career"],
  },
  {
    title: "Help",
    links: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "FAQ",
    links: ["Account", "Manage Deliveries", "Orders", "Payments"],
  },
  {
    title: "Resources",
    links: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
];

const paymentMethods = [
  { name: "Visa", width: 48, height: 30 },
  { name: "Mastercard", width: 48, height: 30 },
  { name: "PayPal", width: 48, height: 30 },
  { name: "Apple Pay", width: 48, height: 30 },
  { name: "Google Pay", width: 48, height: 30 },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#f0f0f0] py-10">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* Logo and description */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-black tracking-tighter">SHOP.CO</h2>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              We have clothes that suits your style and which you&apos;re proud
              to wear. From women to men.
            </p>
            <div className="mt-6 flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white duration-300 hover:bg-black hover:text-white`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{Icon.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Navigation columns */}
          {footerNavigation.map((column, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-black"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8 mt-12" />

        {/* Bottom section with copyright and payment methods */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-gray-600">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="mt-4 flex items-center space-x-4 md:mt-0">
            {paymentMethods.map((payment, index) => (
              <div
                key={index}
                className="relative h-8 w-12 overflow-hidden rounded"
              >
                <Image
                  src={`https://placehold.co/${payment.width}x${payment.height}`}
                  alt={payment.name}
                  width={payment.width}
                  height={payment.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
