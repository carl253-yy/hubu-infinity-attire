
import React from 'react';
import { Product } from '@/types';
import HeroSection from '@/components/HeroSection';
import QuickLinksSection from '@/components/QuickLinksSection';
import ProductSection from '@/components/ProductSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import Footer from '@/components/Footer';

// Updated product data with fixed image paths
const products: Product[] = [
  // MEDICAL JACKETS Category - NEW
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

  // SCRUBS Category with fixed image paths
  {
    id: 1,
    name: "Green Surgical Scrubs",
    price: 1300,
    image: "/lovable-uploads/95a41477-a67f-4933-9c4f-b6e0010c85a6.png",
    category: "scrubs"
  },
  {
    id: 2,
    name: "Healing Hands Men's Scrubs Top 3 Pocket V-Neck Athletic Fit",
    price: 1300,
    image: "/lovable-uploads/e8faa0ab-10de-4306-9155-6f619238cd1e.png",
    category: "scrubs"
  },
  {
    id: 3,
    name: "Blue Pattern Scrubs",
    price: 2500,
    image: "/lovable-uploads/83b0a7ad-bfff-4af2-8d51-da93798f4c46.png",
    category: "scrubs"
  },
  {
    id: 15,
    name: "Royal Blue Medical Scrubs",
    price: 2200,
    image: "https://craftandstitch.co.ke/wp-content/uploads/2023/02/royal-blue-2.jpg",
    category: "scrubs"
  },
  {
    id: 16,
    name: "Professional Medical Scrubs",
    price: 2400,
    image: "https://www.outstanding.co.ke/wp-content/uploads/2023/03/scrubs.png",
    category: "scrubs"
  },

  // CLINICAL COATS Category with fixed image paths
  {
    id: 4,
    name: "Modern Medical Pattern Coat",
    price: 2500,
    image: "/lovable-uploads/916a68bd-eb09-49e5-9ce0-4d01b4e06e56.png",
    category: "coats"
  },
  {
    id: 5,
    name: "Brown Professional Medical Shirt",
    price: 2500,
    image: "/lovable-uploads/9158adca-ff93-41b0-a692-f8b896b85750.png",
    category: "coats"
  },
  {
    id: 6,
    name: "Professional Clinical Coat",
    price: 2500,
    image: "/lovable-uploads/22b97347-ee25-4055-be30-335ee1f69fa1.png",
    category: "coats"
  },
  {
    id: 17,
    name: "Premium White Lab Coat",
    price: 3000,
    image: "https://m.media-amazon.com/images/I/51Kjy0nO0AL._AC_SL1500_.jpg",
    category: "coats"
  },
  {
    id: 18,
    name: "Unisex Professional Lab Coat",
    price: 2800,
    image: "https://uniformtailor.in/image/cache/catalog/data/health-care-uniform/labcoat/Unisex-37-Inch-Lab-Coat-Front-670x760.jpg",
    category: "coats"
  },

  // ACCESSORIES & SPECIALTY Category with fixed image paths
  {
    id: 10,
    name: "Specialty Medical Apparel",
    price: 2600,
    image: "/lovable-uploads/d59902dc-334a-453b-9b6e-a19a6ea6711f.png",
    category: "specialty"
  },
  {
    id: 11,
    name: "Designer Medical Wear",
    price: 3000,
    image: "/lovable-uploads/fd9e76e4-93e2-42ce-93b4-5345c2fa8129.png",
    category: "designer"
  },
  {
    id: 19,
    name: "Healthcare Equipment & Accessories",
    price: 2500,
    image: "https://qlinicahealthcare.co.ke/wp-content/uploads/2024/02/healme-blog-nov.webp",
    category: "specialty"
  },
  {
    id: 20,
    name: "Medical Accessories Kit",
    price: 2700,
    image: "https://images-na.ssl-images-amazon.com/images/I/61UOZcadEHL._UL1200_.jpg",
    category: "kits"
  }
];

const Index = () => {
  return (
    <>
      <HeroSection />
      <QuickLinksSection />
      
      <ProductSection 
        title="MEDICAL JACKETS"
        products={products.filter(p => p.category === 'jackets')}
        backgroundColor="bg-gray-50"
      />
      
      <ProductSection 
        title="SCRUBS"
        products={products.filter(p => p.category === 'scrubs')}
        backgroundColor="bg-white"
        gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      />
      
      <ProductSection 
        title="CLINICAL COATS"
        products={products.filter(p => p.category === 'coats')}
        backgroundColor=""
        textColor="text-white"
        style={{ backgroundColor: '#E91E63' }}
      />
      
      <ProductSection 
        title="ACCESSORIES & SPECIALTY"
        products={products.filter(p => ['specialty', 'designer', 'kits'].includes(p.category))}
        backgroundColor="bg-green-50"
        gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      />
      
      <WhyChooseUsSection />
      <Footer />
    </>
  );
};

export default Index;
