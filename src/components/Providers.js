import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <CartProvider>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
}
