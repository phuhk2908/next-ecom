"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/hooks/use-toast"
import { Loader2, Moon, Sun, Monitor } from "lucide-react"

export function AppearanceSettings() {
  const [theme, setTheme] = useState("system")
  const [fontSize, setFontSize] = useState("medium")
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  const handleSaveAppearance = async () => {
    setIsUpdating(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Appearance updated",
      description: "Your appearance settings have been updated successfully.",
    })

    setIsUpdating(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>
          Customize the appearance of the application. These settings will be synced across all your devices.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Theme</h3>
            <p className="text-sm text-muted-foreground">Select the theme for the application.</p>
          </div>
          <RadioGroup value={theme} onValueChange={setTheme} className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Label
              htmlFor="theme-light"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
            >
              <RadioGroupItem value="light" id="theme-light" className="sr-only" />
              <Sun className="mb-3 h-6 w-6" />
              <div className="text-center">
                <p className="text-sm font-medium">Light</p>
                <p className="text-xs text-muted-foreground">Light mode for bright environments</p>
              </div>
            </Label>
            <Label
              htmlFor="theme-dark"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
            >
              <RadioGroupItem value="dark" id="theme-dark" className="sr-only" />
              <Moon className="mb-3 h-6 w-6" />
              <div className="text-center">
                <p className="text-sm font-medium">Dark</p>
                <p className="text-xs text-muted-foreground">Dark mode for low-light environments</p>
              </div>
            </Label>
            <Label
              htmlFor="theme-system"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
            >
              <RadioGroupItem value="system" id="theme-system" className="sr-only" />
              <Monitor className="mb-3 h-6 w-6" />
              <div className="text-center">
                <p className="text-sm font-medium">System</p>
                <p className="text-xs text-muted-foreground">Follow your system preferences</p>
              </div>
            </Label>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Font Size</h3>
            <p className="text-sm text-muted-foreground">Select the font size for the application.</p>
          </div>
          <RadioGroup value={fontSize} onValueChange={setFontSize} className="grid grid-cols-3 gap-4">
            <Label
              htmlFor="font-small"
              className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
            >
              <RadioGroupItem value="small" id="font-small" className="sr-only" />
              <span className="text-sm">Small</span>
            </Label>
            <Label
              htmlFor="font-medium"
              className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
            >
              <RadioGroupItem value="medium" id="font-medium" className="sr-only" />
              <span className="text-base">Medium</span>
            </Label>
            <Label
              htmlFor="font-large"
              className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
            >
              <RadioGroupItem value="large" id="font-large" className="sr-only" />
              <span className="text-lg">Large</span>
            </Label>
          </RadioGroup>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSaveAppearance} disabled={isUpdating}>
            {isUpdating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isUpdating ? "Saving..." : "Save Preferences"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
