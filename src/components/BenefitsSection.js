const benefits = [
  {
    title: "New & 100% Authentic",
    subtitle: "100% Original",
    description:
      "Semua produk RevoShop baru, bergaransi resmi, dan melalui quality control ketat.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    ),
  },
  {
    title: "Best Price",
    subtitle: "Harga Terbaik",
    description:
      "Harga bersaing dengan cicilan 0% dan beragam metode pembayaran.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
      />
    ),
  },
  {
    title: "Excellent Service",
    subtitle: "Layanan Terbaik",
    description:
      "Keamanan belanja prioritas utama. Jaminan 3 hari pengembalian (S&K berlaku).",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.622-5.946 1.776-1.608 1.209-2.676 3.146-2.676 5.386v4.286c0 2.23 1.068 4.177 2.676 5.386A48.508 48.508 0 0 0 11.25 21c2.115 0 4.198-.622 5.946-1.776"
      />
    ),
  },
  {
    title: "Extra Benefits",
    subtitle: "Keuntungan Extra",
    description:
      "Revo Points, loyalty rewards, dan gratis ongkir via aplikasi untuk pelanggan setia.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
      />
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section className="border-y border-zinc-800 bg-[#0f0f15]/50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-bold text-white sm:text-xl">
          Keuntungan Belanja di RevoShop
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-blue-500"
                >
                  {benefit.icon}
                </svg>
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-blue-500">
                {benefit.subtitle}
              </p>
              <h3 className="mt-1 text-sm font-bold text-white">
                {benefit.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
