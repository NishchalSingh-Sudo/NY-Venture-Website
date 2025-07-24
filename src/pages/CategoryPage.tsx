// // // src/pages/CategoryPage.tsx
// // import type React from "react"
// // import { useParams, Link } from "react-router-dom"
// // import { allDetailedProductsData, type DetailedProduct } from "../data/allProductsData"
// // import Navbar from "../components/Navbar"
// // import Footer from "../components/Footer"
// // import { Button } from "../components/ui/button"
// // import { Badge } from "../components/ui/badge"
// // import { Card, CardContent } from "../components/ui/card"
// // import { ArrowLeft, Sparkles, Star, Filter } from "lucide-react"

// // const CategoryPage: React.FC = () => {
// //   const { categorySlug, subCategorySlug } = useParams<{ categorySlug: string; subCategorySlug?: string }>();

// //   const filteredProducts: DetailedProduct[] = allDetailedProductsData.filter((product) => {
// //     const isInCategory = product.category === categorySlug;

// //     if (subCategorySlug) {
// //       return isInCategory && product.subCategory === subCategorySlug;
// //     }

// //     return isInCategory;
// //   });

// //   const formatCategoryName = (slug: string | undefined) => {
// //     if (!slug) return "Unknown Category";
// //     const names: { [key: string]: string } = {
// //       "copper-items": "Copper Items",
// //       "bar-accessories": "Bar Accessories",
// //       "bagas-disposables": "Bagas Disposables",
// //       "ice-buckets-chillers": "Ice Buckets & Chillers",
// //       "jiggers-peg-measures": "Jiggers & Peg Measures",
// //       "bar-tools-accessories": "Bar Tools & Accessories",
// //       "bartender-sets": "Bartender Sets",
// //       "bar-table-service": "Bar Table Service",
// //       "ceramic-terracotta-items": "Ceramic & Terracotta Items",
// //       "packaging-material": "Packaging Material",
// //       "copper-bottles": "Copper Bottles",
// //       "copper-jugs": "Copper-Jugs",
// //       "copper-jars": "Copper Jars",
// //       "copper-matkas": "Copper Matkas",
// //       "meal-trays": "Meal Trays",
// //       "utensils-straws": "Utensils & Straws",
// //       "cocktail-shakers": "Cocktail Shakers",
// //       "drinkware": "Drinkware",
// //       "plates": "Plates",
// //       "cups": "Cups",
// //     };
// //     return (
// //       names[slug] ||
// //       slug
// //         .split("-")
// //         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// //         .join(" ")
// //     );
// //   };

// //   const getPageTitle = () => {
// //     if (subCategorySlug) {
// //       const subCategoryDisplayName = formatCategoryName(subCategorySlug);
// //       const categoryDisplayName = formatCategoryName(categorySlug);
// //       return `${subCategoryDisplayName} in ${categoryDisplayName}`;
// //     }
// //     return formatCategoryName(categorySlug);
// //   };

// //   const getCategoryImage = (slug: string) => {
// //     const images: { [key: string]: string } = {
// //       "copper-items": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop",
// //       "bar-accessories": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1920&h=1080&fit=crop",
// //       "bagas-disposables": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&h=1080&fit=crop",
// //     };
// //     return images[slug] || images["copper-items"];
// //   };

// //   const getCategoryBadge = (slug: string) => {
// //     const badges: { [key: string]: string } = {
// //       "copper-items": "Health Benefits",
// //       "bar-accessories": "Professional Grade",
// //       "bagas-disposables": "Eco-Friendly",
// //     };
// //     return badges[slug] || "Premium Quality";
// //   };

// //   const getCategoryDescription = (slug: string) => {
// //     const descriptions: { [key: string]: string } = {
// //       "copper-items": "",
// //       "bar-accessories": "",
// //       "bagas-disposables": "",
// //     };
// //     return descriptions[slug] || "";
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-roboto">
// //       <Navbar />

