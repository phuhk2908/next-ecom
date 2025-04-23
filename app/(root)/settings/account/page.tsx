import type { Metadata } from "next";
import { AccountInfo } from "@/app/(root)/settings/_components/account-info";
import { PersonalInfo } from "@/app/(root)/settings/_components/personal-info";
import { ConnectedAccounts } from "@/app/(root)/settings/_components/connected-account";

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
