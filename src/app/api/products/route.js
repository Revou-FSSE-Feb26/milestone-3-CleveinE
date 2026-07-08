import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getProducts, addProduct } from "@/data/productStore";

export async function GET() {
  return NextResponse.json(getProducts());
}

export async function POST(request) {
  // Auth check
  const cookieStore = await cookies();
  const session = cookieStore.get("session");
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  const body = await request.json();
  const newProduct = addProduct({
    title: body.title,
    price: Number(body.price),
    description: body.description,
    category: body.category,
    image: body.image || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: { rate: 0, count: 0 }
  });
  return NextResponse.json(newProduct, { status: 201 });
}
