
// // // // // // // // import Navbar from "@/components/Navbar";
// // // // // // // // import Footer from "@/components/Footer";
// // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // import { Badge } from "@/components/ui/badge";

// // // // // // // // const Products = () => {
// // // // // // // //   const productCategories = [
// // // // // // // //     {
// // // // // // // //       category: "Copper Articles",
// // // // // // // //       image: "https://images.unsplash.com/photo-1541617392762-9bd12653bd12?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // //       description: "Premium copper products for health and elegance",
// // // // // // // //       items: [
// // // // // // // //         {
// // // // // // // //           name: "Copper Water Bottles",
// // // // // // // //           description: "Health-beneficial copper water storage",
// // // // // // // //           features: ["Antimicrobial properties", "Handcrafted", "Various sizes"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Copper Utensils Set",
// // // // // // // //           description: "Traditional cooking and serving vessels",
// // // // // // // //           features: ["Food-safe coating", "Heat efficient", "Easy maintenance"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Copper Planters",
// // // // // // // //           description: "Elegant garden and indoor planters",
// // // // // // // //           features: ["Weather resistant", "Unique patina", "Multiple designs"]
// // // // // // // //         }
// // // // // // // //       ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       category: "Bar Accessories",
// // // // // // // //       image: "https://images.unsplash.com/photo-1569878858876-c8cda7f9ecf8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // //       description: "Professional-grade bar equipment and accessories",
// // // // // // // //       items: [
// // // // // // // //         {
// // // // // // // //           name: "Cocktail Shaker Sets",
// // // // // // // //           description: "Professional-grade mixing equipment",
// // // // // // // //           features: ["Stainless steel", "Leak-proof design", "Gift packaging"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Copper Mugs",
// // // // // // // //           description: "Classic Moscow Mule mugs and variants",
// // // // // // // //           features: ["Temperature retention", "Authentic design", "Set options"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Bar Tool Collections",
// // // // // // // //           description: "Complete bartender toolkit",
// // // // // // // //           features: ["Premium materials", "Ergonomic design", "Storage included"]
// // // // // // // //         }
// // // // // // // //       ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       category: "Ceramic",
// // // // // // // //       image: "https://images.unsplash.com/photo-1630154396598-a93983682861?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // //       description: "Artistic sculptures and spiritual decorative pieces",
// // // // // // // //       items: [
// // // // // // // //         {
// // // // // // // //           name: "Religious Sculptures",
// // // // // // // //           description: "Spiritual and devotional art pieces",
// // // // // // // //           features: ["Authentic craftsmanship", "Various materials", "Custom sizes"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Decorative Figurines",
// // // // // // // //           description: "Artistic home accent pieces",
// // // // // // // //           features: ["Unique designs", "Quality finishes", "Cultural themes"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Garden Statues",
// // // // // // // //           description: "Outdoor decorative sculptures",
// // // // // // // //           features: ["Weather-resistant", "Natural materials", "Various styles"]
// // // // // // // //         }
// // // // // // // //       ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       category: "Terracotta",
// // // // // // // //       image: "https://images.unsplash.com/photo-1736143157411-0a70fe999ecb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // //       description: "Traditional clay and ceramic pottery collections",
// // // // // // // //       items: [
// // // // // // // //         {
// // // // // // // //           name: "Terracotta Flower Pots",
// // // // // // // //           description: "Traditional clay planters with natural appeal",
// // // // // // // //           features: ["Breathable material", "Natural drainage", "Handmade quality"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Ceramic Vases",
// // // // // // // //           description: "Elegant decorative and functional vases",
// // // // // // // //           features: ["Hand-painted designs", "Durable ceramic", "Various heights"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Garden Pottery",
// // // // // // // //           description: "Large outdoor planters and decorative pots",
// // // // // // // //           features: ["Weather resistant", "Traditional techniques", "Custom designs"]
// // // // // // // //         }
// // // // // // // //       ]
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-inter">
// // // // // // // //       <Navbar />
      
// // // // // // // //       {/* Header Section */}
// // // // // // // //       <section className="py-32 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
// // // // // // // //         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>
// // // // // // // //         <div className="container mx-auto px-4 relative">
// // // // // // // //           <div className="max-w-4xl mx-auto text-center animate-fade-in">
// // // // // // // //             <h1 className="text-5xl font-bold text-foreground mb-6 font-playfair">Our Product Collections</h1>
// // // // // // // //             <p className="text-xl text-muted-foreground font-inter">
// // // // // // // //               Discover our carefully curated collections of premium products, each designed for quality, 
// // // // // // // //               craftsmanship, and timeless elegance.
// // // // // // // //             </p>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* Products Grid */}
// // // // // // // //       <section className="py-20">
// // // // // // // //         <div className="container mx-auto px-4">
// // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // // // // // // //             {productCategories.map((category, categoryIndex) => (
// // // // // // // //               <div 
// // // // // // // //                 key={categoryIndex} 
// // // // // // // //                 className="group animate-fade-in" 
// // // // // // // //                 style={{ animationDelay: `${categoryIndex * 0.2}s` }}
// // // // // // // //               >
// // // // // // // //                 {/* Glass-like Category Card */}
// // // // // // // //                 <div className="relative backdrop-blur-lg bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] overflow-hidden">
// // // // // // // //                   {/* Background Pattern */}
// // // // // // // //                   <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
// // // // // // // //                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
// // // // // // // //                   <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200/30 to-yellow-200/30 rounded-full blur-2xl"></div>
                  
// // // // // // // //                   <div className="relative z-10">
// // // // // // // //                     {/* Category Header */}
// // // // // // // //                     <div className="mb-8">
// // // // // // // //                       <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-700">
// // // // // // // //                         <img 
// // // // // // // //                           src={category.image} 
// // // // // // // //                           alt={category.category}
// // // // // // // //                           className="w-full h-full object-cover"
// // // // // // // //                         />
// // // // // // // //                         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
// // // // // // // //                       </div>
// // // // // // // //                       <h2 className="text-3xl font-bold text-gray-800 mb-3 font-playfair">
// // // // // // // //                         {category.category}
// // // // // // // //                       </h2>
// // // // // // // //                       <p className="text-gray-600 text-lg font-inter mb-6">
// // // // // // // //                         {category.description}
// // // // // // // //                       </p>
// // // // // // // //                     </div>
                    
// // // // // // // //                     {/* Products List */}
// // // // // // // //                     <div className="space-y-6">
// // // // // // // //                       {category.items.map((product, productIndex) => (
// // // // // // // //                         <div key={productIndex} className="backdrop-blur-sm bg-white/40 border border-white/40 rounded-2xl p-6 hover:bg-white/50 transition-all duration-300 hover:scale-[1.02]">
// // // // // // // //                           <div className="flex flex-col">
// // // // // // // //                             <h3 className="text-xl font-semibold text-gray-800 mb-2 font-playfair">
// // // // // // // //                               {product.name}
// // // // // // // //                             </h3>
// // // // // // // //                             <p className="text-gray-600 mb-4 font-inter">
// // // // // // // //                               {product.description}
// // // // // // // //                             </p>
// // // // // // // //                             <div className="flex flex-wrap gap-2">
// // // // // // // //                               {product.features.map((feature, featureIndex) => (
// // // // // // // //                                 <Badge 
// // // // // // // //                                   key={featureIndex} 
// // // // // // // //                                   variant="secondary" 
// // // // // // // //                                   className="text-xs font-inter bg-white/60 text-gray-700 hover:bg-white/80 transition-colors duration-200 backdrop-blur-sm border border-white/50"
// // // // // // // //                                 >
// // // // // // // //                                   {feature}
// // // // // // // //                                 </Badge>
// // // // // // // //                               ))}
// // // // // // // //                             </div>
// // // // // // // //                           </div>
// // // // // // // //                         </div>
// // // // // // // //                       ))}
// // // // // // // //                     </div>
                    
// // // // // // // //                     {/* Category Action Button */}
// // // // // // // //                     <div className="mt-8 text-center">
// // // // // // // //                       <button className="backdrop-blur-sm bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white px-8 py-3 rounded-xl font-medium font-inter hover:from-blue-600/80 hover:to-purple-600/80 transition-all duration-300 hover:scale-105 shadow-lg border border-white/20">
// // // // // // // //                         Explore {category.category}
// // // // // // // //                       </button>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* Call to Action */}
// // // // // // // //       <section className="py-16 backdrop-blur-lg bg-white/30 border-t border-white/20">
// // // // // // // //         <div className="container mx-auto px-4">
// // // // // // // //           <div className="max-w-4xl mx-auto text-center animate-fade-in">
// // // // // // // //             <h2 className="text-3xl font-bold text-gray-800 mb-4 font-playfair">
// // // // // // // //               Ready to Transform Your Space?
// // // // // // // //             </h2>
// // // // // // // //             <p className="text-lg text-gray-600 mb-8 font-inter">
// // // // // // // //               Contact us for detailed catalogs, pricing information, and custom requirements. 
// // // // // // // //               We're here to help you find the perfect products for your needs.
// // // // // // // //             </p>
// // // // // // // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// // // // // // // //               <a 
// // // // // // // //                 href="/contact" 
// // // // // // // //                 className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-xl font-medium transition-all duration-300 hover:scale-105 font-inter shadow-lg"
// // // // // // // //               >
// // // // // // // //                 Get Quote
// // // // // // // //               </a>
// // // // // // // //               <a 
// // // // // // // //                 href="tel:+15551234567" 
// // // // // // // //                 className="inline-flex items-center justify-center px-8 py-3 backdrop-blur-sm bg-white/40 border border-white/50 text-gray-700 hover:bg-white/60 rounded-xl font-medium transition-all duration-300 hover:scale-105 font-inter"
// // // // // // // //               >
// // // // // // // //                 Call Us Now
// // // // // // // //               </a>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       <Footer />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Products;





















// // // // // // // // // src/pages/Products.tsx

// // // // // // // // import Navbar from "@/components/Navbar";
// // // // // // // // import Footer from "@/components/Footer";
// // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // import { Badge } from "@/components/ui/badge";

