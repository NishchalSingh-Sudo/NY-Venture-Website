// // // // // // // // src/pages/ProductDetailsPage.tsx
// // // // // // // import React, { useState } from 'react';
// // // // // // // import { useParams, Link } from 'react-router-dom';
// // // // // // // import { allDetailedProductsData, DetailedProduct } from '../data/allProductsData'; // Corrected import path

// // // // // // // const ProductDetailsPage: React.FC = () => {
// // // // // // //   const { id } = useParams<{ id: string }>();
// // // // // // //   const [mainImage, setMainImage] = useState<string>('');

// // // // // // //   const product = allDetailedProductsData.find(p => p.id === id);

// // // // // // //   React.useEffect(() => {
// // // // // // //     if (product) {
// // // // // // //       setMainImage(product.imageUrl);
// // // // // // //     }
// // // // // // //   }, [product]);

// // // // // // //   if (!product) {
// // // // // // //     return (
// // // // // // //       <div className="container mx-auto px-4 py-16 text-center min-h-screen">
// // // // // // //         <h1 className="text-4xl font-bold text-red-600 mb-4">Product Not Found</h1>
// // // // // // //         <p className="text-lg text-gray-700">The product you are looking for does not exist or has been removed.</p>
// // // // // // //         <Link to="/products" className="text-blue-600 hover:underline mt-4 block">
// // // // // // //           ← Back to all products
// // // // // // //         </Link>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="container mx-auto px-4 py-16 bg-white min-h-screen font-inter">
// // // // // // //       <Link to="/products" className="text-blue-600 hover:underline mb-8 inline-block">
// // // // // // //         ← Back to all products
// // // // // // //       </Link>
// // // // // // //       <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center font-playfair">
// // // // // // //         {product.name}
// // // // // // //       </h1>

// // // // // // //       <div className="flex flex-col lg:flex-row gap-12 items-start">
// // // // // // //         {/* Product Image Gallery */}
// // // // // // //         <div className="lg:w-1/2 flex flex-col items-center">
// // // // // // //           <img
// // // // // // //             src={mainImage}
// // // // // // //             alt={product.name}
// // // // // // //             className="w-full max-h-[500px] object-contain rounded-lg shadow-xl mb-4 border border-gray-200"
// // // // // // //           />
// // // // // // //           {product.galleryImages && product.galleryImages.length > 0 && (
// // // // // // //             <div className="grid grid-cols-4 gap-3 w-full max-w-lg">
// // // // // // //               {product.galleryImages.map((img, index) => (
// // // // // // //                 <img
// // // // // // //                   key={index}
// // // // // // //                   src={img}
// // // // // // //                   alt={`${product.name} gallery ${index + 1}`}
// // // // // // //                   className={`w-full h-24 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 shadow-sm ${
// // // // // // //                     img === mainImage ? 'border-blue-500' : 'border-gray-300 hover:border-blue-300'
// // // // // // //                   }`}
// // // // // // //                   onClick={() => setMainImage(img)}
// // // // // // //                 />
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>

// // // // // // //         {/* Product Details */}
// // // // // // //         <div className="lg:w-1/2">
// // // // // // //           <p className="text-gray-800 text-3xl font-bold mb-4">{product.price}</p>

// // // // // // //           <div className="mb-6">
// // // // // // //             <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Description</h2>
// // // // // // //             <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
// // // // // // //           </div>

// // // // // // //           {product.features && product.features.length > 0 && (
// // // // // // //             <div className="mb-8">
// // // // // // //               <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Key Features</h2>
// // // // // // //               <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
// // // // // // //                 {product.features.map((feature, index) => (
// // // // // // //                   <li key={index}>{feature}</li>
// // // // // // //                 ))}
// // // // // // //               </ul>
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           <button className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-xl font-medium text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg">
// // // // // // //             Add to Cart
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ProductDetailsPage;
// // // // // // // src/pages/ProductDetailsPage.tsx
// // // // // // import React, { useState, useEffect } from 'react'; // Added useEffect import
// // // // // // import { useParams, Link } from 'react-router-dom';
// // // // // // import { allDetailedProductsData, DetailedProduct } from '../data/allProductsData'; // Corrected from allProductsData to allProductsDetails as per previous context

// // // // // // // Import Navbar and Footer components
// // // // // // import Navbar from '../components/Navbar'; // Adjust path if necessary, but this is the standard
// // // // // // import Footer from '../components/Footer'; // Adjust path if necessary, but this is the standard


// // // // // // const ProductDetailsPage: React.FC = () => {
// // // // // //   const { id } = useParams<{ id: string }>();
// // // // // //   const [mainImage, setMainImage] = useState<string>('');

// // // // // //   // Use useEffect to find the product only once or when ID changes
// // // // // //   const [product, setProduct] = useState<DetailedProduct | null>(null);
// // // // // //   const [loading, setLoading] = useState<boolean>(true);

// // // // // //   React.useEffect(() => {
// // // // // //     setLoading(true);
// // // // // //     const foundProduct = allDetailedProductsData.find(p => p.id === id);
// // // // // //     if (foundProduct) {
// // // // // //       setProduct(foundProduct);
// // // // // //       setMainImage(foundProduct.imageUrl); // Set main image when product is found
// // // // // //     } else {
// // // // // //       setProduct(null); // Explicitly set to null if not found
// // // // // //     }
// // // // // //     setLoading(false);
// // // // // //   }, [id]); // Depend on ID, so it re-runs if the URL parameter changes

// // // // // //   if (loading) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // // // //         Loading product details...
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   // Render Navbar and Footer even if product is not found
// // // // // //   if (!product) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen bg-white font-inter">
// // // // // //         <Navbar /> {/* <-- Navbar rendered here */}
// // // // // //         <div className="container mx-auto px-4 py-16 text-center">
// // // // // //           <h1 className="text-4xl font-bold text-red-600 mb-4">Product Not Found</h1>
// // // // // //           <p className="text-lg text-gray-700">The product you are looking for does not exist or has been removed.</p>
// // // // // //           <Link to="/products" className="text-blue-600 hover:underline mt-4 block">
// // // // // //             ← Back to all products
// // // // // //           </Link>
// // // // // //         </div>
// // // // // //         <Footer /> {/* <-- Footer rendered here */}
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-white font-inter"> {/* Consider a background gradient if consistent with site design */}
// // // // // //       <Navbar /> {/* <-- Navbar must be rendered here */}

// // // // // //       <div className="container mx-auto px-4 py-16">
// // // // // //         <Link to="/products" className="text-blue-600 hover:underline mb-8 inline-block">
// // // // // //           ← Back to all products
// // // // // //         </Link>
// // // // // //         <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center font-playfair">
// // // // // //           {product.name}
// // // // // //         </h1>

// // // // // //         <div className="flex flex-col lg:flex-row gap-12 items-start">
// // // // // //           {/* Product Image Gallery */}
// // // // // //           <div className="lg:w-1/2 flex flex-col items-center">
// // // // // //             <img
// // // // // //               src={mainImage}
// // // // // //               alt={product.name}
// // // // // //               className="w-full max-h-[500px] object-contain rounded-lg shadow-xl mb-4 border border-gray-200"
// // // // // //             />
// // // // // //             {product.galleryImages && product.galleryImages.length > 0 && (
// // // // // //               <div className="grid grid-cols-4 gap-3 w-full max-w-lg">
// // // // // //                 {product.galleryImages.map((img, index) => (
// // // // // //                   <img
// // // // // //                     key={index}
// // // // // //                     src={img}
// // // // // //                     alt={`${product.name} gallery ${index + 1}`}
// // // // // //                     className={`w-full h-24 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 shadow-sm ${
// // // // // //                       img === mainImage ? 'border-blue-500' : 'border-gray-300 hover:border-blue-300'
// // // // // //                     }`}
// // // // // //                     onClick={() => setMainImage(img)}
// // // // // //                   />
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>

// // // // // //           {/* Product Details */}
// // // // // //           <div className="lg:w-1/2">
// // // // // //             {/* REMOVED: The price display line */}
// // // // // //             {/* <p className="text-gray-800 text-3xl font-bold mb-4">₹ {product.price}</p> */}

// // // // // //             <div className="mb-6">
// // // // // //               <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Description</h2>
// // // // // //               <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
// // // // // //             </div>

// // // // // //             {product.shortDescription && ( // Check if shortDescription exists
// // // // // //               <div className="mb-6">
// // // // // //                 <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Short Description</h2>
// // // // // //                 <p className="text-gray-700 text-lg leading-relaxed">{product.shortDescription}</p>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {product.features && product.features.length > 0 && (
// // // // // //               <div className="mb-8">
// // // // // //                 <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Key Features</h2>
// // // // // //                 <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
// // // // // //                   {product.features.map((feature, index) => (
// // // // // //                     <li key={index}>{feature}</li>
// // // // // //                   ))}
// // // // // //                 </ul>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             <button className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-xl font-medium text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg">
// // // // // //               Add to Cart
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       <Footer /> {/* <-- Footer must be rendered here */}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ProductDetailsPage;


// // // // // // // src/pages/ProductDetailsPage.tsx
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { useParams, Link } from 'react-router-dom'; // Link is already imported, good!
// // // // // // import { allDetailedProductsData, DetailedProduct } from '../data/allProductsData';

// // // // // // // Import Navbar and Footer components
// // // // // // import Navbar from '../components/Navbar';
// // // // // // import Footer from '../components/Footer';


// // // // // // const ProductDetailsPage: React.FC = () => {
// // // // // //   const { id } = useParams<{ id: string }>();
// // // // // //   const [mainImage, setMainImage] = useState<string>('');

// // // // // //   // Use useEffect to find the product only once or when ID changes
// // // // // //   const [product, setProduct] = useState<DetailedProduct | null>(null);
// // // // // //   const [loading, setLoading] = useState<boolean>(true);

// // // // // //   React.useEffect(() => {
// // // // // //     setLoading(true);
// // // // // //     const foundProduct = allDetailedProductsData.find(p => p.id === id);
// // // // // //     if (foundProduct) {
// // // // // //       setProduct(foundProduct);
// // // // // //       setMainImage(foundProduct.imageUrl); // Set main image when product is found
// // // // // //     } else {
// // // // // //       setProduct(null); // Explicitly set to null if not found
// // // // // //     }
// // // // // //     setLoading(false);
// // // // // //   }, [id]); // Depend on ID, so it re-runs if the URL parameter changes

// // // // // //   if (loading) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // // // //         Loading product details...
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   // Render Navbar and Footer even if product is not found
// // // // // //   if (!product) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen bg-white font-inter">
// // // // // //         <Navbar />
// // // // // //         <div className="container mx-auto px-4 py-16 text-center">
// // // // // //           <h1 className="text-4xl font-bold text-red-600 mb-4">Product Not Found</h1>
// // // // // //           <p className="text-lg text-gray-700">The product you are looking for does not exist or has been removed.</p>
// // // // // //           <Link to="/products" className="text-blue-600 hover:underline mt-4 block">
// // // // // //             ← Back to all products
// // // // // //           </Link>
// // // // // //         </div>
// // // // // //         <Footer />
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-white font-inter">
// // // // // //       <Navbar />

// // // // // //       <div className="container mx-auto px-4 py-16">
// // // // // //         <Link to="/products" className="text-blue-600 hover:underline mb-8 inline-block">
// // // // // //           ← Back to all products
// // // // // //         </Link>
// // // // // //         <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center font-playfair">
// // // // // //           {product.name}
// // // // // //         </h1>

// // // // // //         <div className="flex flex-col lg:flex-row gap-12 items-start">
// // // // // //           {/* Product Image Gallery */}
// // // // // //           <div className="lg:w-1/2 flex flex-col items-center">
// // // // // //             <img
// // // // // //               src={mainImage}
// // // // // //               alt={product.name}
// // // // // //               className="w-full max-h-[500px] object-contain rounded-lg shadow-xl mb-4 border border-gray-200"
// // // // // //             />
// // // // // //             {product.galleryImages && product.galleryImages.length > 0 && (
// // // // // //               <div className="grid grid-cols-4 gap-3 w-full max-w-lg">
// // // // // //                 {product.galleryImages.map((img, index) => (
// // // // // //                   <img
// // // // // //                     key={index}
// // // // // //                     src={img}
// // // // // //                     alt={`${product.name} gallery ${index + 1}`}
// // // // // //                     className={`w-full h-24 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 shadow-sm ${
// // // // // //                       img === mainImage ? 'border-blue-500' : 'border-gray-300 hover:border-blue-300'
// // // // // //                     }`}
// // // // // //                     onClick={() => setMainImage(img)}
// // // // // //                   />
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>

// // // // // //           {/* Product Details */}
// // // // // //           <div className="lg:w-1/2">
// // // // // //             <div className="mb-6">
// // // // // //               <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Description</h2>
// // // // // //               <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
// // // // // //             </div>

// // // // // //             {product.shortDescription && (
// // // // // //               <div className="mb-6">
// // // // // //                 <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Short Description</h2>
// // // // // //                 <p className="text-gray-700 text-lg leading-relaxed">{product.shortDescription}</p>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {product.features && product.features.length > 0 && (
// // // // // //               <div className="mb-8">
// // // // // //                 <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Key Features</h2>
// // // // // //                 <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
// // // // // //                   {product.features.map((feature, index) => (
// // // // // //                     <li key={index}>{feature}</li>
// // // // // //                   ))}
// // // // // //                 </ul>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {/* Changed "Add to Cart" button to "Inquire" and made it redirect to /contact */}
// // // // // //             <Link
// // // // // //               to="/contact" // Redirect to the contact us page
// // // // // //               className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-xl font-medium text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg inline-flex items-center justify-center" // Added inline-flex, items-center, justify-center for consistent button styling when it becomes a link
// // // // // //             >
// // // // // //               Inquire
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       <Footer />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ProductDetailsPage;



