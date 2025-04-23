import type { Metadata } from "next"
import { AppearanceSettings } from "@/components/settings/appearance-settings"

export const metadata: Metadata = {
  title: "Appearance Settings",
  description: "Customize the appearance of the application.",
}

export default function AppearancePage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Appearance</h2>
        <p className="text-muted-foreground">Customize the appearance of the application.</p>
      </div>
      <AppearanceSettings />
    </div>
  )
}
