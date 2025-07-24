
// // // // // const Footer = () => {
// // // // //   return (
// // // // //     <footer className="bg-muted mt-16 animate-fade-in">
// // // // //       <div className="container mx-auto px-4 py-8">
// // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // //           <div className="animate-slide-in-left">
// // // // //             <h3 className="text-xl font-bold text-primary mb-4 font-playfair">NY Ventures</h3>
// // // // //             <p className="text-muted-foreground font-inter leading-relaxed">
// // // // //               Your trusted partner for premium copper articles, bar accessories, handicrafts, 
// // // // //               and home decor items. Quality and craftsmanship in every product.
// // // // //             </p>
// // // // //           </div>
          
// // // // //           <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
// // // // //             <h4 className="font-semibold mb-4 font-playfair">Quick Links</h4>
// // // // //             <ul className="space-y-2">
// // // // //               <li><a href="/" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 inline-block font-inter">Home</a></li>
// // // // //               <li><a href="/products" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 inline-block font-inter">Products</a></li>
// // // // //               <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 inline-block font-inter">Contact</a></li>
// // // // //             </ul>
// // // // //           </div>
          
// // // // //           <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
// // // // //             <h4 className="font-semibold mb-4 font-playfair">Contact Info</h4>
// // // // //             <p className="text-muted-foreground mb-2 font-inter hover:text-primary transition-colors duration-300">Email: info@nyventures.com</p>
// // // // //             <p className="text-muted-foreground font-inter hover:text-primary transition-colors duration-300">Phone: +1 (555) 123-4567</p>
// // // // //           </div>
// // // // //         </div>
        
// // // // //         <div className="border-t border-border mt-8 pt-8 text-center animate-fade-in">
// // // // //           <p className="text-muted-foreground font-inter">
// // // // //             © 2024 NY Ventures. All rights reserved.
// // // // //           </p>
// // // // //         </div>
// // // // //       </div>
// // // // //     </footer>
// // // // //   );
// // // // // };

// // // // // export default Footer;

// // // // import React from 'react'; // Make sure to import React if not already present
// // // // import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

// // // // const Footer = () => {
// // // //   const whatsappNumber = "919650804461"; // Your WhatsApp number with country code
// // // //   const whatsappMessage = "Hello, I'd like to inquire about NY Ventures products."; // Optional pre-filled message

// // // //   return (
// // // //     <footer className="bg-muted mt-16 animate-fade-in">
// // // //       <div className="container mx-auto px-4 py-8">
// // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // //           <div className="animate-slide-in-left">
// // // //             <h3 className="text-xl font-bold text-primary mb-4 font-playfair">NY Ventures</h3>
// // // //             <p className="text-muted-foreground font-inter leading-relaxed">
// // // //               Your trusted partner for premium copper articles, bar accessories, handicrafts,
// // // //               and home decor items. Quality and craftsmanship in every product.
// // // //             </p>
// // // //           </div>

// // // //           <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
// // // //             <h4 className="font-semibold mb-4 font-playfair">Quick Links</h4>
// // // //             <ul className="space-y-2">
// // // //               <li><a href="/" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 inline-block font-inter">Home</a></li>
// // // //               <li><a href="/products" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 inline-block font-inter">Products</a></li>
// // // //               <li><a href="/contact-us" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 inline-block font-inter">Contact</a></li>
// // // //               {/* Note: Changed /contact to /contact-us for consistency with App.tsx */}
// // // //             </ul>
// // // //           </div>

