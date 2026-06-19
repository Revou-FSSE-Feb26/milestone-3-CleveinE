"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <section className="border-t border-zinc-800 bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-xl font-bold text-white">Newsletter</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Dapatkan info promo, penawaran terbatas, dan produk terbaru RevoShop
            langsung di inbox emailmu.
          </p>
          {submitted ? (
            <p className="mt-6 text-sm font-semibold text-amber-400">
              Terima kasih! Kamu sudah terdaftar newsletter RevoShop.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
              <input
                type="email"
                required
                placeholder="Email kamu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-amber-400/50 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-300"
              >
                Langganan
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
