
// // // // // // // // // // import Navbar from "@/components/Navbar";
// // // // // // // // // // import Footer from "@/components/Footer";
// // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // import { Link } from "react-router-dom";

// // // // // // // // // // const Index = () => {
// // // // // // // // // //   const products = [
// // // // // // // // // //     {
// // // // // // // // // //       title: "Copper Articles",
// // // // // // // // // //       description: "Premium quality copper utensils and decorative items",
// // // // // // // // // //       image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Bar Accessories",
// // // // // // // // // //       description: "Elegant cocktail shakers, muddlers, and bar tools",
// // // // // // // // // //       image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Handicraft Idols",
// // // // // // // // // //       description: "Artisanal religious and decorative sculptures",
// // // // // // // // // //       image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&h=300&fit=crop"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Home Decor",
// // // // // // // // // //       description: "Beautiful pieces to enhance your living space",
// // // // // // // // // //       image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Ceramic Vases",
// // // // // // // // // //       description: "Handcrafted ceramic vases in various designs",
// // // // // // // // // //       image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=300&fit=crop"
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       title: "Terracotta Flower Pots",
// // // // // // // // // //       description: "Traditional clay planters for your garden and home",
// // // // // // // // // //       image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop"
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   const testimonials = [
// // // // // // // // // //     {
// // // // // // // // // //       name: "Sarah Johnson",
// // // // // // // // // //       role: "Interior Designer",
// // // // // // // // // //       content: "NY Ventures has been our go-to supplier for unique home decor pieces. Their quality is unmatched.",
// // // // // // // // // //       rating: 5
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       name: "Michael Chen",
// // // // // // // // // //       role: "Restaurant Owner",
// // // // // // // // // //       content: "The copper articles and bar accessories have elevated our establishment's ambiance significantly.",
// // // // // // // // // //       rating: 5
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       name: "Emma Davis",
// // // // // // // // // //       role: "Boutique Owner",
// // // // // // // // // //       content: "Their handicrafts are authentic and beautifully crafted. Our customers love them!",
// // // // // // // // // //       rating: 5
// // // // // // // // // //     }
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="min-h-screen bg-background font-inter">
// // // // // // // // // //       {/* Hero Section with Background Image */}
// // // // // // // // // //       <section 
// // // // // // // // // //         className="min-h-screen bg-cover bg-center bg-no-repeat relative"
// // // // // // // // // //         style={{
// // // // // // // // // //           backgroundImage: "url('/lovable-uploads/cfd4a498-dd56-4234-9eb5-d586d3aa0f47.png')"
// // // // // // // // // //         }}
// // // // // // // // // //       >
// // // // // // // // // //         {/* Overlay for better text readability */}
// // // // // // // // // //         <div className="absolute inset-0 bg-black/40"></div>
        
// // // // // // // // // //         {/* Navbar with transparent background */}
// // // // // // // // // //         <div className="relative z-50">
// // // // // // // // // //           <Navbar />
// // // // // // // // // //         </div>
        
// // // // // // // // // //         {/* Hero Content */}
// // // // // // // // // //         <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
// // // // // // // // // //           <div className="container mx-auto text-center text-white">
// // // // // // // // // //             <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
// // // // // // // // // //               <h1 className="text-6xl lg:text-8xl font-bold font-playfair leading-tight">
// // // // // // // // // //                 Uniquely<br />
// // // // // // // // // //                 <span className="text-white/80">Yours,</span><br />
// // // // // // // // // //                 Beautifully<br />
// // // // // // // // // //                 Designed
// // // // // // // // // //               </h1>
// // // // // // // // // //               <p className="text-2xl font-inter leading-relaxed max-w-2xl mx-auto text-white/90">
// // // // // // // // // //                 Beautifully Crafted Pieces for Your Unique Home
// // // // // // // // // //               </p>
              
// // // // // // // // // //               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
// // // // // // // // // //                 <Button 
// // // // // // // // // //                   asChild 
// // // // // // // // // //                   size="lg" 
// // // // // // // // // //                   className="px-12 py-4 text-lg bg-white text-gray-900 hover:bg-white/90 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // // // // // // //                 >
// // // // // // // // // //                   <Link to="/products">Shop Now</Link>
// // // // // // // // // //                 </Button>
// // // // // // // // // //                 <Button 
// // // // // // // // // //                   asChild
// // // // // // // // // //                   variant="outline"
// // // // // // // // // //                   size="lg" 
// // // // // // // // // //                   className="px-12 py-4 text-lg border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // // // // // // //                 >
// // // // // // // // // //                   <Link to="/about">Learn More</Link>
// // // // // // // // // //                 </Button>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* Featured Products */}
// // // // // // // // // //       <section className="py-24 bg-white">
// // // // // // // // // //         <div className="container mx-auto px-4">
// // // // // // // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // // // // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">Our Product Categories</h2>
// // // // // // // // // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
// // // // // // // // // //               Discover our extensive range of premium products, carefully curated for quality and style
// // // // // // // // // //             </p>
// // // // // // // // // //           </div>
          
// // // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // // // // // // //             {products.map((product, index) => (
// // // // // // // // // //               <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in border-0 shadow-lg bg-white rounded-2xl overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
// // // // // // // // // //                 <div className="aspect-[4/3] overflow-hidden">
// // // // // // // // // //                   <img 
// // // // // // // // // //                     src={product.image} 
// // // // // // // // // //                     alt={product.title}
// // // // // // // // // //                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// // // // // // // // // //                   />
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <CardHeader className="text-center p-8">
// // // // // // // // // //                   <CardTitle className="font-playfair text-2xl group-hover:text-gray-900 transition-colors duration-300 text-gray-800 mb-3">{product.title}</CardTitle>
// // // // // // // // // //                   <CardDescription className="font-inter text-gray-600 text-lg">{product.description}</CardDescription>
// // // // // // // // // //                 </CardHeader>
// // // // // // // // // //               </Card>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
          
// // // // // // // // // //           <div className="text-center mt-16 animate-fade-in">
// // // // // // // // // //             <Button asChild size="lg" className="hover:scale-105 transition-all duration-300 font-inter font-medium bg-gray-900 text-white hover:bg-gray-800 px-12 py-4 text-lg">
// // // // // // // // // //               <Link to="/products">View All Products</Link>
// // // // // // // // // //             </Button>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* Testimonials */}
// // // // // // // // // //       <section id="testimonials" className="py-24 bg-gray-50">
// // // // // // // // // //         <div className="container mx-auto px-4">
// // // // // // // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // // // // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">What Our Clients Say</h2>
// // // // // // // // // //             <p className="text-xl text-gray-600 font-inter">
// // // // // // // // // //               Trusted by businesses and individuals across the globe
// // // // // // // // // //             </p>
// // // // // // // // // //           </div>
          
// // // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// // // // // // // // // //             {testimonials.map((testimonial, index) => (
// // // // // // // // // //               <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left border-0 shadow-lg bg-white rounded-2xl p-8" style={{ animationDelay: `${index * 0.2}s` }}>
// // // // // // // // // //                 <CardContent className="pt-0">
// // // // // // // // // //                   <div className="flex mb-6">
// // // // // // // // // //                     {[...Array(testimonial.rating)].map((_, i) => (
// // // // // // // // // //                       <span key={i} className="text-yellow-400 text-xl animate-scale-in" style={{ animationDelay: `${(index * 0.2) + (i * 0.1)}s` }}>★</span>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </div>
// // // // // // // // // //                   <p className="text-gray-600 mb-6 italic font-inter text-lg leading-relaxed">"{testimonial.content}"</p>
// // // // // // // // // //                   <div>
// // // // // // // // // //                     <p className="font-semibold font-playfair text-gray-900 text-xl">{testimonial.name}</p>
// // // // // // // // // //                     <p className="text-gray-500 font-inter">{testimonial.role}</p>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </CardContent>
// // // // // // // // // //               </Card>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       <Footer />
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Index;

// // // // // // // // // // src/pages/Index.tsx
// // // // // // // // // import Navbar from "@/components/Navbar";
// // // // // // // // // import Footer from "@/components/Footer";
// // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // import { Link } from "react-router-dom";
// // // // // // // // // // import AutoTypeText from "../components/AutoTypeText"; // Uncomment if you want to use AutoTypeText here

// // // // // // // // // const Index = () => {
// // // // // // // // //   const products = [
// // // // // // // // //     {
// // // // // // // // //       title: "Copper Articles",
// // // // // // // // //       description: "Premium quality copper utensils and decorative items",
// // // // // // // // //       image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Bar Accessories",
// // // // // // // // //       description: "Elegant cocktail shakers, muddlers, and bar tools",
// // // // // // // // //       image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit-crop"
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Handicraft Idols",
// // // // // // // // //       description: "Artisanal religious and decorative sculptures",
// // // // // // // // //       image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&h=300&fit-crop"
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Home Decor",
// // // // // // // // //       description: "Beautiful pieces to enhance your living space",
// // // // // // // // //       image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit-crop"
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Ceramic Vases",
// // // // // // // // //       description: "Handcrafted ceramic vases in various designs",
// // // // // // // // //       image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=300&fit-crop"
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Terracotta Flower Pots",
// // // // // // // // //       description: "Traditional clay planters for your garden and home",
// // // // // // // // //       image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit-crop"
// // // // // // // // //     }
// // // // // // // // //   ];

// // // // // // // // //   const testimonials = [
// // // // // // // // //     {
// // // // // // // // //       name: "Sarah Johnson",
// // // // // // // // //       role: "Interior Designer",
// // // // // // // // //       content: "NY Ventures has been our go-to supplier for unique home decor pieces. Their quality is unmatched.",
// // // // // // // // //       rating: 5
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       name: "Michael Chen",
// // // // // // // // //       role: "Restaurant Owner",
// // // // // // // // //       content: "The copper articles and bar accessories have elevated our establishment's ambiance significantly.",
// // // // // // // // //       rating: 5
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       name: "Emma Davis",
// // // // // // // // //       role: "Boutique Owner",
// // // // // // // // //       content: "Their handicrafts are authentic and beautifully crafted. Our customers love them!",
// // // // // // // // //       rating: 5
// // // // // // // // //     }
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-background font-inter">
// // // // // // // // //       {/* Hero Section with Background Image */}
// // // // // // // // //       <section
// // // // // // // // //         className="min-h-screen bg-cover bg-center bg-no-repeat relative"
// // // // // // // // //         style={{
// // // // // // // // //           backgroundImage: "url('/lovable-uploads/cfd4a498-dd56-4234-9eb5-d586d3aa0f47.png')"
// // // // // // // // //         }}
// // // // // // // // //       >
// // // // // // // // //         {/* Overlay for better text readability */}
// // // // // // // // //         <div className="absolute inset-0 bg-black/40"></div>

// // // // // // // // //         {/* Navbar with translucent background (as per previous instructions) */}
// // // // // // // // //         <div className="relative z-50">
// // // // // // // // //           <Navbar />
// // // // // // // // //         </div>

// // // // // // // // //         {/* Hero Content */}
// // // // // // // // //         <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
// // // // // // // // //           <div className="container mx-auto text-center text-white">
// // // // // // // // //             <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
// // // // // // // // //               <h1 className="text-6xl lg:text-8xl font-bold font-playfair leading-tight">
// // // // // // // // //                 Uniquely<br />
// // // // // // // // //                 <span className="text-white/80">Yours,</span><br />
// // // // // // // // //                 Beautifully<br />
// // // // // // // // //                 Designed
// // // // // // // // //               </h1>
// // // // // // // // //               <p className="text-2xl font-inter leading-relaxed max-w-2xl mx-auto text-white/90">
// // // // // // // // //                 Beautifully Crafted Pieces for Your Unique Home
// // // // // // // // //               </p>

// // // // // // // // //               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
// // // // // // // // //                 <Button
// // // // // // // // //                   asChild
// // // // // // // // //                   size="lg"
// // // // // // // // //                   className="px-12 py-4 text-lg bg-white text-gray-900 hover:bg-white/90 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // // // // // //                 >
// // // // // // // // //                   <Link to="/products">Shop Now</Link>
// // // // // // // // //                 </Button>
// // // // // // // // //                 <Button
// // // // // // // // //                   asChild
// // // // // // // // //                   variant="outline"
// // // // // // // // //                   size="lg"
// // // // // // // // //                   // --- FIX FOR "Learn More" BUTTON TEXT VISIBILITY ---
// // // // // // // // //                   // Changed initial text-white to text-gray-800 for better contrast against potentially light parts of the background image.
// // // // // // // // //                   // The hover styles will still make it bg-white text-gray-900.
// // // // // // // // //                   className="px-12 py-4 text-lg border-white text-gray-800 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // // // // // //                 >
// // // // // // // // //                   <Link to="/about">Learn More</Link>
// // // // // // // // //                 </Button>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* Featured Products */}
// // // // // // // // //       <section className="py-24 bg-white">
// // // // // // // // //         <div className="container mx-auto px-4">
// // // // // // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // // // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">Our Product Categories</h2>
// // // // // // // // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
// // // // // // // // //               Discover our extensive range of premium products, carefully curated for quality and style
// // // // // // // // //             </p>
// // // // // // // // //           </div>

// // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // // // // // //             {products.map((product, index) => (
// // // // // // // // //               <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in border-0 shadow-lg bg-white rounded-2xl overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
// // // // // // // // //                 <div className="aspect-[4/3] overflow-hidden">
// // // // // // // // //                   <img
// // // // // // // // //                     src={product.image}
// // // // // // // // //                     alt={product.title}
// // // // // // // // //                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// // // // // // // // //                   />
// // // // // // // // //                 </div>
// // // // // // // // //                 <CardHeader className="text-center p-8">
// // // // // // // // //                   <CardTitle className="font-playfair text-2xl group-hover:text-gray-900 transition-colors duration-300 text-gray-800 mb-3">{product.title}</CardTitle>
// // // // // // // // //                   <CardDescription className="font-inter text-gray-600 text-lg">{product.description}</CardDescription>
// // // // // // // // //                 </CardHeader>
// // // // // // // // //               </Card>
// // // // // // // // //             ))}
// // // // // // // // //           </div>

// // // // // // // // //           <div className="text-center mt-16 animate-fade-in">
// // // // // // // // //             <Button asChild size="lg" className="hover:scale-105 transition-all duration-300 font-inter font-medium bg-gray-900 text-white hover:bg-gray-800 px-12 py-4 text-lg">
// // // // // // // // //               <Link to="/products">View All Products</Link>
// // // // // // // // //             </Button>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* Testimonials */}
// // // // // // // // //       <section id="testimonials" className="py-24 bg-gray-50">
// // // // // // // // //         <div className="container mx-auto px-4">
// // // // // // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // // // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">What Our Clients Say</h2>
// // // // // // // // //             <p className="text-xl text-gray-600 font-inter">
// // // // // // // // //               Trusted by businesses and individuals across the globe
// // // // // // // // //             </p>
// // // // // // // // //           </div>

// // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// // // // // // // // //             {testimonials.map((testimonial, index) => (
// // // // // // // // //               <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left border-0 shadow-lg bg-white rounded-2xl p-8" style={{ animationDelay: `${index * 0.2}s` }}>
// // // // // // // // //                 <CardContent className="pt-0">
// // // // // // // // //                   <div className="flex mb-6">
// // // // // // // // //                     {[...Array(testimonial.rating)].map((_, i) => (
// // // // // // // // //                       <span key={i} className="text-yellow-400 text-xl animate-scale-in" style={{ animationDelay: `${(index * 0.2) + (i * 0.1)}s` }}>★</span>
// // // // // // // // //                     ))}
// // // // // // // // //                   </div>
// // // // // // // // //                   <p className="text-gray-600 mb-6 italic font-inter text-lg leading-relaxed">"{testimonial.content}"</p>
// // // // // // // // //                   <div>
// // // // // // // // //                     <p className="font-semibold font-playfair text-gray-900 text-xl">{testimonial.name}</p>
// // // // // // // // //                     <p className="text-gray-500 font-inter">{testimonial.role}</p>
// // // // // // // // //                   </div>
// // // // // // // // //                 </CardContent>
// // // // // // // // //               </Card>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       <Footer />
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Index;








// // // // // // // // // // src/pages/Index.tsx
// // // // // // // // // import Navbar from "@/components/Navbar";
// // // // // // // // // import Footer from "@/components/Footer";
// // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // import { Link } from "react-router-dom";
// // // // // // // // // import AutoTypeText from "@/components/AutoTypeText"; // <-- UNCOMMENTED and path corrected

// // // // // // // // // const Index = () => {
// // // // // // // // //   const products = [
// // // // // // // // //     {
// // // // // // // // //       title: "Copper Articles",
// // // // // // // // //       description: "Premium quality copper utensils and decorative items",
// // // // // // // // //       image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Bar Accessories",
// // // // // // // // //       description: "Elegant cocktail shakers, muddlers, and bar tools",
// // // // // // // // //       image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit-crop"
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Handicraft Idols",
// // // // // // // // //       description: "Artisanal religious and decorative sculptures",
// // // // // // // // //       image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&h=300&fit-crop"
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Home Decor",
// // // // // // // // //       description: "Beautiful pieces to enhance your living space",
// // // // // // // // //       image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit-crop"
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Ceramic Vases",
// // // // // // // // //       description: "Handcrafted ceramic vases in various designs",
// // // // // // // // //       image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=300&fit-crop"
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Terracotta Flower Pots",
// // // // // // // // //       description: "Traditional clay planters for your garden and home",
// // // // // // // // //       image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit-crop"
// // // // // // // // //     }
// // // // // // // // //   ];

// // // // // // // // //   const testimonials = [
// // // // // // // // //     {
// // // // // // // // //       name: "Sarah Johnson",
// // // // // // // // //       role: "Interior Designer",
// // // // // // // // //       content: "NY Ventures has been our go-to supplier for unique home decor pieces. Their quality is unmatched.",
// // // // // // // // //       rating: 5
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       name: "Michael Chen",
// // // // // // // // //       role: "Restaurant Owner",
// // // // // // // // //       content: "The copper articles and bar accessories have elevated our establishment's ambiance significantly.",
// // // // // // // // //       rating: 5
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       name: "Emma Davis",
// // // // // // // // //       role: "Boutique Owner",
// // // // // // // // //       content: "Their handicrafts are authentic and beautifully crafted. Our customers love them!",
// // // // // // // // //       rating: 5
// // // // // // // // //     }
// // // // // // // // //   ];

// // // // // // // // //   // Define phrases for the AutoTypeText component
// // // // // // // // //   const autoTypePhrases = [
// // // // // // // // //     "for Your Unique Home",
// // // // // // // // //     "that Enhance Your Space",
// // // // // // // // //     "crafted with Passion",
// // // // // // // // //     "sustainable & Elegant Solutions"
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-background font-inter">
// // // // // // // // //       {/* Hero Section with Background Image */}
// // // // // // // // //       <section
// // // // // // // // //         className="min-h-screen bg-cover bg-center bg-no-repeat relative"
// // // // // // // // //         style={{
// // // // // // // // //           backgroundImage: "url('/lovable-uploads/cfd4a498-dd56-4234-9eb5-d586d3aa0f47.png')"
// // // // // // // // //         }}
// // // // // // // // //       >
// // // // // // // // //         {/* Overlay for better text readability */}
// // // // // // // // //         <div className="absolute inset-0 bg-black/40"></div>

// // // // // // // // //         {/* Navbar with translucent background */}
// // // // // // // // //         <div className="relative z-50">
// // // // // // // // //           <Navbar />
// // // // // // // // //         </div>

// // // // // // // // //         {/* Hero Content */}
// // // // // // // // //         <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
// // // // // // // // //           <div className="container mx-auto text-center text-white">
// // // // // // // // //             <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
// // // // // // // // //               <h1 className="text-6xl lg:text-8xl font-bold font-playfair leading-tight">
// // // // // // // // //                 Uniquely<br />
// // // // // // // // //                 <span className="text-white/80">Yours,</span><br />
// // // // // // // // //                 Beautifully<br />
// // // // // // // // //                 Designed
// // // // // // // // //               </h1>
// // // // // // // // //               {/* Replaced static paragraph with AutoTypeText component */}
// // // // // // // // //               <p className="text-2xl font-inter leading-relaxed max-w-2xl mx-auto text-white/90">
// // // // // // // // //                 Beautifully Crafted Pieces
// // // // // // // // //                 <AutoTypeText
// // // // // // // // //                   staticPrefix=" " // Added a space here so it looks like "Pieces for Your Unique Home"
// // // // // // // // //                   phrases={autoTypePhrases}
// // // // // // // // //                   typingSpeed={100}
// // // // // // // // //                   deletingSpeed={50}
// // // // // // // // //                   delayBetweenPhrases={2000}
// // // // // // // // //                   className="inline" // Keep it inline with the static text
// // // // // // // // //                 />
// // // // // // // // //               </p>

// // // // // // // // //               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
// // // // // // // // //                 <Button
// // // // // // // // //                   asChild
// // // // // // // // //                   size="lg"
// // // // // // // // //                   className="px-12 py-4 text-lg bg-white text-gray-900 hover:bg-white/90 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // // // // // //                 >
// // // // // // // // //                   <Link to="/products">Shop Now</Link>
// // // // // // // // //                 </Button>
// // // // // // // // //                 <Button
// // // // // // // // //                   asChild
// // // // // // // // //                   variant="outline"
// // // // // // // // //                   size="lg"
// // // // // // // // //                   className="px-12 py-4 text-lg border-white text-gray-800 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // // // // // //                 >
// // // // // // // // //                   <Link to="/about">Learn More</Link>
// // // // // // // // //                 </Button>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* Featured Products */}
// // // // // // // // //       <section className="py-24 bg-white">
// // // // // // // // //         <div className="container mx-auto px-4">
// // // // // // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // // // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">Our Product Categories</h2>
// // // // // // // // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
// // // // // // // // //               Discover our extensive range of premium products, carefully curated for quality and style
// // // // // // // // //             </p>
// // // // // // // // //           </div>

// // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // // // // // //             {products.map((product, index) => (
// // // // // // // // //               <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in border-0 shadow-lg bg-white rounded-2xl overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
// // // // // // // // //                 <div className="aspect-[4/3] overflow-hidden">
// // // // // // // // //                   <img
// // // // // // // // //                     src={product.image}
// // // // // // // // //                     alt={product.title}
// // // // // // // // //                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// // // // // // // // //                   />
// // // // // // // // //                 </div>
// // // // // // // // //                 <CardHeader className="text-center p-8">
// // // // // // // // //                   <CardTitle className="font-playfair text-2xl group-hover:text-gray-900 transition-colors duration-300 text-gray-800 mb-3">{product.title}</CardTitle>
// // // // // // // // //                   <CardDescription className="font-inter text-gray-600 text-lg">{product.description}</CardDescription>
// // // // // // // // //                 </CardHeader>
// // // // // // // // //               </Card>
// // // // // // // // //             ))}
// // // // // // // // //           </div>

// // // // // // // // //           <div className="text-center mt-16 animate-fade-in">
// // // // // // // // //             <Button asChild size="lg" className="hover:scale-105 transition-all duration-300 font-inter font-medium bg-gray-900 text-white hover:bg-gray-800 px-12 py-4 text-lg">
// // // // // // // // //               <Link to="/products">View All Products</Link>
// // // // // // // // //             </Button>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* Testimonials */}
// // // // // // // // //       <section id="testimonials" className="py-24 bg-gray-50">
// // // // // // // // //         <div className="container mx-auto px-4">
// // // // // // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // // // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">What Our Clients Say</h2>
// // // // // // // // //             <p className="text-xl text-gray-600 font-inter">
// // // // // // // // //               Trusted by businesses and individuals across the globe
// // // // // // // // //             </p>
// // // // // // // // //           </div>

// // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// // // // // // // // //             {testimonials.map((testimonial, index) => (
// // // // // // // // //               <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left border-0 shadow-lg bg-white rounded-2xl p-8" style={{ animationDelay: `${index * 0.2}s` }}>
// // // // // // // // //                 <CardContent className="pt-0">
// // // // // // // // //                   <div className="flex mb-6">
// // // // // // // // //                     {[...Array(testimonial.rating)].map((_, i) => (
// // // // // // // // //                       <span key={i} className="text-yellow-400 text-xl animate-scale-in" style={{ animationDelay: `${(index * 0.2) + (i * 0.1)}s` }}>★</span>
// // // // // // // // //                     ))}
// // // // // // // // //                   </div>
// // // // // // // // //                   <p className="text-gray-600 mb-6 italic font-inter text-lg leading-relaxed">"{testimonial.content}"</p>
// // // // // // // // //                   <div>
// // // // // // // // //                     <p className="font-semibold font-playfair text-gray-900 text-xl">{testimonial.name}</p>
// // // // // // // // //                     <p className="text-gray-500 font-inter">{testimonial.role}</p>
// // // // // // // // //                   </div>
// // // // // // // // //                 </CardContent>
// // // // // // // // //               </Card>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       <Footer />
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Index;




// // // // // // // // // src/pages/Index.tsx
// // // // // // // // import Navbar from "@/components/Navbar";
// // // // // // // // import Footer from "@/components/Footer";
// // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // import { Link } from "react-router-dom";
// // // // // // // // import AutoTypeText from "@/components/AutoTypeText";

// // // // // // // // const Index = () => {
// // // // // // // //   const products = [
// // // // // // // //     {
// // // // // // // //       title: "Copper Items",
// // // // // // // //       description: "Premium quality copper utensils and decorative items",
// // // // // // // //       image: "https://images.unsplash.com/photo-1541617392762-9bd12653bd12?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Biodegradable Items",
// // // // // // // //       description: "Elegant cocktail shakers, muddlers, and bar tools",
// // // // // // // //       image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit-crop"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Bar Accessories",
// // // // // // // //       description: "Artisanal religious and decorative sculptures",
// // // // // // // //       image: "https://images.unsplash.com/photo-1569878858876-c8cda7f9ecf8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Baggas Disposable",
// // // // // // // //       description: "Beautiful pieces to enhance your living space",
// // // // // // // //       image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit-crop"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Ceramic & Terracotta Items",
// // // // // // // //       description: "Handcrafted ceramic vases in various designs",
// // // // // // // //       image: "https://images.unsplash.com/photo-1736143157411-0a70fe999ecb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Handicraft Items",
// // // // // // // //       description: "Traditional clay planters for your garden and home",
// // // // // // // //       image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit-crop"
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   const testimonials = [
// // // // // // // //     {
// // // // // // // //       name: "Sarah Johnson",
// // // // // // // //       role: "Interior Designer",
// // // // // // // //       content: "NY Ventures has been our go-to supplier for unique home decor pieces. Their quality is unmatched.",
// // // // // // // //       rating: 5
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Michael Chen",
// // // // // // // //       role: "Restaurant Owner",
// // // // // // // //       content: "The copper articles and bar accessories have elevated our establishment's ambiance significantly.",
// // // // // // // //       rating: 5
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Emma Davis",
// // // // // // // //       role: "Boutique Owner",
// // // // // // // //       content: "Their handicrafts are authentic and beautifully crafted. Our customers love them!",
// // // // // // // //       rating: 5
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   // Define phrases for the AutoTypeText component - MODIFIED CONTENT
// // // // // // // //   const autoTypePhrases = [
// // // // // // // //     "With Unmatched Quality"
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-background font-inter">
// // // // // // // //       {/* Hero Section with Background Image */}
// // // // // // // //       <section
// // // // // // // //         className="min-h-screen bg-cover bg-center bg-no-repeat relative"
// // // // // // // //         style={{
// // // // // // // //           backgroundImage: "url('/lovable-uploads/cfd4a498-dd56-4234-9eb5-d586d3aa0f47.png')"
// // // // // // // //         }}
// // // // // // // //       >
// // // // // // // //         {/* Overlay for better text readability */}
// // // // // // // //         <div className="absolute inset-0 bg-black/40"></div>

// // // // // // // //         {/* Navbar with translucent background */}
// // // // // // // //         <div className="relative z-50">
// // // // // // // //           <Navbar />
// // // // // // // //         </div>

// // // // // // // //         {/* Hero Content */}
// // // // // // // //         <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
// // // // // // // //           <div className="container mx-auto text-center text-white">
// // // // // // // //             <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
// // // // // // // //               <h1 className="text-6xl lg:text-8xl font-bold font-playfair leading-tight">
// // // // // // // //                 Uniquely<br />
// // // // // // // //                 <span className="text-white/80">Yours,</span><br />
// // // // // // // //                 Beautifully<br />
// // // // // // // //                 Designed
// // // // // // // //               </h1>
// // // // // // // //               {/* Replaced static paragraph with AutoTypeText component - MODIFIED TEXT AND SIZE */}
// // // // // // // //               <p className="font-inter leading-relaxed max-w-4xl mx-auto text-white/90">
// // // // // // // //                 <span className="text-4xl font-times">Beautifully Crafted Pieces</span> {/* Static text with its original size */}
// // // // // // // //                 <AutoTypeText
// // // // // // // //                   staticPrefix=" "
// // // // // // // //                   phrases={autoTypePhrases} // Using the modified phrases
// // // // // // // //                   typingSpeed={100}
// // // // // // // //                   deletingSpeed={50}
// // // // // // // //                   delayBetweenPhrases={2000}
// // // // // // // //                   className="inline text-4xl font-bold font-times" // Increased text size to 4xl and made bold
// // // // // // // //                 />
// // // // // // // //               </p>

// // // // // // // //               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
// // // // // // // //                 <Button
// // // // // // // //                   asChild
// // // // // // // //                   size="lg"
// // // // // // // //                   className="px-12 py-4 text-lg bg-white text-gray-900 hover:bg-white/90 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // // // // //                 >
// // // // // // // //                   <Link to="/products">Shop Now</Link>
// // // // // // // //                 </Button>
// // // // // // // //                 <Button
// // // // // // // //                   asChild
// // // // // // // //                   variant="outline"
// // // // // // // //                   size="lg"
// // // // // // // //                   className="px-12 py-4 text-lg border-white text-gray-800 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // // // // //                 >
// // // // // // // //                   <Link to="/about">Learn More</Link>
// // // // // // // //                 </Button>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* Featured Products */}
// // // // // // // //       <section className="py-24 bg-white">
// // // // // // // //         <div className="container mx-auto px-4">
// // // // // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">Our Product Categories</h2>
// // // // // // // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
// // // // // // // //               Discover our extensive range of premium products, carefully curated for quality and style
// // // // // // // //             </p>
// // // // // // // //           </div>

// // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // // // // //             {products.map((product, index) => (
// // // // // // // //               <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in border-0 shadow-lg bg-white rounded-2xl overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
// // // // // // // //                 <div className="aspect-[4/3] overflow-hidden">
// // // // // // // //                   <img
// // // // // // // //                     src={product.image}
// // // // // // // //                     alt={product.title}
// // // // // // // //                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// // // // // // // //                   />
// // // // // // // //                 </div>
// // // // // // // //                 <CardHeader className="text-center p-8">
// // // // // // // //                   <CardTitle className="font-playfair text-2xl group-hover:text-gray-900 transition-colors duration-300 text-gray-800 mb-3">{product.title}</CardTitle>
// // // // // // // //                   <CardDescription className="font-inter text-gray-600 text-lg">{product.description}</CardDescription>
// // // // // // // //                 </CardHeader>
// // // // // // // //               </Card>
// // // // // // // //             ))}
// // // // // // // //           </div>

// // // // // // // //           <div className="text-center mt-16 animate-fade-in">
// // // // // // // //             <Button asChild size="lg" className="hover:scale-105 transition-all duration-300 font-inter font-medium bg-gray-900 text-white hover:bg-gray-800 px-12 py-4 text-lg">
// // // // // // // //               <Link to="/products">View All Products</Link>
// // // // // // // //             </Button>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* Testimonials */}
// // // // // // // //       <section id="testimonials" className="py-24 bg-gray-50">
// // // // // // // //         <div className="container mx-auto px-4">
// // // // // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">What Our Clients Say</h2>
// // // // // // // //             <p className="text-xl text-gray-600 font-inter">
// // // // // // // //               Trusted by businesses and individuals across the globe
// // // // // // // //             </p>
// // // // // // // //           </div>

// // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// // // // // // // //             {testimonials.map((testimonial, index) => (
// // // // // // // //               <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left border-0 shadow-lg bg-white rounded-2xl p-8" style={{ animationDelay: `${index * 0.2}s` }}>
// // // // // // // //                 <CardContent className="pt-0">
// // // // // // // //                   <div className="flex mb-6">
// // // // // // // //                     {[...Array(testimonial.rating)].map((_, i) => (
// // // // // // // //                       <span key={i} className="text-yellow-400 text-xl animate-scale-in" style={{ animationDelay: `${(index * 0.2) + (i * 0.1)}s` }}>★</span>
// // // // // // // //                     ))}
// // // // // // // //                   </div>
// // // // // // // //                   <p className="text-gray-600 mb-6 italic font-inter text-lg leading-relaxed">"{testimonial.content}"</p>
// // // // // // // //                   <div>
// // // // // // // //                     <p className="font-semibold font-playfair text-gray-900 text-xl">{testimonial.name}</p>
// // // // // // // //                     <p className="text-gray-500 font-inter">{testimonial.role}</p>
// // // // // // // //                   </div>
// // // // // // // //                 </CardContent>
// // // // // // // //               </Card>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       <Footer />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Index;


// // // // // // // // // src/pages/Index.tsx
// // // // // // // // import Navbar from "@/components/Navbar";
// // // // // // // // import Footer from "@/components/Footer";
// // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // import { Link } from "react-router-dom"; // Ensure Link is imported
// // // // // // // // import AutoTypeText from "@/components/AutoTypeText";

// // // // // // // // const Index = () => {
// // // // // // // //   const products = [
// // // // // // // //     {
// // // // // // // //       title: "Copper Items",
// // // // // // // //       description: "Premium quality copper utensils and decorative items",
// // // // // // // //       image: "https://images.unsplash.com/photo-1541617392762-9bd12653bd12?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // //       slug: "copper-items" // Added slug for redirection
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Bagas Disposable",
// // // // // // // //       description: "Elegant cocktail shakers, muddlers, and bar tools",
// // // // // // // //       image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit-crop",
// // // // // // // //       slug: "biodegradable-items" // Added slug
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Bar Accessories",
// // // // // // // //       description: "Artisanal religious and decorative sculptures",
// // // // // // // //       image: "https://images.unsplash.com/photo-1569878858876-c8cda7f9ecf8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // //       slug: "bar-accessories" // Added slug
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Baggas Disposable",
// // // // // // // //       description: "Beautiful pieces to enhance your living space",
// // // // // // // //       image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit-crop",
// // // // // // // //       slug: "bagas-disposables" // Added slug (matching your Navbar's slug for Bagas Disposables)
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Ceramic & Terracotta Items",
// // // // // // // //       description: "Handcrafted ceramic vases in various designs",
// // // // // // // //       image: "https://images.unsplash.com/photo-1736143157411-0a70fe999ecb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // //       slug: "ceramic-terracotta-items" // Added slug
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Packaging Materials",
// // // // // // // //       description: "Traditional clay planters for your garden and home",
// // // // // // // //       image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit-crop",
// // // // // // // //       slug: "handicraft-items" // Added slug (assuming this maps to something like "Handicraft Idols" from Navbar)
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   const testimonials = [
// // // // // // // //     {
// // // // // // // //       name: "Sarah Johnson",
// // // // // // // //       role: "Interior Designer",
// // // // // // // //       content: "NY Ventures has been our go-to supplier for unique home decor pieces. Their quality is unmatched.",
// // // // // // // //       rating: 5
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Michael Chen",
// // // // // // // //       role: "Restaurant Owner",
// // // // // // // //       content: "The copper articles and bar accessories have elevated our establishment's ambiance significantly.",
// // // // // // // //       rating: 5
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Emma Davis",
// // // // // // // //       role: "Boutique Owner",
// // // // // // // //       content: "Their handicrafts are authentic and beautifully crafted. Our customers love them!",
// // // // // // // //       rating: 5
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   // Define phrases for the AutoTypeText component
// // // // // // // //   const autoTypePhrases = [
// // // // // // // //     "With Unmatched Quality"
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-background font-inter">
// // // // // // // //       {/* Hero Section with Background Image */}
// // // // // // // //       <section
// // // // // // // //         className="min-h-screen bg-cover bg-center bg-no-repeat relative"
// // // // // // // //         style={{
// // // // // // // //           backgroundImage: "url('/lovable-uploads/cfd4a498-dd56-4234-9eb5-d586d3aa0f47.png')"
// // // // // // // //         }}
// // // // // // // //       >
// // // // // // // //         {/* Overlay for better text readability */}
// // // // // // // //         <div className="absolute inset-0 bg-black/40"></div>

// // // // // // // //         {/* Navbar with translucent background */}
// // // // // // // //         <div className="relative z-50">
// // // // // // // //           <Navbar />
// // // // // // // //         </div>

// // // // // // // //         {/* Hero Content */}
// // // // // // // //         <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
// // // // // // // //           <div className="container mx-auto text-center text-white">
// // // // // // // //             <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
// // // // // // // //               <h1 className="text-6xl lg:text-8xl font-bold font-playfair leading-tight">
// // // // // // // //                 Uniquely<br />
// // // // // // // //                 <span className="text-white/80">Yours,</span><br />
// // // // // // // //                 Beautifully<br />
// // // // // // // //                 Designed
// // // // // // // //               </h1>
// // // // // // // //               {/* Replaced static paragraph with AutoTypeText component */}
// // // // // // // //               <p className="font-inter leading-relaxed max-w-4xl mx-auto text-white/90">
// // // // // // // //                 <span className="text-4xl font-times">Beautifully Crafted Pieces</span> {/* Static text with its original size */}
// // // // // // // //                 <AutoTypeText
// // // // // // // //                   staticPrefix=" "
// // // // // // // //                   // The 'speed' prop error you encountered earlier suggests AutoTypeText might be missing a prop or has a type issue.
// // // // // // // //                   // For now, I'll pass the `typingSpeed`, `deletingSpeed`, and `delayBetweenPhrases` as props, assuming AutoTypeText expects them.
// // // // // // // //                   // If 'speed' specifically is required by AutoTypeText, you might need to add a `speed` prop that determines the overall pace.
// // // // // // // //                   // The error "ReferenceError: speed is not defined" indicates it was likely used within AutoTypeText without being passed as a prop or defined.
// // // // // // // //                   typingSpeed={100}
// // // // // // // //                   deletingSpeed={50}
// // // // // // // //                   delayBetweenPhrases={2000}
// // // // // // // //                   phrases={autoTypePhrases}
// // // // // // // //                   className="inline text-4xl font-bold font-times" // Increased text size to 4xl and made bold
// // // // // // // //                 />
// // // // // // // //               </p>

// // // // // // // //               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
// // // // // // // //                 <Button
// // // // // // // //                   asChild
// // // // // // // //                   size="lg"
// // // // // // // //                   className="px-12 py-4 text-lg bg-white text-gray-900 hover:bg-white/90 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // // // // //                 >
// // // // // // // //                   <Link to="/products">Shop Now</Link>
// // // // // // // //                 </Button>
// // // // // // // //                 <Button
// // // // // // // //                   asChild
// // // // // // // //                   variant="outline"
// // // // // // // //                   size="lg"
// // // // // // // //                   className="px-12 py-4 text-lg border-white text-gray-800 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // // // // //                 >
// // // // // // // //                   <Link to="/about">Learn More</Link>
// // // // // // // //                 </Button>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* Featured Products */}
// // // // // // // //       <section className="py-24 bg-white">
// // // // // // // //         <div className="container mx-auto px-4">
// // // // // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">Our Product Categories</h2>
// // // // // // // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
// // // // // // // //               Discover our extensive range of premium products, carefully curated for quality and style
// // // // // // // //             </p>
// // // // // // // //           </div>

// // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // // // // //             {products.map((product, index) => (
// // // // // // // //               // Wrap the entire Card component with Link
// // // // // // // //               <Link
// // // // // // // //                 key={index}
// // // // // // // //                 to={`/products/${product.slug}`} // Use the added slug for redirection
// // // // // // // //                 className="block" // Add 'block' to make the Link take full width of grid item
// // // // // // // //               >
// // // // // // // //                 <Card
// // // // // // // //                   className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in border-0 shadow-lg bg-white rounded-2xl overflow-hidden"
// // // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // // //                 >
// // // // // // // //                   <div className="aspect-[4/3] overflow-hidden">
// // // // // // // //                     <img
// // // // // // // //                       src={product.image}
// // // // // // // //                       alt={product.title}
// // // // // // // //                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// // // // // // // //                     />
// // // // // // // //                   </div>
// // // // // // // //                   <CardHeader className="text-center p-8">
// // // // // // // //                     <CardTitle className="font-playfair text-2xl group-hover:text-gray-900 transition-colors duration-300 text-gray-800 mb-3">{product.title}</CardTitle>
// // // // // // // //                     <CardDescription className="font-inter text-gray-600 text-lg">{product.description}</CardDescription>
// // // // // // // //                   </CardHeader>
// // // // // // // //                 </Card>
// // // // // // // //               </Link>
// // // // // // // //             ))}
// // // // // // // //           </div>

// // // // // // // //           <div className="text-center mt-16 animate-fade-in">
// // // // // // // //             <Button asChild size="lg" className="hover:scale-105 transition-all duration-300 font-inter font-medium bg-gray-900 text-white hover:bg-gray-800 px-12 py-4 text-lg">
// // // // // // // //               <Link to="/products">View All Products</Link>
// // // // // // // //             </Button>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* Testimonials */}
// // // // // // // //       <section id="testimonials" className="py-24 bg-gray-50">
// // // // // // // //         <div className="container mx-auto px-4">
// // // // // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">What Our Clients Say</h2>
// // // // // // // //             <p className="text-xl text-gray-600 font-inter">
// // // // // // // //               Trusted by businesses and individuals across the globe
// // // // // // // //             </p>
// // // // // // // //           </div>

// // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// // // // // // // //             {testimonials.map((testimonial, index) => (
// // // // // // // //               <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left border-0 shadow-lg bg-white rounded-2xl p-8" style={{ animationDelay: `${index * 0.2}s` }}>
// // // // // // // //                 <CardContent className="pt-0">
// // // // // // // //                   <div className="flex mb-6">
// // // // // // // //                     {[...Array(testimonial.rating)].map((_, i) => (
// // // // // // // //                       <span key={i} className="text-yellow-400 text-xl animate-scale-in" style={{ animationDelay: `${(index * 0.2) + (i * 0.1)}s` }}>★</span>
// // // // // // // //                     ))}
// // // // // // // //                   </div>
// // // // // // // //                   <p className="text-gray-600 mb-6 italic font-inter text-lg leading-relaxed">"{testimonial.content}"</p>
// // // // // // // //                   <div>
// // // // // // // //                     <p className="font-semibold font-playfair text-gray-900 text-xl">{testimonial.name}</p>
// // // // // // // //                     <p className="text-gray-500 font-inter">{testimonial.role}</p>
// // // // // // // //                   </div>
// // // // // // // //                 </CardContent>
// // // // // // // //               </Card>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       <Footer />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Index;


// // // // // // // // src/pages/Index.tsx
// // // // // // // import Navbar from "@/components/Navbar";
// // // // // // // import Footer from "@/components/Footer";
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // import { Link } from "react-router-dom"; // Ensure Link is imported
// // // // // // // import AutoTypeText from "@/components/AutoTypeText";

// // // // // // // const Index = () => {
// // // // // // //   const products = [
// // // // // // //     {
// // // // // // //       title: "Copper Items",
// // // // // // //       description: "Premium quality copper utensils and decorative items",
// // // // // // //       image: "https://images.unsplash.com/photo-1541617392762-9bd12653bd12?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // //       slug: "copper-items"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Bagas Disposables",
// // // // // // //       description: "Elegant cocktail shakers, muddlers, and bar tools",
// // // // // // //       image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit-crop",
// // // // // // //       slug: "bagas-disposables"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Bar Accessories",
// // // // // // //       description: "Artisanal religious and decorative sculptures",
// // // // // // //       image: "https://images.unsplash.com/photo-1569878858876-c8cda7f9ecf8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // //       slug: "bar-accessories"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Ceramic Items", // Renamed from "Ceramic & Terracotta Items" to "Ceramic Items"
// // // // // // //       description: "Handcrafted ceramic vases in various designs",
// // // // // // //       image: "https://images.unsplash.com/photo-1630154396598-a93983682861?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // //       slug: "ceramic-items" // Updated slug
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Terracotta Items", // <--- NEW CARD ADDED
// // // // // // //       description: "Traditional clay planters and decorative terracotta pieces",
// // // // // // //       image: "https://images.unsplash.com/photo-1736143157411-0a70fe999ecb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder image, replace with a relevant one
// // // // // // //       slug: "terracotta-items" // New slug
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Packaging Materials",
// // // // // // //       description: "Secure and elegant solutions for all your product packaging needs", // Updated description for clarity
// // // // // // //       image: "https://images.unsplash.com/photo-1613574203646-ffdae46ce3e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // //       slug: "packaging-material"
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   const testimonials = [
// // // // // // //     {
// // // // // // //       name: "Sarah Johnson",
// // // // // // //       role: "Interior Designer",
// // // // // // //       content: "NY Ventures has been our go-to supplier for unique home decor pieces. Their quality is unmatched.",
// // // // // // //       rating: 5
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Michael Chen",
// // // // // // //       role: "Restaurant Owner",
// // // // // // //       content: "The copper articles and bar accessories have elevated our establishment's ambiance significantly.",
// // // // // // //       rating: 5
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Emma Davis",
// // // // // // //       role: "Boutique Owner",
// // // // // // //       content: "Their handicrafts are authentic and beautifully crafted. Our customers love them!",
// // // // // // //       rating: 5
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   const autoTypePhrases = [
// // // // // // //     "With Unmatched Quality"
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-background font-inter">
// // // // // // //       {/* Hero Section with Background Image */}
// // // // // // //       <section
// // // // // // //         className="min-h-screen bg-cover bg-center bg-no-repeat relative"
// // // // // // //         style={{
// // // // // // //           backgroundImage: "url('/lovable-uploads/cfd4a498-dd56-4234-9eb5-d586d3aa0f47.png')"
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         <div className="absolute inset-0 bg-black/40"></div>
// // // // // // //         <div className="relative z-50">
// // // // // // //           <Navbar />
// // // // // // //         </div>
// // // // // // //         <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
// // // // // // //           <div className="container mx-auto text-center text-white">
// // // // // // //             <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
// // // // // // //               <h1 className="text-6xl lg:text-8xl font-bold font-playfair leading-tight">
// // // // // // //                 Uniquely<br />
// // // // // // //                 <span className="text-white/80">Yours,</span><br />
// // // // // // //                 Beautifully<br />
// // // // // // //                 Designed
// // // // // // //               </h1>
// // // // // // //               <p className="font-inter leading-relaxed max-w-4xl mx-auto text-white/90">
// // // // // // //                 <span className="text-4xl font-times">Beautifully Crafted Pieces</span>
// // // // // // //                 <AutoTypeText
// // // // // // //                   staticPrefix=" "
// // // // // // //                   typingSpeed={100}
// // // // // // //                   deletingSpeed={50}
// // // // // // //                   delayBetweenPhrases={2000}
// // // // // // //                   phrases={autoTypePhrases}
// // // // // // //                   className="inline text-4xl font-bold font-times"
// // // // // // //                 />
// // // // // // //               </p>
// // // // // // //               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
// // // // // // //                 <Button
// // // // // // //                   asChild
// // // // // // //                   size="lg"
// // // // // // //                   className="px-12 py-4 text-lg bg-white text-gray-900 hover:bg-white/90 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // // // //                 >
// // // // // // //                   <Link to="/products">Shop Now</Link>
// // // // // // //                 </Button>
// // // // // // //                 <Button
// // // // // // //                   asChild
// // // // // // //                   variant="outline"
// // // // // // //                   size="lg"
// // // // // // //                   className="px-12 py-4 text-lg border-white text-gray-800 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // // // //                 >
// // // // // // //                   <Link to="/about">Learn More</Link>
// // // // // // //                 </Button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* Featured Products */}
// // // // // // //       <section className="py-24 bg-white">
// // // // // // //         <div className="container mx-auto px-4">
// // // // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">Our Product Categories</h2>
// // // // // // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
// // // // // // //               Discover our extensive range of premium products, carefully curated for quality and style
// // // // // // //             </p>
// // // // // // //           </div>

// // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // // // //             {products.map((product, index) => (
// // // // // // //               <Link
// // // // // // //                 key={index}
// // // // // // //                 to={`/products/${product.slug}`}
// // // // // // //                 className="block"
// // // // // // //               >
// // // // // // //                 <Card
// // // // // // //                   className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in border-0 shadow-lg bg-white rounded-2xl overflow-hidden"
// // // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // // //                 >
// // // // // // //                   <div className="aspect-[4/3] overflow-hidden">
// // // // // // //                     <img
// // // // // // //                       src={product.image}
// // // // // // //                       alt={product.title}
// // // // // // //                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// // // // // // //                     />
// // // // // // //                   </div>
// // // // // // //                   <CardHeader className="text-center p-8">
// // // // // // //                     <CardTitle className="font-playfair text-2xl group-hover:text-gray-900 transition-colors duration-300 text-gray-800 mb-3">{product.title}</CardTitle>
// // // // // // //                     <CardDescription className="font-inter text-gray-600 text-lg">{product.description}</CardDescription>
// // // // // // //                   </CardHeader>
// // // // // // //                 </Card>
// // // // // // //               </Link>
// // // // // // //             ))}
// // // // // // //           </div>

// // // // // // //           <div className="text-center mt-16 animate-fade-in">
// // // // // // //             <Button asChild size="lg" className="hover:scale-105 transition-all duration-300 font-inter font-medium bg-gray-900 text-white hover:bg-gray-800 px-12 py-4 text-lg">
// // // // // // //               <Link to="/products">View All Products</Link>
// // // // // // //             </Button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* Testimonials */}
// // // // // // //       <section id="testimonials" className="py-24 bg-gray-50">
// // // // // // //         <div className="container mx-auto px-4">
// // // // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">What Our Clients Say</h2>
// // // // // // //             <p className="text-xl text-gray-600 font-inter">
// // // // // // //               Trusted by businesses and individuals across the globe
// // // // // // //             </p>
// // // // // // //           </div>

// // // // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// // // // // // //             {testimonials.map((testimonial, index) => (
// // // // // // //               <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left border-0 shadow-lg bg-white rounded-2xl p-8" style={{ animationDelay: `${index * 0.2}s` }}>
// // // // // // //                 <CardContent className="pt-0">
// // // // // // //                   <div className="flex mb-6">
// // // // // // //                     {[...Array(testimonial.rating)].map((_, i) => (
// // // // // // //                       <span key={i} className="text-yellow-400 text-xl animate-scale-in" style={{ animationDelay: `${(index * 0.2) + (i * 0.1)}s` }}>★</span>
// // // // // // //                     ))}
// // // // // // //                   </div>
// // // // // // //                   <p className="text-gray-600 mb-6 italic font-inter text-lg leading-relaxed">"{testimonial.content}"</p>
// // // // // // //                   <div>
// // // // // // //                     <p className="font-semibold font-playfair text-gray-900 text-xl">{testimonial.name}</p>
// // // // // // //                     <p className="text-gray-500 font-inter">{testimonial.role}</p>
// // // // // // //                   </div>
// // // // // // //                 </CardContent>
// // // // // // //               </Card>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       <Footer />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Index;










// // // // // // // src/pages/Index.tsx
// // // // // // import Navbar from "@/components/Navbar";
// // // // // // import Footer from "@/components/Footer";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // import { Link } from "react-router-dom"; // Ensure Link is imported
// // // // // // import AutoTypeText from "@/components/AutoTypeText";

// // // // // // const Index = () => {
// // // // // //   const products = [
// // // // // //     {
// // // // // //       title: "Copper Items",
// // // // // //       description: "Premium quality copper utensils and decorative items",
// // // // // //       image: "https://images.unsplash.com/photo-1541617392762-9bd12653bd12?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // //       slug: "copper-items"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Bagas Disposables",
// // // // // //       description: "Elegant cocktail shakers, muddlers, and bar tools",
// // // // // //       image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit-crop",
// // // // // //       slug: "bagas-disposables"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Bar Accessories",
// // // // // //       description: "Artisanal religious and decorative sculptures",
// // // // // //       image: "https://images.unsplash.com/photo-1569878858876-c8cda7f9ecf8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // //       slug: "bar-accessories"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Ceramic Items",
// // // // // //       description: "Handcrafted ceramic vases in various designs",
// // // // // //       image: "https://images.unsplash.com/photo-1630154396598-a93983682861?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // //       slug: "ceramic-items"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Terracotta Items",
// // // // // //       description: "Traditional clay planters and decorative terracotta pieces",
// // // // // //       image: "https://images.unsplash.com/photo-1736143157411-0a70fe999ecb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // //       slug: "terracotta-items"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Packaging Materials",
// // // // // //       description: "Secure and elegant solutions for all your product packaging needs",
// // // // // //       image: "https://images.unsplash.com/photo-1613574203646-ffdae46ce3e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // //       slug: "packaging-material"
// // // // // //     }
// // // // // //   ];

// // // // // //   const testimonials = [
// // // // // //     {
// // // // // //       name: "Sarah Johnson",
// // // // // //       role: "Interior Designer",
// // // // // //       content: "NY Ventures has been our go-to supplier for unique home decor pieces. Their quality is unmatched.",
// // // // // //       rating: 5
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Michael Chen",
// // // // // //       role: "Restaurant Owner",
// // // // // //       content: "The copper articles and bar accessories have elevated our establishment's ambiance significantly.",
// // // // // //       rating: 5
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Emma Davis",
// // // // // //       role: "Boutique Owner",
// // // // // //       content: "Their handicrafts are authentic and beautifully crafted. Our customers love them!",
// // // // // //       rating: 5
// // // // // //     }
// // // // // //   ];

// // // // // //   // NEW: Benefits data
// // // // // //   const benefits = [
// // // // // //     {
// // // // // //       title: "Superior Quality Materials",
// // // // // //       description: "We source only the finest materials, ensuring durability and timeless elegance in every product.",
// // // // // //       icon: "✅" // Placeholder for an icon, you might replace with an actual icon component or SVG
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Artisanal Craftsmanship",
// // // // // //       description: "Each item is meticulously handcrafted by skilled artisans, showcasing unique detail and character.",
// // // // // //       icon: "✨"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Eco-Friendly Solutions",
// // // // // //       description: "Our commitment to sustainability means many of our products are made from recycled or natural materials.",
// // // // // //       icon: "♻️"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Diverse Product Range",
// // // // // //       description: "From traditional copperware to modern ceramic designs, our collection caters to diverse tastes and needs.",
// // // // // //       icon: "📦"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Customization Options",
// // // // // //       description: "We offer tailored solutions to meet specific client requirements, ensuring your vision comes to life.",
// // // // // //       icon: "🎨"
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Reliable Global Shipping",
// // // // // //       description: "Experience prompt and secure delivery of your orders, no matter where you are in the world.",
// // // // // //       icon: "✈️"
// // // // // //     }
// // // // // //   ];

// // // // // //   const autoTypePhrases = [
// // // // // //     "With Unmatched Quality"
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-background font-inter">
// // // // // //       {/* Hero Section with Background Image */}
// // // // // //       <section
// // // // // //         className="min-h-screen bg-cover bg-center bg-no-repeat relative"
// // // // // //         style={{
// // // // // //           backgroundImage: "url('/lovable-uploads/cfd4a498-dd56-4234-9eb5-d586d3aa0f47.png')"
// // // // // //         }}
// // // // // //       >
// // // // // //         <div className="absolute inset-0 bg-black/40"></div>
// // // // // //         <div className="relative z-50">
// // // // // //           <Navbar />
// // // // // //         </div>
// // // // // //         <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
// // // // // //           <div className="container mx-auto text-center text-white">
// // // // // //             <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
// // // // // //               <h1 className="text-6xl lg:text-8xl font-bold font-playfair leading-tight">
// // // // // //                 Uniquely<br />
// // // // // //                 <span className="text-white/80">Yours,</span><br />
// // // // // //                 Beautifully<br />
// // // // // //                 Designed
// // // // // //               </h1>
// // // // // //               <p className="font-inter leading-relaxed max-w-4xl mx-auto text-white/90">
// // // // // //                 <span className="text-4xl font-times">Beautifully Crafted Pieces</span>
// // // // // //                 <AutoTypeText
// // // // // //                   staticPrefix=" "
// // // // // //                   typingSpeed={100}
// // // // // //                   deletingSpeed={50}
// // // // // //                   delayBetweenPhrases={2000}
// // // // // //                   phrases={autoTypePhrases}
// // // // // //                   className="inline text-4xl font-bold font-times"
// // // // // //                 />
// // // // // //               </p>
// // // // // //               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
// // // // // //                 <Button
// // // // // //                   asChild
// // // // // //                   size="lg"
// // // // // //                   className="px-12 py-4 text-lg bg-white text-gray-900 hover:bg-white/90 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // // //                 >
// // // // // //                   <Link to="/products">Shop Now</Link>
// // // // // //                 </Button>
// // // // // //                 <Button
// // // // // //                   asChild
// // // // // //                   variant="outline"
// // // // // //                   size="lg"
// // // // // //                   className="px-12 py-4 text-lg border-white text-gray-800 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // // //                 >
// // // // // //                   <Link to="/about-us">Learn More</Link>
// // // // // //                 </Button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* Featured Products */}
// // // // // //       <section className="py-24 bg-white">
// // // // // //         <div className="container mx-auto px-4">
// // // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">Our Product Categories</h2>
// // // // // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
// // // // // //               Discover our extensive range of premium products, carefully curated for quality and style
// // // // // //             </p>
// // // // // //           </div>

// // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // // //             {products.map((product, index) => (
// // // // // //               <Link
// // // // // //                 key={index}
// // // // // //                 to={`/products/${product.slug}`}
// // // // // //                 className="block"
// // // // // //               >
// // // // // //                 <Card
// // // // // //                   className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in border-0 shadow-lg bg-white rounded-2xl overflow-hidden"
// // // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // // //                 >
// // // // // //                   <div className="aspect-[4/3] overflow-hidden">
// // // // // //                     <img
// // // // // //                       src={product.image}
// // // // // //                       alt={product.title}
// // // // // //                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                   <CardHeader className="text-center p-8">
// // // // // //                     <CardTitle className="font-playfair text-2xl group-hover:text-gray-900 transition-colors duration-300 text-gray-800 mb-3">{product.title}</CardTitle>
// // // // // //                     <CardDescription className="font-inter text-gray-600 text-lg">{product.description}</CardDescription>
// // // // // //                   </CardHeader>
// // // // // //                 </Card>
// // // // // //               </Link>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //           <div className="text-center mt-16 animate-fade-in">
// // // // // //             <Button asChild size="lg" className="hover:scale-105 transition-all duration-300 font-inter font-medium bg-gray-900 text-white hover:bg-gray-800 px-12 py-4 text-lg">
// // // // // //               <Link to="/products">View All Products</Link>
// // // // // //             </Button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* NEW: About Us Section */}
// // // // // //       <section className="py-24 bg-gray-100">
// // // // // //         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
// // // // // //           <div className="md:w-1/2 animate-fade-in-left">
// // // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-8 font-playfair leading-tight">
// // // // // //               Crafting Excellence for Generations
// // // // // //             </h2>
// // // // // //             <p className="text-xl text-gray-700 leading-relaxed mb-6 font-inter">
// // // // // //               At NY Ventures, we are passionate about bringing unique and beautifully crafted items to your home and business. With a rich heritage in sourcing and creating exceptional products, we specialize in everything from traditional copperware to modern ceramic designs and essential bar accessories.
// // // // // //             </p>
// // // // // //             <p className="text-xl text-gray-700 leading-relaxed mb-8 font-inter">
// // // // // //               Our commitment to quality, authenticity, and customer satisfaction drives us to curate a collection that not only meets but exceeds expectations. Discover the difference that true craftsmanship makes.
// // // // // //             </p>
// // // // // //             <Button
// // // // // //               asChild
// // // // // //               size="lg"
// // // // // //               className="px-10 py-4 text-lg bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // // //             >
// // // // // //               <Link to="/about-us">Our Story</Link>
// // // // // //             </Button>
// // // // // //           </div>
// // // // // //           <div className="md:w-1/2 animate-fade-in-right">
// // // // // //             <img
// // // // // //               src="https://images.unsplash.com/photo-1589859762194-eaae75c61f64?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder image for About Us
// // // // // //               alt="About Us"
// // // // // //               className="rounded-3xl shadow-xl w-full h-auto object-cover"
// // // // // //             />
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* NEW: Benefits Section */}
// // // // // //       <section className="py-24 bg-white">
// // // // // //         <div className="container mx-auto px-4">
// // // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">Why Choose NY Ventures?</h2>
// // // // // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
// // // // // //               Experience the distinct advantages of partnering with us for your product needs.
// // // // // //             </p>
// // // // // //           </div>

// // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // // //             {benefits.map((benefit, index) => (
// // // // // //               <Card
// // // // // //                 key={index}
// // // // // //                 className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-up border-0 shadow-lg bg-white rounded-2xl p-8 text-center"
// // // // // //                 style={{ animationDelay: `${index * 0.15}s` }}
// // // // // //               >
// // // // // //                 <CardContent className="pt-0 flex flex-col items-center">
// // // // // //                   <div className="text-6xl mb-6 text-gray-800 group-hover:text-primary transition-colors duration-300">
// // // // // //                     {benefit.icon}
// // // // // //                   </div>
// // // // // //                   <CardTitle className="font-playfair text-2xl text-gray-900 mb-3">{benefit.title}</CardTitle>
// // // // // //                   <CardDescription className="font-inter text-gray-600 text-lg">{benefit.description}</CardDescription>
// // // // // //                 </CardContent>
// // // // // //               </Card>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* Testimonials */}
// // // // // //       <section id="testimonials" className="py-24 bg-gray-50">
// // // // // //         <div className="container mx-auto px-4">
// // // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">What Our Clients Say</h2>
// // // // // //             <p className="text-xl text-gray-600 font-inter">
// // // // // //               Trusted by businesses and individuals across the globe
// // // // // //             </p>
// // // // // //           </div>

// // // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// // // // // //             {testimonials.map((testimonial, index) => (
// // // // // //               <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left border-0 shadow-lg bg-white rounded-2xl p-8" style={{ animationDelay: `${index * 0.2}s` }}>
// // // // // //                 <CardContent className="pt-0">
// // // // // //                   <div className="flex mb-6">
// // // // // //                     {[...Array(testimonial.rating)].map((_, i) => (
// // // // // //                       <span key={i} className="text-yellow-400 text-xl animate-scale-in" style={{ animationDelay: `${(index * 0.2) + (i * 0.1)}s` }}>★</span>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                   <p className="text-gray-600 mb-6 italic font-inter text-lg leading-relaxed">"{testimonial.content}"</p>
// // // // // //                   <div>
// // // // // //                     <p className="font-semibold font-playfair text-gray-900 text-xl">{testimonial.name}</p>
// // // // // //                     <p className="text-gray-500 font-inter">{testimonial.role}</p>
// // // // // //                   </div>
// // // // // //                 </CardContent>
// // // // // //               </Card>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       <Footer />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Index;





// // // // // // src/pages/Index.tsx
// // // // // import Navbar from "@/components/Navbar";
// // // // // import Footer from "@/components/Footer";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // import { Link } from "react-router-dom"; // Ensure Link is imported
// // // // // import AutoTypeText from "@/components/AutoTypeText";

// // // // // const Index = () => {
// // // // //   const products = [
// // // // //     {
// // // // //       title: "Copper Items",
// // // // //       description: "Premium quality copper utensils and decorative items",
// // // // //       image: "https://images.unsplash.com/photo-1541617392762-9bd12653bd12?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       slug: "copper-items"
// // // // //     },
// // // // //     {
// // // // //       title: "Bagas Disposables",
// // // // //       description: "Elegant cocktail shakers, muddlers, and bar tools", // This description might be for the category, not individual items. Adjust as needed.
// // // // //       image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit-crop",
// // // // //       slug: "bagas-disposables"
// // // // //     },
// // // // //     {
// // // // //       title: "Bar Accessories",
// // // // //       description: "Artisanal religious and decorative sculptures", // This description might be for the category, not individual items. Adjust as needed.
// // // // //       image: "https://images.unsplash.com/photo-1569878858876-c8cda7f9ecf8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       slug: "bar-accessories"
// // // // //     },
// // // // //     {
// // // // //       title: "Ceramic Items",
// // // // //       description: "Handcrafted ceramic vases in various designs",
// // // // //       image: "https://images.unsplash.com/photo-1630154396598-a93983682861?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       slug: "ceramic-items"
// // // // //     },
// // // // //     {
// // // // //       title: "Terracotta Items",
// // // // //       description: "Traditional clay planters and decorative terracotta pieces",
// // // // //       image: "https://images.unsplash.com/photo-1736143157411-0a70fe999ecb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       slug: "terracotta-items"
// // // // //     },
// // // // //     {
// // // // //       title: "Packaging Materials",
// // // // //       description: "Secure and elegant solutions for all your product packaging needs",
// // // // //       image: "https://images.unsplash.com/photo-1613574203646-ffdae46ce3e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       slug: "packaging-material"
// // // // //     }
// // // // //   ];

// // // // //   const testimonials = [
// // // // //     {
// // // // //       name: "Sarah Johnson",
// // // // //       role: "Interior Designer",
// // // // //       content: "NY Ventures has been our go-to supplier for unique home decor pieces. Their quality is unmatched.",
// // // // //       rating: 5
// // // // //     },
// // // // //     {
// // // // //       name: "Michael Chen",
// // // // //       role: "Restaurant Owner",
// // // // //       content: "The copper articles and bar accessories have elevated our establishment's ambiance significantly.",
// // // // //       rating: 5
// // // // //     },
// // // // //     {
// // // // //       name: "Emma Davis",
// // // // //       role: "Boutique Owner",
// // // // //       content: "Their handicrafts are authentic and beautifully crafted. Our customers love them!",
// // // // //       rating: 5
// // // // //     }
// // // // //   ];

// // // // //   const benefits = [
// // // // //     {
// // // // //       title: "Superior Quality Materials",
// // // // //       description: "We source only the finest materials, ensuring durability and timeless elegance in every product.",
// // // // //       icon: "✅"
// // // // //     },
// // // // //     {
// // // // //       title: "Artisanal Craftsmanship",
// // // // //       description: "Each item is meticulously handcrafted by skilled artisans, showcasing unique detail and character.",
// // // // //       icon: "✨"
// // // // //     },
// // // // //     {
// // // // //       title: "Eco-Friendly Solutions",
// // // // //       description: "Our commitment to sustainability means many of our products are made from recycled or natural materials.",
// // // // //       icon: "♻️"
// // // // //     },
// // // // //     {
// // // // //       title: "Diverse Product Range",
// // // // //       description: "From traditional copperware to modern ceramic designs, our collection caters to diverse tastes and needs.",
// // // // //       icon: "📦"
// // // // //     },
// // // // //     {
// // // // //       title: "Customization Options",
// // // // //       description: "We offer tailored solutions to meet specific client requirements, ensuring your vision comes to life.",
// // // // //       icon: "🎨"
// // // // //     },
// // // // //     {
// // // // //       title: "Reliable Global Shipping",
// // // // //       description: "Experience prompt and secure delivery of your orders, no matter where you are in the world.",
// // // // //       icon: "✈️"
// // // // //     }
// // // // //   ];

// // // // //   const autoTypePhrases = [
// // // // //     "With Unmatched Quality"
// // // // //   ];

// // // // //   return (
// // // // //     <div className="min-h-screen bg-background font-inter">
// // // // //       {/* Hero Section with Background Image */}
// // // // //       <section
// // // // //         className="min-h-screen bg-cover bg-center bg-no-repeat relative"
// // // // //         style={{
// // // // //           backgroundImage: "url('/lovable-uploads/cfd4a498-dd56-4234-9eb5-d586d3aa0f47.png')"
// // // // //         }}
// // // // //       >
// // // // //         <div className="absolute inset-0 bg-black/40"></div>
// // // // //         <div className="relative z-50">
// // // // //           <Navbar />
// // // // //         </div>
// // // // //         <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
// // // // //           <div className="container mx-auto text-center text-white">
// // // // //             <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
// // // // //               <h1 className="text-6xl lg:text-8xl font-bold font-playfair leading-tight">
// // // // //                 Uniquely<br />
// // // // //                 <span className="text-white/80">Yours,</span><br />
// // // // //                 Beautifully<br />
// // // // //                 Designed
// // // // //               </h1>
// // // // //               <p className="font-inter leading-relaxed max-w-4xl mx-auto text-white/90">
// // // // //                 <span className="text-4xl font-times">Beautifully Crafted Pieces</span>
// // // // //                 <AutoTypeText
// // // // //                   staticPrefix=" "
// // // // //                   typingSpeed={100}
// // // // //                   deletingSpeed={50}
// // // // //                   delayBetweenPhrases={2000}
// // // // //                   phrases={autoTypePhrases}
// // // // //                   className="inline text-4xl font-bold font-times"
// // // // //                 />
// // // // //               </p>
// // // // //               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
// // // // //                 <Button
// // // // //                   asChild
// // // // //                   size="lg"
// // // // //                   className="px-12 py-4 text-lg bg-white text-gray-900 hover:bg-white/90 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // //                 >
// // // // //                   <Link to="/products">Shop Now</Link>
// // // // //                 </Button>
// // // // //                 <Button
// // // // //                   asChild
// // // // //                   variant="outline"
// // // // //                   size="lg"
// // // // //                   className="px-12 py-4 text-lg border-white text-gray-800 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // //                 >
// // // // //                   <Link to="/about-us">Learn More</Link> {/* This is already correct based on your App.tsx */}
// // // // //                 </Button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Featured Products (Categories) */}
// // // // //       <section className="py-24 bg-white">
// // // // //         <div className="container mx-auto px-4">
// // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">Our Product Categories</h2>
// // // // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
// // // // //               Discover our extensive range of premium products, carefully curated for quality and style
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // //             {products.map((product, index) => (
// // // // //               <Link
// // // // //                 key={index} // Using index as key for categories is generally okay, but a unique slug is better if available
// // // // //                 to={`/products/${product.slug}`} // Correctly links to your CategoryPage
// // // // //                 className="block"
// // // // //               >
// // // // //                 <Card
// // // // //                   className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in border-0 shadow-lg bg-white rounded-2xl overflow-hidden"
// // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // //                 >
// // // // //                   <div className="aspect-[4/3] overflow-hidden">
// // // // //                     <img
// // // // //                       src={product.image}
// // // // //                       alt={product.title}
// // // // //                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// // // // //                     />
// // // // //                   </div>
// // // // //                   <CardHeader className="text-center p-8">
// // // // //                     <CardTitle className="font-playfair text-2xl group-hover:text-gray-900 transition-colors duration-300 text-gray-800 mb-3">{product.title}</CardTitle>
// // // // //                     <CardDescription className="font-inter text-gray-600 text-lg">{product.description}</CardDescription>
// // // // //                   </CardHeader>
// // // // //                 </Card>
// // // // //               </Link>
// // // // //             ))}
// // // // //           </div>

// // // // //           <div className="text-center mt-16 animate-fade-in">
// // // // //             <Button asChild size="lg" className="hover:scale-105 transition-all duration-300 font-inter font-medium bg-gray-900 text-white hover:bg-gray-800 px-12 py-4 text-lg">
// // // // //               <Link to="/products">View All Products</Link> {/* Correctly links to your main ProductsPage */}
// // // // //             </Button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* About Us Section */}
// // // // //       <section className="py-24 bg-gray-100">
// // // // //         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
// // // // //           <div className="md:w-1/2 animate-fade-in-left">
// // // // //             <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2">ABOUT US</h2>
// // // // //             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-playfair mb-6">
// // // // //               Crafting Excellence for Generations
// // // // //             </h1>
// // // // //             <p className="text-xl text-gray-700 leading-relaxed mb-6 font-inter">
// // // // //               At NY Ventures, we are passionate about bringing unique and beautifully crafted items to your home and business. With a rich heritage in sourcing and creating exceptional products, we specialize in everything from traditional copperware to modern ceramic designs and essential bar accessories.
// // // // //             </p>
// // // // //             <p className="text-xl text-gray-700 leading-relaxed mb-8 font-inter">
// // // // //               Our commitment to quality, authenticity, and customer satisfaction drives us to curate a collection that not only meets but exceeds expectations. Discover the difference that true craftsmanship makes.
// // // // //             </p>
// // // // //             <Button
// // // // //               asChild
// // // // //               size="lg"
// // // // //               className="px-10 py-4 text-lg bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // //             >
// // // // //               <Link to="/about-us">Our Story</Link>
// // // // //             </Button>
// // // // //           </div>
// // // // //           <div className="md:w-1/2 animate-fade-in-right">
// // // // //             <img
// // // // //               src="https://images.unsplash.com/photo-1589859762194-eaae75c61f64?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder image for About Us
// // // // //               alt="About Us"
// // // // //               className="rounded-3xl shadow-xl w-full h-auto object-cover"
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Benefits Section */}
// // // // //       <section className="py-24 bg-white">
// // // // //         <div className="container mx-auto px-4">
// // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">Why Choose NY Ventures?</h2>
// // // // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
// // // // //               Experience the distinct advantages of partnering with us for your product needs.
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // //             {benefits.map((benefit, index) => (
// // // // //               <Card
// // // // //                 key={index}
// // // // //                 className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-up border-0 shadow-lg bg-white rounded-2xl p-8 text-center"
// // // // //                 style={{ animationDelay: `${index * 0.15}s` }}
// // // // //               >
// // // // //                 <CardContent className="pt-0 flex flex-col items-center">
// // // // //                   <div className="text-6xl mb-6 text-gray-800 group-hover:text-primary transition-colors duration-300">
// // // // //                     {benefit.icon}
// // // // //                   </div>
// // // // //                   <CardTitle className="font-playfair text-2xl text-gray-900 mb-3">{benefit.title}</CardTitle>
// // // // //                   <CardDescription className="font-inter text-gray-600 text-lg">{benefit.description}</CardDescription>
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Testimonials */}
// // // // //       <section id="testimonials" className="py-24 bg-gray-50">
// // // // //         <div className="container mx-auto px-4">
// // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">What Our Clients Say</h2>
// // // // //             <p className="text-xl text-gray-600 font-inter">
// // // // //               Trusted by businesses and individuals across the globe
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// // // // //             {testimonials.map((testimonial, index) => (
// // // // //               <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left border-0 shadow-lg bg-white rounded-2xl p-8" style={{ animationDelay: `${index * 0.2}s` }}>
// // // // //                 <CardContent className="pt-0">
// // // // //                   <div className="flex mb-6">
// // // // //                     {[...Array(testimonial.rating)].map((_, i) => (
// // // // //                       <span key={i} className="text-yellow-400 text-xl animate-scale-in" style={{ animationDelay: `${(index * 0.2) + (i * 0.1)}s` }}>★</span>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                   <p className="text-gray-600 mb-6 italic font-inter text-lg leading-relaxed">"{testimonial.content}"</p>
// // // // //                   <div>
// // // // //                     <p className="font-semibold font-playfair text-gray-900 text-xl">{testimonial.name}</p>
// // // // //                     <p className="text-gray-500 font-inter">{testimonial.role}</p>
// // // // //                   </div>
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       <Footer />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Index;

// // // // // // src/pages/Index.tsx
// // // // // import React from 'react';
// // // // // import { Link } from 'react-router-dom';
// // // // // import Navbar from '../components/Navbar';
// // // // // import Footer from '../components/Footer';
// // // // // import AutoTypeText from '../components/AutoTypeText';
// // // // // // Corrected import: Button is now a default export from button.tsx
// // // // // import { Button } from '../components/ui/button'; // Assuming Button is a named export
// // // // // import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';

// // // // // const Index = () => {
// // // // //   const products = [
// // // // //     {
// // // // //       title: "Copper Items",
// // // // //       description: "Premium quality copper utensils and decorative items",
// // // // //       image: "https://images.unsplash.com/photo-1541617392762-9bd12653bd12?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       slug: "copper-items"
// // // // //     },
// // // // //     {
// // // // //       title: "Bagas Disposables",
// // // // //       description: "Eco-friendly, compostable solutions for food service and events",
// // // // //       image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop",
// // // // //       slug: "bagas-disposables"
// // // // //     },
// // // // //     {
// // // // //       title: "Bar Accessories",
// // // // //       description: "Professional-grade bar equipment and accessories for mixology enthusiasts",
// // // // //       image: "https://images.unsplash.com/photo-1569878858876-c8cda7f9ecf8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       slug: "bar-accessories"
// // // // //     },
// // // // //     {
// // // // //       title: "Ceramic Items",
// // // // //       description: "Handcrafted ceramic vases in various designs",
// // // // //       image: "https://images.unsplash.com/photo-1630154396598-a93983682861?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       slug: "ceramic-items"
// // // // //     },
// // // // //     {
// // // // //       title: "Terracotta Items",
// // // // //       description: "Traditional clay planters and decorative terracotta pieces",
// // // // //       image: "https://images.unsplash.com/photo-1736143157411-0a70fe999ecb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       slug: "terracotta-items"
// // // // //     },
// // // // //     {
// // // // //       title: "Packaging Materials",
// // // // //       description: "Secure and elegant solutions for all your product packaging needs",
// // // // //       image: "https://images.unsplash.com/photo-1613574203646-ffdae46ce3e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       slug: "packaging-material"
// // // // //     }
// // // // //   ];

// // // // //   const testimonials = [
// // // // //     {
// // // // //       name: "Sarah Johnson",
// // // // //       role: "Interior Designer",
// // // // //       content: "NY Ventures has been our go-to supplier for unique home decor pieces. Their quality is unmatched.",
// // // // //       rating: 5
// // // // //     },
// // // // //     {
// // // // //       name: "Michael Chen",
// // // // //       role: "Restaurant Owner",
// // // // //       content: "The copper articles and bar accessories have elevated our establishment's ambiance significantly.",
// // // // //       rating: 5
// // // // //     },
// // // // //     {
// // // // //       name: "Emma Davis",
// // // // //       role: "Boutique Owner",
// // // // //       content: "Their handicrafts are authentic and beautifully crafted. Our customers love them!",
// // // // //       rating: 5
// // // // //     }
// // // // //   ];

// // // // //   const benefits = [
// // // // //     {
// // // // //       title: "Superior Quality Materials",
// // // // //       description: "We source only the finest materials, ensuring durability and timeless elegance in every product.",
// // // // //       icon: "✅"
// // // // //     },
// // // // //     {
// // // // //       title: "Artisanal Craftsmanship",
// // // // //       description: "Each item is meticulously handcrafted by skilled artisans, showcasing unique detail and character.",
// // // // //       icon: "✨"
// // // // //     },
// // // // //     {
// // // // //       title: "Eco-Friendly Solutions",
// // // // //       description: "Our commitment to sustainability means many of our products are made from recycled or natural materials.",
// // // // //       icon: "♻️"
// // // // //     },
// // // // //     {
// // // // //       title: "Diverse Product Range",
// // // // //       description: "From traditional copperware to modern ceramic designs, our collection caters to diverse tastes and needs.",
// // // // //       icon: "📦"
// // // // //     },
// // // // //     {
// // // // //       title: "Customization Options",
// // // // //       description: "We offer tailored solutions to meet specific client requirements, ensuring your vision comes to life.",
// // // // //       icon: "🎨"
// // // // //     },
// // // // //     {
// // // // //       title: "Reliable Global Shipping",
// // // // //       description: "Experience prompt and secure delivery of your orders, no matter where you are in the world.",
// // // // //       icon: "✈️"
// // // // //     }
// // // // //   ];

// // // // //   const autoTypePhrases = [
// // // // //     "With Unmatched Quality"
// // // // //   ];

// // // // //   return (
// // // // //     <div className="min-h-screen bg-background font-inter">
// // // // //       {/* Hero Section with Background Image */}
// // // // //       <section
// // // // //         className="min-h-screen bg-cover bg-center bg-no-repeat relative"
// // // // //         style={{
// // // // //           backgroundImage: "url('/lovable-uploads/cfd4a498-dd56-4234-99b5-d586d3aa0f47.png')"
// // // // //         }}
// // // // //       >
// // // // //         <div className="absolute inset-0 bg-black/40"></div>
// // // // //         <div className="relative z-50">
// // // // //           <Navbar />
// // // // //         </div>
// // // // //         <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
// // // // //           <div className="container mx-auto text-center text-white">
// // // // //             <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
// // // // //               <h1 className="text-6xl lg:text-8xl font-bold font-playfair leading-tight">
// // // // //                 Uniquely<br />
// // // // //                 <span className="text-white/80">Yours,</span><br />
// // // // //                 Beautifully<br />
// // // // //                 Designed
// // // // //               </h1>
// // // // //               <p className="font-inter leading-relaxed max-w-4xl mx-auto text-white/90">
// // // // //                 <span className="text-4xl font-times">Beautifully Crafted Pieces</span>
// // // // //                 <AutoTypeText
// // // // //                   staticPrefix=" "
// // // // //                   typingSpeed={100}
// // // // //                   deletingSpeed={50}
// // // // //                   delayBetweenPhrases={2000}
// // // // //                   phrases={autoTypePhrases}
// // // // //                   className="inline text-4xl font-bold font-times"
// // // // //                 />
// // // // //               </p>
// // // // //               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
// // // // //                 <Button
// // // // //                   asChild
// // // // //                   size="lg"
// // // // //                   className="px-12 py-4 text-lg bg-white text-gray-900 hover:bg-white/90 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // //                 >
// // // // //                   <Link to="/products">Shop Now</Link>
// // // // //                 </Button>
// // // // //                 <Button
// // // // //                   asChild
// // // // //                   variant="outline"
// // // // //                   size="lg"
// // // // //                   className="px-12 py-4 text-lg border-white text-gray-800 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // //                 >
// // // // //                   <Link to="/about-us">Learn More</Link>
// // // // //                 </Button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Featured Products (Categories) */}
// // // // //       <section className="py-24 bg-white">
// // // // //         <div className="container mx-auto px-4">
// // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">Our Product Categories</h2>
// // // // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
// // // // //               Discover our extensive range of premium products, carefully curated for quality and style
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // //             {products.map((product, index) => (
// // // // //               <Link
// // // // //                 key={index}
// // // // //                 to={`/products/${product.slug}`}
// // // // //                 className="block"
// // // // //               >
// // // // //                 <Card
// // // // //                   className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in border-0 shadow-lg bg-white rounded-2xl overflow-hidden"
// // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // //                 >
// // // // //                   <div className="aspect-[4/3] overflow-hidden">
// // // // //                     <img
// // // // //                       src={product.image}
// // // // //                       alt={product.title}
// // // // //                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// // // // //                     />
// // // // //                   </div>
// // // // //                   <CardHeader className="text-center p-8">
// // // // //                     <CardTitle className="font-playfair text-2xl group-hover:text-gray-900 transition-colors duration-300 text-gray-800 mb-3">{product.title}</CardTitle>
// // // // //                     <CardDescription className="font-inter text-gray-600 text-lg">{product.description}</CardDescription>
// // // // //                   </CardHeader>
// // // // //                 </Card>
// // // // //               </Link>
// // // // //             ))}
// // // // //           </div>

// // // // //           <div className="text-center mt-16 animate-fade-in">
// // // // //             <Button asChild size="lg" className="hover:scale-105 transition-all duration-300 font-inter font-medium bg-gray-900 text-white hover:bg-gray-800 px-12 py-4 text-lg">
// // // // //               <Link to="/products">View All Products</Link>
// // // // //             </Button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* About Us Section */}
// // // // //       <section className="py-24 bg-gray-100">
// // // // //         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
// // // // //           <div className="md:w-1/2 animate-fade-in-left">
// // // // //             <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2">ABOUT US</h2>
// // // // //             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-playfair mb-6">
// // // // //               Crafting Excellence for Generations
// // // // //             </h1>
// // // // //             <p className="text-xl text-gray-700 leading-relaxed mb-6 font-inter">
// // // // //               At NY Ventures, we are passionate about bringing unique and beautifully crafted items to your home and business. With a rich heritage in sourcing and creating exceptional products, we specialize in everything from traditional copperware to modern ceramic designs and essential bar accessories.
// // // // //             </p>
// // // // //             <p className="text-xl text-gray-700 leading-relaxed mb-8 font-inter">
// // // // //               Our commitment to quality, authenticity, and customer satisfaction drives us to curate a collection that not only meets but exceeds expectations. Discover the difference that true craftsmanship makes.
// // // // //             </p>
// // // // //             <Button
// // // // //               asChild
// // // // //               size="lg"
// // // // //               className="px-10 py-4 text-lg bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // //             >
// // // // //               <Link to="/about-us">Our Story</Link>
// // // // //             </Button>
// // // // //           </div>
// // // // //           <div className="md:w-1/2 animate-fade-in-right">
// // // // //             <img
// // // // //               src="https://images.unsplash.com/photo-1589859762194-eaae75c61f64?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// // // // //               alt="About Us"
// // // // //               className="rounded-3xl shadow-xl w-full h-auto object-cover"
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Benefits Section */}
// // // // //       <section className="py-24 bg-white">
// // // // //         <div className="container mx-auto px-4">
// // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">Why Choose NY Ventures?</h2>
// // // // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
// // // // //               Experience the distinct advantages of partnering with us for your product needs.
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // //             {benefits.map((benefit, index) => (
// // // // //               <Card
// // // // //                 key={index}
// // // // //                 className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-up border-0 shadow-lg bg-white rounded-2xl p-8 text-center"
// // // // //                 style={{ animationDelay: `${index * 0.15}s` }}
// // // // //               >
// // // // //                 <CardContent className="pt-0 flex flex-col items-center">
// // // // //                   <div className="text-6xl mb-6 text-gray-800 group-hover:text-primary transition-colors duration-300">
// // // // //                     {benefit.icon}
// // // // //                   </div>
// // // // //                   <CardTitle className="font-playfair text-2xl text-gray-900 mb-3">{benefit.title}</CardTitle>
// // // // //                   <CardDescription className="font-inter text-gray-600 text-lg">{benefit.description}</CardDescription>
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Testimonials */}
// // // // //       <section id="testimonials" className="py-24 bg-gray-50">
// // // // //         <div className="container mx-auto px-4">
// // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">What Our Clients Say</h2>
// // // // //             <p className="text-xl text-gray-600 font-inter">
// // // // //               Trusted by businesses and individuals across the globe
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// // // // //             {testimonials.map((testimonial, index) => (
// // // // //               <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left border-0 shadow-lg bg-white rounded-2xl p-8" style={{ animationDelay: `${index * 0.2}s` }}>
// // // // //                 <CardContent className="pt-0">
// // // // //                   <div className="flex mb-6">
// // // // //                     {[...Array(testimonial.rating)].map((_, i) => (
// // // // //                       <span key={i} className="text-yellow-400 text-xl animate-scale-in" style={{ animationDelay: `${(index * 0.2) + (i * 0.1)}s` }}>★</span>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                   <p className="text-gray-600 mb-6 italic font-inter text-lg leading-relaxed">"{testimonial.content}"</p>
// // // // //                   <div>
// // // // //                     <p className="font-semibold font-playfair text-gray-900 text-xl">{testimonial.name}</p>
// // // // //                     <p className="text-gray-500 font-inter">{testimonial.role}</p>
// // // // //                   </div>
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       <Footer />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Index;





