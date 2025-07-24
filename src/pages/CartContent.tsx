// src/pages/CartContent.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/table';
import { useCart } from '../context/CartContext';

const CartContent: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, itemCount } = useCart();

  // State for confirmation modal
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemToRemoveId, setItemToRemoveId] = useState<string | null>(null);
  const [itemToRemoveTitle, setItemToRemoveTitle] = useState<string | null>(null);

  // Function to open the confirmation modal
  const handleRemoveClick = (itemId: string, itemTitle: string) => {
    setItemToRemoveId(itemId);
    setItemToRemoveTitle(itemTitle);
    setShowConfirmation(true);
  };

  // Function to confirm removal
  const confirmRemove = () => {
    if (itemToRemoveId) {
      removeFromCart(itemToRemoveId);
    }
    setShowConfirmation(false);
    setItemToRemoveId(null);
    setItemToRemoveTitle(null);
  };

  // Function to cancel removal
  const cancelRemove = () => {
    setShowConfirmation(false);
    setItemToRemoveId(null);
    setItemToRemoveTitle(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-roboto flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 pt-32 py-16">
        {/* MODIFIED: Removed (itemCount} items) */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-10 text-center font-roboto">
          Inquiry Cart
        </h1>

        {cartItems.length === 0 ? (
          <Card className="p-8 text-center shadow-lg rounded-xl max-w-2xl mx-auto bg-white">
            <CardContent className="pt-6">
              <p className="text-xl text-gray-600 mb-6 font-roboto">Your inquiry cart is empty.</p>
              <Link to="/products">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 text-lg font-roboto">
                  Continue Shopping
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <Card className="p-6 shadow-lg rounded-xl bg-white">
                <CardContent className="pt-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px] font-roboto">Product</TableHead>
                        <TableHead className="font-roboto">Name</TableHead>
                        <TableHead className="text-center font-roboto">Quantity</TableHead>
                        <TableHead className="text-right font-roboto">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cartItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-20 h-20 object-cover rounded-md"
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                            <Link to={`/product-details/${item.id}`} className="text-blue-700 hover:underline font-roboto">
                              {item.title}
                            </Link>
                          </TableCell>
                          <TableCell className="text-center">
                            <Input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => {
                                const newQuantity = parseInt(e.target.value, 10);
                                if (!isNaN(newQuantity) && newQuantity > 0) {
                                  updateQuantity(item.id, newQuantity);
                                } else if (e.target.value === '') {
                                  updateQuantity(item.id, 0);
                                }
                              }}
                              onBlur={(e) => {
                                if (parseInt(e.target.value, 10) === 0 || isNaN(parseInt(e.target.value, 10))) {
                                  updateQuantity(item.id, 1);
                                }
                              }}
                              className="w-24 text-center"
                            />
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleRemoveClick(item.id, item.title)}
                              className="font-roboto"
                            >
                              Remove
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            <div className="lg:w-1/3">
              <Card className="p-6 shadow-lg rounded-xl bg-white sticky top-20">
                <CardContent className="pt-0">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 font-roboto">Cart Summary</h2>
                  <div className="flex justify-between items-center mb-4 text-xl font-roboto">
                    <span className="text-gray-700">Total Items:</span>
                    <span className="font-semibold text-gray-900">{itemCount}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6 font-roboto">
                    (Note: Prices will be provided upon inquiry.)
                  </p>
                  <Button
                    onClick={clearCart}
                    variant="outline"
                    className="w-full mb-4 border-gray-300 text-gray-700 hover:bg-gray-100 font-roboto"
                  >
                    Clear Cart
                  </Button>
                  <Link to="/request-quote">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md font-roboto"
                    >
                      Request a Quote
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="p-8 max-w-md w-full text-center shadow-lg rounded-xl bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4 font-roboto">Confirm Removal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 mb-6 font-roboto">
                Are you sure you want to remove "{itemToRemoveTitle}" from your cart?
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="destructive" onClick={confirmRemove} className="font-roboto">
                  Yes, Remove
                </Button>
                <Button variant="outline" onClick={cancelRemove} className="font-roboto">
                  No, Keep
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CartContent;




// // src/pages/CartContent.tsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { Button } from '../components/ui/button';
// import { Input } from '../components/ui/input';
// import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
// import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/table';
// import { useCart } from '../context/CartContext';

// const CartContent: React.FC = () => {
//   const { cartItems, updateQuantity, removeFromCart, clearCart, itemCount } = useCart();

//   // State for confirmation modal
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [itemToRemoveId, setItemToRemoveId] = useState<string | null>(null);
//   const [itemToRemoveTitle, setItemToRemoveTitle] = useState<string | null>(null);

//   // Function to open the confirmation modal
//   const handleRemoveClick = (itemId: string, itemTitle: string) => {
//     setItemToRemoveId(itemId);
//     setItemToRemoveTitle(itemTitle);
//     setShowConfirmation(true);
//   };

//   // Function to confirm removal
//   const confirmRemove = () => {
//     if (itemToRemoveId) {
//       removeFromCart(itemToRemoveId);
//     }
//     setShowConfirmation(false);
//     setItemToRemoveId(null);
//     setItemToRemoveTitle(null);
//   };

//   // Function to cancel removal
//   const cancelRemove = () => {
//     setShowConfirmation(false);
//     setItemToRemoveId(null);
//     setItemToRemoveTitle(null);
//   };

//   // NEW: Optimized handleQuantityChange for Input
//   const handleQuantityChange = (itemId: string, e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     // Allow empty string temporarily for typing
//     if (value === '') {
//       updateQuantity(itemId, 0); // Temporarily set to 0, will be corrected on blur
//       return;
//     }

//     const newQuantity = parseInt(value, 10);

//     // Update only if it's a valid number and greater than or equal to 0
//     if (!isNaN(newQuantity) && newQuantity >= 0) {
//       updateQuantity(itemId, newQuantity);
//     }
//     // If not a number or negative, do nothing on change to prevent immediate errors
//   };

//   // NEW: Optimized handleQuantityBlur to enforce minimum of 1
//   const handleQuantityBlur = (itemId: string, e: React.FocusEvent<HTMLInputElement>) => {
//     const newQuantity = parseInt(e.target.value, 10);
//     // If quantity is 0, NaN, or less than 1, set it back to 1
//     if (isNaN(newQuantity) || newQuantity < 1) {
//       updateQuantity(itemId, 1);
//     }
//   };


//   return (
//     <div className="min-h-screen bg-gray-50 font-roboto flex flex-col">
//       <Navbar />

//       <main className="flex-grow container mx-auto px-4 pt-32 py-16">
//         <h1 className="text-5xl font-extrabold text-gray-900 mb-10 text-center font-roboto">
//           Inquiry Cart
//         </h1>

//         {cartItems.length === 0 ? (
//           <Card className="p-8 text-center shadow-lg rounded-xl max-w-2xl mx-auto bg-white">
//             <CardContent className="pt-6">
//               <p className="text-xl text-gray-600 mb-6 font-roboto">Your inquiry cart is empty.</p>
//               <Link to="/products">
//                 <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 text-lg font-roboto">
//                   Continue Shopping
//                 </Button>
//               </Link>
//             </CardContent>
//           </Card>
//         ) : (
//           <div className="flex flex-col lg:flex-row gap-8">
//             <div className="lg:w-2/3">
//               <Card className="p-6 shadow-lg rounded-xl bg-white">
//                 <CardContent className="pt-0">
//                   <Table>
//                     <TableHeader>
//                       <TableRow>
//                         <TableHead className="w-[100px] font-roboto">Product</TableHead>
//                         <TableHead className="font-roboto">Name</TableHead>
//                         <TableHead className="text-center font-roboto">Quantity</TableHead>
//                         <TableHead className="text-right font-roboto">Actions</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {cartItems.map((item) => (
//                         <TableRow key={item.id}>
//                           <TableCell>
//                             <img
//                               src={item.image}
//                               alt={item.title}
//                               className="w-20 h-20 object-cover rounded-md"
//                             />
//                           </TableCell>
//                           <TableCell className="font-medium">
//                             <Link to={`/product-details/${item.id}`} className="text-blue-700 hover:underline font-roboto">
//                               {item.title}
//                             </Link>
//                           </TableCell>
//                           <TableCell className="text-center">
//                             <Input
//                               type="number"
//                               min="1"
//                               value={item.quantity === 0 ? '' : item.quantity} // Display empty if quantity is 0 (during typing)
//                               onChange={(e) => handleQuantityChange(item.id, e)} // Use new handler
//                               onBlur={(e) => handleQuantityBlur(item.id, e)}     // Use new handler
//                               className="w-24 text-center"
//                             />
//                           </TableCell>
//                           <TableCell className="text-right">
//                             <Button
//                               variant="destructive"
//                               size="sm"
//                               onClick={() => handleRemoveClick(item.id, item.title)}
//                               className="font-roboto"
//                             >
//                               Remove
//                             </Button>
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </CardContent>
//               </Card>
//             </div>

//             <div className="lg:w-1/3">
//               <Card className="p-6 shadow-lg rounded-xl bg-white sticky top-20">
//                 <CardContent className="pt-0">
//                   <h2 className="text-3xl font-bold text-gray-900 mb-6 font-roboto">Cart Summary</h2>
//                   <div className="flex justify-between items-center mb-4 text-xl font-roboto">
//                     <span className="text-gray-700">Total Items:</span>
//                     <span className="font-semibold text-gray-900">{itemCount}</span>
//                   </div>
//                   <p className="text-sm text-gray-500 mb-6 font-roboto">
//                     (Note: Prices will be provided upon inquiry.)
//                   </p>
//                   <Button
//                     onClick={clearCart}
//                     variant="outline"
//                     className="w-full mb-4 border-gray-300 text-gray-700 hover:bg-gray-100 font-roboto"
//                   >
//                     Clear Cart
//                   </Button>
//                   <Link to="/request-quote">
//                     <Button
//                       className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md font-roboto"
//                     >
//                       Request a Quote
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         )}
//       </main>

//       {/* Confirmation Modal */}
//       {showConfirmation && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <Card className="p-8 max-w-md w-full text-center shadow-lg rounded-xl bg-white">
//             <CardHeader>
//               <CardTitle className="text-2xl font-bold text-gray-900 mb-4 font-roboto">Confirm Removal</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-lg text-gray-700 mb-6 font-roboto">
//                 Are you sure you want to remove "{itemToRemoveTitle}" from your cart?
//               </p>
//               <div className="flex justify-center gap-4">
//                 <Button variant="destructive" onClick={confirmRemove} className="font-roboto">
//                   Yes, Remove
//                 </Button>
//                 <Button variant="outline" onClick={cancelRemove} className="font-roboto">
//                   No, Keep
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// };

// export default CartContent;





// "use client"

// // src/pages/CartContent.tsx
// import type React from "react"
// import { useState } from "react"
// import { Link } from "react-router-dom"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import { Button } from "../components/ui/button"
// import { Input } from "../components/ui/input"
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
// import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../components/ui/table"
// import { useCart } from "../context/CartContext"

// const CartContent: React.FC = () => {
//   const { cartItems, updateQuantity, removeFromCart, clearCart, itemCount } = useCart()

//   // State for confirmation modal
//   const [showConfirmation, setShowConfirmation] = useState(false)
//   const [itemToRemoveId, setItemToRemoveId] = useState<string | null>(null)
//   const [itemToRemoveTitle, setItemToRemoveTitle] = useState<string | null>(null)

//   // Function to open the confirmation modal
//   const handleRemoveClick = (itemId: string, itemTitle: string) => {
//     setItemToRemoveId(itemId)
//     setItemToRemoveTitle(itemTitle)
//     setShowConfirmation(true)
//   }

//   // Function to confirm removal
//   const confirmRemove = () => {
//     if (itemToRemoveId) {
//       removeFromCart(itemToRemoveId)
//     }
//     setShowConfirmation(false)
//     setItemToRemoveId(null)
//     setItemToRemoveTitle(null)
//   }

//   // Function to cancel removal
//   const cancelRemove = () => {
//     setShowConfirmation(false)
//     setItemToRemoveId(null)
//     setItemToRemoveTitle(null)
//   }

//   // NEW: Optimized handleQuantityChange for Input
//   const handleQuantityChange = (itemId: string, e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value
//     // Allow empty string temporarily for typing
//     if (value === "") {
//       updateQuantity(itemId, 0) // Temporarily set to 0, will be corrected on blur
//       return
//     }

//     const newQuantity = Number.parseInt(value, 10)

//     // Update only if it's a valid number and greater than or equal to 0
//     if (!isNaN(newQuantity) && newQuantity >= 0) {
//       updateQuantity(itemId, newQuantity)
//     }
//     // If not a number or negative, do nothing on change to prevent immediate errors
//   }

//   // NEW: Optimized handleQuantityBlur to enforce minimum of 1
//   const handleQuantityBlur = (itemId: string, e: React.FocusEvent<HTMLInputElement>) => {
//     const newQuantity = Number.parseInt(e.target.value, 10)
//     // If quantity is 0, NaN, or less than 1, set it back to 1
//     if (isNaN(newQuantity) || newQuantity < 1) {
//       updateQuantity(itemId, 1)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 font-roboto flex flex-col">
//       <Navbar />

//       <main className="flex-grow container mx-auto px-4 pt-32 py-16">
//         <h1 className="text-5xl font-extrabold text-gray-900 mb-10 text-center font-roboto">Inquiry Cart</h1>

//         {cartItems.length === 0 ? (
//           <Card className="p-8 text-center shadow-lg rounded-xl max-w-2xl mx-auto bg-white">
//             <CardContent className="pt-6">
//               <p className="text-xl text-gray-600 mb-6 font-roboto">Your inquiry cart is empty.</p>
//               <Link to="/products">
//                 <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 text-lg font-roboto">
//                   Continue Shopping
//                 </Button>
//               </Link>
//             </CardContent>
//           </Card>
//         ) : (
//           <div className="flex flex-col lg:flex-row gap-8">
//             <div className="lg:w-2/3">
//               <Card className="p-6 shadow-lg rounded-xl bg-white">
//                 <CardContent className="pt-0">
//                   <Table>
//                     <TableHeader>
//                       <TableRow>
//                         <TableHead className="w-[100px] font-roboto">Product</TableHead>
//                         <TableHead className="font-roboto">Name</TableHead>
//                         <TableHead className="text-center font-roboto">Quantity</TableHead>
//                         <TableHead className="text-right font-roboto">Actions</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {cartItems.map((item) => (
//                         <TableRow key={item.id}>
//                           <TableCell>
//                             <img
//                               src={item.image || "/placeholder.svg"}
//                               alt={item.title}
//                               className="w-20 h-20 object-cover rounded-md"
//                             />
//                           </TableCell>
//                           <TableCell className="font-medium">
//                             <Link
//                               to={`/product-details/${item.id}`}
//                               className="text-blue-700 hover:underline font-roboto"
//                             >
//                               {item.title}
//                             </Link>
//                           </TableCell>
//                           <TableCell className="text-center">
//                             <Input
//                               type="number"
//                               min="1"
//                               value={item.quantity === 0 ? "" : item.quantity} // Display empty if quantity is 0 (during typing)
//                               onChange={(e) => handleQuantityChange(item.id, e)} // Use new handler
//                               onBlur={(e) => handleQuantityBlur(item.id, e)} // Use new handler
//                               className="w-24 text-center"
//                             />
//                           </TableCell>
//                           <TableCell className="text-right">
//                             <Button
//                               variant="destructive"
//                               size="sm"
//                               onClick={() => handleRemoveClick(item.id, item.title)}
//                               className="font-roboto"
//                             >
//                               Remove
//                             </Button>
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </CardContent>
//               </Card>
//             </div>

//             <div className="lg:w-1/3">
//               <Card className="p-6 shadow-lg rounded-xl bg-white sticky top-20">
//                 <CardContent className="pt-0">
//                   <h2 className="text-3xl font-bold text-gray-900 mb-6 font-roboto">Cart Summary</h2>
//                   <div className="flex justify-between items-center mb-4 text-xl font-roboto">
//                     <span className="text-gray-700">Total Items:</span>
//                     <span className="font-semibold text-gray-900">{itemCount}</span>
//                   </div>
//                   <p className="text-sm text-gray-500 mb-6 font-roboto">
//                     (Note: Prices will be provided upon inquiry.)
//                   </p>
//                   <Button
//                     onClick={clearCart}
//                     variant="outline"
//                     className="w-full mb-4 border-gray-300 text-gray-700 hover:bg-gray-100 font-roboto bg-transparent"
//                   >
//                     Clear Cart
//                   </Button>
//                   <Link to="/request-quote">
//                     <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md font-roboto">
//                       Request a Quote
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         )}
//       </main>