// // // //           <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
// // // //             <h4 className="font-semibold mb-4 font-playfair">Contact Info</h4>
// // // //             <p className="text-muted-foreground mb-2 font-inter hover:text-primary transition-colors duration-300">
// // // //               Email: <a href="mailto:info@nyventures.com" className="hover:underline">info@nyventures.com</a>
// // // //             </p>
// // // //             {/* Added multiple phone numbers */}
// // // //             <p className="text-muted-foreground mb-2 font-inter hover:text-primary transition-colors duration-300">
// // // //               Phone 1: <a href="tel:+15551234567" className="hover:underline">+91 8076322750</a>
// // // //             </p>
// // // //             <p className="text-muted-foreground mb-2 font-inter hover:text-primary transition-colors duration-300">
// // // //               Phone 2: <a href="tel:+15559876543" className="hover:underline">+91 9958597512</a> {/* New Phone Number */}
// // // //             </p>
// // // //             {/* WhatsApp Number Option */}
// // // //             <p className="text-muted-foreground font-inter hover:text-primary transition-colors duration-300 flex items-center">
// // // //               WhatsApp:
// // // //               <a
// // // //                 href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
// // // //                 target="_blank"
// // // //                 rel="noopener noreferrer"
// // // //                 className="ml-2 hover:underline flex items-center"
// // // //               >
// // // //                 <FaWhatsapp className="mr-1 text-green-500" /> +91 9650804461 {/* Displaying number for clarity */}
// // // //               </a>
// // // //             </p>
// // // //           </div>
// // // //         </div>

// // // //         <div className="border-t border-border mt-8 pt-8 text-center animate-fade-in">
// // // //           <p className="text-muted-foreground font-inter">
// // // //             © 2024 NY Ventures. All rights reserved.
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     </footer>
// // // //   );
// // // // };

// // // // export default Footer;

// // // import React from 'react';
// // // import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'; // Import FaPhoneAlt icon

// // // const Footer = () => {
// // //   const whatsappNumber = "919650804461"; // Your WhatsApp number with country code
// // //   const whatsappMessage = "Hello, I'd like to inquire about NY Ventures products."; // Optional pre-filled message

// // //   return (
// // //     <footer className="bg-muted mt-16 animate-fade-in">
// // //       <div className="container mx-auto px-4 py-8">
// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //           <div className="animate-slide-in-left">
// // //             <h3 className="text-xl font-bold text-primary mb-4 font-playfair">NY Ventures</h3>
// // //             <p className="text-muted-foreground font-inter leading-relaxed">
// // //               Your trusted partner for premium copper articles, bar accessories, handicrafts,
// // //               and home decor items. Quality and craftsmanship in every product.
// // //             </p>
// // //           </div>

// // //           <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
// // //             <h4 className="font-semibold mb-4 font-playfair">Quick Links</h4>
// // //             <ul className="space-y-2">
// // //               <li><a href="/" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 inline-block font-inter">Home</a></li>
// // //               <li><a href="/products" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 inline-block font-inter">Products</a></li>
// // //               <li><a href="/contact-us" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 inline-block font-inter">Contact</a></li>
// // //             </ul>
// // //           </div>

// // //           <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
// // //             <h4 className="font-semibold mb-4 font-playfair">Contact Info</h4>
// // //             <p className="text-muted-foreground mb-2 font-inter hover:text-primary transition-colors duration-300">
// // //               Email: <a href="mailto:info@nyventures.com" className="hover:underline">info@nyventures.com</a>
// // //             </p>
// // //             {/* Replaced "Phone 1:" with FaPhoneAlt icon */}
// // //             <p className="text-muted-foreground mb-2 font-inter hover:text-primary transition-colors duration-300 flex items-center">
// // //               <FaPhoneAlt className="mr-2 text-primary" /> {/* Phone Icon */}
// // //               <a href="tel:+18076322750" className="hover:underline">+91 8076322750</a> {/* Updated number from image_cab699.png */}
// // //             </p>
// // //             {/* Replaced "Phone 2:" with FaPhoneAlt icon */}
// // //             <p className="text-muted-foreground mb-2 font-inter hover:text-primary transition-colors duration-300 flex items-center">
// // //               <FaPhoneAlt className="mr-2 text-primary" /> {/* Phone Icon */}
// // //               <a href="tel:+19958597512" className="hover:underline">+91 9958597512</a> {/* Updated number from image_cab699.png */}
// // //             </p>
// // //             {/* WhatsApp Number Option - already has icon */}
// // //             <p className="text-muted-foreground font-inter hover:text-primary transition-colors duration-300 flex items-center">
// // //               WhatsApp:
// // //               <a
// // //                 href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
// // //                 target="_blank"
// // //                 rel="noopener noreferrer"
// // //                 className="ml-2 hover:underline flex items-center"
// // //               >
// // //                 <FaWhatsapp className="mr-1 text-green-500" /> +91 9650804461
// // //               </a>
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="border-t border-border mt-8 pt-8 text-center animate-fade-in">
// // //           <p className="text-muted-foreground font-inter">
// // //             © 2024 NY Ventures. All rights reserved.
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // };

