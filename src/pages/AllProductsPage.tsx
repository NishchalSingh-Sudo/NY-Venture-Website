// "use client"

// import type React from "react"
// import { useState, useMemo } from "react"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import ProductCard from "../components/ProductCard"
// import { allDetailedProductsData } from "../data/allProductsData"
// import { Input } from "../components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
// import { Button } from "../components/ui/button"
// import { Search, X } from "lucide-react"

// const AllProductsPage: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedCategory, setSelectedCategory] = useState("all")
//   const [selectedSubCategory, setSelectedSubCategory] = useState("all")

//   const uniqueCategories = useMemo(() => {
//     const categories = new Set<string>()
//     allDetailedProductsData.forEach((product) => categories.add(product.category))
//     return Array.from(categories)
//   }, [])

//   const uniqueSubCategories = useMemo(() => {
//     const subCategories = new Set<string>()
//     if (selectedCategory !== "all") {
//       allDetailedProductsData
//         .filter((product) => product.category === selectedCategory)
//         .forEach((product) => subCategories.add(product.subCategory))
//     } else {
//       allDetailedProductsData.forEach((product) => subCategories.add(product.subCategory))
//     }
//     return Array.from(subCategories)
//   }, [selectedCategory])

//   const filteredProducts = useMemo(() => {
//     let products = allDetailedProductsData

//     if (selectedCategory !== "all") {
//       products = products.filter((product) => product.category === selectedCategory)
//     }

//     if (selectedSubCategory !== "all") {
//       products = products.filter((product) => product.subCategory === selectedSubCategory)
//     }

//     if (searchTerm) {
//       const lowerCaseSearchTerm = searchTerm.toLowerCase()
//       products = products.filter(
//         (product) =>
//           product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
//           product.shortDescription.toLowerCase().includes(lowerCaseSearchTerm) ||
//           product.category.toLowerCase().includes(lowerCaseSearchTerm) ||
//           product.subCategory.toLowerCase().includes(lowerCaseSearchTerm),
//       )
//     }

//     return products
//   }, [searchTerm, selectedCategory, selectedSubCategory])

//   const formatCategoryName = (slug: string) => {
//     const names: { [key: string]: string } = {
//       "copper-items": "Copper Items",
//       "bar-accessories": "Bar Accessories",
//       "bagas-disposables": "Bagas Disposables",
//       "meal-trays": "Meal Trays",
//       plates: "Plates",
//       straws: "Straws",
//       cutlery: "Cutlery",
//       cups: "Cups",
//       "copper-bottles": "Copper Bottles",
//       "copper-jars": "Copper Jars",
//       "copper-jugs": "Copper Jugs",
//       "copper-matkas": "Copper Matkas",
//       "jiggers-peg-measures": "Jiggers & Peg Measures",
//       "bartender-sets": "Bartender Sets",
//       "bar-table-service": "Bar Table Service",
//       "bar-tools-accessories": "Bar Tools & Accessories",
//       drinkware: "Drinkware",
//       "ice-buckets-chillers": "Ice Buckets & Chillers",
//     }
//     return (
//       names[slug] ||
//       slug
//         .split("-")
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ")
//     )
//   }

//   const handleClearFilters = () => {
//     setSearchTerm("")
//     setSelectedCategory("all")
//     setSelectedSubCategory("all")
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       <Navbar />

//       {/* Header Section */}
//       <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="/placeholder.svg?height=1080&width=1920"
//             alt="All Products Background"
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
//               All Products
//             </h1>
//             <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-inter">
//               Explore our complete catalog of premium copper articles and sustainable biodegradable items.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Filters and Search */}
//       <section className="py-12 bg-gradient-to-br from-white to-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-center">
//             <div className="relative w-full md:w-1/3">
//               <Input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full font-inter"
//               />
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//             </div>

