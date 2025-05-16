
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

// Product data based on the images provided
const products: Product[] = [
  {
    id: 1,
    name: "Healing Hands Men's Scrubs Top 3 Pocket V-Neck Athletic Fit",
    price: 1300,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQHU4RFkFV7veQ/feedshare-shrink_800/B4DZZfSBBRGgAk-/0/1745355287285?e=1748476800&v=beta&t=DeWrJcJ_G8Dul5JnAyFJTF0V-7mEtFsi93D7DRTfoxI",
    category: "scrubs"
  },
  {
    id: 2,
    name: "Medical Uniforms Nursing Uniforms New Design Stretchy Soft Short Sleeve",
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
    name: "Green Surgical Scrubs",
    price: 1300,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEL8QwDRRm7Iw/feedshare-shrink_1280/B4DZZfSBA.G8Ak-/0/1745355286983?e=1748476800&v=beta&t=V3irlIOoo_mfeJT0PSpVc5IVsqVxJeX2P-jnbyuzLDc",
    category: "scrubs"
  },
  {
    id: 5,
    name: "Brown Medical Uniform",
    price: 1300,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEq0bSEjta50A/feedshare-shrink_1280/B4DZZfSA_pHwAo-/0/1745355287182?e=1748476800&v=beta&t=cZYPKa9tSZjeSoONQkGubnYnm6pMPHQLW_g5SkaNZTY",
    category: "uniforms"
  },
  {
    id: 6,
    name: "Designer Medical Dress",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEOXRZSzU2Leg/feedshare-shrink_800/B4DZZfUlaPG4Ak-/0/1745355954681?e=1748476800&v=beta&t=I5H0lPhfc0GAXsxoe_3uOGEvDdkumjB3ti1-cCweFa4",
    category: "dresses"
  },
  {
    id: 7,
    name: "Blue Pattern Scrubs",
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
    name: "Modern Scrub Dress",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEw7Rha0yIC4Q/feedshare-shrink_1280/B4DZZfUfOrHIAk-/0/1745355929865?e=1748476800&v=beta&t=fj8PW-KtnHqQn0qaOR0FlKxHIak_FP0iHB1mz6Yl9Ak",
    category: "dresses"
  },
  {
    id: 10,
    name: "Red Designer Blouse",
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
    name: "Purple Medical Uniform",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQG41S3kF1jElg/feedshare-shrink_800/B4DZZfUfOtG0Ag-/0/1745355929220?e=1748476800&v=beta&t=c7neXzGSDZfSeTIiTk3wDiN3MK_KXORVzNJ3hevqx1E",
    category: "uniforms"
  },
  {
    id: 13,
    name: "Elegant Scrub Dress",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQG8RVcJxklpxg/feedshare-shrink_2048_1536/B4DZZfUU5.HwAo-/0/1745355887092?e=1748476800&v=beta&t=IiojYG2LLsqK-OtEj74Xhh9rT8xe5hyQngvSiA4R1R0",
    category: "dresses"
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
    name: "Brown Medical Shirt",
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
    name: "Blue Surgical Dress",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFcDp7CgVopfg/feedshare-shrink_2048_1536/B4DZZfUU6THIAs-/0/1745355887713?e=1748476800&v=beta&t=Kch-QmDT9VjST1y2ibCilSRsfmccFcwSuuzimC7s6wY",
    category: "dresses"
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
    name: "Summer Scrub Dress",
    price: 2500,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFPpgCSpQx51w/feedshare-shrink_800/B4DZZfUlaGG4Ak-/0/1745355954787?e=1748476800&v=beta&t=DHxNUcSA13aAMVY0K15onH2ACcO5YU-mGzpmNRYuxBw",
    category: "dresses"
  },
  // New clothing items
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

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { addToCart } = useCart();
  
  return (
    <>
      <section className="relative bg-kenyan-sand py-16 md:py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-kenyan-brown">
                HUBU INFINITY SCRUBS
              </h1>
              <p className="text-lg mb-8 text-gray-700">
                Premium quality medical scrubs and uniforms for healthcare professionals. Designed for comfort, durability, and style for doctors, nurses, and medical staff.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-kenyan-red hover:bg-kenyan-red/90">
                    Shop Collection
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
                  src="https://media.licdn.com/dms/image/v2/D4D22AQHU4RFkFV7veQ/feedshare-shrink_800/B4DZZfSBBRGgAk-/0/1745355287285?e=1748476800&v=beta&t=DeWrJcJ_G8Dul5JnAyFJTF0V-7mEtFsi93D7DRTfoxI" 
                  alt="Featured Medical Scrubs" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pattern-bg absolute inset-0 opacity-50"></div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of premium medical scrubs and uniforms designed specifically for healthcare professionals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/category/scrubs" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D22AQEL8QwDRRm7Iw/feedshare-shrink_1280/B4DZZfSBA.G8Ak-/0/1745355286983?e=1748476800&v=beta&t=V3irlIOoo_mfeJT0PSpVc5IVsqVxJeX2P-jnbyuzLDc" 
                  alt="Scrubs" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white font-semibold text-lg">Scrubs</h3>
                </div>
              </div>
            </Link>

            <Link to="/category/coats" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D22AQF5qKU0SQw_tw/feedshare-shrink_1280/B4DZZfUfO8G4Ak-/0/1745355929876?e=1748476800&v=beta&t=w80HizN1X0lILrD9vBG3qjh2IpLc-BCK_aEqcHRHtAU" 
                  alt="Coats" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white font-semibold text-lg">Lab Coats</h3>
                </div>
              </div>
            </Link>

            <Link to="/category/tops" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D22AQE8GYaLOXLZ6Q/feedshare-shrink_800/B4DZZfUfP1GwAg-/0/1745355929597?e=1748476800&v=beta&t=hQKTU6-hQhAmLNs4Epf-RU0elRqv45Pp3RKW7npuclo" 
                  alt="Tops" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white font-semibold text-lg">Medical Tops</h3>
                </div>
              </div>
            </Link>

            <Link to="/category/uniforms" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D22AQG41S3kF1jElg/feedshare-shrink_800/B4DZZfUfOtG0Ag-/0/1745355929220?e=1748476800&v=beta&t=c7neXzGSDZfSeTIiTk3wDiN3MK_KXORVzNJ3hevqx1E" 
                  alt="Uniforms" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white font-semibold text-lg">Uniforms</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">New Arrivals</h2>
            <Link to="/products" className="text-kenyan-brown hover:text-kenyan-brown/80 flex items-center">
              View All
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Hubu Infinity Scrubs</h2>
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
    </>
  );
};

export default Index;
