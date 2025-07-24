// // // // // // // // // // src/components/ProductCard.tsx
// // // // // // // // // import React from 'react';
// // // // // // // // // import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed: npm install react-router-dom

// // // // // // // // // interface ProductCardProps {
// // // // // // // // //   id: string;
// // // // // // // // //   name: string;
// // // // // // // // //   imageUrl: string;
// // // // // // // // //   price: string;
// // // // // // // // //   description: string;
// // // // // // // // //   detailLink: string; // The link to the product's detail page
// // // // // // // // // }

// // // // // // // // // const ProductCard: React.FC<ProductCardProps> = ({ id, name, imageUrl, price, description, detailLink }) => {
// // // // // // // // //   return (
// // // // // // // // //     <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
// // // // // // // // //       <Link to={detailLink}> {/* Make the whole card clickable */}
// // // // // // // // //         <img 
// // // // // // // // //           src={imageUrl} 
// // // // // // // // //           alt={name} 
// // // // // // // // //           className="w-full h-48 object-cover" 
// // // // // // // // //         />
// // // // // // // // //       </Link>
// // // // // // // // //       <div className="p-4">
// // // // // // // // //         <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
// // // // // // // // //         <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
// // // // // // // // //         <p className="text-lg font-bold text-blue-600 mb-4">{price}</p>
// // // // // // // // //         <Link 
// // // // // // // // //           to={detailLink} 
// // // // // // // // //           className="block w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
// // // // // // // // //         >
// // // // // // // // //           View Details
// // // // // // // // //         </Link>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default ProductCard;





// // // // // // // // // // // src/components/ProductCard.tsx
// // // // // // // // // // import React from 'react';
// // // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // // import { DetailedProduct } from '../data/allProductsData'; // Assuming this import path for your product data structure

// // // // // // // // // // interface ProductCardProps {
// // // // // // // // // //   product: DetailedProduct; // Now accepting the entire product object
// // // // // // // // // // }

// // // // // // // // // // const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
// // // // // // // // // //   // Construct the detail link dynamically based on product properties
// // // // // // // // // //   // Ensure subCategory exists before including it in the path to avoid double slashes
// // // // // // // // // //   const detailLink = `/products/${product.category}${product.subCategory ? `/${product.subCategory}` : ''}/${product.id}`;

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
// // // // // // // // // //       <Link to={detailLink}> {/* Make the whole card clickable */}
// // // // // // // // // //         <img
// // // // // // // // // //           src={product.imageUrl}
// // // // // // // // // //           alt={product.name}
// // // // // // // // // //           className="w-full h-48 object-cover"
// // // // // // // // // //         />
// // // // // // // // // //       </Link>
// // // // // // // // // //       <div className="p-4">
// // // // // // // // // //         <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
// // // // // // // // // //         {/* Using shortDescription for the card preview, with a fallback to full description */}
// // // // // // // // // //         <p className="text-gray-600 text-sm mb-3 line-clamp-2">
// // // // // // // // // //           {product.shortDescription || product.description}
// // // // // // // // // //         </p>
// // // // // // // // // //         <p className="text-lg font-bold text-blue-600 mb-4">{product.price}</p>
// // // // // // // // // //         <Link
// // // // // // // // // //           to={detailLink}
// // // // // // // // // //           className="block w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
// // // // // // // // // //         >
// // // // // // // // // //           View Details
// // // // // // // // // //         </Link>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default ProductCard;



// // // // // // // // // // // src/components/ProductCard.tsx
// // // // // // // // // // import React from 'react';
// // // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // // import { DetailedProduct } from '../data/allProductsData';

// // // // // // // // // // interface ProductCardProps {
// // // // // // // // // //   // The component now takes a single 'product' object, which is cleaner.
// // // // // // // // // //   product: DetailedProduct;
// // // // // // // // // // }

// // // // // // // // // // const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
// // // // // // // // // //   // The link is constructed dynamically from the product data.
// // // // // // // // // //   const detailLink = `/products/${product.category}${product.subCategory ? `/${product.subCategory}` : ''}/${product.id}`;

