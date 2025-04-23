import type React from "react";
import type { Metadata } from "next";
import { SettingsSidebar } from "@/app/(root)/settings/_components/settings-sidebar";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your account settings and preferences.",
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container relative mx-auto px-4 py-8 md:py-12 lg:px-8">
      <div className="flex flex-col gap-8 md:flex-row md:gap-12">
        <aside className="shrink-0 md:w-64 lg:w-72">
          <SettingsSidebar />
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
