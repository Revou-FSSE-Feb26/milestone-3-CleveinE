import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getProductById, updateProduct, deleteProduct } from "@/data/productStore";

export async function GET(request, { params }) {
  const { id: idStr } = await params;
  const id = parseInt(idStr);
  const product = getProductById(id);
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}

export async function PUT(request, { params }) {
  // Auth check
  const cookieStore = await cookies();
  const session = cookieStore.get("session");
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  const { id: idStr } = await params;
  const id = parseInt(idStr);
  const body = await request.json();
  const updated = updateProduct(id, body);
  if (!updated) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(updated);
}

export async function DELETE(request, { params }) {
  // Auth check
  const cookieStore = await cookies();
  const session = cookieStore.get("session");
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  const { id: idStr } = await params;
  const id = parseInt(idStr);
  const success = deleteProduct(id);
  if (!success) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json({ success: true });
}
