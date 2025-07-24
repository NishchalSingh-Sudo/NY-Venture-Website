// // // // import Navbar from "@/components/Navbar";
// // // // import Footer from "@/components/Footer";
// // // // import { Card, CardContent } from "@/components/ui/card"; // Assuming these are from Shadcn UI or similar

// // // // const About = () => {
// // // //   return (
// // // //     <div className="min-h-screen bg-background font-fair">
// // // //       <Navbar />

// // // //       {/* Hero Section (Retaining this as it's a standard header) */}
// // // //       <section className="py-32 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
// // // //         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589859762194-eaae75c61f64?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-100"></div>
// // // //         <div className="container mx-auto px-4 relative">
// // // //           <div className="max-w-4xl mx-auto text-center animate-fade-in">
// // // //             <h1 className="text-5xl font-bold text-foreground mb-6 font-playfair">About Us</h1> {/* Changed to "About Us" */}
// // // //             <p className="text-xl text-muted-foreground font-play-fair">
// // // //               Learn more about NY Venture and our commitment to quality. {/* Updated tagline */}
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Main Content - Reimagined based on image_ccb23f.jpg */}
// // // //       <section className="py-32 bg-white"> {/* Changed background to white */}
// // // //         <div className="container mx-auto px-4">
// // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> {/* Adjusted grid for text and image/gallery */}
// // // //             {/* Left Section - Text Content */}
// // // //             <div className="flex flex-col gap-8 animate-fade-in">
// // // //               <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">ABOUT US</h2> {/* New heading */}
// // // //               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-playfair">
// // // //                 We Take Responsibility For Your Products Just As We Do For Our Own.
// // // //               </h1> {/* New main heading */}
// // // //               <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-primary pl-4">
// // // //                 "At NY Venture, we know that quality, reliability, and presentation are vital to your business's success. That’s why we use only top-tier materials and maintain rigorous quality standards across every product we deliver."
// // // //               </p> {/* Blockquote style */}
// // // //               <p className="text-lg text-gray-600 leading-relaxed">
// // // //                 Specializing in the export of premium packaging products, we offer an extensive range of high-quality solutions to ensure your products are securely packaged for transport, storage, and retail.
// // // //               </p>
// // // //               <p className="text-lg text-gray-600 leading-relaxed">
// // // //                 Our diverse product line includes glass jars and bottles, food trays, plates, bowls, takeout containers, cutlery, and straws. Additionally, we provide specialized packaging solutions such as blister packaging and industrial-grade materials for businesses with unique requirements. Whether you're in the food service industry, retail, or logistics, we have tailored solutions to keep your operations running smoothly and your products well-protected.
// // // //               </p>
// // // //               <button className="mt-6 px-8 py-3 bg-gray-800 text-white font-semibold rounded-md shadow-lg hover:bg-gray-900 transition-colors duration-300 w-fit">
// // // //                 EXPLORE MORE
// // // //               </button> {/* New button */}
// // // //             </div>

// // // //             {/* Right Section - Image Gallery */}
// // // //             <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
// // // //               <div className="col-span-2">
// // // //                 <img
// // // //                   src="https://images.unsplash.com/photo-1569878858876-c8cda7f9ecf8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Example image, replace with actual
// // // //                   alt="Packaging products"
// // // //                   className="w-full h-80 object-cover rounded-lg shadow-md"
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <img
// // // //                   src="https://images.unsplash.com/photo-1648587456176-4969b0124b12?q=80&w=1859&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Example image, replace with actual
// // // //                   alt="Food containers"
// // // //                   className="w-full h-64 object-cover rounded-lg shadow-md"
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <img
// // // //                   src="https://i.pinimg.com/736x/50/4e/3e/504e3e36d70485bf022fb6fabd043b34.jpg" // Example image, replace with actual
// // // //                   alt="Glass jars"
// // // //                   className="w-full h-64 object-cover rounded-lg shadow-md"
// // // //                 />
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default About;



