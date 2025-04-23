import type { Metadata } from "next";
import { NotificationSettings } from "@/app/(root)/settings/_components/notification-settings";

export const metadata: Metadata = {
  title: "Notification Settings",
  description: "Manage your notification preferences.",
};

export default function NotificationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Notifications</h2>
        <p className="text-muted-foreground">
          Manage your notification preferences.
        </p>
      </div>
      <NotificationSettings />
    </div>
  );
}