// // // // // // src/pages/Index.tsx
// // // // // import Navbar from "@/components/Navbar";
// // // // // import Footer from "@/components/Footer";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // import { Link } from "react-router-dom"; // Ensure Link is imported
// // // // // import AutoTypeText from "@/components/AutoTypeText";

// // // // // const Index = () => {
// // // // //   const products = [
// // // // //     {
// // // // //       title: "Copper Items",
// // // // //       description: "Premium quality copper utensils and decorative items",
// // // // //       image: "https://images.unsplash.com/photo-1541617392762-9bd12653bd12?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       slug: "copper-items"
// // // // //     },
// // // // //     {
// // // // //       title: "Bagas Disposables",
// // // // //       description: "Elegant cocktail shakers, muddlers, and bar tools",
// // // // //       image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit-crop",
// // // // //       slug: "bagas-disposables"
// // // // //     },
// // // // //     {
// // // // //       title: "Bar Accessories",
// // // // //       description: "Artisanal religious and decorative sculptures",
// // // // //       image: "https://images.unsplash.com/photo-1569878858876-c8cda7f9ecf8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       slug: "bar-accessories"
// // // // //     },
// // // // //     {
// // // // //       title: "Ceramic Items",
// // // // //       description: "Handcrafted ceramic vases in various designs",
// // // // //       image: "https://images.unsplash.com/photo-1630154396598-a93983682861?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       slug: "ceramic-items"
// // // // //     },
// // // // //     {
// // // // //       title: "Terracotta Items",
// // // // //       description: "Traditional clay planters and decorative terracotta pieces",
// // // // //       image: "https://images.unsplash.com/photo-1736143157411-0a70fe999ecb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       slug: "terracotta-items"
// // // // //     },
// // // // //     {
// // // // //       title: "Packaging Materials",
// // // // //       description: "Secure and elegant solutions for all your product packaging needs",
// // // // //       image: "https://images.unsplash.com/photo-1613574203646-ffdae46ce3e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       slug: "packaging-material"
// // // // //     }
// // // // //   ];

