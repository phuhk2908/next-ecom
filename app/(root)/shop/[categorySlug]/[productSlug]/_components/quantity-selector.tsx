"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuantitySelectorProps {
  quantity: number;
  maxQuantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function QuantitySelector({
  quantity,
  maxQuantity,
  onIncrement,
  onDecrement,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="icon"
        onClick={onDecrement}
        disabled={quantity <= 1 || maxQuantity <= 0}
      >
        <MinusIcon className="h-4 w-4" />
      </Button>
      <span className="w-12 text-center">{quantity}</span>
      <Button
        variant="outline"
        size="icon"
        onClick={onIncrement}
        disabled={quantity >= maxQuantity || maxQuantity <= 0}
      >
        <PlusIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