// // // export default Footer;



// // import React from 'react';
// // import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'; // Import FaPhoneAlt icon

// // const Footer = () => {
// //   const whatsappNumber = "919958597512"; // Your WhatsApp number with country code
// //   const whatsappMessage = "Hello, I'd like to inquire about NY Venture products."; // Optional pre-filled message

// //   return (
// //     <footer className="bg-muted mt-16 animate-fade-in">
// //       <div className="container mx-auto px-4 py-8">
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //           <div className="animate-slide-in-left">
// //             <h3 className="text-xl font-bold text-primary mb-4 font-playfair">NY Ventures</h3>
// //             <p className="text-muted-foreground font-inter leading-relaxed">
// //               Your trusted partner for premium copper articles, bar accessories, handicrafts,
// //               and home decor items. Quality and craftsmanship in every product.
// //             </p>
// //           </div>

// //           <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
// //             <h4 className="font-semibold mb-4 font-playfair">Quick Links</h4>
// //             <ul className="space-y-2">
// //               <li><a href="/" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 inline-block font-inter">Home</a></li>
// //               <li><a href="/products" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 inline-block font-inter">Products</a></li>
// //               <li><a href="/contact-us" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 inline-block font-inter">Contact</a></li>
// //             </ul>
// //           </div>

// //           <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
// //             <h4 className="font-semibold mb-4 font-playfair">Contact Info</h4>
// //             <p className="text-muted-foreground mb-2 font-inter hover:text-primary transition-colors duration-300">
// //               Email: <a href="mailto:info@nyventures.com" className="hover:underline">info@nyventures.com</a>
// //             </p>
// //             <p className="text-muted-foreground mb-2 font-inter hover:text-primary transition-colors duration-300 flex items-center">
// //               <FaPhoneAlt className="mr-2 text-primary" /> {/* Phone Icon */}
// //               <a href="tel:+18076322750" className="hover:underline">+91 8076322750</a>
// //             </p>
// //             <p className="text-muted-foreground mb-2 font-inter hover:text-primary transition-colors duration-300 flex items-center">
// //               <FaPhoneAlt className="mr-2 text-primary" /> {/* Phone Icon */}
// //               <a href="tel:+19958597512" className="hover:underline">+91 9958597512</a>
// //             </p>
// //             {/* Modified: Removed "WhatsApp:" text, adjusted spacing */}
// //             <p className="text-muted-foreground font-inter hover:text-primary transition-colors duration-300 flex items-center">
// //               <a
// //                 href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="flex items-center hover:underline" // Ensure flex for icon/text alignment
// //               >
// //                 <FaWhatsapp className="mr-2 text-green-500" /> {/* WhatsApp Icon with margin-right */}
// //                 +91 9958597512
// //               </a>
// //             </p>
// //           </div>
// //         </div>

// //         <div className="border-t border-border mt-8 pt-8 text-center animate-fade-in">
// //           <p className="text-muted-foreground font-inter">
// //             © 2024 NY Ventures. All rights reserved.
// //           </p>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;



