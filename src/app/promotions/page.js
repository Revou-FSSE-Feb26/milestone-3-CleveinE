import Link from "next/link";

const promotions = [
  {
    title: "Flash Sale 6.6 — Diskon hingga 40%",
    description:
      "Rayakan 6.6 dengan diskon besar untuk jam Casio G-Shock, Seiko 5 Sports, dan Daniel Wellington. Stok terbatas!",
    code: "REVO66",
    validUntil: "30 Juni 2026",
  },
  {
    title: "Gratis Ongkir Seluruh Indonesia",
    description:
      "Belanja minimal Rp500.000 dan nikmati gratis ongkir via JNE, J&T, dan SiCepat. Berlaku untuk member baru.",
    code: "GRATISONGKIR",
    validUntil: "31 Juli 2026",
  },
  {
    title: "Cicilan 0% — 12 Bulan",
    description:
      "Beli jam Tissot, Seiko Presage, atau Garmin dengan cicilan 0% hingga 12 bulan via kartu kredit BCA, Mandiri, dan BRI.",
    code: "CICIL0",
    validUntil: "31 Agustus 2026",
  },
  {
    title: "Revo Points — Double Points",
    description:
      "Dapatkan double Revo Points untuk setiap transaksi di bulan ini. Tukar points dengan voucher belanja!",
    code: "2XPOINTS",
    validUntil: "30 Juni 2026",
  },
];

export const metadata = {
  title: "Promo & Diskon — RevoShop",
  description: "Promo dan penawaran terbaru jam tangan original di RevoShop.",
};

export default function PromotionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <span className="inline-block rounded-full bg-red-600/20 px-3 py-1 text-xs font-bold text-red-400">
          PROMO TERBARU
        </span>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Promo &amp; Penawaran Spesial
        </h1>
        <p className="mt-4 text-lg text-zinc-400">
          Nikmati berbagai promo menarik belanja jam tangan original
          di RevoShop.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {promotions.map((promo) => (
          <div
            key={promo.code}
            className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <span className="inline-block w-fit rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-500">
              Kode: {promo.code}
            </span>
            <h2 className="mt-4 text-xl font-semibold text-white">
              {promo.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
              {promo.description}
            </p>
            <p className="mt-4 text-xs text-zinc-500">
              Berlaku hingga {promo.validUntil}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-block rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-blue-600"
        >
          Belanja Sekarang
        </Link>
      </div>
    </div>
  );
}
