
// import { useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: ""
//   });
//   const { toast } = useToast();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
    
//     toast({
//       title: "Message Sent!",
//       description: "Thank you for contacting us. We'll get back to you as soon as possible.",
//     });
    
//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       message: ""
//     });
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
      
//       {/* Header Section */}
//       <section className="py-32 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-5xl font-bold text-foreground mb-6">Contact Us</h1>
//           </div>
//         </div>
//       </section>

//       {/* Contact Content */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
//             {/* Company Information */}
//             <div>
//               <Card className="mb-8">
//                 <CardHeader>
//                   <CardTitle className="text-2xl">NY Ventures</CardTitle>
//                   <CardDescription>
//                     Your trusted partner for premium lifestyle products and trading solutions
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-6">
//                   <div>
//                     <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
//                     <div className="space-y-2">
//                       <div className="flex items-center space-x-3">
//                         <span className="text-primary">📧</span>
//                         <span>sales@nyventure.com</span>
//                       </div>
//                       <div className="flex items-center space-x-3">
//                         <span className="text-primary">📞</span>
//                         <span>+91 9958597512 </span>
//                       </div>
//                       <div className="flex items-center space-x-3">
//                         <span className="text-primary">📍</span>
//                         <span>New York, United States</span>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div>
//                     <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
//                     <div className="space-y-1 text-muted-foreground">
//                       <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
//                       <p>Saturday: 10:00 AM - 4:00 PM EST</p>
//                       <p>Sunday: Closed</p>
//                     </div>
//                   </div>
                  
//                   <div>
//                     <h3 className="font-semibold text-lg mb-2">What We Offer</h3>
//                     <ul className="space-y-1 text-muted-foreground">
//                       <li>• Competitive pricing and bulk discounts</li>
//                       <li>• Quality assurance and product authentication</li>
//                       <li>• Global shipping and logistics support</li>
//                       <li>• Custom product sourcing services</li>
//                       <li>• Dedicated account management</li>
//                     </ul>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Contact Form */}
//             <div>
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="text-2xl">Send Us a Message</CardTitle>
//                   <CardDescription className="text-base">
//                     Please input your contact information so that we can contact you as soon as we can. 
//                     We'll respond to all inquiries within 24 hours during business days.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div>
//                       <Label htmlFor="name">Full Name *</Label>
//                       <Input
//                         id="name"
//                         name="name"
//                         type="text"
//                         required
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         placeholder="Enter your full name"
//                         className="mt-1"
//                       />
//                     </div>
                    
//                     <div>
//                       <Label htmlFor="email">Email Address *</Label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         required
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         placeholder="Enter your email address"
//                         className="mt-1"
//                       />
//                     </div>
                    
//                     <div>
//                       <Label htmlFor="phone">Phone Number *</Label>
//                       <Input
//                         id="phone"
//                         name="phone"
//                         type="tel"
//                         required
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         placeholder="Enter your phone number"
//                         className="mt-1"
//                       />
//                     </div>
                    
//                     <div>
//                       <Label htmlFor="message">Message</Label>
//                       <Textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         placeholder="Tell us about your requirements, product interests, or any questions you have..."
//                         className="mt-1 min-h-[120px]"
//                       />
//                     </div>
                    
//                     <Button type="submit" className="w-full" size="lg">
//                       Send Message
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Additional Contact Options */}
//       <section className="py-16 bg-muted/30">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl font-bold text-foreground mb-8">Other Ways to Reach Us</h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-2xl">📞</span>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">Call Us Direct</h3>
//                 <p className="text-muted-foreground mb-4">For immediate assistance and urgent inquiries</p>
//                 <Button variant="outline" asChild>
//                   <a href="tel:+15551234567">+91 9958597512 </a>
//                 </Button>
//               </div>
              
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-2xl">📧</span>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">Email Us</h3>
//                 <p className="text-muted-foreground mb-4">Detailed inquiries and document sharing</p>
//                 <Button variant="outline" asChild>
//                   <a href="mailto:info@nyventures.com">Send Email</a>
//                 </Button>
//               </div>
              
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-2xl">💼</span>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">Partnership Inquiries</h3>
//                 <p className="text-muted-foreground mb-4">Explore wholesale and distribution opportunities</p>
//                 <Button variant="outline" asChild>
//                   <a href="mailto:partnerships@nyventures.com">Contact Partners</a>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;





