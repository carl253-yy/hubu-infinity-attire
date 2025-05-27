import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Facebook } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

// Product data with new featured products first
const products: Product[] = [
  {
    id: 36,
    name: "Premium Scrubs Collection",
    price: 2800,
    image: "/lovable-uploads/81b6294c-4f88-4035-94c3-e37ecabd2ff7.png",
    category: "scrubs"
  },
  {
    id: 37,
    name: "Clinical Coats Professional",
    price: 4500,
    image: "/lovable-uploads/936f4123-3979-4332-bc7d-bb36776a8e94.png",
    category: "coats"
  },
  {
    id: 38,
    name: "ScrubStar & Cherokee Brands",
    price: 3200,
    image: "/lovable-uploads/a3ccb8ab-9110-401d-9e28-3692d5d73b10.png",
    category: "scrubs"
  },
  {
    id: 39,
    name: "Infinity & Landau Collection",
    price: 3500,
    image: "/lovable-uploads/350b5a15-a35d-44c2-8cee-433954146e8c.png",
    category: "uniforms"
  },
  {
    id: 40,
    name: "Thrifted Scrubs & McBurney Accessories",
    price: 2200,
    image: "/lovable-uploads/4f491347-149d-4a6f-b708-6dfe055887e9.png",
    category: "accessories"
  },
  {
    id: 41,
    name: "Medical Accessories Collection",
    price: 1800,
    image: "/lovable-uploads/56ee4598-98a9-444f-9ae2-5dcda4de0c50.png",
    category: "accessories"
  },
  {
    id: 42,
    name: "Complete Medical Wardrobe",
    price: 4200,
    image: "/lovable-uploads/199557f2-99ab-4e21-b779-28a281301139.png",
    category: "sets"
  },
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
  },
  {
    id: 29,
    name: "Surgical Cap",
    price: 800,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEL8QwDRRm7Iw/feedshare-shrink_1280/B4DZZfSBA.G8Ak-/0/1745355286983?e=1748476800&v=beta&t=V3irlIOoo_mfeJT0PSpVc5IVsqVxJeX2P-jnbyuzLDc",
    category: "caps"
  },
  {
    id: 30,
    name: "Theatre Wear Set",
    price: 3000,
    image: "https://media.licdn.com/dms/image/v2/D4D22AQFgTRuo6xIV1w/feedshare-shrink_2048_1536/B4DZZfSBAbH4Ao-/0/1745355287546?e=1748476800&v=beta&t=YmDkVSNQ54RmNK3HMFTgrHKxm0s2KyQaAUea1KtNcSE",
    category: "theatre"
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-kenyan-brown">
                HUBU INFINITY SCRUBS
              </h1>
              <p className="text-lg mb-8 text-gray-700">
                Experience comfort and durability with our medical clothing. Crafted with quality materials, our attire ensures functionality and style, providing you with confidence and professionalism through your demanding shifts.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {products.filter(p => p.category === 'scrubs').slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Medical Equipment Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Surgical Caps */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-white">SURGICAL CAPS</h3>
              <div className="bg-white rounded-lg p-4">
                <img 
                  src="/lovable-uploads/81b6294c-4f88-4035-94c3-e37ecabd2ff7.png" 
                  alt="Surgical Caps" 
                  className="w-full h-48 object-cover rounded"
                />
              </div>
            </div>

            {/* Theatre Wears */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-white">THEATRE WEARS</h3>
              <div className="bg-white rounded-lg p-4">
                <img 
                  src="/lovable-uploads/81b6294c-4f88-4035-94c3-e37ecabd2ff7.png" 
                  alt="Theatre Wears" 
                  className="w-full h-48 object-cover rounded"
                />
              </div>
            </div>

            {/* Infinity Jackets */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-white">INFINITY JACKETS</h3>
              <div className="bg-white rounded-lg p-4">
                <img 
                  src="/lovable-uploads/81b6294c-4f88-4035-94c3-e37ecabd2ff7.png" 
                  alt="Infinity Jackets" 
                  className="w-full h-48 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Coats Section */}
      <section className="py-16" style={{ backgroundColor: '#E91E63' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">CLINICAL COATS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {products.filter(p => p.category === 'coats').slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">RETAIL AND WHOLESALE PURCHASE</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/936f4123-3979-4332-bc7d-bb36776a8e94.png" 
                    alt="Retail" 
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/936f4123-3979-4332-bc7d-bb36776a8e94.png" 
                    alt="Wholesale" 
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/936f4123-3979-4332-bc7d-bb36776a8e94.png" 
                    alt="Bulk Orders" 
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrub Brands Section */}
      <section className="py-16" style={{ backgroundColor: '#00BCD4' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">SCRUB BRANDS</h2>
          </div>

          {/* ScrubStar Brand */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white">[1] SCRUBSTAR</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {products.filter(p => p.category === 'scrubs').slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Cherokee Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">[2] CHEROKEE</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {products.filter(p => p.category === 'uniforms').slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infinity & Landau Brands */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          {/* Infinity Brand */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white">[3] INFINITY</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {products.filter(p => p.category === 'tops').slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Landau Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">[4] LANDAU</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {products.filter(p => p.category === 'dresses').slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Thrifted Scrubs Section */}
      <section className="py-16 bg-kenyan-sand">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-kenyan-brown">[5] THRIFTED SCRUBS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {products.filter(p => p.category === 'sets').slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-16 bg-kenyan-sand">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-kenyan-brown">HUBU ACCESSORIES</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* BP Machines */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-kenyan-brown">[1] BP MACHINES</h3>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <img 
                  src="/lovable-uploads/4f491347-149d-4a6f-b708-6dfe055887e9.png" 
                  alt="BP Machine" 
                  className="w-full h-48 object-cover rounded mx-auto"
                />
              </div>
            </div>

            {/* MUAC Tapes */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-kenyan-brown">[2] MUAC TAPES</h3>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <img 
                  src="/lovable-uploads/4f491347-149d-4a6f-b708-6dfe055887e9.png" 
                  alt="MUAC Tapes" 
                  className="w-full h-48 object-cover rounded mx-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Stethoscopes */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-kenyan-brown">[3] STETHOSCOPES</h3>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <img 
                  src="/lovable-uploads/56ee4598-98a9-444f-9ae2-5dcda4de0c50.png" 
                  alt="Stethoscope" 
                  className="w-full h-48 object-cover rounded mx-auto"
                />
              </div>
            </div>

            {/* Crocs */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-kenyan-brown">[4] CROCS</h3>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <img 
                  src="/lovable-uploads/56ee4598-98a9-444f-9ae2-5dcda4de0c50.png" 
                  alt="Medical Crocs" 
                  className="w-full h-48 object-cover rounded mx-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tape Measures */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-kenyan-brown">[5] TAPE MEASURES</h3>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <img 
                  src="/lovable-uploads/56ee4598-98a9-444f-9ae2-5dcda4de0c50.png" 
                  alt="Tape Measure" 
                  className="w-full h-48 object-cover rounded mx-auto"
                />
              </div>
            </div>

            {/* Patella Hammers */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-kenyan-brown">[6] PATELLA HAMMERS</h3>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <img 
                  src="/lovable-uploads/56ee4598-98a9-444f-9ae2-5dcda4de0c50.png" 
                  alt="Patella Hammer" 
                  className="w-full h-48 object-cover rounded mx-auto"
                />
              </div>
            </div>

            {/* Pen Torches & Scrub Undershirts */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-4 text-kenyan-brown">[7] PEN TORCHES</h3>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <img 
                    src="/lovable-uploads/56ee4598-98a9-444f-9ae2-5dcda4de0c50.png" 
                    alt="Pen Torch" 
                    className="w-full h-32 object-cover rounded mx-auto"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-bold mb-4 text-kenyan-brown">[8] SCRUB UNDERSHIRTS</h3>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <img 
                    src="/lovable-uploads/56ee4598-98a9-444f-9ae2-5dcda4de0c50.png" 
                    alt="Scrub Undershirt" 
                    className="w-full h-32 object-cover rounded mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
