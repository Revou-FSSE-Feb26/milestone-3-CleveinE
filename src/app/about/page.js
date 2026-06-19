export const metadata = {
  title: "Tentang Kami — RevoShop",
  description:
    "Tentang RevoShop — pusat online store jam tangan original #1 di Indonesia.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">
        Tentang RevoShop
      </h1>
      <p className="mt-2 text-sm font-semibold text-blue-500">
        #1 Online Watch Store Indonesia
      </p>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-zinc-400">
        <p>
          RevoShop merupakan pusat penjualan 100% produk jam tangan original
          dari berbagai brand ternama dunia. Kami adalah platform e-commerce
          khusus jam tangan yang menghadirkan koleksi terlengkap dengan garansi
          resmi dan harga terbaik.
        </p>
        <p>
          Sejak didirikan, RevoShop telah menjadi destinasi belanja jam tangan
          favorit dengan lebih dari 100 brand resmi — mulai dari Casio, Seiko,
          Daniel Wellington, Fossil, Tissot, Expedition, Garmin, hingga brand
          luxury internasional lainnya.
        </p>
        <p>
          Kami memberikan 5 benefit utama: Produk Original Bergaransi Resmi,
          Harga Terbaik, Customer Oriented, Jaminan Pengiriman, dan
          Price Match.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          { label: "Brand Resmi", value: "100+" },
          { label: "Member Aktif", value: "300K+" },
          { label: "Rating", value: "4.9★" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-center"
          >
            <p className="text-2xl font-bold text-blue-500">{stat.value}</p>
            <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
