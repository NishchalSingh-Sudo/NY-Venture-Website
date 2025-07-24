
// // // // // // // // // // // src/components/Navbar.tsx

// // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // // import { useCart } from '../context/CartContext'; // Import useCart hook

// // // // // // // // // // // Define the interfaces for your navigation items
// // // // // // // // // // interface NestedDropdownItem {
// // // // // // // // // //   name: string;
// // // // // // // // // //   path: string; // Nested items always have a path
// // // // // // // // // // }

// // // // // // // // // // interface DropdownItem {
// // // // // // // // // //   name: string;
// // // // // // // // // //   categorySlug: string;
// // // // // // // // // // }

// // // // // // // // // // interface NavItem {
// // // // // // // // // //   name: string;
// // // // // // // // // //   path: string;
// // // // // // // // // //   isDropdown?: boolean;
// // // // // // // // // //   dropdownItems?: DropdownItem[];
// // // // // // // // // // }

// // // // // // // // // // const Navbar: React.FC = () => {
// // // // // // // // // //   // State to track which main category in the dropdown is currently hovered
// // // // // // // // // //   const [hoveredCategorySlug, setHoveredCategorySlug] = useState<string | null>(null);
// // // // // // // // // //   const { itemCount } = useCart(); // Get itemCount from the cart context

// // // // // // // // // //   // Helper function to slugify names (unchanged, still not strictly used here)
// // // // // // // // // //   const slugify = (text: string) => {
// // // // // // // // // //     return text
// // // // // // // // // //       .toString()
// // // // // // // // // //       .normalize('NFD')
// // // // // // // // // //       .replace(/[\u0300-\u036f]/g, '')
// // // // // // // // // //       .toLowerCase()
// // // // // // // // // //       .trim()
// // // // // // // // // //       .replace(/\s+/g, '-')
// // // // // // // // // //       .replace(/[^-\w]+/g, '');
// // // // // // // // // //   };

// // // // // // // // // //   // Copper subcategories
// // // // // // // // // //   const copperSubCategories: NestedDropdownItem[] = [
// // // // // // // // // //     { name: 'Copper Bottles', path: `/products/copper-items/copper-bottles` },
// // // // // // // // // //     { name: 'Copper Jugs', path: `/products/copper-items/copper-jugs` },
// // // // // // // // // //     { name: 'Copper Jars', path: `/products/copper-items/copper-jars` },
// // // // // // // // // //     { name: 'Copper Matkas', path: `/products/copper-items/copper-matkas` },
// // // // // // // // // //     { name: 'Copper Utensils Set', path: `/products/copper-items/copper-utensils-sets` },
// // // // // // // // // //   ];

// // // // // // // // // //   // Bagas Disposables subcategories
// // // // // // // // // //   const bagasDisposablesSubCategories: NestedDropdownItem[] = [
// // // // // // // // // //     { name: 'Meal Trays', path: `/products/bagas-disposables/meal-trays` },
// // // // // // // // // //     { name: 'Cups', path: `/products/bagas-disposables/cups` },
// // // // // // // // // //     { name: 'Plates', path: `/products/bagas-disposables/plates` },
// // // // // // // // // //     { name: 'Utensils and Straws', path: `/products/bagas-disposables/utensils-straws` },
// // // // // // // // // //   ];


// // // // // // // // // //   // Define the main navigation items
// // // // // // // // // //   const navItems: NavItem[] = [
// // // // // // // // // //     { name: 'Home', path: '/' },
// // // // // // // // // //     {
// // // // // // // // // //       name: 'Products',
// // // // // // // // // //       path: '/products',
// // // // // // // // // //       isDropdown: true,
// // // // // // // // // //       dropdownItems: [
// // // // // // // // // //         { name: 'Bar Accessories', categorySlug: 'bar-accessories' },
// // // // // // // // // //         { name: 'Bagas Disposables', categorySlug: 'bagas-disposables' },
// // // // // // // // // //         { name: 'Copper Items', categorySlug: 'copper-items' },
// // // // // // // // // //         { name: 'Ceramic Items', categorySlug: 'ceramic-items' },
// // // // // // // // // //         { name: 'Terracotta Items', categorySlug: 'terracotta-items' },
// // // // // // // // // //         { name: 'Packaging Material', categorySlug: 'packaging-material' },
// // // // // // // // // //       ],
// // // // // // // // // //     },
// // // // // // // // // //     { name: 'Contact Us', path: '/contact-us' },
// // // // // // // // // //     { name: 'About Us', path: '/about-us' },
// // // // // // // // // //     { name: 'Create', path: '/create' },
// // // // // // // // // //     { name: 'Cart', path: '/cart' },
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <nav
// // // // // // // // // //       className="bg-[rgba(17,24,39,0.8)] text-white fixed top-0 left-0 w-full z-50 py-4 backdrop-blur-sm"
// // // // // // // // // //     >
// // // // // // // // // //       <div className="container mx-auto flex justify-between items-center px-4">
// // // // // // // // // //         {/* Brand Logo/Name */}
// // // // // // // // // //         <Link
// // // // // // // // // //           to="/"
// // // // // // // // // //           className="text-2xl font-bold text-white hover:text-gray-300"
// // // // // // // // // //         >
// // // // // // // // // //           NY Venture
// // // // // // // // // //         </Link>

// // // // // // // // // //         {/* Navigation Links */}
// // // // // // // // // //         <ul className="flex space-x-6 items-center">
// // // // // // // // // //           {navItems.map((item) => (
// // // // // // // // // //             <li key={item.name} className="relative group">
// // // // // // // // // //               {item.isDropdown ? (
// // // // // // // // // //                 <>
// // // // // // // // // //                   <Link
// // // // // // // // // //                     to={item.path}
// // // // // // // // // //                     className="block cursor-pointer px-4 py-2 text-white hover:text-gray-300"
// // // // // // // // // //                   >
// // // // // // // // // //                     {item.name}
// // // // // // // // // //                   </Link>

// // // // // // // // // //                   {/* Main dropdown panel */}
// // // // // // // // // //                   <div
// // // // // // // // // //                     className="absolute left-1/2 -translate-x-1/2 top-full bg-gray-700 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 invisible z-10 p-3 flex"
// // // // // // // // // //                     onMouseLeave={() => setHoveredCategorySlug(null)}
// // // // // // // // // //                   >
// // // // // // // // // //                     {/* First Column: Main Categories */}
// // // // // // // // // //                     <div className="flex flex-col">
// // // // // // // // // //                       <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Categories</h3>
// // // // // // // // // //                       <ul className="space-y-1 min-w-[200px]">
// // // // // // // // // //                         {item.dropdownItems?.map((dropdownItem) => (
// // // // // // // // // //                           <li
// // // // // // // // // //                             key={dropdownItem.name}
// // // // // // // // // //                             onMouseEnter={() => setHoveredCategorySlug(dropdownItem.categorySlug)}
// // // // // // // // // //                           >
// // // // // // // // // //                             <Link
// // // // // // // // // //                               to={`/products/${dropdownItem.categorySlug}`}
// // // // // // // // // //                               className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // // //                             >
// // // // // // // // // //                               {dropdownItem.name}
// // // // // // // // // //                             </Link>
// // // // // // // // // //                           </li>
// // // // // // // // // //                         ))}
// // // // // // // // // //                       </ul>
// // // // // // // // // //                     </div>

// // // // // // // // // //                     {/* Second Column: Conditionally rendered to show Copper Subcategories */}
// // // // // // // // // //                     {hoveredCategorySlug === 'copper-items' && (
// // // // // // // // // //                       <div className="flex flex-col ml-8">
// // // // // // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Copper Items</h3>
// // // // // // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // // // // // //                           {copperSubCategories.map((subItem) => (
// // // // // // // // // //                             <li key={subItem.name}>
// // // // // // // // // //                               <Link
// // // // // // // // // //                                 to={subItem.path}
// // // // // // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // // //                               >
// // // // // // // // // //                                 {subItem.name}
// // // // // // // // // //                               </Link>
// // // // // // // // // //                             </li>
// // // // // // // // // //                           ))}
// // // // // // // // // //                           <li>
// // // // // // // // // //                             <Link
// // // // // // // // // //                               to="/products/copper-items"
// // // // // // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // // //                             >
// // // // // // // // // //                               View All Copper Items
// // // // // // // // // //                             </Link>
// // // // // // // // // //                           </li>
// // // // // // // // // //                         </ul>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     )}

// // // // // // // // // //                     {/* Third Column: Conditionally rendered to show Bagas Disposables Subcategories */}
// // // // // // // // // //                     {hoveredCategorySlug === 'bagas-disposables' && (
// // // // // // // // // //                       <div className="flex flex-col ml-8">
// // // // // // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Bagas Disposables</h3>
// // // // // // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // // // // // //                           {bagasDisposablesSubCategories.map((subItem) => (
// // // // // // // // // //                             <li key={subItem.name}>
// // // // // // // // // //                               <Link
// // // // // // // // // //                                 to={subItem.path}
// // // // // // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // // //                               >
// // // // // // // // // //                                 {subItem.name}
// // // // // // // // // //                               </Link>
// // // // // // // // // //                             </li>
// // // // // // // // // //                           ))}
// // // // // // // // // //                             <li>
// // // // // // // // // //                             <Link
// // // // // // // // // //                               to="/products/bagas-disposables"
// // // // // // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // // //                             >
// // // // // // // // // //                               View All Bagas Disposables
// // // // // // // // // //                             </Link>
// // // // // // // // // //                           </li>
// // // // // // // // // //                         </ul>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     )}

// // // // // // // // // //                     {/* Add more conditional columns here for other categories if they have subcategories */}
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </>
// // // // // // // // // //               ) : (
// // // // // // // // // //                 <Link
// // // // // // // // // //                   to={item.path}
// // // // // // // // // //                   className="block px-4 py-2 text-white hover:text-gray-300"
// // // // // // // // // //                 >
// // // // // // // // // //                   {item.name}
// // // // // // // // // //                   {item.name === 'Cart' && itemCount > 0 && ( // Conditionally render badge for Cart
// // // // // // // // // //                     <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
// // // // // // // // // //                       {itemCount}
// // // // // // // // // //                     </span>
// // // // // // // // // //                   )}
// // // // // // // // // //                 </Link>
// // // // // // // // // //               )}
// // // // // // // // // //             </li>
// // // // // // // // // //           ))}
// // // // // // // // // //         </ul>
// // // // // // // // // //       </div>
// // // // // // // // // //     </nav>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Navbar;




// // // // // // // // // // // src/components/Navbar.tsx

// // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // // import { useCart } from '../context/CartContext'; // Import useCart hook

// // // // // // // // // // // Define the interfaces for your navigation items
// // // // // // // // // // interface NestedDropdownItem {
// // // // // // // // // //   name: string;
// // // // // // // // // //   path: string; // Nested items always have a path
// // // // // // // // // // }

// // // // // // // // // // interface DropdownItem {
// // // // // // // // // //   name: string;
// // // // // // // // // //   categorySlug: string;
// // // // // // // // // // }

// // // // // // // // // // interface NavItem {
// // // // // // // // // //   name: string;
// // // // // // // // // //   path: string;
// // // // // // // // // //   isDropdown?: boolean;
// // // // // // // // // //   dropdownItems?: DropdownItem[];
// // // // // // // // // // }

// // // // // // // // // // const Navbar: React.FC = () => {
// // // // // // // // // //   // State to track which main category in the dropdown is currently hovered
// // // // // // // // // //   const [hoveredCategorySlug, setHoveredCategorySlug] = useState<string | null>(null);
// // // // // // // // // //   const { itemCount } = useCart(); // Get itemCount from the cart context

// // // // // // // // // //   // Helper function to slugify names (unchanged, still not strictly used here)
// // // // // // // // // //   const slugify = (text: string) => {
// // // // // // // // // //     return text
// // // // // // // // // //       .toString()
// // // // // // // // // //       .normalize('NFD')
// // // // // // // // // //       .replace(/[\u0300-\u036f]/g, '')
// // // // // // // // // //       .toLowerCase()
// // // // // // // // // //       .trim()
// // // // // // // // // //       .replace(/\s+/g, '-')
// // // // // // // // // //       .replace(/[^-\w]+/g, '');
// // // // // // // // // //   };

// // // // // // // // // //   // Copper subcategories (retained from your original file)
// // // // // // // // // //   const copperSubCategories: NestedDropdownItem[] = [
// // // // // // // // // //     { name: 'Copper Bottles', path: `/products/copper-items/copper-bottles` },
// // // // // // // // // //     { name: 'Copper Jugs', path: `/products/copper-items/copper-jugs` },
// // // // // // // // // //     { name: 'Copper Jars', path: `/products/copper-items/copper-jars` },
// // // // // // // // // //     { name: 'Copper Matkas', path: `/products/copper-items/copper-matkas` },
// // // // // // // // // //     { name: 'Copper Utensils Set', path: `/products/copper-items/copper-utensils-sets` },
// // // // // // // // // //   ];

// // // // // // // // // //   // Bagas Disposables subcategories (retained from your original file)
// // // // // // // // // //   const bagasDisposablesSubCategories: NestedDropdownItem[] = [
// // // // // // // // // //     { name: 'Meal Trays', path: `/products/bagas-disposables/meal-trays` },
// // // // // // // // // //     { name: 'Cups', path: `/products/bagas-disposables/cups` },
// // // // // // // // // //     { name: 'Plates', path: `/products/bagas-disposables/plates` },
// // // // // // // // // //     { name: 'Utensils and Straws', path: `/products/bagas-disposables/utensils-straws` },
// // // // // // // // // //   ];

// // // // // // // // // //   // NEW: Bar Accessories subcategories (hardcoded as requested)
// // // // // // // // // //   const barAccessoriesSubCategories: NestedDropdownItem[] = [
// // // // // // // // // //     { name: 'Ice Buckets & Chillers', path: `/products/bar-accessories/ice-buckets-chillers` },
// // // // // // // // // //     { name: 'Jiggers & Peg Measures', path: `/products/bar-accessories/jiggers-peg-measures` },
// // // // // // // // // //     { name: 'Cocktail Shakers', path: `/products/bar-accessories/cocktail-shakers` },
// // // // // // // // // //     { name: 'Bar Tools & Accessories', path: `/products/bar-accessories/bar-tools-accessories` },
// // // // // // // // // //     { name: 'Bartender Sets', path: `/products/bar-accessories/bartender-sets` },
// // // // // // // // // //     { name: 'Drinkware', path: `/products/bar-accessories/drinkware` },
// // // // // // // // // //     { name: 'Bar Table Service', path: `/products/bar-accessories/bar-table-service` },
// // // // // // // // // //   ];


// // // // // // // // // //   // Define the main navigation items
// // // // // // // // // //   const navItems: NavItem[] = [
// // // // // // // // // //     { name: 'Home', path: '/' },
// // // // // // // // // //     {
// // // // // // // // // //       name: 'Products',
// // // // // // // // // //       path: '/products',
// // // // // // // // // //       isDropdown: true,
// // // // // // // // // //       dropdownItems: [
// // // // // // // // // //         { name: 'Bar Accessories', categorySlug: 'bar-accessories' },
// // // // // // // // // //         { name: 'Bagas Disposables', categorySlug: 'bagas-disposables' },
// // // // // // // // // //         { name: 'Copper Items', categorySlug: 'copper-items' },
// // // // // // // // // //         { name: 'Ceramic Items', categorySlug: 'ceramic-items' },
// // // // // // // // // //         { name: 'Terracotta Items', categorySlug: 'terracotta-items' },
// // // // // // // // // //         { name: 'Packaging Material', categorySlug: 'packaging-material' },
// // // // // // // // // //       ],
// // // // // // // // // //     },
// // // // // // // // // //     { name: 'Contact Us', path: '/contact-us' },
// // // // // // // // // //     { name: 'About Us', path: '/about-us' },
// // // // // // // // // //     { name: 'Create', path: '/create' },
// // // // // // // // // //     { name: 'Cart', path: '/cart' },
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <nav
// // // // // // // // // //       className="bg-[rgba(17,24,39,0.8)] text-white fixed top-0 left-0 w-full z-50 py-4 backdrop-blur-sm"
// // // // // // // // // //     >
// // // // // // // // // //       <div className="container mx-auto flex justify-between items-center px-4">
// // // // // // // // // //         {/* Brand Logo/Name */}
// // // // // // // // // //         <Link
// // // // // // // // // //           to="/"
// // // // // // // // // //           className="text-2xl font-bold text-white hover:text-gray-300"
// // // // // // // // // //         >
// // // // // // // // // //           NY Venture
// // // // // // // // // //         </Link>

// // // // // // // // // //         {/* Navigation Links */}
// // // // // // // // // //         <ul className="flex space-x-6 items-center">
// // // // // // // // // //           {navItems.map((item) => (
// // // // // // // // // //             <li key={item.name} className="relative group">
// // // // // // // // // //               {item.isDropdown ? (
// // // // // // // // // //                 <>
// // // // // // // // // //                   <Link
// // // // // // // // // //                     to={item.path}
// // // // // // // // // //                     className="block cursor-pointer px-4 py-2 text-white hover:text-gray-300"
// // // // // // // // // //                   >
// // // // // // // // // //                     {item.name}
// // // // // // // // // //                   </Link>

