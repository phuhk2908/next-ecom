"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddToCartButtonProps {
  disabled: boolean;
  onClick: () => void;
}

export function AddToCartButton({ disabled, onClick }: AddToCartButtonProps) {
  return (
    <Button className="w-full" size="lg" onClick={onClick} disabled={disabled}>
      <ShoppingCart className="mr-2 h-5 w-5" />
      Add to Cart
    </Button>
  );
}
