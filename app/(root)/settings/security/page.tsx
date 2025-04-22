import type { Metadata } from "next"
import { SecuritySettings } from "@/components/settings/security-settings"

export const metadata: Metadata = {
  title: "Security Settings",
  description: "Manage your security settings and preferences.",
}

export default function SecurityPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Security</h2>
        <p className="text-muted-foreground">Manage your security settings and preferences.</p>
      </div>
      <SecuritySettings />
    </div>
  )
}
