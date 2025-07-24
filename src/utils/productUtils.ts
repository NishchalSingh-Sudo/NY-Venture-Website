// // src/utils/productUtils.ts
// // Corrected import: using allProductsData.ts as confirmed by user
// import {allProductsData} from '../data/allProductsData'; // Corrected import variable name

// export interface CategoryItem {
//   slug: string;
//   name: string;
//   subCategories?: { slug: string; name: string }[];
// }

// export const formatSlugToName = (slug: string): string => {
//   if (!slug) return '';
//   return slug
//     .split('-')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// };

// export const getProductCategories = (): CategoryItem[] => {
//   const categoriesMap = new Map<string, Map<string, string>>(); // categorySlug -> subCategorySlug -> subCategoryName

//   // Using allProductsData here
//   allProductsData.forEach(product => {
//     if (!categoriesMap.has(product.category)) {
//       categoriesMap.set(product.category, new Map<string, string>());
//     }

//     if (product.subCategory) {
//       const subCategoriesMap = categoriesMap.get(product.category)!;
//       subCategoriesMap.set(product.subCategory, formatSlugToName(product.subCategory));
//     }
//   });

//   const categories: CategoryItem[] = Array.from(categoriesMap.entries()).map(([categorySlug, subCategoriesMap]) => {
//     const subCategories = Array.from(subCategoriesMap.entries()).map(([subCategorySlug, subCategoryName]) => ({
//       slug: subCategorySlug,
//       name: subCategoryName,
//     }));

//     // Sort subcategories alphabetically
//     subCategories.sort((a, b) => a.name.localeCompare(b.name));

//     return {
//       slug: categorySlug,
//       name: formatSlugToName(categorySlug),
//       subCategories: subCategories.length > 0 ? subCategories : undefined,
//     };
//   });

//   // Sort main categories alphabetically
//   categories.sort((a, b) => a.name.localeCompare(b.name));

//   return categories;
// };

