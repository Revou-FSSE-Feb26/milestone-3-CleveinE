"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import BenefitsSection from "@/components/BenefitsSection";
import BrandScroller from "@/components/BrandScroller";
import ProductListing from "@/components/ProductListing";

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

function ProductContent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data.map(p => ({
          ...p,
          name: p.title,
          brand: p.category.split("'")[0] || "Brand",
        })));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <ProductListingFallback />;
  }

  return <ProductListing products={products} />;
}

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#0f0f15] to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Pusat Belanja Jam Tangan Original
              </h1>
              <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
                Lebih dari 100 brand ternama — Casio, Seiko, Daniel Wellington,
                Fossil, Citizen, dan lainnya.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-blue-600"
                >
                  Belanja Sekarang
                </a>
                <Link
                  href="/promotions"
                  className="rounded-lg border border-zinc-600 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-blue-500/50 hover:text-blue-500"
                >
                  Lihat Promo
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "100+", sub: "Brand " },
                { label: "300K+", sub: "Member Aktif" },
                { label: "Garansi Resmi", sub: "100% Original" },
                { label: "Pengiriman", sub: "Seluruh Indonesia" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-5 text-center"
                >
                  <p className="text-lg font-bold text-blue-500 sm:text-xl">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BrandScroller />
      <BenefitsSection />
      <Suspense fallback={<ProductListingFallback />}>
        <ProductContent />
      </Suspense>
    </div>
  );
}
