
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import ProductCard from './ProductCard';

interface ProductDetailProps {
  products: Product[];
}

const ProductDetail = ({ products }: ProductDetailProps) => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id && products.length > 0) {
      const foundProduct = products.find(p => p.id === Number(id));
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Find related products in the same category
        const related = products
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
  }, [id, products]);

  const handleAddToCart = () => {
    if (product) {
      // Add to cart multiple times based on quantity
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <p className="text-lg">Product not found</p>
          <Link to="/products" className="text-kenyan-brown hover:underline mt-4 inline-block">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/products" className="text-kenyan-brown hover:text-kenyan-red inline-flex items-center mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full object-cover h-auto max-h-[600px]" 
          />
        </div>
        
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <p className="text-2xl font-bold text-kenyan-brown mb-6">
            ${(product.price / 100).toFixed(2)}
          </p>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Description</h3>
            <p className="text-gray-600">
              {product.description || `Premium quality ${product.category} for healthcare professionals. Designed for comfort, durability, and style while maintaining a professional appearance in medical settings.`}
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Category</h3>
            <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-gray-700">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">Quantity</h3>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="text-xl font-medium">{quantity}</span>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </div>
          </div>
          
          <Button 
            className="w-full bg-kenyan-red hover:bg-kenyan-red/90 text-white"
            size="lg"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
      
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