// // // // // // // // // //   return (
// // // // // // // // // //     // FIX 1: The outer div is now a flex container, arranged as a column (`flex-col`).
// // // // // // // // // //     // `h-full` ensures it stretches to the height of the tallest card in the row.
// // // // // // // // // //     <div className="group bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full">
// // // // // // // // // //       <div className="overflow-hidden">
// // // // // // // // // //         <Link to={detailLink} className="block">
// // // // // // // // // //             <img
// // // // // // // // // //               src={product.imageUrl}
// // // // // // // // // //               alt={product.name}
// // // // // // // // // //               className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
// // // // // // // // // //             />
// // // // // // // // // //         </Link>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* FIX 2: The content area is also a flex column and set to grow (`flex-1`). */}
// // // // // // // // // //       <div className="p-5 flex flex-col flex-1">
// // // // // // // // // //         {/* This div holds the title and description. */}
// // // // // // // // // //         <div>
// // // // // // // // // //             <h3 className="text-lg font-bold text-gray-800 mb-2">
// // // // // // // // // //                 <Link to={detailLink} className="hover:text-amber-600 transition-colors">{product.name}</Link>
// // // // // // // // // //             </h3>
// // // // // // // // // //             <p className="text-gray-600 text-sm mb-4">
// // // // // // // // // //               {product.shortDescription || product.description}
// // // // // // // // // //             </p>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* FIX 3: THE KEY ALIGNMENT FIX. */}
// // // // // // // // // //         {/* `mt-auto` (margin-top: auto) pushes this block to the bottom of the flex container. */}
// // // // // // // // // //         <div className="mt-auto">
// // // // // // // // // //             <p className="text-xl font-bold text-gray-900 mb-4">{product.price}</p>
// // // // // // // // // //             <Link
// // // // // // // // // //               to={detailLink}
// // // // // // // // // //               className="block w-full text-center bg-gray-800 text-white py-2.5 rounded-md hover:bg-amber-500 hover:text-white transition-colors duration-300 font-semibold"
// // // // // // // // // //             >
// // // // // // // // // //               View Details
// // // // // // // // // //             </Link>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default ProductCard;



// // // // // // // // // src/components/ProductCard.tsx
// // // // // // // // import React from 'react';
// // // // // // // // import { Link } from 'react-router-dom';

// // // // // // // // interface ProductCardProps {
// // // // // // // //   id: string;
// // // // // // // //   name: string;
// // // // // // // //   imageUrl: string;
// // // // // // // //   price: string;
// // // // // // // //   description: string;
// // // // // // // //   detailLink: string; // The link to the product's detail page
// // // // // // // // }

// // // // // // // // const ProductCard: React.FC<ProductCardProps> = ({ id, name, imageUrl, price, description, detailLink }) => {
// // // // // // // //   return (
// // // // // // // //     // Added 'flex flex-col h-full' to make the card a flex container that fills its parent height
// // // // // // // //     <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
// // // // // // // //       <Link to={detailLink}> {/* Make the whole card clickable */}
// // // // // // // //         <img
// // // // // // // //           src={imageUrl}
// // // // // // // //           alt={name}
// // // // // // // //           className="w-full h-48 object-cover"
// // // // // // // //         />
// // // // // // // //       </Link>
// // // // // // // //       {/* Added 'flex-grow' to the content div so it takes up available space, pushing the button down */}
// // // // // // // //       <div className="p-4 flex flex-col flex-grow">
// // // // // // // //         <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
// // // // // // // //         {/* Added 'flex-grow' to the description to make it expand and push content below */}
// // // // // // // //         {/* Also added 'min-h-[48px]' to provide a minimum height for 2 lines, preventing severe collapse on very short descriptions */}
// // // // // // // //         <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow min-h-[48px]">{description}</p>
// // // // // // // //         <p className="text-lg font-bold text-blue-600 mb-4">{price}</p>
// // // // // // // //         {/* Added 'mt-auto' to push the button to the bottom */}
// // // // // // // //         <Link
// // // // // // // //           to={detailLink}
// // // // // // // //           className="mt-auto block w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
// // // // // // // //         >
// // // // // // // //           View Details
// // // // // // // //         </Link>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ProductCard;






// // // // // // // // src/components/ProductCard.tsx
// // // // // // // import React from 'react';
// // // // // // // import { Link } from 'react-router-dom';

// // // // // // // interface ProductCardProps {
// // // // // // //   id: string;
// // // // // // //   name: string;
// // // // // // //   imageUrl: string;
// // // // // // //   price: string; // Keep 'price' in interface if still passed from parent, but it won't be displayed.
// // // // // // //   description: string;
// // // // // // //   detailLink: string; // The link to the product's detail page
// // // // // // // }

// // // // // // // const ProductCard: React.FC<ProductCardProps> = ({ id, name, imageUrl, price, description, detailLink }) => {
// // // // // // //   return (
// // // // // // //     // Added 'flex flex-col h-full' to make the card a flex container that fills its parent height
// // // // // // //     <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
// // // // // // //       <Link to={detailLink}> {/* Make the whole card clickable */}
// // // // // // //         <img
// // // // // // //           src={imageUrl}
// // // // // // //           alt={name}
// // // // // // //           className="w-full h-48 object-cover"
// // // // // // //         />
// // // // // // //       </Link>
// // // // // // //       {/* Added 'flex-grow' to the content div so it takes up available space, pushing the button down */}
// // // // // // //       <div className="p-4 flex flex-col flex-grow">
// // // // // // //         <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
// // // // // // //         {/* Added 'flex-grow' to the description to make it expand and push content below */}
// // // // // // //         {/* Also added 'min-h-[48px]' to provide a minimum height for 2 lines, preventing severe collapse on very short descriptions */}
// // // // // // //         <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow min-h-[48px]">{description}</p>
        
