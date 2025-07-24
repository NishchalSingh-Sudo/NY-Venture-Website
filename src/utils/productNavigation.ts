// // import { allDetailedProductsData } from "@/data/allProductsData"

// // interface NavItem {
// //   name: string
// //   slug: string
// //   path: string
// //   subItems?: NavItem[]
// // }

// // const slugify = (text: string) => {
// //   return text
// //     .toString()
// //     .normalize("NFD")
// //     .replace(/[\u0300-\u036f]/g, "")
// //     .toLowerCase()
// //     .trim()
// //     .replace(/\s+/g, "-")
// //     .replace(/[^-\w]+/g, "")
// // }

// // const formatName = (slug: string) => {
// //   return slug
// //     .split("-")
// //     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// //     .join(" ")
// // }

// // export const getProductNavigationData = (): NavItem[] => {
// //   const categoriesMap = new Map<string, Map<string, boolean>>() // categorySlug -> subCategorySlug -> exists

// //   allDetailedProductsData.forEach((product) => {
// //     const categorySlug = slugify(product.category)
// //     if (!categoriesMap.has(categorySlug)) {
// //       categoriesMap.set(categorySlug, new Map<string, boolean>())
// //     }
// //     if (product.subCategory) {
// //       const subCategorySlug = slugify(product.subCategory)
// //       categoriesMap.get(categorySlug)?.set(subCategorySlug, true)
// //     }
// //   })

// //   const navData: NavItem[] = []
// //   categoriesMap.forEach((subCategoriesMap, categorySlug) => {
// //     const subItems: NavItem[] = []
// //     subCategoriesMap.forEach((_, subCategorySlug) => {
// //       subItems.push({
// //         name: formatName(subCategorySlug),
// //         slug: subCategorySlug,
// //         path: `/products/${categorySlug}/${subCategorySlug}`,
// //       })
// //     })

// //     // Sort sub-items alphabetically
// //     subItems.sort((a, b) => a.name.localeCompare(b.name))

// //     navData.push({
// //       name: formatName(categorySlug),
// //       slug: categorySlug,
// //       path: `/products/${categorySlug}`,
// //       subItems: subItems.length > 0 ? subItems : undefined,
// //     })
// //   })

// //   // Sort main categories alphabetically
// //   navData.sort((a, b) => a.name.localeCompare(b.name))

// //   return navData
// // }




// import { allDetailedProductsData } from "../data/allProductsData"

// export const formatCategoryName = (slug: string) => {
//   const names: { [key: string]: string } = {
//     "copper-items": "Copper Items",
//     "bar-accessories": "Bar Accessories",
//     "bagas-disposables": "Bagas Disposables",
//     "meal-trays": "Meal Trays",
//     plates: "Plates",
//     straws: "Straws",
//     cutlery: "Cutlery",
//     cups: "Cups",
//     "copper-bottles": "Copper Bottles",
//     "copper-jars": "Copper Jars",
//     "copper-jugs": "Copper Jugs",
//     "copper-matkas": "Copper Matkas",
//     "jiggers-peg-measures": "Jiggers & Peg Measures",
//     "bartender-sets": "Bartender Sets",
//     "bar-table-service": "Bar Table Service",
//     "bar-tools-accessories": "Bar Tools & Accessories",
//     drinkware: "Drinkware",
//     "ice-buckets-chillers": "Ice Buckets & Chillers",
//     "cocktail-shakers": "Cocktail Shakers", // Added for completeness
//   }
//   return (
//     names[slug] ||
//     slug
//       .split("-")
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(" ")
//   )
// }

// export const getProductNavigationData = () => {
//   const categoriesMap = new Map<string, Set<string>>()

//   allDetailedProductsData.forEach((product) => {
//     if (!categoriesMap.has(product.category)) {
//       categoriesMap.set(product.category, new Set<string>())
//     }
//     if (product.subCategory) {
//       categoriesMap.get(product.category)?.add(product.subCategory)
//     }
//   })

//   const navigationData = Array.from(categoriesMap.keys())
//     .sort()
//     .map((categorySlug) => ({
//       slug: categorySlug,
//       name: formatCategoryName(categorySlug),
//       subCategories: Array.from(categoriesMap.get(categorySlug) || [])
//         .sort()
//         .map((subSlug) => ({
//           slug: subSlug,
//           name: formatCategoryName(subSlug),
//         })),
//     }))

//   return navigationData
// }




import { allDetailedProductsData } from "../data/allProductsData"

export interface NavItem {
  name: string
  slug: string
  path: string
  subItems?: NavItem[]
}

export const formatCategoryName = (slug: string) => {
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
    "cocktail-shakers": "Cocktail Shakers", // Added for completeness
  }
  return (
    names[slug] ||
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  )
}

export const getProductNavigationData = (): NavItem[] => {
  const categoriesMap = new Map<string, Set<string>>()

  allDetailedProductsData.forEach((product) => {
    if (!categoriesMap.has(product.category)) {
      categoriesMap.set(product.category, new Set<string>())
    }
    if (product.subCategory) {
      categoriesMap.get(product.category)?.add(product.subCategory)
    }
  })

  const navData: NavItem[] = []
  categoriesMap.forEach((subCategoriesSet, categorySlug) => {
    const subItems: NavItem[] = Array.from(subCategoriesSet)
      .sort()
      .map((subSlug) => ({
        name: formatCategoryName(subSlug),
        slug: subSlug,
        path: `/products/${categorySlug}/${subSlug}`,
      }))

    navData.push({
      name: formatCategoryName(categorySlug),
      slug: categorySlug,
      path: `/products/${categorySlug}`,
      subItems: subItems.length > 0 ? subItems : undefined,
    })
  })

  // Sort main categories alphabetically
  navData.sort((a, b) => a.name.localeCompare(b.name))

  return navData
}
