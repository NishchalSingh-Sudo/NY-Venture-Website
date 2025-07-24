// src/pages/products/BiodegradableItems/RippledDisposableCup.tsx

import React from 'react';
import ProductCard from '../../../components/ProductCard';
import { allDetailedProductsData, DetailedProduct } from '../../../data/allProductsData'; // Corrected path to allProductsDetails
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Link } from 'react-router-dom';

const RippledDisposableCup: React.FC = () => {

  // Filter products directly from allDetailedProductsData
  // Category changed to 'biodegradable-items'
  const rippledDisposableCups: DetailedProduct[] = allDetailedProductsData.filter(product =>
    product.category === 'biodegradable-items' && // Ensure category matches what's in your data
    product.name.includes('Rippled Disposable Cup')
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 font-inter">
      <Navbar />

      {/* Header Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">Rippled Disposable Cups</h1>
        <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Discover our rippled disposable cups, designed for comfort and insulation, now included in our biodegradable range. Perfect for hot and cold beverages, offering a secure grip and easy cleanup.
        </p>

        {rippledDisposableCups.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {rippledDisposableCups.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
                // Use shortDescription if available, otherwise truncate the full description
                description={product.shortDescription || (product.description ? product.description.substring(0, 100) + '...' : '')}
                detailLink={`/product-details/${product.id}`}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 text-xl">
            No Rippled Disposable Cups found.
            <Link to="/products/biodegradable-items" className="text-blue-600 hover:underline block mt-4">
              Go back to Biodegradable Items
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default RippledDisposableCup;