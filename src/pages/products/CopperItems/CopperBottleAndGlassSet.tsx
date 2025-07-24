// // src/pages/products/CopperItems/CopperBottleAndGlassSet.tsx

// import React from 'react';
// import ProductCard from '../../../components/ProductCard'; 
// import { allDetailedProductsData, DetailedProduct } from '../../../data/allProductsData'; // Import the main data source
// import Navbar from '../../../components/Navbar'; // Assuming you want Navbar/Footer
// import Footer from '../../../components/Footer'; // Assuming you want Navbar/Footer
// import { Link } from 'react-router-dom'; // For the optional CTA

// // The component name must be 'CopperBottleAndGlassSet' (PascalCase, matching the filename)
// const CopperBottleAndGlassSet: React.FC = () => {

//   // Filter products directly from allDetailedProductsData
//   // Ensure the 'category' and 'subCategory' strings match exactly what's in allProductsDetails.ts
//   const copperBottleAndGlassSets: DetailedProduct[] = allDetailedProductsData.filter(product =>
//     product.category === 'copper-items' && product.subCategory === 'Copper Utensils Set'
//     // You might refine subCategory depending on how granular you want this page to be.
//     // For 'Copper Bottle & Glass Set', 'Copper Utensils Set' seems appropriate from your data.
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-inter">
//       <Navbar />

//       {/* Header Section */}
//       <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>
//         <div className="container mx-auto px-4 relative">
//           <div className="max-w-4xl mx-auto text-center animate-fade-in">
//             <h1 className="text-5xl font-bold text-foreground mb-6 font-playfair">
//               Copper Bottle & Glass Sets
//             </h1>
//             <p className="text-xl text-muted-foreground font-inter">
//               Discover our elegant copper bottle and glass sets, perfect for healthy hydration and sophisticated serving.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           {copperBottleAndGlassSets.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//               {copperBottleAndGlassSets.map((product) => (
//                 <ProductCard
//                   key={product.id}
//                   id={product.id}
//                   name={product.name}
//                   imageUrl={product.imageUrl}
//                   price={product.price}
//                   // Use shortDescription if available, otherwise truncate the main description
//                   description={product.shortDescription || product.description.substring(0, 100) + '...'} 
//                   detailLink={`/product-details/${product.id}`} 
//                 />
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-lg text-gray-700">No Copper Bottle & Glass Sets found at the moment. Please check back later!</p>
//           )}
//         </div>
//       </section>

//       {/* Optional: Call to Action */}
//       <section className="py-16 backdrop-blur-lg bg-white/30 border-t border-white/20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center animate-fade-in">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4 font-playfair">
//               Explore More Copper Items
//             </h2>
//             <p className="text-lg text-gray-600 mb-8 font-inter">
//               Browse our full collection of copper products for every need.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 to="/products/copper-items" // Link to the main Copper Items page
//                 className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-xl font-medium transition-all duration-300 hover:scale-105 font-inter shadow-lg"
//               >
//                 View All Copper Items
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default CopperBottleAndGlassSet;



// src/pages/products/CopperItems/CopperBottleAndGlassSet.tsx

import React from 'react';
import ProductCard from '@/components/ProductCard'; // Adjusted import path
import { allDetailedProductsData, DetailedProduct } from '@/data/allProductsData'; // Adjusted import path
import Navbar from '@/components/Navbar'; // Adjusted import path
import Footer from '@/components/Footer'; // Adjusted import path
import { Link } from 'react-router-dom';

// The component name must be 'CopperBottleAndGlassSet' (PascalCase, matching the filename)
const CopperBottleAndGlassSet: React.FC = () => {

  // Filter products directly from allDetailedProductsData
  // Ensure the 'category' and 'subCategory' strings match exactly what's in allProductsData.ts
  const copperBottleAndGlassSets: DetailedProduct[] = allDetailedProductsData.filter(product =>
    product.category === 'copper-items' && product.subCategory === 'Copper Utensils Set'
    // You might refine subCategory depending on how granular you want this page to be.
    // For 'Copper Bottle & Glass Set', 'Copper Utensils Set' seems appropriate from your data.
  ).filter(product => product.name.includes('Bottle') && product.name.includes('Glass')); // Added name filter for more specificity

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-inter">
      <Navbar />

      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground mb-6 font-playfair">
              Copper Bottle & Glass Sets
            </h1>
            <p className="text-xl text-muted-foreground font-inter">
              Discover our elegant copper bottle and glass sets, perfect for healthy hydration and sophisticated serving.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {copperBottleAndGlassSets.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {copperBottleAndGlassSets.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  imageUrl={product.imageUrl}
                  // REMOVED: price={product.price} as per your request
                  // REMOVED: description={product.shortDescription || product.description.substring(0, 100) + '...'} as it's not a prop for ProductCard
                  detailLink={`/product-details/${product.id}`}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-gray-700">No Copper Bottle & Glass Sets found at the moment. Please check back later!</p>
          )}
        </div>
      </section>

      {/* Optional: Call to Action */}
      <section className="py-16 backdrop-blur-lg bg-white/30 border-t border-white/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-playfair">
              Explore More Copper Items
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-inter">
              Browse our full collection of copper products for every need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products/copper-items" // Link to the main Copper Items page
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-xl font-medium transition-all duration-300 hover:scale-105 font-inter shadow-lg"
              >
                View All Copper Items
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CopperBottleAndGlassSet;