// // // import Navbar from "@/components/Navbar";
// // // import Footer from "@/components/Footer";
// // // import { Card, CardContent } from "@/components/ui/card"; // Assuming these are from Shadcn UI or similar

// // // const About = () => {
// // //   return (
// // //     // Changed overall page font to font-roboto
// // //     <div className="min-h-screen bg-background font-roboto">
// // //       <Navbar />

// // //       {/* Hero Section */}
// // //       <section className="py-32 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
// // //         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589859762194-eaae75c61f64?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-100"></div>
// // //         <div className="container mx-auto px-4 relative">
// // //           <div className="max-w-4xl mx-auto text-center animate-fade-in">
// // //             {/* Applied font-roboto */}
// // //             <h1 className="text-5xl font-bold text-foreground mb-6 font-roboto">About Us</h1>
// // //             {/* Applied font-roboto */}
// // //             <p className="text-xl text-muted-foreground font-roboto">
// // //               Learn more about NY Venture and our commitment to quality.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Main Content */}
// // //       <section className="py-32 bg-white">
// // //         <div className="container mx-auto px-4">
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
// // //             {/* Left Section - Text Content */}
// // //             <div className="flex flex-col gap-8 animate-fade-in">
// // //               {/* Applied font-roboto */}
// // //               <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider font-roboto">ABOUT US</h2>
// // //               {/* Applied font-roboto */}
// // //               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-roboto">
// // //                 We Take Responsibility For Your Products Just As We Do For Our Own.
// // //               </h1>
// // //               {/* Applied font-roboto */}
// // //               <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-primary pl-4 font-roboto">
// // //                 "At NY Venture, we know that quality, reliability, and presentation are vital to your business's success. That’s why we use only top-tier materials and maintain rigorous quality standards across every product we deliver."
// // //               </p>
// // //               {/* Applied font-roboto */}
// // //               <p className="text-lg text-gray-600 leading-relaxed font-roboto">
// // //                 Specializing in the export of premium packaging products, we offer an extensive range of high-quality solutions to ensure your products are securely packaged for transport, storage, and retail.
// // //               </p>
// // //               {/* Applied font-roboto */}
// // //               <p className="text-lg text-gray-600 leading-relaxed font-roboto">
// // //                 Our diverse product line includes glass jars and bottles, food trays, plates, bowls, takeout containers, cutlery, and straws. Additionally, we provide specialized packaging solutions such as blister packaging and industrial-grade materials for businesses with unique requirements. Whether you're in the food service industry, retail, or logistics, we have tailored solutions to keep your operations running smoothly and your products well-protected.
// // //               </p>
// // //               {/* Applied font-roboto */}
// // //               <button className="mt-6 px-8 py-3 bg-gray-800 text-white font-semibold rounded-md shadow-lg hover:bg-gray-900 transition-colors duration-300 w-fit font-roboto">
// // //                 EXPLORE MORE
// // //               </button>
// // //             </div>

// // //             {/* Right Section - Image Gallery */}
// // //             <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
// // //               <div className="col-span-2">
// // //                 <img
// // //                   src="https://images.unsplash.com/photo-1569878858876-c8cda7f9ecf8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Example image, replace with actual
// // //                   alt="Packaging products"
// // //                   className="w-full h-80 object-cover rounded-lg shadow-md"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <img
// // //                   src="https://images.unsplash.com/photo-1648587456176-4969b0124b12?q=80&w=1859&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Example image, replace with actual
// // //                   alt="Food containers"
// // //                   className="w-full h-64 object-cover rounded-lg shadow-md"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <img
// // //                   src="https://i.pinimg.com/736x/50/4e/3e/504e3e36d70485bf022fb6fabd043b34.jpg" // Example image, replace with actual
// // //                   alt="Glass jars"
// // //                   className="w-full h-64 object-cover rounded-lg shadow-md"
// // //                 />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default About;


