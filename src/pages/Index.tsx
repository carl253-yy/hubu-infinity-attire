
import React from 'react';
import { Product } from '@/types';
import HeroSection from '@/components/HeroSection';
import QuickLinksSection from '@/components/QuickLinksSection';
import ProductSection from '@/components/ProductSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import Footer from '@/components/Footer';

// Updated product data with new scrubs at KSh 1,300
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

  // ORIGINAL SCRUBS Category
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

  // CLINICAL COATS Category
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

  // ACCESSORIES & SPECIALTY Category
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
