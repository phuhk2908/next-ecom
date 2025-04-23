"use client";

import { memo, useState } from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity?: number;
  min?: number;
  max?: number;
  setQuantity?: (value: number) => void;
}

const QuantitySelector = memo(
  ({ quantity = 0, min = 0, max = 99, setQuantity }: QuantitySelectorProps) => {
    const [value, setValue] = useState(quantity);

    const increment = () => {
      if (value < max) {
        const newValue = value + 1;
        setValue(newValue);
        setQuantity?.(newValue);
      }
    };

    const decrement = () => {
      if (value > min) {
        const newValue = value - 1;
        setValue(newValue);
        setQuantity?.(newValue);
      }
    };

    return (
      <div className="inline-flex h-8 items-center rounded bg-muted lg:h-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={decrement}
          disabled={value <= min}
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center font-medium">{value}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={increment}
          disabled={value >= max}
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    );
  },
);

QuantitySelector.displayName = "QuantitySelector";

export default QuantitySelector;