// //       {/* Enhanced Header Section */}
// //       <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden"> {/* Changed py-32 to py-40 */}
// //         <div className="absolute inset-0">
// //           <img
// //             src={getCategoryImage(categorySlug || "")}
// //             alt={getPageTitle()}
// //             className="w-full h-full object-cover opacity-20"
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-indigo-900/80"></div>
// //         </div>

// //         {/* Floating Elements */}
// //         <div className="absolute inset-0 overflow-hidden">
// //           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
// //           <div
// //             className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
// //             style={{ animationDelay: "2s" }}
// //           ></div>
// //         </div>

// //         <div className="container mx-auto px-4 relative z-10">
// //           <div className="max-w-4xl mx-auto">
// //             {/* Breadcrumb */}
// //             <div className="flex items-center space-x-2 mb-8 animate-fade-in">
// //               <Link to="/products" className="text-white/70 hover:text-white transition-colors font-roboto">
// //                 Products
// //               </Link>
// //               <span className="text-white/50">/</span>
// //               {subCategorySlug ? (
// //                 <>
// //                   <Link to={`/products/${categorySlug}`} className="text-white/70 hover:text-white transition-colors font-roboto">
// //                     {formatCategoryName(categorySlug)}
// //                   </Link>
// //                   <span className="text-white/50">/</span>
// //                   <span className="text-white font-medium font-roboto">{formatCategoryName(subCategorySlug)}</span>
// //                 </>
// //               ) : (
// //                 <span className="text-white font-medium font-roboto">{formatCategoryName(categorySlug)}</span>
// //               )}
// //             </div>

// //             <div className="text-center animate-fade-in">
// //               <Badge className="mb-8 bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-6 py-2 font-roboto">
// //                 <Sparkles className="mr-2 h-4 w-4" />
// //                 {getCategoryBadge(categorySlug || "")}
// //               </Badge>
// //               <h1 className="text-5xl md:text-6xl font-bold mb-6 font-roboto bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"> {/* Removed leading-tight */}
// //                 {getPageTitle()}
// //               </h1>
// //               <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-roboto">
// //                 {getCategoryDescription(subCategorySlug || categorySlug || "")}
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Simplified Header below hero - only shows product count and back button */}
// //       <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-white/50 sticky top-0 z-40">
// //         <div className="container mx-auto px-4">
// //           <div className="flex justify-start items-center gap-4">
// //             <Button
// //               asChild
// //               variant="outline"
// //               className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 bg-transparent font-roboto"
// //             >
// //               <Link to="/products">
// //                 <ArrowLeft className="mr-2 h-4 w-4" />
// //                 Back to Products
// //               </Link>
// //             </Button>
// //             <div className="text-gray-600 font-roboto">
// //               <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products found
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Products Grid - Consistent Grid View */}
// //       <section className="py-16">
// //         <div className="container mx-auto px-4">
// //           {filteredProducts.length > 0 ? (
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
// //               {filteredProducts.map((product, index) => (
// //                 <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
// //                   <Card className="group h-full overflow-hidden border-0 shadow-none hover:shadow-none transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm"> {/* Removed shadow-xl hover:shadow-2xl and added shadow-none hover:shadow-none */}
// //                     <div className="relative">
// //                       <img
// //                         src={product.imageUrl || "/placeholder.svg"}
// //                         alt={product.name}
// //                         className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
// //                       />
// //                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //                       {/* <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 border-0 shadow-lg font-roboto">
// //                         <Star className="mr-1 h-3 w-3" />
// //                         Premium
// //                       </Badge> */}
// //                     </div>
// //                     <CardContent className="p-6">
// //                       <h3 className="text-xl font-bold text-gray-900 mb-2 font-roboto group-hover:text-blue-600 transition-colors duration-300">
// //                         {product.name}
// //                       </h3>
// //                       {/* Removed short description */}
// //                       <div className="flex items-center justify-between mt-4"> {/* Adjusted margin-top for button alignment */}
// //                         {/* Removed star rating */}
// //                         <Button
// //                           asChild
// //                           size="sm"
// //                           className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 font-roboto"
// //                         >
// //                           <Link to={`/product/${product.id}`}>View Details</Link>
// //                         </Button>
// //                       </div>
// //                     </CardContent>
// //                   </Card>
// //                 </div>
// //               ))}
// //             </div>
// //           ) : (
// //             <div className="text-center py-20">
// //               <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
// //                 <Star className="h-16 w-16 text-gray-400" />
// //               </div>
// //               <h3 className="text-2xl font-bold text-gray-900 mb-4 font-roboto">No Products Available</h3>
// //               <p className="text-lg text-gray-600 mb-8 font-roboto">
// //                 We're currently updating our {getPageTitle().toLowerCase()} collection. Please check back soon!
// //               </p>
// //               <Button
// //                 asChild
// //                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-roboto"
// //               >
// //                 <Link to="/contact-us">Contact Us for Updates</Link>
// //               </Button>
// //             </div>
// //           )}
// //         </div>
// //       </section>

