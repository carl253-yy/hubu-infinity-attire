
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const HeroSection = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <section className="relative bg-kenyan-sand py-16 md:py-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/d3add6da-f9a7-42b0-b64f-522dc0e7397d.png" 
                alt="Royal Scrubs Logo" 
                className="h-16 w-16 mr-4"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kenyan-brown">
                ROYAL SCRUBS
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
  );
};

export default HeroSection;