// // import { Link } from "react-router-dom"
// // import Navbar from "../components/Navbar"
// // import Footer from "../components/Footer"
// // import { Button } from "../components/ui/button"
// // import { Badge } from "../components/ui/badge"
// // import { Card, CardContent } from "../components/ui/card"
// // import { Award, Users, Globe, Heart, Target, Eye, CheckCircle } from "lucide-react"

// // const About = () => {
// //   const milestones = [
// //     {
// //       year: "2008",
// //       title: "Company Founded",
// //       description: "NY Ventures was established with a vision to provide premium quality products to global markets.",
// //     },
// //     {
// //       year: "2012",
// //       title: "International Expansion",
// //       description: "Expanded operations to serve customers across multiple countries with reliable shipping networks.",
// //     },
// //     {
// //       year: "2016",
// //       title: "Product Diversification",
// //       description: "Added eco-friendly biodegradable products to our portfolio, embracing sustainable practices.",
// //     },
// //     {
// //       year: "2020",
// //       title: "Digital Transformation",
// //       description: "Launched our comprehensive online platform to better serve our growing customer base.",
// //     },
// //     {
// //       year: "2024",
// //       title: "Innovation Leadership",
// //       description: "Recognized as a leading innovator in premium copper products and sustainable solutions.",
// //     },
// //   ]

// //   const team = [
// //     {
// //       name: "Rajesh Kumar",
// //       role: "Founder & CEO",
// //       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
// //       description:
// //         "With over 20 years of experience in international trade, Rajesh leads our vision for quality and innovation.",
// //     },
// //     {
// //       name: "Priya Sharma",
// //       role: "Head of Operations",
// //       image: "https://images.unsplash.com/photo-1494790108755-2616b9e0e4d4?w=300&h=300&fit=crop&crop=face",
// //       description:
// //         "Priya ensures our operations run smoothly and efficiently, maintaining our high standards of quality.",
// //     },
// //     {
// //       name: "Michael Chen",
// //       role: "International Sales Director",
// //       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
// //       description:
// //         "Michael manages our global sales network and builds lasting relationships with international clients.",
// //     },
// //   ]

// //   const values = [
// //     {
// //       icon: Award,
// //       title: "Quality Excellence",
// //       description:
// //         "We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our exacting standards.",
// //     },
// //     {
// //       icon: Heart,
// //       title: "Customer First",
// //       description:
// //         "Our customers are at the heart of everything we do. We strive to exceed expectations in every interaction.",
// //     },
// //     {
// //       icon: Globe,
// //       title: "Global Reach",
// //       description:
// //         "We serve customers worldwide with the same commitment to quality and service, regardless of location.",
// //     },
// //     {
// //       icon: Users,
// //       title: "Team Spirit",
// //       description:
// //         "Our success is built on the dedication and expertise of our talented team working together towards common goals.",
// //     },
// //   ]

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
// //       <Navbar />

// //       {/* Hero Section */}
// //       <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
// //         <div className="absolute inset-0">
// //           <img
// //             src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop"
// //             alt="About NY Ventures"
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
// //           <div className="max-w-4xl mx-auto text-center animate-fade-in">
// //             <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-6 py-2">
// //               <Heart className="mr-2 h-4 w-4" />
// //               Our Story
// //             </Badge>
// //             <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
// //               About NY Ventures
// //             </h1>
// //             <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-inter">
// //               For over 15 years, we've been dedicated to providing premium quality products that combine traditional
// //               craftsmanship with modern innovation.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Mission & Vision */}
// //       <section className="py-20 bg-gradient-to-br from-white to-blue-50">
// //         <div className="container mx-auto px-4">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// //             <Card className="bg-gradient-to-br from-blue-50 to-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
// //               <CardContent className="p-8">
// //                 <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
// //                   <Target className="h-8 w-8 text-white" />
// //                 </div>
// //                 <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Our Mission</h2>
// //                 <p className="text-lg text-gray-600 font-inter leading-relaxed">
// //                   To provide premium quality products that enhance the lives of our customers while maintaining the
// //                   highest standards of craftsmanship, sustainability, and customer service. We strive to be the trusted
// //                   partner for businesses and individuals seeking exceptional products.
// //                 </p>
// //               </CardContent>
// //             </Card>

