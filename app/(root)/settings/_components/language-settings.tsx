"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Loader2, Globe } from "lucide-react";

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export function LanguageSettings() {
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  const [isUpdating, setIsUpdating] = useState(false);

  const languages: Language[] = [
    { code: "en-US", name: "English (US)", nativeName: "English (US)" },
    { code: "en-GB", name: "English (UK)", nativeName: "English (UK)" },
    { code: "es", name: "Spanish", nativeName: "Español" },
    { code: "fr", name: "French", nativeName: "Français" },
    { code: "de", name: "German", nativeName: "Deutsch" },
    { code: "ja", name: "Japanese", nativeName: "日��語" },
    { code: "zh-CN", name: "Chinese (Simplified)", nativeName: "简体中文" },
  ];

  const handleSaveLanguage = async () => {
    setIsUpdating(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Language updated",
      description: "Your language preference has been updated successfully.",
    });

    setIsUpdating(false);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-primary" />
          <CardTitle>Language Preferences</CardTitle>
        </div>
        <CardDescription>
          Select your preferred language for the user interface.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <RadioGroup
          value={selectedLanguage}
          onValueChange={setSelectedLanguage}
          className="space-y-3"
        >
          {languages.map((language) => (
            <div key={language.code} className="flex items-center space-x-2">
              <RadioGroupItem value={language.code} id={language.code} />
              <Label htmlFor={language.code} className="flex-1 cursor-pointer">
                <div className="flex justify-between">
                  <span>{language.name}</span>
                  {language.name !== language.nativeName && (
                    <span className="text-muted-foreground">
                      {language.nativeName}
                    </span>
                  )}
                </div>
              </Label>
            </div>
          ))}
        </RadioGroup>

        <div className="flex justify-end">
          <Button onClick={handleSaveLanguage} disabled={isUpdating}>
            {isUpdating && <Loader2 className="animate-spin mr-2 h-4 w-4" />}
            {isUpdating ? "Saving..." : "Save Language"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