//       {/* Confirmation Modal */}
//       {showConfirmation && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <Card className="p-8 max-w-md w-full text-center shadow-lg rounded-xl bg-white">
//             <CardHeader>
//               <CardTitle className="text-2xl font-bold text-gray-900 mb-4 font-roboto">Confirm Removal</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-lg text-gray-700 mb-6 font-roboto">
//                 Are you sure you want to remove "{itemToRemoveTitle}" from your cart?
//               </p>
//               <div className="flex justify-center gap-4">
//                 <Button variant="destructive" onClick={confirmRemove} className="font-roboto">
//                   Yes, Remove
//                 </Button>
//                 <Button variant="outline" onClick={cancelRemove} className="font-roboto bg-transparent">
//                   No, Keep
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       )}

//       <Footer />
//     </div>
//   )
// }

// export default CartContent





// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Link } from "react-router-dom"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import { Button } from "../components/ui/button"
// import { Input } from "../components/ui/input"
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
// import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../components/ui/table"
// import { useCart } from "../context/CartContext"

// const CartContent: React.FC = () => {
//   const { cartItems, updateQuantity, removeFromCart, clearCart, itemCount } = useCart()

//   // State for confirmation modal
//   const [showConfirmation, setShowConfirmation] = useState(false)
//   const [itemToRemoveId, setItemToRemoveId] = useState<string | null>(null)
//   const [itemToRemoveTitle, setItemToRemoveTitle] = useState<string | null>(null)