//             <Select value={selectedCategory} onValueChange={setSelectedCategory}>
//               <SelectTrigger className="w-full md:w-1/4 font-inter">
//                 <SelectValue placeholder="Select Category" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Categories</SelectItem>
//                 {uniqueCategories.map((category) => (
//                   <SelectItem key={category} value={category}>
//                     {formatCategoryName(category)}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             <Select value={selectedSubCategory} onValueChange={setSelectedSubCategory}>
//               <SelectTrigger className="w-full md:w-1/4 font-inter">
//                 <SelectValue placeholder="Select Subcategory" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Subcategories</SelectItem>
//                 {uniqueSubCategories.map((subCategory) => (
//                   <SelectItem key={subCategory} value={subCategory}>
//                     {formatCategoryName(subCategory)}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             <Button
//               onClick={handleClearFilters}
//               variant="outline"
//               className="w-full md:w-auto border-gray-300 text-gray-700 hover:bg-gray-100 font-inter bg-transparent"
//             >
//               <X className="h-4 w-4 mr-2" /> Clear Filters
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Product Grid */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           {filteredProducts.length === 0 ? (
//             <div className="text-center text-gray-600 text-xl font-inter">
//               No products found matching your criteria.
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//               {filteredProducts.map((product, index) => (
//                 <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
//                   <ProductCard
//                     id={product.id}
//                     name={product.name}
//                     imageUrl={product.imageUrl}
//                     shortDescription={product.shortDescription}
//                     rating={product.rating}
//                     reviews={product.reviewCount}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default AllProductsPage




"use client"

import type React from "react"
import { useState, useMemo } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"
import { allDetailedProductsData } from "../data/allProductsData"
import { Input } from "../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Button } from "../components/ui/button"
import { Search, X } from "lucide-react"

const AllProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSubCategory, setSelectedSubCategory] = useState("all")

  const uniqueCategories = useMemo(() => {
    const categories = new Set<string>()
    allDetailedProductsData.forEach((product) => categories.add(product.category))
    return Array.from(categories)
  }, [])

  const uniqueSubCategories = useMemo(() => {
    const subCategories = new Set<string>()
    if (selectedCategory !== "all") {
      allDetailedProductsData
        .filter((product) => product.category === selectedCategory)
        .forEach((product) => subCategories.add(product.subCategory))
    } else {
      allDetailedProductsData.forEach((product) => subCategories.add(product.subCategory))
    }
    return Array.from(subCategories)
  }, [selectedCategory])

  const filteredProducts = useMemo(() => {
    let products = allDetailedProductsData

    if (selectedCategory !== "all") {
      products = products.filter((product) => product.category === selectedCategory)
    }

    if (selectedSubCategory !== "all") {
      products = products.filter((product) => product.subCategory === selectedSubCategory)
    }

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase()
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          product.shortDescription.toLowerCase().includes(lowerCaseSearchTerm) ||
          product.category.toLowerCase().includes(lowerCaseSearchTerm) ||
          product.subCategory.toLowerCase().includes(lowerCaseSearchTerm),
      )
    }

    return products
  }, [searchTerm, selectedCategory, selectedSubCategory])

  const formatCategoryName = (slug: string) => {
    const names: { [key: string]: string } = {
      "copper-items": "Copper Items",
      "bar-accessories": "Bar Accessories",
      "bagas-disposables": "Bagas Disposables",
      "meal-trays": "Meal Trays",
      plates: "Plates",
      straws: "Straws",
      cutlery: "Cutlery",
      cups: "Cups",
      "copper-bottles": "Copper Bottles",
      "copper-jars": "Copper Jars",
      "copper-jugs": "Copper Jugs",
      "copper-matkas": "Copper Matkas",
      "jiggers-peg-measures": "Jiggers & Peg Measures",
      "bartender-sets": "Bartender Sets",
      "bar-table-service": "Bar Table Service",
      "bar-tools-accessories": "Bar Tools & Accessories",
      drinkware: "Drinkware",
      "ice-buckets-chillers": "Ice Buckets & Chillers",
    }
    return (
      names[slug] ||
      slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    )
  }

  const handleClearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSelectedSubCategory("all")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />

      {/* Header Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="All Products Background"
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
              All Products
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-inter">
              Explore our complete catalog of premium copper articles and sustainable biodegradable items.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-center">
            <div className="relative w-full md:w-1/3">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full font-inter"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-1/4 font-inter">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {uniqueCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {formatCategoryName(category)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSubCategory} onValueChange={setSelectedSubCategory}>
              <SelectTrigger className="w-full md:w-1/4 font-inter">
                <SelectValue placeholder="Select Subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                {uniqueSubCategories.map((subCategory) => (
                  <SelectItem key={subCategory} value={subCategory}>
                    {formatCategoryName(subCategory)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              onClick={handleClearFilters}
              variant="outline"
              className="w-full md:w-auto border-gray-300 text-gray-700 hover:bg-gray-100 font-inter bg-transparent"
            >
              <X className="h-4 w-4 mr-2" /> Clear Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16">   
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center text-gray-600 text-xl font-inter">
              No products found matching your criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    shortDescription={product.shortDescription}
                    rating={product.rating}
                    reviews={product.reviewCount}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AllProductsPage
