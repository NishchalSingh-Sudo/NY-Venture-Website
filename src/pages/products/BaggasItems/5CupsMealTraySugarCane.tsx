// src/pages/products/BiodegradableItems/FiveCupsMealTraySugarCane.tsx

import React from 'react';
import ProductCard from '../../../components/ProductCard'; 
// CORRECTED IMPORT PATH:
import { allDetailedProductsData, DetailedProduct } from '../../../data/allProductsData'; 
import Navbar from '../../../components/Navbar'; 
import Footer from '../../../components/Footer'; 
import { Link } from 'react-router-dom'; 

const FiveCupsMealTraySugarCane: React.FC = () => {

  // Filter products directly from allDetailedProductsData
  // Using category and subCategory from your allProductsData.ts
  const fiveCupsMealTrays: DetailedProduct[] = allDetailedProductsData.filter(product =>
    product.category === 'biodegradable-items' && 
    product.subCategory === 'Biodegradable Meal Trays' 
  ).filter(product => 
      product.name.includes('5 Cups Meal Tray') && 
      product.name.includes('Sugar Cane')
  ); 

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 font-inter">
      <Navbar />

      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621609764095-fd9351076b92?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground mb-6 font-playfair">
              5 Cups Meal Tray - Sugar Cane
            </h1>
            <p className="text-xl text-muted-foreground font-inter">
              Explore our sustainable 5-cup meal trays, made from natural sugar cane bagasse, offering an environmentally responsible choice for your serving needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {fiveCupsMealTrays.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {fiveCupsMealTrays.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  imageUrl={product.imageUrl}
                  price={product.price}
                  description={product.shortDescription || product.description.substring(0, 100) + '...'} 
                  detailLink={`/product-details/${product.id}`} 
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-gray-700">No 5 Cups Meal Tray (Sugar Cane) found at the moment. Please check back later!</p>
          )}
        </div>
      </section>

      {/* Optional: Call to Action */}
      <section className="py-16 backdrop-blur-lg bg-white/30 border-t border-white/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-playfair">
              Explore More Biodegradable Items
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-inter">
              Browse our full collection of eco-friendly and compostable products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products/biodegradable-items" 
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-600 to-lime-600 text-white hover:from-green-700 hover:to-lime-700 rounded-xl font-medium transition-all duration-300 hover:scale-105 font-inter shadow-lg"
              >
                View All Biodegradable Items
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FiveCupsMealTraySugarCane;