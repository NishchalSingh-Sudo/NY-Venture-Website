// src/pages/QuoteRequestPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.tsx'; // CORRECTED IMPORT PATH

// Import common components with relative paths
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import Shadcn UI components with relative paths (adjust if you have path aliases configured)
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const QuoteRequestPage = () => {
  // CORRECTED: 'cartTotal' is removed from useCart as it's no longer provided by CartContext
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Use cartItems.length here
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add products before requesting a quote.");
      navigate('/products'); // Redirect to products page if cart is empty
      return;
    }

    const inquiryDetails = {
      customerInfo: formData,
      // Use cartItems here, and remove price-related fields
      cartItems: cartItems.map(item => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        // unitPrice: item.price, // REMOVED: Price is no longer in CartItem
        // totalItemPrice: item.price * item.quantity, // REMOVED: Price is no longer in CartItem
      })),
      // estimatedCartTotal: cartTotal, // REMOVED: cartTotal is no longer provided by CartContext
      timestamp: new Date().toISOString(),
    };

    console.log("Quote Request Submitted:", inquiryDetails);
    //
    // --- IMPORTANT: This is where you send the inquiryDetails data ---
    // Use fetch, axios, EmailJS, Formspree, etc., here.
    //
    // For demonstration purposes:
    alert("Your quote request has been submitted successfully! We will get back to you shortly.");
    clearCart(); // Clear the cart after submission
    navigate('/'); // Redirect to home or a thank you page
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 font-playfair mb-4">Request a Quote</h1>
            <p className="text-xl text-gray-600">
              Please fill out the form below, and we'll get back to you with a personalized quote for your selected products.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
              <Input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-lg"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
              <Input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-lg"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">Phone Number</label>
              <Input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-lg"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-lg font-medium text-gray-700 mb-2">Company Name (Optional)</label>
              <Input
                type="text"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-lg"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Additional Message / Specific Requirements</label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-lg"
              />
            </div>

            {/* Use cartItems.length here */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-playfair">Your Selected Products ({cartItems.length})</h2>
            {cartItems.length > 0 ? (
                <div className="space-y-4">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm">
                            <div className="flex items-center">
                                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md mr-4" />
                                <div>
                                    <p className="font-semibold text-gray-800">{item.title}</p>
                                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                </div>
                            </div>
                            {/* REMOVED: Price display as per your request */}
                            {/* <span className="font-bold text-gray-900">₹ {(item.price * item.quantity).toLocaleString()}</span> */}
                        </div>
                    ))}
                    {/* REMOVED: Estimated Total display as per your request */}
                    {/*
                    <div className="flex justify-between items-center text-xl font-bold text-gray-900 pt-4 border-t border-gray-200">
                        <span>Estimated Total:</span>
                        <span>₹ {cartTotal.toLocaleString()}</span>
                    </div>
                    */}
                </div>
            ) : (
                <p className="text-md text-gray-600 italic">No products in cart for quote. Please add some from the product pages.</p>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white text-lg py-3"
              disabled={cartItems.length === 0} // Use cartItems here to disable button if cart is empty
            >
              Submit Quote Request
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuoteRequestPage;
