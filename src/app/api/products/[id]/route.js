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

export async function GET(request, { params }) {
  const id = parseInt(params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}

export async function PUT(request, { params }) {
  const id = parseInt(params.id);
  const body = await request.json();
  const index = products.findIndex(p => p.id === id);
  if (index === -1) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  products[index] = { ...products[index], ...body };
  return NextResponse.json(products[index]);
}

export async function DELETE(request, { params }) {
  const id = parseInt(params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  products.splice(index, 1);
  return NextResponse.json({ success: true });
}