// // // // // // //         {/* REMOVED: The line below that displayed the price */}
// // // // // // //         {/* <p className="text-lg font-bold text-blue-600 mb-4">{price}</p> */}
        
// // // // // // //         {/* Added 'mt-auto' to push the button to the bottom */}
// // // // // // //         <Link
// // // // // // //           to={detailLink}
// // // // // // //           className="mt-auto block w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
// // // // // // //         >
// // // // // // //           View Details
// // // // // // //         </Link>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ProductCard;



// // // // // // // Assuming this is your ProductCard.tsx file or similar component
// // // // // // // src/components/ProductCard.tsx

// // // // // // import React from 'react';
// // // // // // import { Link } from 'react-router-dom'; // Use Link for internal navigation

// // // // // // interface ProductCardProps {
// // // // // //   id: string;
// // // // // //   name: string;
// // // // // //   imageUrl: string;
// // // // // //   // price: string; // Removed as per request
// // // // // //   // description: string; // Removed as per request
// // // // // //   detailLink: string;
// // // // // // }

// // // // // // const ProductCard: React.FC<ProductCardProps> = ({
// // // // // //   name,
// // // // // //   imageUrl,
// // // // // //   detailLink
// // // // // // }) => {
// // // // // //   return (
// // // // // //     <div className="flex flex-col items-center bg-white rounded-lg shadow-sm overflow-hidden
// // // // // //                     transform transition-transform duration-200 hover:scale-105"> {/* Added hover effect */}
// // // // // //       <Link to={detailLink} className="block w-full text-center">
// // // // // //         <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
// // // // // //           <img
// // // // // //             src={imageUrl}
// // // // // //             alt={name}
// // // // // //             className="max-w-full max-h-full object-contain"
// // // // // //             onError={(e) => { e.currentTarget.src = '/images/placeholder.jpg'; }} // Fallback image
// // // // // //           />
// // // // // //         </div>
// // // // // //         <h3 className="text-lg font-semibold text-gray-800 break-words py-2 px-1"> {/* Added padding for title */}
// // // // // //           {name}
// // // // // //         </h3>
// // // // // //         {/* Removed price and description */}
// // // // // //         {/* Removed "View Details" button */}
// // // // // //       </Link>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ProductCard;





// // // // // // src/components/ProductCard.tsx

// // // // // import React from 'react';
// // // // // import { Link } from 'react-router-dom';

// // // // // interface ProductCardProps {
// // // // //   id: string;
// // // // //   name: string;
// // // // //   imageUrl: string;
// // // // //   detailLink: string;
// // // // // }

// // // // // const ProductCard: React.FC<ProductCardProps> = ({
// // // // //   name,
// // // // //   imageUrl,
// // // // //   detailLink
// // // // // }) => {
// // // // //   return (
// // // // //     // Changed background to transparent and removed shadow
// // // // //     // Added a slight border to define the card area subtly if needed, or remove completely
// // // // //     <div className="flex flex-col items-center rounded-lg overflow-hidden
// // // // //                     transform transition-transform duration-200 hover:scale-105
// // // // //                     bg-transparent border border-transparent hover:border-gray-200"> {/* Adjusted styling */}
// // // // //       <Link to={detailLink} className="block w-full text-center">
// // // // //         <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
// // // // //           <img
// // // // //             src={imageUrl}
// // // // //             alt={name}
// // // // //             className="max-w-full max-h-full object-contain"
// // // // //             onError={(e) => { e.currentTarget.src = '/images/placeholder.jpg'; }}
// // // // //           />
// // // // //         </div>
// // // // //         <h3 className="text-lg font-semibold text-gray-800 break-words py-2 px-1">
// // // // //           {name}
// // // // //         </h3>
// // // // //       </Link>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProductCard;

// // // // // src/components/ProductCard.tsx

// // // // import React from 'react';
// // // // import { Link } from 'react-router-dom';

// // // // interface ProductCardProps {
// // // //   id: string;
// // // //   name: string;
// // // //   imageUrl: string;
// // // //   detailLink: string;
// // // // }

