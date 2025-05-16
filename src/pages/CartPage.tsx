
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Plus, Minus, Trash2 } from 'lucide-react';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="mb-6">Add some products to your cart before checking out.</p>
        <Link to="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="hidden md:grid md:grid-cols-12 text-sm font-medium text-gray-500 bg-gray-50 p-4">
          <div className="col-span-6">Product</div>
          <div className="col-span-2 text-center">Price</div>
          <div className="col-span-2 text-center">Quantity</div>
          <div className="col-span-2 text-right">Total</div>
        </div>
        
        <ul className="divide-y divide-gray-200">
          {items.map((item) => (
            <li key={item.product.id} className="p-4 sm:p-6">
              <div className="md:grid md:grid-cols-12 gap-6 flex flex-col">
                <div className="col-span-6 flex">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-gray-100">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  
                  <div className="ml-4 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        <Link to={`/product/${item.product.id}`} className="hover:text-kenyan-brown">
                          {item.product.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">Category: {item.product.category}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-sm text-red-600 hover:text-red-500 flex items-center md:hidden mt-2"
                    >
                      <Trash2 className="h-4 w-4 mr-1" /> Remove
                    </button>
                  </div>
                </div>
                
                <div className="col-span-2 flex items-center justify-center mt-4 md:mt-0">
                  <span className="text-gray-900">${(item.product.price / 100).toFixed(2)}</span>
                </div>
                
                <div className="col-span-2 flex items-center justify-center mt-4 md:mt-0">
                  <div className="flex border border-gray-300 rounded-md">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <div className="px-3 py-1 border-l border-r border-gray-300 min-w-[40px] text-center">
                      {item.quantity}
                    </div>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="col-span-2 flex items-center justify-between md:justify-end mt-4 md:mt-0">
                  <span className="font-medium text-gray-900 md:pr-8">
                    ${(item.product.price * item.quantity / 100).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-gray-400 hover:text-red-500 hidden md:block"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${(cartTotal / 100).toFixed(2)}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link to="/checkout">
              <Button className="w-full bg-kenyan-red hover:bg-kenyan-red/90">
                Checkout
              </Button>
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{' '}
              <Link
                to="/products"
                className="font-medium text-kenyan-brown hover:text-kenyan-brown/80"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