// // // // // // // // // //                   {/* Main dropdown panel */}
// // // // // // // // // //                   <div
// // // // // // // // // //                     className="absolute left-1/2 -translate-x-1/2 top-full bg-gray-700 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 invisible z-10 p-3 flex"
// // // // // // // // // //                     onMouseLeave={() => setHoveredCategorySlug(null)}
// // // // // // // // // //                   >
// // // // // // // // // //                     {/* First Column: Main Categories */}
// // // // // // // // // //                     <div className="flex flex-col">
// // // // // // // // // //                       <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Categories</h3>
// // // // // // // // // //                       <ul className="space-y-1 min-w-[200px]">
// // // // // // // // // //                         {item.dropdownItems?.map((dropdownItem) => (
// // // // // // // // // //                           <li
// // // // // // // // // //                             key={dropdownItem.name}
// // // // // // // // // //                             onMouseEnter={() => setHoveredCategorySlug(dropdownItem.categorySlug)}
// // // // // // // // // //                           >
// // // // // // // // // //                             <Link
// // // // // // // // // //                               to={`/products/${dropdownItem.categorySlug}`}
// // // // // // // // // //                               className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // // //                             >
// // // // // // // // // //                               {dropdownItem.name}
// // // // // // // // // //                             </Link>
// // // // // // // // // //                           </li>
// // // // // // // // // //                         ))}
// // // // // // // // // //                       </ul>
// // // // // // // // // //                     </div>

// // // // // // // // // //                     {/* Second Column: Conditionally rendered to show Copper Subcategories */}
// // // // // // // // // //                     {hoveredCategorySlug === 'copper-items' && (
// // // // // // // // // //                       <div className="flex flex-col ml-8">
// // // // // // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Copper Items</h3>
// // // // // // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // // // // // //                           {copperSubCategories.map((subItem) => (
// // // // // // // // // //                             <li key={subItem.name}>
// // // // // // // // // //                               <Link
// // // // // // // // // //                                 to={subItem.path}
// // // // // // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // // //                               >
// // // // // // // // // //                                 {subItem.name}
// // // // // // // // // //                               </Link>
// // // // // // // // // //                             </li>
// // // // // // // // // //                           ))}
// // // // // // // // // //                           <li>
// // // // // // // // // //                             <Link
// // // // // // // // // //                               to="/products/copper-items"
// // // // // // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // // //                             >
// // // // // // // // // //                               View All Copper Items
// // // // // // // // // //                             </Link>
// // // // // // // // // //                           </li>
// // // // // // // // // //                         </ul>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     )}

// // // // // // // // // //                     {/* Third Column: Conditionally rendered to show Bagas Disposables Subcategories */}
// // // // // // // // // //                     {hoveredCategorySlug === 'bagas-disposables' && (
// // // // // // // // // //                       <div className="flex flex-col ml-8">
// // // // // // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Bagas Disposables</h3>
// // // // // // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // // // // // //                           {bagasDisposablesSubCategories.map((subItem) => (
// // // // // // // // // //                             <li key={subItem.name}>
// // // // // // // // // //                               <Link
// // // // // // // // // //                                 to={subItem.path}
// // // // // // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // // //                               >
// // // // // // // // // //                                 {subItem.name}
// // // // // // // // // //                               </Link>
// // // // // // // // // //                             </li>
// // // // // // // // // //                           ))}
// // // // // // // // // //                             <li>
// // // // // // // // // //                             <Link
// // // // // // // // // //                               to="/products/bagas-disposables"
// // // // // // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // // //                             >
// // // // // // // // // //                               View All Bagas Disposables
// // // // // // // // // //                             </Link>
// // // // // // // // // //                           </li>
// // // // // // // // // //                         </ul>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     )}

// // // // // // // // // //                     {/* NEW: Fourth Column: Conditionally rendered to show Bar Accessories Subcategories */}
// // // // // // // // // //                     {hoveredCategorySlug === 'bar-accessories' && (
// // // // // // // // // //                       <div className="flex flex-col ml-8">
// // // // // // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Bar Accessories</h3>
// // // // // // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // // // // // //                           {barAccessoriesSubCategories.map((subItem) => (
// // // // // // // // // //                             <li key={subItem.name}>
// // // // // // // // // //                               <Link
// // // // // // // // // //                                 to={subItem.path}
// // // // // // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // // //                               >
// // // // // // // // // //                                 {subItem.name}
// // // // // // // // // //                               </Link>
// // // // // // // // // //                             </li>
// // // // // // // // // //                           ))}
// // // // // // // // // //                           <li>
// // // // // // // // // //                             <Link
// // // // // // // // // //                               to="/products/bar-accessories"
// // // // // // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // // //                             >
// // // // // // // // // //                               View All Bar Accessories
// // // // // // // // // //                             </Link>
// // // // // // // // // //                           </li>
// // // // // // // // // //                         </ul>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     )}

// // // // // // // // // //                   </div>
// // // // // // // // // //                 </>
// // // // // // // // // //               ) : (
// // // // // // // // // //                 <Link
// // // // // // // // // //                   to={item.path}
// // // // // // // // // //                   className="block px-4 py-2 text-white hover:text-gray-300"
// // // // // // // // // //                 >
// // // // // // // // // //                   {item.name}
// // // // // // // // // //                   {item.name === 'Cart' && itemCount > 0 && ( // Conditionally render badge for Cart
// // // // // // // // // //                     <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
// // // // // // // // // //                       {itemCount}
// // // // // // // // // //                     </span>
// // // // // // // // // //                   )}
// // // // // // // // // //                 </Link>
// // // // // // // // // //               )}
// // // // // // // // // //             </li>
// // // // // // // // // //           ))}
// // // // // // // // // //         </ul>
// // // // // // // // // //       </div>
// // // // // // // // // //     </nav>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Navbar;




// // // // // // // // // // src/components/Navbar.tsx

// // // // // // // // // import React, { useState, useEffect } from 'react'; // Import useEffect
// // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // import { useCart } from '../context/CartContext';

// // // // // // // // // // Define the interfaces for your navigation items
// // // // // // // // // interface NestedDropdownItem {
// // // // // // // // //   name: string;
// // // // // // // // //   path: string;
// // // // // // // // // }

// // // // // // // // // interface DropdownItem {
// // // // // // // // //   name: string;
// // // // // // // // //   categorySlug: string;
// // // // // // // // // }

// // // // // // // // // interface NavItem {
// // // // // // // // //   name: string;
// // // // // // // // //   path: string;
// // // // // // // // //   isDropdown?: boolean;
// // // // // // // // //   dropdownItems?: DropdownItem[];
// // // // // // // // // }

// // // // // // // // // const Navbar: React.FC = () => {
// // // // // // // // //   const [hoveredCategorySlug, setHoveredCategorySlug] = useState<string | null>(null);
// // // // // // // // //   const { itemCount } = useCart();

// // // // // // // // //   // New state for controlling Navbar visibility on scroll
// // // // // // // // //   const [isVisible, setIsVisible] = useState(true);
// // // // // // // // //   const [lastScrollY, setLastScrollY] = useState(0);

// // // // // // // // //   // Helper function to slugify names (unchanged)
// // // // // // // // //   const slugify = (text: string) => {
// // // // // // // // //     return text
// // // // // // // // //       .toString()
// // // // // // // // //       .normalize('NFD')
// // // // // // // // //       .replace(/[\u0300-\u036f]/g, '')
// // // // // // // // //       .toLowerCase()
// // // // // // // // //       .trim()
// // // // // // // // //       .replace(/\s+/g, '-')
// // // // // // // // //       .replace(/[^-\w]+/g, '');
// // // // // // // // //   };

// // // // // // // // //   // Subcategory data (unchanged)
// // // // // // // // //   const copperSubCategories: NestedDropdownItem[] = [
// // // // // // // // //     { name: 'Copper Bottles', path: `/products/copper-items/copper-bottles` },
// // // // // // // // //     { name: 'Copper Jugs', path: `/products/copper-items/copper-jugs` },
// // // // // // // // //     { name: 'Copper Jars', path: `/products/copper-items/copper-jars` },
// // // // // // // // //     { name: 'Copper Matkas', path: `/products/copper-items/copper-matkas` },
// // // // // // // // //     { name: 'Copper Utensils Set', path: `/products/copper-items/copper-utensils-sets` },
// // // // // // // // //   ];

// // // // // // // // //   const bagasDisposablesSubCategories: NestedDropdownItem[] = [
// // // // // // // // //     { name: 'Meal Trays', path: `/products/bagas-disposables/meal-trays` },
// // // // // // // // //     { name: 'Cups', path: `/products/bagas-disposables/cups` },
// // // // // // // // //     { name: 'Plates', path: `/products/bagas-disposables/plates` },
// // // // // // // // //     { name: 'Utensils and Straws', path: `/products/bagas-disposables/utensils-straws` },
// // // // // // // // //   ];

// // // // // // // // //   const barAccessoriesSubCategories: NestedDropdownItem[] = [
// // // // // // // // //     { name: 'Ice Buckets & Chillers', path: `/products/bar-accessories/ice-buckets-chillers` },
// // // // // // // // //     { name: 'Jiggers & Peg Measures', path: `/products/bar-accessories/jiggers-peg-measures` },
// // // // // // // // //     { name: 'Cocktail Shakers', path: `/products/bar-accessories/cocktail-shakers` },
// // // // // // // // //     { name: 'Bar Tools & Accessories', path: `/products/bar-accessories/bar-tools-accessories` },
// // // // // // // // //     { name: 'Bartender Sets', path: `/products/bar-accessories/bartender-sets` },
// // // // // // // // //     { name: 'Drinkware', path: `/products/bar-accessories/drinkware` },
// // // // // // // // //     { name: 'Bar Table Service', path: `/products/bar-accessories/bar-table-service` },
// // // // // // // // //   ];

// // // // // // // // //   const navItems: NavItem[] = [
// // // // // // // // //     { name: 'Home', path: '/' },
// // // // // // // // //     {
// // // // // // // // //       name: 'Products',
// // // // // // // // //       path: '/products',
// // // // // // // // //       isDropdown: true,
// // // // // // // // //       dropdownItems: [
// // // // // // // // //         { name: 'Bar Accessories', categorySlug: 'bar-accessories' },
// // // // // // // // //         { name: 'Bagas Disposables', categorySlug: 'bagas-disposables' },
// // // // // // // // //         { name: 'Copper Items', categorySlug: 'copper-items' },
// // // // // // // // //         { name: 'Ceramic Items', categorySlug: 'ceramic-items' },
// // // // // // // // //         { name: 'Terracotta Items', categorySlug: 'terracotta-items' },
// // // // // // // // //         { name: 'Packaging Material', categorySlug: 'packaging-material' },
// // // // // // // // //       ],
// // // // // // // // //     },
// // // // // // // // //     { name: 'Contact Us', path: '/contact-us' },
// // // // // // // // //     { name: 'About Us', path: '/about-us' },
// // // // // // // // //     { name: 'Create', path: '/create' },
// // // // // // // // //     { name: 'Cart', path: '/cart' },
// // // // // // // // //   ];

