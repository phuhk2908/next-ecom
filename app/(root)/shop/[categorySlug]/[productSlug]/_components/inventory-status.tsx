import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface InventoryStatusProps {
  inventoryQuantity: number
}

export function InventoryStatus({ inventoryQuantity }: InventoryStatusProps) {
  const isLowStock = inventoryQuantity > 0 && inventoryQuantity < 5

  return (
    <div className="space-y-2">
      <div>
        <p className="text-sm">
          Status:
          <span className={inventoryQuantity ? "text-green-600 ml-1" : "text-red-600 ml-1"}>
            {inventoryQuantity ? "In Stock" : "Out of Stock"}
          </span>
        </p>
        {inventoryQuantity > 0 && (
          <p className="text-sm text-muted-foreground">
            {inventoryQuantity} items available
            {isLowStock && <span className="text-red-500 ml-1">Low stock!</span>}
          </p>
        )}
      </div>

      {/* Low stock warning */}
      {isLowStock && (
        <Alert variant="destructive" className="bg-red-50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>Only {inventoryQuantity} items left in stock - order soon!</AlertDescription>
        </Alert>
      )}
    </div>
  )
}
