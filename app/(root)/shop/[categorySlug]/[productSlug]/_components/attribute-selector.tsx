"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

type AttributeOption = {
  name: string
  values: string[]
}

// Type for inventory by attribute
type InventoryByAttribute = {
  [attributeName: string]: {
    [attributeValue: string]: number
  }
}

interface AttributeSelectorProps {
  attributes: AttributeOption[]
  selectedAttributes: Record<string, string>
  inventoryByAttribute: InventoryByAttribute
  availableAttributeValues: Record<string, string[]>
  onAttributeChange: (attributeName: string, value: string) => void
}

export function AttributeSelector({
  attributes,
  selectedAttributes,
  inventoryByAttribute,
  availableAttributeValues,
  onAttributeChange,
}: AttributeSelectorProps) {
  // Get color style for color swatches
  const getColorStyle = (colorName: string) => {
    const colorMap: Record<string, string> = {
      Red: "bg-red-500",
      Blue: "bg-blue-500",
      Green: "bg-green-500",
      Black: "bg-black",
    }

    return colorMap[colorName] || "bg-gray-300"
  }

  // Check if a specific attribute value is available (has inventory)
  const isAttributeValueAvailable = (attributeName: string, attributeValue: string) => {
    if (!inventoryByAttribute[attributeName]) return false
    return (inventoryByAttribute[attributeName][attributeValue] || 0) > 0
  }

  // Check if a specific attribute value is selectable based on current selections
  const isAttributeValueSelectable = (attributeName: string, attributeValue: string) => {
    if (!availableAttributeValues[attributeName]) return true
    return availableAttributeValues[attributeName].includes(attributeValue)
  }

  return (
    <div className="space-y-4">
      {attributes.map((attribute) => (
        <div key={attribute.name} className="space-y-2">
          <div className="flex justify-between">
            <h3 className="font-medium">{attribute.name}</h3>
            {attribute.name === "Color" && (
              <span className="text-sm text-muted-foreground">Selected: {selectedAttributes[attribute.name]}</span>
            )}
          </div>

          {attribute.name === "Color" ? (
            // Color swatches
            <RadioGroup
              value={selectedAttributes[attribute.name] || ""}
              onValueChange={(value) => onAttributeChange(attribute.name, value)}
              className="flex flex-wrap gap-2"
            >
              {attribute.values.map((value) => {
                const isAvailable = isAttributeValueAvailable(attribute.name, value)
                const isSelectable = isAttributeValueSelectable(attribute.name, value)

                return (
                  <div key={value} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={value}
                      id={`${attribute.name}-${value}`}
                      className="peer sr-only"
                      disabled={!isSelectable || !isAvailable}
                    />
                    <Label
                      htmlFor={`${attribute.name}-${value}`}
                      className={`flex cursor-pointer items-center justify-center rounded-full w-8 h-8 border-2 border-muted hover:border-primary peer-data-[state=checked]:border-primary ${
                        !isSelectable || !isAvailable ? "opacity-30 cursor-not-allowed" : ""
                      } ${getColorStyle(value)}`}
                    >
                      <span className="sr-only">{value}</span>
                    </Label>
                  </div>
                )
              })}
            </RadioGroup>
          ) : (
            // Size buttons
            <RadioGroup
              value={selectedAttributes[attribute.name] || ""}
              onValueChange={(value) => onAttributeChange(attribute.name, value)}
              className="flex flex-wrap gap-2"
            >
              {attribute.values.map((value) => {
                const isAvailable = isAttributeValueAvailable(attribute.name, value)
                const isSelectable = isAttributeValueSelectable(attribute.name, value)

                return (
                  <div key={value} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={value}
                      id={`${attribute.name}-${value}`}
                      className="peer sr-only"
                      disabled={!isSelectable || !isAvailable}
                    />
                    <Label
                      htmlFor={`${attribute.name}-${value}`}
                      className={`flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary ${
                        !isSelectable || !isAvailable ? "opacity-30 cursor-not-allowed" : ""
                      }`}
                    >
                      {value}
                      {!isAvailable && <span className="ml-1 text-xs">(Out of stock)</span>}
                    </Label>
                  </div>
                )
              })}
            </RadioGroup>
          )}
        </div>
      ))}
    </div>
  )
}