// // // // // // // // //   // Effect to handle scroll behavior
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const handleScroll = () => {
// // // // // // // // //       const currentScrollY = window.scrollY;

// // // // // // // // //       // Only hide if scrolling down and not at the very top
// // // // // // // // //       // And only show if scrolling up
// // // // // // // // //       if (currentScrollY > lastScrollY && currentScrollY > 70) { // 70px threshold to start hiding
// // // // // // // // //         setIsVisible(false);
// // // // // // // // //       } else {
// // // // // // // // //         setIsVisible(true);
// // // // // // // // //       }
// // // // // // // // //       setLastScrollY(currentScrollY);
// // // // // // // // //     };

// // // // // // // // //     window.addEventListener('scroll', handleScroll);

// // // // // // // // //     return () => {
// // // // // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // // // // //     };
// // // // // // // // //   }, [lastScrollY]); // Re-run effect only when lastScrollY changes

// // // // // // // // //   return (
// // // // // // // // //     <nav
// // // // // // // // //       className={`
// // // // // // // // //         bg-[rgba(17,24,39,0.8)] text-white fixed top-0 left-0 w-full z-50 py-1 backdrop-blur-sm
// // // // // // // // //         transition-transform duration-300 ease-in-out
// // // // // // // // //         ${isVisible ? 'translate-y-0' : '-translate-y-full'}
// // // // // // // // //       `}
// // // // // // // // //     >
// // // // // // // // //       <div className="container mx-auto flex justify-between items-center px-4">
// // // // // // // // //         {/* Brand Logo/Name */}
// // // // // // // // //         <Link
// // // // // // // // //           to="/"
// // // // // // // // //           className="text-2xl font-bold text-white hover:text-gray-300"
// // // // // // // // //         >
// // // // // // // // //           NY Venture
// // // // // // // // //         </Link>

// // // // // // // // //         {/* Navigation Links */}
// // // // // // // // //         <ul className="flex space-x-6 items-center">
// // // // // // // // //           {navItems.map((item) => (
// // // // // // // // //             <li key={item.name} className="relative group">
// // // // // // // // //               {item.isDropdown ? (
// // // // // // // // //                 <>
// // // // // // // // //                   <Link
// // // // // // // // //                     to={item.path}
// // // // // // // // //                     className="block cursor-pointer px-4 py-2 text-white hover:text-gray-300"
// // // // // // // // //                   >
// // // // // // // // //                     {item.name}
// // // // // // // // //                   </Link>

// // // // // // // // //                   {/* Main dropdown panel */}
// // // // // // // // //                   <div
// // // // // // // // //                     className="absolute left-1/2 -translate-x-1/2 top-full bg-gray-700 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-100 invisible z-10 p-3 flex"
// // // // // // // // //                     onMouseLeave={() => setHoveredCategorySlug(null)}
// // // // // // // // //                   >
// // // // // // // // //                     {/* First Column: Main Categories */}
// // // // // // // // //                     <div className="flex flex-col">
// // // // // // // // //                       <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Categories</h3>
// // // // // // // // //                       <ul className="space-y-1 min-w-[200px]">
// // // // // // // // //                         {item.dropdownItems?.map((dropdownItem) => (
// // // // // // // // //                           <li
// // // // // // // // //                             key={dropdownItem.name}
// // // // // // // // //                             onMouseEnter={() => setHoveredCategorySlug(dropdownItem.categorySlug)}
// // // // // // // // //                           >
// // // // // // // // //                             <Link
// // // // // // // // //                               to={`/products/${dropdownItem.categorySlug}`}
// // // // // // // // //                               className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // //                             >
// // // // // // // // //                               {dropdownItem.name}
// // // // // // // // //                             </Link>
// // // // // // // // //                           </li>
// // // // // // // // //                         ))}
// // // // // // // // //                       </ul>
// // // // // // // // //                     </div>

// // // // // // // // //                     {/* Second Column: Conditionally rendered to show Copper Subcategories */}
// // // // // // // // //                     {hoveredCategorySlug === 'copper-items' && (
// // // // // // // // //                       <div className="flex flex-col ml-8">
// // // // // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Copper Items</h3>
// // // // // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // // // // //                           {copperSubCategories.map((subItem) => (
// // // // // // // // //                             <li key={subItem.name}>
// // // // // // // // //                               <Link
// // // // // // // // //                                 to={subItem.path}
// // // // // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // //                               >
// // // // // // // // //                                 {subItem.name}
// // // // // // // // //                               </Link>
// // // // // // // // //                             </li>
// // // // // // // // //                           ))}
// // // // // // // // //                           <li>
// // // // // // // // //                             <Link
// // // // // // // // //                               to="/products/copper-items"
// // // // // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // //                             >
// // // // // // // // //                               View All Copper Items
// // // // // // // // //                             </Link>
// // // // // // // // //                           </li>
// // // // // // // // //                         </ul>
// // // // // // // // //                       </div>
// // // // // // // // //                     )}

// // // // // // // // //                     {/* Third Column: Conditionally rendered to show Bagas Disposables Subcategories */}
// // // // // // // // //                     {hoveredCategorySlug === 'bagas-disposables' && (
// // // // // // // // //                       <div className="flex flex-col ml-8">
// // // // // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Bagas Disposables</h3>
// // // // // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // // // // //                           {bagasDisposablesSubCategories.map((subItem) => (
// // // // // // // // //                             <li key={subItem.name}>
// // // // // // // // //                               <Link
// // // // // // // // //                                 to={subItem.path}
// // // // // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // //                               >
// // // // // // // // //                                 {subItem.name}
// // // // // // // // //                               </Link>
// // // // // // // // //                             </li>
// // // // // // // // //                           ))}
// // // // // // // // //                             <li>
// // // // // // // // //                             <Link
// // // // // // // // //                               to="/products/bagas-disposables"
// // // // // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // //                             >
// // // // // // // // //                               View All Bagas Disposables
// // // // // // // // //                             </Link>
// // // // // // // // //                           </li>
// // // // // // // // //                         </ul>
// // // // // // // // //                       </div>
// // // // // // // // //                     )}

// // // // // // // // //                     {/* Fourth Column: Conditionally rendered to show Bar Accessories Subcategories */}
// // // // // // // // //                     {hoveredCategorySlug === 'bar-accessories' && (
// // // // // // // // //                       <div className="flex flex-col ml-8">
// // // // // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Bar Accessories</h3>
// // // // // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // // // // //                           {barAccessoriesSubCategories.map((subItem) => (
// // // // // // // // //                             <li key={subItem.name}>
// // // // // // // // //                               <Link
// // // // // // // // //                                 to={subItem.path}
// // // // // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // //                               >
// // // // // // // // //                                 {subItem.name}
// // // // // // // // //                               </Link>
// // // // // // // // //                             </li>
// // // // // // // // //                           ))}
// // // // // // // // //                           <li>
// // // // // // // // //                             <Link
// // // // // // // // //                               to="/products/bar-accessories"
// // // // // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // //                             >
// // // // // // // // //                               View All Bar Accessories
// // // // // // // // //                             </Link>
// // // // // // // // //                           </li>
// // // // // // // // //                         </ul>
// // // // // // // // //                       </div>
// // // // // // // // //                     )}

// // // // // // // // //                   </div>
// // // // // // // // //                 </>
// // // // // // // // //               ) : (
// // // // // // // // //                 <Link
// // // // // // // // //                   to={item.path}
// // // // // // // // //                   className="block px-4 py-2 text-white hover:text-gray-300"
// // // // // // // // //                 >
// // // // // // // // //                   {item.name}
// // // // // // // // //                   {item.name === 'Cart' && itemCount > 0 && (
// // // // // // // // //                     <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
// // // // // // // // //                       {itemCount}
// // // // // // // // //                     </span>
// // // // // // // // //                   )}
// // // // // // // // //                 </Link>
// // // // // // // // //               )}
// // // // // // // // //             </li>
// // // // // // // // //           ))}
// // // // // // // // //         </ul>
// // // // // // // // //       </div>
// // // // // // // // //     </nav>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Navbar;





// // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // import { useCart } from '../context/CartContext';
// // // // // // // // // import { PiShoppingCartBold } from 'react-icons/pi'; 

// // // // // // // // // // Define the interfaces for your navigation items
// // // // // // // // // interface NestedDropdownItem {
// // // // // // // // //   name: string;
// // // // // // // // //   path: string;
// // // // // // // // // }

// // // // // // // // // interface DropdownItem {
// // // // // // // // //   name: string;
// // // // // // // // //   categorySlug: string;
// // // // // // // // // }

// // // // // // // // // interface NavItem {
// // // // // // // // //   name: string;
// // // // // // // // //   path: string;
// // // // // // // // //   isDropdown?: boolean;
// // // // // // // // //   dropdownItems?: DropdownItem[];
// // // // // // // // // }

// // // // // // // // // const Navbar: React.FC = () => {
// // // // // // // // //   const [hoveredCategorySlug, setHoveredCategorySlug] = useState<string | null>(null);
// // // // // // // // //   const { itemCount } = useCart();

// // // // // // // // //   // New state for controlling Navbar visibility on scroll
// // // // // // // // //   const [isVisible, setIsVisible] = useState(true);
// // // // // // // // //   const [lastScrollY, setLastScrollY] = useState(0);

// // // // // // // // //   // Helper function to slugify names (unchanged)
// // // // // // // // //   const slugify = (text: string) => {
// // // // // // // // //     return text
// // // // // // // // //       .toString()
// // // // // // // // //       .normalize('NFD')
// // // // // // // // //       .replace(/[\u0300-\u036f]/g, '')
// // // // // // // // //       .toLowerCase()
// // // // // // // // //       .trim()
// // // // // // // // //       .replace(/\s+/g, '-')
// // // // // // // // //       .replace(/[^-\w]+/g, '');
// // // // // // // // //   };

// // // // // // // // //   // Subcategory data (unchanged)
// // // // // // // // //   const copperSubCategories: NestedDropdownItem[] = [
// // // // // // // // //     { name: 'Copper Bottles', path: `/products/copper-items/copper-bottles` },
// // // // // // // // //     { name: 'Copper Jugs', path: `/products/copper-items/copper-jugs` },
// // // // // // // // //     { name: 'Copper Jars', path: `/products/copper-items/copper-jars` },
// // // // // // // // //     { name: 'Copper Matkas', path: `/products/copper-items/copper-matkas` },
// // // // // // // // //     { name: 'Copper Utensils Set', path: `/products/copper-items/copper-utensils-sets` },
// // // // // // // // //   ];

// // // // // // // // //   const bagasDisposablesSubCategories: NestedDropdownItem[] = [
// // // // // // // // //     { name: 'Meal Trays', path: `/products/bagas-disposables/meal-trays` },
// // // // // // // // //     { name: 'Cups', path: `/products/bagas-disposables/cups` },
// // // // // // // // //     { name: 'Plates', path: `/products/bagas-disposables/plates` },
// // // // // // // // //     { name: 'Utensils and Straws', path: `/products/bagas-disposables/utensils-straws` },
// // // // // // // // //   ];

// // // // // // // // //   const barAccessoriesSubCategories: NestedDropdownItem[] = [
// // // // // // // // //     { name: 'Ice Buckets & Chillers', path: `/products/bar-accessories/ice-buckets-chillers` },
// // // // // // // // //     { name: 'Jiggers & Peg Measures', path: `/products/bar-accessories/jiggers-peg-measures` },
// // // // // // // // //     { name: 'Cocktail Shakers', path: `/products/bar-accessories/cocktail-shakers` },
// // // // // // // // //     { name: 'Bar Tools & Accessories', path: `/products/bar-accessories/bar-tools-accessories` },
// // // // // // // // //     { name: 'Bartender Sets', path: `/products/bar-accessories/bartender-sets` },
// // // // // // // // //     { name: 'Drinkware', path: `/products/bar-accessories/drinkware` },
// // // // // // // // //     { name: 'Bar Table Service', path: `/products/bar-accessories/bar-table-service` },
// // // // // // // // //   ];

// // // // // // // // //   const navItems: NavItem[] = [
// // // // // // // // //     { name: 'Home', path: '/' },
// // // // // // // // //     {
// // // // // // // // //       name: 'Products',
// // // // // // // // //       path: '/products',
// // // // // // // // //       isDropdown: true,
// // // // // // // // //       dropdownItems: [
// // // // // // // // //         { name: 'Bar Accessories', categorySlug: 'bar-accessories' },
// // // // // // // // //         { name: 'Bagas Disposables', categorySlug: 'bagas-disposables' },
// // // // // // // // //         { name: 'Copper Items', categorySlug: 'copper-items' },
// // // // // // // // //         { name: 'Ceramic Items', categorySlug: 'ceramic-items' },
// // // // // // // // //         { name: 'Terracotta Items', categorySlug: 'terracotta-items' },
// // // // // // // // //         { name: 'Packaging Material', categorySlug: 'packaging-material' },
// // // // // // // // //       ],
// // // // // // // // //     },
// // // // // // // // //     { name: 'Contact Us', path: '/contact-us' },
// // // // // // // // //     { name: 'About Us', path: '/about-us' },
// // // // // // // // //     { name: 'Create', path: '/create' },
// // // // // // // // //     { name: 'Cart', path: '/cart' }, // Keep this as 'Cart' for internal identification
// // // // // // // // //   ];

// // // // // // // // //   // Effect to handle scroll behavior
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const handleScroll = () => {
// // // // // // // // //       const currentScrollY = window.scrollY;

// // // // // // // // //       // Only hide if scrolling down and not at the very top
// // // // // // // // //       // And only show if scrolling up
// // // // // // // // //       if (currentScrollY > lastScrollY && currentScrollY > 70) { // 70px threshold to start hiding
// // // // // // // // //         setIsVisible(false);
// // // // // // // // //       } else {
// // // // // // // // //         setIsVisible(true);
// // // // // // // // //       }
// // // // // // // // //       setLastScrollY(currentScrollY);
// // // // // // // // //     };

// // // // // // // // //     window.addEventListener('scroll', handleScroll);

// // // // // // // // //     return () => {
// // // // // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // // // // //     };
// // // // // // // // //   }, [lastScrollY]); // Re-run effect only when lastScrollY changes

// // // // // // // // //   return (
// // // // // // // // //     <nav
// // // // // // // // //       className={`
// // // // // // // // //         bg-[rgba(17,24,39,0.8)] text-white fixed top-0 left-0 w-full z-50 py-1 backdrop-blur-sm
// // // // // // // // //         transition-transform duration-300 ease-in-out
// // // // // // // // //         ${isVisible ? 'translate-y-0' : '-translate-y-full'}
// // // // // // // // //       `}
// // // // // // // // //     >
// // // // // // // // //       <div className="container mx-auto flex justify-between items-center px-4">
// // // // // // // // //         {/* Brand Logo/Name */}
// // // // // // // // //         <Link
// // // // // // // // //           to="/"
// // // // // // // // //           className="text-2xl font-bold text-white hover:text-gray-300"
// // // // // // // // //         >
// // // // // // // // //           NY Venture
// // // // // // // // //         </Link>

// // // // // // // // //         {/* Navigation Links */}
// // // // // // // // //         <ul className="flex space-x-6 items-center">
// // // // // // // // //           {navItems.map((item) => (
// // // // // // // // //             <li key={item.name} className="relative group">
// // // // // // // // //               {item.isDropdown ? (
// // // // // // // // //                 <>
// // // // // // // // //                   <Link
// // // // // // // // //                     to={item.path}
// // // // // // // // //                     className="block cursor-pointer px-4 py-2 text-white hover:text-gray-300"
// // // // // // // // //                   >
// // // // // // // // //                     {item.name}
// // // // // // // // //                   </Link>

// // // // // // // // //                   {/* Main dropdown panel */}
// // // // // // // // //                   <div
// // // // // // // // //                     className="absolute left-1/2 -translate-x-1/2 top-full bg-gray-700 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-100 invisible z-10 p-3 flex"
// // // // // // // // //                     onMouseLeave={() => setHoveredCategorySlug(null)}
// // // // // // // // //                   >
// // // // // // // // //                     {/* First Column: Main Categories */}
// // // // // // // // //                     <div className="flex flex-col">
// // // // // // // // //                       <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Categories</h3>
// // // // // // // // //                       <ul className="space-y-1 min-w-[200px]">
// // // // // // // // //                         {item.dropdownItems?.map((dropdownItem) => (
// // // // // // // // //                           <li
// // // // // // // // //                             key={dropdownItem.name}
// // // // // // // // //                             onMouseEnter={() => setHoveredCategorySlug(dropdownItem.categorySlug)}
// // // // // // // // //                           >
// // // // // // // // //                             <Link
// // // // // // // // //                               to={`/products/${dropdownItem.categorySlug}`}
// // // // // // // // //                               className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // //                             >
// // // // // // // // //                               {dropdownItem.name}
// // // // // // // // //                             </Link>
// // // // // // // // //                           </li>
// // // // // // // // //                         ))}
// // // // // // // // //                       </ul>
// // // // // // // // //                     </div>

// // // // // // // // //                     {/* Second Column: Conditionally rendered to show Copper Subcategories */}
// // // // // // // // //                     {hoveredCategorySlug === 'copper-items' && (
// // // // // // // // //                       <div className="flex flex-col ml-8">
// // // // // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Copper Items</h3>
// // // // // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // // // // //                           {copperSubCategories.map((subItem) => (
// // // // // // // // //                             <li key={subItem.name}>
// // // // // // // // //                               <Link
// // // // // // // // //                                 to={subItem.path}
// // // // // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // //                               >
// // // // // // // // //                                 {subItem.name}
// // // // // // // // //                               </Link>
// // // // // // // // //                             </li>
// // // // // // // // //                           ))}
// // // // // // // // //                           <li>
// // // // // // // // //                             <Link
// // // // // // // // //                               to="/products/copper-items"
// // // // // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // //                             >
// // // // // // // // //                               View All Copper Items
// // // // // // // // //                             </Link>
// // // // // // // // //                           </li>
// // // // // // // // //                         </ul>
// // // // // // // // //                       </div>
// // // // // // // // //                     )}

// // // // // // // // //                     {/* Third Column: Conditionally rendered to show Bagas Disposables Subcategories */}
// // // // // // // // //                     {hoveredCategorySlug === 'bagas-disposables' && (
// // // // // // // // //                       <div className="flex flex-col ml-8">
// // // // // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Bagas Disposables</h3>
// // // // // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // // // // //                           {bagasDisposablesSubCategories.map((subItem) => (
// // // // // // // // //                             <li key={subItem.name}>
// // // // // // // // //                               <Link
// // // // // // // // //                                 to={subItem.path}
// // // // // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // //                               >
// // // // // // // // //                                 {subItem.name}
// // // // // // // // //                               </Link>
// // // // // // // // //                             </li>
// // // // // // // // //                           ))}
// // // // // // // // //                             <li>
// // // // // // // // //                             <Link
// // // // // // // // //                               to="/products/bagas-disposables"
// // // // // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // //                             >
// // // // // // // // //                               View All Bagas Disposables
// // // // // // // // //                             </Link>
// // // // // // // // //                           </li>
// // // // // // // // //                         </ul>
// // // // // // // // //                       </div>
// // // // // // // // //                     )}

// // // // // // // // //                     {/* Fourth Column: Conditionally rendered to show Bar Accessories Subcategories */}
// // // // // // // // //                     {hoveredCategorySlug === 'bar-accessories' && (
// // // // // // // // //                       <div className="flex flex-col ml-8">
// // // // // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Bar Accessories</h3>
// // // // // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // // // // //                           {barAccessoriesSubCategories.map((subItem) => (
// // // // // // // // //                             <li key={subItem.name}>
// // // // // // // // //                               <Link
// // // // // // // // //                                 to={subItem.path}
// // // // // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // //                               >
// // // // // // // // //                                 {subItem.name}
// // // // // // // // //                               </Link>
// // // // // // // // //                             </li>
// // // // // // // // //                           ))}
// // // // // // // // //                           <li>
// // // // // // // // //                             <Link
// // // // // // // // //                               to="/products/bar-accessories"
// // // // // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // // //                             >
// // // // // // // // //                               View All Bar Accessories
// // // // // // // // //                             </Link>
// // // // // // // // //                           </li>
// // // // // // // // //                         </ul>
// // // // // // // // //                       </div>
// // // // // // // // //                     )}

// // // // // // // // //                   </div>
// // // // // // // // //                 </>
// // // // // // // // //               ) : (
// // // // // // // // //                 <Link
// // // // // // // // //                   to={item.path}
// // // // // // // // //                   className="block px-4 py-2 text-white hover:text-gray-300"
// // // // // // // // //                 >
// // // // // // // // //                   {item.name === 'Cart' ? ( // Check if the item is 'Cart'
// // // // // // // // //                     <div className="flex items-center"> {/* Use a flex container for icon and count */}
// // // // // // // // //                       {/* Cart Icon SVG - Replace with your actual SVG or image */}
// // // // // // // // //                       <svg
// // // // // // // // //                         xmlns="http://www.w3.org/2000/svg"
// // // // // // // // //                         fill="none"
// // // // // // // // //                         viewBox="0 0 24 24"
// // // // // // // // //                         strokeWidth={2}
// // // // // // // // //                         stroke="currentColor"
// // // // // // // // //                         className="w-6 h-6" // Tailwind classes for sizing
// // // // // // // // //                       >
// // // // // // // // //                         <path
// // // // // // // // //                           strokeLinecap="round"
// // // // // // // // //                           strokeLinejoin="round"
// // // // // // // // //                           d="M2.25 3h1.386c.51 0 .955.343 1.023.832l.523 3.14M21.75 6.75h-2.946c-.927 0-1.77.53-.948.977l.593 1.477L14.716 18.919a1.125 1.125 0 0 1-1.12 1.082H7.5c-.567 0-1.096-.289-1.411-.758L3.08 7.354a1.125 1.125 0 0 1 .531-1.397L2.25 3zm6 0v.007c0-2.423 1.957-4.38 4.38-4.38s4.38 1.957 4.38 4.38-1.957 4.38-4.38 4.38-4.38-1.957-4.38-4.38zM15.75 6a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z"
// // // // // // // // //                         />
// // // // // // // // //                       </svg>
// // // // // // // // //                       {itemCount > 0 && (
// // // // // // // // //                         <span className="ml-1 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full flex items-center justify-center min-w-[20px] h-[20px]"> {/* Adjusted size for better visual */}
// // // // // // // // //                           {itemCount}
// // // // // // // // //                         </span>
// // // // // // // // //                       )}
// // // // // // // // //                     </div>
// // // // // // // // //                   ) : (
// // // // // // // // //                     item.name
// // // // // // // // //                   )}
// // // // // // // // //                 </Link>
// // // // // // // // //               )}
// // // // // // // // //             </li>
// // // // // // // // //           ))}
// // // // // // // // //         </ul>
// // // // // // // // //       </div>
// // // // // // // // //     </nav>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Navbar;





// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // import { useCart } from '../context/CartContext';
// // // // // // // // // import { PiShoppingCartBold } from 'react-icons/pi'; // Removed this line as we're using a direct SVG

// // // // // // // // // Define the interfaces for your navigation items
// // // // // // // // interface NestedDropdownItem {
// // // // // // // //   name: string;
// // // // // // // //   path: string;
// // // // // // // // }

// // // // // // // // interface DropdownItem {
// // // // // // // //   name: string;
// // // // // // // //   categorySlug: string;
// // // // // // // // }

// // // // // // // // interface NavItem {
// // // // // // // //   name: string;
// // // // // // // //   path: string;
// // // // // // // //   isDropdown?: boolean;
// // // // // // // //   dropdownItems?: DropdownItem[];
// // // // // // // // }

// // // // // // // // const Navbar: React.FC = () => {
// // // // // // // //   const [hoveredCategorySlug, setHoveredCategorySlug] = useState<string | null>(null);
// // // // // // // //   const { itemCount } = useCart();

// // // // // // // //   // New state for controlling Navbar visibility on scroll
// // // // // // // //   const [isVisible, setIsVisible] = useState(true);
// // // // // // // //   const [lastScrollY, setLastScrollY] = useState(0);

// // // // // // // //   // Helper function to slugify names (unchanged)
// // // // // // // //   const slugify = (text: string) => {
// // // // // // // //     return text
// // // // // // // //       .toString()
// // // // // // // //       .normalize('NFD')
// // // // // // // //       .replace(/[\u0300-\u036f]/g, '')
// // // // // // // //       .toLowerCase()
// // // // // // // //       .trim()
// // // // // // // //       .replace(/\s+/g, '-')
// // // // // // // //       .replace(/[^-\w]+/g, '');
// // // // // // // //   };

// // // // // // // //   // Subcategory data (unchanged)
// // // // // // // //   const copperSubCategories: NestedDropdownItem[] = [
// // // // // // // //     { name: 'Copper Bottles', path: `/products/copper-items/copper-bottles` },
// // // // // // // //     { name: 'Copper Jugs', path: `/products/copper-items/copper-jugs` },
// // // // // // // //     { name: 'Copper Jars', path: `/products/copper-items/copper-jars` },
// // // // // // // //     { name: 'Copper Matkas', path: `/products/copper-items/copper-matkas` },
// // // // // // // //     { name: 'Copper Utensils Set', path: `/products/copper-items/copper-utensils-sets` },
// // // // // // // //   ];

// // // // // // // //   const bagasDisposablesSubCategories: NestedDropdownItem[] = [
// // // // // // // //     { name: 'Meal Trays', path: `/products/bagas-disposables/meal-trays` },
// // // // // // // //     { name: 'Cups', path: `/products/bagas-disposables/cups` },
// // // // // // // //     { name: 'Plates', path: `/products/bagas-disposables/plates` },
// // // // // // // //     { name: 'Utensils and Straws', path: `/products/bagas-disposables/utensils-straws` },
// // // // // // // //   ];

// // // // // // // //   const barAccessoriesSubCategories: NestedDropdownItem[] = [
// // // // // // // //     { name: 'Ice Buckets & Chillers', path: `/products/bar-accessories/ice-buckets-chillers` },
// // // // // // // //     { name: 'Jiggers & Peg Measures', path: `/products/bar-accessories/jiggers-peg-measures` },
// // // // // // // //     { name: 'Cocktail Shakers', path: `/products/bar-accessories/cocktail-shakers` },
// // // // // // // //     { name: 'Bar Tools & Accessories', path: `/products/bar-accessories/bar-tools-accessories` },
// // // // // // // //     { name: 'Bartender Sets', path: `/products/bar-accessories/bartender-sets` },
// // // // // // // //     { name: 'Drinkware', path: `/products/bar-accessories/drinkware` },
// // // // // // // //     { name: 'Bar Table Service', path: `/products/bar-accessories/bar-table-service` },
// // // // // // // //   ];

// // // // // // // //   const navItems: NavItem[] = [
// // // // // // // //     { name: 'Home', path: '/' },
// // // // // // // //     {
// // // // // // // //       name: 'Products',
// // // // // // // //       path: '/products',
// // // // // // // //       isDropdown: true,
// // // // // // // //       dropdownItems: [
// // // // // // // //         { name: 'Bar Accessories', categorySlug: 'bar-accessories' },
// // // // // // // //         { name: 'Bagas Disposables', categorySlug: 'bagas-disposables' },
// // // // // // // //         { name: 'Copper Items', categorySlug: 'copper-items' },
// // // // // // // //         { name: 'Ceramic Items', categorySlug: 'ceramic-items' },
// // // // // // // //         { name: 'Terracotta Items', categorySlug: 'terracotta-items' },
// // // // // // // //         { name: 'Packaging Material', categorySlug: 'packaging-material' },
// // // // // // // //       ],
// // // // // // // //     },
// // // // // // // //     { name: 'Contact Us', path: '/contact-us' },
// // // // // // // //     { name: 'About Us', path: '/about-us' },
// // // // // // // //     { name: 'Create', path: '/create' },
// // // // // // // //     { name: 'Cart', path: '/cart' }, // Keep this as 'Cart' for internal identification
// // // // // // // //   ];

// // // // // // // //   // Effect to handle scroll behavior
// // // // // // // //   useEffect(() => {
// // // // // // // //     const handleScroll = () => {
// // // // // // // //       const currentScrollY = window.scrollY;

// // // // // // // //       // Only hide if scrolling down and not at the very top
// // // // // // // //       // And only show if scrolling up
// // // // // // // //       if (currentScrollY > lastScrollY && currentScrollY > 70) { // 70px threshold to start hiding
// // // // // // // //         setIsVisible(false);
// // // // // // // //       } else {
// // // // // // // //         setIsVisible(true);
// // // // // // // //       }
// // // // // // // //       setLastScrollY(currentScrollY);
// // // // // // // //     };

// // // // // // // //     window.addEventListener('scroll', handleScroll);

// // // // // // // //     return () => {
// // // // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // // // //     };
// // // // // // // //   }, [lastScrollY]); // Re-run effect only when lastScrollY changes

// // // // // // // //   return (
// // // // // // // //     <nav
// // // // // // // //       className={`
// // // // // // // //         bg-[rgba(17,24,39,0.8)] text-white fixed top-0 left-0 w-full z-50 py-1 backdrop-blur-sm
// // // // // // // //         transition-transform duration-300 ease-in-out
// // // // // // // //         ${isVisible ? 'translate-y-0' : '-translate-y-full'}
// // // // // // // //       `}
// // // // // // // //     >
// // // // // // // //       <div className="container mx-auto flex justify-between items-center px-4">
// // // // // // // //         {/* Brand Logo/Name */}
// // // // // // // //         <Link
// // // // // // // //           to="/"
// // // // // // // //           className="text-2xl font-bold text-white hover:text-gray-300"
// // // // // // // //         >
// // // // // // // //           NY Venture
// // // // // // // //         </Link>

// // // // // // // //         {/* Navigation Links */}
// // // // // // // //         <ul className="flex space-x-6 items-center">
// // // // // // // //           {navItems.map((item) => (
// // // // // // // //             <li key={item.name} className="relative group">
// // // // // // // //               {item.isDropdown ? (
// // // // // // // //                 <>
// // // // // // // //                   <Link
// // // // // // // //                     to={item.path}
// // // // // // // //                     className="block cursor-pointer px-4 py-2 text-white hover:text-gray-300"
// // // // // // // //                   >
// // // // // // // //                     {item.name}
// // // // // // // //                   </Link>

// // // // // // // //                   {/* Main dropdown panel */}
// // // // // // // //                   <div
// // // // // // // //                     className="absolute left-1/2 -translate-x-1/2 top-full bg-gray-700 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-100 invisible z-10 p-3 flex"
// // // // // // // //                     onMouseLeave={() => setHoveredCategorySlug(null)}
// // // // // // // //                   >
// // // // // // // //                     {/* First Column: Main Categories */}
// // // // // // // //                     <div className="flex flex-col">
// // // // // // // //                       <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Categories</h3>
// // // // // // // //                       <ul className="space-y-1 min-w-[200px]">
// // // // // // // //                         {item.dropdownItems?.map((dropdownItem) => (
// // // // // // // //                           <li
// // // // // // // //                             key={dropdownItem.name}
// // // // // // // //                             onMouseEnter={() => setHoveredCategorySlug(dropdownItem.categorySlug)}
// // // // // // // //                           >
// // // // // // // //                             <Link
// // // // // // // //                               to={`/products/${dropdownItem.categorySlug}`}
// // // // // // // //                               className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // //                             >
// // // // // // // //                               {dropdownItem.name}
// // // // // // // //                             </Link>
// // // // // // // //                           </li>
// // // // // // // //                         ))}
// // // // // // // //                       </ul>
// // // // // // // //                     </div>

// // // // // // // //                     {/* Second Column: Conditionally rendered to show Copper Subcategories */}
// // // // // // // //                     {hoveredCategorySlug === 'copper-items' && (
// // // // // // // //                       <div className="flex flex-col ml-8">
// // // // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Copper Items</h3>
// // // // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // // // //                           {copperSubCategories.map((subItem) => (
// // // // // // // //                             <li key={subItem.name}>
// // // // // // // //                               <Link
// // // // // // // //                                 to={subItem.path}
// // // // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // //                               >
// // // // // // // //                                 {subItem.name}
// // // // // // // //                               </Link>
// // // // // // // //                             </li>
// // // // // // // //                           ))}
// // // // // // // //                           <li>
// // // // // // // //                             <Link
// // // // // // // //                               to="/products/copper-items"
// // // // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // //                             >
// // // // // // // //                               View All Copper Items
// // // // // // // //                             </Link>
// // // // // // // //                           </li>
// // // // // // // //                         </ul>
// // // // // // // //                       </div>
// // // // // // // //                     )}

// // // // // // // //                     {/* Third Column: Conditionally rendered to show Bagas Disposables Subcategories */}
// // // // // // // //                     {hoveredCategorySlug === 'bagas-disposables' && (
// // // // // // // //                       <div className="flex flex-col ml-8">
// // // // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Bagas Disposables</h3>
// // // // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // // // //                           {bagasDisposablesSubCategories.map((subItem) => (
// // // // // // // //                             <li key={subItem.name}>
// // // // // // // //                               <Link
// // // // // // // //                                 to={subItem.path}
// // // // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // //                               >
// // // // // // // //                                 {subItem.name}
// // // // // // // //                               </Link>
// // // // // // // //                             </li>
// // // // // // // //                           ))}
// // // // // // // //                             <li>
// // // // // // // //                             <Link
// // // // // // // //                               to="/products/bagas-disposables"
// // // // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // //                             >
// // // // // // // //                               View All Bagas Disposables
// // // // // // // //                             </Link>
// // // // // // // //                           </li>
// // // // // // // //                         </ul>
// // // // // // // //                       </div>
// // // // // // // //                     )}

// // // // // // // //                     {/* Fourth Column: Conditionally rendered to show Bar Accessories Subcategories */}
// // // // // // // //                     {hoveredCategorySlug === 'bar-accessories' && (
// // // // // // // //                       <div className="flex flex-col ml-8">
// // // // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Bar Accessories</h3>
// // // // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // // // //                           {barAccessoriesSubCategories.map((subItem) => (
// // // // // // // //                             <li key={subItem.name}>
// // // // // // // //                               <Link
// // // // // // // //                                 to={subItem.path}
// // // // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // //                               >
// // // // // // // //                                 {subItem.name}
// // // // // // // //                               </Link>
// // // // // // // //                             </li>
// // // // // // // //                           ))}
// // // // // // // //                           <li>
// // // // // // // //                             <Link
// // // // // // // //                               to="/products/bar-accessories"
// // // // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // // //                             >
// // // // // // // //                               View All Bar Accessories
// // // // // // // //                             </Link>
// // // // // // // //                           </li>
// // // // // // // //                         </ul>
// // // // // // // //                       </div>
// // // // // // // //                     )}

// // // // // // // //                   </div>
// // // // // // // //                 </>
// // // // // // // //               ) : (
// // // // // // // //                 <Link
// // // // // // // //                   to={item.path}
// // // // // // // //                   className="block px-4 py-2 text-white hover:text-gray-300"
// // // // // // // //                 >
// // // // // // // //                   {item.name === 'Cart' ? ( // Check if the item is 'Cart'
// // // // // // // //                     <div className="relative flex items-center"> {/* Changed to relative for badge positioning */}
// // // // // // // //                       {/* Your provided SVG code for the cart icon */}
// // // // // // // //                       <svg
// // // // // // // //                         xmlns="http://www.w3.org/2000/svg"
// // // // // // // //                         viewBox="0 0 512 512"
// // // // // // // //                         className="w-8 h-8" // Tailwind classes for sizing
// // // // // // // //                         fill="currentColor" // Ensures the icon uses the current text color (white in your case)
// // // // // // // //                       >
// // // // // // // //                         <path d="M351.9 329.506H206.81l-3.072-12.56H368.16l26.63-116.019-217.23-26.04-9.952-58.09h-50.4v21.946h31.894l35.233 191.246a32.927 32.927 0 1 0 36.363 21.462h100.244a32.825 32.825 0 1 0 30.957-21.945zM181.427 197.45l186.51 22.358-17.258 75.195H198.917z" data-name="Shopping Cart"/>
// // // // // // // //                       </svg>

// // // // // // // //                       {itemCount > 0 && (
// // // // // // // //                         <span className="absolute -top-1 -right-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full flex items-center justify-center min-w-[20px] h-[20px] transform translate-x-1/2 -translate-y-1/2"> {/* Adjusted for absolute positioning */}
// // // // // // // //                           {itemCount}
// // // // // // // //                         </span>
// // // // // // // //                       )}
// // // // // // // //                     </div>
// // // // // // // //                   ) : (
// // // // // // // //                     item.name
// // // // // // // //                   )}
// // // // // // // //                 </Link>
// // // // // // // //               )}
// // // // // // // //             </li>
// // // // // // // //           ))}
// // // // // // // //         </ul>
// // // // // // // //       </div>
// // // // // // // //     </nav>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Navbar;




// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { Link } from 'react-router-dom';
// // // // // // // import { useCart } from '../context/CartContext';
// // // // // // // // import { PiShoppingCartBold } from 'react-icons/pi'; // Removed this line as we're using a direct SVG

// // // // // // // // Define the interfaces for your navigation items
// // // // // // // interface NestedDropdownItem {
// // // // // // //   name: string;
// // // // // // //   path: string;
// // // // // // // }

// // // // // // // interface DropdownItem {
// // // // // // //   name: string;
// // // // // // //   categorySlug: string;
// // // // // // // }

// // // // // // // interface NavItem {
// // // // // // //   name: string;
// // // // // // //   path: string;
// // // // // // //   isDropdown?: boolean;
// // // // // // //   dropdownItems?: DropdownItem[];
// // // // // // // }

// // // // // // // const Navbar: React.FC = () => {
// // // // // // //   const [hoveredCategorySlug, setHoveredCategorySlug] = useState<string | null>(null);
// // // // // // //   const { itemCount } = useCart();

// // // // // // //   // New state for controlling Navbar visibility on scroll
// // // // // // //   const [isVisible, setIsVisible] = useState(true);
// // // // // // //   const [lastScrollY, setLastScrollY] = useState(0);

// // // // // // //   // Helper function to slugify names (unchanged)
// // // // // // //   const slugify = (text: string) => {
// // // // // // //     return text
// // // // // // //       .toString()
// // // // // // //       .normalize('NFD')
// // // // // // //       .replace(/[\u0300-\u036f]/g, '')
// // // // // // //       .toLowerCase()
// // // // // // //       .trim()
// // // // // // //       .replace(/\s+/g, '-')
// // // // // // //       .replace(/[^-\w]+/g, '');
// // // // // // //   };

// // // // // // //   // Subcategory data (unchanged)
// // // // // // //   const copperSubCategories: NestedDropdownItem[] = [
// // // // // // //     { name: 'Copper Bottles', path: `/products/copper-items/copper-bottles` },
// // // // // // //     { name: 'Copper Jugs', path: `/products/copper-items/copper-jugs` },
// // // // // // //     { name: 'Copper Jars', path: `/products/copper-items/copper-jars` },
// // // // // // //     { name: 'Copper Matkas', path: `/products/copper-items/copper-matkas` },
// // // // // // //     { name: 'Copper Utensils Set', path: `/products/copper-items/copper-utensils-sets` },
// // // // // // //   ];

// // // // // // //   const bagasDisposablesSubCategories: NestedDropdownItem[] = [
// // // // // // //     { name: 'Meal Trays', path: `/products/bagas-disposables/meal-trays` },
// // // // // // //     { name: 'Cups', path: `/products/bagas-disposables/cups` },
// // // // // // //     { name: 'Plates', path: `/products/bagas-disposables/plates` },
// // // // // // //     { name: 'Utensils and Straws', path: `/products/bagas-disposables/utensils-straws` },
// // // // // // //   ];

// // // // // // //   const barAccessoriesSubCategories: NestedDropdownItem[] = [
// // // // // // //     { name: 'Ice Buckets & Chillers', path: `/products/bar-accessories/ice-buckets-chillers` },
// // // // // // //     { name: 'Jiggers & Peg Measures', path: `/products/bar-accessories/jiggers-peg-measures` },
// // // // // // //     { name: 'Cocktail Shakers', path: `/products/bar-accessories/cocktail-shakers` },
// // // // // // //     { name: 'Bar Tools & Accessories', path: `/products/bar-accessories/bar-tools-accessories` },
// // // // // // //     { name: 'Bartender Sets', path: `/products/bar-accessories/bartender-sets` },
// // // // // // //     { name: 'Drinkware', path: `/products/bar-accessories/drinkware` },
// // // // // // //     { name: 'Bar Table Service', path: `/products/bar-accessories/bar-table-service` },
// // // // // // //   ];

// // // // // // //   const navItems: NavItem[] = [
// // // // // // //     { name: 'Home', path: '/' },
// // // // // // //     {
// // // // // // //       name: 'Products',
// // // // // // //       path: '/products',
// // // // // // //       isDropdown: true,
// // // // // // //       dropdownItems: [
// // // // // // //         { name: 'Bar Accessories', categorySlug: 'bar-accessories' },
// // // // // // //         { name: 'Bagas Disposables', categorySlug: 'bagas-disposables' },
// // // // // // //         { name: 'Copper Items', categorySlug: 'copper-items' },
// // // // // // //         { name: 'Ceramic Items', categorySlug: 'ceramic-items' },
// // // // // // //         { name: 'Terracotta Items', categorySlug: 'terracotta-items' },
// // // // // // //         { name: 'Packaging Material', categorySlug: 'packaging-material' },
// // // // // // //       ],
// // // // // // //     },
// // // // // // //     { name: 'Contact Us', path: '/contact-us' },
// // // // // // //     { name: 'About Us', path: '/about-us' },
// // // // // // //     { name: 'Create', path: '/create' },
// // // // // // //     { name: 'Cart', path: '/cart' }, // Keep this as 'Cart' for internal identification
// // // // // // //   ];

// // // // // // //   // Effect to handle scroll behavior
// // // // // // //   useEffect(() => {
// // // // // // //     const handleScroll = () => {
// // // // // // //       const currentScrollY = window.scrollY;

// // // // // // //       // Only hide if scrolling down and not at the very top
// // // // // // //       // And only show if scrolling up
// // // // // // //       if (currentScrollY > lastScrollY && currentScrollY > 70) { // 70px threshold to start hiding
// // // // // // //         setIsVisible(false);
// // // // // // //       } else {
// // // // // // //         setIsVisible(true);
// // // // // // //       }
// // // // // // //       setLastScrollY(currentScrollY);
// // // // // // //     };

// // // // // // //     window.addEventListener('scroll', handleScroll);

// // // // // // //     return () => {
// // // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // // //     };
// // // // // // //   }, [lastScrollY]); // Re-run effect only when lastScrollY changes

// // // // // // //   return (
// // // // // // //     <nav
// // // // // // //       className={`
// // // // // // //         bg-[rgba(17,24,39,0.8)] text-white fixed top-0 left-0 w-full z-50 py-1 backdrop-blur-sm
// // // // // // //         transition-transform duration-300 ease-in-out
// // // // // // //         ${isVisible ? 'translate-y-0' : '-translate-y-full'}
// // // // // // //       `}
// // // // // // //     >
// // // // // // //       <div className="container mx-auto flex justify-between items-center px-4">
// // // // // // //         {/* Brand Logo/Name */}
// // // // // // //         <Link
// // // // // // //           to="/"
// // // // // // //           className="text-2xl font-bold text-white hover:text-gray-300"
// // // // // // //         >
// // // // // // //           NY Venture
// // // // // // //         </Link>

// // // // // // //         {/* Navigation Links */}
// // // // // // //         <ul className="flex space-x-6 items-center">
// // // // // // //           {navItems.map((item) => (
// // // // // // //             <li key={item.name} className="relative group">
// // // // // // //               {item.isDropdown ? (
// // // // // // //                 <>
// // // // // // //                   <Link
// // // // // // //                     to={item.path}
// // // // // // //                     className="block cursor-pointer px-4 py-2 text-white hover:text-gray-300"
// // // // // // //                   >
// // // // // // //                     {item.name}
// // // // // // //                   </Link>

// // // // // // //                   {/* Main dropdown panel */}
// // // // // // //                   <div
// // // // // // //                     className="absolute left-1/2 -translate-x-1/2 top-full bg-gray-700 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-100 invisible z-10 p-3 flex"
// // // // // // //                     onMouseLeave={() => setHoveredCategorySlug(null)}
// // // // // // //                   >
// // // // // // //                     {/* First Column: Main Categories */}
// // // // // // //                     <div className="flex flex-col">
// // // // // // //                       <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Categories</h3>
// // // // // // //                       <ul className="space-y-1 min-w-[200px]">
// // // // // // //                         {item.dropdownItems?.map((dropdownItem) => (
// // // // // // //                           <li
// // // // // // //                             key={dropdownItem.name}
// // // // // // //                             onMouseEnter={() => setHoveredCategorySlug(dropdownItem.categorySlug)}
// // // // // // //                           >
// // // // // // //                             <Link
// // // // // // //                               to={`/products/${dropdownItem.categorySlug}`}
// // // // // // //                               className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // //                             >
// // // // // // //                               {dropdownItem.name}
// // // // // // //                             </Link>
// // // // // // //                           </li>
// // // // // // //                         ))}
// // // // // // //                       </ul>
// // // // // // //                     </div>

// // // // // // //                     {/* Second Column: Conditionally rendered to show Copper Subcategories */}
// // // // // // //                     {hoveredCategorySlug === 'copper-items' && (
// // // // // // //                       <div className="flex flex-col ml-8">
// // // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Copper Items</h3>
// // // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // // //                           {copperSubCategories.map((subItem) => (
// // // // // // //                             <li key={subItem.name}>
// // // // // // //                               <Link
// // // // // // //                                 to={subItem.path}
// // // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // //                               >
// // // // // // //                                 {subItem.name}
// // // // // // //                               </Link>
// // // // // // //                             </li>
// // // // // // //                           ))}
// // // // // // //                           <li>
// // // // // // //                             <Link
// // // // // // //                               to="/products/copper-items"
// // // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // //                             >
// // // // // // //                               View All Copper Items
// // // // // // //                             </Link>
// // // // // // //                           </li>
// // // // // // //                         </ul>
// // // // // // //                       </div>
// // // // // // //                     )}

// // // // // // //                     {/* Third Column: Conditionally rendered to show Bagas Disposables Subcategories */}
// // // // // // //                     {hoveredCategorySlug === 'bagas-disposables' && (
// // // // // // //                       <div className="flex flex-col ml-8">
// // // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Bagas Disposables</h3>
// // // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // // //                           {bagasDisposablesSubCategories.map((subItem) => (
// // // // // // //                             <li key={subItem.name}>
// // // // // // //                               <Link
// // // // // // //                                 to={subItem.path}
// // // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // //                               >
// // // // // // //                                 {subItem.name}
// // // // // // //                               </Link>
// // // // // // //                             </li>
// // // // // // //                           ))}
// // // // // // //                             <li>
// // // // // // //                             <Link
// // // // // // //                               to="/products/bagas-disposables"
// // // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // //                             >
// // // // // // //                               View All Bagas Disposables
// // // // // // //                             </Link>
// // // // // // //                           </li>
// // // // // // //                         </ul>
// // // // // // //                       </div>
// // // // // // //                     )}

// // // // // // //                     {/* Fourth Column: Conditionally rendered to show Bar Accessories Subcategories */}
// // // // // // //                     {hoveredCategorySlug === 'bar-accessories' && (
// // // // // // //                       <div className="flex flex-col ml-8">
// // // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Bar Accessories</h3>
// // // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // // //                           {barAccessoriesSubCategories.map((subItem) => (
// // // // // // //                             <li key={subItem.name}>
// // // // // // //                               <Link
// // // // // // //                                 to={subItem.path}
// // // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // //                               >
// // // // // // //                                 {subItem.name}
// // // // // // //                               </Link>
// // // // // // //                             </li>
// // // // // // //                           ))}
// // // // // // //                           <li>
// // // // // // //                             <Link
// // // // // // //                               to="/products/bar-accessories"
// // // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // // //                             >
// // // // // // //                               View All Bar Accessories
// // // // // // //                             </Link>
// // // // // // //                           </li>
// // // // // // //                         </ul>
// // // // // // //                       </div>
// // // // // // //                     )}

// // // // // // //                   </div>
// // // // // // //                 </>
// // // // // // //               ) : (
// // // // // // //                 <Link
// // // // // // //                   to={item.path}
// // // // // // //                   className="block px-4 py-2 text-white hover:text-gray-300"
// // // // // // //                 >
// // // // // // //                   {item.name === 'Cart' ? ( // Check if the item is 'Cart'
// // // // // // //                     <div className="relative flex items-center">
// // // // // // //                       {/* Your provided SVG code for the cart icon */}
// // // // // // //                       <svg
// // // // // // //                         xmlns="http://www.w3.org/2000/svg"
// // // // // // //                         viewBox="0 0 512 512"
// // // // // // //                         className="w-8 h-8" // Icon size
// // // // // // //                         fill="currentColor"
// // // // // // //                       >
// // // // // // //                         <path d="M351.9 329.506H206.81l-3.072-12.56H368.16l26.63-116.019-217.23-26.04-9.952-58.09h-50.4v21.946h31.894l35.233 191.246a32.927 32.927 0 1 0 36.363 21.462h100.244a32.825 32.825 0 1 0 30.957-21.945zM181.427 197.45l186.51 22.358-17.258 75.195H198.917z" data-name="Shopping Cart"/>
// // // // // // //                       </svg>

// // // // // // //                       {itemCount > 0 && (
// // // // // // //                         <span className="absolute -top-[5px] -right-[5px] w-[24px] h-[24px] text-xs font-bold text-white bg-red-500 rounded-full flex items-center justify-center leading-none"> {/* CHANGED: specific pixel values for top/right, fixed width/height, removed transform and px/py for more control */}
// // // // // // //                           {itemCount}
// // // // // // //                         </span>
// // // // // // //                       )}
// // // // // // //                     </div>
// // // // // // //                   ) : (
// // // // // // //                     item.name
// // // // // // //                   )}
// // // // // // //                 </Link>
// // // // // // //               )}
// // // // // // //             </li>
// // // // // // //           ))}
// // // // // // //         </ul>
// // // // // // //       </div>
// // // // // // //     </nav>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Navbar;




// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { Link } from 'react-router-dom';
// // // // // // import { useCart } from '../context/CartContext';
// // // // // // // import { PiShoppingCartBold } from 'react-icons/pi'; // Removed this line as we're using a direct SVG

// // // // // // // Define the interfaces for your navigation items
// // // // // // interface NestedDropdownItem {
// // // // // //   name: string;
// // // // // //   path: string;
// // // // // // }

// // // // // // interface DropdownItem {
// // // // // //   name: string;
// // // // // //   categorySlug: string;
// // // // // // }

// // // // // // interface NavItem {
// // // // // //   name: string;
// // // // // //   path: string;
// // // // // //   isDropdown?: boolean;
// // // // // //   dropdownItems?: DropdownItem[];
// // // // // // }

// // // // // // const Navbar: React.FC = () => {
// // // // // //   const [hoveredCategorySlug, setHoveredCategorySlug] = useState<string | null>(null);
// // // // // //   const { itemCount } = useCart();

// // // // // //   // New state for controlling Navbar visibility on scroll
// // // // // //   const [isVisible, setIsVisible] = useState(true);
// // // // // //   const [lastScrollY, setLastScrollY] = useState(0);

// // // // // //   // Helper function to slugify names (unchanged)
// // // // // //   const slugify = (text: string) => {
// // // // // //     return text
// // // // // //       .toString()
// // // // // //       .normalize('NFD')
// // // // // //       .replace(/[\u0300-\u036f]/g, '')
// // // // // //       .toLowerCase()
// // // // // //       .trim()
// // // // // //       .replace(/\s+/g, '-')
// // // // // //       .replace(/[^-\w]+/g, '');
// // // // // //   };

// // // // // //   // Subcategory data (unchanged)
// // // // // //   const copperSubCategories: NestedDropdownItem[] = [
// // // // // //     { name: 'Copper Bottles', path: `/products/copper-items/copper-bottles` },
// // // // // //     { name: 'Copper Jugs', path: `/products/copper-items/copper-jugs` },
// // // // // //     { name: 'Copper Jars', path: `/products/copper-items/copper-jars` },
// // // // // //     { name: 'Copper Matkas', path: `/products/copper-items/copper-matkas` },
// // // // // //     { name: 'Copper Utensils Set', path: `/products/copper-items/copper-utensils-sets` },
// // // // // //   ];

// // // // // //   const bagasDisposablesSubCategories: NestedDropdownItem[] = [
// // // // // //     { name: 'Meal Trays', path: `/products/bagas-disposables/meal-trays` },
// // // // // //     { name: 'Cups', path: `/products/bagas-disposables/cups` },
// // // // // //     { name: 'Plates', path: `/products/bagas-disposables/plates` },
// // // // // //     { name: 'Utensils and Straws', path: `/products/bagas-disposables/utensils-straws` },
// // // // // //   ];

// // // // // //   const barAccessoriesSubCategories: NestedDropdownItem[] = [
// // // // // //     { name: 'Ice Buckets & Chillers', path: `/products/bar-accessories/ice-buckets-chillers` },
// // // // // //     { name: 'Jiggers & Peg Measures', path: `/products/bar-accessories/jiggers-peg-measures` },
// // // // // //     { name: 'Cocktail Shakers', path: `/products/bar-accessories/cocktail-shakers` },
// // // // // //     { name: 'Bar Tools & Accessories', path: `/products/bar-accessories/bar-tools-accessories` },
// // // // // //     { name: 'Bartender Sets', path: `/products/bar-accessories/bartender-sets` },
// // // // // //     { name: 'Drinkware', path: `/products/bar-accessories/drinkware` },
// // // // // //     { name: 'Bar Table Service', path: `/products/bar-accessories/bar-table-service` },
// // // // // //   ];

// // // // // //   const navItems: NavItem[] = [
// // // // // //     { name: 'Home', path: '/' },
// // // // // //     {
// // // // // //       name: 'Products',
// // // // // //       path: '/products',
// // // // // //       isDropdown: true,
// // // // // //       dropdownItems: [
// // // // // //         { name: 'Bar Accessories', categorySlug: 'bar-accessories' },
// // // // // //         { name: 'Bagas Disposables', categorySlug: 'bagas-disposables' },
// // // // // //         { name: 'Copper Items', categorySlug: 'copper-items' },
// // // // // //         { name: 'Ceramic Items', categorySlug: 'ceramic-items' },
// // // // // //         { name: 'Terracotta Items', categorySlug: 'terracotta-items' },
// // // // // //         { name: 'Packaging Material', categorySlug: 'packaging-material' },
// // // // // //       ],
// // // // // //     },
// // // // // //     { name: 'Contact Us', path: '/contact-us' },
// // // // // //     { name: 'About Us', path: '/about-us' },
// // // // // //     { name: 'Create', path: '/create' },
// // // // // //     { name: 'Cart', path: '/cart' }, // Keep this as 'Cart' for internal identification
// // // // // //   ];

// // // // // //   // Effect to handle scroll behavior
// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => {
// // // // // //       const currentScrollY = window.scrollY;

// // // // // //       // Only hide if scrolling down and not at the very top
// // // // // //       // And only show if scrolling up
// // // // // //       if (currentScrollY > lastScrollY && currentScrollY > 70) { // 70px threshold to start hiding
// // // // // //         setIsVisible(false);
// // // // // //       } else {
// // // // // //         setIsVisible(true);
// // // // // //       }
// // // // // //       setLastScrollY(currentScrollY);
// // // // // //     };

// // // // // //     window.addEventListener('scroll', handleScroll);

// // // // // //     return () => {
// // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // //     };
// // // // // //   }, [lastScrollY]); // Re-run effect only when lastScrollY changes

// // // // // //   return (
// // // // // //     <nav
// // // // // //       className={`
// // // // // //         bg-[rgba(17,24,39,0.8)] text-white fixed top-0 left-0 w-full z-50 py-1 backdrop-blur-sm
// // // // // //         transition-transform duration-300 ease-in-out
// // // // // //         ${isVisible ? 'translate-y-0' : '-translate-y-full'}
// // // // // //       `}
// // // // // //     >
// // // // // //       <div className="container mx-auto flex justify-between items-center px-4">
// // // // // //         {/* Brand Logo/Name */}
// // // // // //         <Link
// // // // // //           to="/"
// // // // // //           className="text-2xl font-bold text-white hover:text-gray-300"
// // // // // //         >
// // // // // //           NY Venture
// // // // // //         </Link>

// // // // // //         {/* Navigation Links */}
// // // // // //         <ul className="flex space-x-6 items-center">
// // // // // //           {navItems.map((item) => (
// // // // // //             <li key={item.name} className="relative group">
// // // // // //               {item.isDropdown ? (
// // // // // //                 <>
// // // // // //                   <Link
// // // // // //                     to={item.path}
// // // // // //                     className="block cursor-pointer px-4 py-2 text-white hover:text-gray-300"
// // // // // //                   >
// // // // // //                     {item.name}
// // // // // //                   </Link>

// // // // // //                   {/* Main dropdown panel */}
// // // // // //                   <div
// // // // // //                     className="absolute left-1/2 -translate-x-1/2 top-full bg-gray-700 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-100 invisible z-10 p-3 flex"
// // // // // //                     onMouseLeave={() => setHoveredCategorySlug(null)}
// // // // // //                   >
// // // // // //                     {/* First Column: Main Categories */}
// // // // // //                     <div className="flex flex-col">
// // // // // //                       <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Categories</h3>
// // // // // //                       <ul className="space-y-1 min-w-[200px]">
// // // // // //                         {item.dropdownItems?.map((dropdownItem) => (
// // // // // //                           <li
// // // // // //                             key={dropdownItem.name}
// // // // // //                             onMouseEnter={() => setHoveredCategorySlug(dropdownItem.categorySlug)}
// // // // // //                           >
// // // // // //                             <Link
// // // // // //                               to={`/products/${dropdownItem.categorySlug}`}
// // // // // //                               className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // //                             >
// // // // // //                               {dropdownItem.name}
// // // // // //                             </Link>
// // // // // //                           </li>
// // // // // //                         ))}
// // // // // //                       </ul>
// // // // // //                     </div>

// // // // // //                     {/* Second Column: Conditionally rendered to show Copper Subcategories */}
// // // // // //                     {hoveredCategorySlug === 'copper-items' && (
// // // // // //                       <div className="flex flex-col ml-8">
// // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Copper Items</h3>
// // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // //                           {copperSubCategories.map((subItem) => (
// // // // // //                             <li key={subItem.name}>
// // // // // //                               <Link
// // // // // //                                 to={subItem.path}
// // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // //                               >
// // // // // //                                 {subItem.name}
// // // // // //                               </Link>
// // // // // //                             </li>
// // // // // //                           ))}
// // // // // //                           <li>
// // // // // //                             <Link
// // // // // //                               to="/products/copper-items"
// // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // //                             >
// // // // // //                               View All Copper Items
// // // // // //                             </Link>
// // // // // //                           </li>
// // // // // //                         </ul>
// // // // // //                       </div>
// // // // // //                     )}

// // // // // //                     {/* Third Column: Conditionally rendered to show Bagas Disposables Subcategories */}
// // // // // //                     {hoveredCategorySlug === 'bagas-disposables' && (
// // // // // //                       <div className="flex flex-col ml-8">
// // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Bagas Disposables</h3>
// // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // //                           {bagasDisposablesSubCategories.map((subItem) => (
// // // // // //                             <li key={subItem.name}>
// // // // // //                               <Link
// // // // // //                                 to={subItem.path}
// // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // //                               >
// // // // // //                                 {subItem.name}
// // // // // //                               </Link>
// // // // // //                             </li>
// // // // // //                           ))}
// // // // // //                             <li>
// // // // // //                             <Link
// // // // // //                               to="/products/bagas-disposables"
// // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // //                             >
// // // // // //                               View All Bagas Disposables
// // // // // //                             </Link>
// // // // // //                           </li>
// // // // // //                         </ul>
// // // // // //                       </div>
// // // // // //                     )}

// // // // // //                     {/* Fourth Column: Conditionally rendered to show Bar Accessories Subcategories */}
// // // // // //                     {hoveredCategorySlug === 'bar-accessories' && (
// // // // // //                       <div className="flex flex-col ml-8">
// // // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Bar Accessories</h3>
// // // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // // //                           {barAccessoriesSubCategories.map((subItem) => (
// // // // // //                             <li key={subItem.name}>
// // // // // //                               <Link
// // // // // //                                 to={subItem.path}
// // // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // //                               >
// // // // // //                                 {subItem.name}
// // // // // //                               </Link>
// // // // // //                             </li>
// // // // // //                           ))}
// // // // // //                           <li>
// // // // // //                             <Link
// // // // // //                               to="/products/bar-accessories"
// // // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // // //                             >
// // // // // //                               View All Bar Accessories
// // // // // //                             </Link>
// // // // // //                           </li>
// // // // // //                         </ul>
// // // // // //                       </div>
// // // // // //                     )}

// // // // // //                   </div>
// // // // // //                 </>
// // // // // //               ) : (
// // // // // //                 <Link
// // // // // //                   to={item.path}
// // // // // //                   className="block px-4 py-2 text-white hover:text-gray-300"
// // // // // //                 >
// // // // // //                   {item.name === 'Cart' ? ( // Check if the item is 'Cart'
// // // // // //                     <div className="relative flex items-center">
// // // // // //                       {/* Your provided SVG code for the cart icon */}
// // // // // //                       <svg
// // // // // //                         xmlns="http://www.w3.org/2000/svg"
// // // // // //                         viewBox="0 0 512 512"
// // // // // //                         className="w-8 h-8" // Icon size
// // // // // //                         fill="currentColor"
// // // // // //                       >
// // // // // //                         <path d="M351.9 329.506H206.81l-3.072-12.56H368.16l26.63-116.019-217.23-26.04-9.952-58.09h-50.4v21.946h31.894l35.233 191.246a32.927 32.927 0 1 0 36.363 21.462h100.244a32.825 32.825 0 1 0 30.957-21.945zM181.427 197.45l186.51 22.358-17.258 75.195H198.917z" data-name="Shopping Cart"/>
// // // // // //                       </svg>

// // // // // //                       {itemCount > 0 && (
// // // // // //                         <span className="absolute -top-[5px] -right-[5px] text-xs font-bold text-white leading-none"> {/* CHANGED: Removed background, border, fixed width/height, and flex centering for a simple text overlay */}
// // // // // //                           {itemCount}
// // // // // //                         </span>
// // // // // //                       )}
// // // // // //                     </div>
// // // // // //                   ) : (
// // // // // //                     item.name
// // // // // //                   )}
// // // // // //                 </Link>
// // // // // //               )}
// // // // // //             </li>
// // // // // //           ))}
// // // // // //         </ul>
// // // // // //       </div>
// // // // // //     </nav>
// // // // // //   );
// // // // // // };

// // // // // // export default Navbar;


// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { Link } from 'react-router-dom';
// // // // // import { useCart } from '../context/CartContext';
// // // // // // import { PiShoppingCartBold } from 'react-icons/pi'; // Removed this line as we're using a direct SVG

// // // // // // Define the interfaces for your navigation items
// // // // // interface NestedDropdownItem {
// // // // //   name: string;
// // // // //   path: string;
// // // // // }

// // // // // interface DropdownItem {
// // // // //   name: string;
// // // // //   categorySlug: string;
// // // // // }

// // // // // interface NavItem {
// // // // //   name: string;
// // // // //   path: string;
// // // // //   isDropdown?: boolean;
// // // // //   dropdownItems?: DropdownItem[];
// // // // // }

// // // // // const Navbar: React.FC = () => {
// // // // //   const [hoveredCategorySlug, setHoveredCategorySlug] = useState<string | null>(null);
// // // // //   const { itemCount } = useCart();

// // // // //   // New state for controlling Navbar visibility on scroll
// // // // //   const [isVisible, setIsVisible] = useState(true);
// // // // //   const [lastScrollY, setLastScrollY] = useState(0);

// // // // //   // Helper function to slugify names (unchanged)
// // // // //   const slugify = (text: string) => {
// // // // //     return text
// // // // //       .toString()
// // // // //       .normalize('NFD')
// // // // //       .replace(/[\u0300-\u036f]/g, '')
// // // // //       .toLowerCase()
// // // // //       .trim()
// // // // //       .replace(/\s+/g, '-')
// // // // //       .replace(/[^-\w]+/g, '');
// // // // //   };

// // // // //   // Subcategory data (unchanged)
// // // // //   const copperSubCategories: NestedDropdownItem[] = [
// // // // //     { name: 'Copper Bottles', path: `/products/copper-items/copper-bottles` },
// // // // //     { name: 'Copper Jugs', path: `/products/copper-items/copper-jugs` },
// // // // //     { name: 'Copper Jars', path: `/products/copper-items/copper-jars` },
// // // // //     { name: 'Copper Matkas', path: `/products/copper-items/copper-matkas` },
// // // // //     { name: 'Copper Utensils Set', path: `/products/copper-items/copper-utensils-sets` },
// // // // //   ];

// // // // //   const bagasDisposablesSubCategories: NestedDropdownItem[] = [
// // // // //     { name: 'Meal Trays', path: `/products/bagas-disposables/meal-trays` },
// // // // //     { name: 'Cups', path: `/products/bagas-disposables/cups` },
// // // // //     { name: 'Plates', path: `/products/bagas-disposables/plates` },
// // // // //     { name: 'Utensils and Straws', path: `/products/bagas-disposables/utensils-straws` },
// // // // //   ];

// // // // //   const barAccessoriesSubCategories: NestedDropdownItem[] = [
// // // // //     { name: 'Ice Buckets & Chillers', path: `/products/bar-accessories/ice-buckets-chillers` },
// // // // //     { name: 'Jiggers & Peg Measures', path: `/products/bar-accessories/jiggers-peg-measures` },
// // // // //     { name: 'Cocktail Shakers', path: `/products/bar-accessories/cocktail-shakers` },
// // // // //     { name: 'Bar Tools & Accessories', path: `/products/bar-accessories/bar-tools-accessories` },
// // // // //     { name: 'Bartender Sets', path: `/products/bar-accessories/bartender-sets` },
// // // // //     { name: 'Drinkware', path: `/products/bar-accessories/drinkware` },
// // // // //     { name: 'Bar Table Service', path: `/products/bar-accessories/bar-table-service` },
// // // // //   ];

// // // // //   const navItems: NavItem[] = [
// // // // //     { name: 'Home', path: '/' },
// // // // //     {
// // // // //       name: 'Products',
// // // // //       path: '/products',
// // // // //       isDropdown: true,
// // // // //       dropdownItems: [
// // // // //         { name: 'Bar Accessories', categorySlug: 'bar-accessories' },
// // // // //         { name: 'Bagas Disposables', categorySlug: 'bagas-disposables' },
// // // // //         { name: 'Copper Items', categorySlug: 'copper-items' },
// // // // //         { name: 'Ceramic Items', categorySlug: 'ceramic-items' },
// // // // //         { name: 'Terracotta Items', categorySlug: 'terracotta-items' },
// // // // //         { name: 'Packaging Material', categorySlug: 'packaging-material' },
// // // // //       ],
// // // // //     },
// // // // //     { name: 'Contact Us', path: '/contact-us' },
// // // // //     { name: 'About Us', path: '/about-us' },
// // // // //     { name: 'Create', path: '/create' },
// // // // //     { name: 'Cart', path: '/cart' }, // Keep this as 'Cart' for internal identification
// // // // //   ];

// // // // //   // Effect to handle scroll behavior
// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       const currentScrollY = window.scrollY;

// // // // //       // Only hide if scrolling down and not at the very top
// // // // //       // And only show if scrolling up
// // // // //       if (currentScrollY > lastScrollY && currentScrollY > 70) { // 70px threshold to start hiding
// // // // //         setIsVisible(false);
// // // // //       } else {
// // // // //         setIsVisible(true);
// // // // //       }
// // // // //       setLastScrollY(currentScrollY);
// // // // //     };

// // // // //     window.addEventListener('scroll', handleScroll);

// // // // //     return () => {
// // // // //       window.removeEventListener('scroll', handleScroll);
// // // // //     };
// // // // //   }, [lastScrollY]); // Re-run effect only when lastScrollY changes

// // // // //   return (
// // // // //     <nav
// // // // //       className={`
// // // // //         bg-[rgba(17,24,39,0.8)] text-white fixed top-0 left-0 w-full z-50 py-1 backdrop-blur-sm
// // // // //         transition-transform duration-300 ease-in-out
// // // // //         ${isVisible ? 'translate-y-0' : '-translate-y-full'}
// // // // //       `}
// // // // //     >
// // // // //       <div className="container mx-auto flex justify-between items-center px-4">
// // // // //         {/* Brand Logo/Name */}
// // // // //         <Link
// // // // //           to="/"
// // // // //           className="text-2xl font-bold text-white hover:text-gray-300"
// // // // //         >
// // // // //           NY Venture
// // // // //         </Link>

// // // // //         {/* Navigation Links */}
// // // // //         <ul className="flex space-x-6 items-center">
// // // // //           {navItems.map((item) => (
// // // // //             <li key={item.name} className="relative group">
// // // // //               {item.isDropdown ? (
// // // // //                 <>
// // // // //                   <Link
// // // // //                     to={item.path}
// // // // //                     className="block cursor-pointer px-4 py-2 text-white hover:text-gray-300"
// // // // //                   >
// // // // //                     {item.name}
// // // // //                   </Link>

// // // // //                   {/* Main dropdown panel */}
// // // // //                   <div
// // // // //                     className="absolute left-1/2 -translate-x-1/2 top-full bg-gray-700 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-100 invisible z-10 p-3 flex"
// // // // //                     onMouseLeave={() => setHoveredCategorySlug(null)}
// // // // //                   >
// // // // //                     {/* First Column: Main Categories */}
// // // // //                     <div className="flex flex-col">
// // // // //                       <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Categories</h3>
// // // // //                       <ul className="space-y-1 min-w-[200px]">
// // // // //                         {item.dropdownItems?.map((dropdownItem) => (
// // // // //                           <li
// // // // //                             key={dropdownItem.name}
// // // // //                             onMouseEnter={() => setHoveredCategorySlug(dropdownItem.categorySlug)}
// // // // //                           >
// // // // //                             <Link
// // // // //                               to={`/products/${dropdownItem.categorySlug}`}
// // // // //                               className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // //                             >
// // // // //                               {dropdownItem.name}
// // // // //                             </Link>
// // // // //                           </li>
// // // // //                         ))}
// // // // //                       </ul>
// // // // //                     </div>

// // // // //                     {/* Second Column: Conditionally rendered to show Copper Subcategories */}
// // // // //                     {hoveredCategorySlug === 'copper-items' && (
// // // // //                       <div className="flex flex-col ml-8">
// // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Copper Items</h3>
// // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // //                           {copperSubCategories.map((subItem) => (
// // // // //                             <li key={subItem.name}>
// // // // //                               <Link
// // // // //                                 to={subItem.path}
// // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // //                               >
// // // // //                                 {subItem.name}
// // // // //                               </Link>
// // // // //                             </li>
// // // // //                           ))}
// // // // //                           <li>
// // // // //                             <Link
// // // // //                               to="/products/copper-items"
// // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // //                             >
// // // // //                               View All Copper Items
// // // // //                             </Link>
// // // // //                           </li>
// // // // //                         </ul>
// // // // //                       </div>
// // // // //                     )}

// // // // //                     {/* Third Column: Conditionally rendered to show Bagas Disposables Subcategories */}
// // // // //                     {hoveredCategorySlug === 'bagas-disposables' && (
// // // // //                       <div className="flex flex-col ml-8">
// // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Bagas Disposables</h3>
// // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // //                           {bagasDisposablesSubCategories.map((subItem) => (
// // // // //                             <li key={subItem.name}>
// // // // //                               <Link
// // // // //                                 to={subItem.path}
// // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // //                               >
// // // // //                                 {subItem.name}
// // // // //                               </Link>
// // // // //                             </li>
// // // // //                           ))}
// // // // //                             <li>
// // // // //                             <Link
// // // // //                               to="/products/bagas-disposables"
// // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // //                             >
// // // // //                               View All Bagas Disposables
// // // // //                             </Link>
// // // // //                           </li>
// // // // //                         </ul>
// // // // //                       </div>
// // // // //                     )}

// // // // //                     {/* Fourth Column: Conditionally rendered to show Bar Accessories Subcategories */}
// // // // //                     {hoveredCategorySlug === 'bar-accessories' && (
// // // // //                       <div className="flex flex-col ml-8">
// // // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Bar Accessories</h3>
// // // // //                         <ul className="space-y-1 min-w-[200px]">
// // // // //                           {barAccessoriesSubCategories.map((subItem) => (
// // // // //                             <li key={subItem.name}>
// // // // //                               <Link
// // // // //                                 to={subItem.path}
// // // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // //                               >
// // // // //                                 {subItem.name}
// // // // //                               </Link>
// // // // //                             </li>
// // // // //                           ))}
// // // // //                           <li>
// // // // //                             <Link
// // // // //                               to="/products/bar-accessories"
// // // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // // //                             >
// // // // //                               View All Bar Accessories
// // // // //                             </Link>
// // // // //                           </li>
// // // // //                         </ul>
// // // // //                       </div>
// // // // //                     )}

// // // // //                   </div>
// // // // //                 </>
// // // // //               ) : (
// // // // //                 <Link
// // // // //                   to={item.path}
// // // // //                   className="block px-4 py-2 text-white hover:text-gray-300"
// // // // //                 >
// // // // //                   {item.name === 'Cart' ? ( // Check if the item is 'Cart'
// // // // //                     <div className="relative flex items-center">
// // // // //                       {/* Your provided SVG code for the cart icon */}
// // // // //                       <svg
// // // // //                         xmlns="http://www.w3.org/2000/svg"
// // // // //                         viewBox="0 0 512 512"
// // // // //                         className="w-8 h-8" // Icon size
// // // // //                         fill="currentColor"
// // // // //                       >
// // // // //                         <path d="M351.9 329.506H206.81l-3.072-12.56H368.16l26.63-116.019-217.23-26.04-9.952-58.09h-50.4v21.946h31.894l35.233 191.246a32.927 32.927 0 1 0 36.363 21.462h100.244a32.825 32.825 0 1 0 30.957-21.945zM181.427 197.45l186.51 22.358-17.258 75.195H198.917z" data-name="Shopping Cart"/>
// // // // //                       </svg>

// // // // //                       {itemCount > 0 && (
// // // // //                         <span className="absolute -top-[2px] -right-[2px] w-[18px] h-[18px] text-xs font-bold text-white bg-red-500 rounded-full flex items-center justify-center leading-none"> {/* CHANGED: width, height, and adjusted top/right */}
// // // // //                           {itemCount}
// // // // //                         </span>
// // // // //                       )}
// // // // //                     </div>
// // // // //                   ) : (
// // // // //                     item.name
// // // // //                   )}
// // // // //                 </Link>
// // // // //               )}
// // // // //             </li>
// // // // //           ))}
// // // // //         </ul>
// // // // //       </div>
// // // // //     </nav>
// // // // //   );
// // // // // };

// // // // // export default Navbar;





// // // // import React, { useState, useEffect } from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import { useCart } from '../context/CartContext';
// // // // // import { PiShoppingCartBold } from 'react-icons/pi'; // Removed this line as we're using a direct SVG

// // // // // Define the interfaces for your navigation items
// // // // interface NestedDropdownItem {
// // // //   name: string;
// // // //   path: string;
// // // // }

// // // // interface DropdownItem {
// // // //   name: string;
// // // //   categorySlug: string;
// // // // }

// // // // interface NavItem {
// // // //   name: string;
// // // //   path: string;
// // // //   isDropdown?: boolean;
// // // //   dropdownItems?: DropdownItem[];
// // // // }

// // // // const Navbar: React.FC = () => {
// // // //   const [hoveredCategorySlug, setHoveredCategorySlug] = useState<string | null>(null);
// // // //   const { itemCount } = useCart();

// // // //   // New state for controlling Navbar visibility on scroll
// // // //   const [isVisible, setIsVisible] = useState(true);
// // // //   const [lastScrollY, setLastScrollY] = useState(0);

// // // //   // Helper function to slugify names (unchanged)
// // // //   const slugify = (text: string) => {
// // // //     return text
// // // //       .toString()
// // // //       .normalize('NFD')
// // // //       .replace(/[\u0300-\u036f]/g, '')
// // // //       .toLowerCase()
// // // //       .trim()
// // // //       .replace(/\s+/g, '-')
// // // //       .replace(/[^-\w]+/g, '');
// // // //   };

// // // //   // Subcategory data (unchanged)
// // // //   const copperSubCategories: NestedDropdownItem[] = [
// // // //     { name: 'Copper Bottles', path: `/products/copper-items/copper-bottles` },
// // // //     { name: 'Copper Jugs', path: `/products/copper-items/copper-jugs` },
// // // //     { name: 'Copper Jars', path: `/products/copper-items/copper-jars` },
// // // //     { name: 'Copper Matkas', path: `/products/copper-items/copper-matkas` },
// // // //     { name: 'Copper Utensils Set', path: `/products/copper-items/copper-utensils-sets` },
// // // //   ];

// // // //   const bagasDisposablesSubCategories: NestedDropdownItem[] = [
// // // //     { name: 'Meal Trays', path: `/products/bagas-disposables/meal-trays` },
// // // //     { name: 'Cups', path: `/products/bagas-disposables/cups` },
// // // //     { name: 'Plates', path: `/products/bagas-disposables/plates` },
// // // //     { name: 'Utensils and Straws', path: `/products/bagas-disposables/utensils-straws` },
// // // //   ];

// // // //   const barAccessoriesSubCategories: NestedDropdownItem[] = [
// // // //     { name: 'Ice Buckets & Chillers', path: `/products/bar-accessories/ice-buckets-chillers` },
// // // //     { name: 'Jiggers & Peg Measures', path: `/products/bar-accessories/jiggers-peg-measures` },
// // // //     { name: 'Cocktail Shakers', path: `/products/bar-accessories/cocktail-shakers` },
// // // //     { name: 'Bar Tools & Accessories', path: `/products/bar-accessories/bar-tools-accessories` },
// // // //     { name: 'Bartender Sets', path: `/products/bar-accessories/bartender-sets` },
// // // //     { name: 'Drinkware', path: `/products/bar-accessories/drinkware` },
// // // //     { name: 'Bar Table Service', path: `/products/bar-accessories/bar-table-service` },
// // // //   ];

// // // //   const navItems: NavItem[] = [
// // // //     { name: 'Home', path: '/' },
// // // //     {
// // // //       name: 'Products',
// // // //       path: '/products',
// // // //       isDropdown: true,
// // // //       dropdownItems: [
// // // //         { name: 'Bar Accessories', categorySlug: 'bar-accessories' },
// // // //         { name: 'Bagas Disposables', categorySlug: 'bagas-disposables' },
// // // //         { name: 'Copper Items', categorySlug: 'copper-items' },
// // // //         { name: 'Ceramic Items', categorySlug: 'ceramic-items' },
// // // //         { name: 'Terracotta Items', categorySlug: 'terracotta-items' },
// // // //         { name: 'Packaging Material', categorySlug: 'packaging-material' },
// // // //       ],
// // // //     },
// // // //     { name: 'Contact Us', path: '/contact-us' },
// // // //     { name: 'About Us', path: '/about-us' },
// // // //     { name: 'Create', path: '/create' },
// // // //     { name: 'Cart', path: '/cart' }, // Keep this as 'Cart' for internal identification
// // // //   ];

// // // //   // Effect to handle scroll behavior
// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       const currentScrollY = window.scrollY;

// // // //       // Only hide if scrolling down and not at the very top
// // // //       // And only show if scrolling up
// // // //       if (currentScrollY > lastScrollY && currentScrollY > 70) { // 70px threshold to start hiding
// // // //         setIsVisible(false);
// // // //       } else {
// // // //         setIsVisible(true);
// // // //       }
// // // //       setLastScrollY(currentScrollY);
// // // //     };

// // // //     window.addEventListener('scroll', handleScroll);

// // // //     return () => {
// // // //       window.removeEventListener('scroll', handleScroll);
// // // //     };
// // // //   }, [lastScrollY]); // Re-run effect only when lastScrollY changes

// // // //   return (
// // // //     <nav
// // // //       className={`
// // // //         bg-[rgba(17,24,39,0.8)] text-white fixed top-0 left-0 w-full z-50 py-1 backdrop-blur-sm
// // // //         transition-transform duration-300 ease-in-out
// // // //         ${isVisible ? 'translate-y-0' : '-translate-y-full'}
// // // //       `}
// // // //     >
// // // //       <div className="container mx-auto flex justify-between items-center px-4">
// // // //         {/* Brand Logo/Name */}
// // // //         <Link
// // // //           to="/"
// // // //           className="text-2xl font-bold text-white hover:text-gray-300"
// // // //         >
// // // //           NY Venture
// // // //         </Link>

// // // //         {/* Navigation Links */}
// // // //         <ul className="flex space-x-6 items-center">
// // // //           {navItems.map((item) => (
// // // //             <li key={item.name} className="relative group">
// // // //               {item.isDropdown ? (
// // // //                 <>
// // // //                   <Link
// // // //                     to={item.path}
// // // //                     className="block cursor-pointer px-4 py-2 text-white hover:text-gray-300"
// // // //                   >
// // // //                     {item.name}
// // // //                   </Link>

// // // //                   {/* Main dropdown panel */}
// // // //                   <div
// // // //                     className="absolute left-1/2 -translate-x-1/2 top-full bg-gray-700 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-100 invisible z-10 p-3 flex"
// // // //                     onMouseLeave={() => setHoveredCategorySlug(null)}
// // // //                   >
// // // //                     {/* First Column: Main Categories */}
// // // //                     <div className="flex flex-col">
// // // //                       <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Categories</h3>
// // // //                       <ul className="space-y-1 min-w-[200px]">
// // // //                         {item.dropdownItems?.map((dropdownItem) => (
// // // //                           <li
// // // //                             key={dropdownItem.name}
// // // //                             onMouseEnter={() => setHoveredCategorySlug(dropdownItem.categorySlug)}
// // // //                           >
// // // //                             <Link
// // // //                               to={`/products/${dropdownItem.categorySlug}`}
// // // //                               className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // //                             >
// // // //                               {dropdownItem.name}
// // // //                             </Link>
// // // //                           </li>
// // // //                         ))}
// // // //                       </ul>
// // // //                     </div>

// // // //                     {/* Second Column: Conditionally rendered to show Copper Subcategories */}
// // // //                     {hoveredCategorySlug === 'copper-items' && (
// // // //                       <div className="flex flex-col ml-8">
// // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Copper Items</h3>
// // // //                         <ul className="space-y-1 min-w-[200px]">
// // // //                           {copperSubCategories.map((subItem) => (
// // // //                             <li key={subItem.name}>
// // // //                               <Link
// // // //                                 to={subItem.path}
// // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // //                               >
// // // //                                 {subItem.name}
// // // //                               </Link>
// // // //                             </li>
// // // //                           ))}
// // // //                           <li>
// // // //                             <Link
// // // //                               to="/products/copper-items"
// // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // //                             >
// // // //                               View All Copper Items
// // // //                             </Link>
// // // //                           </li>
// // // //                         </ul>
// // // //                       </div>
// // // //                     )}

// // // //                     {/* Third Column: Conditionally rendered to show Bagas Disposables Subcategories */}
// // // //                     {hoveredCategorySlug === 'bagas-disposables' && (
// // // //                       <div className="flex flex-col ml-8">
// // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Bagas Disposables</h3>
// // // //                         <ul className="space-y-1 min-w-[200px]">
// // // //                           {bagasDisposablesSubCategories.map((subItem) => (
// // // //                             <li key={subItem.name}>
// // // //                               <Link
// // // //                                 to={subItem.path}
// // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // //                               >
// // // //                                 {subItem.name}
// // // //                               </Link>
// // // //                             </li>
// // // //                           ))}
// // // //                             <li>
// // // //                             <Link
// // // //                               to="/products/bagas-disposables"
// // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // //                             >
// // // //                               View All Bagas Disposables
// // // //                             </Link>
// // // //                           </li>
// // // //                         </ul>
// // // //                       </div>
// // // //                     )}

// // // //                     {/* Fourth Column: Conditionally rendered to show Bar Accessories Subcategories */}
// // // //                     {hoveredCategorySlug === 'bar-accessories' && (
// // // //                       <div className="flex flex-col ml-8">
// // // //                         <h3 className="text-lg font-semibold text-gray-300 px-4 py-2 mb-1">Bar Accessories</h3>
// // // //                         <ul className="space-y-1 min-w-[200px]">
// // // //                           {barAccessoriesSubCategories.map((subItem) => (
// // // //                             <li key={subItem.name}>
// // // //                               <Link
// // // //                                 to={subItem.path}
// // // //                                 className="block px-4 py-2 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // //                               >
// // // //                                 {subItem.name}
// // // //                               </Link>
// // // //                             </li>
// // // //                           ))}
// // // //                           <li>
// // // //                             <Link
// // // //                               to="/products/bar-accessories"
// // // //                               className="block px-4 py-2 mt-2 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap"
// // // //                             >
// // // //                               View All Bar Accessories
// // // //                             </Link>
// // // //                           </li>
// // // //                         </ul>
// // // //                       </div>
// // // //                     )}

// // // //                   </div>
// // // //                 </>
// // // //               ) : (
// // // //                 <Link
// // // //                   to={item.path}
// // // //                   className="block px-4 py-2 text-white hover:text-gray-300"
// // // //                 >
// // // //                   {item.name === 'Cart' ? ( // Check if the item is 'Cart'
// // // //                     <div className="relative flex items-center">
// // // //                       {/* Your provided SVG code for the cart icon */}
// // // //                       <svg
// // // //                         xmlns="http://www.w3.org/2000/svg"
// // // //                         viewBox="0 0 512 512"
// // // //                         className="w-8 h-8" // Icon size
// // // //                         fill="currentColor"
// // // //                       >
// // // //                         <path d="M351.9 329.506H206.81l-3.072-12.56H368.16l26.63-116.019-217.23-26.04-9.952-58.09h-50.4v21.946h31.894l35.233 191.246a32.927 32.927 0 1 0 36.363 21.462h100.244a32.825 32.825 0 1 0 30.957-21.945zM181.427 197.45l186.51 22.358-17.258 75.195H198.917z" data-name="Shopping Cart"/>
// // // //                       </svg>

// // // //                       {itemCount > 0 && (
// // // //                         <span className="absolute -top-[3px] -right-[3px] w-[20px] h-[20px] text-[10px] font-bold text-white bg-red-500 rounded-full flex items-center justify-center leading-none"> {/* CHANGED: width, height, font size, and adjusted top/right */}
// // // //                           {itemCount}
// // // //                         </span>
// // // //                       )}
// // // //                     </div>
// // // //                   ) : (
// // // //                     item.name
// // // //                   )}
// // // //                 </Link>
// // // //               )}
// // // //             </li>
// // // //           ))}
// // // //         </ul>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;




// // // import React, { useState, useEffect } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { useCart } from '../context/CartContext';

// // // // Define the interfaces for your navigation items
// // // interface NestedDropdownItem {
// // //   name: string;
// // //   path: string;
// // // }

// // // interface DropdownItem {
// // //   name: string;
// // //   categorySlug: string;
// // // }

// // // interface NavItem {
// // //   name: string;
// // //   path: string;
// // //   isDropdown?: boolean;
// // //   dropdownItems?: DropdownItem[];
// // // }

// // // const Navbar: React.FC = () => {
// // //   const [hoveredCategorySlug, setHoveredCategorySlug] = useState<string | null>(null);
// // //   const { itemCount } = useCart();

// // //   // New state for controlling Navbar visibility on scroll
// // //   const [isVisible, setIsVisible] = useState(true);
// // //   const [lastScrollY, setLastScrollY] = useState(0);

// // //   // Helper function to slugify names (unchanged)
// // //   const slugify = (text: string) => {
// // //     return text
// // //       .toString()
// // //       .normalize('NFD')
// // //       .replace(/[\u0300-\u036f]/g, '')
// // //       .toLowerCase()
// // //       .trim()
// // //       .replace(/\s+/g, '-')
// // //       .replace(/[^-\w]+/g, '');
// // //   };

// // //   // Subcategory data (unchanged)
// // //   const copperSubCategories: NestedDropdownItem[] = [
// // //     { name: 'Copper Bottles', path: `/products/copper-items/copper-bottles` },
// // //     { name: 'Copper Jugs', path: `/products/copper-items/copper-jugs` },
// // //     { name: 'Copper Jars', path: `/products/copper-items/copper-jars` },
// // //     { name: 'Copper Matkas', path: `/products/copper-items/copper-matkas` },
// // //     { name: 'Copper Utensils Set', path: `/products/copper-items/copper-utensils-sets` },
// // //   ];

// // //   const bagasDisposablesSubCategories: NestedDropdownItem[] = [
// // //     { name: 'Meal Trays', path: `/products/bagas-disposables/meal-trays` },
// // //     { name: 'Cups', path: `/products/bagas-disposables/cups` },
// // //     { name: 'Plates', path: `/products/bagas-disposables/plates` },
// // //     { name: 'Utensils and Straws', path: `/products/bagas-disposables/utensils-straws` },
// // //   ];

// // //   const barAccessoriesSubCategories: NestedDropdownItem[] = [
// // //     { name: 'Ice Buckets & Chillers', path: `/products/bar-accessories/ice-buckets-chillers` },
// // //     { name: 'Jiggers & Peg Measures', path: `/products/bar-accessories/jiggers-peg-measures` },
// // //     { name: 'Cocktail Shakers', path: `/products/bar-accessories/cocktail-shakers` },
// // //     { name: 'Bar Tools & Accessories', path: `/products/bar-accessories/bar-tools-accessories` },
// // //     { name: 'Bartender Sets', path: `/products/bar-accessories/bartender-sets` },
// // //     { name: 'Drinkware', path: `/products/bar-accessories/drinkware` },
// // //     { name: 'Bar Table Service', path: `/products/bar-accessories/bar-table-service` },
// // //   ];

// // //   const navItems: NavItem[] = [
// // //     { name: 'Home', path: '/' },
// // //     {
// // //       name: 'Products',
// // //       path: '/products',
// // //       isDropdown: true,
// // //       dropdownItems: [
// // //         { name: 'Bar Accessories', categorySlug: 'bar-accessories' },
// // //         { name: 'Bagas Disposables', categorySlug: 'bagas-disposables' },
// // //         { name: 'Copper Items', categorySlug: 'copper-items' },
// // //         { name: 'Ceramic Items', categorySlug: 'ceramic-items' },
// // //         { name: 'Terracotta Items', categorySlug: 'terracotta-items' },
// // //         { name: 'Packaging Material', categorySlug: 'packaging-material' },
// // //       ],
// // //     },
// // //     { name: 'Contact Us', path: '/contact-us' },
// // //     { name: 'About Us', path: '/about-us' },
// // //     { name: 'Create', path: '/create' },
// // //     { name: 'Cart', path: '/cart' },
// // //   ];

// // //   // Effect to handle scroll behavior
// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const currentScrollY = window.scrollY;

// // //       if (currentScrollY > lastScrollY && currentScrollY > 50) { // Reduced threshold for hiding
// // //         setIsVisible(false);
// // //       } else {
// // //         setIsVisible(true);
// // //       }
// // //       setLastScrollY(currentScrollY);
// // //     };

// // //     window.addEventListener('scroll', handleScroll);

// // //     return () => {
// // //       window.removeEventListener('scroll', handleScroll);
// // //     };
// // //   }, [lastScrollY]);

// // //   return (
// // //     <nav
// // //       className={`
// // //         bg-[rgba(17,24,39,0.8)] text-white fixed top-0 left-0 w-full z-50 py-1 backdrop-blur-sm
// // //         transition-transform duration-300 ease-in-out
// // //         ${isVisible ? 'translate-y-0' : '-translate-y-full'}
// // //       `}
// // //     >
// // //       <div className="container mx-auto flex justify-between items-center px-4 py-2"> {/* Adjusted vertical padding */}
// // //         {/* Brand Logo/Name */}
// // //         <Link
// // //           to="/"
// // //           className="text-xl font-bold text-white hover:text-gray-300" // Reduced font size for logo
// // //         >
// // //           NY Venture
// // //         </Link>

// // //         {/* Navigation Links */}
// // //         <ul className="flex space-x-4 items-center"> {/* Reduced space between items */}
// // //           {navItems.map((item) => (
// // //             <li key={item.name} className="relative group">
// // //               {item.isDropdown ? (
// // //                 <>
// // //                   <Link
// // //                     to={item.path}
// // //                     className="block cursor-pointer px-3 py-1.5 text-white hover:text-gray-300 text-sm" // Reduced padding and font size for dropdown toggles
// // //                   >
// // //                     {item.name}
// // //                   </Link>

// // //                   {/* Main dropdown panel */}
// // //                   <div
// // //                     className="absolute left-1/2 -translate-x-1/2 top-full bg-gray-700 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-100 invisible z-10 p-2 flex" // Reduced padding
// // //                     onMouseLeave={() => setHoveredCategorySlug(null)}
// // //                   >
// // //                     {/* First Column: Main Categories */}
// // //                     <div className="flex flex-col">
// // //                       <h3 className="text-base font-semibold text-gray-300 px-3 py-1 mb-1">Categories</h3> {/* Reduced font size and padding */}
// // //                       <ul className="space-y-0.5 min-w-[180px]"> {/* Reduced space and min-width */}
// // //                         {item.dropdownItems?.map((dropdownItem) => (
// // //                           <li
// // //                             key={dropdownItem.name}
// // //                             onMouseEnter={() => setHoveredCategorySlug(dropdownItem.categorySlug)}
// // //                           >
// // //                             <Link
// // //                               to={`/products/${dropdownItem.categorySlug}`}
// // //                               className="block px-3 py-1.5 hover:bg-gray-600 rounded-md whitespace-nowrap text-sm" // Reduced padding and font size
// // //                             >
// // //                               {dropdownItem.name}
// // //                             </Link>
// // //                           </li>
// // //                         ))}
// // //                       </ul>
// // //                     </div>

// // //                     {/* Second Column: Conditionally rendered to show Copper Subcategories */}
// // //                     {hoveredCategorySlug === 'copper-items' && (
// // //                       <div className="flex flex-col ml-6"> {/* Reduced margin-left */}
// // //                         <h3 className="text-base font-semibold text-gray-300 px-3 py-1 mb-1">Copper Items</h3> {/* Reduced font size and padding */}
// // //                         <ul className="space-y-0.5 min-w-[180px]"> {/* Reduced space and min-width */}
// // //                           {copperSubCategories.map((subItem) => (
// // //                             <li key={subItem.name}>
// // //                               <Link
// // //                                 to={subItem.path}
// // //                                 className="block px-3 py-1.5 hover:bg-gray-600 rounded-md whitespace-nowrap text-sm" // Reduced padding and font size
// // //                               >
// // //                                 {subItem.name}
// // //                               </Link>
// // //                             </li>
// // //                           ))}
// // //                           <li>
// // //                             <Link
// // //                               to="/products/copper-items"
// // //                               className="block px-3 py-1.5 mt-1 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap text-sm" // Reduced padding, margin-top and font size
// // //                             >
// // //                               View All Copper Items
// // //                             </Link>
// // //                           </li>
// // //                         </ul>
// // //                       </div>
// // //                     )}

// // //                     {/* Third Column: Conditionally rendered to show Bagas Disposables Subcategories */}
// // //                     {hoveredCategorySlug === 'bagas-disposables' && (
// // //                       <div className="flex flex-col ml-6"> {/* Reduced margin-left */}
// // //                         <h3 className="text-base font-semibold text-gray-300 px-3 py-1 mb-1">Bagas Disposables</h3> {/* Reduced font size and padding */}
// // //                         <ul className="space-y-0.5 min-w-[180px]"> {/* Reduced space and min-width */}
// // //                           {bagasDisposablesSubCategories.map((subItem) => (
// // //                             <li key={subItem.name}>
// // //                               <Link
// // //                                 to={subItem.path}
// // //                                 className="block px-3 py-1.5 hover:bg-gray-600 rounded-md whitespace-nowrap text-sm" // Reduced padding and font size
// // //                               >
// // //                                 {subItem.name}
// // //                               </Link>
// // //                             </li>
// // //                           ))}
// // //                             <li>
// // //                             <Link
// // //                               to="/products/bagas-disposables"
// // //                               className="block px-3 py-1.5 mt-1 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap text-sm" // Reduced padding, margin-top and font size
// // //                             >
// // //                               View All Bagas Disposables
// // //                             </Link>
// // //                           </li>
// // //                         </ul>
// // //                       </div>
// // //                     )}

// // //                     {/* Fourth Column: Conditionally rendered to show Bar Accessories Subcategories */}
// // //                     {hoveredCategorySlug === 'bar-accessories' && (
// // //                       <div className="flex flex-col ml-6"> {/* Reduced margin-left */}
// // //                         <h3 className="text-base font-semibold text-gray-300 px-3 py-1 mb-1">Bar Accessories</h3> {/* Reduced font size and padding */}
// // //                         <ul className="space-y-0.5 min-w-[180px]"> {/* Reduced space and min-width */}
// // //                           {barAccessoriesSubCategories.map((subItem) => (
// // //                             <li key={subItem.name}>
// // //                               <Link
// // //                                 to={subItem.path}
// // //                                 className="block px-3 py-1.5 hover:bg-gray-600 rounded-md whitespace-nowrap text-sm" // Reduced padding and font size
// // //                               >
// // //                                 {subItem.name}
// // //                               </Link>
// // //                             </li>
// // //                           ))}
// // //                           <li>
// // //                             <Link
// // //                               to="/products/bar-accessories"
// // //                               className="block px-3 py-1.5 mt-1 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap text-sm" // Reduced padding, margin-top and font size
// // //                             >
// // //                               View All Bar Accessories
// // //                             </Link>
// // //                           </li>
// // //                         </ul>
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 </>
// // //               ) : (
// // //                 <Link
// // //                   to={item.path}
// // //                   className="block px-3 py-1.5 text-white hover:text-gray-300 text-sm" // Reduced padding and font size
// // //                 >
// // //                   {item.name === 'Cart' ? (
// // //                     <div className="relative flex items-center">
// // //                       {/* Your provided SVG code for the cart icon */}
// // //                       <svg
// // //                         xmlns="http://www.w3.org/2000/svg"
// // //                         viewBox="0 0 512 512"
// // //                         className="w-6 h-6" // Reduced cart icon size
// // //                         fill="currentColor"
// // //                       >
// // //                         <path d="M351.9 329.506H206.81l-3.072-12.56H368.16l26.63-116.019-217.23-26.04-9.952-58.09h-50.4v21.946h31.894l35.233 191.246a32.927 32.927 0 1 0 36.363 21.462h100.244a32.825 32.825 0 1 0 30.957-21.945zM181.427 197.45l186.51 22.358-17.258 75.195H198.917z" data-name="Shopping Cart"/>
// // //                       </svg>

// // //                       {itemCount > 0 && (
// // //                         <span className="absolute -top-1 -right-1 w-4 h-4 text-[9px] font-bold text-white bg-red-500 rounded-full flex items-center justify-center leading-none"> {/* Adjusted badge size and position */}
// // //                           {itemCount}
// // //                         </span>
// // //                       )}
// // //                     </div>
// // //                   ) : (
// // //                     item.name
// // //                   )}
// // //                 </Link>
// // //               )}
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;



// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Define the interfaces for your navigation items
interface NestedDropdownItem {
  name: string;
  path: string;
}

interface DropdownItem {
  name: string;
  categorySlug: string;
}

interface NavItem {
  name: string;
  path: string;
  isDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

const Navbar: React.FC = () => {
  const [hoveredCategorySlug, setHoveredCategorySlug] = useState<string | null>(null);
  const { itemCount } = useCart();

  // New state for controlling Navbar visibility on scroll
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Helper function to slugify names (unchanged)
  const slugify = (text: string) => {
    return text
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^-\w]+/g, '');
  };

  // Subcategory data (unchanged)
  const copperSubCategories: NestedDropdownItem[] = [
    { name: 'Copper Bottles', path: `/products/copper-items/copper-bottles` },
    { name: 'Copper Jugs', path: `/products/copper-items/copper-jugs` },
    { name: 'Copper Jars', path: `/products/copper-items/copper-jars` },
    { name: 'Copper Matkas', path: `/products/copper-items/copper-matkas` },
    { name: 'Copper Utensils Set', path: `/products/copper-items/copper-utensils-sets` },
  ];

  const bagasDisposablesSubCategories: NestedDropdownItem[] = [
    { name: 'Meal Trays', path: `/products/bagas-disposables/meal-trays` },
    { name: 'Cups', path: `/products/bagas-disposables/cups` },
    { name: 'Plates', path: `/products/bagas-disposables/plates` },
    { name: 'Utensils and Straws', path: `/products/bagas-disposables/utensils-straws` },
  ];

  const barAccessoriesSubCategories: NestedDropdownItem[] = [
    { name: 'Ice Buckets & Chillers', path: `/products/bar-accessories/ice-buckets-chillers` },
    { name: 'Jiggers & Peg Measures', path: `/products/bar-accessories/jiggers-peg-measures` },
    { name: 'Cocktail Shakers', path: `/products/bar-accessories/cocktail-shakers` },
    { name: 'Bar Tools & Accessories', path: `/products/bar-accessories/bar-tools-accessories` },
    { name: 'Bartender Sets', path: `/products/bar-accessories/bartender-sets` },
    { name: 'Drinkware', path: `/products/bar-accessories/drinkware` },
    { name: 'Bar Table Service', path: `/products/bar-accessories/bar-table-service` },
  ];

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    {
      name: 'Products',
      path: '/products',
      isDropdown: true,
      dropdownItems: [
        { name: 'Bar Accessories', categorySlug: 'bar-accessories' },
        { name: 'Bagas Disposables', categorySlug: 'bagas-disposables' },
        { name: 'Copper Items', categorySlug: 'copper-items' },
        { name: 'Ceramic Items', categorySlug: 'ceramic-items' },
        { name: 'Terracotta Items', categorySlug: 'terracotta-items' },
        { name: 'Packaging Material', categorySlug: 'packaging-material' },
      ],
    },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'About Us', path: '/about-us' },
    // { name: 'Create', path: '/create' }, // REMOVED THIS LINE
    { name: 'Cart', path: '/cart' },
  ];

  // Effect to handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) { // Reduced threshold for hiding
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`
        bg-[rgba(17,24,39,0.8)] text-white fixed top-0 left-0 w-full z-50 py-1 backdrop-blur-sm
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-2"> {/* Adjusted vertical padding */}
        {/* Brand Logo/Name */}
        <Link
          to="/"
          className="text-xl font-bold text-white hover:text-gray-300" // Reduced font size for logo
        >
          NY Venture
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-4 items-center"> {/* Reduced space between items */}
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              {item.isDropdown ? (
                <>
                  <Link
                    to={item.path}
                    className="block cursor-pointer px-3 py-1.5 text-white hover:text-gray-300 text-sm" // Reduced padding and font size for dropdown toggles
                  >
                    {item.name}
                  </Link>

                  {/* Main dropdown panel */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full bg-gray-700 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-100 invisible z-10 p-2 flex" // Reduced padding
                    onMouseLeave={() => setHoveredCategorySlug(null)}
                  >
                    {/* First Column: Main Categories */}
                    <div className="flex flex-col">
                      <h3 className="text-base font-semibold text-gray-300 px-3 py-1 mb-1">Categories</h3> {/* Reduced font size and padding */}
                      <ul className="space-y-0.5 min-w-[180px]"> {/* Reduced space and min-width */}
                        {item.dropdownItems?.map((dropdownItem) => (
                          <li
                            key={dropdownItem.name}
                            onMouseEnter={() => setHoveredCategorySlug(dropdownItem.categorySlug)}
                          >
                            <Link
                              to={`/products/${dropdownItem.categorySlug}`}
                              className="block px-3 py-1.5 hover:bg-gray-600 rounded-md whitespace-nowrap text-sm" // Reduced padding and font size
                            >
                              {dropdownItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Second Column: Conditionally rendered to show Copper Subcategories */}
                    {hoveredCategorySlug === 'copper-items' && (
                      <div className="flex flex-col ml-6"> {/* Reduced margin-left */}
                        <h3 className="text-base font-semibold text-gray-300 px-3 py-1 mb-1">Copper Items</h3> {/* Reduced font size and padding */}
                        <ul className="space-y-0.5 min-w-[180px]"> {/* Reduced space and min-width */}
                          {copperSubCategories.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                to={subItem.path}
                                className="block px-3 py-1.5 hover:bg-gray-600 rounded-md whitespace-nowrap text-sm" // Reduced padding and font size
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              to="/products/copper-items"
                              className="block px-3 py-1.5 mt-1 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap text-sm" // Reduced padding, margin-top and font size
                            >
                              View All Copper Items
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}

                    {/* Third Column: Conditionally rendered to show Bagas Disposables Subcategories */}
                    {hoveredCategorySlug === 'bagas-disposables' && (
                      <div className="flex flex-col ml-6"> {/* Reduced margin-left */}
                        <h3 className="text-base font-semibold text-gray-300 px-3 py-1 mb-1">Bagas Disposables</h3> {/* Reduced font size and padding */}
                        <ul className="space-y-0.5 min-w-[180px]"> {/* Reduced space and min-width */}
                          {bagasDisposablesSubCategories.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                to={subItem.path}
                                className="block px-3 py-1.5 hover:bg-gray-600 rounded-md whitespace-nowrap text-sm" // Reduced padding and font size
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                            <li>
                            <Link
                              to="/products/bagas-disposables"
                              className="block px-3 py-1.5 mt-1 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap text-sm" // Reduced padding, margin-top and font size
                            >
                              View All Bagas Disposables
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}

                    {/* Fourth Column: Conditionally rendered to show Bar Accessories Subcategories */}
                    {hoveredCategorySlug === 'bar-accessories' && (
                      <div className="flex flex-col ml-6"> {/* Reduced margin-left */}
                        <h3 className="text-base font-semibold text-gray-300 px-3 py-1 mb-1">Bar Accessories</h3> {/* Reduced font size and padding */}
                        <ul className="space-y-0.5 min-w-[180px]"> {/* Reduced space and min-width */}
                          {barAccessoriesSubCategories.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                to={subItem.path}
                                className="block px-3 py-1.5 hover:bg-gray-600 rounded-md whitespace-nowrap text-sm" // Reduced padding and font size
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              to="/products/bar-accessories"
                              className="block px-3 py-1.5 mt-1 font-semibold text-blue-300 hover:bg-gray-600 rounded-md whitespace-nowrap text-sm" // Reduced padding, margin-top and font size
                            >
                              View All Bar Accessories
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className="block px-3 py-1.5 text-white hover:text-gray-300 text-sm" // Reduced padding and font size
                >
                  {item.name === 'Cart' ? (
                    <div className="relative flex items-center">
                      {/* Your provided SVG code for the cart icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-6 h-6" // Reduced cart icon size
                        fill="currentColor"
                      >
                        <path d="M351.9 329.506H206.81l-3.072-12.56H368.16l26.63-116.019-217.23-26.04-9.952-58.09h-50.4v21.946h31.894l35.233 191.246a32.927 32.927 0 1 0 36.363 21.462h100.244a32.825 32.825 0 1 0 30.957-21.945zM181.427 197.45l186.51 22.358-17.258 75.195H198.917z" data-name="Shopping Cart"/>
                      </svg>

                      {itemCount > 0 && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 text-[9px] font-bold text-white bg-red-500 rounded-full flex items-center justify-center leading-none"> {/* Adjusted badge size and position */}
                          {itemCount}
                        </span>
                      )}
                    </div>
                  ) : (
                    item.name
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


// "use client"

// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { Menu, ShoppingCart } from "lucide-react"
// import { useCart } from "../context/CartContext" // Import useCart

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const { itemCount } = useCart() // Get itemCount from cart context

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Products", path: "/products" },
//     { name: "Contact Us", path: "/contact-us" },
//     { name: "About Us", path: "/about-us" },
//   ]

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
//       <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
//         <Link to="/" className="flex items-center space-x-2">
//           <img src="/logo.png" alt="NY Venture Logo" className="h-10 w-auto" />
//           <span className="text-white text-2xl font-bold font-playfair hidden md:block">NY Venture</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-inter relative group"
//             >
//               {link.name}
//               <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           ))}
//           <Link to="/inquiry-cart" className="relative text-gray-300 hover:text-white transition-colors duration-300">
//             <ShoppingCart className="h-6 w-6" />
//             {itemCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                 {itemCount}
//               </span>
//             )}
//           </Link>
//         </div>

//         {/* Mobile Navigation */}
//         <div className="md:hidden flex items-center space-x-4">
//           <Link to="/inquiry-cart" className="relative text-gray-300 hover:text-white transition-colors duration-300">
//             <ShoppingCart className="h-6 w-6" />
//             {itemCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                 {itemCount}
//               </span>
//             )}
//           </Link>
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="text-white">
//                 <Menu className="h-6 w-6" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="bg-gray-900 text-white border-l border-gray-700">
//               <nav className="flex flex-col space-y-6 mt-8">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="text-xl font-semibold text-gray-300 hover:text-white transition-colors duration-300"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Navbar




// // "use client"

// // import type React from "react"
// // import { useState } from "react"
// // import { Link } from "react-router-dom"
// // import { Menu, X, ShoppingCart } from "lucide-react"
// // import { Button } from "./ui/button"
// // import { useCart } from "../context/CartContext"

// // const Navbar: React.FC = () => {
// //   const [isOpen, setIsOpen] = useState(false)
// //   const { itemCount } = useCart()

// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen)
// //   }

// //   return (
// //     <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg font-inter">
// //       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
// //         {/* Logo */}
// //         <Link to="/" className="flex items-center space-x-2">
// //           <img src="/logo.png" alt="NY Venture Logo" className="h-8 w-auto" />
// //           <span className="text-white text-2xl font-bold font-playfair hidden sm:block">NY Venture</span>
// //         </Link>

// //         {/* Desktop Navigation */}
// //         <div className="hidden md:flex items-center space-x-8">
// //           <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg">
// //             Home
// //           </Link>
// //           <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg">
// //             Products
// //           </Link>
// //           <Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg">
// //             Contact Us
// //           </Link>
// //           <Link to="/about-us" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg">
// //             About Us
// //           </Link>
// //           <Link to="/inquiry-cart" className="relative text-gray-300 hover:text-white transition-colors duration-300">
// //             <ShoppingCart className="h-6 w-6" />
// //             {itemCount > 0 && (
// //               <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
// //                 {itemCount}
// //               </span>
// //             )}
// //           </Link>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <div className="md:hidden flex items-center space-x-4">
// //           <Link to="/inquiry-cart" className="relative text-gray-300 hover:text-white transition-colors duration-300">
// //             <ShoppingCart className="h-6 w-6" />
// //             {itemCount > 0 && (
// //               <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
// //                 {itemCount}
// //               </span>
// //             )}
// //           </Link>
// //           <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
// //             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //           </Button>
// //         </div>
// //       </div>

// //       {/* Mobile Navigation */}
// //       {isOpen && (
// //         <div className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-md py-4 px-4 animate-fade-in-down">
// //           <div className="flex flex-col space-y-3">
// //             <Link
// //               to="/"
// //               className="block text-gray-300 hover:text-white transition-colors duration-300 text-lg py-2"
// //               onClick={toggleMenu}
// //             >
// //               Home
// //             </Link>
// //             <Link
// //               to="/products"
// //               className="block text-gray-300 hover:text-white transition-colors duration-300 text-lg py-2"
// //               onClick={toggleMenu}
// //             >
// //               Products
// //             </Link>
// //             <Link
// //               to="/contact-us"
// //               className="block text-gray-300 hover:text-white transition-colors duration-300 text-lg py-2"
// //               onClick={toggleMenu}
// //             >
// //               Contact Us
// //             </Link>
// //             <Link
// //               to="/about-us"
// //               className="block text-gray-300 hover:text-white transition-colors duration-300 text-lg py-2"
// //               onClick={toggleMenu}
// //             >
// //               About Us
// //             </Link>
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   )
// // }

// // export default Navbar