// // // // // // // src/pages/ProductDetailsPage.tsx
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { useParams, Link, useNavigate } from 'react-router-dom';
// // // // // // import Navbar from '../components/Navbar';
// // // // // // import Footer from '../components/Footer';
// // // // // // import { Button } from '../components/ui/button';
// // // // // // import { Input } from '../components/ui/input';
// // // // // // import { useCart } from '../context/CartContext';
// // // // // // import { allDetailedProductsData, DetailedProduct } from '../data/allProductsData';
// // // // // // import { useToast } from '@/hooks/use-toast'; // Import useToast

// // // // // // const ProductDetailsPage: React.FC = () => {
// // // // // //   const { id } = useParams<{ id: string }>();
// // // // // //   const [mainImage, setMainImage] = useState<string>('');
// // // // // //   const [product, setProduct] = useState<DetailedProduct | null>(null);
// // // // // //   const [loading, setLoading] = useState<boolean>(true);
// // // // // //   const [quantity, setQuantity] = useState<number>(1);

// // // // // //   const { addToCart } = useCart();
// // // // // //   const { toast } = useToast(); // Initialize useToast

// // // // // //   useEffect(() => {
// // // // // //     setLoading(true);
// // // // // //     const foundProduct = allDetailedProductsData.find(p => p.id === id);
// // // // // //     if (foundProduct) {
// // // // // //       setProduct(foundProduct);
// // // // // //       setMainImage(foundProduct.imageUrl);
// // // // // //     } else {
// // // // // //       setProduct(null);
// // // // // //     }
// // // // // //     setLoading(false);
// // // // // //   }, [id]);

// // // // // //   const handleAddToCart = () => {
// // // // // //     if (product) {
// // // // // //       addToCart({
// // // // // //         id: product.id,
// // // // // //         title: product.name,
// // // // // //         image: product.imageUrl,
// // // // // //         quantity: quantity
// // // // // //       });
// // // // // //       // Replaced alert with toast notification
// // // // // //       toast({
// // // // // //         title: "Added to Cart!",
// // // // // //         description: `${quantity} x ${product.name} added to your inquiry cart.`,
// // // // // //         duration: 3000,
// // // // // //       });
// // // // // //     }
// // // // // //   };

// // // // // //   const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// // // // // //     const value = parseInt(event.target.value, 10);
// // // // // //     if (!isNaN(value) && value > 0) {
// // // // // //       setQuantity(value);
// // // // // //     } else if (event.target.value === '') {
// // // // // //       setQuantity(0);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleQuantityBlur = () => {
// // // // // //     if (quantity === 0 || isNaN(quantity)) {
// // // // // //       setQuantity(1);
// // // // // //     }
// // // // // //   };

// // // // // //   if (loading) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // // // //         Loading product details...
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   if (!product) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen bg-white font-inter">
// // // // // //         <Navbar />
// // // // // //         <div className="container mx-auto px-4 py-16 text-center">
// // // // // //           <h1 className="text-4xl font-bold text-red-600 mb-4">Product Not Found</h1>
// // // // // //           <p className="text-lg text-gray-700">The product you are looking for does not exist or has been removed.</p>
// // // // // //           <Link to="/products" className="text-blue-600 hover:underline mt-4 block">
// // // // // //             ← Back to all products
// // // // // //           </Link>
// // // // // //         </div>
// // // // // //         <Footer />
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-white font-inter">
// // // // // //       <Navbar />

// // // // // //       <div className="container mx-auto px-4 py-16">
// // // // // //         <Link to="/products" className="text-blue-600 hover:underline mb-8 inline-block">
// // // // // //           ← Back to all products
// // // // // //         </Link>
// // // // // //         <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center font-playfair">
// // // // // //           {product.name}
// // // // // //         </h1>

// // // // // //         <div className="flex flex-col lg:flex-row gap-12 items-start">
// // // // // //           <div className="lg:w-1/2 flex flex-col items-center">
// // // // // //             <img
// // // // // //               src={mainImage}
// // // // // //               alt={product.name}
// // // // // //               className="w-full max-h-[500px] object-contain rounded-lg shadow-xl mb-4 border border-gray-200"
// // // // // //             />
// // // // // //             {product.galleryImages && product.galleryImages.length > 0 && (
// // // // // //               <div className="grid grid-cols-4 gap-3 w-full max-w-lg">
// // // // // //                 {product.galleryImages.map((img, index) => (
// // // // // //                   <img
// // // // // //                     key={index}
// // // // // //                     src={img}
// // // // // //                     alt={`${product.name} gallery ${index + 1}`}
// // // // // //                     className={`w-full h-24 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 shadow-sm ${
// // // // // //                       img === mainImage ? 'border-blue-500' : 'border-gray-300 hover:border-blue-300'
// // // // // //                     }`}
// // // // // //                     onClick={() => setMainImage(img)}
// // // // // //                   />
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>

// // // // // //           <div className="lg:w-1/2">
// // // // // //             <div className="mb-6">
// // // // // //               <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Description</h2>
// // // // // //               <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
// // // // // //             </div>

// // // // // //             {product.shortDescription && (
// // // // // //               <div className="mb-6">
// // // // // //                 <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Short Description</h2>
// // // // // //                 <p className="text-gray-700 text-lg leading-relaxed">{product.shortDescription}</p>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {product.features && product.features.length > 0 && (
// // // // // //               <div className="mb-8">
// // // // // //                 <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Key Features</h2>
// // // // // //                 <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
// // // // // //                   {product.features.map((feature, index) => (
// // // // // //                     <li key={index}>{feature}</li>
// // // // // //                   ))}
// // // // // //                 </ul>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             <div className="mb-6 flex items-center gap-4">
// // // // // //               <label htmlFor="quantity" className="text-xl font-semibold text-gray-800">Quantity:</label>
// // // // // //               <Input
// // // // // //                 type="number"
// // // // // //                 id="quantity"
// // // // // //                 min="1"
// // // // // //                 value={quantity}
// // // // // //                 onChange={handleQuantityChange}
// // // // // //                 onBlur={handleQuantityBlur}
// // // // // //                 className="w-24 p-2 border border-gray-300 rounded-md text-center text-lg focus:ring-blue-500 focus:border-blue-500"
// // // // // //               />
// // // // // //             </div>

// // // // // //             <Button
// // // // // //               onClick={handleAddToCart}
// // // // // //               className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-xl font-medium text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg inline-flex items-center justify-center"
// // // // // //             >
// // // // // //               Add to Inquiry Cart
// // // // // //             </Button>

// // // // // //             {/* Inquire Button - Corrected Link to /contact-us */}
// // // // // //             <Link to="/contact-us" className="inline-block mt-4 md:mt-0 md:ml-4">
// // // // // //               <Button
// // // // // //                 variant="outline"
// // // // // //                 className="w-full md:w-auto border-gray-300 text-gray-700 hover:bg-gray-100 py-3 px-8 rounded-xl font-medium text-lg transition-all duration-300"
// // // // // //               >
// // // // // //                 Inquire About This Product
// // // // // //               </Button>
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       <Footer />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ProductDetailsPage;



// // // // // // // src/pages/ProductDetailsPage.tsx
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { useParams, Link, useNavigate } from 'react-router-dom';
// // // // // // import Navbar from '../components/Navbar';
// // // // // // import Footer from '../components/Footer';
// // // // // // import { Button } from '../components/ui/button';
// // // // // // import { Input } from '../components/ui/input';
// // // // // // import { useCart } from '../context/CartContext';
// // // // // // import { allDetailedProductsData, DetailedProduct } from '../data/allProductsData';
// // // // // // import { useToast } from '@/hooks/use-toast'; // Import useToast

// // // // // // const ProductDetailsPage: React.FC = () => {
// // // // // //   const { id } = useParams<{ id: string }>();
// // // // // //   const [mainImage, setMainImage] = useState<string>('');
// // // // // //   const [product, setProduct] = useState<DetailedProduct | null>(null);
// // // // // //   const [loading, setLoading] = useState<boolean>(true);
// // // // // //   // RE-ADDED: quantity state
// // // // // //   const [quantity, setQuantity] = useState<number>(1);

// // // // // //   const { addToCart } = useCart();
// // // // // //   const { toast } = useToast(); // Initialize useToast

// // // // // //   useEffect(() => {
// // // // // //     setLoading(true);
// // // // // //     const foundProduct = allDetailedProductsData.find(p => p.id === id);
// // // // // //     if (foundProduct) {
// // // // // //       setProduct(foundProduct);
// // // // // //       setMainImage(foundProduct.imageUrl);
// // // // // //     } else {
// // // // // //       setProduct(null);
// // // // // //     }
// // // // // //     setLoading(false);
// // // // // //   }, [id]);

// // // // // //   // RE-ADDED: handleAddToCart function
// // // // // //   const handleAddToCart = () => {
// // // // // //     if (product) {
// // // // // //       addToCart({
// // // // // //         id: product.id,
// // // // // //         title: product.name,
// // // // // //         image: product.imageUrl,
// // // // // //         quantity: quantity
// // // // // //       });
// // // // // //       toast({
// // // // // //         title: "Added to Cart!",
// // // // // //         description: `${quantity} x ${product.name} added to your inquiry cart.`,
// // // // // //         duration: 3000,
// // // // // //       });
// // // // // //     }
// // // // // //   };

// // // // // //   // RE-ADDED: Quantity change handlers
// // // // // //   const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// // // // // //     const value = parseInt(event.target.value, 10);
// // // // // //     if (!isNaN(value) && value > 0) {
// // // // // //       setQuantity(value);
// // // // // //     } else if (event.target.value === '') {
// // // // // //       setQuantity(0);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleQuantityBlur = () => {
// // // // // //     if (quantity === 0 || isNaN(quantity)) {
// // // // // //       setQuantity(1);
// // // // // //     }
// // // // // //   };

// // // // // //   if (loading) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // // // //         Loading product details...
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   if (!product) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen bg-white font-inter">
// // // // // //         <Navbar />
// // // // // //         <div className="container mx-auto px-4 py-16 text-center">
// // // // // //           <h1 className="text-4xl font-bold text-red-600 mb-4">Product Not Found</h1>
// // // // // //           <p className="text-lg text-gray-700">The product you are looking for does not exist or has been removed.</p>
// // // // // //           <Link to="/products" className="text-blue-600 hover:underline mt-4 block">
// // // // // //             ← Back to all products
// // // // // //           </Link>
// // // // // //         </div>
// // // // // //         <Footer />
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-white font-inter">
// // // // // //       <Navbar />

// // // // // //       <div className="container mx-auto px-4 py-16">
// // // // // //         <Link to="/products" className="text-blue-600 hover:underline mb-8 inline-block">
// // // // // //           ← Back to all products
// // // // // //         </Link>
// // // // // //         <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center font-playfair">
// // // // // //           {product.name}
// // // // // //         </h1>

// // // // // //         <div className="flex flex-col lg:flex-row gap-12 items-start">
// // // // // //           <div className="lg:w-1/2 flex flex-col items-center">
// // // // // //             <img
// // // // // //               src={mainImage}
// // // // // //               alt={product.name}
// // // // // //               className="w-full max-h-[500px] object-contain rounded-lg shadow-xl mb-4 border border-gray-200"
// // // // // //             />
// // // // // //             {product.galleryImages && product.galleryImages.length > 0 && (
// // // // // //               <div className="grid grid-cols-4 gap-3 w-full max-w-lg">
// // // // // //                 {product.galleryImages.map((img, index) => (
// // // // // //                   <img
// // // // // //                     key={index}
// // // // // //                     src={img}
// // // // // //                     alt={`${product.name} gallery ${index + 1}`}
// // // // // //                     className={`w-full h-24 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 shadow-sm ${
// // // // // //                       img === mainImage ? 'border-blue-500' : 'border-gray-300 hover:border-blue-300'
// // // // // //                     }`}
// // // // // //                     onClick={() => setMainImage(img)}
// // // // // //                   />
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>

// // // // // //           <div className="lg:w-1/2">
// // // // // //             <div className="mb-6">
// // // // // //               <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Description</h2>
// // // // // //               <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
// // // // // //             </div>

// // // // // //             {product.shortDescription && (
// // // // // //               <div className="mb-6">
// // // // // //                 <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Short Description</h2>
// // // // // //                 <p className="text-gray-700 text-lg leading-relaxed">{product.shortDescription}</p>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {product.features && product.features.length > 0 && (
// // // // // //               <div className="mb-8">
// // // // // //                 <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Key Features</h2>
// // // // // //                 <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
// // // // // //                   {product.features.map((feature, index) => (
// // // // // //                     <li key={index}>{feature}</li>
// // // // // //                   ))}
// // // // // //                 </ul>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {/* RE-ADDED: Quantity section */}
// // // // // //             <div className="mb-6 flex items-center gap-4">
// // // // // //               <label htmlFor="quantity" className="text-xl font-semibold text-gray-800">Quantity:</label>
// // // // // //               <Input
// // // // // //                 type="number"
// // // // // //                 id="quantity"
// // // // // //                 min="1"
// // // // // //                 value={quantity}
// // // // // //                 onChange={handleQuantityChange}
// // // // // //                 onBlur={handleQuantityBlur}
// // // // // //                 className="w-24 p-2 border border-gray-300 rounded-md text-center text-lg focus:ring-blue-500 focus:border-blue-500"
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* RE-ADDED: Add to Inquiry Cart button */}
// // // // // //             <Button
// // // // // //               onClick={handleAddToCart}
// // // // // //               className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-xl font-medium text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg inline-flex items-center justify-center"
// // // // // //             >
// // // // // //               Add to Inquiry Cart
// // // // // //             </Button>

// // // // // //             {/* Inquire Button - Corrected Link to /contact-us */}
// // // // // //             <Link to="/contact-us" className="inline-block mt-4 md:mt-0 md:ml-4">
// // // // // //               <Button
// // // // // //                 variant="outline"
// // // // // //                 className="w-full md:w-auto border-gray-300 text-gray-700 hover:bg-gray-100 py-3 px-8 rounded-xl font-medium text-lg transition-all duration-300"
// // // // // //               >
// // // // // //                 Inquire About This Product
// // // // // //               </Button>
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       <Footer />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ProductDetailsPage;




