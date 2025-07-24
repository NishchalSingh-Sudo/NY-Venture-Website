// // // // // src/context/CartContext.tsx
// // // // import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// // // // // Define the shape of a single item in the cart
// // // // export interface CartItem {
// // // //   id: string; // Unique identifier for the product
// // // //   title: string;
// // // //   // price: number; // REMOVED: As per your request to remove price
// // // //   image: string; // URL of the product image
// // // //   quantity: number;
// // // // }

// // // // // Define the shape of the CartContext value
// // // // interface CartContextType {
// // // //   cartItems: CartItem[];
// // // //   // addToCart: (product: Omit<CartItem, 'quantity'> & { quantity?: number }) => void; // Original type
// // // //   // Corrected type for addToCart: Omit 'price' from the productToAdd
// // // //   addToCart: (product: Omit<CartItem, 'quantity' | 'price'> & { quantity?: number }) => void;
// // // //   removeFromCart: (productId: string) => void;
// // // //   updateQuantity: (productId: string, newQuantity: number) => void;
// // // //   clearCart: () => void;
// // // //   // cartTotal: number; // REMOVED: As per your request to remove price
// // // //   itemCount: number; // Total number of units in the cart
// // // // }

// // // // // Create the context with a default undefined value
// // // // const CartContext = createContext<CartContextType | undefined>(undefined);

// // // // // Cart Provider Component
// // // // export const CartProvider = ({ children }: { children: ReactNode }) => {
// // // //   // Initialize cart from localStorage, or an empty array if not found
// // // //   const [cartItems, setCartItems] = useState<CartItem[]>(() => {
// // // //     try {
// // // //       const savedCart = localStorage.getItem('shoppingCart');
// // // //       // Ensure that if old cart data with 'price' exists, it's handled gracefully
// // // //       // For now, we'll just parse it as is, but if strict typing issues arise,
// // // //       // you might need a migration step here.
// // // //       return savedCart ? JSON.parse(savedCart) : [];
// // // //     } catch (error) {
// // // //       console.error("Failed to parse cart from localStorage:", error);
// // // //       return []; // Return empty cart if parsing fails
// // // //     }
// // // //   });

// // // //   // Effect to save cart to localStorage whenever it changes
// // // //   useEffect(() => {
// // // //     try {
// // // //       localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
// // // //     } catch (error) {
// // // //       console.error("Failed to save cart to localStorage:", error);
// // // //     }
// // // //   }, [cartItems]);

// // // //   // Add a product to the cart
// // // //   // Updated type to reflect that 'price' is no longer expected
// // // //   const addToCart = (productToAdd: Omit<CartItem, 'quantity' | 'price'> & { quantity?: number }) => {
// // // //     setCartItems((prevItems) => {
// // // //       const existingItem = prevItems.find((item) => item.id === productToAdd.id);
// // // //       const quantityToAdd = productToAdd.quantity && productToAdd.quantity > 0 ? productToAdd.quantity : 1;

// // // //       if (existingItem) {
// // // //         // If item exists, increase quantity
// // // //         return prevItems.map((item) =>
// // // //           item.id === productToAdd.id ? { ...item, quantity: item.quantity + quantityToAdd } : item
// // // //         );
// // // //       } else {
// // // //         // If item is new, add it with the specified quantity or 1
// // // //         // Ensure that 'price' is not included in the new item object
// // // //         const newItem: CartItem = {
// // // //           id: productToAdd.id,
// // // //           title: productToAdd.title,
// // // //           image: productToAdd.image,
// // // //           quantity: quantityToAdd,
// // // //           // price: 0, // No longer adding price, but if you needed a default 0 for some reason, add it here
// // // //         };
// // // //         return [...prevItems, newItem];
// // // //       }
// // // //     });
// // // //   };

// // // //   // Remove a product entirely from the cart
// // // //   const removeFromCart = (productId: string) => {
// // // //     setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
// // // //   };

// // // //   // Update the quantity of a product
// // // //   const updateQuantity = (productId: string, newQuantity: number) => {
// // // //     setCartItems((prevItems) => {
// // // //       if (newQuantity <= 0) {
// // // //         return prevItems.filter(item => item.id !== productId); // Remove if quantity is 0 or less
// // // //       }
// // // //       return prevItems.map((item) =>
// // // //         item.id === productId ? { ...item, quantity: newQuantity } : item
// // // //       );
// // // //     });
// // // //   };

// // // //   // Clear the entire cart
// // // //   const clearCart = () => {
// // // //     setCartItems([]);
// // // //   };