// //       {/* Enhanced Category Features */}
// //       <section className="py-20 bg-gradient-to-br from-white to-blue-50">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-roboto">
// //               Why Choose Our {getPageTitle()}?
// //             </h2>
// //             <p className="text-lg text-gray-600 font-roboto leading-relaxed">
// //               Every product in this collection is carefully selected and crafted to meet the highest standards of
// //               quality and design.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             <Card className="text-center bg-gradient-to-br from-white to-blue-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
// //               <CardContent className="p-8">
// //                 <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
// //                   <Star className="h-10 w-10 text-white" />
// //                 </div>
// //                 <h3 className="text-2xl font-semibold mb-4 font-roboto text-gray-900">Premium Quality</h3>
// //                 <p className="text-gray-600 font-roboto leading-relaxed">
// //                   Each product undergoes rigorous quality control to ensure it meets our exacting standards for
// //                   durability and performance.
// //                 </p>
// //               </CardContent>
// //             </Card>

// //             <Card className="text-center bg-gradient-to-br from-white to-purple-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
// //               <CardContent className="p-8">
// //                 <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
// //                   <Sparkles className="h-10 w-10 text-white" />
// //                 </div>
// //                 <h3 className="text-2xl font-semibold mb-4 font-roboto text-gray-900">Authentic Craftsmanship</h3>
// //                 <p className="text-gray-600 font-roboto leading-relaxed">
// //                   Our skilled artisans bring decades of experience, creating unique pieces that blend traditional
// //                   techniques with modern design.
// //                 </p>
// //               </CardContent>
// //             </Card>

// //             <Card className="text-center bg-gradient-to-br from-white to-green-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
// //               <CardContent className="p-8">
// //                 <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
// //                   <Filter className="h-10 w-10 text-white" />
// //                 </div>
// //                 <h3 className="text-2xl font-semibold mb-4 font-roboto text-gray-900">Custom Solutions</h3>
// //                 <p className="text-gray-600 font-roboto leading-relaxed">
// //                   We offer customization options including engraving, special finishes, and packaging to meet your
// //                   specific requirements.
// //                 </p>
// //               </CardContent>
// //             </Card>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Call to Action */}
// //       <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
// //         <div className="absolute inset-0">
// //           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
// //           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
// //         </div>

// //         <div className="container mx-auto px-4 relative z-10">
// //           <div className="max-w-4xl mx-auto text-center animate-fade-in">
// //             <h2 className="text-4xl font-bold mb-4 font-roboto">Interested in Our {getPageTitle()}?</h2>
// //             <p className="text-xl mb-8 font-roboto leading-relaxed text-white/90">
// //               Get detailed product catalogs, pricing information, and custom quotes. We're here to help you find the
// //               perfect products for your needs.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <Button
// //                 asChild
// //                 size="lg"
// //                 className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-xl font-roboto"
// //               >
// //                 <Link to="/contact-us">Get Quote</Link>
// //               </Button>
// //               <Button
// //                 asChild
// //                 variant="outline"
// //                 size="lg"
// //                 className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-medium bg-transparent font-roboto"
// //               >
// //                 <a href="tel:+15551234567">Call Us Now</a>
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   );
// // };

// // export default CategoryPage;