// // // // // // // src/pages/ProductDetailsPage.tsx
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { useParams, Link, useNavigate } from 'react-router-dom';
// // // // // // import Navbar from '../components/Navbar';
// // // // // // import Footer from '../components/Footer';
// // // // // // import { Button } from '../components/ui/button';
// // // // // // import { Input } from '../components/ui/input';
// // // // // // import { useCart } from '../context/CartContext';
// // // // // // import { allDetailedProductsData, DetailedProduct } from '../data/allProductsData';
// // // // // // import { useToast } from '@/hooks/use-toast'; // Import useToast

// // // // // // const ProductDetailsPage: React.FC = () => {
// // // // // //   const { id } = useParams<{ id: string }>();
// // // // // //   const [mainImage, setMainImage] = useState<string>('');
// // // // // //   const [product, setProduct] = useState<DetailedProduct | null>(null);
// // // // // //   const [loading, setLoading] = useState<boolean>(true);
// // // // // //   // REMOVED: quantity state as it's no longer user-selectable
// // // // // //   // const [quantity, setQuantity] = useState<number>(1);

// // // // // //   const { addToCart } = useCart();
// // // // // //   const { toast } = useToast(); // Initialize useToast

// // // // // //   useEffect(() => {
// // // // // //     setLoading(true);
// // // // // //     const foundProduct = allDetailedProductsData.find(p => p.id === id);
// // // // // //     if (foundProduct) {
// // // // // //       setProduct(foundProduct);
// // // // // //       setMainImage(foundProduct.imageUrl);
// // // // // //     } else {
// // // // // //       setProduct(null);
// // // // // //     }
// // // // // //     setLoading(false);
// // // // // //   }, [id]);

// // // // // //   // MODIFIED: handleAddToCart function to always add quantity of 1
// // // // // //   const handleAddToCart = () => {
// // // // // //     if (product) {
// // // // // //       addToCart({
// // // // // //         id: product.id,
// // // // // //         title: product.name,
// // // // // //         image: product.imageUrl,
// // // // // //         quantity: 1 // Always add 1, as quantity selection is removed
// // // // // //       });
// // // // // //       toast({
// // // // // //         title: "Added to Cart!",
// // // // // //         description: `1 x ${product.name} added to your inquiry cart.`,
// // // // // //         duration: 3000,
// // // // // //       });
// // // // // //     }
// // // // // //   };

// // // // // //   // REMOVED: Quantity change handlers as the input is removed
// // // // // //   /*
// // // // // //   const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// // // // // //     const value = parseInt(event.target.value, 10);
// // // // // //     if (!isNaN(value) && value > 0) {
// // // // // //       setQuantity(value);
// // // // // //     } else if (event.target.value === '') {
// // // // // //       setQuantity(0);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleQuantityBlur = () => {
// // // // // //     if (quantity === 0 || isNaN(quantity)) {
// // // // // //       setQuantity(1);
// // // // // //     }
// // // // // //   };
// // // // // //   */

// // // // // //   if (loading) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // // // //         Loading product details...
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   if (!product) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen bg-white font-inter">
// // // // // //         <Navbar />
// // // // // //         <div className="container mx-auto px-4 py-16 text-center">
// // // // // //           <h1 className="text-4xl font-bold text-red-600 mb-4">Product Not Found</h1>
// // // // // //           <p className="text-lg text-gray-700">The product you are looking for does not exist or has been removed.</p>
// // // // // //           <Link to="/products" className="text-blue-600 hover:underline mt-4 block">
// // // // // //             ← Back to all products
// // // // // //           </Link>
// // // // // //         </div>
// // // // // //         <Footer />
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-white font-inter">
// // // // // //       <Navbar />

// // // // // //       <div className="container mx-auto px-4 py-16">
// // // // // //         <Link to="/products" className="text-blue-600 hover:underline mb-8 inline-block">
// // // // // //           ← Back to all products
// // // // // //         </Link>
// // // // // //         <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center font-playfair">
// // // // // //           {product.name}
// // // // // //         </h1>

// // // // // //         <div className="flex flex-col lg:flex-row gap-12 items-start">
// // // // // //           <div className="lg:w-1/2 flex flex-col items-center">
// // // // // //             <img
// // // // // //               src={mainImage}
// // // // // //               alt={product.name}
// // // // // //               className="w-full max-h-[500px] object-contain rounded-lg shadow-xl mb-4 border border-gray-200"
// // // // // //             />
// // // // // //             {product.galleryImages && product.galleryImages.length > 0 && (
// // // // // //               <div className="grid grid-cols-4 gap-3 w-full max-w-lg">
// // // // // //                 {product.galleryImages.map((img, index) => (
// // // // // //                   <img
// // // // // //                     key={index}
// // // // // //                     src={img}
// // // // // //                     alt={`${product.name} gallery ${index + 1}`}
// // // // // //                     className={`w-full h-24 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 shadow-sm ${
// // // // // //                       img === mainImage ? 'border-blue-500' : 'border-gray-300 hover:border-blue-300'
// // // // // //                     }`}
// // // // // //                     onClick={() => setMainImage(img)}
// // // // // //                   />
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>

// // // // // //           <div className="lg:w-1/2">
// // // // // //             <div className="mb-6">
// // // // // //               <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Description</h2>
// // // // // //               <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
// // // // // //             </div>

// // // // // //             {product.shortDescription && (
// // // // // //               <div className="mb-6">
// // // // // //                 <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Short Description</h2>
// // // // // //                 <p className="text-gray-700 text-lg leading-relaxed">{product.shortDescription}</p>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {product.features && product.features.length > 0 && (
// // // // // //               <div className="mb-8">
// // // // // //                 <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Key Features</h2>
// // // // // //                 <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
// // // // // //                   {product.features.map((feature, index) => (
// // // // // //                     <li key={index}>{feature}</li>
// // // // // //                   ))}
// // // // // //                 </ul>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {/* REMOVED: Quantity section */}
// // // // // //             {/*
// // // // // //             <div className="mb-6 flex items-center gap-4">
// // // // // //               <label htmlFor="quantity" className="text-xl font-semibold text-gray-800">Quantity:</label>
// // // // // //               <Input
// // // // // //                 type="number"
// // // // // //                 id="quantity"
// // // // // //                 min="1"
// // // // // //                 value={quantity}
// // // // // //                 onChange={handleQuantityChange}
// // // // // //                 onBlur={handleQuantityBlur}
// // // // // //                 className="w-24 p-2 border border-gray-300 rounded-md text-center text-lg focus:ring-blue-500 focus:border-blue-500"
// // // // // //               />
// // // // // //             </div>
// // // // // //             */}

// // // // // //             {/* RE-ADDED: Add to Inquiry Cart button */}
// // // // // //             <Button
// // // // // //               onClick={handleAddToCart}
// // // // // //               className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-xl font-medium text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg inline-flex items-center justify-center"
// // // // // //             >
// // // // // //               Add to Inquiry Cart
// // // // // //             </Button>

// // // // // //             {/* Inquire Button - Corrected Link to /contact-us */}
// // // // // //             <Link to="/contact-us" className="inline-block mt-4 md:mt-0 md:ml-4">
// // // // // //               <Button
// // // // // //                 variant="outline"
// // // // // //                 className="w-full md:w-auto border-gray-300 text-gray-700 hover:bg-gray-100 py-3 px-8 rounded-xl font-medium text-lg transition-all duration-300"
// // // // // //               >
// // // // // //                 Inquire About This Product
// // // // // //               </Button>
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       <Footer />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ProductDetailsPage;



// // // // // // // src/pages/ProductDetailsPage.tsx
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { useParams, Link, useNavigate } from 'react-router-dom';
// // // // // // import Navbar from '../components/Navbar';
// // // // // // import Footer from '../components/Footer';
// // // // // // import { Button } from '../components/ui/button';
// // // // // // import { Input } from '../components/ui/input';
// // // // // // import { useCart } from '../context/CartContext';
// // // // // // import { allDetailedProductsData, DetailedProduct } from '../data/allProductsData';
// // // // // // import { useToast } from '@/hooks/use-toast'; // Import useToast

// // // // // // const ProductDetailsPage: React.FC = () => {
// // // // // //   const { id } = useParams<{ id: string }>();
// // // // // //   const [mainImage, setMainImage] = useState<string>('');
// // // // // //   const [product, setProduct] = useState<DetailedProduct | null>(null);
// // // // // //   const [loading, setLoading] = useState<boolean>(true);
// // // // // //   // REMOVED: quantity state as it's no longer user-selectable
// // // // // //   // const [quantity, setQuantity] = useState<number>(1);

// // // // // //   const { addToCart } = useCart();
// // // // // //   const { toast } = useToast(); // Initialize useToast
// // // // // //   const navigate = useNavigate(); // Initialize useNavigate hook

// // // // // //   useEffect(() => {
// // // // // //     setLoading(true);
// // // // // //     const foundProduct = allDetailedProductsData.find(p => p.id === id);
// // // // // //     if (foundProduct) {
// // // // // //       setProduct(foundProduct);
// // // // // //       setMainImage(foundProduct.imageUrl);
// // // // // //     } else {
// // // // // //       setProduct(null);
// // // // // //     }
// // // // // //     setLoading(false);
// // // // // //   }, [id]);

// // // // // //   // MODIFIED: handleAddToCart function to always add quantity of 1 and then navigate to cart
// // // // // //   const handleAddToCart = () => {
// // // // // //     if (product) {
// // // // // //       addToCart({
// // // // // //         id: product.id,
// // // // // //         title: product.name,
// // // // // //         image: product.imageUrl,
// // // // // //         quantity: 1 // Always add 1, as quantity selection is removed
// // // // // //       });
// // // // // //       toast({
// // // // // //         title: "Added to Cart!",
// // // // // //         description: `1 x ${product.name} added to your inquiry cart.`,
// // // // // //         duration: 3000,
// // // // // //       });
// // // // // //       navigate('/cart'); // Navigate to the cart page after adding to cart
// // // // // //     }
// // // // // //   };

// // // // // //   // REMOVED: Quantity change handlers as the input is removed
// // // // // //   /*
// // // // // //   const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// // // // // //     const value = parseInt(event.target.value, 10);
// // // // // //     if (!isNaN(value) && value > 0) {
// // // // // //       setQuantity(value);
// // // // // //     } else if (event.target.value === '') {
// // // // // //       setQuantity(0);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleQuantityBlur = () => {
// // // // // //     if (quantity === 0 || isNaN(quantity)) {
// // // // // //       setQuantity(1);
// // // // // //     }
// // // // // //   };
// // // // // //   */

// // // // // //   if (loading) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // // // //         Loading product details...
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   if (!product) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen bg-white font-inter">
// // // // // //         <Navbar />
// // // // // //         <div className="container mx-auto px-4 py-16 text-center">
// // // // // //           <h1 className="text-4xl font-bold text-red-600 mb-4">Product Not Found</h1>
// // // // // //           <p className="text-lg text-gray-700">The product you are looking for does not exist or has been removed.</p>
// // // // // //           <Link to="/products" className="text-blue-600 hover:underline mt-4 block">
// // // // // //             ← Back to all products
// // // // // //           </Link>
// // // // // //         </div>
// // // // // //         <Footer />
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-white font-inter">
// // // // // //       <Navbar />

// // // // // //       <div className="container mx-auto px-4 py-16">
// // // // // //         <Link to="/products" className="text-blue-600 hover:underline mb-8 inline-block">
// // // // // //           ← Back to all products
// // // // // //         </Link>
// // // // // //         <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center font-playfair">
// // // // // //           {product.name}
// // // // // //         </h1>

// // // // // //         <div className="flex flex-col lg:flex-row gap-12 items-start">
// // // // // //           <div className="lg:w-1/2 flex flex-col items-center">
// // // // // //             <img
// // // // // //               src={mainImage}
// // // // // //               alt={product.name}
// // // // // //               className="w-full max-h-[500px] object-contain rounded-lg shadow-xl mb-4 border border-gray-200"
// // // // // //             />
// // // // // //             {product.galleryImages && product.galleryImages.length > 0 && (
// // // // // //               <div className="grid grid-cols-4 gap-3 w-full max-w-lg">
// // // // // //                 {product.galleryImages.map((img, index) => (
// // // // // //                   <img
// // // // // //                     key={index}
// // // // // //                     src={img}
// // // // // //                     alt={`${product.name} gallery ${index + 1}`}
// // // // // //                     className={`w-full h-24 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 shadow-sm ${
// // // // // //                       img === mainImage ? 'border-blue-500' : 'border-gray-300 hover:border-blue-300'
// // // // // //                     }`}
// // // // // //                     onClick={() => setMainImage(img)}
// // // // // //                   />
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>

// // // // // //           <div className="lg:w-1/2">
// // // // // //             <div className="mb-6">
// // // // // //               <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Description</h2>
// // // // // //               <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
// // // // // //             </div>

// // // // // //             {product.shortDescription && (
// // // // // //               <div className="mb-6">
// // // // // //                 <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Short Description</h2>
// // // // // //                 <p className="text-gray-700 text-lg leading-relaxed">{product.shortDescription}</p>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {product.features && product.features.length > 0 && (
// // // // // //               <div className="mb-8">
// // // // // //                 <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Key Features</h2>
// // // // // //                 <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
// // // // // //                   {product.features.map((feature, index) => (
// // // // // //                     <li key={index}>{feature}</li>
// // // // // //                   ))}
// // // // // //                 </ul>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {/* REMOVED: Quantity section */}
// // // // // //             {/*
// // // // // //             <div className="mb-6 flex items-center gap-4">
// // // // // //               <label htmlFor="quantity" className="text-xl font-semibold text-gray-800">Quantity:</label>
// // // // // //               <Input
// // // // // //                 type="number"
// // // // // //                 id="quantity"
// // // // // //                 min="1"
// // // // // //                 value={quantity}
// // // // // //                 onChange={handleQuantityChange}
// // // // // //                 onBlur={handleQuantityBlur}
// // // // // //                 className="w-24 p-2 border border-gray-300 rounded-md text-center text-lg focus:ring-blue-500 focus:border-blue-500"
// // // // // //               />
// // // // // //             </div>
// // // // // //             */}

