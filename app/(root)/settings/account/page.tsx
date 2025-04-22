import type { Metadata } from "next";
import { AccountInfo } from "@/components/settings/account-info";
import { PersonalInfo } from "@/components/settings/personal-info";
import { ConnectedAccounts } from "@/components/settings/connected-account";

export const metadata: Metadata = {
  title: "Account Settings",
  description: "Manage your account information and preferences.",
};

export default function AccountPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Account Settings</h2>
        <p className="text-muted-foreground">
          Manage your account information and preferences.
        </p>
      </div>
      <div className="space-y-8">
        <AccountInfo />
        <PersonalInfo />
        <ConnectedAccounts />
      </div>
    </div>
  );
}
