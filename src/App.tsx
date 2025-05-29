
import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Pages and Components
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import CartPage from "./pages/CartPage";
import Products from "./pages/Products";
import SearchPage from "./pages/SearchPage";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import CategoryPage from "./components/CategoryPage";
import ProtectedRoute from "./components/ProtectedRoute";

// Context Providers
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./hooks/use-theme";

// Data
import { Product } from "./types";

const queryClient = new QueryClient();

// Complete product data including all new scrubs
const products: Product[] = [
  // NEW SCRUBS - KSh 1,300 each
  {
    id: 38,
    name: "Professional Grey Medical Scrubs - Medium",
    price: 1300,
    image: "/lovable-uploads/d3ff3963-0b90-4ad0-81a4-5ac01edb1655.png",
    category: "scrubs"
  },
  {
    id: 39,
    name: "Pink & Grey Professional Scrubs - Medium", 
    price: 1300,
    image: "/lovable-uploads/f90ac883-f939-42d6-a87f-86c970cae385.png",
    category: "scrubs"
  },
  {
    id: 40,
    name: "Navy Blue Professional Scrubs - Medium",
    price: 1300,
    image: "/lovable-uploads/11b0ff98-d7ab-44e6-93fc-76af3dd59578.png",
    category: "scrubs"
  },
  {
    id: 41,
    name: "Pink Accent Medical Scrubs - Medium",
    price: 1300,
    image: "/lovable-uploads/02292601-5369-462f-afe7-4b48e78215e7.png",
    category: "scrubs"
  },
  {
    id: 42,
    name: "Classic Navy Medical Scrubs - Small/Medium",
    price: 1300,
    image: "/lovable-uploads/0f627049-02b1-4315-90a5-378b49ce3c0c.png",
    category: "scrubs"
  },
  {
    id: 43,
    name: "Royal Purple Medical Scrubs - Medium/Large",
    price: 1300,
    image: "/lovable-uploads/fdb95c8e-1098-464f-b0b7-c26d592b7733.png",
    category: "scrubs"
  },
  {
    id: 44,
    name: "Teal Medical Scrubs - Medium",
    price: 1300,
    image: "/lovable-uploads/8c8451bf-1176-4cc3-9e97-7ef4d9c0864b.png",
    category: "scrubs"
  },
  {
    id: 45,
    name: "Premium Grey Medical Scrubs - Medium",
    price: 1300,
    image: "/lovable-uploads/af16d011-7505-4b5c-b5f6-39b39feea7b8.png",
    category: "scrubs"
  },

  // MEDICAL JACKETS Category
  {
    id: 29,
    name: "Navy Blue Medical Jacket - Medium",
    price: 800,
    image: "/lovable-uploads/95a41477-a67f-4933-9c4f-b6e0010c85a6.png",
    category: "jackets"
  },
  {
    id: 30,
    name: "Purple Medical Jacket - Medium", 
    price: 800,
    image: "/lovable-uploads/e8faa0ab-10de-4306-9155-6f619238cd1e.png",
    category: "jackets"
  },
  {
    id: 31,
    name: "Teal Medical Jacket - Medium",
    price: 800,
    image: "/lovable-uploads/83b0a7ad-bfff-4af2-8d51-da93798f4c46.png",
    category: "jackets"
  },
  {
    id: 32,
    name: "Blue Medical Jacket - X Large",
    price: 800,
    image: "/lovable-uploads/916a68bd-eb09-49e5-9ce0-4d01b4e06e56.png",
    category: "jackets"
  },
  {
    id: 33,
    name: "Checkered Medical Jacket - Medium",
    price: 800,
    image: "/lovable-uploads/9158adca-ff93-41b0-a692-f8b896b85750.png",
    category: "jackets"
  },
  {
    id: 34,
    name: "Royal Blue Medical Jacket - Medium",
    price: 800,
    image: "/lovable-uploads/22b97347-ee25-4055-be30-335ee1f69fa1.png",
    category: "jackets"
  },
  {
    id: 35,
    name: "Heart Pattern Medical Jacket - C Large",
    price: 800,
    image: "/lovable-uploads/d59902dc-334a-453b-9b6e-a19a6ea6711f.png",
    category: "jackets"
  },
  {
    id: 36,
    name: "Premium Blue Medical Jacket - X Large",
    price: 800,
    image: "/lovable-uploads/fd9e76e4-93e2-42ce-93b4-5345c2fa8129.png",
    category: "jackets"
  },
  {
    id: 37,
    name: "Floral Pattern Medical Jacket - Medium",
    price: 800,
    image: "/lovable-uploads/d38df3a0-4bcb-4f2b-ae21-3ab75ee1e8af.png",
    category: "jackets"
  },

  // ORIGINAL SCRUBS
  {
    id: 1,
    name: "Men's Scrubs Top 3 Pocket V-Neck Athletic Fit",
    price: 1300,
    image: "/lovable-uploads/95a41477-a67f-4933-9c4f-b6e0010c85a6.png",
    category: "scrubs"
  },
  {
    id: 2,
    name: "Nursing Uniform Stretchy Soft Short Sleeve",
    price: 1300,
    image: "/lovable-uploads/e8faa0ab-10de-4306-9155-6f619238cd1e.png",
    category: "coats"
  },
  {
    id: 3,
    name: "Comfort Fit Top",
    price: 1300,
    image: "/lovable-uploads/83b0a7ad-bfff-4af2-8d51-da93798f4c46.png",
    category: "tops"
  },
  {
    id: 4,
    name: "Surgical Scrubs",
    price: 1300,
    image: "/lovable-uploads/916a68bd-eb09-49e5-9ce0-4d01b4e06e56.png",
    category: "scrubs"
  },
  {
    id: 5,
    name: "Medical Uniform",
    price: 1300,
    image: "/lovable-uploads/9158adca-ff93-41b0-a692-f8b896b85750.png",
    category: "uniforms"
  },
  {
    id: 6,
    name: "Designer Medical Outfit",
    price: 2500,
    image: "/lovable-uploads/22b97347-ee25-4055-be30-335ee1f69fa1.png",
    category: "sets"
  },
  {
    id: 7,
    name: "Pattern Scrubs",
    price: 2500,
    image: "/lovable-uploads/d59902dc-334a-453b-9b6e-a19a6ea6711f.png",
    category: "scrubs"
  },
  {
    id: 8,
    name: "Formal White Top",
    price: 2500,
    image: "/lovable-uploads/fd9e76e4-93e2-42ce-93b4-5345c2fa8129.png",
    category: "tops"
  },
  {
    id: 9,
    name: "Modern Scrub Set",
    price: 2500,
    image: "/lovable-uploads/d38df3a0-4bcb-4f2b-ae21-3ab75ee1e8af.png",
    category: "sets"
  },
  {
    id: 10,
    name: "Designer Blouse",
    price: 2500,
    image: "/lovable-uploads/95a41477-a67f-4933-9c4f-b6e0010c85a6.png",
    category: "tops"
  },
  {
    id: 11,
    name: "Casual Medical Shirt",
    price: 2500,
    image: "/lovable-uploads/e8faa0ab-10de-4306-9155-6f619238cd1e.png",
    category: "shirts"
  },
  {
    id: 12,
    name: "Professional Medical Uniform",
    price: 2500,
    image: "/lovable-uploads/83b0a7ad-bfff-4af2-8d51-da93798f4c46.png",
    category: "uniforms"
  },
  {
    id: 13,
    name: "Elegant Scrub Set",
    price: 2500,
    image: "/lovable-uploads/916a68bd-eb09-49e5-9ce0-4d01b4e06e56.png",
    category: "sets"
  },
  {
    id: 14,
    name: "Colorful Medical Blouse",
    price: 2500,
    image: "/lovable-uploads/9158adca-ff93-41b0-a692-f8b896b85750.png",
    category: "tops"
  },
  {
    id: 15,
    name: "Professional Medical Shirt",
    price: 2500,
    image: "/lovable-uploads/22b97347-ee25-4055-be30-335ee1f69fa1.png",
    category: "shirts"
  },
  {
    id: 16,
    name: "Elegant White Set",
    price: 2500,
    image: "/lovable-uploads/d59902dc-334a-453b-9b6e-a19a6ea6711f.png",
    category: "sets"
  },
  {
    id: 17,
    name: "Patterned Medical Uniform",
    price: 2500,
    image: "/lovable-uploads/fd9e76e4-93e2-42ce-93b4-5345c2fa8129.png",
    category: "uniforms"
  },
  {
    id: 18,
    name: "Surgical Medical Set",
    price: 2500,
    image: "/lovable-uploads/d38df3a0-4bcb-4f2b-ae21-3ab75ee1e8af.png",
    category: "sets"
  },
  {
    id: 19,
    name: "Modern Medical Pattern",
    price: 2500,
    image: "/lovable-uploads/95a41477-a67f-4933-9c4f-b6e0010c85a6.png",
    category: "uniforms"
  },
  {
    id: 20,
    name: "Summer Scrub Set",
    price: 2500,
    image: "/lovable-uploads/e8faa0ab-10de-4306-9155-6f619238cd1e.png",
    category: "sets"
  },
  {
    id: 21,
    name: "Premium Surgical Scrubs",
    price: 1300,
    image: "/lovable-uploads/83b0a7ad-bfff-4af2-8d51-da93798f4c46.png",
    category: "scrubs"
  },
  {
    id: 22,
    name: "Advanced Medical Uniform",
    price: 1300,
    image: "/lovable-uploads/916a68bd-eb09-49e5-9ce0-4d01b4e06e56.png",
    category: "uniforms"
  },
  {
    id: 23,
    name: "Professional Medical Set",
    price: 1300,
    image: "/lovable-uploads/9158adca-ff93-41b0-a692-f8b896b85750.png",
    category: "sets"
  },
  {
    id: 24,
    name: "Elite Medical Scrubs",
    price: 1300,
    image: "/lovable-uploads/22b97347-ee25-4055-be30-335ee1f69fa1.png",
    category: "scrubs"
  },
  {
    id: 25,
    name: "Premium Medical Top",
    price: 1300,
    image: "/lovable-uploads/d59902dc-334a-453b-9b6e-a19a6ea6711f.png",
    category: "tops"
  },
  {
    id: 26,
    name: "Professional Nursing Uniform",
    price: 1300,
    image: "/lovable-uploads/fd9e76e4-93e2-42ce-93b4-5345c2fa8129.png",
    category: "uniforms"
  },
  {
    id: 27,
    name: "Premium Medical Coat",
    price: 1300,
    image: "/lovable-uploads/d38df3a0-4bcb-4f2b-ae21-3ab75ee1e8af.png",
    category: "coats"
  },
  {
    id: 28,
    name: "Doctor's Premium Set",
    price: 1300,
    image: "/lovable-uploads/95a41477-a67f-4933-9c4f-b6e0010c85a6.png",
    category: "sets"
  }
];

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ThemeProvider defaultTheme="light">
          <AuthProvider>
            <CartProvider>
              <BrowserRouter>
                <div className="min-h-screen flex flex-col bg-background text-foreground">
                  <Navbar />
                  <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      
                      {/* Protected Routes */}
                      <Route path="/products" element={
                        <ProtectedRoute>
                          <Products products={products} />
                        </ProtectedRoute>
                      } />
                      <Route path="/search" element={
                        <ProtectedRoute>
                          <SearchPage products={products} />
                        </ProtectedRoute>
                      } />
                      <Route path="/product/:id" element={
                        <ProtectedRoute>
                          <ProductDetail products={products} />
                        </ProtectedRoute>
                      } />
                      <Route path="/category/:category" element={
                        <ProtectedRoute>
                          <CategoryPage products={products} />
                        </ProtectedRoute>
                      } />
                      <Route path="/cart" element={
                        <ProtectedRoute>
                          <CartPage />
                        </ProtectedRoute>
                      } />
                      <Route path="/checkout" element={
                        <ProtectedRoute>
                          <Checkout />
                        </ProtectedRoute>
                      } />
                      <Route path="/success" element={
                        <ProtectedRoute>
                          <Success />
                        </ProtectedRoute>
                      } />
                      
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  
                  <footer className="bg-kenyan-brown text-white py-8">
                    <div className="container mx-auto px-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                          <h3 className="font-bold text-xl mb-4">HUBU ROYAL SCRUBS</h3>
                          <p className="text-gray-200">
                            Premium quality medical scrubs and uniforms for healthcare professionals.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="font-bold mb-4">Quick Links</h3>
                          <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-200 hover:text-white">Home</Link></li>
                            <li><Link to="/products" className="text-gray-200 hover:text-white">Shop All</Link></li>
                            <li><Link to="/checkout" className="text-gray-200 hover:text-white">Checkout</Link></li>
                            <li>
                              <a 
                                href="https://wa.link/7f12b9" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-200 hover:text-white flex items-center"
                              >
                                <span className="inline-block w-4 h-4 mr-1">
                                  <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                  </svg>
                                </span>
                                WhatsApp Us
                              </a>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-bold mb-4">Contact</h3>
                          <p className="text-gray-200 mb-2">Nairobi, Kenya</p>
                          <p className="text-gray-200 mb-2">+254 714149455</p>
                          <p className="text-gray-200">info@huburoyalscrubs.com</p>
                        </div>
                      </div>
                      
                      <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-300">
                        © {new Date().getFullYear()} HUBU ROYAL SCRUBS. All rights reserved.
                      </div>
                    </div>
                  </footer>
                </div>
              </BrowserRouter>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
