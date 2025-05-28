
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Facebook } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

// Updated product data with reorganized images
const products: Product[] = [
  // SCRUBS Category
  {
    id: 1,
    name: "Green Surgical Scrubs",
    price: 1300,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEL8QwDRRm7Iw/feedshare-shrink_1280/B4DZZfSBA.G8Ak-/0/1745355286983?e=1748476800&v=beta&t=V3irlIOoo_mfeJT0PSpVc5IVsqVxJeX2P-jnbyuzLDc",
    category: "scrubs"
  },
  {
    id: 2,
    name: "Healing Hands Men's Scrubs Top 3 Pocket V-Neck Athletic Fit",
    price: 1300,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQHU4RFkFV7veQ/feedshare-shrink_800/B4DZZfSBBRGgAk-/0/1745355287285?e=1748476800&v=beta&t=DeWrJcJ_G8Dul5JnAyFJTF0V-7mEtFsi93D7DRTfoxI",
    category: "scrubs"
  },
  {
    id: 3,
    name: "Blue Pattern Scrubs",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFbXtg59oaimA/feedshare-shrink_800/B4DZZfUfP2HIBo-/0/1745355929947?e=1748476800&v=beta&t=hdfG3zBQQ6Va7xnrLTEzcmNk1BT-whTnMdMc7KQo7O4",
    category: "scrubs"
  },
  {
    id: 8,
    name: "Professional Scrubs Collection",
    price: 2200,
    image: "/lovable-uploads/199557f2-99ab-4e21-b779-28a281301139.png",
    category: "scrubs"
  },
  {
    id: 13,
    name: "Premium Nursing Collection",
    price: 2700,
    image: "/lovable-uploads/936f4123-3979-4332-bc7d-bb36776a8e94.png",
    category: "scrubs"
  },

  // CLINICAL COATS Category
  {
    id: 4,
    name: "Modern Medical Pattern Coat",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQHa6zJE7Dc0mQ/feedshare-shrink_1280/B4DZZfUU61H4Ak-/0/1745355888284?e=1748476800&v=beta&t=ln_j5ceInMQn6okp-WbrSva9EC1pFf-BZhKZibWz-gQ",
    category: "coats"
  },
  {
    id: 5,
    name: "Brown Professional Medical Shirt",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQH2o5CqKRVe6g/feedshare-shrink_800/B4DZZfUU6XHwAg-/0/1745355888263?e=1748476800&v=beta&t=uthXc_kjrnQb4ZYW3vIR-4i_UG7l-rGLlbom4noNZcA",
    category: "coats"
  },
  {
    id: 6,
    name: "Professional Clinical Coat",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQGq0Q1fQK-tBQ/feedshare-shrink_800/B4DZZfUU6YGgAg-/0/1745355888195?e=1749686400&v=beta&t=TC1KgQDj9sdduXBE9Vz4tO1uqiq25ghFYhWSRdsoj8A",
    category: "coats"
  },
  {
    id: 14,
    name: "Advanced Medical Uniform",
    price: 3200,
    image: "/lovable-uploads/a3ccb8ab-9110-401d-9e28-3692d5d73b10.png",
    category: "coats"
  },

  // MEDICAL UNIFORMS Category
  {
    id: 7,
    name: "Premium Medical Uniform Set",
    price: 2800,
    image: "/lovable-uploads/0ef9fac7-2a53-4f6e-9db1-163a7ef21f4a.png",
    category: "uniforms"
  },

  // ACCESSORIES & SPECIALTY Category (removed first, second last, and last images)
  {
    id: 10,
    name: "Specialty Medical Apparel",
    price: 2600,
    image: "/lovable-uploads/4f491347-149d-4a6f-b708-6dfe055887e9.png",
    category: "specialty"
  },
  {
    id: 11,
    name: "Designer Medical Wear",
    price: 3000,
    image: "/lovable-uploads/56ee4598-98a9-444f-9ae2-5dcda4de0c50.png",
    category: "designer"
  },
  {
    id: 12,
    name: "Essential Medical Kit",
    price: 2400,
    image: "/lovable-uploads/81b6294c-4f88-4035-94c3-e37ecabd2ff7.png",
    category: "kits"
  }
];

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { addToCart } = useCart();
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-kenyan-sand py-16 md:py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src="/lovable-uploads/d3add6da-f9a7-42b0-b64f-522dc0e7397d.png" 
                  alt="Infinity Scrubs Logo" 
                  className="h-16 w-16 mr-4"
                />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kenyan-brown">
                  INFINITY SCRUBS
                </h1>
              </div>
              <p className="text-lg mb-8 text-gray-700">
                Experience comfort and durability with our medical clothing. Crafted with quality materials, our attire ensures functionality and style, providing you with confidence and professionalism through your demanding shifts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/login">
                  <Button size="lg" className="bg-kenyan-red hover:bg-kenyan-red/90">
                    Login to Shop
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setCartOpen(true)}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  View Cart
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/0ef9fac7-2a53-4f6e-9db1-163a7ef21f4a.png" 
                  alt="Featured Medical Scrubs" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Quick Links</h2>
            <div className="flex justify-center">
              <a 
                href="https://www.facebook.com/profile.php?id=100070408316570&mibextid=rS40aB7S9Ucbxw6v"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
                Follow us on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scrubs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">SCRUBS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.filter(p => p.category === 'scrubs').map((product) => (
              <div key={product.id} className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1 h-10">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-end mt-2">
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="text-kenyan-brown hover:text-kenyan-red hover:bg-transparent"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Coats Section */}
      <section className="py-16" style={{ backgroundColor: '#E91E63' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">CLINICAL COATS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {products.filter(p => p.category === 'coats').map((product) => (
              <div key={product.id} className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1 h-10">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-end mt-2">
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="text-kenyan-brown hover:text-kenyan-red hover:bg-transparent"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Uniforms Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">MEDICAL UNIFORMS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {products.filter(p => p.category === 'uniforms').map((product) => (
              <div key={product.id} className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1 h-10">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-end mt-2">
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="text-kenyan-brown hover:text-kenyan-red hover:bg-transparent"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories & Specialty Items Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">ACCESSORIES & SPECIALTY</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.filter(p => ['specialty', 'designer', 'kits'].includes(p.category)).map((product) => (
              <div key={product.id} className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1 h-10">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-end mt-2">
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="text-kenyan-brown hover:text-kenyan-red hover:bg-transparent"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Infinity Scrubs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide high-quality medical apparel designed specifically for healthcare professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-kenyan-sand rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-kenyan-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Our medical scrubs are made from high-quality materials designed to last through countless shifts.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-kenyan-sand rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-kenyan-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comfort First</h3>
              <p className="text-gray-600">
                Designed for all-day comfort with breathable fabrics and ergonomic designs for healthcare professionals.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-kenyan-sand rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-kenyan-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Stylish Designs</h3>
              <p className="text-gray-600">
                Professional apparel that doesn't compromise on style, with modern cuts and attractive colors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-kenyan-brown text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">INFINITY SCRUBS</h3>
              <p className="text-kenyan-sand">Quality Medical Apparel for Healthcare Professionals</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-kenyan-sand">Follow us:</span>
              <a
                href="https://www.facebook.com/profile.php?id=100070408316570&mibextid=rS40aB7S9Ucbxw6v"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            
            <div className="text-center text-sm text-kenyan-sand">
              <p>&copy; 2024 Infinity Scrubs. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
