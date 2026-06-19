import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/data/products";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5"
    >
      <div className="relative aspect-square overflow-hidden bg-zinc-800">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute right-3 top-3 rounded-full bg-blue-500 px-2.5 py-1 text-xs font-semibold text-zinc-950">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-500/80">
          {product.brand}
        </p>
        <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-white group-hover:text-blue-500">
          {product.name}
        </h3>
        <div className="mt-auto pt-3">
          <p className="text-base font-bold text-blue-500">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </Link>
  );
}
