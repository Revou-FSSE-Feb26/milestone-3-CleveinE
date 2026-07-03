"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

function formatPrice(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(price);
}

export default function AdminPage() {
  const { user, isLoaded } = useAuth();
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: ""
  });

  useEffect(() => {
    if (isLoaded && !user) {
      router.push("/login");
    } else if (isLoaded) {
      fetchProducts();
    }
  }, [isLoaded, user, router]);

  async function fetchProducts() {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (editingProduct) {
        await fetch(`/api/products/${editingProduct.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: formData.title,
            price: Number(formData.price),
            description: formData.description,
            category: formData.category,
            image: formData.image
          })
        });
      } else {
        await fetch("/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: formData.title,
            price: Number(formData.price),
            description: formData.description,
            category: formData.category,
            image: formData.image
          })
        });
      }
      resetForm();
      fetchProducts();
    } catch (error) {
      console.error("Failed to save product", error);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Yakin ingin menghapus produk ini?")) return;
    try {
      await fetch(`/api/products/${id}`, { method: "DELETE" });
      fetchProducts();
    } catch (error) {
      console.error("Failed to delete product", error);
    }
  }

  function handleEdit(product) {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      price: product.price.toString(),
      description: product.description,
      category: product.category,
      image: product.image
    });
    setShowForm(true);
  }

  function resetForm() {
    setEditingProduct(null);
    setFormData({ title: "", price: "", description: "", category: "", image: "" });
    setShowForm(false);
  }

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center text-zinc-400 sm:px-6 lg:px-8">
        Memuat...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-blue-600"
        >
          {showForm ? "Batal" : "Tambah Produk"}
        </button>
      </div>

      {showForm && (
        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold text-white mb-6">
            {editingProduct ? "Edit Produk" : "Tambah Produk Baru"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-zinc-300">Nama Produk</label>
                <input
                  required
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300">Harga</label>
                <input
                  required
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300">Kategori</label>
              <input
                required
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300">URL Gambar</label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300">Deskripsi</label>
              <textarea
                required
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="rounded-lg bg-blue-500 px-6 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-blue-600"
              >
                {editingProduct ? "Simpan Perubahan" : "Tambah Produk"}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg border border-zinc-700 px-6 py-2 text-sm font-medium text-zinc-300 hover:border-zinc-500"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="mt-10 space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:flex-row sm:items-center"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-zinc-800">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">{product.title}</h3>
              <p className="text-sm text-blue-500">{formatPrice(product.price)}</p>
              <p className="text-xs text-zinc-400 mt-1 line-clamp-2">{product.description}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(product)}
                className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 hover:border-blue-500 hover:text-blue-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-500/20"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
