"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await login(username, password);

    if (result.success) {
      router.push("/");
    } else {
      setError(result.error || "Login gagal. Coba gunakan username: mor_2314 dan password: 83r5^_");
    }
    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-md px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <Link href="/" className="inline-flex flex-col">
          <span className="text-3xl font-bold tracking-tight text-blue-500">
            REVO
          </span>
          <span className="-mt-1 text-[10px] font-medium tracking-[0.2em] text-zinc-400 sm:text-xs">
            SHOP
          </span>
        </Link>
        <h1 className="mt-8 text-2xl font-bold text-white">Masuk ke Akun</h1>
        <p className="mt-2 text-zinc-400">
          Masukkan kredensialmu untuk melanjutkan belanja
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-zinc-300">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-blue-500"
              placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-blue-500"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        <div className="mt-6 border-t border-zinc-800 pt-6">
          <p className="text-xs text-zinc-500">
          Contoh akun: username <span className="font-mono text-zinc-300">mor_2314</span> dan password{" "}
          <span className="font-mono text-zinc-300">83r5^_</span>
          </p>
        </div>
      </div>
    </div>
  );
}
