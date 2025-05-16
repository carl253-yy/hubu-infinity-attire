
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

const Checkout = () => {
  const { items, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ')[1] || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format items for WhatsApp message
    const itemsList = items.map(item => 
      `${item.product.name} (${item.quantity}x) - $${(item.product.price * item.quantity / 100).toFixed(2)}`
    ).join('%0A');
    
    const customerInfo = `
Name: ${formData.firstName} ${formData.lastName}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Address: ${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}, ${formData.country}%0A
Notes: ${formData.notes}%0A
    `.trim();
    
    const message = `
*NEW ORDER FROM HUBU SCRUBS WEBSITE*%0A
%0A
*Items:*%0A${itemsList}%0A
%0A
*Total: $${(cartTotal / 100).toFixed(2)}*%0A
%0A
*Customer Details:*%0A${customerInfo}
    `.trim();
    
    // WhatsApp link with message
    const whatsappURL = `https://wa.link/7f12b9?text=${message}`;
    
    // Save order details to localStorage (would go to a database in a real app)
    const order = {
      id: `ORD-${Date.now()}`,
      items,
      total: cartTotal,
      customer: formData,
      date: new Date().toISOString(),
    };
    
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Clear cart
    clearCart();
    
    // Show success toast
    toast({
      title: "Order submitted!",
      description: "You will be redirected to WhatsApp to finalize your order.",
    });
    
    // Redirect to WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
    
    // Navigate to success page
    navigate('/success', { state: { order } });
  };

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
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address *
                </label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State/Province *
                  </label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                    Postal/Zip Code *
                  </label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country *
                  </label>
                  <Input
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Order Notes (optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                ></textarea>
              </div>
              
              <div className="pt-4">
                <Button type="submit" className="w-full bg-kenyan-red hover:bg-kenyan-red/90">
                  Place Order via WhatsApp
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-20">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <ul className="space-y-3 mb-4">
              {items.map((item) => (
                <li key={item.product.id} className="flex justify-between text-sm">
                  <div>
                    <span className="font-medium">{item.quantity}x</span> {item.product.name.substring(0, 30)}...
                  </div>
                  <div className="font-medium">
                    ${(item.product.price * item.quantity / 100).toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between font-medium">
                <span>Subtotal</span>
                <span>${(cartTotal / 100).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t">
                <span>Total</span>
                <span>${(cartTotal / 100).toFixed(2)}</span>
              </div>
              <p className="mt-4 text-xs text-gray-600">
                * You will discuss final shipping costs and payment methods via WhatsApp after completing your order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
