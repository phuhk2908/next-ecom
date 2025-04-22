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
import { toast } from "@/hooks/use-toast";
import { Github, Twitter, Linkedin, Loader2 } from "lucide-react";

interface ConnectedAccount {
  id: string;
  name: string;
  icon: React.ElementType;
  connected: boolean;
  username?: string;
}

export function ConnectedAccounts() {
  const [accounts, setAccounts] = useState<ConnectedAccount[]>([
    {
      id: "github",
      name: "GitHub",
      icon: Github,
      connected: true,
      username: "alexjohnson",
    },
    {
      id: "twitter",
      name: "Twitter",
      icon: Twitter,
      connected: false,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: Linkedin,
      connected: true,
      username: "alex-johnson",
    },
  ]);

  const [isConnecting, setIsConnecting] = useState<string | null>(null);

  const handleToggleConnection = async (id: string) => {
    setIsConnecting(id);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setAccounts(
      accounts.map((account) => {
        if (account.id === id) {
          const newConnected = !account.connected;

          toast({
            title: newConnected ? "Account connected" : "Account disconnected",
            description: `Your ${account.name} account has been ${newConnected ? "connected" : "disconnected"} successfully.`,
          });

          return {
            ...account,
            connected: newConnected,
            username: newConnected ? account.username || "username" : undefined,
          };
        }
        return account;
      }),
    );

    setIsConnecting(null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Connected Accounts</CardTitle>
        <CardDescription>
          Connect your accounts to enable sign in and other features.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {accounts.map((account) => (
            <div
              key={account.id}
              className="flex items-center justify-between space-x-4"
            >
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-muted p-2">
                  <account.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">{account.name}</p>
                  {account.connected && account.username && (
                    <p className="text-xs text-muted-foreground">
                      @{account.username}
                    </p>
                  )}
                </div>
              </div>
              <Button
                variant={account.connected ? "outline" : "default"}
                size="sm"
                onClick={() => handleToggleConnection(account.id)}
                disabled={isConnecting === account.id}
              >
                {isConnecting === account.id && (
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                )}
                {account.connected ? "Disconnect" : "Connect"}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