// // // // // // // // const Products = () => {
// // // // // // // //   const productCategories = [
// // // // // // // //     {
// // // // // // // //       category: "Copper Articles",
// // // // // // // //       image: "https://images.unsplash.com/photo-1541617392762-9bd12653bd12?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // //       description: "Premium copper products for health and elegance",
// // // // // // // //       items: [
// // // // // // // //         {
// // // // // // // //           name: "Copper Water Bottles",
// // // // // // // //           description: "Health-beneficial copper water storage",
// // // // // // // //           features: ["Antimicrobial properties", "Handcrafted", "Various sizes"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Copper Utensils Set",
// // // // // // // //           description: "Traditional cooking and serving vessels",
// // // // // // // //           features: ["Food-safe coating", "Heat efficient", "Easy maintenance"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Copper Planters",
// // // // // // // //           description: "Elegant garden and indoor planters",
// // // // // // // //           features: ["Weather resistant", "Unique patina", "Multiple designs"]
// // // // // // // //         }
// // // // // // // //       ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       category: "Bagas Disposables",
// // // // // // // //       image: "https://images.unsplash.com/photo-1648587456176-4969b0124b12?q=80&w=1259&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // //       description: "Professional-grade bar equipment and accessories",
// // // // // // // //       items: [
// // // // // // // //         {
// // // // // // // //           name: "Cocktail Shaker Sets",
// // // // // // // //           description: "Professional-grade mixing equipment",
// // // // // // // //           features: ["Stainless steel", "Leak-proof design", "Gift packaging"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Copper Mugs",
// // // // // // // //           description: "Classic Moscow Mule mugs and variants",
// // // // // // // //           features: ["Temperature retention", "Authentic design", "Set options"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Bar Tool Collections",
// // // // // // // //           description: "Complete bartender toolkit",
// // // // // // // //           features: ["Premium materials", "Ergonomic design", "Storage included"]
// // // // // // // //         }
// // // // // // // //       ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       category: "Ceramic",
// // // // // // // //       image: "https://images.unsplash.com/photo-1630154396598-a93983682861?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // //       description: "Artistic sculptures and spiritual decorative pieces",
// // // // // // // //       items: [
// // // // // // // //         {
// // // // // // // //           name: "Religious Sculptures",
// // // // // // // //           description: "Spiritual and devotional art pieces",
// // // // // // // //           features: ["Authentic craftsmanship", "Various materials", "Custom sizes"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Decorative Figurines",
// // // // // // // //           description: "Artistic home accent pieces",
// // // // // // // //           features: ["Unique designs", "Quality finishes", "Cultural themes"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Garden Statues",
// // // // // // // //           description: "Outdoor decorative sculptures",
// // // // // // // //           features: ["Weather-resistant", "Natural materials", "Various styles"]
// // // // // // // //         }
// // // // // // // //       ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       category: "Terracotta",
// // // // // // // //       image: "https://images.unsplash.com/photo-1736143157411-0a70fe999ecb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // //       description: "Traditional clay and ceramic pottery collections",
// // // // // // // //       items: [
// // // // // // // //         {
// // // // // // // //           name: "Terracotta Flower Pots",
// // // // // // // //           description: "Traditional clay planters with natural appeal",
// // // // // // // //           features: ["Breathable material", "Natural drainage", "Handmade quality"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Ceramic Vases",
// // // // // // // //           description: "Elegant decorative and functional vases",
// // // // // // // //           features: ["Hand-painted designs", "Durable ceramic", "Various heights"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Garden Pottery",
// // // // // // // //           description: "Large outdoor planters and decorative pots",
// // // // // // // //           features: ["Weather resistant", "Traditional techniques", "Custom designs"]
// // // // // // // //         }
// // // // // // // //       ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       category: "Bar Accessories",
// // // // // // // //       image: "https://images.unsplash.com/photo-1569878858876-c8cda7f9ecf8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // //       description: "Premium copper products for health and elegance",
// // // // // // // //       items: [
// // // // // // // //         {
// // // // // // // //           name: "Cocktail Shaker Sets",
// // // // // // // //           description: "Professional-grade mixing equipment",
// // // // // // // //           features: ["Stainless steel", "Leak-proof design", "Gift packaging"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Copper Mugs",
// // // // // // // //           description: "Classic Moscow Mule mugs and variants",
// // // // // // // //           features: ["Temperature retention", "Authentic design", "Set options"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Bar Tool Collections",
// // // // // // // //           description: "Complete bartender toolkit",
// // // // // // // //           features: ["Premium materials", "Ergonomic design", "Storage included"]
// // // // // // // //         }
// // // // // // // //       ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       category: "Packaging Material",
// // // // // // // //       image: "https://images.unsplash.com/photo-1613574203646-ffdae46ce3e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // //       description: "Premium copper products for health and elegance",
// // // // // // // //       items: [
// // // // // // // //         {
// // // // // // // //           name: "X",
// // // // // // // //           description: "Health-beneficial copper water storage",
// // // // // // // //           features: ["Antimicrobial properties", "Handcrafted", "Various sizes"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Y",
// // // // // // // //           description: "Traditional cooking and serving vessels",
// // // // // // // //           features: ["Food-safe coating", "Heat efficient", "Easy maintenance"]
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           name: "Z",
// // // // // // // //           description: "Elegant garden and indoor planters",
// // // // // // // //           features: ["Weather resistant", "Unique patina", "Multiple designs"]
// // // // // // // //         }
// // // // // // // //       ]
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-inter">
// // // // // // // //       <Navbar />

// // // // // // // //       {/* Header Section */}
// // // // // // // //       <section className="py-32 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
// // // // // // // //         {/* Changed opacity from opacity-5 to opacity-15 to make the image visible */}
// // // // // // // //         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-90"></div>
// // // // // // // //         <div className="container mx-auto px-4 relative">
// // // // // // // //           <div className="max-w-4xl mx-auto text-center animate-fade-in">
// // // // // // // //             <h1 className="text-5xl font-bold text-foreground mb-6 font-playfair">Our Product Collections</h1>
// // // // // // // //             <p className="text-xl text-muted-foreground font-inter">
// // // // // // // //               Discover our carefully curated collections of premium products, each designed for quality,
// // // // // // // //               craftsmanship, and timeless elegance.
// // // // // // // //             </p>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* Products Grid */}
// // // // // // // //       <section className="py-20">
// // // // // // // //         <div className="container mx-auto px-4">
// // // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // // // // // // //             {productCategories.map((category, categoryIndex) => (
// // // // // // // //               <div
// // // // // // // //                 key={categoryIndex}
// // // // // // // //                 className="group animate-fade-in"
// // // // // // // //                 style={{ animationDelay: `${categoryIndex * 0.2}s` }}
// // // // // // // //               >
// // // // // // // //                 {/* Glass-like Category Card */}
// // // // // // // //                 <div className="relative backdrop-blur-lg bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] overflow-hidden">
// // // // // // // //                   {/* Background Pattern */}
// // // // // // // //                   <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
// // // // // // // //                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
// // // // // // // //                   <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200/30 to-yellow-200/30 rounded-full blur-2xl"></div>

// // // // // // // //                   <div className="relative z-10">
// // // // // // // //                     {/* Category Header */}
// // // // // // // //                     <div className="mb-8">
// // // // // // // //                       <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-700">
// // // // // // // //                         <img
// // // // // // // //                           src={category.image}
// // // // // // // //                           alt={category.category}
// // // // // // // //                           className="w-full h-full object-cover"
// // // // // // // //                         />
// // // // // // // //                         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
// // // // // // // //                       </div>
// // // // // // // //                       <h2 className="text-3xl font-bold text-gray-800 mb-3 font-playfair">
// // // // // // // //                         {category.category}
// // // // // // // //                       </h2>
// // // // // // // //                       <p className="text-gray-600 text-lg font-inter mb-6">
// // // // // // // //                         {category.description}
// // // // // // // //                       </p>
// // // // // // // //                     </div>

// // // // // // // //                     {/* Products List */}
// // // // // // // //                     <div className="space-y-6">
// // // // // // // //                       {category.items.map((product, productIndex) => (
// // // // // // // //                         <div key={productIndex} className="backdrop-blur-sm bg-white/40 border border-white/40 rounded-2xl p-6 hover:bg-white/50 transition-all duration-300 hover:scale-[1.02]">
// // // // // // // //                           <div className="flex flex-col">
// // // // // // // //                             <h3 className="text-xl font-semibold text-gray-800 mb-2 font-playfair">
// // // // // // // //                               {product.name}
// // // // // // // //                             </h3>
// // // // // // // //                             <p className="text-gray-600 mb-4 font-inter">
// // // // // // // //                               {product.description}
// // // // // // // //                             </p>
// // // // // // // //                             <div className="flex flex-wrap gap-2">
// // // // // // // //                               {product.features.map((feature, featureIndex) => (
// // // // // // // //                                 <Badge
// // // // // // // //                                   key={featureIndex}
// // // // // // // //                                   variant="secondary"
// // // // // // // //                                   className="text-xs font-inter bg-white/60 text-gray-700 hover:bg-white/80 transition-colors duration-200 backdrop-blur-sm border border-white/50"
// // // // // // // //                                 >
// // // // // // // //                                   {feature}
// // // // // // // //                                 </Badge>
// // // // // // // //                               ))}
// // // // // // // //                             </div>
// // // // // // // //                           </div>
// // // // // // // //                         </div>
// // // // // // // //                       ))}
// // // // // // // //                     </div>

