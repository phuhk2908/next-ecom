import type { Metadata } from "next"
import { LanguageSettings } from "@/components/settings/language-settings"

export const metadata: Metadata = {
  title: "Language Settings",
  description: "Manage your language preferences.",
}

export default function LanguagePage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Language</h2>
        <p className="text-muted-foreground">Manage your language preferences.</p>
      </div>
      <LanguageSettings />
    </div>
  )
}
