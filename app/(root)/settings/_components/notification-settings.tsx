"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import {
  Loader2,
  Bell,
  Mail,
  MessageSquare,
  Heart,
  UserPlus,
} from "lucide-react";

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  email: boolean;
  push: boolean;
}

export function NotificationSettings() {
  const [settings, setSettings] = useState<NotificationSetting[]>([
    {
      id: "comments",
      title: "Comments",
      description: "Receive notifications when someone comments on your posts.",
      icon: MessageSquare,
      email: true,
      push: true,
    },
    {
      id: "mentions",
      title: "Mentions",
      description: "Receive notifications when someone mentions you.",
      icon: Mail,
      email: true,
      push: true,
    },
    {
      id: "follows",
      title: "Follows",
      description: "Receive notifications when someone follows you.",
      icon: UserPlus,
      email: false,
      push: true,
    },
    {
      id: "likes",
      title: "Likes",
      description: "Receive notifications when someone likes your posts.",
      icon: Heart,
      email: false,
      push: false,
    },
    {
      id: "newsletter",
      title: "Newsletter",
      description:
        "Receive our newsletter with product updates and industry news.",
      icon: Bell,
      email: true,
      push: false,
    },
  ]);

  const [isUpdating, setIsUpdating] = useState(false);

  const handleToggle = (id: string, type: "email" | "push") => {
    setSettings(
      settings.map((setting) => {
        if (setting.id === id) {
          return {
            ...setting,
            [type]: !setting[type],
          };
        }
        return setting;
      }),
    );
  };

  const handleSaveNotifications = async () => {
    setIsUpdating(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Notification preferences updated",
      description:
        "Your notification preferences have been updated successfully.",
    });

    setIsUpdating(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>
          Choose how and when you want to be notified.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-3 gap-4 text-center text-sm font-medium">
          <div>Notification Type</div>
          <div>Email</div>
          <div>Push</div>
        </div>
        <div className="space-y-4">
          {settings.map((setting) => (
            <div
              key={setting.id}
              className="grid grid-cols-3 items-center gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-muted p-2">
                  <setting.icon className="h-4 w-4" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">{setting.title}</p>
                  <p className="hidden text-xs text-muted-foreground sm:block">
                    {setting.description}
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Switch
                  checked={setting.email}
                  onCheckedChange={() => handleToggle(setting.id, "email")}
                  aria-label={`${setting.title} email notifications`}
                />
              </div>
              <div className="flex justify-center">
                <Switch
                  checked={setting.push}
                  onCheckedChange={() => handleToggle(setting.id, "push")}
                  aria-label={`${setting.title} push notifications`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Button onClick={handleSaveNotifications} disabled={isUpdating}>
            {isUpdating && <Loader2 className="animate-spin mr-2 h-4 w-4" />}
            {isUpdating ? "Saving..." : "Save Preferences"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