// // // // // // // //                     {/* Category Action Button */}
// // // // // // // //                     <div className="mt-8 text-center">
// // // // // // // //                       <button className="backdrop-blur-sm bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white px-8 py-3 rounded-xl font-medium font-inter hover:from-blue-600/80 hover:to-purple-600/80 transition-all duration-300 hover:scale-105 shadow-lg border border-white/20">
// // // // // // // //                         Explore {category.category}
// // // // // // // //                       </button>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* Call to Action */}
// // // // // // // //       <section className="py-16 backdrop-blur-lg bg-white/30 border-t border-white/20">
// // // // // // // //         <div className="container mx-auto px-4">
// // // // // // // //           <div className="max-w-4xl mx-auto text-center animate-fade-in">
// // // // // // // //             <h2 className="text-3xl font-bold text-gray-800 mb-4 font-playfair">
// // // // // // // //               Ready to Transform Your Space?
// // // // // // // //             </h2>
// // // // // // // //             <p className="text-lg text-gray-600 mb-8 font-inter">
// // // // // // // //               Contact us for detailed catalogs, pricing information, and custom requirements.
// // // // // // // //               We're here to help you find the perfect products for your needs.
// // // // // // // //             </p>
// // // // // // // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// // // // // // // //               <a
// // // // // // // //                 href="/contact"
// // // // // // // //                 className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-xl font-medium transition-all duration-300 hover:scale-105 font-inter shadow-lg"
// // // // // // // //               >
// // // // // // // //                 Get Quote
// // // // // // // //               </a>
// // // // // // // //               <a
// // // // // // // //                 href="tel:+15551234567"
// // // // // // // //                 className="inline-flex items-center justify-center px-8 py-3 backdrop-blur-sm bg-white/40 border border-white/50 text-gray-700 hover:bg-white/60 rounded-xl font-medium transition-all duration-300 hover:scale-105 font-inter"
// // // // // // // //               >
// // // // // // // //                 Call Us Now
// // // // // // // //               </a>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       <Footer />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Products;




// // // // // // // // src/pages/Products.tsx

// // // // // // // import Navbar from "@/components/Navbar";
// // // // // // // import Footer from "@/components/Footer";
// // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // import { Badge } from "@/components/ui/badge";
// // // // // // // import { Button } from "@/components/ui/button"; // Ensure Button is imported if used with asChild
// // // // // // // import { Link } from "react-router-dom"; // Ensure Link is imported

// // // // // // // const Products = () => {
// // // // // // //   const productCategories = [
// // // // // // //     {
// // // // // // //       category: "Copper Articles",
// // // // // // //       image: "https://images.unsplash.com/photo-1541617392762-9bd12653bd12?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // //       description: "Premium copper products for health and elegance",
// // // // // // //       slug: "copper-items", // Added slug for direct linking
// // // // // // //       items: [
// // // // // // //         {
// // // // // // //           name: "Copper Water Bottles",
// // // // // // //           description: "Health-beneficial copper water storage",
// // // // // // //           features: ["Antimicrobial properties", "Handcrafted", "Various sizes"]
// // // // // // //         },
// // // // // // //         {
// // // // // // //           name: "Copper Utensils Set",
// // // // // // //           description: "Traditional cooking and serving vessels",
// // // // // // //           features: ["Food-safe coating", "Heat efficient", "Easy maintenance"]
// // // // // // //         },
// // // // // // //         {
// // // // // // //           name: "Copper Planters",
// // // // // // //           description: "Elegant garden and indoor planters",
// // // // // // //           features: ["Weather resistant", "Unique patina", "Multiple designs"]
// // // // // // //         }
// // // // // // //       ]
// // // // // // //     },
// // // // // // //     {
// // // // // // //       category: "Bagas Disposables",
// // // // // // //       image: "https://images.unsplash.com/photo-1648587456176-4969b0124b12?q=80&w=1259&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // //       description: "Eco-friendly, compostable solutions for food service and events", // Corrected description
// // // // // // //       slug: "bagas-disposables", // Added slug for direct linking
// // // // // // //       items: [
// // // // // // //         {
// // // // // // //           name: "Meal Trays",
// // // // // // //           description: "Sturdy and compostable bagasse meal trays",
// // // // // // //           features: ["Multiple compartments", "Microwave safe", "Leak-resistant"]
// // // // // // //         },
// // // // // // //         {
// // // // // // //           name: "Disposable Cups",
// // // // // // //           description: "Biodegradable cups for hot and cold beverages",
// // // // // // //           features: ["Various sizes", "Sustainable material", "Comfortable grip"]
// // // // // // //         },
// // // // // // //         {
// // // // // // //           name: "Utensils & Straws",
// // // // // // //           description: "Compostable forks, spoons, and straws",
// // // // // // //           features: ["Durable wood/bagasse", "Plastic-free", "Smooth finish"]
// // // // // // //         }
// // // // // // //       ]
// // // // // // //     },
// // // // // // //     {
// // // // // // //       category: "Ceramic & Terracotta Items", // Combined for simplicity based on your data and common product grouping
// // // // // // //       image: "https://images.unsplash.com/photo-1630154396598-a93983682861?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // //       description: "Handcrafted pottery and decorative pieces for home and garden",
// // // // // // //       slug: "ceramic-terracotta-items", // Added slug for direct linking
// // // // // // //       items: [
// // // // // // //         {
// // // // // // //           name: "Ceramic Vases",
// // // // // // //           description: "Elegant decorative and functional vases",
// // // // // // //           features: ["Hand-painted designs", "Durable ceramic", "Various heights"]
// // // // // // //         },
// // // // // // //         {
// // // // // // //           name: "Terracotta Flower Pots",
// // // // // // //           description: "Traditional clay planters with natural appeal",
// // // // // // //           features: ["Breathable material", "Natural drainage", "Handmade quality"]
// // // // // // //         },
// // // // // // //         {
// // // // // // //           name: "Decorative Figurines",
// // // // // // //           description: "Artistic home accent pieces",
// // // // // // //           features: ["Unique designs", "Quality finishes", "Cultural themes"]
// // // // // // //         }
// // // // // // //       ]
// // // // // // //     },
// // // // // // //     {
// // // // // // //       category: "Bar Accessories",
// // // // // // //       image: "https://images.unsplash.com/photo-1569878858876-c8cda7f9ecf8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // //       description: "Professional-grade bar equipment and accessories for mixology enthusiasts", // Corrected description
// // // // // // //       slug: "bar-accessories", // Added slug for direct linking
// // // // // // //       items: [
// // // // // // //         {
// // // // // // //           name: "Cocktail Shaker Sets",
// // // // // // //           description: "Professional-grade mixing equipment",
// // // // // // //           features: ["Stainless steel", "Leak-proof design", "Gift packaging"]
// // // // // // //         },
// // // // // // //         {
// // // // // // //           name: "Copper Mugs",
// // // // // // //           description: "Classic Moscow Mule mugs and variants",
// // // // // // //           features: ["Temperature retention", "Authentic design", "Set options"]
// // // // // // //         },
// // // // // // //         {
// // // // // // //           name: "Bar Tool Collections",
// // // // // // //           description: "Complete bartender toolkit",
// // // // // // //           features: ["Premium materials", "Ergonomic design", "Storage included"]
// // // // // // //         }
// // // // // // //       ]
// // // // // // //     },
// // // // // // //     {
// // // // // // //       category: "Packaging Material",
// // // // // // //       image: "https://images.unsplash.com/photo-1613574203646-ffdae46ce3e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // //       description: "Secure and elegant solutions for all your product packaging needs",
// // // // // // //       slug: "packaging-material", // Added slug for direct linking
// // // // // // //       items: [
// // // // // // //         {
// // // // // // //           name: "Glass Jars & Bottles",
// // // // // // //           description: "High-quality glass containers for various uses",
// // // // // // //           features: ["Food-grade", "Airtight seals", "Recyclable"]
// // // // // // //         },
// // // // // // //         {
// // // // // // //           name: "Food Trays & Containers",
// // // // // // //           description: "Disposable and reusable options for food packaging",
// // // // // // //           features: ["Microwave safe", "Leak-resistant", "Eco-friendly materials"]
// // // // // // //         },
// // // // // // //         {
// // // // // // //           name: "Custom Packaging Solutions",
// // // // // // //           description: "Tailored packaging designs to meet unique business needs",
// // // // // // //           features: ["Branding options", "Various materials", "Protective solutions"]
// // // // // // //         }
// // // // // // //       ]
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-inter">
// // // // // // //       <Navbar />

// // // // // // //       {/* Header Section */}
// // // // // // //       <section className="py-32 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
// // // // // // //         {/* Changed opacity from opacity-5 to opacity-15 to make the image visible */}
// // // // // // //         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-90"></div>
// // // // // // //         <div className="container mx-auto px-4 relative">
// // // // // // //           <div className="max-w-4xl mx-auto text-center animate-fade-in">
// // // // // // //             <h1 className="text-5xl font-bold text-foreground mb-6 font-playfair">Our Product Collections</h1>
// // // // // // //             <p className="text-xl text-muted-foreground font-inter">
// // // // // // //               Discover our carefully curated collections of premium products, each designed for quality,
// // // // // // //               craftsmanship, and timeless elegance.
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* Products Grid */}
// // // // // // //       <section className="py-20">
// // // // // // //         <div className="container mx-auto px-4">
// // // // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // // // // // //             {productCategories.map((category, categoryIndex) => (
// // // // // // //               <div
// // // // // // //                 key={category.slug || categoryIndex} // Use slug as key if available, fallback to index
// // // // // // //                 className="group animate-fade-in"
// // // // // // //                 style={{ animationDelay: `${categoryIndex * 0.2}s` }}
// // // // // // //               >
// // // // // // //                 {/* Glass-like Category Card */}
// // // // // // //                 <div className="relative backdrop-blur-lg bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] overflow-hidden">
// // // // // // //                   {/* Background Pattern */}
// // // // // // //                   <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
// // // // // // //                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
// // // // // // //                   <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200/30 to-yellow-200/30 rounded-full blur-2xl"></div>

// // // // // // //                   <div className="relative z-10">
// // // // // // //                     {/* Category Header */}
// // // // // // //                     <div className="mb-8">
// // // // // // //                       <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-700">
// // // // // // //                         <img
// // // // // // //                           src={category.image}
// // // // // // //                           alt={category.category}
// // // // // // //                           className="w-full h-full object-cover"
// // // // // // //                         />
// // // // // // //                         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
// // // // // // //                       </div>
// // // // // // //                       <h2 className="text-3xl font-bold text-gray-800 mb-3 font-playfair">
// // // // // // //                         {category.category}
// // // // // // //                       </h2>
// // // // // // //                       <p className="text-gray-600 text-lg font-inter mb-6">
// // // // // // //                         {category.description}
// // // // // // //                       </p>
// // // // // // //                     </div>