// // // // const ProductCard: React.FC<ProductCardProps> = ({
// // // //   name,
// // // //   imageUrl,
// // // //   detailLink
// // // // }) => {
// // // //   return (
// // // //     // Changed background to transparent and removed shadow
// // // //     // Added a slight border to define the card area subtly if needed, or remove completely
// // // //     <div className="flex flex-col items-center rounded-lg overflow-hidden
// // // //                     transform transition-transform duration-200 hover:scale-105
// // // //                     bg-transparent border border-transparent hover:border-gray-200"> {/* Adjusted styling */}
// // // //       <Link to={detailLink} className="block w-full text-center">
// // // //         <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
// // // //           <img
// // // //             src={imageUrl}
// // // //             alt={name}
// // // //             className="max-w-full max-h-full object-contain"
// // // //             onError={(e) => { e.currentTarget.src = '/images/placeholder.jpg'; }}
// // // //           />
// // // //         </div>
// // // //         <h3 className="text-lg font-semibold text-gray-800 break-words py-2 px-1">
// // // //           {name}
// // // //         </h3>
// // // //       </Link>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProductCard;


// // src/components/ProductCard.tsx
// import type React from "react"
// import { Link } from "react-router-dom" // Make sure you have react-router-dom installed: npm install react-router-dom

// interface ProductCardProps {
//   id: string
//   name: string
//   imageUrl: string
//   // price: string; // Removed price as per the inquiry model
//   description: string
//   detailLink: string // The link to the product's detail page
// }

// const ProductCard: React.FC<ProductCardProps> = ({ id, name, imageUrl, description, detailLink }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
//       <Link to={detailLink}>
//         {" "}
//         {/* Make the whole card clickable */}
//         <img src={imageUrl || "/placeholder.svg"} alt={name} className="w-full h-48 object-cover" />
//       </Link>
//       <div className="p-4">
//         <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
//         <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
//         {/* <p className="text-lg font-bold text-blue-600 mb-4">{price}</p> Removed price display */}
//         <Link
//           to={detailLink}
//           className="block w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
//         >
//           View Details
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default ProductCard




// import type React from "react"
// import { Link } from "react-router-dom"
// import { Card, CardContent } from "./ui/card"
// import { Button } from "./ui/button"
// import { Star } from "lucide-react"

// interface ProductCardProps {
//   id: string
//   name: string
//   imageUrl: string
//   shortDescription: string
//   rating: number
//   reviews: number
// }

// const ProductCard: React.FC<ProductCardProps> = ({ id, name, imageUrl, shortDescription, rating, reviews }) => {
//   return (
//     <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white backdrop-blur-sm">
//       <div className="relative overflow-hidden">
//         <img
//           src={imageUrl || "/placeholder.svg"}
//           alt={name}
//           className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//       </div>
//       <CardContent className="p-6">
//         <h3 className="text-2xl font-bold text-gray-900 mb-2 font-playfair group-hover:text-blue-600 transition-colors duration-300">
//           {name}
//         </h3>
//         <p className="text-gray-600 mb-4 font-inter leading-relaxed line-clamp-3">
//           {shortDescription || "A high-quality product with excellent features."}
//         </p>
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center space-x-1">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
//               />
//             ))}
//             <span className="text-sm text-gray-500 ml-2 font-inter">
//               ({rating.toFixed(1)}) {reviews > 0 ? `(${reviews} reviews)` : "(No reviews)"}
//             </span>
//           </div>
//         </div>
//         <Button
//           asChild
//           className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105"
//         >
//           <Link to={`/product-details/${id}`}>View Details</Link>
//         </Button>
//       </CardContent>
//     </Card>
//   )
// }

// export default ProductCard







// src/components/ProductCard.tsx (or wherever your ProductCard component is located)

import React from 'react';
import { DetailedProduct } from '../data/allProductsData'; // Adjust the path as necessary

interface ProductCardProps {
  product: DetailedProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-short-description">{product.shortDescription}</p>

        {/* Conditional Rendering for Rating and Reviews */}
        {product.rating !== undefined && product.reviewCount !== undefined && (
          <div className="product-rating">
            <span className="rating-value">{product.rating.toFixed(1)}</span>
            <span className="review-count">({product.reviewCount} reviews)</span>
          </div>
        )}
        {/*
          Alternatively, if you want to show nothing if rating/reviews are missing:
          {product.rating && product.reviewCount && (
            <div className="product-rating">
              <span className="rating-value">{product.rating.toFixed(1)}</span>
              <span className="review-count">({product.reviewCount} reviews)</span>
            </div>
          )}
          This assumes rating would be 0 or null if not present.
          `product.rating !== undefined` is more explicit when dealing with potentially missing properties.
        */}

        {/* You mentioned price was missing in previous discussions, assuming it might be added or handled. */}
        {product.price && <p className="product-price">{product.price}</p>}

        {/* Add a link to the product detail page if you have one */}
        {/* <Link to={`/product/${product.id}`} className="view-details-button">
          View Details
        </Link> */}
      </div>
    </div>
  );
};

export default ProductCard;