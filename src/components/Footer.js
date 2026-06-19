import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="mt-auto border-t border-zinc-800 bg-[#0a0a0f]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-bold text-blue-500">RevoShop</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Pusat online store jam tangan #1. 100% produk original dari
                berbagai brand ternama dunia dengan garansi resmi.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                Belanja
              </h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-zinc-400 hover:text-blue-500"
                  >
                    Semua Jam Tangan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/?cat=sporty"
                    className="text-sm text-zinc-400 hover:text-blue-500"
                  >
                    Sporty
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-zinc-400 hover:text-blue-500"
                  >
                    Jam Pria
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-zinc-400 hover:text-blue-500"
                  >
                    Jam Wanita
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                Informasi
              </h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/faq"
                    className="text-sm text-zinc-400 hover:text-blue-500"
                  >
                    Pusat Bantuan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-zinc-400 hover:text-blue-500"
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <span className="text-sm text-zinc-400">
                    Kebijakan Pengembalian
                  </span>
                </li>
                <li>
                  <span className="text-sm text-zinc-400">
                    Syarat &amp; Ketentuan
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                Kontak
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li className="font-semibold text-white">1500-REVO</li>
                <li>support@revoshop.com</li>
                <li>Sen–Jum, 09.00–18.00 WIB</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-zinc-800 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Metode Pembayaran
              </p>
              <p className="mt-2 text-xs text-zinc-400">
                BCA · Mandiri · BRI · GoPay · OVO · QRIS · Cicilan 0%
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Jasa Pengiriman
              </p>
              <p className="mt-2 text-xs text-zinc-400">
                JNE · J&amp;T · SiCepat · AnterAja · GoSend
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Keamanan
              </p>
              <p className="mt-2 text-xs text-zinc-400">
                SSL Encrypted · Garansi Resmi · 100% Original
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} RevoShop. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