// // // // // // //                     {/* Products List */}
// // // // // // //                     <div className="space-y-6">
// // // // // // //                       {category.items.map((product, productIndex) => (
// // // // // // //                         <div key={productIndex} className="backdrop-blur-sm bg-white/40 border border-white/40 rounded-2xl p-6 hover:bg-white/50 transition-all duration-300 hover:scale-[1.02]">
// // // // // // //                           <div className="flex flex-col">
// // // // // // //                             <h3 className="text-xl font-semibold text-gray-800 mb-2 font-playfair">
// // // // // // //                               {product.name}
// // // // // // //                             </h3>
// // // // // // //                             <p className="text-gray-600 mb-4 font-inter">
// // // // // // //                               {product.description}
// // // // // // //                             </p>
// // // // // // //                             <div className="flex flex-wrap gap-2">
// // // // // // //                               {product.features.map((feature, featureIndex) => (
// // // // // // //                                 <Badge
// // // // // // //                                   key={featureIndex}
// // // // // // //                                   variant="secondary"
// // // // // // //                                   className="text-xs font-inter bg-white/60 text-gray-700 hover:bg-white/80 transition-colors duration-200 backdrop-blur-sm border border-white/50"
// // // // // // //                                 >
// // // // // // //                                   {feature}
// // // // // // //                                 </Badge>
// // // // // // //                               ))}
// // // // // // //                             </div>
// // // // // // //                           </div>
// // // // // // //                         </div>
// // // // // // //                       ))}
// // // // // // //                     </div>

// // // // // // //                     {/* Category Action Button */}
// // // // // // //                     <div className="mt-8 text-center">
// // // // // // //                       <Link to={`/products/${category.slug}`}> {/* Use Link for internal navigation */}
// // // // // // //                         <Button className="backdrop-blur-sm bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white px-8 py-3 rounded-xl font-medium font-inter hover:from-blue-600/80 hover:to-purple-600/80 transition-all duration-300 hover:scale-105 shadow-lg border border-white/20">
// // // // // // //                           Explore {category.category}
// // // // // // //                         </Button>
// // // // // // //                       </Link>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* Call to Action */}
// // // // // // //       <section className="py-16 backdrop-blur-lg bg-white/30 border-t border-white/20">
// // // // // // //         <div className="container mx-auto px-4">
// // // // // // //           <div className="max-w-4xl mx-auto text-center animate-fade-in">
// // // // // // //             <h2 className="text-3xl font-bold text-gray-800 mb-4 font-playfair">
// // // // // // //               Ready to Transform Your Space?
// // // // // // //             </h2>
// // // // // // //             <p className="text-lg text-gray-600 mb-8 font-inter">
// // // // // // //               Contact us for detailed catalogs, pricing information, and custom requirements.
// // // // // // //               We're here to help you find the perfect products for your needs.
// // // // // // //             </p>
// // // // // // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// // // // // // //               <Link // Changed <a> to <Link> for internal navigation
// // // // // // //                 to="/contact-us" // Updated path to match App.tsx
// // // // // // //                 className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-xl font-medium transition-all duration-300 hover:scale-105 font-inter shadow-lg"
// // // // // // //               >
// // // // // // //                 Get Quote
// // // // // // //               </Link>
// // // // // // //               <a
// // // // // // //                 href="tel:+15551234567"
// // // // // // //                 className="inline-flex items-center justify-center px-8 py-3 backdrop-blur-sm bg-white/40 border border-white/50 text-gray-700 hover:bg-white/60 rounded-xl font-medium transition-all duration-300 hover:scale-105 font-inter"
// // // // // // //               >
// // // // // // //                 Call Us Now
// // // // // // //               </a>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       <Footer />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Products;


