"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <button
      onClick={handleClick}
      className={`w-full rounded-lg px-6 py-3.5 text-sm font-semibold transition-all ${
        added
          ? "bg-green-600 text-white"
          : "bg-amber-400 text-zinc-950 hover:bg-amber-300"
      }`}
    >
      {added ? "Ditambahkan ke Keranjang ✓" : "Tambah ke Keranjang"}
    </button>
  );
}