import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  // Define the pre-written email details
  const emailAddress = "sales@nyventure.com"; // Using the email from your provided code
  const emailSubject = encodeURIComponent("Inquiry from Website"); // Pre-written subject
  const emailBody = encodeURIComponent("Dear NY Ventures team,\n\nI am writing to inquire about...\n\nBest regards,"); // Pre-written body

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="py-32 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Company Information */}
            <div>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">NY Ventures</CardTitle>
                  <CardDescription>
                    Your trusted partner for premium lifestyle products and trading solutions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-primary">📧</span>
                        <span>sales@nyventure.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-primary">📞</span>
                        <span>+91 9958597512 </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-primary">📍</span>
                        <span>New York, United States</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">What We Offer</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Competitive pricing and bulk discounts</li>
                      <li>• Quality assurance and product authentication</li>
                      <li>• Global shipping and logistics support</li>
                      <li>• Custom product sourcing services</li>
                      <li>• Dedicated account management</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Please input your contact information so that we can contact you as soon as we can. 
                    We'll respond to all inquiries within 24 hours during business days.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your requirements, product interests, or any questions you have..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Other Ways to Reach Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us Direct</h3>
                <p className="text-muted-foreground mb-4">For immediate assistance and urgent inquiries</p>
                <Button variant="outline" asChild>
                  <a href="tel:+919958597512">+91 9958597512 </a>
                </Button>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">Detailed inquiries and document sharing</p>
                {/* Explicitly wrapping the anchor tag inside the button */}
                <Button variant="outline">
                  <a 
                    href={`mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`}
                    className="w-full h-full flex items-center justify-center" // Ensure anchor fills button
                  >
                    Send Email
                  </a>
                </Button>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Partnership Inquiries</h3>
                <p className="text-muted-foreground mb-4">Explore wholesale and distribution opportunities</p>
                <Button variant="outline" asChild>
                  <a href="mailto:partnerships@nyventures.com">Contact Partners</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;






// // "use client"

// // import type React from "react"
// // import { useState } from "react"
// // import Navbar from "../components/Navbar"
// // import Footer from "../components/Footer"
// // import { Button } from "../components/ui/button"
// // import { Badge } from "../components/ui/badge"
// // import { Card, CardContent } from "../components/ui/card"
// // import { Input } from "../components/ui/input"
// // import { Textarea } from "../components/ui/textarea"
// // import {
// //   Mail,
// //   Phone,
// //   MapPin,
// //   Clock,
// //   Send,
// //   MessageSquare,
// //   HeadphonesIcon,
// //   FileText,
// //   CheckCircle,
// //   Globe,
// // } from "lucide-react"

// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     subject: "",
// //     message: "",
// //   })

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     })
// //   }

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault()
// //     // Handle form submission here
// //     console.log("Form submitted:", formData)
// //   }

// //   const contactMethods = [
// //     {
// //       icon: Mail,
// //       title: "Email Us",
// //       description: "Send us an email for detailed inquiries",
// //       contact: "info@nyventures.com",
// //       action: "mailto:info@nyventures.com",
// //     },
// //     {
// //       icon: Phone,
// //       title: "Call Us",
// //       description: "Speak directly with our team",
// //       contact: "+1 (555) 123-4567",
// //       action: "tel:+15551234567",
// //     },
// //     {
// //       icon: MessageSquare,
// //       title: "Live Chat",
// //       description: "Get instant support online",
// //       contact: "Available 24/7",
// //       action: "#",
// //     },
// //   ]