// // // // //   const testimonials = [
// // // // //     {
// // // // //       name: "Sarah Johnson",
// // // // //       role: "Interior Designer",
// // // // //       content: "NY Ventures has been our go-to supplier for unique home decor pieces. Their quality is unmatched.",
// // // // //       rating: 5
// // // // //     },
// // // // //     {
// // // // //       name: "Michael Chen",
// // // // //       role: "Restaurant Owner",
// // // // //       content: "The copper articles and bar accessories have elevated our establishment's ambiance significantly.",
// // // // //       rating: 5
// // // // //     },
// // // // //     {
// // // // //       name: "Emma Davis",
// // // // //       role: "Boutique Owner",
// // // // //       content: "Their handicrafts are authentic and beautifully crafted. Our customers love them!",
// // // // //       rating: 5
// // // // //     }
// // // // //   ];

// // // // //   // NEW: Benefits data
// // // // //   const benefits = [
// // // // //     {
// // // // //       title: "Superior Quality Materials",
// // // // //       description: "We source only the finest materials, ensuring durability and timeless elegance in every product.",
// // // // //       icon: "✅" // Placeholder for an icon, you might replace with an actual icon component or SVG
// // // // //     },
// // // // //     {
// // // // //       title: "Artisanal Craftsmanship",
// // // // //       description: "Each item is meticulously handcrafted by skilled artisans, showcasing unique detail and character.",
// // // // //       icon: "✨"
// // // // //     },
// // // // //     {
// // // // //       title: "Eco-Friendly Solutions",
// // // // //       description: "Our commitment to sustainability means many of our products are made from recycled or natural materials.",
// // // // //       icon: "♻️"
// // // // //     },
// // // // //     {
// // // // //       title: "Diverse Product Range",
// // // // //       description: "From traditional copperware to modern ceramic designs, our collection caters to diverse tastes and needs.",
// // // // //       icon: "📦"
// // // // //     },
// // // // //     {
// // // // //       title: "Customization Options",
// // // // //       description: "We offer tailored solutions to meet specific client requirements, ensuring your vision comes to life.",
// // // // //       icon: "🎨"
// // // // //     },
// // // // //     {
// // // // //       title: "Reliable Global Shipping",
// // // // //       description: "Experience prompt and secure delivery of your orders, no matter where you are in the world.",
// // // // //       icon: "✈️"
// // // // //     }
// // // // //   ];

