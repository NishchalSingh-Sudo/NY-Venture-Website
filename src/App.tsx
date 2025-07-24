// // // // // // src/App.tsx
// // // // // import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// // // // // import React from 'react';

// // // // // // Import your pages with consistent naming and correct paths based on your file system
// // // // // import Index from "./pages/Index.tsx";
// // // // // import Products from "./pages/Products.tsx";
// // // // // import ProductDetailsPage from "./pages/ProductDetailsPage.tsx";
// // // // // import About from "./pages/About.tsx";
// // // // // import Contact from "./pages/Contact.tsx";
// // // // // import CartContent from "./pages/CartContent.tsx";
// // // // // import QuoteRequestPage from "./pages/QuoteRequestPage.tsx";
// // // // // import CategoryPage from "./pages/CategoryPage.tsx"; // This page will now handle both categories and subcategories

// // // // // // IMPORT THE CART PROVIDER FROM THE CORRECT FILE
// // // // // import { CartProvider } from "./context/CartContext.tsx";

// // // // // // Define your router
// // // // // const router = createBrowserRouter([
// // // // //   {
// // // // //     path: "/",
// // // // //     element: (
// // // // //       <CartProvider>
// // // // //         <Outlet />
// // // // //       </CartProvider>
// // // // //     ),
// // // // //     children: [
// // // // //       {
// // // // //         index: true, // This makes the Index page the default for "/"
// // // // //         element: <Index />,
// // // // //       },
// // // // //       {
// // // // //         path: "products", // Route for the main products landing page
// // // // //         element: <Products />,
// // // // //       },
// // // // //       {
// // // // //         path: "products/:categorySlug", // Route for category-specific products (e.g., /products/copper-items)
// // // // //         element: <CategoryPage />,
// // // // //       },
// // // // //       // NEW ROUTE: To handle subcategories (e.g., /products/copper-items/copper-bottles)
// // // // //       {
// // // // //         path: "products/:categorySlug/:subCategorySlug", // Changed parameter name to subCategorySlug
// // // // //         element: <CategoryPage />,
// // // // //       },
// // // // //       {
// // // // //         path: "product-details/:id", // Route for individual product details
// // // // //         element: <ProductDetailsPage />,
// // // // //       },
// // // // //       {
// // // // //         path: "about-us", // Consistent path with your About.tsx file
// // // // //         element: <About />,
// // // // //       },
// // // // //       {
// // // // //         path: "contact-us", // Consistent path with your Contact.tsx file
// // // // //         element: <Contact />,
// // // // //       },
// // // // //       {
// // // // //         path: "cart", // Route for the inquiry cart page
// // // // //         element: <CartContent />,
// // // // //       },
// // // // //       {
// // // // //         path: "request-quote", // Route for the quote request page
// // // // //         element: <QuoteRequestPage />,
// // // // //       },
// // // // //     ],
// // // // //   },
// // // // // ]);

// // // // // function App() {
// // // // //   return (
// // // // //     <RouterProvider router={router} />
// // // // //   );
// // // // // }

// // // // // export default App;



// // src/App.tsx
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import React from 'react';

// // Import your pages with consistent naming and correct paths based on your file system
// import Index from "./pages/Index.tsx";
// import Products from "./pages/Products.tsx";
// import ProductDetailsPage from "./pages/ProductDetailsPage.tsx";
// import About from "./pages/About.tsx";
// import Contact from "./pages/Contact.tsx";
// import CartContent from "./pages/CartContent.tsx";
// import QuoteRequestPage from "./pages/QuoteRequestPage.tsx";
// import CategoryPage from "./pages/CategoryPage.tsx";

// // IMPORT THE CART PROVIDER FROM THE CORRECT FILE
// import { CartProvider } from "./context/CartContext.tsx";

// // Import the WhatsAppButton component
// import WhatsAppButton from './components/WhatsAppButton.tsx'; // Ensure this path is correct