// import type React from "react"
// import { Link } from "react-router-dom"
// import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react"

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-12 font-inter">
//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Company Info */}
//         <div className="space-y-4">
//           <h3 className="text-2xl font-bold text-white font-playfair">NY Venture</h3>
//           <p className="text-gray-400 text-sm leading-relaxed">
//             Your trusted partner for premium copper articles and sustainable biodegradable products. Committed to
//             quality and customer satisfaction.
//           </p>
//           <div className="flex space-x-4 mt-4">
//             <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//               <Facebook className="h-6 w-6" />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//               <Instagram className="h-6 w-6" />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//               <Twitter className="h-6 w-6" />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
//               <Linkedin className="h-6 w-6" />
//             </a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold text-white mb-4 font-playfair">Quick Links</h3>
//           <ul className="space-y-2">
//             <li>
//               <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/products" className="text-gray-400 hover:text-white transition-colors duration-300">
//                 Products
//               </Link>
//             </li>
//             <li>
//               <Link to="/about-us" className="text-gray-400 hover:text-white transition-colors duration-300">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact-us" className="text-gray-400 hover:text-white transition-colors duration-300">
//                 Contact Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/inquiry-cart" className="text-gray-400 hover:text-white transition-colors duration-300">
//                 Inquiry Cart
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Categories */}
//         <div>
//           <h3 className="text-xl font-semibold text-white mb-4 font-playfair">Categories</h3>
//           <ul className="space-y-2">
//             <li>
//               <Link
//                 to="/category/copper-items"
//                 className="text-gray-400 hover:text-white transition-colors duration-300"
//               >
//                 Copper Items
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/category/bar-accessories"
//                 className="text-gray-400 hover:text-white transition-colors duration-300"
//               >
//                 Bar Accessories
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/category/bagas-disposables"
//                 className="text-gray-400 hover:text-white transition-colors duration-300"
//               >
//                 Bagas Disposables
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-xl font-semibold text-white mb-4 font-playfair">Contact Us</h3>
//           <address className="not-italic space-y-2">
//             <p className="flex items-center text-gray-400">
//               <Mail className="h-5 w-5 mr-2 text-blue-400" />
//               <a href="mailto:info@nyventure.com" className="hover:text-white">
//                 info@nyventure.com
//               </a>
//             </p>
//             <p className="flex items-center text-gray-400">
//               <Phone className="h-5 w-5 mr-2 text-green-400" />
//               <a href="tel:+1234567890" className="hover:text-white">
//                 +1 (234) 567-890
//               </a>
//             </p>
//             <p className="text-gray-400 leading-relaxed">
//               123 Global Trade Center,
//               <br />
//               Business District,
//               <br />
//               New York, NY 10001
//             </p>
//           </address>
//         </div>
//       </div>

//       <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
//         &copy; {new Date().getFullYear()} NY Venture. All rights reserved.
//       </div>
//     </footer>
//   )
// }

// export default Footer




import type React from "react"
import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react"

const Footer: React.FC = () => {
  return (
    // Changed font-inter to font-roboto
    <footer className="bg-gray-900 text-gray-300 py-12 font-roboto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white font-roboto">NY Venture</h3>
          <p className="text-gray-400 text-sm leading-relaxed font-roboto">
            Your trusted partner for premium copper articles and sustainable biodegradable products. Committed to
            quality and customer satisfaction.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 font-roboto">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300 font-roboto">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-400 hover:text-white transition-colors duration-300 font-roboto">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="text-gray-400 hover:text-white transition-colors duration-300 font-roboto">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="text-gray-400 hover:text-white transition-colors duration-300 font-roboto">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/inquiry-cart" className="text-gray-400 hover:text-white transition-colors duration-300 font-roboto">
                Inquiry Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 font-roboto">Categories</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/category/copper-items"
                className="text-gray-400 hover:text-white transition-colors duration-300 font-roboto"
              >
                Copper Items
              </Link>
            </li>
            <li>
              <Link
                to="/category/bar-accessories"
                className="text-gray-400 hover:text-white transition-colors duration-300 font-roboto"
              >
                Bar Accessories
              </Link>
            </li>
            <li>
              <Link
                to="/category/bagas-disposables"
                className="text-gray-400 hover:text-white transition-colors duration-300 font-roboto"
              >
                Bagas Disposables
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 font-roboto">Contact Us</h3>
          <address className="not-italic space-y-2">
            <p className="flex items-center text-gray-400 font-roboto">
              <Mail className="h-5 w-5 mr-2 text-blue-400" />
              <a href="mailto:info@nyventure.com" className="hover:text-white">
                info@nyventure.com
              </a>
            </p>
            <p className="flex items-center text-gray-400 font-roboto">
              <Phone className="h-5 w-5 mr-2 text-green-400" />
              <a href="tel:+1234567890" className="hover:text-white">
                +1 (234) 567-890
              </a>
            </p>
            <p className="text-gray-400 leading-relaxed font-roboto">
              123 Global Trade Center,
              <br />
              Business District,
              <br />
              New York, NY 10001
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm font-roboto">
        &copy; {new Date().getFullYear()} NY Venture. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;