// // // // // //             {/* RE-ADDED: Add to Inquiry Cart button */}
// // // // // //             <Button
// // // // // //               onClick={handleAddToCart}
// // // // // //               className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-xl font-medium text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg inline-flex items-center justify-center"
// // // // // //             >
// // // // // //               Add to Inquiry Cart
// // // // // //             </Button>

// // // // // //             {/* Inquire Button - Corrected Link to /contact-us */}
// // // // // //             <Link to="/contact-us" className="inline-block mt-4 md:mt-0 md:ml-4">
// // // // // //               <Button
// // // // // //                 variant="outline"
// // // // // //                 className="w-full md:w-auto border-gray-300 text-gray-700 hover:bg-gray-100 py-3 px-8 rounded-xl font-medium text-lg transition-all duration-300"
// // // // // //               >
// // // // // //                 Inquire About This Product
// // // // // //               </Button>
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       <Footer />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ProductDetailsPage;





// // // // // // src/pages/ProductDetailsPage.tsx
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { useParams, Link, useNavigate } from 'react-router-dom';
// // // // // import Navbar from '../components/Navbar';
// // // // // import Footer from '../components/Footer';
// // // // // import { Button } from '../components/ui/button';
// // // // // import { Input } from '../components/ui/input'; // Input is still imported but not used directly in current JSX
// // // // // import { useCart } from '../context/CartContext';
// // // // // import { allDetailedProductsData, DetailedProduct } from '../data/allProductsData';
// // // // // import { useToast } from '@/hooks/use-toast'; // Import useToast

// // // // // const ProductDetailsPage: React.FC = () => {
// // // // //   const { id } = useParams<{ id: string }>();
// // // // //   const [mainImage, setMainImage] = useState<string>('');
// // // // //   const [product, setProduct] = useState<DetailedProduct | null>(null);
// // // // //   const [loading, setLoading] = useState<boolean>(true);

// // // // //   const { addToCart } = useCart();
// // // // //   const { toast } = useToast();
// // // // //   const navigate = useNavigate();

// // // // //   useEffect(() => {
// // // // //     setLoading(true);
// // // // //     const foundProduct = allDetailedProductsData.find(p => p.id === id);
// // // // //     if (foundProduct) {
// // // // //       setProduct(foundProduct);
// // // // //       setMainImage(foundProduct.imageUrl);
// // // // //     } else {
// // // // //       setProduct(null);
// // // // //     }
// // // // //     setLoading(false);
// // // // //   }, [id]);