// //             <Card className="bg-gradient-to-br from-purple-50 to-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
// //               <CardContent className="p-8">
// //                 <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
// //                   <Eye className="h-8 w-8 text-white" />
// //                 </div>
// //                 <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Our Vision</h2>
// //                 <p className="text-lg text-gray-600 font-inter leading-relaxed">
// //                   To become the global leader in premium copper products, bar accessories, and sustainable solutions,
// //                   recognized for our innovation, quality, and commitment to environmental responsibility. We envision a
// //                   world where quality craftsmanship meets modern sustainability.
// //                 </p>
// //               </CardContent>
// //             </Card>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Timeline */}
// //       <section className="py-20">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Our Journey</h2>
// //             <p className="text-lg text-gray-600 font-inter leading-relaxed">
// //               From humble beginnings to global recognition, here are the key milestones in our journey.
// //             </p>
// //           </div>

// //           <div className="relative">
// //             <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

// //             <div className="space-y-12">
// //               {milestones.map((milestone, index) => (
// //                 <div
// //                   key={index}
// //                   className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} animate-fade-in`}
// //                   style={{ animationDelay: `${index * 0.2}s` }}
// //                 >
// //                   <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
// //                     <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
// //                       <CardContent className="p-6">
// //                         <Badge className="mb-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
// //                           {milestone.year}
// //                         </Badge>
// //                         <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">{milestone.title}</h3>
// //                         <p className="text-gray-600 font-inter leading-relaxed">{milestone.description}</p>
// //                       </CardContent>
// //                     </Card>
// //                   </div>

// //                   <div className="relative z-10">
// //                     <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
// //                   </div>

// //                   <div className="w-1/2"></div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Values */}
// //       <section className="py-20 bg-gradient-to-br from-white to-blue-50">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Our Values</h2>
// //             <p className="text-lg text-gray-600 font-inter leading-relaxed">
// //               These core values guide everything we do and shape our relationships with customers, partners, and
// //               communities.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {values.map((value, index) => (
// //               <Card
// //                 key={index}
// //                 className="text-center bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
// //                 style={{ animationDelay: `${index * 0.1}s` }}
// //               >
// //                 <CardContent className="p-8">
// //                   <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
// //                     <value.icon className="h-8 w-8 text-white" />
// //                   </div>
// //                   <h3 className="text-xl font-semibold mb-4 font-playfair text-gray-900">{value.title}</h3>
// //                   <p className="text-gray-600 font-inter leading-relaxed">{value.description}</p>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Team */}
// //       <section className="py-20">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Meet Our Team</h2>
// //             <p className="text-lg text-gray-600 font-inter leading-relaxed">
// //               Our success is driven by passionate professionals who bring expertise, dedication, and innovation to
// //               everything we do.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {team.map((member, index) => (
// //               <Card
// //                 key={index}
// //                 className="text-center bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
// //                 style={{ animationDelay: `${index * 0.1}s` }}
// //               >
// //                 <CardContent className="p-8">
// //                   <div className="relative mb-6">
// //                     <img
// //                       src={member.image || "/placeholder.svg"}
// //                       alt={member.name}
// //                       className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
// //                     />
// //                     <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
// //                       <CheckCircle className="h-4 w-4 text-white" />
// //                     </div>
// //                   </div>
// //                   <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">{member.name}</h3>
// //                   <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">{member.role}</Badge>
// //                   <p className="text-gray-600 font-inter leading-relaxed">{member.description}</p>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Stats */}
// //       <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
// //         <div className="absolute inset-0">
// //           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
// //           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
// //         </div>