// //   const services = [
// //     {
// //       icon: FileText,
// //       title: "Product Quotes",
// //       description: "Get detailed pricing for bulk orders and custom requirements",
// //     },
// //     {
// //       icon: HeadphonesIcon,
// //       title: "Technical Support",
// //       description: "Expert assistance with product specifications and usage",
// //     },
// //     {
// //       icon: Globe,
// //       title: "International Shipping",
// //       description: "Worldwide delivery options and logistics support",
// //     },
// //   ]

// //   const faqs = [
// //     {
// //       question: "What is your minimum order quantity?",
// //       answer: "Our minimum order quantities vary by product category. Please contact us for specific requirements.",
// //     },
// //     {
// //       question: "Do you offer international shipping?",
// //       answer: "Yes, we ship worldwide. Shipping costs and delivery times vary by destination.",
// //     },
// //     {
// //       question: "Can you customize products?",
// //       answer: "We offer various customization options including engraving, special finishes, and packaging.",
// //     },
// //     {
// //       question: "What are your payment terms?",
// //       answer: "We accept various payment methods including bank transfers, letters of credit, and online payments.",
// //     },
// //   ]

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
// //       <Navbar />

// //       {/* Hero Section */}
// //       <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
// //         <div className="absolute inset-0">
// //           <img
// //             src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
// //             alt="Contact NY Ventures"
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
// //               <MessageSquare className="mr-2 h-4 w-4" />
// //               Get In Touch
// //             </Badge>
// //             <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
// //               Contact Us
// //             </h1>
// //             <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-inter">
// //               Ready to discuss your requirements? Our team is here to help you find the perfect solutions for your
// //               needs.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact Methods */}
// //       <section className="py-20">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">How Can We Help?</h2>
// //             <p className="text-lg text-gray-600 font-inter leading-relaxed">
// //               Choose the best way to reach us. We're committed to responding quickly and providing the support you need.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
// //             {contactMethods.map((method, index) => (
// //               <Card
// //                 key={index}
// //                 className="text-center bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
// //                 style={{ animationDelay: `${index * 0.1}s` }}
// //               >
// //                 <CardContent className="p-8">
// //                   <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
// //                     <method.icon className="h-8 w-8 text-white" />
// //                   </div>
// //                   <h3 className="text-xl font-semibold mb-3 font-playfair text-gray-900">{method.title}</h3>
// //                   <p className="text-gray-600 mb-4 font-inter">{method.description}</p>
// //                   <p className="text-lg font-medium text-blue-600 mb-4 font-inter">{method.contact}</p>
// //                   <Button
// //                     asChild
// //                     className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105"
// //                   >
// //                     <a href={method.action}>Contact Now</a>
// //                   </Button>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact Form & Info */}
// //       <section className="py-20 bg-gradient-to-br from-white to-blue-50">
// //         <div className="container mx-auto px-4">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// //             {/* Contact Form */}
// //             <Card className="bg-white border-0 shadow-xl">
// //               <CardContent className="p-8">
// //                 <h3 className="text-2xl font-bold text-gray-900 mb-6 font-playfair">Send Us a Message</h3>
// //                 <form onSubmit={handleSubmit} className="space-y-6">
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                     <div>
// //                       <label className="block text-sm font-medium text-gray-700 mb-2 font-inter">Name *</label>
// //                       <Input
// //                         type="text"
// //                         name="name"
// //                         value={formData.name}
// //                         onChange={handleInputChange}
// //                         required
// //                         className="w-full"
// //                         placeholder="Your full name"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium text-gray-700 mb-2 font-inter">Email *</label>
// //                       <Input
// //                         type="email"
// //                         name="email"
// //                         value={formData.email}
// //                         onChange={handleInputChange}
// //                         required
// //                         className="w-full"
// //                         placeholder="your@email.com"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                     <div>
// //                       <label className="block text-sm font-medium text-gray-700 mb-2 font-inter">Phone</label>
// //                       <Input
// //                         type="tel"
// //                         name="phone"
// //                         value={formData.phone}
// //                         onChange={handleInputChange}
// //                         className="w-full"
// //                         placeholder="+1 (555) 123-4567"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium text-gray-700 mb-2 font-inter">Subject *</label>
// //                       <Input
// //                         type="text"
// //                         name="subject"
// //                         value={formData.subject}
// //                         onChange={handleInputChange}
// //                         required
// //                         className="w-full"
// //                         placeholder="How can we help?"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2 font-inter">Message *</label>
// //                     <Textarea
// //                       name="message"
// //                       value={formData.message}
// //                       onChange={handleInputChange}
// //                       required
// //                       rows={6}
// //                       className="w-full"
// //                       placeholder="Tell us about your requirements..."
// //                     />
// //                   </div>

