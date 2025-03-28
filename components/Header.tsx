"use client";

import { Input } from "@/components/ui/input";
import { AlignLeft, Search, ShoppingCart, UserCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { Badge } from "./ui/badge";

const Header = () => {
  const [isNavMobile, setIsNavMobile] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const pathname = usePathname();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("Search term after debounce:", debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <header className="py-[13px]">
      <div className="container relative flex items-center justify-between">
        {pathname !== "/" && (
          <div className="absolute inset-x-0 bottom-[-13px] left-0 h-px bg-[#f0f0f0]"></div>
        )}

        <div className="flex items-center gap-4">
          <AlignLeft
            className="block lg:hidden"
            onClick={() => setIsNavMobile(!isNavMobile)}
          />
          <Link
            href="/"
            className="font-integral text-[25.2px] font-bold uppercase lg:text-[32px]"
          >
            shop.co
          </Link>
        </div>

        <Navigation />

        <div className="relative hidden items-center rounded-md bg-[#f0f0f0] px-4 text-black/40 lg:flex lg:w-[375px] xl:w-[577px]">
          <Search className="size-6" />
          <Input
            className="border-transparent shadow-none focus-visible:ring-0"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => handleSearch(e)}
          />
        </div>

        <div className="flex items-center gap-[14px]">
          <Search className="size-6 lg:hidden" />
          <Link href="/cart" className="relative">
            <ShoppingCart className="size-6 text-gray-500 duration-300 hover:text-black" />
            <Badge className="absolute -right-2 -top-2 justify-center rounded-full px-1 py-px">
              0
            </Badge>
          </Link>
          <UserCircle className="size-6 text-gray-500 duration-300 hover:text-black" />
        </div>
      </div>

      <NavigationMobile
        isNavMobile={isNavMobile}
        setIsNavMobile={setIsNavMobile}
        className="top-[64px]"
      />
    </header>
  );
};

export default Header;