// // // // //   const autoTypePhrases = [
// // // // //     "With Unmatched Quality"
// // // // //   ];

// // // // //   return (
// // // // //     <div className="min-h-screen bg-background font-inter">
// // // // //       {/* Hero Section with Background Image */}
// // // // //       <section
// // // // //         className="min-h-screen bg-cover bg-center bg-no-repeat relative"
// // // // //         style={{
// // // // //           backgroundImage: "url('/lovable-uploads/cfd4a498-dd56-4234-9eb5-d586d3aa0f47.png')"
// // // // //         }}
// // // // //       >
// // // // //         <div className="absolute inset-0 bg-black/40"></div>
// // // // //         <div className="relative z-50">
// // // // //           <Navbar />
// // // // //         </div>
// // // // //         <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
// // // // //           <div className="container mx-auto text-center text-white">
// // // // //             <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
// // // // //               <h1 className="text-6xl lg:text-8xl font-bold font-playfair leading-tight">
// // // // //                 Uniquely<br />
// // // // //                 <span className="text-white/80">Yours,</span><br />
// // // // //                 Beautifully<br />
// // // // //                 Designed
// // // // //               </h1>
// // // // //               <p className="font-inter leading-relaxed max-w-4xl mx-auto text-white/90">
// // // // //                 <span className="text-4xl font-times">Beautifully Crafted Pieces</span>
// // // // //                 <AutoTypeText
// // // // //                   staticPrefix=" "
// // // // //                   typingSpeed={100}
// // // // //                   deletingSpeed={50}
// // // // //                   delayBetweenPhrases={2000}
// // // // //                   phrases={autoTypePhrases}
// // // // //                   className="inline text-4xl font-bold font-times"
// // // // //                 />
// // // // //               </p>
// // // // //               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
// // // // //                 <Button
// // // // //                   asChild
// // // // //                   size="lg"
// // // // //                   className="px-12 py-4 text-lg bg-white text-gray-900 hover:bg-white/90 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // //                 >
// // // // //                   <Link to="/products">Shop Now</Link>
// // // // //                 </Button>
// // // // //                 <Button
// // // // //                   asChild
// // // // //                   variant="outline"
// // // // //                   size="lg"
// // // // //                   className="px-12 py-4 text-lg border-white text-gray-800 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // //                 >
// // // // //                   <Link to="/about">Learn More</Link>
// // // // //                 </Button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Featured Products */}
// // // // //       <section className="py-24 bg-white">
// // // // //         <div className="container mx-auto px-4">
// // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">Our Product Categories</h2>
// // // // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
// // // // //               Discover our extensive range of premium products, carefully curated for quality and style
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // //             {products.map((product, index) => (
// // // // //               <Link
// // // // //                 key={index}
// // // // //                 to={`/products/${product.slug}`}
// // // // //                 className="block"
// // // // //               >
// // // // //                 <Card
// // // // //                   className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in border-0 shadow-lg bg-white rounded-2xl overflow-hidden"
// // // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // // //                 >
// // // // //                   <div className="aspect-[4/3] overflow-hidden">
// // // // //                     <img
// // // // //                       src={product.image}
// // // // //                       alt={product.title}
// // // // //                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// // // // //                     />
// // // // //                   </div>
// // // // //                   <CardHeader className="text-center p-8">
// // // // //                     <CardTitle className="font-playfair text-2xl group-hover:text-gray-900 transition-colors duration-300 text-gray-800 mb-3">{product.title}</CardTitle>
// // // // //                     <CardDescription className="font-inter text-gray-600 text-lg">{product.description}</CardDescription>
// // // // //                   </CardHeader>
// // // // //                 </Card>
// // // // //               </Link>
// // // // //             ))}
// // // // //           </div>

