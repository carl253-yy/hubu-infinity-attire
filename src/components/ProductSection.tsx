
import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';

interface ProductSectionProps {
  title: string;
  products: Product[];
  backgroundColor?: string;
  textColor?: string;
  gridCols?: string;
  style?: React.CSSProperties;
}

const ProductSection = ({ 
  title, 
  products, 
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
  gridCols = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
  style
}: ProductSectionProps) => {
  return (
    <section className={`py-16 ${backgroundColor}`} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>{title}</h2>
        </div>
        <div className={`grid ${gridCols} lg:grid-cols-4 gap-6 max-w-6xl mx-auto`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
