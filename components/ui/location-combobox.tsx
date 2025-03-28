"use client";

import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Location {
  code: number;
  name: string;
}

interface LocationComboboxProps {
  value: number | null;
  onValueChange: (value: number | null) => void;
  options: Location[];
  loading?: boolean;
  error?: string;
  placeholder: string;
  searchPlaceholder: string;
  disabled?: boolean;
  required?: boolean;
}

export function LocationCombobox({
  value,
  onValueChange,
  options,
  loading,
  error,
  placeholder,
  searchPlaceholder,
  disabled,
}: LocationComboboxProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className={cn(
            "w-full justify-between",
            !value && "text-muted-foreground",
          )}
          disabled={disabled}
        >
          {value
            ? options.find((item) => item.code === value)?.name
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {error ? (
                <div className="p-2 text-sm text-red-500">{error}</div>
              ) : loading ? (
                <div className="flex items-center justify-center p-2">
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  <span>Loading...</span>
                </div>
              ) : (
                options.map((item) => (
                  <CommandItem
                    key={item.code}
                    value={item.name}
                    onSelect={() => {
                      onValueChange(item.code);
                      setOpen(false);
                    }}
                  >
                    {item.name}
                    <Check
                      className={cn(
                        "mr-l h-4 w-4",
                        value === item.code ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
