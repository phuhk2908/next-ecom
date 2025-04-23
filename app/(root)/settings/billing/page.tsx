import { BillingSettings } from "@/app/(root)/settings/_components/billing-settings";

export const metadata = {
  title: "Billing Settings",
  description: "Manage your subscription and payment methods",
};

export default function BillingPage() {
  return <BillingSettings />;
}
