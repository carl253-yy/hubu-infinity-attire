
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '@/types';
import ProductCard from './ProductCard';
import { ArrowLeft } from 'lucide-react';

interface CategoryPageProps {
  products: Product[];
}

const CategoryPage = ({ products }: CategoryPageProps) => {
  const { category } = useParams<{ category: string }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (category && products.length > 0) {
      const filtered = products.filter(
        p => p.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  }, [category, products]);

  // Format category name for display (capitalize first letter)
  const formattedCategory = category ? 
    category.charAt(0).toUpperCase() + category.slice(1) : '';

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/products" className="text-kenyan-brown hover:text-kenyan-red inline-flex items-center mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to All Products
      </Link>
      
      <h1 className="text-3xl font-bold mb-6">{formattedCategory}</h1>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
