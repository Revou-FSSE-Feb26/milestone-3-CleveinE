"use client";

import { useEffect, useState } from "react";
import ProductListing from "./ProductListing";

function ProductListingFallback() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="h-8 w-64 rounded-lg bg-zinc-800 animate-pulse"></div>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-80 rounded-xl bg-zinc-900 animate-pulse"></div>
        ))}
      </div>
    </div>
  );
}

export default function ProductContent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.map(p => ({
          ...p,
          name: p.title,
          brand: p.category.split("'")[0] || "Brand",
        })));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <ProductListingFallback />;
  }

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center">
        <p className="text-red-400 mb-4">Gagal memuat produk: {error}</p>
        <button onClick={() => window.location.reload()} className="px-4 py-2 rounded-lg bg-blue-500 text-zinc-950 font-semibold">
          Coba lagi
        </button>
      </div>
    );
  }

  return <ProductListing products={products} />;
}