// // // //   // REMOVED: Calculate cart total as price is removed
// // // //   // const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

// // // //   // Calculate total number of units in the cart
// // // //   const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

// // // //   const value = {
// // // //     cartItems,
// // // //     addToCart,
// // // //     removeFromCart,
// // // //     updateQuantity,
// // // //     clearCart,
// // // //     // cartTotal, // REMOVED from context value
// // // //     itemCount,
// // // //   };

// // // //   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// // // // };

// // // // // Custom hook to use the cart context
// // // // export const useCart = () => {
// // // //   const context = useContext(CartContext);
// // // //   if (context === undefined) {
// // // //     throw new Error('useCart must be used within a CartProvider');
// // // //   }
// // // //   return context;
// // // // };



// // // // src/context/CartContext.tsx
// // // import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// // // // Define the shape of a single item in the cart
// // // export interface CartItem {
// // //   id: string; // Unique identifier for the product
// // //   title: string;
// // //   // price: number; // REMOVED: As per your request to remove price
// // //   image: string; // URL of the product image
// // //   quantity: number;
// // // }

// // // // Define the shape of the CartContext value
// // // interface CartContextType {
// // //   cartItems: CartItem[];
// // //   // Corrected type for addToCart: Omit 'price' from the productToAdd
// // //   addToCart: (product: Omit<CartItem, 'quantity' | 'price'> & { quantity?: number }) => void;
// // //   removeFromCart: (productId: string) => void;
// // //   updateQuantity: (productId: string, newQuantity: number) => void;
// // //   clearCart: () => void;
// // //   // cartTotal: number; // REMOVED: As per your request to remove price
// // //   itemCount: number; // Total number of unique items in the cart
// // // }

// // // // Create the context with a default undefined value
// // // const CartContext = createContext<CartContextType | undefined>(undefined);

// // // // Cart Provider Component
// // // export const CartProvider = ({ children }: { children: ReactNode }) => {
// // //   // Initialize cart from localStorage, or an empty array if not found
// // //   const [cartItems, setCartItems] = useState<CartItem[]>(() => {
// // //     try {
// // //       const savedCart = localStorage.getItem('shoppingCart');
// // //       if (savedCart) {
// // //         const parsedCart = JSON.parse(savedCart);
// // //         // Explicitly map parsed items to the CartItem interface.
// // //         // This is crucial to handle cases where old localStorage data
// // //         // might still contain a 'price' property, which is no longer
// // //         // part of the CartItem interface. This mapping effectively
// // //         // filters out any unexpected properties.
// // //         return parsedCart.map((item: any) => ({
// // //           id: item.id,
// // //           title: item.title,
// // //           image: item.image,
// // //           quantity: item.quantity,
// // //         })) as CartItem[]; // Assert to CartItem[] to satisfy TypeScript
// // //       }
// // //       return [];
// // //     } catch (error) {
// // //       console.error("Failed to parse cart from localStorage:", error);
// // //       return []; // Return empty cart if parsing fails
// // //     }
// // //   });

// // //   // Effect to save cart to localStorage whenever it changes
// // //   useEffect(() => {
// // //     try {
// // //       localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
// // //     } catch (error) {
// // //       console.error("Failed to save cart to localStorage:", error);
// // //     }
// // //   }, [cartItems]);

// // //   // Add a product to the cart
// // //   // Updated type to reflect that 'price' is no longer expected
// // //   const addToCart = (productToAdd: Omit<CartItem, 'quantity' | 'price'> & { quantity?: number }) => {
// // //     setCartItems((prevItems) => {
// // //       const existingItem = prevItems.find((item) => item.id === productToAdd.id);
// // //       const quantityToAdd = productToAdd.quantity && productToAdd.quantity > 0 ? productToAdd.quantity : 1;

// // //       if (existingItem) {
// // //         // If item exists, increase quantity
// // //         return prevItems.map((item) =>
// // //           item.id === productToAdd.id ? { ...item, quantity: item.quantity + quantityToAdd } : item
// // //         );
// // //       } else {
// // //         // If item is new, add it with the specified quantity or 1
// // //         // Ensure that 'price' is not included in the new item object
// // //         const newItem: CartItem = {
// // //           id: productToAdd.id,
// // //           title: productToAdd.title,
// // //           image: productToAdd.image,
// // //           quantity: quantityToAdd,
// // //           // price: 0, // No longer adding price, as per your request.
// // //         };
// // //         return [...prevItems, newItem];
// // //       }
// // //     });
// // //   };

