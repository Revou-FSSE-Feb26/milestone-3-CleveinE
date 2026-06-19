import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProductById,
  formatPrice,
  getDiscountPercent,
  products,
} from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Produk Tidak Ditemukan — RevoShop" };
  return {
    title: `${product.brand} ${product.name} — RevoShop`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const discount = getDiscountPercent(product.price, product.originalPrice);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        Kembali ke Belanja
      </Link>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          {discount > 0 && (
            <span className="absolute left-4 top-4 rounded bg-red-600 px-3 py-1.5 text-sm font-bold text-white">
              -{discount}%
            </span>
          )}
          {product.badge && (
            <span className="absolute right-4 top-4 rounded-full bg-blue-500 px-4 py-1.5 text-sm font-semibold text-zinc-950">
              {product.badge}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
            {product.brand}
          </p>
          <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-baseline gap-3">
            <p className="text-3xl font-bold text-blue-500">
              {formatPrice(product.price)}
            </p>
            {product.originalPrice > product.price && (
              <p className="text-lg text-zinc-500 line-through">
                {formatPrice(product.originalPrice)}
              </p>
            )}
          </div>

          <span className="mt-2 inline-block w-fit rounded bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-500">
            Garansi Resmi
          </span>

          <p className="mt-6 text-base leading-relaxed text-zinc-400">
            {product.description}
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-sm">
            <div>
              <dt className="text-zinc-500">Movement</dt>
              <dd className="font-medium text-white">{product.movement}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Water Resist</dt>
              <dd className="font-medium text-white">{product.waterResist}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Kategori</dt>
              <dd className="font-medium capitalize text-white">
                {product.category}
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Untuk</dt>
              <dd className="font-medium capitalize text-white">
                {product.gender}
              </dd>
            </div>
          </dl>

          <div className="mt-8 space-y-3 border-t border-zinc-800 pt-8">
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 shrink-0 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a49.065 49.065 0 0 0-.18-4.035A48.754 48.754 0 0 0 18 9.375m-12.303 3.376c-.866.5-1.839 1.303-2.303 2.303"
                />
              </svg>
              Gratis ongkir untuk pembelian di atas Rp500.000
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 shrink-0 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
              Garansi resmi distributor — jaminan 3 hari pengembalian
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 shrink-0 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
              Cicilan 0% tersedia via kartu kredit partner bank
            </div>
          </div>

          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
