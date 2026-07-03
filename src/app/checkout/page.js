"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export default function CheckoutPage() {
  const { user, isLoaded } = useAuth();
  const { cart, cartTotal, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoaded && !user) {
      router.push("/login");
    } else if (isLoaded) {
      setLoading(false);
    }
  }, [isLoaded, user, router]);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center text-zinc-400 sm:px-6 lg:px-8">
        Memuat...
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">Keranjang Belanja Kosong</h1>
        <p className="mt-4 text-zinc-400">Silakan tambahkan produk terlebih dahulu.</p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-blue-600"
        >
          Mulai Belanja
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/cart"
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
        Kembali ke Keranjang
      </Link>

      <h1 className="text-3xl font-bold text-white">Checkout</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-white">Detail Pengiriman</h2>
          <div className="mt-4 space-y-4 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-zinc-300">Nama Depan</label>
                <input
                  type="text"
                  defaultValue={user?.name?.firstname || ""}
                  className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300">Nama Belakang</label>
                <input
                  type="text"
                  defaultValue={user?.name?.lastname || ""}
                  className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300">Email</label>
              <input
                type="email"
                defaultValue={user?.email || ""}
                className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300">Alamat</label>
              <textarea
                rows={3}
                className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-blue-500"
              ></textarea>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">Ringkasan Pesanan</h2>
          <div className="mt-4 space-y-4 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-zinc-800">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <Link
                      href={`/products/${item.id}`}
                      className="text-sm font-medium text-white hover:text-blue-500"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-zinc-400">
                      {item.quantity} x {formatPrice(item.price)}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-blue-500">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}

            <div className="border-t border-zinc-800 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-zinc-300">Total</span>
                <span className="text-2xl font-bold text-blue-500">
                  {formatPrice(cartTotal)}
                </span>
              </div>
            </div>

            <button className="w-full rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-blue-600">
              Konfirmasi Pesanan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