// // //   // Remove a product entirely from the cart
// // //   const removeFromCart = (productId: string) => {
// // //     setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
// // //   };

// // //   // Update the quantity of a product
// // //   const updateQuantity = (productId: string, newQuantity: number) => {
// // //     setCartItems((prevItems) => {
// // //       if (newQuantity <= 0) {
// // //         return prevItems.filter(item => item.id !== productId); // Remove if quantity is 0 or less
// // //       }
// // //       return prevItems.map((item) =>
// // //         item.id === productId ? { ...item, quantity: newQuantity } : item
// // //       );
// // //     });
// // //   };

// // //   // Clear the entire cart
// // //   const clearCart = () => {
// // //     setCartItems([]);
// // //   };

// // //   // Calculate total number of unique items in the cart
// // //   // CHANGED: itemCount now reflects the number of unique items, not total quantity
// // //   const itemCount = cartItems.length;

// // //   const value = {
// // //     cartItems,
// // //     addToCart,
// // //     removeFromCart,
// // //     updateQuantity,
// // //     clearCart,
// // //     // cartTotal, // REMOVED from context value
// // //     itemCount,
// // //   };

// // //   // Explicitly wrap children in a React.Fragment to ensure a single child is passed
// // //   // This can sometimes resolve React.Children.only errors when the type system
// // //   // or runtime unexpectedly treats 'children' as an array of multiple elements.
// // //   return (
// // //     <CartContext.Provider value={value}>
// // //       <>{children}</>
// // //     </CartContext.Provider>
// // //   );
// // // };

// // // // Custom hook to use the cart context
// // // export const useCart = () => {
// // //   const context = useContext(CartContext);
// // //   if (context === undefined) {
// // //     throw new Error('useCart must be used within a CartProvider');
// // //   }
// // //   return context;
// // // };




// src/context/CartContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define the shape of a single item in the cart
export interface CartItem {
  id: string; // Unique identifier for the product
  title: string;
  image: string; // URL of the product image
  quantity: number;
}

// Define the shape of the CartContext value
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'> & { quantity?: number }) => void; // Removed 'price' from Omit
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  clearCart: () => void;
  itemCount: number; // Total number of unique items in the cart
}

// Create the context with a default undefined value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider Component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Initialize cart from localStorage, or an empty array if not found
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem('shoppingCart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        return parsedCart.map((item: any) => ({
          id: item.id,
          title: item.title,
          image: item.image,
          quantity: item.quantity,
        })) as CartItem[];
      }
      return [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return [];
    }
  });

  // Effect to save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cartItems]);

  // Add a product to the cart
  const addToCart = (productToAdd: Omit<CartItem, 'quantity'> & { quantity?: number }) => { // Removed 'price' from Omit
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productToAdd.id);
      // Ensure quantityToAdd is at least 1, even if productToAdd.quantity is 0 or undefined
      const quantityToAdd = productToAdd.quantity && productToAdd.quantity >= 1 ? productToAdd.quantity : 1;

      if (existingItem) {
        // If item exists, increase quantity
        return prevItems.map((item) =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + quantityToAdd } : item
        );
      } else {
        // If item is new, add it with the specified quantity or 1
        const newItem: CartItem = {
          id: productToAdd.id,
          title: productToAdd.title,
          image: productToAdd.image,
          quantity: quantityToAdd,
        };
        return [...prevItems, newItem];
      }
    });
  };

  // Remove a product entirely from the cart
  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Update the quantity of a product
  const updateQuantity = (productId: string, newQuantity: number) => {
    setCartItems((prevItems) => {
      // Find the item
      const itemToUpdate = prevItems.find(item => item.id === productId);

      if (!itemToUpdate) {
        return prevItems; // Item not found, return previous state
      }

      // If newQuantity is 0, explicitly remove the item
      if (newQuantity === 0) {
        return prevItems.filter(item => item.id !== productId);
      } 
      // If newQuantity is negative or NaN (which shouldn't happen with the CartContent's blur handler, but as a safeguard)
      // Set it to 1 to ensure quantity is always at least 1.
      else if (isNaN(newQuantity) || newQuantity < 0) { // Defensive check
        return prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: 1 } : item
        );
      }
      // Otherwise, update with the new valid quantity
      else {
        return prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        );
      }
    });
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total number of unique items in the cart
  const itemCount = cartItems.length;

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    itemCount,
  };

  return (
    <CartContext.Provider value={value}>
      <>{children}</>
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};




