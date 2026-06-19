"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { categories, filterProducts } from "@/data/products";
import ProductGrid from "./ProductGrid";

export default function ProductListing({ products }) {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProducts = filterProducts(products, activeCategory, searchQuery);

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat && categories.some((c) => c.id === cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  useEffect(() => {
    if (activeCategory !== "all" || searchQuery) {
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeCategory, searchQuery]);

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Koleksi Jam Tangan
          </h2>
          <p className="mt-2 text-zinc-400">
            {filteredProducts.length} produk dari brand ternama
          </p>
        </div>
        <div className="relative w-full lg:max-w-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Cari brand atau model jam..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-blue-500/50 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
              activeCategory === cat.id
                ? "bg-blue-500 text-zinc-950"
                : "border border-zinc-700 text-zinc-300 hover:border-blue-500/50 hover:text-blue-500"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="mt-8">
          <ProductGrid products={filteredProducts} />
        </div>
      ) : (
        <div className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900 py-16 text-center">
          <p className="text-zinc-400">Tidak ada produk yang cocok.</p>
          <button
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="mt-4 text-sm font-semibold text-blue-500 hover:text-blue-400"
          >
            Reset filter
          </button>
        </div>
      )}
    </section>
  );
}