// // // // //           <div className="text-center mt-16 animate-fade-in">
// // // // //             <Button asChild size="lg" className="hover:scale-105 transition-all duration-300 font-inter font-medium bg-gray-900 text-white hover:bg-gray-800 px-12 py-4 text-lg">
// // // // //               <Link to="/products">View All Products</Link>
// // // // //             </Button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* NEW: About Us Section */}
// // // // //       <section className="py-24 bg-gray-100">
// // // // //         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
// // // // //           <div className="md:w-1/2 animate-fade-in-left">
// // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-8 font-playfair leading-tight">
// // // // //               Crafting Excellence for Generations
// // // // //             </h2>
// // // // //             <p className="text-xl text-gray-700 leading-relaxed mb-6 font-inter">
// // // // //               At NY Ventures, we are passionate about bringing unique and beautifully crafted items to your home and business. With a rich heritage in sourcing and creating exceptional products, we specialize in everything from traditional copperware to modern ceramic designs and essential bar accessories.
// // // // //             </p>
// // // // //             <p className="text-xl text-gray-700 leading-relaxed mb-8 font-inter">
// // // // //               Our commitment to quality, authenticity, and customer satisfaction drives us to curate a collection that not only meets but exceeds expectations. Discover the difference that true craftsmanship makes.
// // // // //             </p>
// // // // //             <Button
// // // // //               asChild
// // // // //               size="lg"
// // // // //               className="px-10 py-4 text-lg bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // // //             >
// // // // //               <Link to="/about">Our Story</Link>
// // // // //             </Button>
// // // // //           </div>
// // // // //           <div className="md:w-1/2 animate-fade-in-right">
// // // // //             <img
// // // // //               src="https://images.unsplash.com/photo-1550993074-6725350810d7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder image for About Us
// // // // //               alt="About Us"
// // // // //               className="rounded-3xl shadow-xl w-full h-auto object-cover"
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* NEW: Benefits Section */}
// // // // //       <section className="py-24 bg-white">
// // // // //         <div className="container mx-auto px-4">
// // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">Why Choose NY Ventures?</h2>
// // // // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
// // // // //               Experience the distinct advantages of partnering with us for your product needs.
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // // //             {benefits.map((benefit, index) => (
// // // // //               <Card
// // // // //                 key={index}
// // // // //                 className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-up border-0 shadow-lg bg-white rounded-2xl p-8 text-center"
// // // // //                 style={{ animationDelay: `${index * 0.15}s` }}
// // // // //               >
// // // // //                 <CardContent className="pt-0 flex flex-col items-center">
// // // // //                   <div className="text-6xl mb-6 text-gray-800 group-hover:text-primary transition-colors duration-300">
// // // // //                     {benefit.icon}
// // // // //                   </div>
// // // // //                   <CardTitle className="font-playfair text-2xl text-gray-900 mb-3">{benefit.title}</CardTitle>
// // // // //                   <CardDescription className="font-inter text-gray-600 text-lg">{benefit.description}</CardDescription>
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Testimonials */}
// // // // //       <section id="testimonials" className="py-24 bg-gray-50">
// // // // //         <div className="container mx-auto px-4">
// // // // //           <div className="text-center mb-20 animate-fade-in">
// // // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">What Our Clients Say</h2>
// // // // //             <p className="text-xl text-gray-600 font-inter">
// // // // //               Trusted by businesses and individuals across the globe
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// // // // //             {testimonials.map((testimonial, index) => (
// // // // //               <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left border-0 shadow-lg bg-white rounded-2xl p-8" style={{ animationDelay: `${index * 0.2}s` }}>
// // // // //                 <CardContent className="pt-0">
// // // // //                   <div className="flex mb-6">
// // // // //                     {[...Array(testimonial.rating)].map((_, i) => (
// // // // //                       <span key={i} className="text-yellow-400 text-xl animate-scale-in" style={{ animationDelay: `${(index * 0.2) + (i * 0.1)}s` }}>★</span>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                   <p className="text-gray-600 mb-6 italic font-inter text-lg leading-relaxed">"{testimonial.content}"</p>
// // // // //                   <div>
// // // // //                     <p className="font-semibold font-playfair text-gray-900 text-xl">{testimonial.name}</p>
// // // // //                     <p className="text-gray-500 font-inter">{testimonial.role}</p>
// // // // //                   </div>
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       <Footer />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Index;