// // Define your router
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <CartProvider>
//         {/* The Outlet renders the matched child route component */}
//         <Outlet />
//         {/* WhatsAppButton will be fixed on all pages rendered by this router */}
//         {/* IMPORTANT: Replace "YOUR_PHONE_NUMBER_WITH_COUNTRY_CODE" with your actual number */}
//         <WhatsAppButton phoneNumber="919315664012" message="Hello, I have an inquiry about your products." />
//       </CartProvider>
//     ),
//     children: [
//       {
//         index: true,
//         element: <Index />,
//       },
//       {
//         path: "products",
//         element: <Products />,
//       },
//       {
//         path: "products/:categorySlug",
//         element: <CategoryPage />,
//       },
//       {
//         path: "products/:categorySlug/:subCategorySlug",
//         element: <CategoryPage />,
//       },
//       {
//         path: "product-details/:id",
//         element: <ProductDetailsPage />,
//       },
//       {
//         path: "about-us",
//         element: <About />,
//       },
//       {
//         path: "contact-us",
//         element: <Contact />,
//       },
//       {
//         path: "cart",
//         element: <CartContent />,
//       },
//       {
//         path: "request-quote",
//         element: <QuoteRequestPage />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App;



// src/App.tsx
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React from 'react';

// Import your pages with consistent naming and correct paths based on your file system
import Index from "./pages/Index.tsx";
import Products from "./pages/Products.tsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import CartContent from "./pages/CartContent.tsx";
import QuoteRequestPage from "./pages/QuoteRequestPage.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";

// IMPORT THE CART PROVIDER FROM THE CORRECT FILE
import { CartProvider } from "./context/CartContext.tsx";

// Import the WhatsAppButton component
import WhatsAppButton from './components/WhatsAppButton.tsx'; // Ensure this path is correct

