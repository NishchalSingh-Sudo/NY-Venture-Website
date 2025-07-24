// // import { useLocation } from "react-router-dom";
// // import { useEffect } from "react";

// // const NotFound = () => {
// //   const location = useLocation();

// //   useEffect(() => {
// //     console.error(
// //       "404 Error: User attempted to access non-existent route:",
// //       location.pathname
// //     );
// //   }, [location.pathname]);

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// //       <div className="text-center">
// //         <h1 className="text-4xl font-bold mb-4">404</h1>
// //         <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
// //         <a href="/" className="text-blue-500 hover:text-blue-700 underline">
// //           Return to Home
// //         </a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default NotFound;



// import type React from "react"
// import { Link } from "react-router-dom"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import { Button } from "../components/ui/button"
// import { Frown } from "lucide-react"

// const NotFound: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
//       <Navbar />
//       <main className="flex-grow flex items-center justify-center text-center py-20 px-4">
//         <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-10 rounded-xl shadow-2xl animate-fade-in">
//           <Frown className="h-24 w-24 text-blue-600 mx-auto mb-6 animate-bounce-slow" />
//           <h1 className="text-6xl font-extrabold text-gray-900 mb-4 font-playfair">404</h1>
//           <h2 className="text-3xl font-bold text-gray-800 mb-4 font-playfair">Page Not Found</h2>
//           <p className="text-lg text-gray-600 mb-8 font-inter">
//             Oops! The page you are looking for might have been removed, had its name changed, or is temporarily
//             unavailable.
//           </p>
//           <Button
//             asChild
//             className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-8 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
//           >
//             <Link to="/">Go to Homepage</Link>
//           </Button>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   )
// }

// export default NotFound




import type React from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Button } from "../components/ui/button"
import { Frown } from "lucide-react"

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />
      <main className="flex-grow flex items-center justify-center text-center py-20 px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg animate-fade-in-up">
          <Frown className="h-24 w-24 text-gray-400 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4 font-playfair">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-inter">Page Not Found</h2>
          <p className="text-gray-600 mb-8 font-inter leading-relaxed">
            Oops! The page you are looking for does not exist or has been moved.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 font-inter"
          >
            <Link to="/">Go to Homepage</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default NotFound
