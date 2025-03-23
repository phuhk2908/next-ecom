import { routes } from "@/constants";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

interface NavigationMobileProps {
  isNavMobile: boolean;
  setIsNavMobile: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

const NavigationMobile = ({
  isNavMobile,
  setIsNavMobile,
  className,
}: NavigationMobileProps) => {
  const [activeMenu, setActiveMenu] = useState<RouteItem | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<RouteItem | null>(null);

  const handleBack = () => {
    if (activeSubMenu) {
      setActiveSubMenu(null);
    } else if (activeMenu) {
      setActiveMenu(null);
    }
  };

  return (
    <div
      className={cn(
        "fixed inset-0 left-0 z-50 -translate-x-full bg-white duration-300 lg:hidden",
        className,
        isNavMobile && "translate-x-0",
      )}
    >
      <div className="flex items-center justify-between border-b p-4">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-lg font-medium"
        >
          {(activeMenu || activeSubMenu) && <ChevronLeft className="h-5 w-5" />}
          <span>
            {activeSubMenu ? activeMenu?.name : activeMenu ? "Back" : "Menu"}
          </span>
        </button>
        <button onClick={() => setIsNavMobile(false)}>
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="h-[calc(100vh-64px)] overflow-y-auto">
        <div
          className={cn(
            "absolute inset-0 mt-[64px] transition-transform duration-300",
            !activeMenu && !activeSubMenu
              ? "translate-x-0"
              : "-translate-x-full",
          )}
        >
          {!activeMenu &&
            routes.map((route, idx) => (
              <div key={idx} className="border-b">
                {route.children ? (
                  <button
                    className="flex w-full items-center justify-between p-4"
                    onClick={() => setActiveMenu(route)}
                  >
                    <span>{route.name}</span>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                ) : (
                  <Link
                    href={route.href}
                    className="block p-4"
                    onClick={() => setIsNavMobile(false)}
                  >
                    {route.name}
                  </Link>
                )}
              </div>
            ))}
        </div>

        <div
          className={cn(
            "absolute inset-0 mt-[64px] transition-transform duration-300",
            activeMenu && !activeSubMenu
              ? "translate-x-0"
              : "-translate-x-full",
          )}
        >
          {activeMenu &&
            !activeSubMenu &&
            activeMenu.children?.map((child, idx) => (
              <div key={idx} className="border-b">
                {child.children ? (
                  <button
                    className="flex w-full items-center justify-between p-4"
                    onClick={() => setActiveSubMenu(child)}
                  >
                    <span>{child.name}</span>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                ) : (
                  <Link
                    href={child.href}
                    className="block p-4"
                    onClick={() => setIsNavMobile(false)}
                  >
                    {child.name}
                  </Link>
                )}
              </div>
            ))}
        </div>

        <div
          className={cn(
            "absolute inset-0 mt-[64px] transition-transform duration-300",
            activeSubMenu ? "translate-x-0" : "-translate-x-full",
          )}
        >
          {activeSubMenu &&
            activeSubMenu.children?.map((subChild, idx) => (
              <div key={idx} className="border-b">
                <Link
                  href={subChild.href}
                  className="block p-4"
                  onClick={() => setIsNavMobile(false)}
                >
                  {subChild.name}
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationMobile;
