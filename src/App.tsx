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
import SearchPage from "./pages/SearchPage"; // New search page
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

// Product data
const products: Product[] = [
  // Original prices converted from $ to KSh
  {
    id: 1,
    name: "Men's Scrubs Top 3 Pocket V-Neck Athletic Fit",
    price: 1300,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQHU4RFkFV7veQ/feedshare-shrink_800/B4DZZfSBBRGgAk-/0/1745355287285?e=1748476800&v=beta&t=DeWrJcJ_G8Dul5JnAyFJTF0V-7mEtFsi93D7DRTfoxI",
    category: "scrubs"
  },
  {
    id: 2,
    name: "Nursing Uniform Stretchy Soft Short Sleeve",
    price: 1300,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFgTRuo6xIV1w/feedshare-shrink_2048_1536/B4DZZfSBAbH4Ao-/0/1745355287546?e=1748476800&v=beta&t=YmDkVSNQ54RmNK3HMFTgrHKxm0s2KyQaAUea1KtNcSE",
    category: "coats"
  },
  {
    id: 3,
    name: "Comfort Fit Top",
    price: 1300,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQF-DHslLDpIqQ/feedshare-shrink_800/B4DZZfSBA0G8Ag-/0/1745355288159?e=1748476800&v=beta&t=8Axtzi_N6Ff-s8pJ-tJtIvMWwDIldztXgTbLpVVlgJQ",
    category: "tops"
  },
  {
    id: 4,
    name: "Surgical Scrubs",
    price: 1300,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEL8QwDRRm7Iw/feedshare-shrink_1280/B4DZZfSBA.G8Ak-/0/1745355286983?e=1748476800&v=beta&t=V3irlIOoo_mfeJT0PSpVc5IVsqVxJeX2P-jnbyuzLDc",
    category: "scrubs"
  },
  {
    id: 5,
    name: "Medical Uniform",
    price: 1300,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEq0bSEjta50A/feedshare-shrink_1280/B4DZZfSA_pHwAo-/0/1745355287182?e=1748476800&v=beta&t=cZYPKa9tSZjeSoONQkGubnYnm6pMPHQLW_g5SkaNZTY",
    category: "uniforms"
  },
  {
    id: 6,
    name: "Designer Medical Outfit",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEOXRZSzU2Leg/feedshare-shrink_800/B4DZZfUlaPG4Ak-/0/1745355954681?e=1748476800&v=beta&t=I5H0lPhfc0GAXsxoe_3uOGEvDdkumjB3ti1-cCweFa4",
    category: "sets"
  },
  {
    id: 7,
    name: "Pattern Scrubs",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFbXtg59oaimA/feedshare-shrink_800/B4DZZfUfP2HIBo-/0/1745355929947?e=1748476800&v=beta&t=hdfG3zBQQ6Va7xnrLTEzcmNk1BT-whTnMdMc7KQo7O4",
    category: "scrubs"
  },
  {
    id: 8,
    name: "Formal White Top",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFe6G3VcOTPJg/feedshare-shrink_2048_1536/B4DZZfUfOkH4Ao-/0/1745355929399?e=1748476800&v=beta&t=b8SjGSmzv3k0C-xhvUw3WomwFkF5q6GIwZ79ud6o1Vw",
    category: "tops"
  },
  {
    id: 9,
    name: "Modern Scrub Set",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEw7Rha0yIC4Q/feedshare-shrink_1280/B4DZZfUfOrHIAk-/0/1745355929865?e=1748476800&v=beta&t=fj8PW-KtnHqQn0qaOR0FlKxHIak_FP0iHB1mz6Yl9Ak",
    category: "sets"
  },
  {
    id: 10,
    name: "Designer Blouse",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQE8GYaLOXLZ6Q/feedshare-shrink_800/B4DZZfUfP1GwAg-/0/1745355929597?e=1748476800&v=beta&t=hQKTU6-hQhAmLNs4Epf-RU0elRqv45Pp3RKW7npuclo",
    category: "tops"
  },
  {
    id: 11,
    name: "Casual Medical Shirt",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQF5qKU0SQw_tw/feedshare-shrink_1280/B4DZZfUfO8G4Ak-/0/1745355929876?e=1748476800&v=beta&t=w80HizN1X0lILrD9vBG3qjh2IpLc-BCK_aEqcHRHtAU",
    category: "shirts"
  },
  {
    id: 12,
    name: "Professional Medical Uniform",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQG41S3kF1jElg/feedshare-shrink_800/B4DZZfUfOtG0Ag-/0/1745355929220?e=1748476800&v=beta&t=c7neXzGSDZfSeTIiTk3wDiN3MK_KXORVzNJ3hevqx1E",
    category: "uniforms"
  },
  {
    id: 13,
    name: "Elegant Scrub Set",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQG8RVcJxklpxg/feedshare-shrink_2048_1536/B4DZZfUU5.HwAo-/0/1745355887092?e=1748476800&v=beta&t=IiojYG2LLsqK-OtEj74Xhh9rT8xe5hyQngvSiA4R1R0",
    category: "sets"
  },
  {
    id: 14,
    name: "Colorful Medical Blouse",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEyl_PGVRtrdA/feedshare-shrink_2048_1536/B4DZZfUU6IG4As-/0/1745355888520?e=1748476800&v=beta&t=bxubFmLdGZ1lOIFhdS-nmKznUapk8xFaMRub8WigRiI",
    category: "tops"
  },
  {
    id: 15,
    name: "Professional Medical Shirt",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQH2o5CqKRVe6g/feedshare-shrink_800/B4DZZfUU6XHwAg-/0/1745355888263?e=1748476800&v=beta&t=uthXc_kjrnQb4ZYW3vIR-4i_UG7l-rGLlbom4noNZcA",
    category: "shirts"
  },
  {
    id: 16,
    name: "Elegant White Set",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQGTmh43p6czoQ/feedshare-shrink_1280/B4DZZfUU6VGgAk-/0/1745355887797?e=1748476800&v=beta&t=H4p-jEPEfFhamalmhIo3lXl3XGnxqhh07aie07g8psM",
    category: "sets"
  },
  {
    id: 17,
    name: "Patterned Medical Uniform",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEzusTjoXYluA/feedshare-shrink_1280/B4DZZfUU6gGwAk-/0/1745355888673?e=1748476800&v=beta&t=8STFZVwhtE0VPpHbzBXA5a3Tb8A3ogZjf_GR6TnougY",
    category: "uniforms"
  },
  {
    id: 18,
    name: "Surgical Medical Set",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFcDp7CgVopfg/feedshare-shrink_2048_1536/B4DZZfUU6THIAs-/0/1745355887713?e=1748476800&v=beta&t=Kch-QmDT9VjST1y2ibCilSRsfmccFcwSuuzimC7s6wY",
    category: "sets"
  },
  {
    id: 19,
    name: "Modern Medical Pattern",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQHa6zJE7Dc0mQ/feedshare-shrink_1280/B4DZZfUU61H4Ak-/0/1745355888284?e=1748476800&v=beta&t=ln_j5ceInMQn6okp-WbrSva9EC1pFf-BZhKZibWz-gQ",
    category: "uniforms"
  },
  {
    id: 20,
    name: "Summer Scrub Set",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFPpgCSpQx51w/feedshare-shrink_800/B4DZZfUlaGG4Ak-/0/1745355954787?e=1748476800&v=beta&t=DHxNUcSA13aAMVY0K15onH2ACcO5YU-mGzpmNRYuxBw",
    category: "sets"
  },
  // Additional products
  {
    id: 21,
    name: "Premium Surgical Scrubs",
    price: 1300,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQHfawsONjQCJg/feedshare-shrink_2048_1536/B4DZahpFocH0Ao-/0/1746468650816?e=1749081600&v=beta&t=0IzNqf2FdQ3zRG3RN_wFJ5hpnsLKe6IbScYQf8qpDLs",
    category: "scrubs"
  },
  {
    id: 22,
    name: "Advanced Medical Uniform",
    price: 1300,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQES0n3mMOGrsA/feedshare-shrink_2048_1536/B4DZahpFrhGwAo-/0/1746468643873?e=1749081600&v=beta&t=3xFNRMbPI_GynNYTK-53tQxrK5x_Z7HTkaEErkYgLZE",
    category: "uniforms"
  },
  {
    id: 23,
    name: "Professional Medical Set",
    price: 1300,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEqzLz6_32CIw/feedshare-shrink_2048_1536/B4DZahpFrNHwAw-/0/1746468651371?e=1749081600&v=beta&t=1vpb6khl9JtAUPuf0f_QUUPd-IBEl58zimC7q2rT6z8",
    category: "sets"
  },
  {
    id: 24,
    name: "Elite Medical Scrubs",
    price: 1300,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFe6ISJp2EUPQ/feedshare-shrink_2048_1536/B4DZahpFtZGcAo-/0/1746468652287?e=1749081600&v=beta&t=kIPXWmQpVApziYjJBSK3yyRgwW4loP6-FXOoXW_ZBY4",
    category: "scrubs"
  },
  {
    id: 25,
    name: "Premium Medical Top",
    price: 1300,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFA6eazA2iOeg/feedshare-shrink_1280/B4DZahpFvCHEAk-/0/1746468645952?e=1749081600&v=beta&t=UKiGA1dfW9poFgzm3DrwHROlZLySqg0NBIPHRPLHCVQ",
    category: "tops"
  },
  {
    id: 26,
    name: "Professional Nursing Uniform",
    price: 1300,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQF7QWMrLExaew/feedshare-shrink_800/B4DZahpFwkGcAk-/0/1746468636819?e=1749081600&v=beta&t=ffgUDLpmmFSwdVJK3oWoR6jBrWRmuv2h5ELF32AVEOs",
    category: "uniforms"
  },
  {
    id: 27,
    name: "Premium Medical Coat",
    price: 1300,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQHjCG0lNWq17Q/feedshare-shrink_1280/B4DZahpFiTG0Ak-/0/1746468636217?e=1749081600&v=beta&t=k2Vfe_kLqGDIhDKaShTedzJmiUcDVxHyXWWzrMN0We4",
    category: "coats"
  },
  {
    id: 28,
    name: "Doctor's Premium Set",
    price: 1300,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEFnYUkq_jAgg/feedshare-shrink_1280/B4DZahpFiMHQAo-/0/1746468635307?e=1749081600&v=beta&t=L9jGDuMF7osjEx7nn6OlV7_hmWp1oQUa19bKGKL2K00",
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
                      
                      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  
                  <footer className="bg-kenyan-brown text-white py-8">
                    <div className="container mx-auto px-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                          <h3 className="font-bold text-xl mb-4">HUBU INFINITY SCRUBS</h3>
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
                          <p className="text-gray-200">info@hubuinfinityscrubs.com</p>
                        </div>
                      </div>
                      
                      <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-300">
                        © {new Date().getFullYear()} HUBU INFINITY SCRUBS. All rights reserved.
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
