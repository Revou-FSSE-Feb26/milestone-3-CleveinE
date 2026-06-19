"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export default function CartPage() {
  const { cart, cartTotal, removeFromCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Keranjang Belanja</h1>
        <p className="mt-4 text-zinc-400">Keranjang kamu masih kosong.</p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-300"
        >
          Mulai Belanja
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white">Keranjang Belanja</h1>
      <p className="mt-2 text-zinc-400">{cart.length} produk di keranjang</p>

      <div className="mt-10 space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:gap-6 sm:p-6"
          >
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-zinc-800 sm:h-28 sm:w-28">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                {item.brand && (
                  <p className="text-xs font-semibold uppercase text-amber-400/80">
                    {item.brand}
                  </p>
                )}
                <Link
                  href={`/products/${item.id}`}
                  className="font-semibold text-white hover:text-amber-400"
                >
                  {item.name}
                </Link>
                <p className="mt-1 text-amber-400">{formatPrice(item.price)}</p>
              </div>
              <div className="mt-4 flex items-center gap-4 sm:mt-0">
                <div className="flex items-center rounded-lg border border-zinc-700">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1.5 text-zinc-400 hover:text-white"
                  >
                    −
                  </button>
                  <span className="px-3 py-1.5 text-sm text-white">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1.5 text-zinc-400 hover:text-white"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-zinc-500 hover:text-red-400"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-zinc-300">Total</span>
          <span className="text-2xl font-bold text-amber-400">
            {formatPrice(cartTotal)}
          </span>
        </div>
        {cartTotal >= 500000 && (
          <p className="mt-2 text-xs text-green-400">
            ✓ Kamu mendapat gratis ongkir!
          </p>
        )}
        <button className="mt-6 w-full rounded-lg bg-amber-400 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-300">
          Lanjut ke Checkout
        </button>
      </div>
    </div>
  );
}