// // src/pages/CategoryPage.tsx
// import type React from "react"
// import { useParams, Link } from "react-router-dom"
// import { allDetailedProductsData, type DetailedProduct } from "../data/allProductsData"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import { Button } from "../components/ui/button"
// import { Badge } from "../components/ui/badge"
// import { Card, CardContent } from "../components/ui/card"
// import { ArrowLeft, Sparkles, Star, Filter } from "lucide-react"

// const CategoryPage: React.FC = () => {
//   const { categorySlug, subCategorySlug } = useParams<{ categorySlug: string; subCategorySlug?: string }>();

//   const filteredProducts: DetailedProduct[] = allDetailedProductsData.filter((product) => {
//     const isInCategory = product.category === categorySlug;

//     if (subCategorySlug) {
//       return isInCategory && product.subCategory === subCategorySlug;
//     }

//     return isInCategory;
//   });

//   const formatCategoryName = (slug: string | undefined) => {
//     if (!slug) return "Unknown Category";
//     const names: { [key: string]: string } = {
//       "copper-items": "Copper Items",
//       "bar-accessories": "Bar Accessories",
//       "bagas-disposables": "Bagas Disposables",
//       "ice-buckets-chillers": "Ice Buckets & Chillers",
//       "jiggers-peg-measures": "Jiggers & Peg Measures",
//       "bar-tools-accessories": "Bar Tools & Accessories",
//       "bartender-sets": "Bartender Sets",
//       "bar-table-service": "Bar Table Service",
//       "ceramic-terracotta-items": "Ceramic & Terracotta Items",
//       "packaging-material": "Packaging Material",
//       "copper-bottles": "Copper Bottles",
//       "copper-jugs": "Copper-Jugs",
//       "copper-jars": "Copper Jars",
//       "copper-matkas": "Copper Matkas",
//       "meal-trays": "Meal Trays",
//       "utensils-straws": "Utensils & Straws",
//       "cocktail-shakers": "Cocktail Shakers",
//       "drinkware": "Drinkware",
//       "plates": "Plates",
//       "cups": "Cups",
//     };
//     return (
//       names[slug] ||
//       slug
//         .split("-")
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ")
//     );
//   };

//   const getPageTitle = () => {
//     if (subCategorySlug) {
//       const subCategoryDisplayName = formatCategoryName(subCategorySlug);
//       const categoryDisplayName = formatCategoryName(categorySlug);
//       return `${subCategoryDisplayName} in ${categoryDisplayName}`;
//     }
//     return formatCategoryName(categorySlug);
//   };

//   const getCategoryImage = (slug: string) => {
//     const images: { [key: string]: string } = {
//       "copper-items": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop",
//       "bar-accessories": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1920&h=1080&fit=crop",
//       "bagas-disposables": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&h=1080&fit=crop",
//     };
//     return images[slug] || images["copper-items"];
//   };

//   const getCategoryBadge = (slug: string) => {
//     const badges: { [key: string]: string } = {
//       "copper-items": "Health Benefits",
//       "bar-accessories": "Professional Grade",
//       "bagas-disposables": "Eco-Friendly",
//     };
//     return badges[slug] || "Premium Quality";
//   };

//   const getCategoryDescription = (slug: string) => {
//     const descriptions: { [key: string]: string } = {
//       "copper-items": "",
//       "bar-accessories": "",
//       "bagas-disposables": "",
//     };
//     return descriptions[slug] || "";
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-roboto">
//       <Navbar />

//       {/* Enhanced Header Section */}
//       <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src={getCategoryImage(categorySlug || "")}
//             alt={getPageTitle()}
//             className="w-full h-full object-cover opacity-20"
//           />
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-indigo-900/80"></div>
//         </div>

//         {/* Floating Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
//           <div
//             className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
//             style={{ animationDelay: "2s" }}
//           ></div>
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-4xl mx-auto">
//             {/* Breadcrumb */}
//             <div className="flex items-center space-x-2 mb-8 animate-fade-in">
//               <Link to="/products" className="text-white/70 hover:text-white transition-colors font-roboto">
//                 Products
//               </Link>
//               <span className="text-white/50">/</span>
//               {subCategorySlug ? (
//                 <>
//                   <Link to={`/products/${categorySlug}`} className="text-white/70 hover:text-white transition-colors font-roboto">
//                     {formatCategoryName(categorySlug)}
//                   </Link>
//                   <span className="text-white/50">/</span>
//                   <span className="text-white font-medium font-roboto">{formatCategoryName(subCategorySlug)}</span>
//                 </>
//               ) : (
//                 <span className="text-white font-medium font-roboto">{formatCategoryName(categorySlug)}</span>
//               )}
//             </div>

