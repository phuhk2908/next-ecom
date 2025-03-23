"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { routes } from "@/constants";
import Link from "next/link";

const Navigation = () => {
  return (
    <NavigationMenu className="w-full max-lg:hidden">
      <NavigationMenuList className="w-full justify-start">
        {routes.map((route, idx) => (
          <NavigationMenuItem key={idx}>
            {route.children ? (
              <>
                <NavigationMenuTrigger>{route.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {route.children.map((child, childIdx) => (
                      <div key={childIdx}>
                        <Link href={child.href} legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              {child.name}
                            </div>
                            {child.children && (
                              <div className="mt-2 text-sm leading-snug text-muted-foreground">
                                {child.children.map((subChild, subIdx) => (
                                  <Link
                                    key={subIdx}
                                    href={subChild.href}
                                    className="block py-1 hover:text-foreground"
                                  >
                                    {subChild.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </NavigationMenuLink>
                        </Link>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={route.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {route.name}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