// "use client"

// // src/context/CartContext.tsx
// import { createContext, useState, useContext, useEffect, type ReactNode } from "react"

// // Define the shape of a single item in the cart
// export interface CartItem {
//   id: string // Unique identifier for the product
//   title: string
//   image: string // URL of the product image
//   quantity: number
// }

// // Define the shape of the CartContext value
// interface CartContextType {
//   cartItems: CartItem[]
//   addToCart: (product: Omit<CartItem, "quantity"> & { quantity?: number }) => void // Removed 'price' from Omit
//   removeFromCart: (productId: string) => void
//   updateQuantity: (productId: string, newQuantity: number) => void
//   clearCart: () => void
//   itemCount: number // Total number of unique items in the cart
// }

// // Create the context with a default undefined value
// const CartContext = createContext<CartContextType | undefined>(undefined)

// // Cart Provider Component
// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   // Initialize cart from localStorage, or an empty array if not found
//   const [cartItems, setCartItems] = useState<CartItem[]>(() => {
//     try {
//       const savedCart = localStorage.getItem("shoppingCart")
//       if (savedCart) {
//         const parsedCart = JSON.parse(savedCart)
//         return parsedCart.map((item: any) => ({
//           id: item.id,
//           title: item.title,
//           image: item.image,
//           quantity: item.quantity,
//         })) as CartItem[]
//       }
//       return []
//     } catch (error) {
//       console.error("Failed to parse cart from localStorage:", error)
//       return []
//     }
//   })

//   // Effect to save cart to localStorage whenever it changes
//   useEffect(() => {
//     try {
//       localStorage.setItem("shoppingCart", JSON.stringify(cartItems))
//     } catch (error) {
//       console.error("Failed to save cart to localStorage:", error)
//     }
//   }, [cartItems])

//   // Add a product to the cart
//   const addToCart = (productToAdd: Omit<CartItem, "quantity"> & { quantity?: number }) => {
//     // Removed 'price' from Omit
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((item) => item.id === productToAdd.id)
//       // Ensure quantityToAdd is at least 1, even if productToAdd.quantity is 0 or undefined
//       const quantityToAdd = productToAdd.quantity && productToAdd.quantity >= 1 ? productToAdd.quantity : 1

//       if (existingItem) {
//         // If item exists, increase quantity
//         return prevItems.map((item) =>
//           item.id === productToAdd.id ? { ...item, quantity: item.quantity + quantityToAdd } : item,
//         )
//       } else {
//         // If item is new, add it with the specified quantity or 1
//         const newItem: CartItem = {
//           id: productToAdd.id,
//           title: productToAdd.title,
//           image: productToAdd.image,
//           quantity: quantityToAdd,
//         }
//         return [...prevItems, newItem]
//       }
//     })
//   }

//   // Remove a product entirely from the cart
//   const removeFromCart = (productId: string) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
//   }

//   // Update the quantity of a product
//   const updateQuantity = (productId: string, newQuantity: number) => {
//     setCartItems((prevItems) => {
//       // Find the item
//       const itemToUpdate = prevItems.find((item) => item.id === productId)

//       if (!itemToUpdate) {
//         return prevItems // Item not found, return previous state
//       }

//       // If newQuantity is 0, explicitly remove the item
//       if (newQuantity === 0) {
//         return prevItems.filter((item) => item.id !== productId)
//       }
//       // If newQuantity is negative or NaN (which shouldn't happen with the CartContent's blur handler, but as a safeguard)
//       // Set it to 1 to ensure quantity is always at least 1.
//       else if (isNaN(newQuantity) || newQuantity < 0) {
//         // Defensive check
//         return prevItems.map((item) => (item.id === productId ? { ...item, quantity: 1 } : item))
//       }
//       // Otherwise, update with the new valid quantity
//       else {
//         return prevItems.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))
//       }
//     })
//   }

//   // Clear the entire cart
//   const clearCart = () => {
//     setCartItems([])
//   }

//   // Calculate total number of unique items in the cart
//   const itemCount = cartItems.length

//   const value = {
//     cartItems,
//     addToCart,
//     removeFromCart,
//     updateQuantity,
//     clearCart,
//     itemCount,
//   }

//   return (
//     <CartContext.Provider value={value}>
//       <>{children}</>
//     </CartContext.Provider>
//   )
// }

// // Custom hook to use the cart context
// export const useCart = () => {
//   const context = useContext(CartContext)
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider")
//   }
//   return context
// }





