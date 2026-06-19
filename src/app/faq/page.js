const faqs = [
  {
    question: "Apakah semua jam tangan di RevoShop original?",
    answer:
      "Ya, 100% original. Semua produk RevoShop adalah jam tangan baru, bergaransi resmi distributor, dan telah melalui quality control ketat. Kami tidak menjual barang replica atau palsu.",
  },
  {
    question: "Bagaimana kebijakan pengembalian barang?",
    answer:
      "RevoShop memberikan jaminan 3 hari pengembalian jika produk rusak atau tidak sesuai deskripsi. Syarat dan ketentuan berlaku. Hubungi Customer Service kami di 1500-REVO.",
  },
  {
    question: "Apakah tersedia gratis ongkir?",
    answer:
      "Ya, gratis ongkir untuk pembelian di atas Rp500.000 ke seluruh Indonesia via JNE, J&T, SiCepat, dan AnterAja. Member baru aplikasi juga mendapat benefit gratis ongkir.",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer:
      "Kami menerima transfer bank (BCA, Mandiri, BRI), e-wallet (GoPay, OVO), QRIS, kartu kredit (Visa, Mastercard), dan cicilan 0% via partner bank.",
  },
  {
    question: "Apakah jam tangan bergaransi resmi?",
    answer:
      "Semua jam tangan di RevoShop dilengkapi garansi resmi dari distributor masing-masing brand. Masa garansi bervariasi tergantung brand, umumnya 1–2 tahun.",
  },
  {
    question: "Bagaimana cara melacak pesanan saya?",
    answer:
      "Setelah pesanan dikirim, kamu akan menerima email/SMS berisi nomor resi. Lacak pesanan via halaman 'Pesanan Saya' atau langsung di website kurir.",
  },
];

export const metadata = {
  title: "Pusat Bantuan — RevoShop",
  description: "FAQ dan bantuan belanja jam tangan original di RevoShop.",
};

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">
        Pusat Bantuan
      </h1>
      <p className="mt-4 text-lg text-zinc-400">
        Pertanyaan yang sering diajukan seputar belanja di RevoShop.
      </p>

      <dl className="mt-12 space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <dt className="text-base font-semibold text-white">
              {faq.question}
            </dt>
            <dd className="mt-3 text-sm leading-relaxed text-zinc-400">
              {faq.answer}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-center">
        <p className="text-sm text-zinc-400">Butuh bantuan lebih lanjut?</p>
        <p className="mt-2 text-lg font-bold text-blue-500">1500-REVO</p>
        <p className="mt-1 text-sm text-zinc-500">support@revoshop.com</p>
      </div>
    </div>
  );
}