//             <div className="text-center animate-fade-in">
//               <Badge className="mb-8 bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-6 py-2 font-roboto">
//                 <Sparkles className="mr-2 h-4 w-4" />
//                 {getCategoryBadge(categorySlug || "")}
//               </Badge>
//               <h1 className="text-5xl md:text-6xl font-bold mb-6 font-roboto bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
//                 {getPageTitle()}
//               </h1>
//               <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-roboto">
//                 {getCategoryDescription(subCategorySlug || categorySlug || "")}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Simplified Header below hero - only shows product count and back button */}
//       <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-white/50 sticky top-0 z-40">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-start items-center gap-4">
//             <Button
//               asChild
//               variant="outline"
//               className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 bg-transparent font-roboto"
//             >
//               <Link to="/products">
//                 <ArrowLeft className="mr-2 h-4 w-4" />
//                 Back to Products
//               </Link>
//             </Button>
//             <div className="text-gray-600 font-roboto">
//               <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products found
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Products Grid - Consistent Grid View */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           {filteredProducts.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//               {filteredProducts.map((product, index) => (
//                 <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
//                   {/* Wrapped the Card with Link to make the entire card clickable */}
//                   <Link to={`/product/${product.id}`} className="block"> {/* Added block to make Link take full width */}
//                     <Card className="group h-80 relative overflow-hidden border-0 shadow-none hover:shadow-none transition-all duration-500 hover:scale-105 bg-transparent">
//                       {/* Image covers the entire card */}
//                       <img
//                         src={product.imageUrl || "/placeholder.svg"}
//                         alt={product.name}
//                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                       />
//                       {/* Overlay for text readability */}
//                       <div className="absolute inset-x-0 bottom-0 p-4 bg-black/60 text-white text-center">
//                         <h3 className="text-xl font-bold font-roboto">
//                           {product.name}
//                         </h3>
//                       </div>
//                       {/* Removed the "Premium" badge as it's not in the target image */}
//                     </Card>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-20">
//               <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
//                 <Star className="h-16 w-16 text-gray-400" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4 font-roboto">No Products Available</h3>
//               <p className="text-lg text-gray-600 mb-8 font-roboto">
//                 We're currently updating our {getPageTitle().toLowerCase()} collection. Please check back soon!
//               </p>
//               <Button
//                 asChild
//                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-roboto"
//               >
//                 <Link to="/contact-us">Contact Us for Updates</Link>
//               </Button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Enhanced Category Features */}
//       <section className="py-20 bg-gradient-to-br from-white to-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-roboto">
//               Why Choose Our {getPageTitle()}?
//             </h2>
//             <p className="text-lg text-gray-600 font-roboto leading-relaxed">
//               Every product in this collection is carefully selected and crafted to meet the highest standards of
//               quality and design.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="text-center bg-gradient-to-br from-white to-blue-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
//               <CardContent className="p-8">
//                 <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
//                   <Star className="h-10 w-10 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4 font-roboto text-gray-900">Premium Quality</h3>
//                 <p className="text-gray-600 font-roboto leading-relaxed">
//                   Each product undergoes rigorous quality control to ensure it meets our exacting standards for
//                   durability and performance.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="text-center bg-gradient-to-br from-white to-purple-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
//               <CardContent className="p-8">
//                 <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
//                   <Sparkles className="h-10 w-10 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4 font-roboto text-gray-900">Authentic Craftsmanship</h3>
//                 <p className="text-gray-600 font-roboto leading-relaxed">
//                   Our skilled artisans bring decades of experience, creating unique pieces that blend traditional
//                   techniques with modern design.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="text-center bg-gradient-to-br from-white to-green-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
//               <CardContent className="p-8">
//                 <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
//                   <Filter className="h-10 w-10 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4 font-roboto text-gray-900">Custom Solutions</h3>
//                 <p className="text-gray-600 font-roboto leading-relaxed">
//                   We offer customization options including engraving, special finishes, and packaging to meet your
//                   specific requirements.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-4xl mx-auto text-center animate-fade-in">
//             <h2 className="text-4xl font-bold mb-4 font-roboto">Interested in Our {getPageTitle()}?</h2>
//             <p className="text-xl mb-8 font-roboto leading-relaxed text-white/90">
//               Get detailed product catalogs, pricing information, and custom quotes. We're here to help you find the
//               perfect products for your needs.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 asChild
//                 size="lg"
//                 className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-xl font-roboto"
//               >
//                 <Link to="/contact-us">Get Quote</Link>
//               </Button>
//               <Button
//                 asChild
//                 variant="outline"
//                 size="lg"
//                 className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-medium bg-transparent font-roboto"
//               >
//                 <a href="tel:+15551234567">Call Us Now</a>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default CategoryPage;




// src/pages/CategoryPage.tsx
import type React from "react"
import { useParams, Link } from "react-router-dom"
import { allDetailedProductsData, type DetailedProduct } from "../data/allProductsData"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Card, CardContent } from "../components/ui/card"
import { ArrowLeft, Sparkles, Star, Filter } from "lucide-react"