//   // Function to open the confirmation modal
//   const handleRemoveClick = (itemId: string, itemTitle: string) => {
//     setItemToRemoveId(itemId)
//     setItemToRemoveTitle(itemTitle)
//     setShowConfirmation(true)
//   }

//   // Function to confirm removal
//   const confirmRemove = () => {
//     if (itemToRemoveId) {
//       removeFromCart(itemToRemoveId)
//     }
//     setShowConfirmation(false)
//     setItemToRemoveId(null)
//     setItemToRemoveTitle(null)
//   }

//   // Function to cancel removal
//   const cancelRemove = () => {
//     setShowConfirmation(false)
//     setItemToRemoveId(null)
//     setItemToRemoveTitle(null)
//   }

//   // NEW: Optimized handleQuantityChange for Input
//   const handleQuantityChange = (itemId: string, e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value
//     // Allow empty string temporarily for typing
//     if (value === "") {
//       updateQuantity(itemId, 0) // Temporarily set to 0, will be corrected on blur
//       return
//     }

//     const newQuantity = Number.parseInt(value, 10)

//     // Update only if it's a valid number and greater than or equal to 0
//     if (!isNaN(newQuantity) && newQuantity >= 0) {
//       updateQuantity(itemId, newQuantity)
//     }
//     // If not a number or negative, do nothing on change to prevent immediate errors
//   }

