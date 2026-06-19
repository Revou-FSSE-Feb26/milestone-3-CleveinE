import { brands } from "@/data/products";

export default function BrandScroller() {
  return (
    <section className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Brand Partner Resmi
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-sm font-semibold text-zinc-400 transition-colors hover:text-amber-400"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