const CategoryPage: React.FC = () => {
  const { categorySlug, subCategorySlug } = useParams<{ categorySlug: string; subCategorySlug?: string }>();

  const filteredProducts: DetailedProduct[] = allDetailedProductsData.filter((product) => {
    const isInCategory = product.category === categorySlug;

    if (subCategorySlug) {
      return isInCategory && product.subCategory === subCategorySlug;
    }

    return isInCategory;
  });

  const formatCategoryName = (slug: string | undefined) => {
    if (!slug) return "Unknown Category";
    const names: { [key: string]: string } = {
      "copper-items": "Copper Items",
      "bar-accessories": "Bar Accessories",
      "bagas-disposables": "Bagas Disposables",
      "ice-buckets-chillers": "Ice Buckets & Chillers",
      "jiggers-peg-measures": "Jiggers & Peg Measures",
      "bar-tools-accessories": "Bar Tools & Accessories",
      "bartender-sets": "Bartender Sets",
      "bar-table-service": "Bar Table Service",
      "ceramic-terracotta-items": "Ceramic & Terracotta Items",
      "packaging-material": "Packaging Material",
      "copper-bottles": "Copper Bottles",
      "copper-jugs": "Copper-Jugs",
      "copper-jars": "Copper Jars",
      "copper-matkas": "Copper Matkas",
      "meal-trays": "Meal Trays",
      "utensils-straws": "Utensils & Straws",
      "cocktail-shakers": "Cocktail Shakers",
      "drinkware": "Drinkware",
      "plates": "Plates",
      "cups": "Cups",
    };
    return (
      names[slug] ||
      slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  };

  const getPageTitle = () => {
    if (subCategorySlug) {
      const subCategoryDisplayName = formatCategoryName(subCategorySlug);
      const categoryDisplayName = formatCategoryName(categorySlug);
      return `${subCategoryDisplayName} in ${categoryDisplayName}`;
    }
    return formatCategoryName(categorySlug);
  };

  const getCategoryImage = (slug: string) => {
    const images: { [key: string]: string } = {
      "copper-items": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop",
      "bar-accessories": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1920&h=1080&fit=crop",
      "bagas-disposables": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&h=1080&fit=crop",
    };
    return images[slug] || images["copper-items"];
  };

  const getCategoryBadge = (slug: string) => {
    const badges: { [key: string]: string } = {
      "copper-items": "Health Benefits",
      "bar-accessories": "Professional Grade",
      "bagas-disposables": "Eco-Friendly",
    };
    return badges[slug] || "Premium Quality";
  };

  const getCategoryDescription = (slug: string) => {
    const descriptions: { [key: string]: string } = {
      "copper-items": "",
      "bar-accessories": "",
      "bagas-disposables": "",
    };
    return descriptions[slug] || "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-roboto">
      <Navbar />

      {/* Enhanced Header Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getCategoryImage(categorySlug || "")}
            alt={getPageTitle()}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-indigo-900/80"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 mb-8 animate-fade-in">
              <Link to="/products" className="text-white/70 hover:text-white transition-colors font-roboto">
                Products
              </Link>
              <span className="text-white/50">/</span>
              {subCategorySlug ? (
                <>
                  <Link to={`/products/${categorySlug}`} className="text-white/70 hover:text-white transition-colors font-roboto">
                    {formatCategoryName(categorySlug)}
                  </Link>
                  <span className="text-white/50">/</span>
                  <span className="text-white font-medium font-roboto">{formatCategoryName(subCategorySlug)}</span>
                </>
              ) : (
                <span className="text-white font-medium font-roboto">{formatCategoryName(categorySlug)}</span>
              )}
            </div>

            <div className="text-center animate-fade-in">
              <Badge className="mb-8 bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-6 py-2 font-roboto">
                <Sparkles className="mr-2 h-4 w-4" />
                {getCategoryBadge(categorySlug || "")}
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-roboto bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                {getPageTitle()}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-roboto">
                {getCategoryDescription(subCategorySlug || categorySlug || "")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Header below hero - only shows product count and back button */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-white/50 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-start items-center gap-4">
            <Button
              asChild
              variant="outline"
              className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 bg-transparent font-roboto"
            >
              <Link to="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
            <div className="text-gray-600 font-roboto">
              <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products found
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - Consistent Grid View */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Link wraps the entire product item (Card + name below) */}
                  <Link to={`/product/${product.id}`} className="block text-center"> {/* Added text-center here */}
                    {/* Card now only contains the image */}
                    <Card className="group h-72 w-full overflow-hidden border-0 shadow-none hover:shadow-none transition-all duration-500 hover:scale-105 bg-white rounded-lg"> {/* Fixed height for image card, removed relative */}
                      <img
                        src={product.imageUrl || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </Card>
                    {/* Product name directly below the card */}
                    <h3 className="text-lg font-semibold text-gray-900 font-roboto mt-2"> {/* Added mt-2 for spacing */}
                      {product.name}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
                <Star className="h-16 w-16 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-roboto">No Products Available</h3>
              <p className="text-lg text-gray-600 mb-8 font-roboto">
                We're currently updating our {getPageTitle().toLowerCase()} collection. Please check back soon!
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-roboto"
              >
                <Link to="/contact-us">Contact Us for Updates</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Category Features */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-roboto">
              Why Choose Our {getPageTitle()}?
            </h2>
            <p className="text-lg text-gray-600 font-roboto leading-relaxed">
              Every product in this collection is carefully selected and crafted to meet the highest standards of
              quality and design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-gradient-to-br from-white to-blue-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-roboto text-gray-900">Premium Quality</h3>
                <p className="text-gray-600 font-roboto leading-relaxed">
                  Each product undergoes rigorous quality control to ensure it meets our exacting standards for
                  durability and performance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-white to-purple-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-roboto text-gray-900">Authentic Craftsmanship</h3>
                <p className="text-gray-600 font-roboto leading-relaxed">
                  Our skilled artisans bring decades of experience, creating unique pieces that blend traditional
                  techniques with modern design.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-white to-green-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Filter className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-roboto text-gray-900">Custom Solutions</h3>
                <p className="text-gray-600 font-roboto leading-relaxed">
                  We offer customization options including engraving, special finishes, and packaging to meet your
                  specific requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 font-roboto">Interested in Our {getPageTitle()}?</h2>
            <p className="text-xl mb-8 font-roboto leading-relaxed text-white/90">
              Get detailed product catalogs, pricing information, and custom quotes. We're here to help you find the
              perfect products for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-xl font-roboto"
              >
                <Link to="/contact-us">Get Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-medium bg-transparent font-roboto"
              >
                <a href="tel:+15551234567">Call Us Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;