// Define your router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider>
        {/* The Outlet renders the matched child route component */}
        <Outlet />
        {/* WhatsAppButton will be fixed on all pages rendered by this router */}
        {/* IMPORTANT: Replace "YOUR_PHONE_NUMBER_WITH_COUNTRY_CODE" with your actual number */}
        <WhatsAppButton phoneNumber="919315664012" message="Hello, I have an inquiry about your products." />
      </CartProvider>
    ),
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:categorySlug",
        element: <CategoryPage />,
      },
      {
        path: "products/:categorySlug/:subCategorySlug",
        element: <CategoryPage />,
      },
      {
        // THIS IS THE CORRECTED ROUTE PATH
        path: "product/:id", // Changed from "product-details/:id" to "product/:id"
        element: <ProductDetailsPage />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <CartContent />,
      },
      {
        path: "request-quote",
        element: <QuoteRequestPage />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;



// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// // // import Index from "./pages/Index"
// // // import Products from "./pages/Products"
// // // import CategoryPage from "./pages/CategoryPage"
// // // import ProductDetailsPage from "./pages/ProductDetailsPage"
// // // import About from "./pages/About"
// // // import Contact from "./pages/Contact"
// // // import NotFound from "./pages/NotFound"
// // // import CartContent from "./pages/CartContent" // Import the new CartContent
// // // import { CartProvider } from "./context/CartContext" // Import CartProvider
// // // import { Toaster } from "./components/ui/toaster" // Assuming you have a Toaster component

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <CartProvider>
// // //         {" "}
// // //         {/* Wrap the entire application with CartProvider */}
// // //         <Routes>
// // //           <Route path="/" element={<Index />} />
// // //           <Route path="/products" element={<Products />} />
// // //           <Route path="/category/:categorySlug" element={<CategoryPage />} /> {/* Dynamic category route */}
// // //           <Route path="/product-details/:id" element={<ProductDetailsPage />} />
// // //           <Route path="/about-us" element={<About />} />
// // //           <Route path="/contact-us" element={<Contact />} />
// // //           <Route path="/inquiry-cart" element={<CartContent />} /> {/* New cart route */}
// // //           <Route path="*" element={<NotFound />} />
// // //         </Routes>
// // //         <Toaster /> {/* Place Toaster at the root for global toasts */}
// // //       </CartProvider>
// // //     </Router>
// // //   )
// // // }

// // // export default App



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Index from "./pages/Index"
// import Products from "./pages/Products"
// import CategoryPage from "./pages/CategoryPage"
// import ProductDetailsPage from "./pages/ProductDetailsPage"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import NotFound from "./pages/NotFound"
// import CartContent from "./pages/CartContent"
// // FIX: Added import for AllProductsPage
// import AllProductsPage from "./pages/AllProductsPage" // Assuming this file exists in src/pages/

// import { CartProvider } from "./context/CartContext"
// // Assuming WhatsAppButton is not needed globally based on its removal from the latest App.tsx

// function App() {
//   return (
//     <Router>
//       <CartProvider>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/products" element={<Products />} />
//           {/* FIX: Changed /category/ to /products/ for consistency with Navbar and added subcategory route */}
//           <Route path="/products/:categorySlug" element={<CategoryPage />} />
//           <Route path="/products/:categorySlug/:subCategorySlug" element={<CategoryPage />} />
//           {/* FIX: Changed :productId to :id to match ProductDetailsPage's useParams */}
//           <Route path="/product-details/:id" element={<ProductDetailsPage />} />
//           <Route path="/about-us" element={<About />} />
//           <Route path="/contact-us" element={<Contact />} />
//           <Route path="/inquiry-cart" element={<CartContent />} />
//           <Route path="/all-products" element={<AllProductsPage />} /> {/* New route for all products */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </CartProvider>
//     </Router>
//   )
// }

// export default App






// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"
// import Index from "./pages/Index"
// import Products from "./pages/Products"
// import CategoryPage from "./pages/CategoryPage"
// import ProductDetailsPage from "./pages/ProductDetailsPage"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import NotFound from "./pages/NotFound"
// import { CartProvider } from "./context/CartContext"
// import CartContent from "./pages/CartContent"
// import { Toaster } from "@/components/ui/toaster"

// function App() {
//   return (
//     <Router>
//       <CartProvider>
//         <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 text-gray-100">
//           <Navbar />
//           <main className="flex-grow pt-20">
//             {" "}
//             {/* Added padding-top to account for fixed navbar */}
//             <Routes>
//               <Route path="/" element={<Index />} />
//               <Route path="/products" element={<Products />} />
//               <Route path="/products/:categoryName" element={<CategoryPage />} />
//               <Route path="/products/:categoryName/:subCategoryName" element={<CategoryPage />} />
//               <Route path="/product/:productId" element={<ProductDetailsPage />} />
//               <Route path="/about-us" element={<About />} />
//               <Route path="/contact-us" element={<Contact />} />
//               <Route path="/inquiry-cart" element={<CartContent />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </main>
//           <Footer />
//           <Toaster />
//         </div>
//       </CartProvider>
//     </Router>
//   )
// }

// export default App


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"
// import Index from "./pages/Index"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import NotFound from "./pages/NotFound"
// import CategoryPage from "./pages/CategoryPage"
// import ProductDetailsPage from "./pages/ProductDetailsPage"
// import Products from "./pages/Products"
// import { CartProvider } from "./context/CartContext"
// import CartContent from "./pages/CartContent"

// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-inter">
//           <Navbar />
//           <main className="flex-grow pt-20">
//             {" "}
//             {/* Added padding-top to account for fixed navbar */}
//             <Routes>
//               <Route path="/" element={<Index />} />
//               <Route path="/about-us" element={<About />} />
//               <Route path="/contact-us" element={<Contact />} />
//               <Route path="/products" element={<Products />} />
//               <Route path="/products/:categorySlug" element={<CategoryPage />} />
//               <Route path="/products/:categorySlug/:subCategorySlug" element={<CategoryPage />} />
//               <Route path="/product/:productId" element={<ProductDetailsPage />} />
//               <Route path="/inquiry-cart" element={<CartContent />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </Router>
//     </CartProvider>
//   )
// }

// export default App