// //                   <Button
// //                     type="submit"
// //                     size="lg"
// //                     className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 font-inter"
// //                   >
// //                     <Send className="mr-2 h-4 w-4" />
// //                     Send Message
// //                   </Button>
// //                 </form>
// //               </CardContent>
// //             </Card>

// //             {/* Contact Information */}
// //             <div className="space-y-8">
// //               {/* Office Info */}
// //               <Card className="bg-white border-0 shadow-xl">
// //                 <CardContent className="p-8">
// //                   <h3 className="text-2xl font-bold text-gray-900 mb-6 font-playfair">Our Office</h3>
// //                   <div className="space-y-4">
// //                     <div className="flex items-start">
// //                       <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
// //                       <div>
// //                         <p className="font-medium text-gray-900 font-inter">Address</p>
// //                         <p className="text-gray-600 font-inter">
// //                           123 Business District
// //                           <br />
// //                           New York, NY 10001
// //                           <br />
// //                           United States
// //                         </p>
// //                       </div>
// //                     </div>
// //                     <div className="flex items-start">
// //                       <Clock className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
// //                       <div>
// //                         <p className="font-medium text-gray-900 font-inter">Business Hours</p>
// //                         <p className="text-gray-600 font-inter">
// //                           Monday - Friday: 9:00 AM - 6:00 PM
// //                           <br />
// //                           Saturday: 10:00 AM - 4:00 PM
// //                           <br />
// //                           Sunday: Closed
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </CardContent>
// //               </Card>

// //               {/* Services */}
// //               <Card className="bg-white border-0 shadow-xl">
// //                 <CardContent className="p-8">
// //                   <h3 className="text-2xl font-bold text-gray-900 mb-6 font-playfair">Our Services</h3>
// //                   <div className="space-y-4">
// //                     {services.map((service, index) => (
// //                       <div key={index} className="flex items-start">
// //                         <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
// //                           <service.icon className="h-5 w-5 text-white" />
// //                         </div>
// //                         <div>
// //                           <h4 className="font-semibold text-gray-900 font-inter">{service.title}</h4>
// //                           <p className="text-gray-600 text-sm font-inter">{service.description}</p>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* FAQ Section */}
// //       <section className="py-20">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto">
// //             <div className="text-center mb-16">
// //               <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Frequently Asked Questions</h2>
// //               <p className="text-lg text-gray-600 font-inter leading-relaxed">
// //                 Find quick answers to common questions about our products and services.
// //               </p>
// //             </div>

// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //               {faqs.map((faq, index) => (
// //                 <Card
// //                   key={index}
// //                   className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in"
// //                   style={{ animationDelay: `${index * 0.1}s` }}
// //                 >
// //                   <CardContent className="p-6">
// //                     <div className="flex items-start">
// //                       <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
// //                         <CheckCircle className="h-4 w-4 text-white" />
// //                       </div>
// //                       <div>
// //                         <h4 className="font-semibold text-gray-900 mb-2 font-playfair">{faq.question}</h4>
// //                         <p className="text-gray-600 font-inter leading-relaxed">{faq.answer}</p>
// //                       </div>
// //                     </div>
// //                   </CardContent>
// //                 </Card>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   )
// // }