// //         <div className="container mx-auto px-4 relative z-10">
// //           <div className="max-w-4xl mx-auto text-center mb-16">
// //             <h2 className="text-4xl font-bold mb-4 font-playfair">Our Impact</h2>
// //             <p className="text-xl text-white/90 font-inter leading-relaxed">
// //               Numbers that reflect our commitment to excellence and customer satisfaction.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
// //             <div className="text-center animate-fade-in">
// //               <div className="text-4xl font-bold mb-2 font-playfair">500+</div>
// //               <div className="text-white/80 font-inter">Happy Clients</div>
// //             </div>
// //             <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
// //               <div className="text-4xl font-bold mb-2 font-playfair">15+</div>
// //               <div className="text-white/80 font-inter">Years Experience</div>
// //             </div>
// //             <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
// //               <div className="text-4xl font-bold mb-2 font-playfair">25+</div>
// //               <div className="text-white/80 font-inter">Countries Served</div>
// //             </div>
// //             <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
// //               <div className="text-4xl font-bold mb-2 font-playfair">99%</div>
// //               <div className="text-white/80 font-inter">Satisfaction Rate</div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Call to Action */}
// //       <section className="py-20 bg-gradient-to-br from-white to-blue-50">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto text-center animate-fade-in">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Ready to Work With Us?</h2>
// //             <p className="text-xl text-gray-600 mb-8 font-inter leading-relaxed">
// //               Join hundreds of satisfied customers who trust NY Ventures for their premium product needs. Let's discuss
// //               how we can help you achieve your goals.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <Button
// //                 asChild
// //                 size="lg"
// //                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 font-inter shadow-xl"
// //               >
// //                 <Link to="/contact-us">Get In Touch</Link>
// //               </Button>
// //               <Button
// //                 asChild
// //                 variant="outline"
// //                 size="lg"
// //                 className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-medium font-inter bg-transparent"
// //               >
// //                 <Link to="/products">View Products</Link>
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   )
// // }

// // export default About



// import type React from "react"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
// import { Button } from "../components/ui/button"
// import { Link } from "react-router-dom"
// import { Handshake, Globe, Factory, Leaf, Award } from "lucide-react"

// const About: React.FC = () => {
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
//             About NY Venture
//           </h1>
//           <p className="text-lg md:text-xl text-gray-200 font-inter leading-relaxed">
//             Your trusted partner in premium copper articles and sustainable biodegradable products.
//           </p>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 text-center max-w-4xl">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">Our Story & Mission</h2>
//           <p className="text-lg text-gray-700 leading-relaxed mb-8 font-inter">
//             Founded with a vision to bridge traditional craftsmanship with modern sustainability, NY Venture has grown
//             into a leading trading company specializing in high-quality copper articles and eco-friendly biodegradable
//             products. Our journey began with a commitment to excellence and a deep respect for both heritage and the
//             environment.
//           </p>
//           <p className="text-lg text-gray-700 leading-relaxed font-inter">
//             Our mission is to deliver unparalleled value to our clients worldwide by providing meticulously sourced
//             products that meet the highest standards of quality, innovation, and ethical production. We strive to foster
//             long-term partnerships built on trust, transparency, and mutual growth.
//           </p>
//         </div>
//       </section>