// // // // // src/pages/Index.tsx
// // // // import React from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import Navbar from '../components/Navbar';
// // // // import Footer from '../components/Footer';
// // // // import AutoTypeText from '../components/AutoTypeText';
// // // // import { Button } from '../components/ui/button';
// // // // import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';

// // // // const Index = () => {
// // // //   const products = [
// // // //     {
// // // //       title: "Copper Items",
// // // //       description: "Premium quality copper utensils and decorative items",
// // // //       image: "https://images.unsplash.com/photo-1541617392762-9bd12653bd12?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // //       slug: "copper-items"
// // // //     },
// // // //     {
// // // //       title: "Bagas Disposables",
// // // //       description: "Eco-friendly, compostable solutions for food service and events",
// // // //       image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit-crop",
// // // //       slug: "bagas-disposables"
// // // //     },
// // // //     {
// // // //       title: "Bar Accessories",
// // // //       description: "Professional-grade bar equipment and accessories for mixology enthusiasts",
// // // //       image: "https://images.unsplash.com/photo-1569878858876-c8cda7f9ecf8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // //       slug: "bar-accessories"
// // // //     },
// // // //     {
// // // //       title: "Ceramic Items",
// // // //       description: "Handcrafted ceramic vases in various designs",
// // // //       image: "https://images.unsplash.com/photo-1630154396598-a93983682861?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // //       slug: "ceramic-items"
// // // //     },
// // // //     {
// // // //       title: "Terracotta Items",
// // // //       description: "Traditional clay planters and decorative terracotta pieces",
// // // //       image: "https://images.unsplash.com/photo-1736143157411-0a70fe999ecb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // //       slug: "terracotta-items"
// // // //     },
// // // //     {
// // // //       title: "Packaging Materials",
// // // //       description: "Secure and elegant solutions for all your product packaging needs",
// // // //       image: "https://images.unsplash.com/photo-1613574203646-ffdae46ce3e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // //       slug: "packaging-material"
// // // //     }
// // // //   ];

// // // //   const testimonials = [
// // // //     {
// // // //       name: "Sarah Johnson",
// // // //       role: "Interior Designer",
// // // //       content: "NY Ventures has been our go-to supplier for unique home decor pieces. Their quality is unmatched.",
// // // //       rating: 5
// // // //     },
// // // //     {
// // // //       name: "Michael Chen",
// // // //       role: "Restaurant Owner",
// // // //       content: "The copper articles and bar accessories have elevated our establishment's ambiance significantly.",
// // // //       rating: 5
// // // //     },
// // // //     {
// // // //       name: "Emma Davis",
// // // //       role: "Boutique Owner",
// // // //       content: "Their handicrafts are authentic and beautifully crafted. Our customers love them!",
// // // //       rating: 5
// // // //     }
// // // //   ];

// // // //   const benefits = [
// // // //     {
// // // //       title: "Superior Quality Materials",
// // // //       description: "We source only the finest materials, ensuring durability and timeless elegance in every product.",
// // // //       icon: "✅"
// // // //     },
// // // //     {
// // // //       title: "Artisanal Craftsmanship",
// // // //       description: "Each item is meticulously handcrafted by skilled artisans, showcasing unique detail and character.",
// // // //       icon: "✨"
// // // //     },
// // // //     {
// // // //       title: "Eco-Friendly Solutions",
// // // //       description: "Our commitment to sustainability means many of our products are made from recycled or natural materials.",
// // // //       icon: "♻️"
// // // //     },
// // // //     {
// // // //       title: "Diverse Product Range",
// // // //       description: "From traditional copperware to modern ceramics, bar accessories to bagasse disposables — our collection caters to diverse tastes and needs.",
// // // //       icon: "📦"
// // // //     },
// // // //     {
// // // //       title: "Customization Options",
// // // //       description: "We offer tailored solutions to meet specific client requirements, ensuring your vision comes to life.",
// // // //       icon: "🎨"
// // // //     },
// // // //     {
// // // //       title: "Reliable Global Shipping",
// // // //       description: "Experience prompt and secure delivery of your orders, no matter where you are in the world.",
// // // //       icon: "✈️"
// // // //     }
// // // //   ];

// // // //   const autoTypePhrases = [
// // // //     "With Unmatched Quality"
// // // //   ];

// // // //   return (
// // // //     <div className="min-h-screen bg-background font-inter">
// // // //       {/* Hero Section with Background Image */}
// // // //       <section
// // // //         className="min-h-screen bg-cover bg-center bg-no-repeat relative"
// // // //         style={{
// // // //           backgroundImage: "url('/lovable-uploads/cfd4a498-dd56-4234-9eb5-d586d3aa0f47.png')"
// // // //         }}
// // // //       >
// // // //         <div className="absolute inset-0 bg-black/40"></div>
// // // //         <div className="relative z-50">
// // // //           <Navbar />
// // // //         </div>
// // // //         <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
// // // //           <div className="container mx-auto text-center text-white">
// // // //             <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
// // // //               <h1 className="text-6xl lg:text-8xl font-bold font-playfair leading-tight">
// // // //                 Uniquely<br />
// // // //                 <span className="text-white/80">Yours,</span><br />
// // // //                 Beautifully<br />
// // // //                 Designed
// // // //               </h1>
// // // //               <p className="font-inter leading-relaxed max-w-4xl mx-auto text-white/90">
// // // //                 <span className="text-4xl font-times">Beautifully Crafted Pieces</span>
// // // //                 <AutoTypeText
// // // //                   staticPrefix=" "
// // // //                   typingSpeed={100}
// // // //                   deletingSpeed={50}
// // // //                   delayBetweenPhrases={2000}
// // // //                   phrases={autoTypePhrases}
// // // //                   className="inline text-4xl font-bold font-times"
// // // //                 />
// // // //               </p>
// // // //               <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
// // // //                 <Button
// // // //                   asChild
// // // //                   size="lg"
// // // //                   className="px-12 py-4 text-lg bg-white text-gray-900 hover:bg-white/90 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // //                 >
// // // //                   <Link to="/products">Shop Now</Link>
// // // //                 </Button>
// // // //                 <Button
// // // //                   asChild
// // // //                   variant="outline"
// // // //                   size="lg"
// // // //                   className="px-12 py-4 text-lg border-white text-gray-800 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // //                 >
// // // //                   {/* Ensure this Link is correctly pointing to /about-us */}
// // // //                   <Link to="/about-us">Learn More</Link>
// // // //                 </Button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Featured Products (Categories) */}
// // // //       <section className="py-24 bg-white">
// // // //         <div className="container mx-auto px-4">
// // // //           <div className="text-center mb-20 animate-fade-in">
// // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">Our Product Categories</h2>
// // // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
// // // //               Discover our extensive range of premium products, carefully curated for quality and style
// // // //             </p>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // //             {products.map((product, index) => (
// // // //               <Link
// // // //                 key={index}
// // // //                 to={`/products/${product.slug}`}
// // // //                 className="block"
// // // //               >
// // // //                 <Card
// // // //                   className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in border-0 shadow-lg bg-white rounded-2xl overflow-hidden"
// // // //                   style={{ animationDelay: `${index * 0.1}s` }}
// // // //                 >
// // // //                   <div className="aspect-[4/3] overflow-hidden">
// // // //                     <img
// // // //                       src={product.image}
// // // //                       alt={product.title}
// // // //                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// // // //                     />
// // // //                   </div>
// // // //                   <CardHeader className="text-center p-8">
// // // //                     <CardTitle className="font-playfair text-2xl group-hover:text-gray-900 transition-colors duration-300 text-gray-800 mb-3">{product.title}</CardTitle>
// // // //                     <CardDescription className="font-inter text-gray-600 text-lg">{product.description}</CardDescription>
// // // //                   </CardHeader>
// // // //                 </Card>
// // // //               </Link>
// // // //             ))}
// // // //           </div>

