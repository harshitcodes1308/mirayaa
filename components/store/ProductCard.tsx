"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/Badge";
import { AddToCartButton } from "@/components/store/AddToCartButton";
import { formatPrice } from "@/lib/utils";
import { categories } from "@/lib/data";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  const category = categories.find((item) => item.slug === product.category);

  return (
    <article className="product-card group relative border-b border-[var(--border)] pb-4">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[6px] border border-[var(--border)] bg-[var(--surface)]">
          <Image
            src={product.images[0]}
            alt={`${product.name} handcrafted jewelry`}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="product-image-primary object-cover transition-[transform] duration-[260ms] ease-[var(--ease-out)]"
          />
          {product.images[1] ? (
            <Image
              src={product.images[1]}
              alt={`${product.name} alternate angle`}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="product-image-secondary object-cover opacity-0 transition-opacity duration-[220ms] ease-[var(--ease-out)]"
            />
          ) : null}
          {product.isFeatured ? <Badge className="absolute left-3 top-3 border-[var(--gold)] text-[var(--gold)]">New</Badge> : null}
          <div className="product-card-action absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-[opacity,transform] duration-200 ease-[var(--ease-out)]">
            <AddToCartButton product={product} className="w-full" label="Add" />
          </div>
        </div>
      </Link>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <Link href={`/product/${product.slug}`} className="text-sm font-medium text-[var(--ivory)] transition-colors hover:text-[var(--gold)]">
            {product.name}
          </Link>
          <p className="mt-1 text-xs text-[var(--champagne)]/70">{category?.name}</p>
        </div>
        <div className="text-right">
          <p className="font-mono-price text-sm text-[var(--gold)]">{formatPrice(product.price)}</p>
          {product.comparePrice ? (
            <p className="font-mono-price text-xs text-[var(--champagne)]/45 line-through">{formatPrice(product.comparePrice)}</p>
          ) : null}
        </div>
      </div>
      <Link
        href={`/product/${product.slug}`}
        className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--champagne)]/70 transition-colors hover:text-[var(--gold)]"
      >
        View piece <ArrowRight size={14} />
      </Link>
    </article>
  );
}