//       {/* Our Values Section */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">Our Core Values</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-inter">
//             These principles guide every decision we make and every product we offer.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <Card
//               className="p-6 shadow-lg rounded-xl bg-white border-0 animate-fade-in"
//               style={{ animationDelay: "0.1s" }}
//             >
//               <CardHeader className="flex flex-col items-center pb-4">
//                 <Award className="h-12 w-12 text-blue-600 mb-4" />
//                 <CardTitle className="text-2xl font-bold text-gray-900 font-playfair">Quality</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-700 font-inter">
//                   Uncompromising standards in sourcing and delivery, ensuring excellence in every product.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card
//               className="p-6 shadow-lg rounded-xl bg-white border-0 animate-fade-in"
//               style={{ animationDelay: "0.2s" }}
//             >
//               <CardHeader className="flex flex-col items-center pb-4">
//                 <Leaf className="h-12 w-12 text-green-600 mb-4" />
//                 <CardTitle className="text-2xl font-bold text-gray-900 font-playfair">Sustainability</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-700 font-inter">
//                   Committed to eco-friendly practices and promoting biodegradable alternatives.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card
//               className="p-6 shadow-lg rounded-xl bg-white border-0 animate-fade-in"
//               style={{ animationDelay: "0.3s" }}
//             >
//               <CardHeader className="flex flex-col items-center pb-4">
//                 <Handshake className="h-12 w-12 text-purple-600 mb-4" />
//                 <CardTitle className="text-2xl font-bold text-gray-900 font-playfair">Integrity</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-700 font-inter">
//                   Operating with honesty, transparency, and ethical conduct in all our dealings.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Our Team Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">Meet Our Leadership</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-inter">
//             Our dedicated team is passionate about bringing you the best products and service.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <Card
//               className="p-6 shadow-lg rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border-0 animate-fade-in"
//               style={{ animationDelay: "0.1s" }}
//             >
//               <CardContent className="flex flex-col items-center text-center">
//                 <img
//                   src="/placeholder.svg?height=120&width=120"
//                   alt="Team Member 1"
//                   className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
//                 />
//                 <h3 className="text-xl font-bold text-gray-900 font-playfair">Jane Doe</h3>
//                 <p className="text-blue-600 font-semibold mb-2 font-inter">CEO & Founder</p>
//                 <p className="text-gray-700 text-sm font-inter">
//                   With over 20 years in international trade, Jane leads with a vision for sustainable global commerce.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card
//               className="p-6 shadow-lg rounded-xl bg-gradient-to-br from-green-50 to-teal-50 border-0 animate-fade-in"
//               style={{ animationDelay: "0.2s" }}
//             >
//               <CardContent className="flex flex-col items-center text-center">
//                 <img
//                   src="/placeholder.svg?height=120&width=120"
//                   alt="Team Member 2"
//                   className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
//                 />
//                 <h3 className="text-xl font-bold text-gray-900 font-playfair">John Smith</h3>
//                 <p className="text-green-600 font-semibold mb-2 font-inter">Head of Operations</p>
//                 <p className="text-gray-700 text-sm font-inter">
//                   John ensures seamless logistics and supply chain efficiency, delivering products on time.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card
//               className="p-6 shadow-lg rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border-0 animate-fade-in"
//               style={{ animationDelay: "0.3s" }}
//             >
//               <CardContent className="flex flex-col items-center text-center">
//                 <img
//                   src="/placeholder.svg?height=120&width=120"
//                   alt="Team Member 3"
//                   className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
//                 />
//                 <h3 className="text-xl font-bold text-gray-900 font-playfair">Emily White</h3>
//                 <p className="text-purple-600 font-semibold mb-2 font-inter">Product Development Lead</p>
//                 <p className="text-gray-700 text-sm font-inter">
//                   Emily is passionate about discovering unique products and ensuring their quality and market fit.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Our Impact Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">Our Impact</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-inter">
//             We are proud of the positive contributions we make to our communities and the planet.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
//               <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
//                 <Globe className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-4xl font-bold text-gray-900 font-playfair">50+</h3>
//               <p className="text-xl font-semibold text-gray-700 font-inter">Countries Served</p>
//             </div>
//             <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
//               <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
//                 <Leaf className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-4xl font-bold text-gray-900 font-playfair">100%</h3>
//               <p className="text-xl font-semibold text-gray-700 font-inter">Eco-Friendly Options</p>
//             </div>
//             <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
//               <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
//                 <Factory className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-4xl font-bold text-gray-900 font-playfair">200+</h3>
//               <p className="text-xl font-semibold text-gray-700 font-inter">Artisan Partnerships</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 bg-gray-900 text-white text-center">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-4 font-playfair">Join Our Global Network</h2>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-inter">
//             Partner with NY Venture for reliable sourcing and exceptional products.
//           </p>
//           <Button
//             asChild
//             size="lg"
//             className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white py-3 px-8 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
//           >
//             <Link to="/contact-us">Contact Us Today</Link>
//           </Button>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default About