// src/pages/Products.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Products = () => {
  const productCategories = [
    {
      category: "Copper Articles",
      image: "https://images.unsplash.com/photo-1541617392762-9bd12653bd12?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Premium copper products for health and elegance",
      slug: "copper-items",
      items: [
        {
          name: "Copper Water Bottles",
          description: "Health-beneficial copper water storage",
          features: ["Antimicrobial properties", "Handcrafted", "Various sizes"]
        },
        {
          name: "Copper Utensils Set",
          description: "Traditional cooking and serving vessels",
          features: ["Food-safe coating", "Heat efficient", "Easy maintenance"]
        },
        {
          name: "Copper Planters",
          description: "Elegant garden and indoor planters",
          features: ["Weather resistant", "Unique patina", "Multiple designs"]
        }
      ]
    },
    {
      category: "Bagas Disposables",
      image: "https://images.unsplash.com/photo-1648587456176-4969b0124b12?q=80&w=1259&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Eco-friendly, compostable solutions for food service and events",
      slug: "bagas-disposables",
      items: [
        {
          name: "Meal Trays",
          description: "Sturdy and compostable bagasse meal trays",
          features: ["Multiple compartments", "Microwave safe", "Leak-resistant"]
        },
        {
          name: "Disposable Cups",
          description: "Biodegradable cups for hot and cold beverages",
          features: ["Various sizes", "Sustainable material", "Comfortable grip"]
        },
        {
          name: "Utensils & Straws",
          description: "Compostable forks, spoons, and straws",
          features: ["Durable wood/bagasse", "Plastic-free", "Smooth finish"]
        }
      ]
    },
    {
      category: "Ceramic & Terracotta Items",
      image: "https://images.unsplash.com/photo-1630154396598-a93983682861?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Handcrafted pottery and decorative pieces for home and garden",
      slug: "ceramic-terracotta-items",
      items: [
        {
          name: "Ceramic Vases",
          description: "Elegant decorative and functional vases",
          features: ["Hand-painted designs", "Durable ceramic", "Various heights"]
        },
        {
          name: "Terracotta Flower Pots",
          description: "Traditional clay planters with natural appeal",
          features: ["Breathable material", "Natural drainage", "Handmade quality"]
        },
        {
          name: "Decorative Figurines",
          description: "Artistic home accent pieces",
          features: ["Unique designs", "Quality finishes", "Cultural themes"]
        }
      ]
    },
    {
      category: "Bar Accessories",
      image: "https://images.unsplash.com/photo-1569878858876-c8cda7f9ecf8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Professional-grade bar equipment and accessories for mixology enthusiasts",
      slug: "bar-accessories",
      items: [
        {
          name: "Cocktail Shaker Sets",
          description: "Professional-grade mixing equipment",
          features: ["Stainless steel", "Leak-proof design", "Gift packaging"]
        },
        {
          name: "Copper Mugs",
          description: "Classic Moscow Mule mugs and variants",
          features: ["Temperature retention", "Authentic design", "Set options"]
        },
        {
          name: "Bar Tool Collections",
          description: "Complete bartender toolkit",
          features: ["Premium materials", "Ergonomic design", "Storage included"]
        }
      ]
    },
    {
      category: "Packaging Material",
      image: "https://images.unsplash.com/photo-1613574203646-ffdae46ce3e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Secure and elegant solutions for all your product packaging needs",
      slug: "packaging-material",
      items: [
        {
          name: "Glass Jars & Bottles",
          description: "High-quality glass containers for various uses",
          features: ["Food-grade", "Airtight seals", "Recyclable"]
        },
        {
          name: "Food Trays & Containers",
          description: "Disposable and reusable options for food packaging",
          features: ["Microwave safe", "Leak-resistant", "Eco-friendly materials"]
        },
        {
          name: "Custom Packaging Solutions",
          description: "Tailored packaging designs to meet unique business needs",
          features: ["Branding options", "Various materials", "Protective solutions"]
        }
      ]
    }
  ];

  return (
    // Set the overall page font to font-roboto
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-roboto">
      <Navbar />

      {/* Header Section */}
      <section className="py-32 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-90"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* Changed to font-roboto */}
            <h1 className="text-5xl font-bold text-foreground mb-6 font-roboto">Our Product Collections</h1>
            {/* Changed to font-roboto */}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productCategories.map((category, categoryIndex) => (
              <div
                key={category.slug || categoryIndex}
                className="group animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                {/* Glass-like Category Card */}
                <div className="relative backdrop-blur-lg bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200/30 to-yellow-200/30 rounded-full blur-2xl"></div>

                  <div className="relative z-10">
                    {/* Category Header */}
                    <div className="mb-8">
                      <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-700">
                        <img
                          src={category.image}
                          alt={category.category}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </div>
                      {/* Changed to font-roboto */}
                      <h2 className="text-3xl font-bold text-gray-800 mb-3 font-roboto">
                        {category.category}
                      </h2>
                      {/* Changed to font-roboto */}
                      <p className="text-gray-600 text-lg font-roboto mb-6">
                        {category.description}
                      </p>
                    </div>

                    {/* Products List */}
                    <div className="space-y-6">
                      {category.items.map((product, productIndex) => (
                        <div key={productIndex} className="backdrop-blur-sm bg-white/40 border border-white/40 rounded-2xl p-6 hover:bg-white/50 transition-all duration-300 hover:scale-[1.02]">
                          <div className="flex flex-col">
                            {/* Changed to font-roboto */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 font-roboto">
                              {product.name}
                            </h3>
                            {/* Changed to font-roboto */}
                            <p className="text-gray-600 mb-4 font-roboto">
                              {product.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {product.features.map((feature, featureIndex) => (
                                <Badge
                                  key={featureIndex}
                                  variant="secondary"
                                  // Changed to font-roboto
                                  className="text-xs font-roboto bg-white/60 text-gray-700 hover:bg-white/80 transition-colors duration-200 backdrop-blur-sm border border-white/50"
                                >
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Category Action Button */}
                    <div className="mt-8 text-center">
                      <Link to={`/products/${category.slug}`}>
                        {/* Changed to font-roboto */}
                        <Button className="backdrop-blur-sm bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white px-8 py-3 rounded-xl font-medium font-roboto hover:from-blue-600/80 hover:to-purple-600/80 transition-all duration-300 hover:scale-105 shadow-lg border border-white/20">
                          Explore {category.category}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 backdrop-blur-lg bg-white/30 border-t border-white/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* Changed to font-roboto */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-roboto">
              Ready to Transform Your Space?
            </h2>
            {/* Changed to font-roboto */}
            <p className="text-lg text-gray-600 mb-8 font-roboto">
              Contact us for detailed catalogs, pricing information, and custom requirements.
              We're here to help you find the perfect products for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact-us"
                // Changed to font-roboto
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-xl font-medium transition-all duration-300 hover:scale-105 font-roboto shadow-lg"
              >
                Get Quote
              </Link>
              <a
                href="tel:+15551234567"
                // Changed to font-roboto
                className="inline-flex items-center justify-center px-8 py-3 backdrop-blur-sm bg-white/40 border border-white/50 text-gray-700 hover:bg-white/60 rounded-xl font-medium transition-all duration-300 hover:scale-105 font-roboto"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;





// // // // // "use client"

// // // // // import React from "react"
// // // // // import { Link } from "react-router-dom"
// // // // // import Navbar from "../components/Navbar"
// // // // // import Footer from "../components/Footer"
// // // // // import { Button } from "../components/ui/button"
// // // // // import { Badge } from "../components/ui/badge"
// // // // // import { Card, CardContent } from "../components/ui/card"
// // // // // import { allDetailedProductsData } from "../data/allProductsData"
// // // // // import { Star, Sparkles, TrendingUp, Award, Users } from "lucide-react"

// // // // // const Products = () => {
// // // // //   // Get unique categories with product counts
// // // // //   const categories = React.useMemo(() => {
// // // // //     const categoryMap = new Map()

// // // // //     allDetailedProductsData.forEach((product) => {
// // // // //       if (categoryMap.has(product.category)) {
// // // // //         categoryMap.get(product.category).count++
// // // // //         categoryMap.get(product.category).products.push(product)
// // // // //       } else {
// // // // //         categoryMap.set(product.category, {
// // // // //           name: product.category,
// // // // //           count: 1,
// // // // //           products: [product],
// // // // //           slug: product.category,
// // // // //         })
// // // // //       }
// // // // //     })

// // // // //     return Array.from(categoryMap.values())
// // // // //   }, [])

// // // // //   const getCategoryDisplayName = (slug: string) => {
// // // // //     const names = {
// // // // //       "copper-items": "Copper Items",
// // // // //       "bar-accessories": "Bar Accessories",
// // // // //       "bagas-disposables": "Bagas Disposables",
// // // // //     }
// // // // //     return names[slug as keyof typeof names] || slug
// // // // //   }

// // // // //   const getCategoryImage = (slug: string) => {
// // // // //     const images = {
// // // // //       "copper-items": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
// // // // //       "bar-accessories": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&h=600&fit=crop",
// // // // //       "bagas-disposables": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
// // // // //     }
// // // // //     return images[slug as keyof typeof images] || images["copper-items"]
// // // // //   }

// // // // //   const getCategoryBadge = (slug: string) => {
// // // // //     const badges = {
// // // // //       "copper-items": "Health Benefits",
// // // // //       "bar-accessories": "Professional Grade",
// // // // //       "bagas-disposables": "Eco-Friendly",
// // // // //     }
// // // // //     return badges[slug as keyof typeof badges] || "Premium Quality"
// // // // //   }

// // // // //   const getCategoryDescription = (slug: string) => {
// // // // //     const descriptions = {
// // // // //       "copper-items": "Premium copper products offering natural health benefits and traditional craftsmanship.",
// // // // //       "bar-accessories": "Professional-grade bar tools and equipment for the perfect cocktail experience.",
// // // // //       "bagas-disposables": "Sustainable and eco-friendly disposable products made from natural materials.",
// // // // //     }
// // // // //     return descriptions[slug as keyof typeof descriptions] || "Premium quality products crafted with care."
// // // // //   }

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
// // // // //       <Navbar />

// // // // //       {/* Header Section */}
// // // // //       <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
// // // // //         <div className="absolute inset-0">
// // // // //           <img
// // // // //             src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
// // // // //             alt="Products"
// // // // //             className="w-full h-full object-cover opacity-20"
// // // // //           />
// // // // //           <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-indigo-900/80"></div>
// // // // //         </div>

// // // // //         {/* Floating Elements */}
// // // // //         <div className="absolute inset-0 overflow-hidden">
// // // // //           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
// // // // //           <div
// // // // //             className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
// // // // //             style={{ animationDelay: "2s" }}
// // // // //           ></div>
// // // // //         </div>

// // // // //         <div className="container mx-auto px-4 relative z-10">
// // // // //           <div className="max-w-4xl mx-auto text-center animate-fade-in">
// // // // //             <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-6 py-2">
// // // // //               <Sparkles className="mr-2 h-4 w-4" />
// // // // //               Premium Collection
// // // // //             </Badge>
// // // // //             <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
// // // // //               Our Products
// // // // //             </h1>
// // // // //             <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-inter">
// // // // //               Discover our comprehensive range of premium products, from traditional copper items to modern bar
// // // // //               accessories and eco-friendly solutions.
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Stats Section */}
// // // // //       <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
// // // // //         <div className="container mx-auto px-4">
// // // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// // // // //             <div className="text-center animate-fade-in">
// // // // //               <div className="text-4xl font-bold mb-2 font-playfair">{categories.length}</div>
// // // // //               <div className="text-white/80 font-inter">Categories</div>
// // // // //             </div>
// // // // //             <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
// // // // //               <div className="text-4xl font-bold mb-2 font-playfair">{allDetailedProductsData.length}+</div>
// // // // //               <div className="text-white/80 font-inter">Products</div>
// // // // //             </div>
// // // // //             <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
// // // // //               <div className="text-4xl font-bold mb-2 font-playfair">100%</div>
// // // // //               <div className="text-white/80 font-inter">Quality Assured</div>
// // // // //             </div>
// // // // //             <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
// // // // //               <div className="text-4xl font-bold mb-2 font-playfair">24/7</div>
// // // // //               <div className="text-white/80 font-inter">Support</div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Product Categories */}
// // // // //       <section className="py-20">
// // // // //         <div className="container mx-auto px-4">
// // // // //           <div className="max-w-4xl mx-auto text-center mb-16">
// // // // //             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Product Categories</h2>
// // // // //             <p className="text-lg text-gray-600 font-inter leading-relaxed">
// // // // //               Browse our carefully curated categories, each featuring premium products designed to meet your specific
// // // // //               needs.
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // // //             {categories.map((category, index) => (
// // // // //               <div key={category.slug} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
// // // // //                 <Card className="group h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm">
// // // // //                   <div className="relative">
// // // // //                     <img
// // // // //                       src={getCategoryImage(category.slug) || "/placeholder.svg"}
// // // // //                       alt={getCategoryDisplayName(category.slug)}
// // // // //                       className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
// // // // //                     />
// // // // //                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// // // // //                     <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 border-0 shadow-lg">
// // // // //                       <Star className="mr-1 h-3 w-3" />
// // // // //                       {getCategoryBadge(category.slug)}
// // // // //                     </Badge>
// // // // //                     <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg">
// // // // //                       {category.count} Products
// // // // //                     </Badge>
// // // // //                   </div>
// // // // //                   <CardContent className="p-6">
// // // // //                     <h3 className="text-2xl font-bold text-gray-900 mb-2 font-playfair group-hover:text-blue-600 transition-colors duration-300">
// // // // //                       {getCategoryDisplayName(category.slug)}
// // // // //                     </h3>
// // // // //                     <p className="text-gray-600 mb-4 font-inter leading-relaxed">
// // // // //                       {getCategoryDescription(category.slug)}
// // // // //                     </p>
// // // // //                     <div className="flex items-center justify-between">
// // // // //                       <div className="flex items-center space-x-1">
// // // // //                         {[...Array(5)].map((_, i) => (
// // // // //                           <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
// // // // //                         ))}
// // // // //                         <span className="text-sm text-gray-500 ml-2 font-inter">(4.9)</span>
// // // // //                       </div>
// // // // //                       <Button
// // // // //                         asChild
// // // // //                         size="sm"
// // // // //                         className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105"
// // // // //                       >
// // // // //                         <Link to={`/category/${category.slug}`}>View Products</Link>
// // // // //                       </Button>
// // // // //                     </div>
// // // // //                   </CardContent>
// // // // //                 </Card>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Features Section */}
// // // // //       <section className="py-20 bg-gradient-to-br from-white to-blue-50">
// // // // //         <div className="container mx-auto px-4">
// // // // //           <div className="max-w-4xl mx-auto text-center mb-16">
// // // // //             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Why Choose Our Products?</h2>
// // // // //             <p className="text-lg text-gray-600 font-inter leading-relaxed">
// // // // //               Every product in our collection is carefully selected and crafted to meet the highest standards of quality
// // // // //               and design.
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // //             <Card className="text-center bg-gradient-to-br from-white to-blue-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
// // // // //               <CardContent className="p-8">
// // // // //                 <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
// // // // //                   <Award className="h-10 w-10 text-white" />
// // // // //                 </div>
// // // // //                 <h3 className="text-2xl font-semibold mb-4 font-playfair text-gray-900">Premium Quality</h3>
// // // // //                 <p className="text-gray-600 font-inter leading-relaxed">
// // // // //                   Each product undergoes rigorous quality control to ensure it meets our exacting standards for
// // // // //                   durability and performance.
// // // // //                 </p>
// // // // //               </CardContent>
// // // // //             </Card>

// // // // //             <Card className="text-center bg-gradient-to-br from-white to-purple-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
// // // // //               <CardContent className="p-8">
// // // // //                 <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
// // // // //                   <Users className="h-10 w-10 text-white" />
// // // // //                 </div>
// // // // //                 <h3 className="text-2xl font-semibold mb-4 font-playfair text-gray-900">Expert Craftsmanship</h3>
// // // // //                 <p className="text-gray-600 font-inter leading-relaxed">
// // // // //                   Our skilled artisans bring decades of experience, creating unique pieces that blend traditional
// // // // //                   techniques with modern design.
// // // // //                 </p>
// // // // //               </CardContent>
// // // // //             </Card>

// // // // //             <Card className="text-center bg-gradient-to-br from-white to-green-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
// // // // //               <CardContent className="p-8">
// // // // //                 <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
// // // // //                   <TrendingUp className="h-10 w-10 text-white" />
// // // // //                 </div>
// // // // //                 <h3 className="text-2xl font-semibold mb-4 font-playfair text-gray-900">Innovation</h3>
// // // // //                 <p className="text-gray-600 font-inter leading-relaxed">
// // // // //                   We continuously innovate and improve our products, incorporating the latest technologies and design
// // // // //                   trends to stay ahead.
// // // // //                 </p>
// // // // //               </CardContent>
// // // // //             </Card>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Call to Action */}
// // // // //       <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
// // // // //         <div className="absolute inset-0">
// // // // //           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
// // // // //           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
// // // // //         </div>

// // // // //         <div className="container mx-auto px-4 relative z-10">
// // // // //           <div className="max-w-4xl mx-auto text-center animate-fade-in">
// // // // //             <h2 className="text-4xl font-bold mb-4 font-playfair">Need Custom Solutions?</h2>
// // // // //             <p className="text-xl mb-8 font-inter leading-relaxed text-white/90">
// // // // //               We offer customization options including engraving, special finishes, and packaging to meet your specific
// // // // //               requirements. Contact us for personalized quotes.
// // // // //             </p>
// // // // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// // // // //               <Button
// // // // //                 asChild
// // // // //                 size="lg"
// // // // //                 className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 font-inter shadow-xl"
// // // // //               >
// // // // //                 <Link to="/contact-us">Get Custom Quote</Link>
// // // // //               </Button>
// // // // //               <Button
// // // // //                 asChild
// // // // //                 variant="outline"
// // // // //                 size="lg"
// // // // //                 className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-medium font-inter bg-transparent"
// // // // //               >
// // // // //                 <a href="tel:+15551234567">Call Us Now</a>
// // // // //               </Button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       <Footer />
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default Products






// // // // "use client"

// // // // import React from "react"
// // // // import { Link } from "react-router-dom"
// // // // import Navbar from "../components/Navbar"
// // // // import Footer from "../components/Footer"
// // // // import { Button } from "../components/ui/button"
// // // // import { Badge } from "../components/ui/badge"
// // // // import { Card, CardContent } from "../components/ui/card"
// // // // import { allDetailedProductsData } from "../data/allProductsData"
// // // // import { Star, Sparkles, TrendingUp, Award, Users } from "lucide-react"

// // // // const Products = () => {
// // // //   // Get unique categories with product counts
// // // //   const categories = React.useMemo(() => {
// // // //     const categoryMap = new Map()

// // // //     allDetailedProductsData.forEach((product) => {
// // // //       if (categoryMap.has(product.category)) {
// // // //         categoryMap.get(product.category).count++
// // // //         categoryMap.get(product.category).products.push(product)
// // // //       } else {
// // // //         categoryMap.set(product.category, {
// // // //           name: product.category,
// // // //           count: 1,
// // // //           products: [product],
// // // //           slug: product.category,
// // // //         })
// // // //       }
// // // //     })

// // // //     return Array.from(categoryMap.values())
// // // //   }, [])

// // // //   const getCategoryDisplayName = (slug: string) => {
// // // //     const names = {
// // // //       "copper-items": "Copper Items",
// // // //       "bar-accessories": "Bar Accessories",
// // // //       "bagas-disposables": "Bagas Disposables",
// // // //     }
// // // //     return names[slug as keyof typeof names] || slug
// // // //   }

// // // //   const getCategoryImage = (slug: string) => {
// // // //     const images = {
// // // //       "copper-items": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
// // // //       "bar-accessories": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&h=600&fit=crop",
// // // //       "bagas-disposables": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
// // // //     }
// // // //     return images[slug as keyof typeof images] || images["copper-items"]
// // // //   }

// // // //   const getCategoryBadge = (slug: string) => {
// // // //     const badges = {
// // // //       "copper-items": "Health Benefits",
// // // //       "bar-accessories": "Professional Grade",
// // // //       "bagas-disposables": "Eco-Friendly",
// // // //     }
// // // //     return badges[slug as keyof typeof badges] || "Premium Quality"
// // // //   }

// // // //   const getCategoryDescription = (slug: string) => {
// // // //     const descriptions = {
// // // //       "copper-items": "Premium copper products offering natural health benefits and traditional craftsmanship.",
// // // //       "bar-accessories": "Professional-grade bar tools and equipment for the perfect cocktail experience.",
// // // //       "bagas-disposables": "Sustainable and eco-friendly disposable products made from natural materials.",
// // // //     }
// // // //     return descriptions[slug as keyof typeof descriptions] || "Premium quality products crafted with care."
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
// // // //       <Navbar />

// // // //       {/* Header Section */}
// // // //       <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
// // // //         <div className="absolute inset-0">
// // // //           <img
// // // //             src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
// // // //             alt="Products"
// // // //             className="w-full h-full object-cover opacity-20"
// // // //           />
// // // //           <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-indigo-900/80"></div>
// // // //         </div>

// // // //         {/* Floating Elements */}
// // // //         <div className="absolute inset-0 overflow-hidden">
// // // //           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
// // // //           <div
// // // //             className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
// // // //             style={{ animationDelay: "2s" }}
// // // //           ></div>
// // // //         </div>

// // // //         <div className="container mx-auto px-4 relative z-10">
// // // //           <div className="max-w-4xl mx-auto text-center animate-fade-in">
// // // //             <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-6 py-2">
// // // //               <Sparkles className="mr-2 h-4 w-4" />
// // // //               Premium Collection
// // // //             </Badge>
// // // //             <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
// // // //               Our Products
// // // //             </h1>
// // // //             <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-inter">
// // // //               Discover our comprehensive range of premium products, from traditional copper items to modern bar
// // // //               accessories and eco-friendly solutions.
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Stats Section */}
// // // //       <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
// // // //         <div className="container mx-auto px-4">
// // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// // // //             <div className="text-center animate-fade-in">
// // // //               <div className="text-4xl font-bold mb-2 font-playfair">{categories.length}</div>
// // // //               <div className="text-white/80 font-inter">Categories</div>
// // // //             </div>
// // // //             <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
// // // //               <div className="text-4xl font-bold mb-2 font-playfair">{allDetailedProductsData.length}+</div>
// // // //               <div className="text-white/80 font-inter">Products</div>
// // // //             </div>
// // // //             <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
// // // //               <div className="text-4xl font-bold mb-2 font-playfair">100%</div>
// // // //               <div className="text-white/80 font-inter">Quality Assured</div>
// // // //             </div>
// // // //             <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
// // // //               <div className="text-4xl font-bold mb-2 font-playfair">24/7</div>
// // // //               <div className="text-white/80 font-inter">Support</div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Product Categories */}
// // // //       <section className="py-20">
// // // //         <div className="container mx-auto px-4">
// // // //           <div className="max-w-4xl mx-auto text-center mb-16">
// // // //             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Product Categories</h2>
// // // //             <p className="text-lg text-gray-600 font-inter leading-relaxed">
// // // //               Browse our carefully curated categories, each featuring premium products designed to meet your specific
// // // //               needs.
// // // //             </p>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //             {categories.map((category, index) => (
// // // //               <div key={category.slug} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
// // // //                 <Card className="group h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm">
// // // //                   <div className="relative">
// // // //                     <img
// // // //                       src={getCategoryImage(category.slug) || "/placeholder.svg"}
// // // //                       alt={getCategoryDisplayName(category.slug)}
// // // //                       className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
// // // //                     />
// // // //                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// // // //                     <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 border-0 shadow-lg">
// // // //                       <Star className="mr-1 h-3 w-3" />
// // // //                       {getCategoryBadge(category.slug)}
// // // //                     </Badge>
// // // //                     <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg">
// // // //                       {category.count} Products
// // // //                     </Badge>
// // // //                   </div>
// // // //                   <CardContent className="p-6">
// // // //                     <h3 className="text-2xl font-bold text-gray-900 mb-2 font-playfair group-hover:text-blue-600 transition-colors duration-300">
// // // //                       {getCategoryDisplayName(category.slug)}
// // // //                     </h3>
// // // //                     <p className="text-gray-600 mb-4 font-inter leading-relaxed">
// // // //                       {getCategoryDescription(category.slug)}
// // // //                     </p>
// // // //                     <div className="flex items-center justify-between">
// // // //                       <div className="flex items-center space-x-1">
// // // //                         {[...Array(5)].map((_, i) => (
// // // //                           <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
// // // //                         ))}
// // // //                         <span className="text-sm text-gray-500 ml-2 font-inter">(4.9)</span>
// // // //                       </div>
// // // //                       <Button
// // // //                         asChild
// // // //                         size="sm"
// // // //                         className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105"
// // // //                       >
// // // //                         <Link to={`/category/${category.slug}`}>View Products</Link>
// // // //                       </Button>
// // // //                     </div>
// // // //                   </CardContent>
// // // //                 </Card>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Features Section */}
// // // //       <section className="py-20 bg-gradient-to-br from-white to-blue-50">
// // // //         <div className="container mx-auto px-4">
// // // //           <div className="max-w-4xl mx-auto text-center mb-16">
// // // //             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Why Choose Our Products?</h2>
// // // //             <p className="text-lg text-gray-600 font-inter leading-relaxed">
// // // //               Every product in our collection is carefully selected and crafted to meet the highest standards of quality
// // // //               and design.
// // // //             </p>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // //             <Card className="text-center bg-gradient-to-br from-white to-blue-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
// // // //               <CardContent className="p-8">
// // // //                 <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
// // // //                   <Award className="h-10 w-10 text-white" />
// // // //                 </div>
// // // //                 <h3 className="text-2xl font-semibold mb-4 font-playfair text-gray-900">Premium Quality</h3>
// // // //                 <p className="text-gray-600 font-inter leading-relaxed">
// // // //                   Each product undergoes rigorous quality control to ensure it meets our exacting standards for
// // // //                   durability and performance.
// // // //                 </p>
// // // //               </CardContent>
// // // //             </Card>

// // // //             <Card className="text-center bg-gradient-to-br from-white to-purple-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
// // // //               <CardContent className="p-8">
// // // //                 <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
// // // //                   <Users className="h-10 w-10 text-white" />
// // // //                 </div>
// // // //                 <h3 className="text-2xl font-semibold mb-4 font-playfair text-gray-900">Expert Craftsmanship</h3>
// // // //                 <p className="text-gray-600 font-inter leading-relaxed">
// // // //                   Our skilled artisans bring decades of experience, creating unique pieces that blend traditional
// // // //                   techniques with modern design.
// // // //                 </p>
// // // //               </CardContent>
// // // //             </Card>

// // // //             <Card className="text-center bg-gradient-to-br from-white to-green-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
// // // //               <CardContent className="p-8">
// // // //                 <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
// // // //                   <TrendingUp className="h-10 w-10 text-white" />
// // // //                 </div>
// // // //                 <h3 className="text-2xl font-semibold mb-4 font-playfair text-gray-900">Innovation</h3>
// // // //                 <p className="text-gray-600 font-inter leading-relaxed">
// // // //                   We continuously innovate and improve our products, incorporating the latest technologies and design
// // // //                   trends to stay ahead.
// // // //                 </p>
// // // //               </CardContent>
// // // //             </Card>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Call to Action */}
// // // //       <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
// // // //         <div className="absolute inset-0">
// // // //           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
// // // //           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
// // // //         </div>

// // // //         <div className="container mx-auto px-4 relative z-10">
// // // //           <div className="max-w-4xl mx-auto text-center animate-fade-in">
// // // //             <h2 className="text-4xl font-bold mb-4 font-playfair">Need Custom Solutions?</h2>
// // // //             <p className="text-xl mb-8 font-inter leading-relaxed text-white/90">
// // // //               We offer customization options including engraving, special finishes, and packaging to meet your specific
// // // //               requirements. Contact us for personalized quotes.
// // // //             </p>
// // // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// // // //               <Button
// // // //                 asChild
// // // //                 size="lg"
// // // //                 className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 font-inter shadow-xl"
// // // //               >
// // // //                 <Link to="/contact-us">Get Custom Quote</Link>
// // // //               </Button>
// // // //               <Button
// // // //                 asChild
// // // //                 variant="outline"
// // // //                 size="lg"
// // // //                 className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-medium font-inter bg-transparent"
// // // //               >
// // // //                 <a href="tel:+15551234567">Call Us Now</a>
// // // //               </Button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       <Footer />
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Products



// // // import type React from "react"
// // // import { Link } from "react-router-dom"
// // // import Navbar from "../components/Navbar"
// // // import Footer from "../components/Footer"
// // // import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
// // // import { Button } from "../components/ui/button"
// // // import { ArrowRight, Factory, Leaf, Globe } from "lucide-react"
// // // import { allDetailedProductsData } from "../data/allProductsData"

// // // const Products: React.FC = () => {
// // //   const categories = Array.from(new Set(allDetailedProductsData.map((p) => p.category)))

// // //   const formatCategoryName = (slug: string) => {
// // //     const names: { [key: string]: string } = {
// // //       "copper-items": "Copper Items",
// // //       "bar-accessories": "Bar Accessories",
// // //       "bagas-disposables": "Bagas Disposables",
// // //     }
// // //     return (
// // //       names[slug] ||
// // //       slug
// // //         .split("-")
// // //         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// // //         .join(" ")
// // //     )
// // //   }

// // //   const getCategoryProductCount = (categorySlug: string) => {
// // //     return allDetailedProductsData.filter((p) => p.category === categorySlug).length
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
// // //       <Navbar />

// // //       {/* Hero Section */}
// // //       <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700 text-white pt-20">
// // //         <div
// // //           className="absolute inset-0 z-0 opacity-20"
// // //           style={{
// // //             backgroundImage: "url(/placeholder.svg?height=400&width=1200)", // Placeholder image
// // //             backgroundSize: "cover",
// // //             backgroundPosition: "center",
// // //             filter: "grayscale(50%) blur(2px)",
// // //           }}
// // //         ></div>
// // //         <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-4 animate-fade-in-up">
// // //           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight font-playfair drop-shadow-lg">
// // //             Our Product Collections
// // //           </h1>
// // //           <p className="text-lg md:text-xl text-gray-200 font-inter leading-relaxed">
// // //             Explore our extensive range of premium copper articles and sustainable biodegradable products.
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* Categories Grid */}
// // //       <section className="py-16">
// // //         <div className="container mx-auto px-4">
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             {categories.map((category, index) => (
// // //               <Link to={`/category/${category}`} key={category} className="block">
// // //                 <Card
// // //                   className="p-6 shadow-lg rounded-xl bg-white border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
// // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // //                 >
// // //                   <CardHeader className="flex flex-col items-center pb-4">
// // //                     {category === "copper-items" && <Factory className="h-12 w-12 text-orange-600 mb-4" />}
// // //                     {category === "bagas-disposables" && <Leaf className="h-12 w-12 text-green-600 mb-4" />}
// // //                     {category === "bar-accessories" && <Globe className="h-12 w-12 text-blue-600 mb-4" />}
// // //                     <CardTitle className="text-2xl font-bold text-gray-900 font-playfair">
// // //                       {formatCategoryName(category)}
// // //                     </CardTitle>
// // //                   </CardHeader>
// // //                   <CardContent>
// // //                     <p className="text-gray-700 mb-4 font-inter">
// // //                       Discover our collection of {formatCategoryName(category).toLowerCase()}, crafted for durability
// // //                       and style.
// // //                     </p>
// // //                     <span className="text-blue-600 font-semibold flex items-center justify-center font-inter">
// // //                       View {getCategoryProductCount(category)} Products <ArrowRight className="ml-2 h-4 w-4" />
// // //                     </span>
// // //                   </CardContent>
// // //                 </Card>
// // //               </Link>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Featured Products (Optional - can be dynamic or static) */}
// // //       <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
// // //         <div className="container mx-auto px-4 text-center">
// // //           <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">Featured Products</h2>
// // //           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-inter">
// // //             Handpicked selections showcasing our commitment to quality and innovation.
// // //           </p>
// // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             {allDetailedProductsData.slice(0, 3).map(
// // //               (
// // //                 product,
// // //                 index, // Display first 3 products as featured
// // //               ) => (
// // //                 <Card
// // //                   key={product.id}
// // //                   className="p-6 shadow-lg rounded-xl bg-white border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
// // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // //                 >
// // //                   <img
// // //                     src={product.imageUrl || "/placeholder.svg"}
// // //                     alt={product.name}
// // //                     className="w-full h-48 object-cover rounded-md mb-4"
// // //                   />
// // //                   <CardContent className="p-0">
// // //                     <h3 className="text-xl font-semibold text-gray-900 mb-2 font-playfair">{product.name}</h3>
// // //                     <p className="text-gray-600 text-sm mb-4 line-clamp-2 font-inter">
// // //                       {product.shortDescription || product.description}
// // //                     </p>
// // //                     <Button
// // //                       asChild
// // //                       className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
// // //                     >
// // //                       <Link to={`/product-details/${product.id}`}>View Details</Link>
// // //                     </Button>
// // //                   </CardContent>
// // //                 </Card>
// // //               ),
// // //             )}
// // //           </div>
// // //           <Button
// // //             asChild
// // //             variant="outline"
// // //             className="mt-12 text-lg px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 bg-transparent"
// // //           >
// // //             <Link to="/products">
// // //               View All Products <ArrowRight className="ml-2 h-5 w-5" />
// // //             </Link>
// // //           </Button>
// // //         </div>
// // //       </section>

// // //       <Footer />
// // //     </div>
// // //   )
// // // }

// // // export default Products





// import type React from "react"
// import { Link } from "react-router-dom"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
// import { Button } from "../components/ui/button"
// import { ArrowRight, Factory, Leaf, Globe, Award, Users, TrendingUp } from "lucide-react"
// import { allDetailedProductsData } from "../data/allProductsData"

// const Products: React.FC = () => {
//   const categories = Array.from(new Set(allDetailedProductsData.map((p) => p.category)))

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

//   const getCategoryProductCount = (categorySlug: string) => {
//     return allDetailedProductsData.filter((p) => p.category === categorySlug).length
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700 text-white pt-20">
//         <div
//           className="absolute inset-0 z-0 opacity-20"
//           style={{
//             backgroundImage: "url(/placeholder.svg?height=400&width=1200)", // Placeholder image
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             filter: "grayscale(50%) blur(2px)",
//           }}
//         ></div>
//         <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-4 animate-fade-in-up">
//           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight font-playfair drop-shadow-lg">
//             Our Product Collections
//           </h1>
//           <p className="text-lg md:text-xl text-gray-200 font-inter leading-relaxed">
//             Explore our extensive range of premium copper articles and sustainable biodegradable products.
//           </p>
//         </div>
//       </section>

//       {/* Categories Grid */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {categories.map((category, index) => (
//               <Link to={`/category/${category}`} key={category} className="block">
//                 <Card
//                   className="p-6 shadow-lg rounded-xl bg-white border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <CardHeader className="flex flex-col items-center pb-4">
//                     {category === "copper-items" && <Factory className="h-12 w-12 text-orange-600 mb-4" />}
//                     {category === "bagas-disposables" && <Leaf className="h-12 w-12 text-green-600 mb-4" />}
//                     {category === "bar-accessories" && <Globe className="h-12 w-12 text-blue-600 mb-4" />}
//                     <CardTitle className="text-2xl font-bold text-gray-900 font-playfair">
//                       {formatCategoryName(category)}
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-gray-700 mb-4 font-inter">
//                       Discover our collection of {formatCategoryName(category).toLowerCase()}, crafted for durability
//                       and style.
//                     </p>
//                     <span className="text-blue-600 font-semibold flex items-center justify-center font-inter">
//                       View {getCategoryProductCount(category)} Products <ArrowRight className="ml-2 h-4 w-4" />
//                     </span>
//                   </CardContent>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Products (Optional - can be dynamic or static) */}
//       <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">Featured Products</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-inter">
//             Handpicked selections showcasing our commitment to quality and innovation.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {allDetailedProductsData.slice(0, 3).map(
//               (
//                 product,
//                 index, // Display first 3 products as featured
//               ) => (
//                 <Card
//                   key={product.id}
//                   className="p-6 shadow-lg rounded-xl bg-white border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <img
//                     src={product.imageUrl || "/placeholder.svg"}
//                     alt={product.name}
//                     className="w-full h-48 object-cover rounded-md mb-4"
//                   />
//                   <CardContent className="p-0">
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2 font-playfair">{product.name}</h3>
//                     <p className="text-gray-600 text-sm mb-4 line-clamp-2 font-inter">
//                       {product.shortDescription || product.description}
//                     </p>
//                     <Button
//                       asChild
//                       className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
//                     >
//                       <Link to={`/product-details/${product.id}`}>View Details</Link>
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ),
//             )}
//           </div>
//           <Button
//             asChild
//             variant="outline"
//             className="mt-12 text-lg px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 bg-transparent"
//           >
//             <Link to="/all-products">
//               View All Products <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </Button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-gradient-to-br from-white to-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Why Choose Our Products?</h2>
//             <p className="text-lg text-gray-600 font-inter leading-relaxed">
//               Every product in our collection is carefully selected and crafted to meet the highest standards of quality
//               and design.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="text-center bg-gradient-to-br from-white to-blue-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
//               <CardContent className="p-8">
//                 <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
//                   <Award className="h-10 w-10 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4 font-playfair text-gray-900">Premium Quality</h3>
//                 <p className="text-gray-600 font-inter leading-relaxed">
//                   Each product undergoes rigorous quality control to ensure it meets our exacting standards for
//                   durability and performance.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="text-center bg-gradient-to-br from-white to-purple-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
//               <CardContent className="p-8">
//                 <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
//                   <Users className="h-10 w-10 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4 font-playfair text-gray-900">Expert Craftsmanship</h3>
//                 <p className="text-gray-600 font-inter leading-relaxed">
//                   Our skilled artisans bring decades of experience, creating unique pieces that blend traditional
//                   techniques with modern design.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="text-center bg-gradient-to-br from-white to-green-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
//               <CardContent className="p-8">
//                 <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
//                   <TrendingUp className="h-10 w-10 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4 font-playfair text-gray-900">Innovation</h3>
//                 <p className="text-gray-600 font-inter leading-relaxed">
//                   We continuously innovate and improve our products, incorporating the latest technologies and design
//                   trends to stay ahead.
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
//             <h2 className="text-4xl font-bold mb-4 font-playfair">Need Custom Solutions?</h2>
//             <p className="text-xl mb-8 font-inter leading-relaxed text-white/90">
//               We offer customization options including engraving, special finishes, and packaging to meet your specific
//               requirements. Contact us for personalized quotes.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 asChild
//                 size="lg"
//                 className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 font-inter shadow-xl"
//               >
//                 <Link to="/contact-us">Get Custom Quote</Link>
//               </Button>
//               <Button
//                 asChild
//                 variant="outline"
//                 size="lg"
//                 className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-medium font-inter bg-transparent"
//               >
//                 <a href="tel:+15551234567">Call Us Now</a>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default Products




// import { Link } from "react-router-dom"
// import { allDetailedProductsData } from "../data/allProductsData"
// import ProductCard from "../components/ProductCard"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, Award, Users, TrendingUp } from "lucide-react"

// const Products = () => {
//   // Get a few featured products, for example, the first 3
//   const featuredProducts = allDetailedProductsData.slice(0, 3)

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <section className="text-center mb-12">
//         <h1 className="text-5xl font-extrabold text-white mb-4 font-playfair leading-tight">
//           Discover Our Exquisite Collection
//         </h1>
//         <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-inter">
//           Explore a world of premium copper articles and sustainable biodegradable products, crafted with passion and
//           precision.
//         </p>
//         <div className="flex justify-center space-x-4">
//           <Link to="/all-products">
//             <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//               View All Products <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//           </Link>
//           <Link to="/contact-us">
//             <Button
//               variant="outline"
//               className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-900 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-1 bg-transparent"
//             >
//               Get a Quote
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* Featured Products Section */}
//       <section className="mb-12">
//         <h2 className="text-4xl font-bold text-center text-white mb-8 font-playfair">Featured Products</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {featuredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-10 shadow-2xl border border-gray-700 mb-12">
//         <h2 className="text-4xl font-bold text-center text-white mb-10 font-playfair">Why Choose NY Venture?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700 transform transition-transform duration-300 hover:scale-105">
//             <Award className="h-12 w-12 text-yellow-400 mb-4" />
//             <h3 className="text-2xl font-semibold text-white mb-2 font-inter">Unmatched Quality</h3>
//             <p className="text-gray-300 font-inter">
//               We source only the finest materials and employ skilled artisans to ensure every product meets the highest
//               standards of craftsmanship and durability.
//             </p>
//           </div>
//           <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700 transform transition-transform duration-300 hover:scale-105">
//             <Users className="h-12 w-12 text-green-400 mb-4" />
//             <h3 className="text-2xl font-semibold text-white mb-2 font-inter">Customer Satisfaction</h3>
//             <p className="text-gray-300 font-inter">
//               Your satisfaction is our priority. We are committed to providing exceptional service and products that
//               exceed your expectations.
//             </p>
//           </div>
//           <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700 transform transition-transform duration-300 hover:scale-105">
//             <TrendingUp className="h-12 w-12 text-red-400 mb-4" />
//             <h3 className="text-2xl font-semibold text-white mb-2 font-inter">Sustainable Practices</h3>
//             <p className="text-gray-300 font-inter">
//               We are dedicated to environmental responsibility, offering a growing range of biodegradable products and
//               sustainable sourcing.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action for All Products */}
//       <section className="text-center py-12 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-[1.01]">
//         <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Ready to See More?</h2>
//         <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 font-inter">
//           Dive into our complete catalog and find the perfect items for your needs.
//         </p>
//         <Link to="/all-products">
//           <Button className="bg-white text-blue-800 px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//             Explore All Products <ArrowRight className="ml-3 h-6 w-6" />
//           </Button>
//         </Link>
//       </section>
//     </div>
//   )
// }

// export default Products




// import type React from "react"
// import { Link } from "react-router-dom"
// import { allDetailedProductsData } from "../data/allProductsData"
// import ProductCard from "../components/ProductCard"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, Award, Users, TrendingUp, Factory, Leaf, Globe } from "lucide-react"
// import { formatCategoryName } from "../utils/productNavigation" // Import from utils

// const Products: React.FC = () => {
//   // Get a few featured products, for example, the first 3
//   const featuredProducts = allDetailedProductsData.slice(0, 3)

//   const categories = Array.from(new Set(allDetailedProductsData.map((p) => p.category)))

//   const getCategoryProductCount = (categorySlug: string) => {
//     return allDetailedProductsData.filter((p) => p.category === categorySlug).length
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <section className="text-center mb-12">
//         <h1 className="text-5xl font-extrabold text-white mb-4 font-playfair leading-tight">
//           Discover Our Exquisite Collection
//         </h1>
//         <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-inter">
//           Explore a world of premium copper articles and sustainable biodegradable products, crafted with passion and
//           precision.
//         </p>
//         <div className="flex justify-center space-x-4">
//           <Link to="/all-products">
//             <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//               View All Products <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//           </Link>
//           <Link to="/contact-us">
//             <Button
//               variant="outline"
//               className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-900 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-1 bg-transparent"
//             >
//               Get a Quote
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* Categories Grid */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {categories.map((category, index) => (
//               <Link to={`/products/${category}`} key={category} className="block">
//                 <div
//                   className="p-6 shadow-lg rounded-xl bg-white border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="flex flex-col items-center pb-4">
//                     {category === "copper-items" && <Factory className="h-12 w-12 text-orange-600 mb-4" />}
//                     {category === "bagas-disposables" && <Leaf className="h-12 w-12 text-green-600 mb-4" />}
//                     {category === "bar-accessories" && <Globe className="h-12 w-12 text-blue-600 mb-4" />}
//                     <h3 className="text-2xl font-bold text-gray-900 font-playfair">{formatCategoryName(category)}</h3>
//                   </div>
//                   <div>
//                     <p className="text-gray-700 mb-4 font-inter">
//                       Discover our collection of {formatCategoryName(category).toLowerCase()}, crafted for durability
//                       and style.
//                     </p>
//                     <span className="text-blue-600 font-semibold flex items-center justify-center font-inter">
//                       View {getCategoryProductCount(category)} Products <ArrowRight className="ml-2 h-4 w-4" />
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Products Section */}
//       <section className="mb-12">
//         <h2 className="text-4xl font-bold text-center text-white mb-8 font-playfair">Featured Products</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {featuredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-10 shadow-2xl border border-gray-700 mb-12">
//         <h2 className="text-4xl font-bold text-center text-white mb-10 font-playfair">Why Choose NY Venture?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700 transform transition-transform duration-300 hover:scale-105">
//             <Award className="h-12 w-12 text-yellow-400 mb-4" />
//             <h3 className="text-2xl font-semibold text-white mb-2 font-inter">Unmatched Quality</h3>
//             <p className="text-gray-300 font-inter">
//               We source only the finest materials and employ skilled artisans to ensure every product meets the highest
//               standards of craftsmanship and durability.
//             </p>
//           </div>
//           <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700 transform transition-transform duration-300 hover:scale-105">
//             <Users className="h-12 w-12 text-green-400 mb-4" />
//             <h3 className="text-2xl font-semibold text-white mb-2 font-inter">Customer Satisfaction</h3>
//             <p className="text-gray-300 font-inter">
//               Your satisfaction is our priority. We are committed to providing exceptional service and products that
//               exceed your expectations.
//             </p>
//           </div>
//           <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700 transform transition-transform duration-300 hover:scale-105">
//             <TrendingUp className="h-12 w-12 text-red-400 mb-4" />
//             <h3 className="text-2xl font-semibold text-white mb-2 font-inter">Sustainable Practices</h3>
//             <p className="text-gray-300 font-inter">
//               We are dedicated to environmental responsibility, offering a growing range of biodegradable products and
//               sustainable sourcing.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action for All Products */}
//       <section className="text-center py-12 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-[1.01]">
//         <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Ready to See More?</h2>
//         <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 font-inter">
//           Dive into our complete catalog and find the perfect items for your needs.
//         </p>
//         <Link to="/all-products">
//           <Button className="bg-white text-blue-800 px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//             Explore All Products <ArrowRight className="ml-3 h-6 w-6" />
//           </Button>
//         </Link>
//       </section>
//     </div>
//   )
// }

// export default Products