// // // // //   const handleAddToCart = () => {
// // // // //     if (product) {
// // // // //       addToCart({
// // // // //         id: product.id,
// // // // //         title: product.name,
// // // // //         image: product.imageUrl,
// // // // //         quantity: 1
// // // // //       });
// // // // //       toast({
// // // // //         title: "Added to Cart!",
// // // // //         description: `1 x ${product.name} added to your inquiry cart.`,
// // // // //         duration: 3000,
// // // // //       });
// // // // //       navigate('/cart');
// // // // //     }
// // // // //   };

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // // //         Loading product details...
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   if (!product) {
// // // // //     return (
// // // // //       <div className="min-h-screen bg-white font-inter">
// // // // //         <Navbar />
// // // // //         <div className="container mx-auto px-4 py-16 text-center">
// // // // //           <h1 className="text-4xl font-bold text-red-600 mb-4">Product Not Found</h1>
// // // // //           <p className="text-lg text-gray-700">The product you are looking for does not exist or has been removed.</p>
// // // // //           <Link to="/products" className="text-blue-600 hover:underline mt-4 block">
// // // // //             ← Back to all products
// // // // //           </Link>
// // // // //         </div>
// // // // //         <Footer />
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="min-h-screen bg-white font-inter">
// // // // //       <Navbar />

// // // // //       <div className="container mx-auto px-4 py-16">
// // // // //         <Link to="/products" className="text-blue-600 hover:underline mb-8 inline-block">
// // // // //           ← Back to all products
// // // // //         </Link>
// // // // //         <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center font-playfair">
// // // // //           {product.name}
// // // // //         </h1>

// // // // //         <div className="flex flex-col lg:flex-row gap-12 items-start">
// // // // //           <div className="lg:w-1/2 flex flex-col items-center">
// // // // //             <img
// // // // //               src={mainImage}
// // // // //               alt={product.name}
// // // // //               className="w-full max-h-[500px] object-contain rounded-lg shadow-xl mb-4 border border-gray-200"
// // // // //             />
// // // // //             {product.galleryImages && product.galleryImages.length > 0 && (
// // // // //               <div className="grid grid-cols-4 gap-3 w-full max-w-lg">
// // // // //                 {product.galleryImages.map((img, index) => (
// // // // //                   <img
// // // // //                     key={index}
// // // // //                     src={img}
// // // // //                     alt={`${product.name} gallery ${index + 1}`}
// // // // //                     className={`w-full h-24 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 shadow-sm ${
// // // // //                       img === mainImage ? 'border-blue-500' : 'border-gray-300 hover:border-blue-300'
// // // // //                     }`}
// // // // //                     onClick={() => setMainImage(img)}
// // // // //                   />
// // // // //                 ))}
// // // // //               </div>
// // // // //             )}
// // // // //           </div>

// // // // //           <div className="lg:w-1/2">
// // // // //             <div className="mb-6">
// // // // //               <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Description</h2>
// // // // //               <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
// // // // //             </div>

// // // // //             {product.shortDescription && (
// // // // //               <div className="mb-6">
// // // // //                 <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Short Description</h2>
// // // // //                 <p className="text-gray-700 text-lg leading-relaxed">{product.shortDescription}</p>
// // // // //               </div>
// // // // //             )}

// // // // //             {product.features && product.features.length > 0 && (
// // // // //               <div className="mb-8">
// // // // //                 <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Key Features</h2>
// // // // //                 <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
// // // // //                   {product.features.map((feature, index) => (
// // // // //                     <li key={index}>{feature}</li>
// // // // //                   ))}
// // // // //                 </ul>
// // // // //               </div>
// // // // //             )}

// // // // //             {/* NEW: Display Specifications Section */}
// // // // //             {product.specifications && Object.keys(product.specifications).length > 0 && (
// // // // //               <div className="mb-8">
// // // // //                 <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Specifications</h2>
// // // // //                 <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
// // // // //                   {Object.entries(product.specifications).map(([key, value]) => (
// // // // //                     <li key={key}>
// // // // //                       <strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</strong> {value}
// // // // //                     </li>
// // // // //                   ))}
// // // // //                 </ul>
// // // // //               </div>
// // // // //             )}
// // // // //             {/* End of NEW section */}

// // // // //             <Button
// // // // //               onClick={handleAddToCart}
// // // // //               className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-xl font-medium text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg inline-flex items-center justify-center"
// // // // //             >
// // // // //               Add to Inquiry Cart
// // // // //             </Button>

// // // // //             <Link to="/contact-us" className="inline-block mt-4 md:mt-0 md:ml-4">
// // // // //               <Button
// // // // //                 variant="outline"
// // // // //                 className="w-full md:w-auto border-gray-300 text-gray-700 hover:bg-gray-100 py-3 px-8 rounded-xl font-medium text-lg transition-all duration-300"
// // // // //               >
// // // // //                 Inquire About This Product
// // // // //               </Button>
// // // // //             </Link>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //       <Footer />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProductDetailsPage;




// src/pages/ProductDetailsPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allDetailedProductsData, DetailedProduct } from '../data/allProductsData';

// Import Navbar and Footer components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import the useCart hook from your CartContext
import { useCart } from '../context/CartContext'; // Ensure this path is correct based on your actual file structure


const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [mainImage, setMainImage] = useState<string>('');
  const [product, setProduct] = useState<DetailedProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1); // State for quantity, default to 1

  // Destructure addToCart from the useCart hook
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    // Find the product by ID. Ensure ID is correctly typed for comparison.
    const foundProduct = allDetailedProductsData.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.imageUrl); // Set main image when product is found
    } else {
      setProduct(null); // Explicitly set to null if not found
    }
    setLoading(false);
  }, [id]); // Depend on ID, so it re-runs if the URL parameter changes

  // Function to handle adding the product to the inquiry cart
  const handleAddToCart = () => {
    if (product) {
      // Since prices are removed, we don't pass a price to addToCart
      addToCart({
        id: product.id,
        title: product.name, // Using 'name' as 'title' for the cart item
        image: product.imageUrl, // Use main imageUrl for the cart item image
        quantity: quantity
      });
      alert(`${quantity} x ${product.name} added to your inquiry cart!`);
    }
  };

  // Handler for quantity input changes
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    // Only allow positive integers or an empty string temporarily
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else if (event.target.value === '') {
      // Allow the input to be temporarily empty (e.g., user is typing)
      setQuantity(0); // Set to 0 to indicate invalid or incomplete input
    }
  };

  // Handler for when the quantity input loses focus (blur)
  const handleQuantityBlur = () => {
    // If the quantity is 0 or NaN (from an empty input), reset it to 1
    if (quantity === 0 || isNaN(quantity)) {
      setQuantity(1);
    }
  };


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        Loading product details...
      </div>
    );
  }

  // Render Navbar and Footer even if product is not found
  if (!product) {
    return (
      <div className="min-h-screen bg-white font-inter">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Product Not Found</h1>
          <p className="text-lg text-gray-700">The product you are looking for does not exist or has been removed.</p>
          <Link to="/products" className="text-blue-600 hover:underline mt-4 block">
            ← Back to all products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <Link to="/products" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to all products
        </Link>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center font-playfair">
          {product.name}
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Product Image Gallery */}
          <div className="lg:w-1/2 flex flex-col items-center">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full max-h-[500px] object-contain rounded-lg shadow-xl mb-4 border border-gray-200"
            />
            {product.galleryImages && product.galleryImages.length > 0 && (
              <div className="grid grid-cols-4 gap-3 w-full max-w-lg">
                {product.galleryImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.name} gallery ${index + 1}`}
                    className={`w-full h-24 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 shadow-sm ${
                      img === mainImage ? 'border-blue-500' : 'border-gray-300 hover:border-blue-300'
                    }`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Description</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
            </div>

            {product.shortDescription && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Short Description</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{product.shortDescription}</p>
              </div>
            )}

            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-playfair">Key Features</h2>
                <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Price Display Section is now correctly removed */}

            {/* Quantity Input */}
            <div className="mb-6 flex items-center gap-4">
              <label htmlFor="quantity" className="text-xl font-semibold text-gray-800">Quantity:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                onBlur={handleQuantityBlur}
                className="w-24 p-2 border border-gray-300 rounded-md text-center text-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Add to Inquiry Cart Button */}
            <button
              onClick={handleAddToCart} // Call the handleAddToCart function
              className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-xl font-medium text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg inline-flex items-center justify-center"
            >
              Add to Inquiry Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;


// // src/pages/ProductDetailsPage.tsx
// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// // Corrected import path for allDetailedProductsData and DetailedProduct
// import { allDetailedProductsData, DetailedProduct } from '../data/allProductsData'; 
// import { Button } from '../components/ui/button';
// import { Card, CardContent } from '../components/ui/card';
// // Import Navbar and Footer components
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const ProductDetailsPage: React.FC = () => {
//   // Destructure all relevant params from the URL. 
//   // 'category' and 'subCategory' are now correctly extracted for breadcrumbs.
//   const { id, category, subCategory } = useParams<{ id: string; category?: string; subCategory?: string }>();
  
//   const [mainImage, setMainImage] = useState<string>('');
//   const [product, setProduct] = useState<DetailedProduct | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     setLoading(true);
//     // Find the product by ID from the imported data
//     const foundProduct = allDetailedProductsData.find(p => p.id === id); 
//     if (foundProduct) {
//       setProduct(foundProduct);
//       setMainImage(foundProduct.imageUrl); // Set main image when product is found
//     } else {
//       setProduct(null); // Explicitly set to null if not found
//     }
//     setLoading(false);
//   }, [id]); // Re-run effect if the product ID in the URL changes

//   // Helper function to convert slug (e.g., 'copper-items') to a readable format (e.g., 'Copper Items')
//   const getReadableName = (slug?: string) => {
//     if (!slug) return '';
//     return slug
//       .split('-') // Split by hyphen
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
//       .join(' '); // Join words with space
//   };

//   // Render Navbar and Footer always, regardless of loading state or product existence
//   return (
//     // Applied dark background to match the example image more closely
//     <div className="min-h-screen bg-neutral-900 text-white font-inter">
//       <Navbar />

//       {loading ? (
//         // Loading state
//         <div className="flex items-center justify-center min-h-[calc(100vh-120px)]"> {/* Adjust height based on Navbar/Footer */}
//           <p className="text-xl text-gray-300">Loading product details...</p>
//         </div>
//       ) : !product ? (
//         // Product not found state
//         <div className="container mx-auto px-4 py-16 text-center">
//           <h1 className="text-4xl font-bold text-red-500 mb-4 font-playfair">Product Not Found</h1>
//           <p className="text-lg text-gray-300">The product you are looking for does not exist or has been removed.</p>
//           <Link to="/products" className="text-blue-400 hover:underline mt-4 block">
//             ← Back to all products
//           </Link>
//         </div>
//       ) : (
//         // Product details display
//         <div className="container mx-auto px-4 py-16">
//           {/* Breadcrumbs section - dynamically generated based on URL parameters */}
//           <div className="text-gray-400 text-sm mb-6">
//             <Link to="/" className="hover:underline text-blue-400">Home</Link>
//             <span className="mx-1">/</span>
//             <Link to="/products" className="hover:underline text-blue-400">Products</Link>
//             {category && ( // Only show category if it exists in the URL params
//               <>
//                 <span className="mx-1">/</span>
//                 <Link to={`/products/${category}`} className="hover:underline text-blue-400">
//                   {getReadableName(category)} {/* Display readable category name */}
//                 </Link>
//               </>
//             )}
//             {subCategory && ( // Only show subCategory if it exists in the URL params
//               <>
//                 <span className="mx-1">/</span>
//                 <Link to={`/products/${category}/${subCategory}`} className="hover:underline text-blue-400">
//                   {getReadableName(subCategory)} {/* Display readable subCategory name */}
//                 </Link>
//               </>
//             )}
//             <span className="mx-1">/</span>
//             <span className="text-white font-semibold">{product.name}</span> {/* Current product name */}
//           </div>

//           <h1 className="text-5xl font-extrabold text-white mb-8 text-center font-playfair">
//             {product.name}
//           </h1>

//           {/* Main content area: image gallery and product details */}
//           {/* Background changed to a slightly lighter dark for contrast */}
//           <div className="flex flex-col lg:flex-row gap-12 items-start bg-white p-8 rounded-lg shadow-xl">
//             {/* Product Image Gallery */}
//             {/* Inner dark background for image section */}
//             <div className="lg:w-1/2 flex flex-col items-center p-4 rounded-lg bg-gray-50">
//               <img
//                 src={mainImage}
//                 alt={product.name}
//                 className="w-full max-h-[500px] object-contain rounded-lg shadow-xl mb-4 border border-gray-300"
//               />
//               {/* Thumbnail gallery */}
//               {product.galleryImages && product.galleryImages.length > 0 && (
//                 <div className="grid grid-cols-4 gap-3 w-full max-w-lg">
//                   {product.galleryImages.map((img, index) => (
//                     <img
//                       key={index}
//                       src={img}
//                       alt={`${product.name} gallery ${index + 1}`}
//                       className={`w-full h-24 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 shadow-sm ${
//                         // Highlight active image with amber border, others with neutral border
//                         img === mainImage ? 'border-amber-500' : 'border-neutral-600 hover:border-amber-300' 
//                       }`}
//                       onClick={() => setMainImage(img)} // Change main image on thumbnail click
//                     />
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Product Details Section */}
//             {/* Inner dark background for details section */}
//             <div className="lg:w-1/2 p-4 rounded-lg bg-neutral-700">
//               {/* Display price. Assuming product.price already contains '₹ ' */}
//               <p className="text-amber-500 text-3xl font-bold mb-4">{product.price}</p> 

//               {/* Description section */}
//               <div className="mb-6">
//                 {/* Heading color changed to amber for consistency with example image */}
//                 <h2 className="text-2xl font-semibold text-amber-400 mb-3 font-playfair">Description</h2>
//                 <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>
//               </div>

//               {/* Removed the separate 'Short Description' section as it's often redundant on detail pages.
//                   The main 'description' should suffice for full details. */}

//               {/* Key Features section */}
//               {product.features && product.features.length > 0 && (
//                 <div className="mb-8">
//                   {/* Heading color changed to amber for consistency */}
//                   <h2 className="text-2xl font-semibold text-amber-400 mb-3 font-playfair">Key Features</h2>
//                   <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
//                     {product.features.map((feature, index) => (
//                       <li key={index}>{feature}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {/* Add to Cart Button - styled to match the yellowish/gold button in the example image */}
//               <button className="w-full md:w-auto bg-amber-500 text-neutral-900 py-3 px-8 rounded-xl font-medium text-lg hover:bg-amber-600 transition-all duration-300 shadow-lg">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default ProductDetailsPage;





// // // // "use client"




// import { useState } from "react"
// import { useParams, Link } from "react-router-dom"
// import { allDetailedProductsData } from "../data/allProductsData"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import { Button } from "../components/ui/button"
// import { Badge } from "../components/ui/badge"
// import { Card, CardContent } from "../components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
// import { ArrowLeft, Star, Shield, Truck, Award, Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react"

// const ProductDetailsPage = () => {
//   const { id } = useParams<{ id: string }>()
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0)

//   const product = allDetailedProductsData.find((p) => p.id === id)

//   if (!product) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//         <Navbar />
//         <div className="container mx-auto px-4 py-20 text-center">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Product Not Found</h1>
//           <p className="text-lg text-gray-600 mb-8 font-inter">The product you're looking for doesn't exist.</p>
//           <Button
//             asChild
//             className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
//           >
//             <Link to="/products">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Products
//             </Link>
//           </Button>
//         </div>
//         <Footer />
//       </div>
//     )
//   }

//   const formatCategoryName = (slug: string) => {
//     const names = {
//       "copper-items": "Copper Items",
//       "bar-accessories": "Bar Accessories",
//       "bagas-disposables": "Bagas Disposables",
//     }
//     return (
//       names[slug as keyof typeof names] ||
//       slug
//         .split("-")
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ")
//     )
//   }

//   const relatedProducts = allDetailedProductsData
//     .filter((p) => p.category === product.category && p.id !== product.id)
//     .slice(0, 4)

//   const nextImage = () => {
//     setSelectedImageIndex((prev) => (prev === product.galleryImages.length - 1 ? 0 : prev + 1))
//   }

//   const prevImage = () => {
//     setSelectedImageIndex((prev) => (prev === 0 ? product.galleryImages.length - 1 : prev - 1))
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       <Navbar />

//       {/* Breadcrumb */}
//       <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-white/50">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center space-x-2 text-sm font-inter">
//             <Link to="/products" className="text-gray-600 hover:text-blue-600 transition-colors">
//               Products
//             </Link>
//             <span className="text-gray-400">/</span>
//             <Link to={`/category/${product.category}`} className="text-gray-600 hover:text-blue-600 transition-colors">
//               {formatCategoryName(product.category)}
//             </Link>
//             <span className="text-gray-400">/</span>
//             <span className="text-gray-900 font-medium">{product.name}</span>
//           </div>
//         </div>
//       </section>

//       {/* Product Details */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Image Gallery */}
//             <div className="space-y-4">
//               <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
//                 <img
//                   src={product.galleryImages[selectedImageIndex] || product.imageUrl}
//                   alt={product.name}
//                   className="w-full h-96 lg:h-[500px] object-cover"
//                 />
//                 {product.galleryImages.length > 1 && (
//                   <>
//                     <button
//                       onClick={prevImage}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
//                     >
//                       <ChevronLeft className="h-5 w-5 text-gray-600" />
//                     </button>
//                     <button
//                       onClick={nextImage}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
//                     >
//                       <ChevronRight className="h-5 w-5 text-gray-600" />
//                     </button>
//                   </>
//                 )}
//               </div>

//               {/* Thumbnail Gallery */}
//               {product.galleryImages.length > 1 && (
//                 <div className="flex space-x-2 overflow-x-auto">
//                   {product.galleryImages.map((image, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setSelectedImageIndex(index)}
//                       className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
//                         selectedImageIndex === index
//                           ? "border-blue-500 shadow-lg"
//                           : "border-gray-200 hover:border-gray-300"
//                       }`}
//                     >
//                       <img
//                         src={image || "/placeholder.svg"}
//                         alt={`${product.name} ${index + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Product Info */}
//             <div className="space-y-6">
//               <div>
//                 <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
//                   {formatCategoryName(product.category)}
//                 </Badge>
//                 <h1 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">{product.name}</h1>
//                 <div className="flex items-center space-x-4 mb-4">
//                   <div className="flex items-center space-x-1">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
//                     ))}
//                     <span className="text-sm text-gray-500 ml-2 font-inter">(4.8)</span>
//                   </div>
//                   <span className="text-gray-400">•</span>
//                   <span className="text-sm text-gray-600 font-inter">Premium Quality</span>
//                 </div>
//                 <p className="text-lg text-gray-600 font-inter leading-relaxed">{product.description}</p>
//               </div>

//               {/* Features */}
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3 font-playfair">Key Features</h3>
//                 <ul className="space-y-2">
//                   {product.features.map((feature, index) => (
//                     <li key={index} className="flex items-center text-gray-600 font-inter">
//                       <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Action Buttons */}
//               <div className="space-y-4">
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <Button
//                     asChild
//                     size="lg"
//                     className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 font-inter"
//                   >
//                     <Link to="/contact-us">Get Quote & Details</Link>
//                   </Button>
//                   <Button
//                     variant="outline"
//                     size="lg"
//                     className="flex-1 border-gray-300 hover:bg-gray-50 transition-all duration-200 font-inter bg-transparent"
//                   >
//                     <Heart className="mr-2 h-4 w-4" />
//                     Add to Wishlist
//                   </Button>
//                 </div>
//                 <Button variant="ghost" className="w-full text-gray-600 hover:text-gray-900 font-inter">
//                   <Share2 className="mr-2 h-4 w-4" />
//                   Share Product
//                 </Button>
//               </div>

//               {/* Trust Indicators */}
//               <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
//                 <div className="text-center">
//                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
//                     <Truck className="h-6 w-6 text-green-600" />
//                   </div>
//                   <div className="text-sm font-medium text-gray-900 font-inter">Fast Shipping</div>
//                   <div className="text-xs text-gray-500 font-inter">Hassle Free</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
//                     <Shield className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <div className="text-sm font-medium text-gray-900 font-inter">Quality Guarantee</div>
//                   <div className="text-xs text-gray-500 font-inter">100% Authentic</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
//                     <Award className="h-6 w-6 text-purple-600" />
//                   </div>
//                   <div className="text-sm font-medium text-gray-900 font-inter">Expert Craftsmanship</div>
//                   <div className="text-xs text-gray-500 font-inter">Handmade Quality</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Product Details Tabs */}
//       <section className="py-16 bg-gradient-to-br from-white to-blue-50">
//         <div className="container mx-auto px-4">
//           <Tabs defaultValue="description" className="max-w-4xl mx-auto">
//             <TabsList className="grid w-full grid-cols-3 mb-8">
//               <TabsTrigger value="description" className="font-inter">
//                 Description
//               </TabsTrigger>
//               <TabsTrigger value="specifications" className="font-inter">
//                 Specifications
//               </TabsTrigger>
//               <TabsTrigger value="reviews" className="font-inter">
//                 Reviews
//               </TabsTrigger>
//             </TabsList>

//             <TabsContent value="description" className="space-y-6">
//               <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
//                 <CardContent className="p-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">Product Description</h3>
//                   <p className="text-gray-600 font-inter leading-relaxed text-lg">{product.description}</p>
//                   <div className="mt-6">
//                     <h4 className="text-xl font-semibold text-gray-900 mb-3 font-playfair">Features & Benefits</h4>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {product.features.map((feature, index) => (
//                         <div key={index} className="flex items-start">
//                           <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
//                           <span className="text-gray-600 font-inter">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             <TabsContent value="specifications" className="space-y-6">
//               <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
//                 <CardContent className="p-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">Technical Specifications</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <h4 className="text-lg font-semibold text-gray-900 mb-3 font-playfair">General</h4>
//                       <div className="space-y-2">
//                         <div className="flex justify-between py-2 border-b border-gray-100">
//                           <span className="text-gray-600 font-inter">Category</span>
//                           <span className="text-gray-900 font-medium font-inter">
//                             {formatCategoryName(product.category)}
//                           </span>
//                         </div>
//                         {product.subCategory && (
//                           <div className="flex justify-between py-2 border-b border-gray-100">
//                             <span className="text-gray-600 font-inter">Sub Category</span>
//                             <span className="text-gray-900 font-medium font-inter">{product.subCategory}</span>
//                           </div>
//                         )}
//                         <div className="flex justify-between py-2 border-b border-gray-100">
//                           <span className="text-gray-600 font-inter">Product ID</span>
//                           <span className="text-gray-900 font-medium font-inter">{product.id}</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div>
//                       <h4 className="text-lg font-semibold text-gray-900 mb-3 font-playfair">Additional Info</h4>
//                       <div className="space-y-2">
//                         {product.specifications &&
//                           Object.entries(product.specifications).map(([key, value]) => (
//                             <div key={key} className="flex justify-between py-2 border-b border-gray-100">
//                               <span className="text-gray-600 font-inter capitalize">
//                                 {key.replace(/([A-Z])/g, " $1")}
//                               </span>
//                               <span className="text-gray-900 font-medium font-inter">{value}</span>
//                             </div>
//                           ))}
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             <TabsContent value="reviews" className="space-y-6">
//               <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
//                 <CardContent className="p-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">Customer Reviews</h3>
//                   <div className="space-y-6">
//                     {[1, 2, 3].map((review) => (
//                       <div key={review} className="border-b border-gray-100 pb-6 last:border-b-0">
//                         <div className="flex items-center mb-3">
//                           <div className="flex items-center space-x-1 mr-4">
//                             {[...Array(5)].map((_, i) => (
//                               <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
//                             ))}
//                           </div>
//                           <span className="font-semibold text-gray-900 font-inter">John Doe</span>
//                           <span className="text-gray-500 text-sm ml-2 font-inter">• 2 weeks ago</span>
//                         </div>
//                         <p className="text-gray-600 font-inter leading-relaxed">
//                           Excellent quality product! The craftsmanship is outstanding and it exceeded my expectations.
//                           Highly recommend this to anyone looking for premium quality items.
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>

//       {/* Related Products */}
//       {relatedProducts.length > 0 && (
//         <section className="py-20">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Related Products</h2>
//               <p className="text-lg text-gray-600 font-inter leading-relaxed">
//                 Discover more products from our {formatCategoryName(product.category).toLowerCase()} collection.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {relatedProducts.map((relatedProduct, index) => (
//                 <Card
//                   key={relatedProduct.id}
//                   className="group h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm animate-fade-in"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="relative">
//                     <img
//                       src={relatedProduct.imageUrl || "/placeholder.svg"}
//                       alt={relatedProduct.name}
//                       className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                     <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 border-0 shadow-lg">
//                       <Star className="mr-1 h-3 w-3" />
//                       Premium
//                     </Badge>
//                   </div>
//                   <CardContent className="p-6">
//                     <h3 className="text-lg font-bold text-gray-900 mb-2 font-playfair group-hover:text-blue-600 transition-colors duration-300">
//                       {relatedProduct.name}
//                     </h3>
//                     <p className="text-gray-600 mb-4 font-inter leading-relaxed text-sm line-clamp-2">
//                       {relatedProduct.shortDescription || relatedProduct.description.substring(0, 80) + "..."}
//                     </p>
//                     <Button
//                       asChild
//                       size="sm"
//                       className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105"
//                     >
//                       <Link to={`/product-details/${relatedProduct.id}`}>View Details</Link>
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       <Footer />
//     </div>
//   )
// }

// export default ProductDetailsPage


// // // "use client"

// // // import { useState } from "react"
// // // import { useParams, Link } from "react-router-dom"
// // // import { allDetailedProductsData } from "../data/allProductsData"
// // // import Navbar from "../components/Navbar"
// // // import Footer from "../components/Footer"
// // // import { Button } from "../components/ui/button"
// // // import { Badge } from "../components/ui/badge"
// // // import { Card, CardContent } from "../components/ui/card"
// // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
// // // import { ArrowLeft, Star, Shield, Truck, Award, Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react"

// // // const ProductDetailsPage = () => {
// // //   const { id } = useParams<{ id: string }>()
// // //   const [selectedImageIndex, setSelectedImageIndex] = useState(0)

// // //   const product = allDetailedProductsData.find((p) => p.id === id)

// // //   if (!product) {
// // //     return (
// // //       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
// // //         <Navbar />
// // //         <div className="container mx-auto px-4 py-20 text-center">
// // //           <h1 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Product Not Found</h1>
// // //           <p className="text-lg text-gray-600 mb-8 font-inter">The product you're looking for doesn't exist.</p>
// // //           <Button
// // //             asChild
// // //             className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
// // //           >
// // //             <Link to="/products">
// // //               <ArrowLeft className="mr-2 h-4 w-4" />
// // //               Back to Products
// // //             </Link>
// // //           </Button>
// // //         </div>
// // //         <Footer />
// // //       </div>
// // //     )
// // //   }

// // //   const formatCategoryName = (slug: string) => {
// // //     const names = {
// // //       "copper-items": "Copper Items",
// // //       "bar-accessories": "Bar Accessories",
// // //       "bagas-disposables": "Bagas Disposables",
// // //     }
// // //     return (
// // //       names[slug as keyof typeof names] ||
// // //       slug
// // //         .split("-")
// // //         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// // //         .join(" ")
// // //     )
// // //   }

// // //   const relatedProducts = allDetailedProductsData
// // //     .filter((p) => p.category === product.category && p.id !== product.id)
// // //     .slice(0, 4)

// // //   const nextImage = () => {
// // //     setSelectedImageIndex((prev) => (prev === product.galleryImages.length - 1 ? 0 : prev + 1))
// // //   }

// // //   const prevImage = () => {
// // //     setSelectedImageIndex((prev) => (prev === 0 ? product.galleryImages.length - 1 : prev - 1))
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
// // //       <Navbar />

// // //       {/* Breadcrumb */}
// // //       <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-white/50">
// // //         <div className="container mx-auto px-4">
// // //           <div className="flex items-center space-x-2 text-sm font-inter">
// // //             <Link to="/products" className="text-gray-600 hover:text-blue-600 transition-colors">
// // //               Products
// // //             </Link>
// // //             <span className="text-gray-400">/</span>
// // //             <Link to={`/category/${product.category}`} className="text-gray-600 hover:text-blue-600 transition-colors">
// // //               {formatCategoryName(product.category)}
// // //             </Link>
// // //             <span className="text-gray-400">/</span>
// // //             <span className="text-gray-900 font-medium">{product.name}</span>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Product Details */}
// // //       <section className="py-16">
// // //         <div className="container mx-auto px-4">
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// // //             {/* Image Gallery */}
// // //             <div className="space-y-4">
// // //               <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
// // //                 <img
// // //                   src={product.galleryImages[selectedImageIndex] || product.imageUrl}
// // //                   alt={product.name}
// // //                   className="w-full h-96 lg:h-[500px] object-cover"
// // //                 />
// // //                 {product.galleryImages.length > 1 && (
// // //                   <>
// // //                     <button
// // //                       onClick={prevImage}
// // //                       className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
// // //                     >
// // //                       <ChevronLeft className="h-5 w-5 text-gray-600" />
// // //                     </button>
// // //                     <button
// // //                       onClick={nextImage}
// // //                       className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
// // //                     >
// // //                       <ChevronRight className="h-5 w-5 text-gray-600" />
// // //                     </button>
// // //                   </>
// // //                 )}
// // //               </div>

// // //               {/* Thumbnail Gallery */}
// // //               {product.galleryImages.length > 1 && (
// // //                 <div className="flex space-x-2 overflow-x-auto">
// // //                   {product.galleryImages.map((image, index) => (
// // //                     <button
// // //                       key={index}
// // //                       onClick={() => setSelectedImageIndex(index)}
// // //                       className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
// // //                         selectedImageIndex === index
// // //                           ? "border-blue-500 shadow-lg"
// // //                           : "border-gray-200 hover:border-gray-300"
// // //                       }`}
// // //                     >
// // //                       <img
// // //                         src={image || "/placeholder.svg"}
// // //                         alt={`${product.name} ${index + 1}`}
// // //                         className="w-full h-full object-cover"
// // //                       />
// // //                     </button>
// // //                   ))}
// // //                 </div>
// // //               )}
// // //             </div>

// // //             {/* Product Info */}
// // //             <div className="space-y-6">
// // //               <div>
// // //                 <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
// // //                   {formatCategoryName(product.category)}
// // //                 </Badge>
// // //                 <h1 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">{product.name}</h1>
// // //                 <div className="flex items-center space-x-4 mb-4">
// // //                   <div className="flex items-center space-x-1">
// // //                     {[...Array(5)].map((_, i) => (
// // //                       <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
// // //                     ))}
// // //                     <span className="text-sm text-gray-500 ml-2 font-inter">(4.8)</span>
// // //                   </div>
// // //                   <span className="text-gray-400">•</span>
// // //                   <span className="text-sm text-gray-600 font-inter">Premium Quality</span>
// // //                 </div>
// // //                 <p className="text-lg text-gray-600 font-inter leading-relaxed">{product.description}</p>
// // //               </div>

// // //               {/* Features */}
// // //               <div>
// // //                 <h3 className="text-xl font-semibold text-gray-900 mb-3 font-playfair">Key Features</h3>
// // //                 <ul className="space-y-2">
// // //                   {product.features.map((feature, index) => (
// // //                     <li key={index} className="flex items-center text-gray-600 font-inter">
// // //                       <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
// // //                       {feature}
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>

// // //               {/* Action Buttons */}
// // //               <div className="space-y-4">
// // //                 <div className="flex flex-col sm:flex-row gap-4">
// // //                   <Button
// // //                     asChild
// // //                     size="lg"
// // //                     className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 font-inter"
// // //                   >
// // //                     <Link to="/contact-us">Get Quote & Details</Link>
// // //                   </Button>
// // //                   <Button
// // //                     variant="outline"
// // //                     size="lg"
// // //                     className="flex-1 border-gray-300 hover:bg-gray-50 transition-all duration-200 font-inter bg-transparent"
// // //                   >
// // //                     <Heart className="mr-2 h-4 w-4" />
// // //                     Add to Wishlist
// // //                   </Button>
// // //                 </div>
// // //                 <Button variant="ghost" className="w-full text-gray-600 hover:text-gray-900 font-inter">
// // //                   <Share2 className="mr-2 h-4 w-4" />
// // //                   Share Product
// // //                 </Button>
// // //               </div>

// // //               {/* Trust Indicators */}
// // //               <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
// // //                 <div className="text-center">
// // //                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
// // //                     <Truck className="h-6 w-6 text-green-600" />
// // //                   </div>
// // //                   <div className="text-sm font-medium text-gray-900 font-inter">Fast Shipping</div>
// // //                   <div className="text-xs text-gray-500 font-inter">2-3 Business Days</div>
// // //                 </div>
// // //                 <div className="text-center">
// // //                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
// // //                     <Shield className="h-6 w-6 text-blue-600" />
// // //                   </div>
// // //                   <div className="text-sm font-medium text-gray-900 font-inter">Quality Guarantee</div>
// // //                   <div className="text-xs text-gray-500 font-inter">100% Authentic</div>
// // //                 </div>
// // //                 <div className="text-center">
// // //                   <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
// // //                     <Award className="h-6 w-6 text-purple-600" />
// // //                   </div>
// // //                   <div className="text-sm font-medium text-gray-900 font-inter">Expert Craftsmanship</div>
// // //                   <div className="text-xs text-gray-500 font-inter">Handmade Quality</div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Product Details Tabs */}
// // //       <section className="py-16 bg-gradient-to-br from-white to-blue-50">
// // //         <div className="container mx-auto px-4">
// // //           <Tabs defaultValue="description" className="max-w-4xl mx-auto">
// // //             <TabsList className="grid w-full grid-cols-3 mb-8">
// // //               <TabsTrigger value="description" className="font-inter">
// // //                 Description
// // //               </TabsTrigger>
// // //               <TabsTrigger value="specifications" className="font-inter">
// // //                 Specifications
// // //               </TabsTrigger>
// // //               <TabsTrigger value="reviews" className="font-inter">
// // //                 Reviews
// // //               </TabsTrigger>
// // //             </TabsList>

// // //             <TabsContent value="description" className="space-y-6">
// // //               <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
// // //                 <CardContent className="p-8">
// // //                   <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">Product Description</h3>
// // //                   <p className="text-gray-600 font-inter leading-relaxed text-lg">{product.description}</p>
// // //                   <div className="mt-6">
// // //                     <h4 className="text-xl font-semibold text-gray-900 mb-3 font-playfair">Features & Benefits</h4>
// // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                       {product.features.map((feature, index) => (
// // //                         <div key={index} className="flex items-start">
// // //                           <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
// // //                           <span className="text-gray-600 font-inter">{feature}</span>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>
// // //             </TabsContent>

// // //             <TabsContent value="specifications" className="space-y-6">
// // //               <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
// // //                 <CardContent className="p-8">
// // //                   <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">Technical Specifications</h3>
// // //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                     <div>
// // //                       <h4 className="text-lg font-semibold text-gray-900 mb-3 font-playfair">General</h4>
// // //                       <div className="space-y-2">
// // //                         <div className="flex justify-between py-2 border-b border-gray-100">
// // //                           <span className="text-gray-600 font-inter">Category</span>
// // //                           <span className="text-gray-900 font-medium font-inter">
// // //                             {formatCategoryName(product.category)}
// // //                           </span>
// // //                         </div>
// // //                         {product.subCategory && (
// // //                           <div className="flex justify-between py-2 border-b border-gray-100">
// // //                             <span className="text-gray-600 font-inter">Sub Category</span>
// // //                             <span className="text-gray-900 font-medium font-inter">{product.subCategory}</span>
// // //                           </div>
// // //                         )}
// // //                         <div className="flex justify-between py-2 border-b border-gray-100">
// // //                           <span className="text-gray-600 font-inter">Product ID</span>
// // //                           <span className="text-gray-900 font-medium font-inter">{product.id}</span>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                     <div>
// // //                       <h4 className="text-lg font-semibold text-gray-900 mb-3 font-playfair">Additional Info</h4>
// // //                       <div className="space-y-2">
// // //                         {product.specifications &&
// // //                           Object.entries(product.specifications).map(([key, value]) => (
// // //                             <div key={key} className="flex justify-between py-2 border-b border-gray-100">
// // //                               <span className="text-gray-600 font-inter capitalize">
// // //                                 {key.replace(/([A-Z])/g, " $1")}
// // //                               </span>
// // //                               <span className="text-gray-900 font-medium font-inter">{value}</span>
// // //                             </div>
// // //                           ))}
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>
// // //             </TabsContent>

// // //             <TabsContent value="reviews" className="space-y-6">
// // //               <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
// // //                 <CardContent className="p-8">
// // //                   <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">Customer Reviews</h3>
// // //                   <div className="space-y-6">
// // //                     {[1, 2, 3].map((review) => (
// // //                       <div key={review} className="border-b border-gray-100 pb-6 last:border-b-0">
// // //                         <div className="flex items-center mb-3">
// // //                           <div className="flex items-center space-x-1 mr-4">
// // //                             {[...Array(5)].map((_, i) => (
// // //                               <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
// // //                             ))}
// // //                           </div>
// // //                           <span className="font-semibold text-gray-900 font-inter">John Doe</span>
// // //                           <span className="text-gray-500 text-sm ml-2 font-inter">• 2 weeks ago</span>
// // //                         </div>
// // //                         <p className="text-gray-600 font-inter leading-relaxed">
// // //                           Excellent quality product! The craftsmanship is outstanding and it exceeded my expectations.
// // //                           Highly recommend this to anyone looking for premium quality items.
// // //                         </p>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>
// // //             </TabsContent>
// // //           </Tabs>
// // //         </div>
// // //       </section>

// // //       {/* Related Products */}
// // //       {relatedProducts.length > 0 && (
// // //         <section className="py-20">
// // //           <div className="container mx-auto px-4">
// // //             <div className="max-w-4xl mx-auto text-center mb-16">
// // //               <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Related Products</h2>
// // //               <p className="text-lg text-gray-600 font-inter leading-relaxed">
// // //                 Discover more products from our {formatCategoryName(product.category).toLowerCase()} collection.
// // //               </p>
// // //             </div>

// // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// // //               {relatedProducts.map((relatedProduct, index) => (
// // //                 <Card
// // //                   key={relatedProduct.id}
// // //                   className="group h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm animate-fade-in"
// // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // //                 >
// // //                   <div className="relative">
// // //                     <img
// // //                       src={relatedProduct.imageUrl || "/placeholder.svg"}
// // //                       alt={relatedProduct.name}
// // //                       className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
// // //                     />
// // //                     <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 border-0 shadow-lg">
// // //                       <Star className="mr-1 h-3 w-3" />
// // //                       Premium
// // //                     </Badge>
// // //                   </div>
// // //                   <CardContent className="p-6">
// // //                     <h3 className="text-lg font-bold text-gray-900 mb-2 font-playfair group-hover:text-blue-600 transition-colors duration-300">
// // //                       {relatedProduct.name}
// // //                     </h3>
// // //                     <p className="text-gray-600 mb-4 font-inter leading-relaxed text-sm line-clamp-2">
// // //                       {relatedProduct.shortDescription || relatedProduct.description.substring(0, 80) + "..."}
// // //                     </p>
// // //                     <Button
// // //                       asChild
// // //                       size="sm"
// // //                       className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105"
// // //                     >
// // //                       <Link to={`/product-details/${relatedProduct.id}`}>View Details</Link>
// // //                     </Button>
// // //                   </CardContent>
// // //                 </Card>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>
// // //       )}

// // //       <Footer />
// // //     </div>
// // //   )
// // // }

// // // export default ProductDetailsPage



// "use client"

// import React from "react"

// import { useState } from "react"
// import { useParams, Link } from "react-router-dom"
// import { allDetailedProductsData } from "../data/allProductsData"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import { Button } from "../components/ui/button"
// import { Badge } from "../components/ui/badge"
// import { Card, CardContent } from "../components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
// import { ArrowLeft, Star, Shield, Truck, Award, ShoppingCart, Share2, ChevronLeft, ChevronRight } from "lucide-react"
// import { useCart } from "../context/CartContext" // Import useCart
// import { useToast } from "../hooks/use-toast" // Keep useToast for general notifications

// const ProductDetailsPage = () => {
//   const { id } = useParams<{ id: string }>()
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0)
//   const { addToCart } = useCart() // Use addToCart from context
//   const { toast } = useToast()

//   const product = allDetailedProductsData.find((p) => p.id === id)

//   React.useEffect(() => {
//     if (product && product.galleryImages && product.galleryImages.length > 0) {
//       setSelectedImageIndex(0) // Reset to first image when product changes
//     }
//   }, [product])

//   if (!product) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//         <Navbar />
//         <div className="container mx-auto px-4 py-20 text-center">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Product Not Found</h1>
//           <p className="text-lg text-gray-600 mb-8 font-inter">The product you're looking for doesn't exist.</p>
//           <Button
//             asChild
//             className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
//           >
//             <Link to="/products">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Products
//             </Link>
//           </Button>
//         </div>
//         <Footer />
//       </div>
//     )
//   }

//   const formatCategoryName = (slug: string) => {
//     const names: { [key: string]: string } = {
//       "copper-items": "Copper Items",
//       "bar-accessories": "Bar Accessories",
//       "bagas-disposables": "Bagas Disposables",
//     }
//     return (
//       names[slug] ||
//       slug
//         .split("-")
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ")
//     )
//   }

//   const handleAddToCart = () => {
//     addToCart({
//       id: product.id,
//       title: product.name,
//       image: product.imageUrl,
//       quantity: 1, // Default quantity to 1 when adding to inquiry cart
//     })
//     toast({
//       title: "Added to Inquiry Cart!",
//       description: `${product.name} has been added to your inquiry cart.`,
//     })
//   }

//   const relatedProducts = allDetailedProductsData
//     .filter((p) => p.category === product.category && p.id !== product.id)
//     .slice(0, 4)

//   const nextImage = () => {
//     setSelectedImageIndex((prev) => (prev === product.galleryImages.length - 1 ? 0 : prev + 1))
//   }

//   const prevImage = () => {
//     setSelectedImageIndex((prev) => (prev === 0 ? product.galleryImages.length - 1 : prev - 1))
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       <Navbar />

//       {/* Breadcrumb */}
//       <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-white/50">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center space-x-2 text-sm font-inter">
//             <Link to="/products" className="text-gray-600 hover:text-blue-600 transition-colors">
//               Products
//             </Link>
//             <span className="text-gray-400">/</span>
//             <Link to={`/category/${product.category}`} className="text-gray-600 hover:text-blue-600 transition-colors">
//               {formatCategoryName(product.category)}
//             </Link>
//             <span className="text-gray-400">/</span>
//             <span className="text-gray-900 font-medium">{product.name}</span>
//           </div>
//         </div>
//       </section>

//       {/* Product Details */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Image Gallery */}
//             <div className="space-y-4">
//               <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
//                 <img
//                   src={product.galleryImages[selectedImageIndex] || product.imageUrl}
//                   alt={product.name}
//                   className="w-full h-96 lg:h-[500px] object-cover"
//                 />
//                 {product.galleryImages.length > 1 && (
//                   <>
//                     <button
//                       onClick={prevImage}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
//                     >
//                       <ChevronLeft className="h-5 w-5 text-gray-600" />
//                     </button>
//                     <button
//                       onClick={nextImage}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
//                     >
//                       <ChevronRight className="h-5 w-5 text-gray-600" />
//                     </button>
//                   </>
//                 )}
//               </div>

//               {/* Thumbnail Gallery */}
//               {product.galleryImages && product.galleryImages.length > 1 && (
//                 <div className="flex space-x-2 overflow-x-auto">
//                   {product.galleryImages.map((image, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setSelectedImageIndex(index)}
//                       className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
//                         selectedImageIndex === index
//                           ? "border-blue-500 shadow-lg"
//                           : "border-gray-200 hover:border-gray-300"
//                       }`}
//                     >
//                       <img
//                         src={image || "/placeholder.svg"}
//                         alt={`${product.name} ${index + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Product Info */}
//             <div className="space-y-6">
//               <div>
//                 <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
//                   {formatCategoryName(product.category)}
//                 </Badge>
//                 <h1 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">{product.name}</h1>
//                 <div className="flex items-center space-x-4 mb-4">
//                   <div className="flex items-center space-x-1">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
//                     ))}
//                     <span className="text-sm text-gray-500 ml-2 font-inter">(4.8)</span>
//                   </div>
//                   <span className="text-gray-400">•</span>
//                   <span className="text-sm text-gray-600 font-inter">Premium Quality</span>
//                 </div>
//                 <p className="text-lg text-gray-600 font-inter leading-relaxed">{product.description}</p>
//               </div>

//               {/* Features */}
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3 font-playfair">Key Features</h3>
//                 <ul className="space-y-2">
//                   {product.features.map((feature, index) => (
//                     <li key={index} className="flex items-center text-gray-600 font-inter">
//                       <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Action Buttons */}
//               <div className="space-y-4">
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <Button
//                     asChild
//                     size="lg"
//                     className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 font-inter"
//                   >
//                     <Link to="/contact-us">Get Quote & Details</Link>
//                   </Button>
//                   <Button
//                     onClick={handleAddToCart} // Changed to handleAddToCart
//                     size="lg"
//                     variant="outline"
//                     className="flex-1 border-gray-300 hover:bg-gray-50 transition-all duration-200 font-inter bg-transparent"
//                   >
//                     <ShoppingCart className="mr-2 h-4 w-4" />
//                     Add to Inquiry Cart
//                   </Button>
//                 </div>
//                 <Button variant="ghost" className="w-full text-gray-600 hover:text-gray-900 font-inter">
//                   <Share2 className="mr-2 h-4 w-4" />
//                   Share Product
//                 </Button>
//               </div>

//               {/* Trust Indicators */}
//               <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
//                 <div className="text-center">
//                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
//                     <Truck className="h-6 w-6 text-green-600" />
//                   </div>
//                   <div className="text-sm font-medium text-gray-900 font-inter">Fast Shipping</div>
//                   <div className="text-xs text-gray-500 font-inter">2-3 Business Days</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
//                     <Shield className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <div className="text-sm font-medium text-gray-900 font-inter">Quality Guarantee</div>
//                   <div className="text-xs text-gray-500 font-inter">100% Authentic</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
//                     <Award className="h-6 w-6 text-purple-600" />
//                   </div>
//                   <div className="text-sm font-medium text-gray-900 font-inter">Expert Craftsmanship</div>
//                   <div className="text-xs text-gray-500 font-inter">Handmade Quality</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Product Details Tabs */}
//       <section className="py-16 bg-gradient-to-br from-white to-blue-50">
//         <div className="container mx-auto px-4">
//           <Tabs defaultValue="description" className="max-w-4xl mx-auto">
//             <TabsList className="grid w-full grid-cols-3 mb-8">
//               <TabsTrigger value="description" className="font-inter">
//                 Description
//               </TabsTrigger>
//               <TabsTrigger value="specifications" className="font-inter">
//                 Specifications
//               </TabsTrigger>
//               <TabsTrigger value="reviews" className="font-inter">
//                 Reviews
//               </TabsTrigger>
//             </TabsList>

//             <TabsContent value="description" className="space-y-6">
//               <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
//                 <CardContent className="p-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">Product Description</h3>
//                   <p className="text-gray-600 font-inter leading-relaxed text-lg">{product.description}</p>
//                   <div className="mt-6">
//                     <h4 className="text-xl font-semibold text-gray-900 mb-3 font-playfair">Features & Benefits</h4>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {product.features.map((feature, index) => (
//                         <div key={index} className="flex items-start">
//                           <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
//                           <span className="text-gray-600 font-inter">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             <TabsContent value="specifications" className="space-y-6">
//               <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
//                 <CardContent className="p-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">Technical Specifications</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <h4 className="text-lg font-semibold text-gray-900 mb-3 font-playfair">General</h4>
//                       <div className="space-y-2">
//                         <div className="flex justify-between py-2 border-b border-gray-100">
//                           <span className="text-gray-600 font-inter">Category</span>
//                           <span className="text-gray-900 font-medium font-inter">
//                             {formatCategoryName(product.category)}
//                           </span>
//                         </div>
//                         {product.subCategory && (
//                           <div className="flex justify-between py-2 border-b border-gray-100">
//                             <span className="text-gray-600 font-inter">Sub Category</span>
//                             <span className="text-gray-900 font-medium font-inter">{product.subCategory}</span>
//                           </div>
//                         )}
//                         <div className="flex justify-between py-2 border-b border-gray-100">
//                           <span className="text-gray-600 font-inter">Product ID</span>
//                           <span className="text-gray-900 font-medium font-inter">{product.id}</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div>
//                       <h4 className="text-lg font-semibold text-gray-900 mb-3 font-playfair">Additional Info</h4>
//                       <div className="space-y-2">
//                         {product.specifications &&
//                           Object.entries(product.specifications).map(([key, value]) => (
//                             <div key={key} className="flex justify-between py-2 border-b border-gray-100">
//                               <span className="text-gray-600 font-inter capitalize">
//                                 {key.replace(/([A-Z])/g, " $1")}
//                               </span>
//                               <span className="text-gray-900 font-medium font-inter">{value}</span>
//                             </div>
//                           ))}
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             <TabsContent value="reviews" className="space-y-6">
//               <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
//                 <CardContent className="p-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">Customer Reviews</h3>
//                   <div className="space-y-6">
//                     {[1, 2, 3].map((review) => (
//                       <div key={review} className="border-b border-gray-100 pb-6 last:border-b-0">
//                         <div className="flex items-center mb-3">
//                           <div className="flex items-center space-x-1 mr-4">
//                             {[...Array(5)].map((_, i) => (
//                               <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
//                             ))}
//                           </div>
//                           <span className="font-semibold text-gray-900 font-inter">John Doe</span>
//                           <span className="text-gray-500 text-sm ml-2 font-inter">• 2 weeks ago</span>
//                         </div>
//                         <p className="text-gray-600 font-inter leading-relaxed">
//                           Excellent quality product! The craftsmanship is outstanding and it exceeded my expectations.
//                           Highly recommend this to anyone looking for premium quality items.
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>

//       {/* Related Products */}
//       {relatedProducts.length > 0 && (
//         <section className="py-20">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Related Products</h2>
//               <p className="text-lg text-gray-600 font-inter leading-relaxed">
//                 Discover more products from our {formatCategoryName(product.category).toLowerCase()} collection.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {relatedProducts.map((relatedProduct, index) => (
//                 <Card
//                   key={relatedProduct.id}
//                   className="group h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm animate-fade-in"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="relative">
//                     <img
//                       src={relatedProduct.imageUrl || "/placeholder.svg"}
//                       alt={relatedProduct.name}
//                       className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                     <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 border-0 shadow-lg">
//                       <Star className="mr-1 h-3 w-3" />
//                       Premium
//                     </Badge>
//                   </div>
//                   <CardContent className="p-6">
//                     <h3 className="text-lg font-bold text-gray-900 mb-2 font-playfair group-hover:text-blue-600 transition-colors duration-300">
//                       {relatedProduct.name}
//                     </h3>
//                     <p className="text-gray-600 mb-4 font-inter leading-relaxed text-sm line-clamp-2">
//                       {relatedProduct.shortDescription || relatedProduct.description.substring(0, 80) + "..."}
//                     </p>
//                     <Button
//                       asChild
//                       size="sm"
//                       className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105"
//                     >
//                       <Link to={`/product-details/${relatedProduct.id}`}>View Details</Link>
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       <Footer />
//     </div>
//   )
// }

// export default ProductDetailsPage





// "use client"

// import type React from "react"
// import { useState, useMemo } from "react"
// import { useParams } from "react-router-dom"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import { Button } from "../components/ui/button"
// import { Badge } from "../components/ui/badge"
// import { Card } from "../components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
// import { Star, Share2, Plus, Minus, ShoppingCart } from "lucide-react"
// import { allDetailedProductsData } from "../data/allProductsData"
// import { useCart } from "../context/CartContext"
// import { toast } from "sonner"

// const ProductDetailsPage: React.FC = () => {
//   const { productId } = useParams<{ productId: string }>()
//   const { addToCart } = useCart()
//   const [mainImage, setMainImage] = useState<string | null>(null)
//   const [quantity, setQuantity] = useState(1)

//   const product = useMemo(() => {
//     const foundProduct = allDetailedProductsData.find((p) => p.id === productId)
//     if (foundProduct && !mainImage) {
//       setMainImage(foundProduct.imageUrl)
//     }
//     return foundProduct
//   }, [productId, mainImage])

//   if (!product) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
//         <Navbar />
//         <h1 className="text-4xl font-bold text-gray-800">Product Not Found</h1>
//         <p className="text-gray-600 mt-4">The product you are looking for does not exist.</p>
//         <Footer />
//       </div>
//     )
//   }

//   const handleAddToCart = () => {
//     addToCart({
//       id: product.id,
//       title: product.name,
//       image: product.imageUrl,
//       quantity: quantity,
//     })
//     toast.success(`${quantity} x ${product.name} added to inquiry cart!`)
//   }

//   const handleQuantityChange = (type: "increase" | "decrease") => {
//     if (type === "increase") {
//       setQuantity((prev) => prev + 1)
//     } else {
//       setQuantity((prev) => Math.max(1, prev - 1))
//     }
//   }

//   const formatCategoryName = (slug: string) => {
//     const names: { [key: string]: string } = {
//       "copper-items": "Copper Items",
//       "bar-accessories": "Bar Accessories",
//       "bagas-disposables": "Bagas Disposables",
//       "meal-trays": "Meal Trays",
//       plates: "Plates",
//       straws: "Straws",
//       cutlery: "Cutlery",
//       cups: "Cups",
//       "copper-bottles": "Copper Bottles",
//       "copper-jars": "Copper Jars",
//       "copper-jugs": "Copper Jugs",
//       "copper-matkas": "Copper Matkas",
//       "jiggers-peg-measures": "Jiggers & Peg Measures",
//       "bartender-sets": "Bartender Sets",
//       "bar-table-service": "Bar Table Service",
//       "bar-tools-accessories": "Bar Tools & Accessories",
//       drinkware: "Drinkware",
//       "ice-buckets-chillers": "Ice Buckets & Chillers",
//     }
//     return (
//       names[slug] ||
//       slug
//         .split("-")
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ")
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       <Navbar />

//       <main className="container mx-auto px-4 py-28">
//         <Card className="p-8 shadow-xl rounded-xl bg-white border-0 animate-fade-in">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Product Image Gallery */}
//             <div className="flex flex-col items-center">
//               <div className="w-full max-w-lg h-96 mb-6 rounded-lg overflow-hidden shadow-lg border border-gray-200">
//                 <img
//                   src={mainImage || product.imageUrl || "/placeholder.svg"}
//                   alt={product.name}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <div className="flex space-x-3 overflow-x-auto pb-2">
//                 {product.imageGallery.map((img, index) => (
//                   <img
//                     key={index}
//                     src={img || "/placeholder.svg"}
//                     alt={`${product.name} thumbnail ${index + 1}`}
//                     className={`w-24 h-24 object-cover rounded-md cursor-pointer border-2 ${
//                       mainImage === img ? "border-blue-600 shadow-md" : "border-transparent"
//                     } hover:border-blue-400 transition-all duration-200`}
//                     onClick={() => setMainImage(img)}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Product Details */}
//             <div className="space-y-6">
//               <Badge className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-semibold">
//                 {formatCategoryName(product.category)}
//               </Badge>
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-playfair leading-tight">
//                 {product.name}
//               </h1>
//               <div className="flex items-center space-x-2 text-gray-600">
//                 <div className="flex items-center space-x-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`h-5 w-5 ${
//                         i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
//                       }`}
//                     />
//                   ))}
//                 </div>
//                 <span className="text-lg font-inter">
//                   ({product.rating.toFixed(1)}){" "}
//                   {product.reviewCount > 0 ? `(${product.reviewCount} reviews)` : "(No reviews)"}
//                 </span>
//               </div>
//               <p className="text-lg text-gray-700 leading-relaxed font-inter">{product.description}</p>

//               {/* Key Features */}
//               <div>
//                 <h2 className="text-2xl font-semibold text-gray-900 mb-3 font-playfair">Key Features</h2>
//                 <ul className="list-disc list-inside text-gray-700 space-y-2 font-inter">
//                   {product.features.map((feature, index) => (
//                     <li key={index}>{feature}</li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Quantity Selector and Add to Cart */}
//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center border border-gray-300 rounded-md">
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={() => handleQuantityChange("decrease")}
//                     className="h-10 w-10 text-gray-700 hover:bg-gray-100"
//                   >
//                     <Minus className="h-5 w-5" />
//                   </Button>
//                   <span className="w-12 text-center text-xl font-semibold text-gray-900 font-inter">{quantity}</span>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={() => handleQuantityChange("increase")}
//                     className="h-10 w-10 text-gray-700 hover:bg-gray-100"
//                   >
//                     <Plus className="h-5 w-5" />
//                   </Button>
//                 </div>
//                 <Button
//                   onClick={handleAddToCart}
//                   className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-medium transition-all duration-300 hover:scale-105 font-inter shadow-md"
//                 >
//                   <ShoppingCart className="h-5 w-5 mr-2" /> Add to Inquiry Cart
//                 </Button>
//               </div>

//               <div className="flex items-center space-x-4 text-gray-600">
//                 <Button
//                   variant="outline"
//                   className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 font-inter bg-transparent"
//                 >
//                   <Share2 className="h-4 w-4" />
//                   <span>Share Product</span>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </Card>

//         {/* Product Tabs */}
//         <Card
//           className="mt-12 p-8 shadow-xl rounded-xl bg-white border-0 animate-fade-in"
//           style={{ animationDelay: "0.2s" }}
//         >
//           <Tabs defaultValue="description" className="w-full">
//             <TabsList className="grid w-full grid-cols-3">
//               <TabsTrigger value="description" className="font-semibold text-lg font-playfair">
//                 Description
//               </TabsTrigger>
//               <TabsTrigger value="specifications" className="font-semibold text-lg font-playfair">
//                 Specifications
//               </TabsTrigger>
//               <TabsTrigger value="reviews" className="font-semibold text-lg font-playfair">
//                 Reviews ({product.reviewCount})
//               </TabsTrigger>
//             </TabsList>
//             <TabsContent value="description" className="pt-6 text-gray-700 leading-relaxed font-inter">
//               {product.description}
//             </TabsContent>
//             <TabsContent value="specifications" className="pt-6 text-gray-700 leading-relaxed font-inter">
//               <ul className="list-disc list-inside space-y-2">
//                 {Object.entries(product.specifications).map(([key, value]) => (
//                   <li key={key}>
//                     <strong className="font-semibold">{key}:</strong> {value}
//                   </li>
//                 ))}
//               </ul>
//             </TabsContent>
//             <TabsContent value="reviews" className="pt-6">
//               {product.reviews.length === 0 ? (
//                 <p className="text-gray-700 font-inter">No reviews yet. Be the first to review this product!</p>
//               ) : (
//                 <div className="space-y-6">
//                   {product.reviews.map((review) => (
//                     <div key={review.id} className="border-b pb-4 last:border-b-0">
//                       <div className="flex items-center mb-2">
//                         <span className="font-semibold text-gray-900 mr-2 font-playfair">{review.author}</span>
//                         <div className="flex items-center space-x-1">
//                           {[...Array(5)].map((_, i) => (
//                             <Star
//                               key={i}
//                               className={`h-4 w-4 ${
//                                 i < Math.floor(review.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
//                               }`}
//                             />
//                           ))}
//                         </div>
//                         <span className="text-sm text-gray-500 ml-auto font-inter">{review.date}</span>
//                       </div>
//                       <p className="text-gray-700 font-inter leading-relaxed">{review.comment}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </TabsContent>
//           </Tabs>
//         </Card>
//       </main>

//       <Footer />
//     </div>
//   )
// }

// export default ProductDetailsPage





// "use client"

// import type React from "react"
// import { useEffect, useState } from "react"
// import { useParams, Link } from "react-router-dom"
// import { allDetailedProductsData, type DetailedProduct } from "../data/allProductsData"
// import { Button } from "@/components/ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Star, ShoppingCart } from "lucide-react"
// import ProductCard from "../components/ProductCard"
// import { useCart } from "../context/CartContext"
// import { useToast } from "@/components/ui/use-toast"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { formatCategoryName } from "../utils/productNavigation"

// const ProductDetailsPage: React.FC = () => {
//   const { productId } = useParams<{ productId: string }>()
//   const [product, setProduct] = useState<DetailedProduct | undefined>(undefined)
//   const [mainImage, setMainImage] = useState<string>("")
//   const { addItem } = useCart()
//   const { toast } = useToast()

//   useEffect(() => {
//     const foundProduct = allDetailedProductsData.find((p) => p.id === productId)
//     setProduct(foundProduct)
//     if (foundProduct && foundProduct.imageUrl.length > 0) {
//       setMainImage(foundProduct.imageUrl[0])
//     }
//   }, [productId])

//   const handleAddToCart = () => {
//     if (product) {
//       addItem(product)
//       toast({
//         title: "Added to Inquiry Cart!",
//         description: `${product.name} has been added to your inquiry cart.`,
//       })
//     }
//   }

//   if (!product) {
//     return (
//       <div className="container mx-auto px-4 py-12 text-center min-h-[calc(100vh-120px)] flex flex-col items-center justify-center">
//         <h1 className="text-4xl font-bold text-white mb-4 font-playfair">Product Not Found</h1>
//         <p className="text-lg text-gray-300 mb-8 font-inter">
//           The product you are looking for does not exist or has been moved.
//         </p>
//         <Link to="/products">
//           <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//             Back to Products
//           </Button>
//         </Link>
//       </div>
//     )
//   }

//   const relatedProducts = allDetailedProductsData.filter(
//     (p) => product.relatedProducts.includes(p.id) && p.id !== product.id,
//   )

//   return (
//     <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-120px)]">
//       <div className="mb-6">
//         <Breadcrumb>
//           <BreadcrumbItem>
//             <BreadcrumbLink asChild>
//               <Link to="/">Home</Link>
//             </BreadcrumbLink>
//           </BreadcrumbItem>
//           <BreadcrumbSeparator />
//           <BreadcrumbItem>
//             <BreadcrumbLink asChild>
//               <Link to="/products">Products</Link>
//             </BreadcrumbLink>
//           </BreadcrumbItem>
//           <BreadcrumbSeparator />
//           <BreadcrumbItem>
//             <BreadcrumbLink asChild>
//               <Link to={`/products/${product.category}`}>{formatCategoryName(product.category)}</Link>
//             </BreadcrumbLink>
//           </BreadcrumbItem>
//           {product.subCategory && (
//             <>
//               <BreadcrumbSeparator />
//               <BreadcrumbItem>
//                 <BreadcrumbLink asChild>
//                   <Link to={`/products/${product.category}/${product.subCategory}`}>
//                     {formatCategoryName(product.subCategory)}
//                   </Link>
//                 </BreadcrumbLink>
//               </BreadcrumbItem>
//             </>
//           )}
//           <BreadcrumbSeparator />
//           <BreadcrumbItem>
//             <BreadcrumbPage>{product.name}</BreadcrumbPage>
//           </BreadcrumbItem>
//         </Breadcrumb>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-800 bg-opacity-70 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-gray-700">
//         {/* Product Image Gallery */}
//         <div className="flex flex-col items-center">
//           <div className="w-full max-w-lg h-96 mb-6 rounded-lg overflow-hidden border border-gray-600 shadow-md">
//             <img
//               src={mainImage || "/placeholder.svg"}
//               alt={product.name}
//               className="w-full h-full object-contain transition-transform duration-300 ease-in-out"
//             />
//           </div>
//           <div className="flex space-x-3 overflow-x-auto pb-2">
//             {product.imageUrl.map((image, index) => (
//               <img
//                 key={index}
//                 src={image || "/placeholder.svg"}
//                 alt={`${product.name} thumbnail ${index + 1}`}
//                 className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 ${
//                   mainImage === image ? "border-blue-500 shadow-md" : "border-transparent hover:border-gray-500"
//                 }`}
//                 onClick={() => setMainImage(image)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-4xl font-bold text-white mb-4 font-playfair">{product.name}</h1>
//           <p className="text-gray-300 text-lg mb-4 font-inter">{product.shortDescription}</p>

//           <div className="flex items-center mb-6">
//             <div className="flex text-yellow-400">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <Star key={i} className={`h-6 w-6 ${i < Math.floor(product.rating) ? "fill-current" : ""}`} />
//               ))}
//             </div>
//             <span className="text-gray-400 text-md ml-3">
//               {product.rating.toFixed(1)} ({product.reviewCount} Reviews)
//             </span>
//           </div>

//           <Button
//             onClick={handleAddToCart}
//             className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center mb-8"
//           >
//             <ShoppingCart className="h-6 w-6 mr-3" />
//             Get Quote & Details
//           </Button>

//           {/* Tabs for Description, Features, Specifications */}
//           <Tabs defaultValue="description" className="w-full">
//             <TabsList className="grid w-full grid-cols-3 bg-gray-700 rounded-md p-1 mb-4">
//               <TabsTrigger
//                 value="description"
//                 className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md text-gray-300 hover:text-white transition-colors duration-200"
//               >
//                 Description
//               </TabsTrigger>
//               <TabsTrigger
//                 value="features"
//                 className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md text-gray-300 hover:text-white transition-colors duration-200"
//               >
//                 Features
//               </TabsTrigger>
//               <TabsTrigger
//                 value="specifications"
//                 className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md text-gray-300 hover:text-white transition-colors duration-200"
//               >
//                 Specifications
//               </TabsTrigger>
//             </TabsList>
//             <TabsContent value="description" className="text-gray-300 leading-relaxed font-inter">
//               {product.longDescription}
//             </TabsContent>
//             <TabsContent value="features" className="text-gray-300 leading-relaxed font-inter">
//               <ul className="list-disc list-inside space-y-2">
//                 {product.features.map((feature, index) => (
//                   <li key={index}>{feature}</li>
//                 ))}
//               </ul>
//             </TabsContent>
//             <TabsContent value="specifications" className="text-gray-300 leading-relaxed font-inter">
//               <ul className="space-y-2">
//                 {Object.entries(product.specifications).map(([key, value]) => (
//                   <li key={key}>
//                     <span className="font-semibold text-white">{key}:</span> {value}
//                   </li>
//                 ))}
//               </ul>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </div>

//       {/* Related Products Section */}
//       {relatedProducts.length > 0 && (
//         <section className="mt-16">
//           <h2 className="text-3xl font-bold text-white text-center mb-8 font-playfair">Related Products</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {relatedProducts.map((relatedProduct) => (
//               <ProductCard key={relatedProduct.id} product={relatedProduct} />
//             ))}
//           </div>
//         </section>
//       )}
//     </div>
//   )
// }

// export default ProductDetailsPage
