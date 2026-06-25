"use client";

import { ShoppingBagOpen } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/lib/store";
import type { Product } from "@/types";

export function AddToCartButton({
  product,
  className,
  label = "Add to Cart"
}: {
  product: Product;
  className?: string;
  label?: string;
}) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <Button className={className} variant="primary" onClick={() => addItem(product)}>
      <ShoppingBagOpen size={18} weight="regular" />
      {label}
    </Button>
  );
}