// "use client"

// import { createContext, useState, useContext, useEffect, type ReactNode } from "react"

// // Define the shape of a single item in the cart
// export interface CartItem {
//   id: string // Unique identifier for the product
//   title: string
//   image: string // URL of the product image
//   quantity: number
// }

// // Define the shape of the CartContext value
// interface CartContextType {
//   cartItems: CartItem[]
//   addToCart: (product: Omit<CartItem, "quantity"> & { quantity?: number }) => void // Removed 'price' from Omit
//   removeFromCart: (productId: string) => void
//   updateQuantity: (productId: string, newQuantity: number) => void
//   clearCart: () => void
//   itemCount: number // Total number of unique items in the cart
// }

// // Create the context with a default undefined value
// const CartContext = createContext<CartContextType | undefined>(undefined)

// // Cart Provider Component
// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   // Initialize cart from localStorage, or an empty array if not found
//   const [cartItems, setCartItems] = useState<CartItem[]>(() => {
//     try {
//       const savedCart = localStorage.getItem("shoppingCart")
//       if (savedCart) {
//         const parsedCart = JSON.parse(savedCart)
//         return parsedCart.map((item: any) => ({
//           id: item.id,
//           title: item.title,
//           image: item.image,
//           quantity: item.quantity,
//         })) as CartItem[]
//       }
//       return []
//     } catch (error) {
//       console.error("Failed to parse cart from localStorage:", error)
//       return []
//     }
//   })

//   // Effect to save cart to localStorage whenever it changes
//   useEffect(() => {
//     try {
//       localStorage.setItem("shoppingCart", JSON.stringify(cartItems))
//     } catch (error) {
//       console.error("Failed to save cart to localStorage:", error)
//     }
//   }, [cartItems])

//   // Add a product to the cart
//   const addToCart = (productToAdd: Omit<CartItem, "quantity"> & { quantity?: number }) => {
//     // Removed 'price' from Omit
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((item) => item.id === productToAdd.id)
//       // Ensure quantityToAdd is at least 1, even if productToAdd.quantity is 0 or undefined
//       const quantityToAdd = productToAdd.quantity && productToAdd.quantity >= 1 ? productToAdd.quantity : 1

//       if (existingItem) {
//         // If item exists, increase quantity
//         return prevItems.map((item) =>
//           item.id === productToAdd.id ? { ...item, quantity: item.quantity + quantityToAdd } : item,
//         )
//       } else {
//         // If item is new, add it with the specified quantity or 1
//         const newItem: CartItem = {
//           id: productToAdd.id,
//           title: productToAdd.title,
//           image: productToAdd.image,
//           quantity: quantityToAdd,
//         }
//         return [...prevItems, newItem]
//       }
//     })
//   }

//   // Remove a product entirely from the cart
//   const removeFromCart = (productId: string) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
//   }

//   // Update the quantity of a product
//   const updateQuantity = (productId: string, newQuantity: number) => {
//     setCartItems((prevItems) => {
//       // Find the item
//       const itemToUpdate = prevItems.find((item) => item.id === productId)

//       if (!itemToUpdate) {
//         return prevItems // Item not found, return previous state
//       }

//       // If newQuantity is 0, explicitly remove the item
//       if (newQuantity === 0) {
//         return prevItems.filter((item) => item.id !== productId)
//       }
//       // If newQuantity is negative or NaN (which shouldn't happen with the CartContent's blur handler, but as a safeguard)
//       // Set it to 1 to ensure quantity is always at least 1.
//       else if (isNaN(newQuantity) || newQuantity < 0) {
//         // Defensive check
//         return prevItems.map((item) => (item.id === productId ? { ...item, quantity: 1 } : item))
//       }
//       // Otherwise, update with the new valid quantity
//       else {
//         return prevItems.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))
//       }
//     })
//   }

//   // Clear the entire cart
//   const clearCart = () => {
//     setCartItems([])
//   }

//   // Calculate total number of unique items in the cart
//   const itemCount = cartItems.length

//   const value = {
//     cartItems,
//     addToCart,
//     removeFromCart,
//     updateQuantity,
//     clearCart,
//     itemCount,
//   }

//   return (
//     <CartContext.Provider value={value}>
//       <>{children}</>
//     </CartContext.Provider>
//   )
// }

// // Custom hook to use the cart context
// export const useCart = () => {
//   const context = useContext(CartContext)
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider")
//   }
//   return context
// }