// // export default Contact





// "use client"

// import type React from "react"
// import { useState } from "react"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import { Button } from "../components/ui/button"
// import { Input } from "../components/ui/input"
// import { Textarea } from "../components/ui/textarea"
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
// import { Label } from "../components/ui/label"
// import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"
// import { useToast } from "../hooks/use-toast"

// const Contact: React.FC = () => {
//   const { toast } = useToast()
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { id, value } = e.target
//     setFormData((prev) => ({ ...prev, [id]: value }))
//     setErrors((prev) => ({ ...prev, [id]: "" })) // Clear error on change
//   }

//   const validateForm = () => {
//     let valid = true
//     const newErrors = { name: "", email: "", subject: "", message: "" }

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required"
//       valid = false
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required"
//       valid = false
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid"
//       valid = false
//     }
//     if (!formData.subject.trim()) {
//       newErrors.subject = "Subject is required"
//       valid = false
//     }
//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required"
//       valid = false
//     }

//     setErrors(newErrors)
//     return valid
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (validateForm()) {
//       // Simulate form submission
//       console.log("Form submitted:", formData)
//       toast({
//         title: "Message Sent!",
//         description: "Thank you for contacting us. We will get back to you shortly.",
//       })
//       setFormData({ name: "", email: "", subject: "", message: "" }) // Clear form
//     } else {
//       toast({
//         title: "Submission Failed",
//         description: "Please correct the errors in the form.",
//         variant: "destructive",
//       })
//     }
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
//             Get in Touch
//           </h1>
//           <p className="text-lg md:text-xl text-gray-200 font-inter leading-relaxed">
//             We'd love to hear from you! Reach out for inquiries, quotes, or support.
//           </p>
//         </div>
//       </section>

//       {/* Contact Form & Info */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <Card
//               className="p-8 shadow-xl rounded-xl bg-white border-0 animate-fade-in"
//               style={{ animationDelay: "0.1s" }}
//             >
//               <CardHeader className="pb-6">
//                 <CardTitle className="text-3xl font-bold text-gray-900 font-playfair">Send Us a Message</CardTitle>
//                 <p className="text-gray-600 font-inter">
//                   Fill out the form below and we'll get back to you as soon as possible.
//                 </p>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <Label htmlFor="name" className="text-gray-700 font-inter">
//                       Your Name
//                     </Label>
//                     <Input
//                       id="name"
//                       type="text"
//                       placeholder="John Doe"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="mt-2"
//                     />
//                     {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                   </div>
//                   <div>
//                     <Label htmlFor="email" className="text-gray-700 font-inter">
//                       Your Email
//                     </Label>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="john.doe@example.com"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="mt-2"
//                     />
//                     {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                   </div>
//                   <div>
//                     <Label htmlFor="subject" className="text-gray-700 font-inter">
//                       Subject
//                     </Label>
//                     <Input
//                       id="subject"
//                       type="text"
//                       placeholder="Inquiry about Copper Items"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       className="mt-2"
//                     />
//                     {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
//                   </div>
//                   <div>
//                     <Label htmlFor="message" className="text-gray-700 font-inter">
//                       Your Message
//                     </Label>
//                     <Textarea
//                       id="message"
//                       placeholder="Type your message here..."
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows={5}
//                       className="mt-2"
//                     />
//                     {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
//                   </div>
//                   <Button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold shadow-md transition-all duration-300 hover:scale-105"
//                   >
//                     <MessageCircle className="mr-2 h-5 w-5" /> Send Message
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>

//             {/* Contact Information */}
//             <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
//               <Card className="p-6 shadow-lg rounded-xl bg-white border-0">
//                 <CardHeader className="pb-4">
//                   <CardTitle className="text-2xl font-bold text-gray-900 font-playfair">Contact Information</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="flex items-center space-x-4">
//                     <Mail className="h-6 w-6 text-blue-600 flex-shrink-0" />
//                     <div>
//                       <h4 className="font-semibold text-gray-900 font-inter">Email Us</h4>
//                       <p className="text-gray-700 font-inter">info@nyventure.com</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <Phone className="h-6 w-6 text-green-600 flex-shrink-0" />
//                     <div>
//                       <h4 className="font-semibold text-gray-900 font-inter">Call Us</h4>
//                       <p className="text-gray-700 font-inter">+1 (123) 456-7890</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <MapPin className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
//                     <div>
//                       <h4 className="font-semibold text-gray-900 font-inter">Our Office</h4>
//                       <p className="text-gray-700 font-inter">
//                         123 Venture Lane, Suite 400 <br />
//                         New York, NY 10001, USA
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <Clock className="h-6 w-6 text-orange-600 flex-shrink-0" />
//                     <div>
//                       <h4 className="font-semibold text-gray-900 font-inter">Business Hours</h4>
//                       <p className="text-gray-700 font-inter">Mon - Fri: 9:00 AM - 5:00 PM EST</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Map Placeholder */}
//               <Card className="p-0 shadow-lg rounded-xl overflow-hidden bg-white border-0">
//                 <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
//                   <MapPin className="h-12 w-12" />
//                   <span className="ml-2 text-lg">Map Placeholder</span>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section (Optional) */}
//       <section className="py-16 bg-gradient-to-br from-white to-blue-50">
//         <div className="container mx-auto px-4 text-center max-w-4xl">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">Frequently Asked Questions</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-inter">
//             Find quick answers to common questions about our products and services.
//           </p>
//           <div className="space-y-4 text-left">
//             <Card className="p-6 shadow-md rounded-xl bg-white border-0">
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-xl font-semibold text-gray-900 font-playfair">
//                   What types of copper products do you offer?
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-700 font-inter">
//                   We offer a wide range of copper articles including bottles, jugs, matkas, and various home decor
//                   items, all crafted from pure copper.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="p-6 shadow-md rounded-xl bg-white border-0">
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-xl font-semibold text-gray-900 font-playfair">
//                   Are your biodegradable products truly eco-friendly?
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-700 font-inter">
//                   Yes, our biodegradable products are made from 100% natural materials like sugar cane bagasse and wood,
//                   designed to compost naturally without harming the environment.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="p-6 shadow-md rounded-xl bg-white border-0">
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-xl font-semibold text-gray-900 font-playfair">
//                   How can I request a quote for bulk orders?
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-700 font-inter">
//                   You can request a quote by filling out the contact form on this page, or by adding items to your
//                   inquiry cart and submitting a quote request from there.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default Contact






// "use client"

// import type React from "react"
// import { useState } from "react"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import { Button } from "../components/ui/button"
// import { Input } from "../components/ui/input"
// import { Textarea } from "../components/ui/textarea"
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
// import { Mail, Phone, MapPin, Send, X } from "lucide-react"

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//     // Clear error when user starts typing
//     setErrors((prev) => ({ ...prev, [name]: "" }))
//   }

//   const validateForm = () => {
//     let valid = true
//     const newErrors = { name: "", email: "", subject: "", message: "" }

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required."
//       valid = false
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required."
//       valid = false
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid."
//       valid = false
//     }
//     if (!formData.subject.trim()) {
//       newErrors.subject = "Subject is required."
//       valid = false
//     }
//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required."
//       valid = false
//     }

//     setErrors(newErrors)
//     return valid
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (validateForm()) {
//       // Simulate form submission
//       console.log("Form submitted:", formData)
//       setIsSubmitted(true)
//       setFormData({ name: "", email: "", subject: "", message: "" }) // Clear form
//       // In a real application, you would send this data to a backend API
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="/placeholder.svg?height=1080&width=1920"
//             alt="Contact Us Background"
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
//           <div className="max-w-4xl mx-auto text-center animate-fade-in">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
//               Get in Touch
//             </h1>
//             <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-inter">
//               We'd love to hear from you! Reach out to us for inquiries, support, or custom orders.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form and Info */}
//       <section className="py-20 bg-gradient-to-br from-white to-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <Card className="p-8 shadow-xl rounded-xl bg-gradient-to-br from-white to-blue-50 border-0 animate-fade-in">
//               <CardHeader className="pb-6">
//                 <CardTitle className="text-3xl font-bold text-gray-900 font-playfair">Send Us a Message</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 {isSubmitted && (
//                   <div
//                     className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
//                     role="alert"
//                   >
//                     <strong className="font-bold">Success!</strong>
//                     <span className="block sm:inline">
//                       {" "}
//                       Your message has been sent. We will get back to you shortly.
//                     </span>
//                     <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setIsSubmitted(false)}>
//                       <X className="h-6 w-6 text-green-500 cursor-pointer" />
//                     </span>
//                   </div>
//                 )}
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <Input
//                       type="text"
//                       name="name"
//                       placeholder="Your Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="py-2 px-4 border border-gray-300 rounded-md w-full font-inter"
//                     />
//                     {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                   </div>
//                   <div>
//                     <Input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="py-2 px-4 border border-gray-300 rounded-md w-full font-inter"
//                     />
//                     {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                   </div>
//                   <div>
//                     <Input
//                       type="text"
//                       name="subject"
//                       placeholder="Subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       className="py-2 px-4 border border-gray-300 rounded-md w-full font-inter"
//                     />
//                     {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
//                   </div>
//                   <div>
//                     <Textarea
//                       name="message"
//                       placeholder="Your Message"
//                       rows={5}
//                       value={formData.message}
//                       onChange={handleChange}
//                       className="py-2 px-4 border border-gray-300 rounded-md w-full font-inter"
//                     />
//                     {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
//                   </div>
//                   <Button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-medium transition-all duration-300 hover:scale-105 font-inter shadow-md"
//                   >
//                     <Send className="h-5 w-5 mr-2" /> Send Message
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>

//             {/* Contact Information */}
//             <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
//               <Card className="p-6 shadow-lg rounded-xl bg-gradient-to-br from-white to-purple-50 border-0">
//                 <CardContent className="flex items-center space-x-4 pt-0">
//                   <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center shadow-md">
//                     <Mail className="h-8 w-8 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-900 font-playfair">Email Us</h3>
//                     <p className="text-gray-700 font-inter">
//                       <a href="mailto:info@nyventure.com" className="hover:underline text-blue-600">
//                         info@nyventure.com
//                       </a>
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="p-6 shadow-lg rounded-xl bg-gradient-to-br from-white to-green-50 border-0">
//                 <CardContent className="flex items-center space-x-4 pt-0">
//                   <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center shadow-md">
//                     <Phone className="h-8 w-8 text-purple-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-900 font-playfair">Call Us</h3>
//                     <p className="text-gray-700 font-inter">
//                       <a href="tel:+1234567890" className="hover:underline text-purple-600">
//                         +1 (234) 567-890
//                       </a>
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="p-6 shadow-lg rounded-xl bg-gradient-to-br from-white to-red-50 border-0">
//                 <CardContent className="flex items-center space-x-4 pt-0">
//                   <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center shadow-md">
//                     <MapPin className="h-8 w-8 text-green-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-900 font-playfair">Our Office</h3>
//                     <p className="text-gray-700 font-inter">
//                       123 Global Trade Center, Business District, New York, NY 10001
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Map Placeholder */}
//               <Card className="p-0 shadow-lg rounded-xl overflow-hidden bg-white border-0">
//                 <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-inter">
//                   <img
//                     src="/placeholder.svg?height=256&width=500"
//                     alt="Map Location"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default Contact
