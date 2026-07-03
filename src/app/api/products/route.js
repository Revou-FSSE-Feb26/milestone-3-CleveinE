import { NextResponse } from "next/server";

let products = [
  {
    id: 1,
    title: "Casio Edifice ECB-10DB-1A",
    price: 2499000,
    description: "Jam tangan pria dengan koneksi Bluetooth dan Tough Solar.",
    category: "men's watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: { rate: 4.8, count: 120 }
  },
  {
    id: 2,
    title: "Fossil Gen 5 Carlyle",
    price: 4299000,
    description: "Smartwatch dengan Wear OS, heart rate monitor dan GPS.",
    category: "smartwatch",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    rating: { rate: 4.5, count: 89 }
  },
  {
    id: 3,
    title: "Daniel Wellington Classic Petite",
    price: 1899000,
    description: "Jam tangan wanita dengan desain minimalis dan tali kulit.",
    category: "women's watches",
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&h=400&fit=crop",
    rating: { rate: 4.7, count: 201 }
  },
  {
    id: 4,
    title: "Seiko 5 Sports SRPD55K1",
    price: 3199000,
    description: "Jam otomatis pria dengan ketahanan air 100 meter.",
    category: "men's watches",
    image: "https://images.unsplash.com/photo-1548169872-9d2207b24e1b?w=400&h=400&fit=crop",
    rating: { rate: 4.9, count: 156 }
  }
];
let nextId = 5;

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request) {
  const body = await request.json();
  const newProduct = {
    id: nextId++,
    title: body.title,
    price: body.price,
    description: body.description,
    category: body.category,
    image: body.image || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: { rate: 0, count: 0 }
  };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}
