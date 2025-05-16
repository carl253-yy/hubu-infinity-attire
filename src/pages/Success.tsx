
import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const Success = () => {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-lg">
      <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Order Submitted!</h1>
        <p className="text-gray-600 mb-6">
          Your order has been submitted successfully. We've opened WhatsApp for you to complete your purchase.
        </p>
        
        <div className="border-t border-b py-4 my-4">
          <p className="font-semibold">Order ID: {order.id}</p>
          <p className="text-gray-600">Date: {new Date(order.date).toLocaleDateString()}</p>
          <p className="font-bold mt-2">Total: ${(order.total / 100).toFixed(2)}</p>
        </div>
        
        <p className="text-gray-600 mb-6">
          Please ensure you've sent your order details via WhatsApp. If you haven't been redirected, 
          you can <a 
            href="https://wa.link/7f12b9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-kenyan-brown font-semibold hover:underline"
          >
            click here
          </a> to contact us directly.
        </p>
        
        <div className="space-y-3">
          <Link to="/">
            <Button className="w-full bg-kenyan-red hover:bg-kenyan-red/90">
              Back to Home
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="outline" className="w-full">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
