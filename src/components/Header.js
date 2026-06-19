"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import AnnouncementBar from "./AnnouncementBar";

const navLinks = [
  { href: "/", label: "Belanja" },
  { href: "/promotions", label: "Promo" },
  { href: "/faq", label: "Pusat Bantuan" },
  { href: "/about", label: "Tentang Kami" },
];

const categoryLinks = [
  { href: "/?cat=pria", label: "Jam Pria" },
  { href: "/?cat=wanita", label: "Jam Wanita" },
  { href: "/?cat=sporty", label: "Sporty" },
  { href: "/?cat=smartwatch", label: "Smartwatch" },
];

export default function Header() {
  const pathname = usePathname();
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50">
      <AnnouncementBar />

      <div className="border-b border-zinc-800 bg-[#0a0a0f]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-end px-4 py-2 text-xs text-zinc-500 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:text-blue-500">Masuk</span>
            <span className="cursor-pointer hover:text-blue-500">Daftar</span>
          </div>
        </div>
      </div>

      <div className="border-b border-zinc-800 bg-[#0a0a0f]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-blue-500 sm:text-2xl">
              REVO
            </span>
            <span className="-mt-1 text-[10px] font-medium tracking-[0.2em] text-zinc-400 sm:text-xs">
              SHOP
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  pathname === link.href ? "text-blue-500" : "text-zinc-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-blue-500/50 hover:text-blue-500 sm:px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="hidden sm:inline">Keranjang</span>
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-zinc-950">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-6 border-t border-zinc-800 px-4 py-2.5 md:flex">
          {categoryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-zinc-400 transition-colors hover:text-blue-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <nav className="flex items-center justify-center gap-4 overflow-x-auto border-t border-zinc-800 px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`shrink-0 text-xs font-medium transition-colors hover:text-blue-500 ${
                pathname === link.href ? "text-blue-500" : "text-zinc-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