//   // NEW: Optimized handleQuantityBlur to enforce minimum of 1
//   const handleQuantityBlur = (itemId: string, e: React.FocusEvent<HTMLInputElement>) => {
//     const newQuantity = Number.parseInt(e.target.value, 10)
//     // If quantity is 0, NaN, or less than 1, set it back to 1
//     if (isNaN(newQuantity) || newQuantity < 1) {
//       updateQuantity(itemId, 1)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 font-roboto flex flex-col">
//       <Navbar />

//       <main className="flex-grow container mx-auto px-4 pt-32 py-16">
//         <h1 className="text-5xl font-extrabold text-gray-900 mb-10 text-center font-roboto">Inquiry Cart</h1>

//         {cartItems.length === 0 ? (
//           <Card className="p-8 text-center shadow-lg rounded-xl max-w-2xl mx-auto bg-white">
//             <CardContent className="pt-6">
//               <p className="text-xl text-gray-600 mb-6 font-roboto">Your inquiry cart is empty.</p>
//               <Link to="/products">
//                 <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 text-lg font-roboto">
//                   Continue Shopping
//                 </Button>
//               </Link>
//             </CardContent>
//           </Card>
//         ) : (
//           <div className="flex flex-col lg:flex-row gap-8">
//             <div className="lg:w-2/3">
//               <Card className="p-6 shadow-lg rounded-xl bg-white">
//                 <CardContent className="pt-0">
//                   <Table>
//                     <TableHeader>
//                       <TableRow>
//                         <TableHead className="w-[100px] font-roboto">Product</TableHead>
//                         <TableHead className="font-roboto">Name</TableHead>
//                         <TableHead className="text-center font-roboto">Quantity</TableHead>
//                         <TableHead className="text-right font-roboto">Actions</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {cartItems.map((item) => (
//                         <TableRow key={item.id}>
//                           <TableCell>
//                             <img
//                               src={item.image || "/placeholder.svg"}
//                               alt={item.title}
//                               className="w-20 h-20 object-cover rounded-md"
//                             />
//                           </TableCell>
//                           <TableCell className="font-medium">
//                             <Link
//                               to={`/product-details/${item.id}`}
//                               className="text-blue-700 hover:underline font-roboto"
//                             >
//                               {item.title}
//                             </Link>
//                           </TableCell>
//                           <TableCell className="text-center">
//                             <Input
//                               type="number"
//                               min="1"
//                               value={item.quantity === 0 ? "" : item.quantity} // Display empty if quantity is 0 (during typing)
//                               onChange={(e) => handleQuantityChange(item.id, e)} // Use new handler
//                               onBlur={(e) => handleQuantityBlur(item.id, e)} // Use new handler
//                               className="w-24 text-center"
//                             />
//                           </TableCell>
//                           <TableCell className="text-right">
//                             <Button
//                               variant="destructive"
//                               size="sm"
//                               onClick={() => handleRemoveClick(item.id, item.title)}
//                               className="font-roboto"
//                             >
//                               Remove
//                             </Button>
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </CardContent>
//               </Card>
//             </div>

