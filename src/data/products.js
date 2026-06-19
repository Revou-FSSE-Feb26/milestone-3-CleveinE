export const categories = [
  { id: "all", label: "Semua" },
  { id: "pria", label: "Pria" },
  { id: "wanita", label: "Wanita" },
  { id: "sporty", label: "Sporty" },
  { id: "smartwatch", label: "Smartwatch" },
  { id: "bestseller", label: "Best Seller" },
];

export const brands = [
  "Casio",
  "Seiko",
  "Daniel Wellington",
  "Fossil",
  "Citizen",
  "Tissot",
  "Expedition",
  "Garmin",
];

export const products = [
  {
    id: "1",
    brand: "Casio",
    name: "G-Shock GA-2100-1A1",
    price: 1899000,
    originalPrice: 2299000,
    image:
      "https://images.unsplash.com/photo-1544112564-037883a5c562?w=600&h=600&fit=crop",
    description:
      "Jam tangan Casio G-Shock GA-2100 dengan desain octagonal iconic, shock resistant, water resistant 200m, dan fitur world time. Cocok untuk gaya sporty sehari-hari.",
    gender: "pria",
    category: "sporty",
    movement: "Quartz",
    waterResist: "200m",
    badge: "Best Seller",
  },
  {
    id: "2",
    brand: "Seiko",
    name: "5 Sports SRPD51K1 Automatic",
    price: 3499000,
    originalPrice: 3999000,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop",
    description:
      "Seiko 5 Sports dengan movement automatic 4R36, day-date display, unidirectional bezel, dan water resistant 100m. Koleksi diver watch terfavorit di Indonesia.",
    gender: "pria",
    category: "sporty",
    movement: "Automatic",
    waterResist: "100m",
    badge: "Best Seller",
  },
  {
    id: "3",
    brand: "Daniel Wellington",
    name: "Classic Petite Melrose 28mm",
    price: 1799000,
    originalPrice: 2199000,
    image:
      "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=600&h=600&fit=crop",
    description:
      "Daniel Wellington Classic Petite dengan dial putih minimalis, strap mesh rose gold, dan case 28mm. Elegan untuk penampilan feminin sehari-hari.",
    gender: "wanita",
    category: "fashion",
    movement: "Quartz",
    waterResist: "30m",
    badge: "Terlaris",
  },
  {
    id: "4",
    brand: "Fossil",
    name: "Grant Chronograph FS4835",
    price: 2199000,
    originalPrice: 2799000,
    image:
      "https://images.unsplash.com/photo-1614167685670-57984a710d87?w=600&h=600&fit=crop",
    description:
      "Fossil Grant Chronograph dengan dial Roman numeral, sub-dial chronograph, strap kulit cokelat, dan water resistant 50m. Gaya klasik modern untuk pria.",
    gender: "pria",
    category: "fashion",
    movement: "Quartz Chronograph",
    waterResist: "50m",
  },
  {
    id: "5",
    brand: "Citizen",
    name: "Eco-Drive BM8180-03E",
    price: 2499000,
    originalPrice: 2899000,
    image:
      "https://images.unsplash.com/photo-1587836374828-4dbafa94fb0e?w=600&h=600&fit=crop",
    description:
      "Citizen Eco-Drive dengan teknologi solar-powered, tidak perlu ganti baterai. Military-inspired design, canvas strap, water resistant 100m.",
    gender: "pria",
    category: "sporty",
    movement: "Eco-Drive Solar",
    waterResist: "100m",
    badge: "New",
  },
  {
    id: "7",
    brand: "Expedition",
    name: "E67688 Chronograph",
    price: 899000,
    originalPrice: 1199000,
    image:
      "https://images.unsplash.com/photo-1548171915-e79a860c10c8?w=600&h=600&fit=crop",
    description:
      "Expedition Chronograph lokal favorit dengan fitur stopwatch, tanggal, dan strap stainless steel. Tahan air 10 ATM, cocok untuk aktivitas outdoor.",
    gender: "pria",
    category: "sporty",
    movement: "Quartz Chronograph",
    waterResist: "100m",
    badge: "Best Seller",
  },
  {
    id: "8",
    brand: "Garmin",
    name: "Forerunner 265",
    price: 6499000,
    originalPrice: 7299000,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=600&fit=crop",
    description:
      "Garmin Forerunner 265 smartwatch dengan AMOLED display, GPS multi-band, training readiness, dan battery life hingga 13 hari. Partner olahraga ideal.",
    gender: "unisex",
    category: "smartwatch",
    movement: "Smartwatch",
    waterResist: "50m",
    badge: "New",
  },
  {
    id: "10",
    brand: "Fossil",
    name: "Jacqueline ES4093",
    price: 1999000,
    originalPrice: 2499000,
    image:
      "https://images.unsplash.com/photo-1622433721764-769c2d126932?w=600&h=600&fit=crop",
    description:
      "Fossil Jacqueline dengan dial mother-of-pearl, crystal markers, rose gold case 36mm, dan strap leather. Jam fashion wanita elegan.",
    gender: "wanita",
    category: "fashion",
    movement: "Quartz",
    waterResist: "50m",
    badge: "Terlaris",
  },
  {
    id: "12",
    brand: "Daniel Wellington",
    name: "Iconic Link Arctic 40mm",
    price: 2499000,
    originalPrice: 2999000,
    image:
      "https://images.unsplash.com/photo-1524805440108-8943f630ed69?w=600&h=600&fit=crop",
    description:
      "Daniel Wellington Iconic Link dengan bracelet stainless steel, dial putih bersih, dan case 40mm. Minimalis premium untuk gaya kasual formal.",
    gender: "pria",
    category: "fashion",
    movement: "Quartz",
    waterResist: "30m",
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}

export function formatPrice(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function getDiscountPercent(price, originalPrice) {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

export function filterProducts(productsList, category, searchQuery) {
  let filtered = productsList;

  if (category === "pria") {
    filtered = filtered.filter(
      (p) => p.gender === "pria" || p.gender === "unisex"
    );
  } else if (category === "wanita") {
    filtered = filtered.filter(
      (p) => p.gender === "wanita" || p.gender === "unisex"
    );
  } else if (category === "bestseller") {
    filtered = filtered.filter((p) => p.badge === "Best Seller" || p.badge === "Terlaris");
  } else if (category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query)
    );
  }

  return filtered;
}
