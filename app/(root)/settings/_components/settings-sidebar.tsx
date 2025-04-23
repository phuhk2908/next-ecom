"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  User,
  Bell,
  Lock,
  Globe,
  CreditCard,
  HelpCircle,
  LogOut,
  Palette,
} from "lucide-react";

// Update the items array to include billing
const sidebarItems = [
  {
    title: "Account",
    href: "/settings/account",
    icon: User,
  },
  {
    title: "Billing",
    href: "/settings/billing",
    icon: CreditCard,
  },
  {
    title: "Appearance",
    href: "/settings/appearance",
    icon: Palette,
  },
  {
    title: "Notifications",
    href: "/settings/notifications",
    icon: Bell,
  },
  {
    title: "Security",
    href: "/settings/security",
    icon: Lock,
  },
  {
    title: "Language",
    href: "/settings/language",
    icon: Globe,
  },
  {
    title: "Help & Support",
    href: "/settings/support",
    icon: HelpCircle,
  },
];

export function SettingsSidebar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-20 space-y-6">
      <div className="space-y-1">
        <h2 className="px-2 text-lg font-semibold tracking-tight">Settings</h2>
        <p className="px-2 text-sm text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      <nav className="flex flex-col space-y-1">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              pathname === item.href
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted",
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </Link>
        ))}
        <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10">
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </nav>
    </div>
  );
}
