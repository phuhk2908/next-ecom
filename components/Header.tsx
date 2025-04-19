"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { categories } from "@/constants";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      {/* Announcement bar */}
      <div className="bg-primary py-2 text-center text-sm text-primary-foreground">
        Free shipping on orders over $50 | Use code WELCOME10 for 10% off your
        first order
      </div>

      <div className="container">
        {/* Top header with logo, search and icons */}
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            {/* Mobile menu trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0 sm:w-[350px]">
                <div className="flex h-full flex-col">
                  <div className="border-b p-4">
                    <div className="flex items-center justify-between">
                      <Link
                        href="/"
                        className="flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-xl font-bold">STORE</span>
                      </Link>
                    </div>
                  </div>

                  <div className="flex-1 overflow-auto py-2">
                    <div className="px-4 py-2">
                      <MobileNavigation
                        categories={categories}
                        onNavigate={() => setIsOpen(false)}
                      />
                    </div>
                  </div>

                  <div className="border-t p-4">
                    <div className="space-y-3">
                      <Link
                        href="/account"
                        className="flex items-center py-2 text-sm hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        <User className="mr-2 h-4 w-4" />
                        Account
                      </Link>
                      <Link
                        href="/wishlist"
                        className="flex items-center py-2 text-sm hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        <Heart className="mr-2 h-4 w-4" />
                        Wishlist
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="ml-4 flex items-center md:ml-0">
              <span className="text-xl font-bold">STORE</span>
            </Link>
          </div>

          {/* Search */}
          <div className="hidden max-w-xl px-6 md:flex md:flex-1 md:items-center md:justify-center">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="w-full rounded-full bg-muted/30 pl-10"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                3
              </span>
            </Button>
          </div>
        </div>

        {/* Category navigation using shadcn/ui NavigationMenu */}
        <div className="hidden border-t md:block">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList>
              {categories.map((category) => (
                <NavigationMenuItem key={category.id}>
                  {category.children && category.children.length > 0 ? (
                    <>
                      <NavigationMenuTrigger>
                        {category.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[800px] grid-cols-4 gap-3 p-4">
                          <div className="col-span-3 grid grid-cols-3 gap-x-6 gap-y-3">
                            {category.children.map((subCategory) => (
                              <div key={subCategory.id} className="space-y-3">
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={`/category/${subCategory.slug}`}
                                    className="block text-base font-medium hover:text-primary"
                                  >
                                    {subCategory.name}
                                  </Link>
                                </NavigationMenuLink>

                                {subCategory.children &&
                                  subCategory.children.length > 0 && (
                                    <ul className="space-y-1">
                                      {subCategory.children.map(
                                        (childCategory) => (
                                          <li key={childCategory.id}>
                                            <NavigationMenuLink asChild>
                                              <Link
                                                href={`/category/${childCategory.slug}`}
                                                className="block text-sm text-muted-foreground hover:text-primary"
                                              >
                                                {childCategory.name}
                                              </Link>
                                            </NavigationMenuLink>
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  )}
                              </div>
                            ))}
                          </div>

                          {/* Featured section */}
                          <div className="col-span-1 space-y-3">
                            <div className="font-medium">Featured</div>
                            <NavigationMenuLink asChild>
                              <Link
                                href={`/category/${category.slug}/featured`}
                                className="group block"
                              >
                                <div className="overflow-hidden rounded-md">
                                  <Image
                                    src="/placeholder.svg?height=200&width=300"
                                    alt={`Featured ${category.name}`}
                                    width={300}
                                    height={200}
                                    className="h-[140px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                  />
                                </div>
                                <div className="mt-2 text-sm font-medium">
                                  New Arrivals
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  Check out the latest products
                                </div>
                              </Link>
                            </NavigationMenuLink>

                            <NavigationMenuLink asChild>
                              <Link
                                href={`/category/${category.slug}`}
                                className="text-sm font-medium text-primary hover:underline"
                              >
                                View all {category.name}
                              </Link>
                            </NavigationMenuLink>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      href={`/category/${category.slug}`}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {category.name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Mobile search */}
      <div className="border-t px-4 py-3 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="w-full rounded-full bg-muted/30 pl-10"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

interface MobileNavigationProps {
  categories: any[];
  onNavigate: () => void;
}

function MobileNavigation({ categories, onNavigate }: MobileNavigationProps) {
  return (
    <Accordion type="multiple" className="w-full">
      {categories.map((category) => (
        <AccordionItem
          key={category.id}
          value={`category-${category.id}`}
          className="border-b-0"
        >
          <div className="flex w-full">
            {category.children && category.children.length > 0 ? (
              <AccordionTrigger className="w-full flex-1 py-2 hover:no-underline">
                <span className="w-full text-base">{category.name}</span>
              </AccordionTrigger>
            ) : (
              <Link
                href={`/category/${category.slug}`}
                className="flex-1 py-3 text-base hover:text-primary"
                onClick={onNavigate}
              >
                {category.name}
              </Link>
            )}
          </div>

          {category.children && category.children.length > 0 && (
            <AccordionContent>
              <div className="space-y-1 pl-4">
                {category.children.map((subCategory: any) => (
                  <div key={subCategory.id}>
                    {subCategory.children && subCategory.children.length > 0 ? (
                      <Accordion type="multiple" className="w-full border-b-0">
                        <AccordionItem
                          value={`subcategory-${subCategory.id}`}
                          className="border-b-0"
                        >
                          <AccordionTrigger className="py-2 hover:no-underline">
                            <span className="text-sm font-medium">
                              {subCategory.name}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-1 pl-4">
                              {subCategory.children.map(
                                (childCategory: any) => (
                                  <Link
                                    key={childCategory.id}
                                    href={`/category/${childCategory.slug}`}
                                    className="block py-2 text-sm text-muted-foreground hover:text-primary"
                                    onClick={onNavigate}
                                  >
                                    {childCategory.name}
                                  </Link>
                                ),
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        href={`/category/${subCategory.slug}`}
                        className="block py-2 text-sm font-medium hover:text-primary"
                        onClick={onNavigate}
                      >
                        {subCategory.name}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-2">
                  <Link
                    href={`/category/${category.slug}`}
                    className="block py-2 text-sm font-medium text-primary hover:underline"
                    onClick={onNavigate}
                  >
                    View all {category.name}
                  </Link>
                </div>
              </div>
            </AccordionContent>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