//             <div className="lg:w-1/3">
//               <Card className="p-6 shadow-lg rounded-xl bg-white sticky top-20">
//                 <CardContent className="pt-0">
//                   <h2 className="text-3xl font-bold text-gray-900 mb-6 font-roboto">Cart Summary</h2>
//                   <div className="flex justify-between items-center mb-4 text-xl font-roboto">
//                     <span className="text-gray-700">Total Items:</span>
//                     <span className="font-semibold text-gray-900">{itemCount}</span>
//                   </div>
//                   <p className="text-sm text-gray-500 mb-6 font-roboto">
//                     (Note: Prices will be provided upon inquiry.)
//                   </p>
//                   <Button
//                     onClick={clearCart}
//                     variant="outline"
//                     className="w-full mb-4 border-gray-300 text-gray-700 hover:bg-gray-100 font-roboto bg-transparent"
//                   >
//                     Clear Cart
//                   </Button>
//                   <Link to="/request-quote">
//                     <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md font-roboto">
//                       Request a Quote
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         )}
//       </main>

//       {/* Confirmation Modal */}
//       {showConfirmation && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <Card className="p-8 max-w-md w-full text-center shadow-lg rounded-xl bg-white">
//             <CardHeader>
//               <CardTitle className="text-2xl font-bold text-gray-900 mb-4 font-roboto">Confirm Removal</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-lg text-gray-700 mb-6 font-roboto">
//                 Are you sure you want to remove "{itemToRemoveTitle}" from your cart?
//               </p>
//               <div className="flex justify-center gap-4">
//                 <Button variant="destructive" onClick={confirmRemove} className="font-roboto">
//                   Yes, Remove
//                 </Button>
//                 <Button variant="outline" onClick={cancelRemove} className="font-roboto bg-transparent">
//                   No, Keep
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       )}

//       <Footer />
//     </div>
//   )
// }

// export default CartContent