import type React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Lightbulb, Handshake, Target, Award, Leaf } from "lucide-react"

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="About Us Background"
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
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              About NY Venture
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-inter">
              Your trusted partner for premium copper articles and sustainable biodegradable items.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 shadow-xl rounded-xl bg-gradient-to-br from-white to-blue-50 border-0 animate-fade-in">
              <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                <Target className="h-10 w-10 text-blue-600" />
                <CardTitle className="text-3xl font-bold text-gray-900 font-playfair">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-gray-700 leading-relaxed font-inter">
                Our mission is to provide high-quality, ethically sourced copper articles and innovative biodegradable
                products that promote health, sustainability, and responsible consumption. We aim to blend traditional
                craftsmanship with modern eco-conscious solutions.
              </CardContent>
            </Card>
            <Card
              className="p-8 shadow-xl rounded-xl bg-gradient-to-br from-white to-purple-50 border-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                <Lightbulb className="h-10 w-10 text-purple-600" />
                <CardTitle className="text-3xl font-bold text-gray-900 font-playfair">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-gray-700 leading-relaxed font-inter">
                We envision a future where sustainable living is accessible and desirable for everyone. By continuously
                innovating and expanding our range of eco-friendly products, we strive to be a global leader in
                promoting a healthier planet and a more conscious lifestyle.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Our Core Values</h2>
            <p className="text-lg text-gray-600 font-inter leading-relaxed">
              These principles guide our decisions and actions, ensuring we always deliver the best to our customers and
              the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              className="text-center p-8 shadow-lg rounded-xl bg-gradient-to-br from-white to-blue-50 border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="pt-0">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Award className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-playfair text-gray-900">Quality Excellence</h3>
                <p className="text-gray-600 font-inter leading-relaxed">
                  We are committed to the highest standards of quality in every product, ensuring durability,
                  functionality, and aesthetic appeal.
                </p>
              </CardContent>
            </Card>

            <Card
              className="text-center p-8 shadow-lg rounded-xl bg-gradient-to-br from-white to-purple-50 border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="pt-0">
                <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Leaf className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-playfair text-gray-900">Sustainability</h3>
                <p className="text-gray-600 font-inter leading-relaxed">
                  Our dedication to the environment drives us to offer products that are eco-friendly, biodegradable,
                  and responsibly sourced.
                </p>
              </CardContent>
            </Card>

            <Card
              className="text-center p-8 shadow-lg rounded-xl bg-gradient-to-br from-white to-green-50 border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <CardContent className="pt-0">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Handshake className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-playfair text-gray-900">Customer Trust</h3>
                <p className="text-gray-600 font-inter leading-relaxed">
                  We build lasting relationships through transparency, exceptional service, and a commitment to meeting
                  and exceeding customer expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team (Placeholder for future expansion) */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-inter">
            Behind NY Venture is a dedicated team passionate about quality, innovation, and sustainability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className="p-6 shadow-lg rounded-xl bg-white border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-blue-200"
              />
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-1 font-playfair">John Doe</h3>
                <p className="text-blue-600 text-sm mb-3 font-inter">Founder & CEO</p>
                <p className="text-gray-600 text-sm font-inter">
                  Visionary leader with a passion for sustainable business practices.
                </p>
              </CardContent>
            </Card>
            <Card
              className="p-6 shadow-lg rounded-xl bg-white border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-purple-200"
              />
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-1 font-playfair">Jane Smith</h3>
                <p className="text-purple-600 text-sm mb-3 font-inter">Head of Product Development</p>
                <p className="text-gray-600 text-sm font-inter">
                  Expert in material science and eco-friendly product innovation.
                </p>
              </CardContent>
            </Card>
            <Card
              className="p-6 shadow-lg rounded-xl bg-white border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-green-200"
              />
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-1 font-playfair">David Lee</h3>
                <p className="text-green-600 text-sm mb-3 font-inter">Operations Manager</p>
                <p className="text-gray-600 text-sm font-inter">
                  Ensuring seamless logistics and efficient supply chain management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