// // // //           <div className="text-center mt-16 animate-fade-in">
// // // //             <Button asChild size="lg" className="hover:scale-105 transition-all duration-300 font-inter font-medium bg-gray-900 text-white hover:bg-gray-800 px-12 py-4 text-lg">
// // // //               <Link to="/products">View All Products</Link>
// // // //             </Button>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* About Us Section */}
// // // //       <section className="py-24 bg-gray-100">
// // // //         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
// // // //           <div className="md:w-1/2 animate-fade-in-left">
// // // //             <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2">ABOUT US</h2>
// // // //             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-playfair mb-6">
// // // //               Crafting Excellence for Generations
// // // //             </h1>
// // // //             <p className="text-xl text-gray-700 leading-relaxed mb-6 font-inter">
// // // //                NY Ventures is a Delhi-NCR-based group with diverse business verticals. Our Clay Products Division offers a wide range of eco-friendly items — from traditional cookware and tableware to decorative and everyday-use clay essentials like pots, ovens, and glasses.
// // // //             </p>
// // // //             <p className="text-xl text-gray-700 leading-relaxed mb-8 font-inter">
// // // //               Our commitment to quality, authenticity, and customer satisfaction drives us to curate a collection that not only meets but exceeds expectations. Discover the difference that true craftsmanship makes.
// // // //             </p>
// // // //             <p className="text-xl text-gray-700 leading-relaxed mb-8 font-inter">
// // // //               Crafted from premium black soil, our clay products are toxin-free, 100% natural, and rooted in Indian heritage. Using clay utensils not only supports the environment but also helps maintain the alkaline balance of the body — a key to better health and disease prevention.
// // // //             </p>
// // // //             <Button
// // // //               asChild
// // // //               size="lg"
// // // //               className="px-10 py-4 text-lg bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 font-inter font-medium"
// // // //             >
// // // //               {/* Ensure this Link is correctly pointing to /about-us */}
// // // //               <Link to="/about-us">Our Story</Link>
// // // //             </Button>
// // // //           </div>
// // // //           <div className="md:w-1/2 animate-fade-in-right">
// // // //             <img
// // // //               src="https://images.unsplash.com/photo-1589859762194-eaae75c61f64?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// // // //               alt="About Us"
// // // //               className="rounded-3xl shadow-xl w-full h-auto object-cover"
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Benefits Section */}
// // // //       <section className="py-24 bg-white">
// // // //         <div className="container mx-auto px-4">
// // // //           <div className="text-center mb-20 animate-fade-in">
// // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">Why Choose NY Ventures?</h2>
// // // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
// // // //               Experience the distinct advantages of partnering with us for your product needs.
// // // //             </p>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// // // //             {benefits.map((benefit, index) => (
// // // //               <Card
// // // //                 key={index}
// // // //                 className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-up border-0 shadow-lg bg-white rounded-2xl p-8 text-center"
// // // //                 style={{ animationDelay: `${index * 0.15}s` }}
// // // //               >
// // // //                 <CardContent className="pt-0 flex flex-col items-center">
// // // //                   <div className="text-6xl mb-6 text-gray-800 group-hover:text-primary transition-colors duration-300">
// // // //                     {benefit.icon}
// // // //                   </div>
// // // //                   <CardTitle className="font-playfair text-2xl text-gray-900 mb-3">{benefit.title}</CardTitle>
// // // //                   <CardDescription className="font-inter text-gray-600 text-lg">{benefit.description}</CardDescription>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Testimonials */}
// // // //       <section id="testimonials" className="py-24 bg-gray-50">
// // // //         <div className="container mx-auto px-4">
// // // //           <div className="text-center mb-20 animate-fade-in">
// // // //             <h2 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">What Our Clients Say</h2>
// // // //             <p className="text-xl text-gray-600 font-inter">
// // // //               Trusted by businesses and individuals across the globe
// // // //             </p>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// // // //             {testimonials.map((testimonial, index) => (
// // // //               <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left border-0 shadow-lg bg-white rounded-2xl p-8" style={{ animationDelay: `${index * 0.2}s` }}>
// // // //                 <CardContent className="pt-0">
// // // //                   <div className="flex mb-6">
// // // //                     {[...Array(testimonial.rating)].map((_, i) => (
// // // //                       <span key={i} className="text-yellow-400 text-xl animate-scale-in" style={{ animationDelay: `${(index * 0.2) + (i * 0.1)}s` }}>★</span>
// // // //                     ))}
// // // //                   </div>
// // // //                   <p className="text-gray-600 mb-6 italic font-inter text-lg leading-relaxed">"{testimonial.content}"</p>
// // // //                   <div>
// // // //                     <p className="font-semibold font-playfair text-gray-900 text-xl">{testimonial.name}</p>
// // // //                     <p className="text-gray-500 font-inter">{testimonial.role}</p>
// // // //                   </div>
// // // //                 </CardContent>
// // // //               </Card>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Index;


// src/pages/Index.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AutoTypeText from '../components/AutoTypeText';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';

const Index = () => {
  const products = [
    {
      title: "Copper Items",
      description: "Premium quality copper utensils and decorative items",
      image: "https://images.unsplash.com/photo-1541617392762-9bd12653bd12?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "copper-items"
    },
    {
      title: "Bagas Disposables",
      description: "Eco-friendly, compostable solutions for food service and events",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit-crop",
      slug: "bagas-disposables"
    },
    {
      title: "Bar Accessories",
      description: "Professional-grade bar equipment and accessories for mixology enthusiasts",
      image: "https://images.unsplash.com/photo-1569878858876-c8cda7f9ecf8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "bar-accessories"
    },
    {
      title: "Ceramic Items",
      description: "Handcrafted ceramic vases in various designs",
      image: "https://images.unsplash.com/photo-1630154396598-a93983682861?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "ceramic-items"
    },
    {
      title: "Terracotta Items",
      description: "Traditional clay planters and decorative terracotta pieces",
      image: "https://images.unsplash.com/photo-1736143157411-0a70fe999ecb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "terracotta-items"
    },
    {
      title: "Packaging Materials",
      description: "Secure and elegant solutions for all your product packaging needs",
      image: "https://images.unsplash.com/photo-1613574203646-ffdae46ce3e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "packaging-material"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Interior Designer",
      content: "NY Ventures has been our go-to supplier for unique home decor pieces. Their quality is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Restaurant Owner",
      content: "The copper articles and bar accessories have elevated our establishment's ambiance significantly.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Boutique Owner",
      content: "Their handicrafts are authentic and beautifully crafted. Our customers love them!",
      rating: 5
    }
  ];

  const benefits = [
    {
      title: "Superior Quality Materials",
      description: "We source only the finest materials, ensuring durability and timeless elegance in every product.",
      icon: "✅"
    },
    {
      title: "Artisanal Craftsmanship",
      description: "Each item is meticulously handcrafted by skilled artisans, showcasing unique detail and character.",
      icon: "✨"
    },
    {
      title: "Eco-Friendly Solutions",
      description: "Our commitment to sustainability means many of our products are made from recycled or natural materials.",
      icon: "♻️"
    },
    {
      title: "Diverse Product Range",
      description: "From traditional copperware to modern ceramics, bar accessories to bagasse disposables — our collection caters to diverse tastes and needs.",
      icon: "📦"
    },
    {
      title: "Customization Options",
      description: "We offer tailored solutions to meet specific client requirements, ensuring your vision comes to life.",
      icon: "🎨"
    },
    {
      title: "Reliable Global Shipping",
      description: "Experience prompt and secure delivery of your orders, no matter where you are in the world.",
      icon: "✈️"
    }
  ];

  const autoTypePhrases = [
    "With Unmatched Quality"
  ];

  return (
    // Changed overall page font to font-roboto
    <div className="min-h-screen bg-background font-roboto">
      {/* Hero Section with Background Image */}
      <section
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/lovable-uploads/cfd4a498-dd56-4234-9eb5-d586d3aa0f47.png')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-50">
          <Navbar />
        </div>
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
          <div className="container mx-auto text-center text-white">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              {/* Changed to font-roboto */}
              <h1 className="text-6xl lg:text-8xl font-bold font-roboto leading-tight">
                Uniquely<br />
                <span className="text-white/80">Yours,</span><br />
                Beautifully<br />
                Designed
              </h1>
              {/* Changed to font-roboto */}
              <p className="font-roboto leading-relaxed max-w-4xl mx-auto text-white/90">
                {/* Changed to font-roboto */}
                <span className="text-4xl font-roboto">Beautifully Crafted Pieces</span>
                <AutoTypeText
                  staticPrefix=" "
                  typingSpeed={100}
                  deletingSpeed={50}
                  delayBetweenPhrases={2000}
                  // Changed to font-roboto
                  phrases={autoTypePhrases}
                  className="inline text-4xl font-bold font-roboto"
                />
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <Button
                  asChild
                  size="lg"
                  // Changed to font-roboto
                  className="px-12 py-4 text-lg bg-white text-gray-900 hover:bg-white/90 transition-all duration-300 hover:scale-105 font-roboto font-medium"
                >
                  <Link to="/products">Shop Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  // Changed to font-roboto
                  className="px-12 py-4 text-lg border-white text-gray-800 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 font-roboto font-medium"
                >
                  <Link to="/about-us">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products (Categories) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            {/* Changed to font-roboto */}
            <h2 className="text-5xl font-bold text-gray-900 mb-6 font-roboto">Our Product Categories</h2>
            {/* Changed to font-roboto */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-roboto">
              Discover our extensive range of premium products, carefully curated for quality and style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <Link
                key={index}
                to={`/products/${product.slug}`}
                className="block"
              >
                <Card
                  className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in border-0 shadow-lg bg-white rounded-2xl overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader className="text-center p-8">
                    {/* Changed to font-roboto */}
                    <CardTitle className="font-roboto text-2xl group-hover:text-gray-900 transition-colors duration-300 text-gray-800 mb-3">{product.title}</CardTitle>
                    {/* Changed to font-roboto */}
                    <CardDescription className="font-roboto text-gray-600 text-lg">{product.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in">
            <Button asChild size="lg"
            // Changed to font-roboto
            className="hover:scale-105 transition-all duration-300 font-roboto font-medium bg-gray-900 text-white hover:bg-gray-800 px-12 py-4 text-lg">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-fade-in-left">
            {/* Kept `tracking-wider` for stylistic purposes, but font is now roboto */}
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2 font-roboto">ABOUT US</h2>
            {/* Changed to font-roboto */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-roboto mb-6">
              Crafting Excellence for Generations
            </h1>
            {/* Changed to font-roboto */}
            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-roboto">
                NY Ventures is a Delhi-NCR-based group with diverse business verticals. Our Clay Products Division offers a wide range of eco-friendly items — from traditional cookware and tableware to decorative and everyday-use clay essentials like pots, ovens, and glasses.
            </p>
            {/* Changed to font-roboto */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-roboto">
              Our commitment to quality, authenticity, and customer satisfaction drives us to curate a collection that not only meets but exceeds expectations. Discover the difference that true craftsmanship makes.
            </p>
            {/* Changed to font-roboto */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-roboto">
              Crafted from premium black soil, our clay products are toxin-free, 100% natural, and rooted in Indian heritage. Using clay utensils not only supports the environment but also helps maintain the alkaline balance of the body — a key to better health and disease prevention.
            </p>
            <Button
              asChild
              size="lg"
              // Changed to font-roboto
              className="px-10 py-4 text-lg bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 font-roboto font-medium"
            >
              <Link to="/about-us">Our Story</Link>
            </Button>
          </div>
          <div className="md:w-1/2 animate-fade-in-right">
            <img
              src="https://images.unsplash.com/photo-1589859762194-eaae75c61f64?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              className="rounded-3xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            {/* Changed to font-roboto */}
            <h2 className="text-5xl font-bold text-gray-900 mb-6 font-roboto">Why Choose NY Ventures?</h2>
            {/* Changed to font-roboto */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-roboto">
              Experience the distinct advantages of partnering with us for your product needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-up border-0 shadow-lg bg-white rounded-2xl p-8 text-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="pt-0 flex flex-col items-center">
                  <div className="text-6xl mb-6 text-gray-800 group-hover:text-primary transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  {/* Changed to font-roboto */}
                  <CardTitle className="font-roboto text-2xl text-gray-900 mb-3">{benefit.title}</CardTitle>
                  {/* Changed to font-roboto */}
                  <CardDescription className="font-roboto text-gray-600 text-lg">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            {/* Changed to font-roboto */}
            <h2 className="text-5xl font-bold text-gray-900 mb-6 font-roboto">What Our Clients Say</h2>
            {/* Changed to font-roboto */}
            <p className="text-xl text-gray-600 font-roboto">
              Trusted by businesses and individuals across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left border-0 shadow-lg bg-white rounded-2xl p-8" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="pt-0">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl animate-scale-in" style={{ animationDelay: `${(index * 0.2) + (i * 0.1)}s` }}>★</span>
                    ))}
                  </div>
                  {/* Changed to font-roboto */}
                  <p className="text-gray-600 mb-6 italic font-roboto text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    {/* Changed to font-roboto */}
                    <p className="font-semibold font-roboto text-gray-900 text-xl">{testimonial.name}</p>
                    {/* Changed to font-roboto */}
                    <p className="text-gray-500 font-roboto">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;





// // import { Link } from "react-router-dom"
// // import Navbar from "../components/Navbar"
// // import Footer from "../components/Footer"
// // import { Button } from "../components/ui/button"
// // import { Badge } from "../components/ui/badge"
// // import { Card, CardContent } from "../components/ui/card"
// // import { Star, Sparkles, Shield, Truck, Award, Users, Globe } from "lucide-react"

// // const Index = () => {
// //   const categories = [
// //     {
// //       name: "Copper Items",
// //       slug: "copper-items",
// //       description: "Premium copper products for health and wellness",
// //       image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
// //       badge: "Health Benefits",
// //       productCount: 15,
// //     },
// //     {
// //       name: "Bar Accessories",
// //       slug: "bar-accessories",
// //       description: "Professional bar tools and equipment",
// //       image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&h=600&fit=crop",
// //       badge: "Professional Grade",
// //       productCount: 45,
// //     },
// //     {
// //       name: "Bagas Disposables",
// //       slug: "bagas-disposables",
// //       description: "Eco-friendly disposable products",
// //       image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
// //       badge: "Eco-Friendly",
// //       productCount: 12,
// //     },
// //   ]

// //   const testimonials = [
// //     {
// //       name: "Sarah Johnson",
// //       role: "Restaurant Owner",
// //       content:
// //         "NY Ventures has been our trusted supplier for over 3 years. Their copper items are exceptional quality and our customers love them.",
// //       avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e0e4d4?w=100&h=100&fit=crop&crop=face",
// //       rating: 5,
// //     },
// //     {
// //       name: "Michael Chen",
// //       role: "Bar Manager",
// //       content:
// //         "The bar accessories from NY Ventures are professional grade. They've helped elevate our cocktail service significantly.",
// //       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
// //       rating: 5,
// //     },
// //     {
// //       name: "Emily Rodriguez",
// //       role: "Event Planner",
// //       content:
// //         "Their biodegradable products are perfect for our eco-conscious events. Quality is outstanding and delivery is always on time.",
// //       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
// //       rating: 5,
// //     },
// //   ]

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
// //       <Navbar />

// //       {/* Hero Section */}
// //       <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
// //         <div className="absolute inset-0">
// //           <img
// //             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hDkC9VAzLKluH429PuCq8mjIpjpT1Z.png"
// //             alt="NY Ventures Hero"
// //             className="w-full h-full object-cover opacity-20"
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-indigo-900/80"></div>
// //         </div>

// //         {/* Floating Background Elements */}
// //         <div className="absolute inset-0 overflow-hidden">
// //           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
// //           <div
// //             className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
// //             style={{ animationDelay: "2s" }}
// //           ></div>
// //           <div
// //             className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"
// //             style={{ animationDelay: "1s" }}
// //           ></div>
// //         </div>

// //         <div className="container mx-auto px-4 relative z-10">
// //           <div className="max-w-4xl mx-auto text-center animate-fade-in">
// //             <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-6 py-2">
// //               <Sparkles className="mr-2 h-4 w-4" />
// //               Premium Trading Company
// //             </Badge>
// //             <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
// //               NY Ventures
// //             </h1>
// //             <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-inter">
// //               Your trusted partner for premium copper articles, professional bar accessories, and eco-friendly
// //               biodegradable products. Quality craftsmanship meets modern innovation.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
// //               <Button
// //                 asChild
// //                 size="lg"
// //                 className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 font-inter shadow-xl"
// //               >
// //                 <Link to="/products">Explore Products</Link>
// //               </Button>
// //               <Button
// //                 asChild
// //                 variant="outline"
// //                 size="lg"
// //                 className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-medium font-inter bg-transparent"
// //               >
// //                 <Link to="/contact-us">Get Quote</Link>
// //               </Button>
// //             </div>
// //             <div className="flex flex-wrap justify-center gap-8 text-sm text-white/80 font-inter">
// //               <div className="flex items-center">
// //                 <Shield className="mr-2 h-4 w-4" />
// //                 Quality Guaranteed
// //               </div>
// //               <div className="flex items-center">
// //                 <Truck className="mr-2 h-4 w-4" />
// //                 Fast Delivery
// //               </div>
// //               <div className="flex items-center">
// //                 <Award className="mr-2 h-4 w-4" />
// //                 Premium Materials
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Stats Section */}
// //       <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
// //         <div className="container mx-auto px-4">
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// //             <div className="text-center animate-fade-in">
// //               <div className="text-4xl font-bold mb-2 font-playfair">500+</div>
// //               <div className="text-white/80 font-inter">Happy Clients</div>
// //             </div>
// //             <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
// //               <div className="text-4xl font-bold mb-2 font-playfair">1000+</div>
// //               <div className="text-white/80 font-inter">Products Delivered</div>
// //             </div>
// //             <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
// //               <div className="text-4xl font-bold mb-2 font-playfair">15+</div>
// //               <div className="text-white/80 font-inter">Years Experience</div>
// //             </div>
// //             <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
// //               <div className="text-4xl font-bold mb-2 font-playfair">99%</div>
// //               <div className="text-white/80 font-inter">Satisfaction Rate</div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Features Section */}
// //       <section className="py-20 bg-gradient-to-br from-white to-blue-50">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Why Choose NY Ventures?</h2>
// //             <p className="text-lg text-gray-600 font-inter leading-relaxed">
// //               We combine traditional craftsmanship with modern innovation to deliver products that exceed expectations.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             <Card className="text-center bg-gradient-to-br from-white to-blue-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
// //               <CardContent className="p-8">
// //                 <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
// //                   <Award className="h-10 w-10 text-white" />
// //                 </div>
// //                 <h3 className="text-2xl font-semibold mb-4 font-playfair text-gray-900">Premium Quality</h3>
// //                 <p className="text-gray-600 font-inter leading-relaxed">
// //                   Every product undergoes rigorous quality control to ensure it meets our exacting standards for
// //                   durability and performance.
// //                 </p>
// //               </CardContent>
// //             </Card>

// //             <Card className="text-center bg-gradient-to-br from-white to-purple-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
// //               <CardContent className="p-8">
// //                 <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
// //                   <Users className="h-10 w-10 text-white" />
// //                 </div>
// //                 <h3 className="text-2xl font-semibold mb-4 font-playfair text-gray-900">Expert Craftsmanship</h3>
// //                 <p className="text-gray-600 font-inter leading-relaxed">
// //                   Our skilled artisans bring decades of experience, creating unique pieces that blend traditional
// //                   techniques with modern design.
// //                 </p>
// //               </CardContent>
// //             </Card>

// //             <Card className="text-center bg-gradient-to-br from-white to-green-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
// //               <CardContent className="p-8">
// //                 <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
// //                   <Globe className="h-10 w-10 text-white" />
// //                 </div>
// //                 <h3 className="text-2xl font-semibold mb-4 font-playfair text-gray-900">Global Reach</h3>
// //                 <p className="text-gray-600 font-inter leading-relaxed">
// //                   We serve customers worldwide with reliable shipping and exceptional customer service, ensuring
// //                   satisfaction across all markets.
// //                 </p>
// //               </CardContent>
// //             </Card>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Product Categories */}
// //       <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Our Product Categories</h2>
// //             <p className="text-lg text-gray-600 font-inter leading-relaxed">
// //               Discover our comprehensive range of premium products, each category carefully curated for excellence.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {categories.map((category, index) => (
// //               <div key={category.slug} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
// //                 <Card className="group h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm">
// //                   <div className="relative">
// //                     <img
// //                       src={category.image || "/placeholder.svg"}
// //                       alt={category.name}
// //                       className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
// //                     />
// //                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //                     <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 border-0 shadow-lg">
// //                       {category.badge}
// //                     </Badge>
// //                     <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg">
// //                       {category.productCount} Products
// //                     </Badge>
// //                   </div>
// //                   <CardContent className="p-6">
// //                     <h3 className="text-2xl font-bold text-gray-900 mb-2 font-playfair group-hover:text-blue-600 transition-colors duration-300">
// //                       {category.name}
// //                     </h3>
// //                     <p className="text-gray-600 mb-4 font-inter leading-relaxed">{category.description}</p>
// //                     <Button
// //                       asChild
// //                       className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105"
// //                     >
// //                       <Link to={`/category/${category.slug}`}>Explore {category.name}</Link>
// //                     </Button>
// //                   </CardContent>
// //                 </Card>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Testimonials */}
// //       <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">What Our Clients Say</h2>
// //             <p className="text-lg text-gray-600 font-inter leading-relaxed">
// //               Don't just take our word for it. Here's what our satisfied customers have to say about our products and
// //               service.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {testimonials.map((testimonial, index) => (
// //               <Card
// //                 key={index}
// //                 className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm animate-fade-in"
// //                 style={{ animationDelay: `${index * 0.1}s` }}
// //               >
// //                 <CardContent className="p-8">
// //                   <div className="flex items-center mb-4">
// //                     {[...Array(testimonial.rating)].map((_, i) => (
// //                       <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
// //                     ))}
// //                   </div>
// //                   <p className="text-gray-600 mb-6 font-inter leading-relaxed italic">"{testimonial.content}"</p>
// //                   <div className="flex items-center">
// //                     <img
// //                       src={testimonial.avatar || "/placeholder.svg"}
// //                       alt={testimonial.name}
// //                       className="w-12 h-12 rounded-full mr-4 object-cover"
// //                     />
// //                     <div>
// //                       <div className="font-semibold text-gray-900 font-inter">{testimonial.name}</div>
// //                       <div className="text-sm text-gray-500 font-inter">{testimonial.role}</div>
// //                     </div>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             ))}
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
// //             <h2 className="text-4xl font-bold mb-4 font-playfair">Ready to Get Started?</h2>
// //             <p className="text-xl mb-8 font-inter leading-relaxed text-white/90">
// //               Join thousands of satisfied customers who trust NY Ventures for their premium product needs. Get in touch
// //               today for personalized quotes and exceptional service.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <Button
// //                 asChild
// //                 size="lg"
// //                 className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 font-inter shadow-xl"
// //               >
// //                 <Link to="/contact-us">Get Quote Now</Link>
// //               </Button>
// //               <Button
// //                 asChild
// //                 variant="outline"
// //                 size="lg"
// //                 className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-medium font-inter bg-transparent"
// //               >
// //                 <a href="tel:+15551234567">Call Us Today</a>
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   )
// // }

// // export default Index




// import type React from "react"
// import { Link } from "react-router-dom"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import { Button } from "../components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
// import {
//   ArrowRight,
//   CheckCircle,
//   Star,
//   Users,
//   Factory,
//   Leaf,
//   Lightbulb,
//   Handshake,
//   TrendingUp,
//   Globe,
// } from "lucide-react"
// import { allDetailedProductsData } from "../data/allProductsData"

// const Index: React.FC = () => {
//   const categories = Array.from(new Set(allDetailedProductsData.map((p) => p.category)))

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

//   const getCategoryProductCount = (categorySlug: string) => {
//     return allDetailedProductsData.filter((p) => p.category === categorySlug).length
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative h-[700px] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700 text-white pt-20">
//         <div
//           className="absolute inset-0 z-0 opacity-20"
//           style={{
//             backgroundImage: "url(/hero-banners/cfd4a498-dd56-4234-9eb5-d586d3aa0f47.png)",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             filter: "grayscale(50%) blur(2px)",
//           }}
//         ></div>
//         <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-6 animate-fade-in-up">
//           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight font-playfair drop-shadow-lg">
//             NY Venture: Premium Trading Company
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-200 font-inter leading-relaxed">
//             Your trusted partner for exquisite copper articles and sustainable biodegradable products. Quality,
//             innovation, and reliability in every trade.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
//             <Button
//               asChild
//               size="lg"
//               className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-8 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
//             >
//               <Link to="/products">
//                 Explore Products <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//             <Button
//               asChild
//               variant="outline"
//               size="lg"
//               className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900 py-3 px-8 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
//             >
//               <Link to="/contact-us">Get a Quote</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* About Us / Mission Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">Our Commitment to Excellence</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-inter">
//             At NY Venture, we are driven by a passion for quality and a vision for a sustainable future. We meticulously
//             source and deliver products that meet the highest standards.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card
//               className="p-6 shadow-lg rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border-0 animate-fade-in"
//               style={{ animationDelay: "0.1s" }}
//             >
//               <CardHeader className="flex flex-col items-center pb-4">
//                 <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />
//                 <CardTitle className="text-2xl font-bold text-gray-900 font-playfair">Innovation</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-700 font-inter">
//                   Continuously exploring new materials and designs to bring you cutting-edge products.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card
//               className="p-6 shadow-lg rounded-xl bg-gradient-to-br from-green-50 to-teal-50 border-0 animate-fade-in"
//               style={{ animationDelay: "0.2s" }}
//             >
//               <CardHeader className="flex flex-col items-center pb-4">
//                 <Handshake className="h-12 w-12 text-green-600 mb-4" />
//                 <CardTitle className="text-2xl font-bold text-gray-900 font-playfair">Reliability</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-700 font-inter">
//                   Building lasting relationships through consistent quality and dependable service.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card
//               className="p-6 shadow-lg rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border-0 animate-fade-in"
//               style={{ animationDelay: "0.3s" }}
//             >
//               <CardHeader className="flex flex-col items-center pb-4">
//                 <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
//                 <CardTitle className="text-2xl font-bold text-gray-900 font-playfair">Growth</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-700 font-inter">
//                   Committed to expanding our offerings and global reach to serve you better.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Product Categories Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">Our Product Categories</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-inter">
//             Explore our diverse range of premium products, from timeless copperware to eco-friendly disposables.
//           </p>
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

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">Why Choose NY Venture?</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-inter">
//             We are dedicated to providing exceptional products and unparalleled service to our global clientele.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
//               <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
//                 <CheckCircle className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 font-playfair">Quality Assurance</h3>
//               <p className="text-gray-700 text-sm font-inter">
//                 Rigorous quality checks ensure every product meets global standards.
//               </p>
//             </div>
//             <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
//               <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
//                 <Leaf className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 font-playfair">Sustainable Practices</h3>
//               <p className="text-gray-700 text-sm font-inter">
//                 Committed to eco-friendly sourcing and production methods.
//               </p>
//             </div>
//             <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
//               <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
//                 <Users className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 font-playfair">Customer Centric</h3>
//               <p className="text-gray-700 text-sm font-inter">
//                 Your satisfaction is our priority, with dedicated support.
//               </p>
//             </div>
//             <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
//               <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
//                 <Star className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 font-playfair">Global Reach</h3>
//               <p className="text-gray-700 text-sm font-inter">Serving clients worldwide with efficient logistics.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 bg-gray-900 text-white text-center">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-4 font-playfair">Ready to Partner with NY Venture?</h2>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-inter">
//             Contact us today to discuss your requirements and receive a personalized quote.
//           </p>
//           <Button
//             asChild
//             size="lg"
//             className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white py-3 px-8 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
//           >
//             <Link to="/contact-us">
//               Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </Button>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default Index






// import type React from "react"
// import { Link } from "react-router-dom"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import { Button } from "../components/ui/button"
// import { Card, CardContent } from "../components/ui/card"
// import { ArrowRight, Factory, Leaf, Award } from "lucide-react"
// import { allDetailedProductsData } from "../data/allProductsData"

// const Index: React.FC = () => {
//   const featuredProducts = allDetailedProductsData.slice(0, 3) // Get first 3 products as featured

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700 text-white">
//         <div
//           className="absolute inset-0 z-0 opacity-20"
//           style={{
//             backgroundImage: "url(/hero-banners/cfd4a498-dd56-4234-9eb5-d586d3aa0f47.png)",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             filter: "grayscale(50%) blur(2px)",
//           }}
//         ></div>
//         <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-6 animate-fade-in-up">
//           <h1 className="text-5xl md:text-7xl font-extrabold leading-tight font-playfair drop-shadow-lg">
//             NY Venture: Crafting Excellence, Sustaining Tomorrow
//           </h1>
//           <p className="text-lg md:text-xl text-gray-200 font-inter leading-relaxed">
//             Discover premium copper articles and innovative biodegradable solutions for a healthier lifestyle and a
//             greener planet.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
//             <Button
//               asChild
//               size="lg"
//               className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 font-inter shadow-xl"
//             >
//               <Link to="/products">Explore Products</Link>
//             </Button>
//             <Button
//               asChild
//               variant="outline"
//               size="lg"
//               className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-medium font-inter bg-transparent"
//             >
//               <Link to="/about-us">Learn More</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* About Us / Value Proposition */}
//       <section className="py-20 bg-gradient-to-br from-white to-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Our Commitment to Quality & Planet</h2>
//             <p className="text-lg text-gray-600 font-inter leading-relaxed">
//               At NY Venture, we blend timeless tradition with modern sustainability, offering products that enrich your
//               life and protect our Earth.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <Card className="text-center p-8 shadow-lg rounded-xl bg-gradient-to-br from-white to-blue-50 border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
//               <CardContent className="pt-0">
//                 <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
//                   <Factory className="h-10 w-10 text-blue-600" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4 font-playfair text-gray-900">Premium Copperware</h3>
//                 <p className="text-gray-600 font-inter leading-relaxed">
//                   Discover the health benefits and timeless elegance of our handcrafted pure copper articles.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card
//               className="text-center p-8 shadow-lg rounded-xl bg-gradient-to-br from-white to-purple-50 border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
//               style={{ animationDelay: "0.1s" }}
//             >
//               <CardContent className="pt-0">
//                 <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
//                   <Leaf className="h-10 w-10 text-purple-600" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4 font-playfair text-gray-900">Eco-Friendly Solutions</h3>
//                 <p className="text-gray-600 font-inter leading-relaxed">
//                   Embrace a greener lifestyle with our range of biodegradable and compostable products.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card
//               className="text-center p-8 shadow-lg rounded-xl bg-gradient-to-br from-white to-green-50 border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
//               style={{ animationDelay: "0.2s" }}
//             >
//               <CardContent className="pt-0">
//                 <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
//                   <Award className="h-10 w-10 text-green-600" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4 font-playfair text-gray-900">Uncompromising Quality</h3>
//                 <p className="text-gray-600 font-inter leading-relaxed">
//                   Every item is meticulously crafted and rigorously tested to meet the highest standards.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">Our Featured Products</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-inter">
//             Handpicked selections showcasing our commitment to quality and innovation.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {featuredProducts.map((product, index) => (
//               <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
//                 <Card className="p-6 shadow-lg rounded-xl bg-white border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
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
//               </div>
//             ))}
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

//       {/* Testimonials (Optional) */}
//       <section className="py-20 bg-gradient-to-br from-white to-purple-50">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">What Our Customers Say</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-inter">
//             Hear from our satisfied customers about their experience with NY Venture.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <Card className="p-6 shadow-lg rounded-xl bg-white border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
//               <CardContent className="pt-0">
//                 <p className="text-gray-700 italic mb-4 font-inter">
//                   "The copper bottle I bought is of exceptional quality. I've noticed a difference in my hydration and
//                   it looks beautiful too!"
//                 </p>
//                 <div className="flex items-center justify-center">
//                   <img
//                     src="/placeholder.svg?height=50&width=50"
//                     alt="Customer 1"
//                     className="w-12 h-12 rounded-full object-cover mr-4"
//                   />
//                   <div>
//                     <p className="font-semibold text-gray-900 font-playfair">Sarah L.</p>
//                     <p className="text-sm text-gray-500 font-inter">Health Enthusiast</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card
//               className="p-6 shadow-lg rounded-xl bg-white border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
//               style={{ animationDelay: "0.1s" }}
//             >
//               <CardContent className="pt-0">
//                 <p className="text-gray-700 italic mb-4 font-inter">
//                   "Finally, disposable plates that don't harm the planet! The bagasse plates are sturdy and perfect for
//                   our events."
//                 </p>
//                 <div className="flex items-center justify-center">
//                   <img
//                     src="/placeholder.svg?height=50&width=50"
//                     alt="Customer 2"
//                     className="w-12 h-12 rounded-full object-cover mr-4"
//                   />
//                   <div>
//                     <p className="font-semibold text-gray-900 font-playfair">Mark T.</p>
//                     <p className="text-sm text-gray-500 font-inter">Event Organizer</p>
//                   </div>
//                 </div>
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
//             <h2 className="text-4xl font-bold mb-4 font-playfair">Ready to Make a Difference?</h2>
//             <p className="text-xl mb-8 font-inter leading-relaxed text-white/90">
//               Join us in embracing quality and sustainability. Explore our products or contact us for custom solutions.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 asChild
//                 size="lg"
//                 className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 font-inter shadow-xl"
//               >
//                 <Link to="/contact-us">Get a Custom Quote</Link>
//               </Button>
//               <Button
//                 asChild
//                 variant="outline"
//                 size="lg"
//                 className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-medium font-inter bg-transparent"
//               >
//                 <Link to="/products">View All Categories</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default Index
