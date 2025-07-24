// src/data/allProductsDetails.ts

export interface DetailedProduct {
  id: string;
  name: string;
  category: string; // e.g., 'bar-accessories', 'copper-items', 'home-decor'
  subCategory?: string; // e.g., 'bar-strainers', 'cocktail-shakers', 'jiggers', etc.
  description: string;
  shortDescription?: string; // Optional, a brief summary
  features: string[]; // Always an array, even if empty
  imageUrl: string;
  galleryImages: string[]; // Always an array, even if empty
  specifications?: { [key: string]: string }; // NEW: Optional specifications object
}

// Helper function for slugification (used to ensure consistency, though manual update is done here)
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

export const allDetailedProductsData: DetailedProduct[] = [
  // --- Copper Items ---
  {
    id: 'cma-001',
    name: 'Copper Matka Antique',
    category: 'copper-items',
    subCategory: 'copper-matkas',
    description: 'This antique copper matka is a timeless piece, handcrafted to bring traditional elegance and the benefits of copper-infused water to your home. Its distinctive hammered texture and classic design make it a perfect functional and decorative item.',
    shortDescription: 'This antique copper matka is a timeless piece, handcrafted to bring traditional elegance and the benefits of cop...',
    features: [
      '100% Pure Copper',
      'Antique Hammered Finish',
      'Capacity: 5 Litres approx.',
      'Traditional Design with Tap',
      'Ideal for water storage and home decor',
    ],
    imageUrl: '/images/products/CopperItems/CopperMatkas/Copper-Matka-Antique/Copper-Matka-Antique-Main.jpg',
    galleryImages: [
      '/images/products/CopperItems/CopperMatkas/Copper-Matka-Antique/Copper-Matka-Antique-Main.jpg',
      '/images/products/CopperItems/CopperMatkas/Copper-Matka-Antique/Copper-Matka-Antique-Front.JPG',
      '/images/products/CopperItems/CopperMatkas/Copper-Matka-Antique/Copper-Matka-Antique-Opened.JPG',
      '/images/products/CopperItems/CopperMatkas/Copper-Matka-Antique/Copper-Matka-Antique-TopView.JPG',
    ],
  },
  {
    id: 'chcm-001',
    name: 'Copper Half Hammered Color Matt Bottle',
    category: 'copper-items',
    subCategory: 'copper-bottles',
    description: 'This contemporary copper bottle features a distinctive half-hammered texture combined with a sleek matte color finish. It offers the traditional health benefits of copper with a modern aesthetic, perfect for stylish hydration.',
    shortDescription: 'This contemporary copper bottle features a distinctive half-hammered texture combined with a sleek matte color...',
    features: [
      '100% Pure Copper',
      'Unique Half-Hammered Texture',
      'Sleek Matte Color Finish (e.g., Navy Blue)',
      'Capacity: 1000ml (1 Litre)',
      'Leak-Proof Design',
    ],
    imageUrl: '/images/products/CopperItems/CopperBottles/Copper half hammered color matt/Copper-Half-Hammered-Color-Matt-Main.jpg',
    galleryImages: [
      '/images/products/CopperItems/CopperBottles/Copper half hammered color matt/Copper-Half-Hammered-Color-Matt-Main.jpg',
      '/images/products/CopperItems/CopperBottles/Copper half hammered color matt/Copper-Half-Hammered-Color-Matt-Lying.jpg',
      '/images/products/CopperItems/CopperBottles/Copper half hammered color matt/Copper-Half-Hammered-Color-Matt-Opened.jpg',
      '/images/products/CopperItems/CopperBottles/Copper half hammered color matt/Copper-Half-Hammered-Color-Matt-Straight.jpg',
    ],
  },
  {
    id: 'cbme-001',
    name: 'Copper Bottle with Meenakari Design',
    category: 'copper-items',
    subCategory: 'copper-bottles',
    description: 'This exquisite copper bottle features a hand-painted Meenakari enamel design, making it a beautiful and healthy choice for daily hydration. Copper is known for its health benefits, and the artistic design adds a touch of traditional Indian craftsmanship to your home.',
    shortDescription: 'This exquisite copper bottle features a hand-painted Meenakari enamel design, making it a beautiful and hea...',
    features: [
      '100% Pure Copper',
      'Vibrant Meenakari Handwork',
      'Capacity: 1000ml (1 Litre)',
      'Leak-Proof Design',
      'Enhances water with copper benefits',
    ],
    imageUrl: '/images/products/CopperItems/CopperBottles/Copper-bottle-meenakari/Copper-Bottle-Meenakari-Main.jpg',
    galleryImages: [
      '/images/products/CopperItems/CopperBottles/Copper-bottle-meenakari/Copper-Bottle-Meenakari-Main.jpg',
      '/images/products/CopperItems/CopperBottles/Copper-bottle-meenakari/Copper-Bottle-Meenakari-Lying.jpg',
      '/images/products/CopperItems/CopperBottles/Copper-bottle-meenakari/Copper-Bottle-Meenakari-Opened.jpg',
      '/images/products/CopperItems/CopperBottles/Copper-bottle-meenakari/Copper-Bottle-Meenakari-Straight.jpg',
    ],
  },
  {
    id: 'ckb-001',
    name: 'Copper King Bottle',
    category: 'copper-items',
    subCategory: 'copper-bottles',
    description: 'Our Copper King Bottle is an extra-large capacity copper vessel, perfect for families or those who prefer extended hydration. Its robust design and pure copper composition make it both durable and beneficial for health, embodying strength and elegance.',
    shortDescription: 'Our Copper King Bottle is an extra-large capacity copper vessel, perfect for families or those who prefer...',
    features: [
      '100% Pure Copper',
      'Large Capacity (e.g., 1500ml or more)',
      'Sturdy & Durable Build',
      'Leak-Proof Cap',
      'A statement piece for health and hydration',
    ],
    imageUrl: '/images/products/CopperItems/CopperBottles/Copper-King-bottle/Copper-King-Bottle-Main.jpg',
    galleryImages: [
      '/images/products/CopperItems/CopperBottles/Copper-King-bottle/Copper-King-Bottle-Main.jpg',
      '/images/products/CopperItems/CopperBottles/Copper-King-bottle/Copper-King-Bottle-Lying.jpg',
      '/images/products/CopperItems/CopperBottles/Copper-King-bottle/Copper-King-Bottle-Opened.jpg',
      '/images/products/CopperItems/CopperBottles/Copper-King-bottle/Copper-King-Bottle-Straight.jpg',
    ],
  },
  {
    id: 'cjh-001',
    name: 'Copper Jug Hammered',
    category: 'copper-items',
    subCategory: 'copper-jugs',
    description: 'This classic hammered copper jug is a versatile and beautiful addition to any home. Made from pure copper, it is not only an elegant serving piece but also helps to infuse water with copper benefits, promoting a healthier lifestyle. The hammered finish adds a touch of traditional artistry.',
    shortDescription: 'This classic hammered copper jug is a versatile and beautiful addition to any home. Made from pure copper,...',
    features: [
      '100% Pure Copper',
      'Hand-Hammered Finish',
      'Capacity: 1.5 Litres approx.',
      'Sturdy Handle and Lid',
      'Ideal for daily use and entertaining',
    ],
    imageUrl: '/images/products/CopperItems/CopperJugs/Copper-jug-hammered/Copper-Jug-Hammered-Main.jpg',
    galleryImages: [
      '/images/products/CopperItems/CopperJugs/Copper-jug-hammered/Copper-Jug-Hammered-Main.jpg',
      '/images/products/CopperItems/CopperJugs/Copper-jug-hammered/Copper-Jug-Hammered-Opened.jpg',
      '/images/products/CopperItems/CopperJugs/Copper-jug-hammered/Copper-Jug-Hammered-Straight.jpg',
      '/images/products/CopperItems/CopperJugs/Copper-jug-hammered/Copper-Jug-Hammered-TopView.jpg',
    ],
  },
  {
    id: 'cmd1-001',
    name: 'Copper Matka Design 1',
    category: 'copper-items',
    subCategory: 'copper-matkas',
    description: 'This copper matka features a distinctive design, making it a functional art piece for your home. Crafted from pure copper, it is not only ideal for storing and cooling water naturally but also enhances your decor with its unique aesthetic. A perfect blend of tradition and modern style.',
    shortDescription: 'This copper matka features a distinctive design, making it a functional art piece for your home. Crafted f...',
    features: [
      '100% Pure Copper',
      'Unique Embossed Design',
      'Capacity: 5 Litres approx.',
      'Integrated Tap for Easy Dispensing',
      'Perfect for water storage and display',
    ],
    imageUrl: '/images/products/CopperItems/CopperMatkas/Copper-Matka-design-1/Copper-Matka-Design-1-Main.jpg',
    galleryImages: [
      '/images/products/CopperItems/CopperMatkas/Copper-Matka-design-1/Copper-Matka-Design-1-Main.jpg',
      '/images/products/CopperItems/CopperMatkas/Copper-Matka-design-1/Copper-Matka-Design-1-Front.jpg',
      '/images/products/CopperItems/CopperMatkas/Copper-Matka-design-1/Copper-Matka-Design-1-Opened.jpg',
      '/images/products/CopperItems/CopperMatkas/Copper-Matka-design-1/Copper-Matka-Design-1-TopView.jpg',
    ],
  },
  {
    id: 'cjd1-001',
    name: 'Copper Jug Design 1',
    category: 'copper-items',
    subCategory: 'copper-jugs',
    description: 'This elegantly designed copper jug is a perfect addition to your kitchen or dining table. Crafted from pure copper, it not only serves as a beautiful centerpiece but also offers the traditional benefits of copper-infused water. Its unique design and sturdy build ensure both aesthetics and functionality.',
    shortDescription: 'This elegantly designed copper jug is a perfect addition to your kitchen or dining table. Crafted from pure...',
    features: [
      '100% Pure Copper',
      'Unique Embossed Design',
      'Capacity: 1.5 Litres approx.',
      'Comfortable Handle for Easy Pouring',
      'Ideal for daily use and entertaining',
    ],
    imageUrl: '/images/products/CopperItems/CopperJugs/Copper-jug-design-1/Copper-Jug-Design-1-Main.jpg',
    galleryImages: [
      '/images/products/CopperItems/CopperJugs/Copper-jug-design-1/Copper-Jug-Design-1-Main.jpg',
      '/images/products/CopperItems/CopperJugs/Copper-jug-design-1/Copper-Jug-Design-1-Opened.jpg',
      '/images/products/CopperItems/CopperJugs/Copper-jug-design-1/Copper-Jug-Design-1-Set.jpg',
      '/images/products/CopperItems/CopperJugs/Copper-jug-design-1/Copper-Jug-Design-1-Straight.jpg',
      '/images/products/CopperItems/CopperJugs/Copper-jug-design-1/Copper-Jug-Design-1-TopView.jpg',
    ],
  },
  {
    id: 'cphh-001',
    name: 'Copper Plain Half Hammered Bottle',
    category: 'copper-items',
    subCategory: 'copper-bottles',
    description: 'This uniquely designed copper bottle features a smooth plain top and a beautifully half-hammered base, offering a sophisticated look while providing the natural health benefits of copper. Its elegant design makes it a perfect accessory for daily use.',
    shortDescription: 'This uniquely designed copper bottle features a smooth plain top and a beautifully half-hammered base, offe...',
    features: [
      '100% Pure Copper',
      'Distinctive Plain & Half-Hammered Finish',
      'Capacity: 1000ml (1 Litre)',
      'Leak-Proof Design',
      'Stylish and beneficial for health',
    ],
    imageUrl: '/images/products/CopperItems/CopperBottles/Copper-plain-half-hammered/Copper-Plain-Half-Hammered-Main.jpg',
    galleryImages: [
      '/images/products/CopperItems/CopperBottles/Copper-plain-half-hammered/Copper-Plain-Half-Hammered-Main.jpg',
      '/images/products/CopperItems/CopperBottles/Copper-plain-half-hammered/Copper-Plain-Half-Hammered-Lying.jpg',
      '/images/products/CopperItems/CopperBottles/Copper-plain-half-hammered/Copper-Plain-Half-Hammered-Opened.jpg',
      '/images/products/CopperItems/CopperBottles/Copper-plain-half-hammered/Copper-Plain-Half-Hammered-Straight.jpg',
    ],
  },
  {
    id: 'chb-001',
    name: 'Classic Hammered Copper Bottle',
    category: 'copper-items',
    subCategory: 'copper-bottles',
    description: 'Our classic hammered copper bottle is a testament to traditional Indian craftsmanship. Made from 100% pure copper, it not only offers potential health benefits but also features a beautiful, textured surface that is both durable and aesthetically pleasing.',
    shortDescription: 'Our classic hammered copper bottle is a testament to traditional Indian craftsmanship. Made from 100% pure c...',
    features: [
      '100% Pure Copper',
      'Traditional Hand-Hammered Finish',
      'Capacity: 1000ml (1 Litre)',
      'Leak-Proof Design',
      'Promotes healthy hydration',
    ],
    imageUrl: '/images/products/CopperItems/CopperBottles/Copper-hammered/Copper-Hammered-Main.jpg',
    galleryImages: [
      '/images/products/CopperItems/CopperBottles/Copper-hammered/Copper-Hammered-Main.jpg',
      '/images/products/CopperItems/CopperBottles/Copper-hammered/Copper-Hammered-Lying.jpg',
      '/images/products/CopperItems/CopperBottles/Copper-hammered/Copper-Hammered-Opened.jpg',
      '/images/products/CopperItems/CopperBottles/Copper-hammered/Copper-Hammered-Straight.jpg',
    ],
  },
  {
    id: 'cbgs-001',
    name: 'Copper Bottle & Glass Set (Hammered)',
    category: 'copper-items',
    subCategory: 'copper-utensils-sets',
    description: 'This elegant copper bottle and glass set combines traditional craftsmanship with the health benefits of pure copper. The hammered texture adds a unique aesthetic, making it perfect for serving water or as a decorative piece in your home.',
    shortDescription: 'This elegant copper bottle and glass set combines traditional craftsmanship with the health benefits of pure...',
    features: [
      '100% Pure Copper',
      'Includes 1 Bottle and 2 Glasses',
      'Hammered Finish',
      'Bottle Capacity: 950ml approx.',
      'Glass Capacity: 250ml approx.',
      'Ideal for gifting and daily use',
    ],
    imageUrl: '/images/products/CopperItems/CopperBottles/Copper-bottle-glass-set/Copper-Bottle-&-Glass-Set-Main.jpg',
    galleryImages: [
      '/images/products/CopperItems/CopperBottles/Copper-bottle-glass-set/Copper-Bottle-&-Glass-Set-Main.jpg',
      '/images/products/CopperItems/CopperBottles/Copper-bottle-glass-set/Copper-Bottle-&-Glass-Set-Angle.jpg',
      '/images/products/CopperItems/CopperBottles/Copper-bottle-glass-set/Copper-Bottle-&-Glass-Set-Front.jpg',
      '/images/products/CopperItems/CopperBottles/Copper-bottle-glass-set/Copper-Bottle-&-Glass-Set-Unpacked.jpg',
    ],
  },
  {
    id: 'cjiah-001',
    name: 'Copper Jar Antique Hammered',
    category: 'copper-items',
    subCategory: 'copper-jars',
    description: 'This antique hammered copper jar is a masterpiece of traditional craftsmanship. Its distinctive texture and rich patina make it a unique addition to any home, ideal for dry storage, as a decorative accent, or even as a unique gift.',
    shortDescription: 'This antique hammered copper jar is a masterpiece of traditional craftsmanship. Its distinctive texture and...',
    features: [
      '100% Pure Copper',
      'Hand-Hammered Antique Finish',
      'Capacity: 1 Litre approx.',
      'Traditional and Rustic Design',
      'Versatile for storage or decoration',
    ],
    imageUrl: '/images/products/CopperItems/CopperJars/Copper-jar-antique-hammered/Copper-Jar-Antique-Hammered-Main.jpg',
    galleryImages: [
      '/images/products/CopperItems/CopperJars/Copper-jar-antique-hammered/Copper-Jar-Antique-Hammered-Main.jpg',
      '/images/products/CopperItems/CopperJars/Copper-jar-antique-hammered/Copper-Jar-Antique-Hammered-Lying.jpg',
      '/images/products/CopperItems/CopperJars/Copper-jar-antique-hammered/Copper-Jar-Antique-Hammered-Opened.jpg',
      '/images/products/CopperItems/CopperJars/Copper-jar-antique-hammered/Copper-Jar-Antique-Hammered-Straight.jpg',
    ],
  },
  {
    id: 'cjme-001',
    name: 'Copper Jar Meenakari',
    category: 'copper-items',
    subCategory: 'copper-jars',
    description: 'This Copper Jar with Meenakari design is a fusion of utility and intricate artistry. Handcrafted from pure copper and adorned with vibrant enamel work, it is perfect for storing dry goods or as a captivating decorative accent, adding a touch of Indian heritage to your space.',
    shortDescription: 'This Copper Jar with Meenakari design is a fusion of utility and intricate artistry. Handcrafted from pure c...',
    features: [
      '100% Pure Copper',
      'Exquisite Meenakari Handwork',
      'Capacity: 1 Litre approx.',
      'Aesthetic and Functional Design',
      'Ideal for gifting or home decor',
    ],
    imageUrl: '/images/products/CopperItems/CopperJars/Copper-jar-meenakari/Copper-Jar-Meenakari-Main.jpg',
    galleryImages: [
      '/images/products/CopperItems/CopperJars/Copper-jar-meenakari/Copper-Jar-Meenakari-Main.jpg',
      '/images/products/CopperItems/CopperJars/Copper-jar-meenakari/Copper-Jar-Meenakari-Lying.jpg',
      '/images/products/CopperItems/CopperJars/Copper-jar-meenakari/Copper-Jar-Meenakari-Opened.jpg',
      '/images/products/CopperItems/CopperJars/Copper-jar-meenakari/Copper-Jar-Meenakari-Straight.jpg',
    ],
  },
  {
    id: 'cpb-001',
    name: 'Copper Printed Bottle',
    category: 'copper-items',
    subCategory: 'copper-bottles',
    description: 'Our copper printed bottles are a fusion of health and artistry. Each bottle features unique and eye-catching prints, made from pure copper to provide the traditional benefits of copper-infused water in a modern and stylish way.',
    shortDescription: 'Our copper printed bottles are a fusion of health and artistry. Each bottle features unique and eye-catching...',
    features: [
      '100% Pure Copper',
      'Unique Printed Designs',
      'Capacity: 1000ml (1 Litre)',
      'Leak-Proof Design',
      'Adds a pop of color to your hydration',
    ],
    imageUrl: '/images/products/CopperItems/CopperBottles/Copper-printed-bottle/Copper-Printed-Bottle-Main.jpg',
    galleryImages: [
      '/images/products/CopperItems/CopperBottles/Copper-printed-bottle/Copper-Printed-Bottle-Main.jpg',
      '/images/products/CopperItems/CopperBottles/Copper-printed-bottle/Copper-Printed-Bottle-Lying.jpg',
      '/images/products/CopperItems/CopperBottles/Copper-printed-bottle/Copper-Printed-Bottle-Opened.jpg',
      '/images/products/CopperItems/CopperBottles/Copper-printed-bottle/Copper-Printed-Bottle-Straight.jpg',
    ],
  },
  {
    id: 'scb-001',
    name: 'Steel Copper Bottle',
    category: 'copper-items',
    subCategory: 'copper-bottles',
    description: 'Our Steel Copper Bottle is an innovative blend of two metals, offering the robustness of stainless steel on the exterior and the health benefits of pure copper on the interior. This modern design ensures durability, leak-proof performance, and stylish hydration.',
    shortDescription: 'Our Steel Copper Bottle is an innovative blend of two metals, offering the robustness of stainless steel on...',
    features: [
      'Outer Material: Stainless Steel',
      'Inner Material: 100% Pure Copper',
      'Capacity: 1000ml (1 Litre)',
      'Double-walled Insulation (if applicable, adjust if not)',
      'Sleek and Modern Design',
    ],
    imageUrl: '/images/products/CopperItems/CopperBottles/Steel-copper-bottle/Steel-Copper-Bottle-Main.jpg',
    galleryImages: [
      '/images/products/CopperItems/CopperBottles/Steel-copper-bottle/Steel-Copper-Bottle-Main.jpg',
      '/images/products/CopperItems/CopperBottles/Steel-copper-bottle/Steel-Copper-Bottle-Lying.jpg',
      '/images/products/CopperItems/CopperBottles/Steel-copper-bottle/Steel-Copper-Bottle-Opened.jpg',
      '/images/products/CopperItems/CopperBottles/Steel-copper-bottle/Steel-Copper-Bottle-Straight.jpg',
    ],
  },
  // --- Bagas Disposables Items ---
  {
    id: '4cmtrs-001',
    name: '4 Cups Meal Tray Round (Sugar Cane)',
    category: 'bagas-disposables',
    subCategory: 'meal-trays', // Updated subCategory
    description: 'Our 4-cup round meal trays are an excellent eco-friendly alternative to traditional plastic or styrofoam. Made from 100% natural and compostable sugar cane bagasse, these trays are sturdy, leak-proof, and microwave-safe, making them ideal for parties, catering, and daily use. Reduce your environmental footprint with this sustainable choice.',
    shortDescription: 'Our 4-cup round meal trays are an excellent eco-friendly alternative to traditional plastic or styrofoam. Ma...',
    features: [
      'Made from 100% Sugar Cane Bagasse',
      'Compostable and Biodegradable',
      '4 Compartments for Meals',
      'Microwave and Freezer Safe',
      'Sturdy and Leak-Proof',
      'Perfect for hot and cold food',
    ],
    imageUrl: '/images/products/BiodegradableItems/4 Cups meal tray round-Sugar Cane/4-Cups-Meal-Tray-Round-Sugar-Cane-Main.jpg',
    galleryImages: [
      '/images/products/BiodegradableItems/4 Cups meal tray round-Sugar Cane/4-Cups-Meal-Tray-Round-Sugar-Cane-Main.jpg',
      '/images/products/BiodegradableItems/4 Cups meal tray round-Sugar Cane/4-Cups-Meal-Tray-Round-Sugar-Cane-Angled.jpg',
      '/images/products/BiodegradableItems/4 Cups meal tray round-Sugar Cane/4-Cups-Meal-Tray-Round-Sugar-Cane-Front.jpg',
      '/images/products/BiodegradableItems/4 Cups meal tray round-Sugar Cane/4-Cups-Meal-Tray-Round-Sugar-Cane-Lateral.jpg',
      '/images/products/BiodegradableItems/4 Cups meal tray round-Sugar Cane/4-Cups-Meal-Tray-Round-Sugar-Cane-TopView.jpg',
    ],
  },
  {
    id: '5cmts-001',
    name: '5 Cups Meal Tray (Sugar Cane)',
    category: 'bagas-disposables',
    subCategory: 'meal-trays', // Updated subCategory
    description: 'Our 5-cup meal trays provide a complete and eco-friendly serving solution. Crafted from 100% natural and compostable sugar cane bagasse, these durable trays are perfect for full meals, featuring multiple compartments to separate food items. They are both microwave and freezer safe, ideal for a variety of uses.',
    shortDescription: 'Our 5-cup meal trays provide a complete and eco-friendly serving solution. Crafted from 100% natural and com...',
    features: [
      'Made from 100% Sugar Cane Bagasse',
      'Compostable and Biodegradable',
      '5 Compartments for Meals',
      'Microwave and Freezer Safe',
      'Sturdy and Leak-Resistant',
      'Suitable for hot and cold food',
    ],
    imageUrl: '/images/products/BiodegradableItems/5 Cups meal tray- Sugar Cane/5-Cups-Meal-Tray-Sugar-Cane-Main.jpg',
    galleryImages: [
      '/images/products/BiodegradableItems/5 Cups meal tray- Sugar Cane/5-Cups-Meal-Tray-Sugar-Cane-Main.jpg',
      '/images/products/BiodegradableItems/5 Cups meal tray- Sugar Cane/5-Cups-Meal-Tray-Sugar-Cane-Angled.jpg',
      '/images/products/BiodegradableItems/5 Cups meal tray- Sugar Cane/5-Cups-Meal-Tray-Sugar-Cane-Front.jpg',
      '/images/products/BiodegradableItems/5 Cups meal tray- Sugar Cane/5-Cups-Meal-Tray-Sugar-Cane-Lateral.jpg',
      '/images/products/BiodegradableItems/5 Cups meal tray- Sugar Cane/5-Cups-Meal-Tray-Sugar-Cane-TopView.jpg',
    ],
  },
  {
    id: 'cd-001',
    name: 'Disposable Cups (Mixed Design)',
    category: 'bagas-disposables',
    subCategory: 'cups', // Updated subCategory
    description: 'Our disposable cups offer a convenient and hygienic solution for beverages at any event. Featuring a variety of colorful and fun designs, these cups are perfect for parties, picnics, and everyday use, ensuring easy cleanup and a vibrant presentation.',
    shortDescription: 'Our disposable cups offer a convenient and hygienic solution for beverages at any event. Featuring a variety...',
    features: [
      'Convenient and Hygienic',
      'Mixed Design Pack',
      'Capacity: 250ml approx.',
      'Ideal for cold beverages',
      'Perfect for parties and events',
    ],
    imageUrl: '/images/products/DisposableItems/Cup disposable/Cup-Disposable-Main.jpg',
    galleryImages: [
      '/images/products/DisposableItems/Cup disposable/Cup-Disposable-Main.jpg',
      '/images/products/DisposableItems/Cup disposable/Cup-Disposable-Arranged.jpg',
      '/images/products/DisposableItems/Cup disposable/Cup-Disposable-Mixed.jpg',
    ],
  },
  {
    id: 'prssc-001',
    name: 'Small Round Plate (Sugar Cane)',
    category: 'bagas-disposables',
    subCategory: 'plates', // Updated subCategory
    description: 'Our small round plates are an excellent eco-friendly alternative for appetizers, desserts, and side dishes. Made from 100% natural and compostable sugar cane bagasse, these plates are sturdy, resistant to oil and water, and can handle both hot and cold food. A perfect sustainable choice for any gathering.',
    shortDescription: 'Our small round plates are an excellent eco-friendly alternative to traditional plastic or styrofoam. All our round plate is made from 100% natural and compostable sugar cane bagasse, these plates are sturdy, resistant to oil and water, and can handle both hot and cold food. A perfect sustainable choice for any gathering.',
    features: [
      'Made from 100% Sugar Cane Bagasse',
      'Compostable and Biodegradable',
      'Small Round Size (e.g., 6 inches)',
      'Oil and Water Resistant',
      'Microwave and Freezer Safe',
      'Ideal for appetizers, desserts, and small meals',
    ],
    imageUrl: '/images/products/BiodegradableItems/Plate round small- Sugar cane/Plate-Round-Small-Sugar-Cane-Main.jpg',
    galleryImages: [
      '/images/products/BiodegradableItems/Plate round small- Sugar cane/Plate-Round-Small-Sugar-Cane-Main.jpg',
      '/images/products/BiodegradableItems/Plate round small- Sugar cane/Plate-Round-Small-Sugar-Cane-Front-Multiple.jpg',
      '/images/products/BiodegradableItems/Plate round small- Sugar cane/Plate-Round-Small-Sugar-Cane-Front-Single.jpg',
      '/images/products/BiodegradableItems/Plate round small- Sugar cane/Plate-Round-Small-Sugar-Cane-Lateral.jpg',
      '/images/products/BiodegradableItems/Plate round small- Sugar cane/Plate-Round-Small-Sugar-Cane-TopView.jpg',
    ],
  },
  {
    id: 'prsc-001',
    name: 'Round Plate (Sugar Cane)',
    category: 'bagas-disposables',
    subCategory: 'plates', // Updated subCategory
    description: 'Our round plates, made from 100% natural and compostable sugar cane bagasse, are a perfect choice for sustainable dining. These plates are remarkably sturdy, resistant to grease and water, and can safely hold both hot and cold food items. Ideal for daily meals, parties, and catering, they offer convenience without compromising on environmental responsibility.',
    shortDescription: 'Our round plates, made from 100% natural and compostable sugar cane bagasse, are a perfect choice for susta...',
    features: [
      'Made from 100% Sugar Cane Bagasse',
      'Compostable and Biodegradable',
      'Standard Round Size (e.g., 9 inches)',
      'Oil and Water Resistant',
      'Microwave and Freezer Safe',
      'Durable for various food types',
    ],
    imageUrl: '/images/products/BiodegradableItems/Plate round- Sugar cane/Plate-Round-Sugar-Cane-Main.jpg',
    galleryImages: [
      '/images/products/BiodegradableItems/Plate round- Sugar cane/Plate-Round-Sugar-Cane-Main.jpg',
      '/images/products/BiodegradableItems/Plate round- Sugar cane/Plate-Round-Sugar-Cane-Front-Multiple.jpg',
      '/images/products/BiodegradableItems/Plate round- Sugar cane/Plate-Round-Sugar-Cane-Front-Single.jpg',
      '/images/products/BiodegradableItems/Plate round- Sugar cane/Plate-Round-Sugar-Cane-Lateral.jpg',
      '/images/products/BiodegradableItems/Plate round- Sugar cane/Plate-Round-Sugar-Cane-TopView.jpg',
    ],
  },
  {
    id: 'psts-001',
    name: 'Triangle Snack Plate (Sugar Cane)',
    category: 'bagas-disposables',
    subCategory: 'plates', // Updated subCategory
    description: 'Our uniquely designed triangle snack plates are an innovative and eco-friendly choice for serving appetizers, desserts, and small bites. Made from 100% natural and compostable sugar cane bagasse, these plates are sturdy, resistant to oil and water, and can handle both hot and cold food. A stylish and sustainable solution for any gathering.',
    shortDescription: 'Our uniquely designed triangle snack plates are an innovative and eco-friendly choice for serving appetize...',
    features: [
      'Made from 100% Sugar Cane Bagasse',
      'Compostable and Biodegradable',
      'Unique Triangle Shape',
      'Oil and Water Resistant',
      'Microwave and Freezer Safe',
      'Ideal for snacks, appetizers, and small portions',
    ],
    imageUrl: '/images/products/BiodegradableItems/Plate Snacks triangle- Sugar cane/Plate-Snacks-Triangle-Sugar-Cane-Main.jpg',
    galleryImages: [
      '/images/products/BiodegradableItems/Plate Snacks triangle- Sugar cane/Plate-Snacks-Triangle-Sugar-Cane-Main.jpg',
      '/images/products/BiodegradableItems/Plate Snacks triangle- Sugar cane/Plate-Snacks-Triangle-Sugar-Cane-Front-Multiple.jpg',
      '/images/products/BiodegradableItems/Plate Snacks triangle- Sugar cane/Plate-Snacks-Triangle-Sugar-Cane-Front-Single.jpg',
      '/images/products/BiodegradableItems/Plate Snacks triangle- Sugar cane/Plate-Snacks-Triangle-Sugar-Cane-Lateral.jpg',
      '/images/products/BiodegradableItems/Plate Snacks triangle- Sugar cane/Plate-Snacks-Triangle-Sugar-Cane-TopView.jpg',
    ],
  },
  {
    id: 'pssc-001',
    name: 'Square Plate (Sugar Cane)',
    category: 'bagas-disposables',
    subCategory: 'plates', // Updated subCategory
    description: 'Our square plates are a contemporary and eco-conscious choice for any meal. Made from 100% natural and compostable sugar cane bagasse, these plates are robust, resistant to oil and water, and suitable for both hot and cold food. Their modern design adds a touch of elegance to any table setting, while their biodegradability supports a healthier planet.',
    shortDescription: 'Our square plates are a contemporary and eco-conscious choice for any meal. Made from 100% natural and comp...',
    features: [
      'Made from 100% Sugar Cane Bagasse',
      'Compostable and Biodegradable',
      'Square Shape for Modern Aesthetic',
      'Oil and Water Resistant',
      'Microwave and Freezer Safe',
      'Durable for various food types and occasions',
    ],
    imageUrl: '/images/products/BiodegradableItems/Plate square- Sugar cane/Plate-Square-Sugar-Cane-Main.jpg',
    galleryImages: [
      '/images/products/BiodegradableItems/Plate square- Sugar cane/Plate-Square-Sugar-Cane-Main.jpg',
      '/images/products/BiodegradableItems/Plate square- Sugar cane/Plate-Square-Sugar-Cane-Front-Multiple.jpg',
      '/images/products/BiodegradableItems/Plate square- Sugar cane/Plate-Square-Sugar-Cane-Front-Single.jpg',
      '/images/products/BiodegradableItems/Plate square- Sugar cane/Plate-Square-Sugar-Cane-Lateral.jpg',
      '/images/products/BiodegradableItems/Plate square- Sugar cane/Plate-Square-Sugar-Cane-TopView.jpg',
    ],
  },
  {
    id: 'rdc-001',
    name: 'Rippled Disposable Cup',
    category: 'bagas-disposables',
    subCategory: 'cups', // Updated subCategory
    description: 'Our rippled disposable cups are designed for comfort and insulation, making them perfect for hot drinks like coffee, tea, and hot chocolate. The unique rippled texture provides a secure grip and helps protect hands from heat, while their disposable nature ensures easy cleanup for busy environments or events.',
    shortDescription: 'Our rippled disposable cups are designed for comfort and insulation, making them perfect for hot drinks like...',
    features: [
      'Insulated Rippled Design',
      'Comfortable to Hold (Hot/Cold)',
      'Capacity: 200ml approx.',
      'Ideal for Hot Beverages',
      'Convenient and Hygienic',
    ],
    imageUrl: '/images/products/DisposableItems/Rippled disposable cup/Rippled-Disposable-Cup-Main.jpg',
    galleryImages: [
      '/images/products/DisposableItems/Rippled disposable cup/Rippled-Disposable-Cup-Main.jpg',
      '/images/products/DisposableItems/Rippled disposable cup/Rippled-Disposable-Cup-Angle.jpg',
      '/images/products/DisposableItems/Rippled disposable cup/Rippled-Disposable-Cup-Stack.jpg',
      '/images/products/DisposableItems/Rippled disposable cup/Rippled-Disposable-Cup-TopView.jpg',
    ],
  },
  {
    id: 'ssc-001',
    name: 'Sugar Cane Straws',
    category: 'bagas-disposables',
    subCategory: 'utensils-straws', // Updated subCategory
    description: 'Our sugar cane straws are a revolutionary step towards reducing plastic waste. Made entirely from natural and compostable sugar cane fiber, these straws are durable, functional, and break down naturally without harming the environment. They are perfect for all beverages and a responsible choice for everyday use and events.',
    shortDescription: 'Our sugar cane straws are a revolutionary step towards reducing plastic waste. Made entirely from natural a...',
    features: [
      'Made from 100% Sugar Cane Fiber',
      'Compostable and Biodegradable',
      'Durable and Functional',
      'Plastic-Free Alternative',
      'Suitable for all beverages',
    ],
    imageUrl: '/images/products/BiodegradableItems/Straw- Sugar cane/Straw-Sugar-Cane-Main.jpg',
    galleryImages: [
      '/images/products/BiodegradableItems/Straw- Sugar cane/Straw-Sugar-Cane-Main.jpg',
      '/images/products/BiodegradableItems/Straw- Sugar cane/Straw-Sugar-Cane-Arranged.jpg',
      '/images/products/BiodegradableItems/Straw- Sugar cane/Straw-Sugar-Cane-Mixed.jpg',
      '/images/products/BiodegradableItems/Straw- Sugar cane/Straw-Sugar-Cane-Single.jpg',
    ],
  },
  {
    id: 'wf-001',
    name: 'Wooden Forks',
    category: 'bagas-disposables',
    subCategory: 'utensils-straws', // Updated subCategory
    description: 'Our wooden forks are a fantastic eco-friendly alternative to traditional plastic cutlery. Crafted from sustainably sourced wood, these forks are strong, smooth, and entirely compostable, breaking down naturally without harming the environment. Perfect for picnics, parties, and everyday meals, they offer both convenience and peace of mind.',
    shortDescription: 'Our wooden forks are a fantastic eco-friendly alternative to traditional plastic cutlery. Crafted from susta...',
    features: [
      'Made from 100% Natural Wood',
      'Compostable and Biodegradable',
      'Sturdy and Smooth Finish',
      'Plastic-Free Alternative',
      'Ideal for hot and cold food',
    ],
    imageUrl: '/images/products/BiodegradableItems/Wooden fork/Wooden-Fork-Main.jpg',
    galleryImages: [
      '/images/products/BiodegradableItems/Wooden fork/Wooden-Fork-Main.jpg',
      '/images/products/BiodegradableItems/Wooden fork/Wooden-Fork-Angled-Multiple.jpg',
      '/images/products/BiodegradableItems/Wooden fork/Wooden-Fork-Single.jpg',
      '/images/products/BiodegradableItems/Wooden fork/Wooden-Fork-TopView-Multiple.jpg',
    ],
  },
  {
    id: 'ws-001',
    name: 'Wooden Spoons',
    category: 'bagas-disposables',
    subCategory: 'utensils-straws', // Updated subCategory
    description: 'Our wooden spoons are an excellent eco-friendly alternative to traditional plastic cutlery. Crafted from sustainably sourced wood, these spoons are strong, smooth, and entirely compostable, breaking down naturally without harming the environment. Perfect for picnics, parties, and everyday meals, they offer both convenience and peace of mind.',
    shortDescription: 'Our wooden spoons are an excellent eco-friendly alternative to traditional plastic cutlery. Crafted from sust...',
    features: [
      'Made from 100% Natural Wood',
      'Compostable and Biodegradable',
      'Sturdy and Smooth Finish',
      'Plastic-Free Alternative',
      'Ideal for hot and cold food',
    ],
    imageUrl: '/images/products/BiodegradableItems/Wooden spoon/Wooden-Spoon-Main.jpg',
    galleryImages: [
      '/images/products/BiodegradableItems/Wooden spoon/Wooden-Spoon-Main.jpg',
      '/images/products/BiodegradableItems/Wooden spoon/Wooden-Spoon-Angled-Multiple.jpg',
      '/images/products/BiodegradableItems/Wooden spoon/Wooden-Spoon-Single.jpg',
      '/images/products/BiodegradableItems/Wooden spoon/Wooden-Spoon-TopView-Multiple.jpg',
    ],
  },

  // SubCategory: ice-buckets-chillers
  {
    id: 'ss-apple-ice-bucket-dw',
    name: 'SS Apple Ice Bucket Double Wall',
    imageUrl: '/images/products/bar-accessories/ice-buckets-chillers/ss-apple-ice-bucket-dw.jpg', // Placeholder
    galleryImages: [],
    category: 'bar-accessories',
    subCategory: 'ice-buckets-chillers',
    shortDescription: 'Stylish double-walled stainless steel ice bucket in an apple shape.',
    description: 'Keep your ice perfectly chilled with this unique apple-shaped ice bucket. Its double-wall insulation prevents condensation and ensures ice lasts longer, adding a touch of elegance to any bar setup.',
    features: ['Double-walled insulation', 'Unique apple shape', 'Prevents condensation'],
    specifications: {
      material: 'Stainless Steel',
      capacity: '2L', // Example
      dimensions: 'H: 20cm, Dia: 18cm',
      finish: 'Shiny, Matte, Color Paint, Gold-Plated', // Example
    },
  },
  {
    id: 'ss-ice-bucket-dw',
    name: 'SS Ice Bucket Double Wall',
    imageUrl: '/images/products/bar-accessories/ice-buckets-chillers/ss-ice-bucket-dw-main.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'ice-buckets-chillers',
    shortDescription: 'Classic double-walled stainless steel ice bucket.',
    description: 'A timeless double-walled ice bucket, crafted from high-quality stainless steel. Designed to maintain ice temperature efficiently for extended periods, perfect for parties and gatherings.',
    features: ['Double-walled insulation', 'High-quality stainless steel', 'Efficient ice retention'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      capacity: '1.3L', // Example
      technics: 'Stamping, Spot or Seam Welding, Deep Drawing, Bending, Spinning available'
    },
  },
  {
    id: 'pvd-coated-ice-buckets',
    name: 'PVD Coated Ice Buckets',
    imageUrl: '/images/products/bar-accessories/ice-buckets-chillers/pvd-coated-ice-buckets.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'ice-buckets-chillers',
    shortDescription: 'Luxurious PVD coated ice buckets in various finishes.',
    description: 'Add a touch of sophistication to your bar with our PVD coated ice buckets. Available in various colors, these buckets combine stunning aesthetics with excellent ice retention.',
    features: ['PVD coating for durability', 'Variety of colors', 'Sophisticated design'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel, PVD Coated',
      capacity: '1.3L',
      technics: 'Stamping, Spot or Seam Welding, Deep Drawing, Bending, Spinning available', // Example
    },
  },
  {
    id: 'ss-champagne-ice-ball',
    name: 'SS Champagne Ice Ball',
    imageUrl: '/images/products/bar-accessories/ice-buckets-chillers/ss-champagne-ice-ball-main.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'ice-buckets-chillers',
    shortDescription: 'Innovative stainless steel ice ball for chilling champagne bottles.',
    description: 'This unique stainless steel ice ball chills your champagne bottle from within, eliminating the need for a bulky ice bucket. Perfect for elegant, space-saving chilling.',
    features: ['Internal chilling', 'No dilution', 'Reusable'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      usage: 'In-bottle chilling',
      technics: 'Stamping, Spot or Seam Welding, Deep Drawing, Bending, Spinning available',
    },
  },
  {
    id: 'dw-ss-champagne-ice-bucket',
    name: 'Double Wall Stainless Steel Champagne Ice Bucket',
    imageUrl: '/images/products/bar-accessories/ice-buckets-chillers/dw-ss-champagne-ice-bucket.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'ice-buckets-chillers',
    shortDescription: 'Premium double-walled bucket for chilling champagne and wine.',
    description: 'Designed specifically for champagne and wine, this double-walled stainless steel bucket ensures your beverages remain perfectly chilled for extended periods without condensation.',
    features: ['Double-walled insulation', 'Designed for champagne/wine', 'Condensation-free'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      capacity: 'Standard Champagne Bottle',
      technics: 'Stamping, Spot or Seam Welding, Deep Drawing, Bending, Spinning available',
    },
  },
  {
    id: 'ss-champagne-ice-bucket',
    name: 'Stainless Steel Champagne Ice Bucket',
    imageUrl: '/images/products/bar-accessories/ice-buckets-chillers/ss-champagne-ice-bucket-main.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'ice-buckets-chillers',
    shortDescription: 'Keep your champagne perfectly chilled with this classic stainless steel bucket. It includes a lid to ensure longer cooling and is equipped with handles for effortless handling',
    description: 'A sleek and functional stainless steel champagne ice bucket, ideal for keeping your sparkling wines perfectly cool during celebrations and events.',
    features: ['Sleek design', 'Functional', 'Ideal for celebrations'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      capacity: 'Standard Champagne Bottle',

    },
  },
  {
    id: 'ss-bartender-wine-chill-stick',
    name: 'Stainless Steel Bartender Wine Chill Stick',
    imageUrl: '/images/products/bar-accessories/ice-buckets-chillers/ss-bartender-wine-chill-stick.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'ice-buckets-chillers',
    shortDescription: 'Stainless Steel Wine Chiller Stick Container Freezer 3 in 1 with Aerator and Pourer.',
    description: 'This innovative stainless steel chill stick cools your wine directly in the bottle in minutes, maintaining its optimal temperature without watering it down. Beyond chilling, it features an integrated aerator that instantly breathes life into your wine as you pour, softening tannins and unlocking its full aromatic bouquet. The built-in drip-free pourer ensures a smooth, controlled, and elegant pour every time, enhancing your wine experience from bottle to glass.',
    features: ['3 in 1 with Aerator and Pourer', 'Rapid chilling', 'No dilution', 'Reusable',],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      length: '20cm', // Example
      finish: 'Standard, Silver',
      
    },
  },
  {
    id: 'portable-ss-beer-chiller-stick',
    name: 'Portable Stainless Steel Beer Chiller Stick',
    imageUrl: '/images/products/bar-accessories/ice-buckets-chillers/portable-ss-beer-chiller-stick.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'ice-buckets-chillers',
    shortDescription: 'Stainless Steel Beer Chiller Stick for Bottles Beverage Cooler Cooling Sticks easy and convenient to use.',
    description: 'Insert this portable stainless steel chiller stick directly into your beer bottle to keep your drink refreshingly cold, perfect for outdoor events and leisurely sipping.',
    features: ['Portable', 'Keeps beer cold', 'Easy to use'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      usage: 'In-bottle beer chilling',
    },
  },
  {
    id: 'ss-wine-bucket-stand',
    name: 'SS Wine Bucket Stand',
    imageUrl: '/images/products/bar-accessories/ice-buckets-chillers/ss-wine-bucket-stand.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'ice-buckets-chillers',
    shortDescription: 'Champagne & Wine and Beer Ice Bucket with Stainless Steel Stand Stand folds for easy storage use by all foodservice and hospitality industry experts worldwide',
    description: 'A practical and elegant stand for your wine or champagne bucket, keeping it easily accessible yet off the table, ideal for professional settings and large gatherings.',
    features: ['Sturdy construction', 'Elegant design', 'Space-saving'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      height: '60cm', // Example
    },
  },

  // SubCategory: jiggers-peg-measures
  {
    id: 'ss-folding-shot-glass-keychain',
    name: 'Stainless Steel Folding Shot Glass with Keychain',
    imageUrl: '/images/products/bar-accessories/jiggers-peg-measures/ss-folding-shot-glass-keychain.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'jiggers-peg-measures',
    shortDescription: 'Compact and portable shot glass, perfect for travel.',
    description: 'This innovative stainless steel shot glass folds down for easy portability and comes with a keychain, ensuring you\'re always ready for a toast, wherever you go.',
    features: ['Foldable design', 'Portable', 'Durable'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      capacity: '30ML/60ML', // Example
      finish: 'Anodize, Plating, Brushing, Polishing, Blackened, Powder coating, Sandblasting, Laser engraving, etc',
    },
  },
  {
    id: 'ss-double-jigger',
    name: 'Stainless Steel Double Jigger',
    imageUrl: '/images/products/bar-accessories/jiggers-peg-measures/ss-double-jigger.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'jiggers-peg-measures',
    shortDescription: 'Standard double-sided jigger for accurate measuring with high top class stainless steel rustless,durable, Food Grade Mirror polished surface, bright, shiny, high-end & luxury.',
    description: 'An essential bar tool, this stainless steel double jigger offers precise 1oz and 2oz measurements, ensuring your cocktails are perfectly balanced every time.',
    features: ['Precise measurements', 'Double-sided', 'Durable'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      capacity: '30ML/60ML',
      finish : 'Food Grade Mirror polished surface',
    },
  },
  {
    id: 'coloured-jigger',
    name: 'Coloured Jigger',
    imageUrl: '/images/products/bar-accessories/jiggers-peg-measures/coloured-jigger.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'jiggers-peg-measures',
    shortDescription: 'This is Stainless steel double jigger The high top class stainless steel rustless, durable, Food Grade Mirror polished surface, bright, shiny, high-end & luxury',
    description: 'Add a pop of color to your bar set with our range of colored jiggers. These functional measuring tools combine precision with playful aesthetics, perfect for modern mixologists.',
    features: ['Vibrant colors', 'Accurate measurements', 'Stylish'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel, Coated',
      colors: 'Assorted',
      finish: 'Food Grade Mirror polished surface'
    },
  },
  {
    id: 'copper-plated-peg-measure',
    name: 'Copper Plated Peg Measure',
    imageUrl: '/images/products/bar-accessories/jiggers-peg-measures/copper-plated-peg-measure.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'jiggers-peg-measures',
    shortDescription: 'Elegant peg measure with a lustrous copper plating.',
    description: 'Combine classic elegance with precise measurement using this copper-plated peg measure. A beautiful addition to any sophisticated bar setup, offering both style and utility.',
    features: ['Copper plated', 'Elegant design', 'Precise'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel, Copper Plated',
      capacity: '30ML/60ML', // Example
    },
  },
  {
    id: 'ss-japanese-rolled-edge-double-jigger',
    name: 'SS Japanese Rolled-Edge Double Jigger',
    imageUrl: '/images/products/bar-accessories/jiggers-peg-measures/ss-japanese-rolled-edge-double-jigger.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'jiggers-peg-measures',
    shortDescription: 'Professional Japanese-style jigger with rolled edges for smooth pouring with high top class stainless steel 304, rustless, durable, Food Grade Mirror polished surface, bright, shiny, high-end & luxury.',
    description: 'Favored by professional bartenders, this Japanese-style jigger features precise measurements and rolled edges for clean, drip-free pouring. Crafted from high-quality stainless steel.',
    features: ['Japanese style', 'Rolled edges', 'Precise measurements'],
    galleryImages: [],
    specifications: {
      material: '304 Stainless Steel',
      capacity: '30ML/60ML', // Example
      finish: 'Food Grade Mirror polished surface',
    },
  },
  {
    id: 'jigger-with-copper-plating',
    name: 'Jigger with Copper Plating',
    imageUrl: '/images/products/bar-accessories/jiggers-peg-measures/jigger-with-copper-plating.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'jiggers-peg-measures',
    shortDescription: 'Rolled-Edge Stainless steel double jigger with copper plating colour',
    description: 'Experience the blend of functionality and aesthetics with this copper-plated jigger. Its radiant finish makes it a standout piece, while ensuring accurate spirit measurements for your cocktails.',
    features: ['Copper plating', 'Accurate', 'Stylish'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel, Copper Plated',
      capacity: '30ML/60ML', 
      finish: 'Copper Plating color'
    },
  },
  {
    id: 'ss-double-side-peg-measure-cup',
    name: 'SS Double Side Peg Measure Cup',
    imageUrl: '/images/products/bar-accessories/jiggers-peg-measures/ss-double-side-peg-measure-cup.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'jiggers-peg-measures',
    shortDescription: 'Convenient double-sided peg measure cup for precise pours.',
    description: 'This stainless steel double-sided peg measure cup simplifies cocktail preparation, allowing for quick and accurate measurements from both ends, a must-have for any bartender.',
    features: ['Double-sided', 'Precise', 'Easy to use'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      capacity: '30ML/60ML', // Example
    },
  },
  {
    id: 'ss-mirror-finish-peg-measure',
    name: 'SS Mirror Finish Peg Measure',
    imageUrl: '/images/products/bar-accessories/jiggers-peg-measures/ss-mirror-finish-peg-measure.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'jiggers-peg-measures',
    shortDescription: 'Stainless steel double jigger The high top class stainless steel 304, rustless, durable, Food Grade Mirror polished surface, bright,shiny, high-end & luxury',
    description: 'Elevate your bar tools with this mirror-finish stainless steel peg measure. Its highly polished surface adds a touch of sophistication, while offering reliable measuring accuracy.',
    features: ['Mirror finish', 'Sophisticated', 'Accurate'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      finish: 'Mirror Polish',
      capacity: '30ML/60ML',
    },
  },
  {
    id: 'brass-peg-measure-classic',
    name: 'Brass Peg Measure',
    imageUrl: '/images/products/bar-accessories/jiggers-peg-measures/brass-peg-measure-classic.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'jiggers-peg-measures',
    shortDescription: 'Classic brass peg measure for a vintage bar aesthetic.',
    description: 'Embrace timeless elegance with this solid brass peg measure. Its classic design and warm metallic sheen make it a beautiful and functional addition to any traditional or vintage-themed bar.',
    features: ['Solid brass', 'Vintage aesthetic', 'Durable'],
    galleryImages: [],
    specifications: {
      material: '304 Stainless Steel',
      capacity: '30ML/60ML',
      finish: 'Food Grade Mirror polished surface', // Example
    },
  },
  {
    id: 'ss-double-jigger-with-handle',
    name: 'SS Double Jigger with Handle',
    imageUrl: '/images/products/bar-accessories/jiggers-peg-measures/ss-double-jigger-with-handle.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'jiggers-peg-measures',
    shortDescription: 'Give you a ROD handle on pouring with precision.Goes perfectly with modern bars, or homes setting',
    description: 'Designed for comfort and control, this stainless steel double jigger features a sturdy handle, ensuring steady and precise pouring for all your cocktail creations.',
    features: ['Ergonomic handle', 'Precise', 'Comfortable grip'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      capacity: '15ML/30ML', // Example
    },
  },
  {
    id: 'ss-jigger-with-handle',
    name: 'SS Jigger with Handle',
    imageUrl: '/images/products/bar-accessories/jiggers-peg-measures/ss-jigger-with-handle.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'jiggers-peg-measures',
    shortDescription: 'Give you a ROD handle on pouring with precision.Goes perfectly with modern bars, or homes setting',
    description: 'This single-sided stainless steel jigger comes with a handle for enhanced grip and stability during measurements, making it a reliable tool for any home or professional bar.',
    features: ['Practical handle', 'Improved grip', 'Reliable'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      capacity: '30ML', // Example
    },
  },

  // SubCategory: cocktail-shakers
  {
    id: 'regular-cocktail-shaker',
    name: 'Regular Cocktail Shaker',
    imageUrl: '/images/products/bar-accessories/cocktail-shakers/regular-cocktail-shaker.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'cocktail-shakers',
    shortDescription: 'Standard 3-piece cocktail shaker for home use.',
    description: 'A classic and easy-to-use cocktail shaker, perfect for beginners and home enthusiasts. This 3-piece set includes a tin, cap, and built-in strainer, making cocktail mixing simple and fun.',
    features: ['3-piece set', 'Built-in strainer', 'Easy to use'],
    galleryImages: [],
    specifications: {
      material: '304/201 Stainless Steel',
      capacity: '500ml', // Example
      thickness: '0.4-0.6MM',
      customization: 'Logo customisations of any kind are avaialable',
    },
  },
  {
    id: 'the-cocktail-shaker-pvd-coated',
    name: 'The Cocktail Shaker PVD Coated',
    imageUrl: '/images/products/bar-accessories/cocktail-shakers/the-cocktail-shaker-pvd-coated.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'cocktail-shakers',
    shortDescription: 'Premium cocktail shaker with a stylish PVD coating.',
    description: 'Elevate your mixology with this PVD coated cocktail shaker. Its durable and attractive finish adds a touch of luxury, while its robust construction ensures perfect chilling and mixing.',
    features: ['PVD coated', 'Durable finish', 'Luxury aesthetic'],
    galleryImages: [],
    specifications: {
      material: '304/201 Stainless Steel, PVD Coated',
      capacity: '750ml', // Example
      thickness: '0.4-0.6MM',
      customization: 'Logo customizations of any kind are avaialable',
    },
  },
  { 
    id: 'boston-shaker',
    name: 'Boston Shaker',
    imageUrl: '/images/products/bar-accessories/cocktail-shakers/boston-shaker.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'cocktail-shakers',
    shortDescription: 'This Boston shaker is made of stainless steel with black coating, it is food safe grade',
    description: 'Designed for efficiency and durability, the Boston Shaker is a favorite among professionals. Its superior seal and ergonomic design allow for vigorous shaking and perfectly chilled drinks.',
    features: ['High-performance', 'Superior seal', 'Ergonomic design'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      type: 'Boston Shaker', // Example
    },
  },
  {
    id: 'deluxe-cocktail-shaker',
    name: 'Deluxe Cocktail Shaker',
    imageUrl: '/images/products/bar-accessories/cocktail-shakers/deluxe-cocktail-shaker-main.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'cocktail-shakers',
    shortDescription: 'Premium quality cocktail shaker for sophisticated mixology.',
    description: 'Crafted for discerning users, the Deluxe Cocktail Shaker offers superior performance and a refined aesthetic. Its robust build ensures longevity and flawless cocktail preparation.',
    features: ['Premium quality', 'Refined aesthetic', 'Robust build'],
    galleryImages: [],
    specifications: {
      material: '304/201 Stainless Steel',
      capacity: '600ml', // Example
      thickness: '0.4-0.7MM',
      customization: 'Logo customizations of any kind are avaialable',
    },
  },
  {
    id: 'multi-colour-cocktail-shaker',
    name: 'Multi Colour Cocktail Shaker',
    imageUrl: '/images/products/bar-accessories/cocktail-shakers/multi-colour-cocktail-shaker.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'cocktail-shakers',
    shortDescription: 'Multi colour cocktail shaker. Food safe grade base.',
    description: 'Add a fun and lively element to your bar with this multi-color cocktail shaker. Its eye-catching design makes it a great gift and a joy to use for any cocktail enthusiast.',
    features: ['Multi-color finish', 'Eye-catching design', 'Durable'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel, Coated',
      colors: 'Multic Color', // Example
    },
  },
  {
    id: '2-pc-boston-shaker-1',
    name: '2 Pc. Boston Shaker 1',
    imageUrl: '/images/products/bar-accessories/cocktail-shakers/2-pc-boston-shaker.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'cocktail-shakers',
    shortDescription: 'Two-piece Boston shaker for professional cocktail mixing.',
    description: 'The preferred choice of professional bartenders, this 2-piece Boston shaker allows for quick and efficient mixing. Its simple design ensures a strong seal and easy separation after shaking.',
    features: ['Professional grade', 'Strong seal', 'Quick mixing'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      tinSizes: '28oz & 18oz', // Example
      finish: 'Silver, Golden'
    },
  },


  // SubCategory: bar-tools-accessories
  {
    id: 'ss-straw',
    name: 'SS Straw',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/ss-straw.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Stainless Steel Straw For Drinking Juice, Smoothie, Beverage, Reusable Set.',
    description: 'An eco-friendly alternative to plastic, this durable stainless steel straw is perfect for cocktails, smoothies, and everyday use. Easy to clean and long-lasting.',
    features: ['Reusable', 'Eco-friendly', 'Durable'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      length: '21.5cm', // Example
    },
  },
  {
    id: 'ss-bar-cocktail-strainer-tool',
    name: 'SS Bar Cocktail Strainer',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/ss-bar-cocktail-strainer.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'High-quality cocktail strainer with a sturdy handle — perfect for smooth, easy drink mixing at a great price.',
    description: 'An essential tool for any bartender, this stainless steel cocktail strainer efficiently separates ice and solids from your mixed drinks, ensuring a smooth pour every time.',
    features: ['Efficient straining', 'Smooth pour', 'Durable'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      type: 'Hawthorne', // Example
      customization: 'Logo and Color customizations of any kind are available',
    },
  },
  {
    id: 'strainer-with-rod-tool',
    name: 'Strainer With Rod',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/strainer-with-rod.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Stainless steel bar strainer with rod handle — ideal for straining cocktails, mocktails, and mixed drinks with ease and precision.',
    description: 'This cocktail strainer features an integrated rod for enhanced grip and control, making it easier to strain drinks directly into glasses without spills.',
    features: ['Extended rod', 'Enhanced grip', 'No spills'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      feature: 'Integrated Rod',
    },
  },
  {
    id: '4-prong-strainer-tool',
    name: '4 Prong Strainer',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/4-prong-strainer.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Professional Durable 4-prong cocktail strainer — designed for a secure fit and smooth, efficient straining of mixed drinks and cocktails.',
    description: 'Designed to fit snugly over mixing glasses and shakers, this 4-prong strainer provides excellent stability and filtration for perfectly strained cocktails.',
    features: ['Secure fit', 'Excellent filtration', 'Stable'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      design: '4-Prong',
      customization: 'Logo and Color customizations of any kind are available',
    },
  },
  {
    id: 'ss-bar-strainer-tool-1',
    name: 'SS Bar Strainer 1',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/ss-bar-strainer.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Compact and durable, designed for effortless straining of cocktails and mixed drinks with precision and ease.',
    description: 'A robust and versatile stainless steel bar strainer, ideal for a wide range of bar operations, from straining fruit pulp to fine herbs in cocktails.',
    features: ['Robust', 'Versatile', 'Fine filtration'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      type: 'Fine Mesh', // Example
      customization: 'Logo and Color customizations of any kind are available',
    },
  },
  {
    id: 'ss-bar-strainer-tool-2',
    name: 'Sleek SS Bar Strainer 2',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/ss-bar-strainer.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'A durable, spring-loaded strainer designed for smooth cocktail pouring and perfect for any home or professional bar setup.',
    description: 'A robust and versatile stainless steel bar strainer, ideal for a wide range of bar operations, from straining fruit pulp to fine herbs in cocktails.',
    features: ['Robust', 'Versatile', 'Fine filtration'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      type: 'Fine Mesh', // Example
      customization: 'Logo and Color customizations of any kind are available',
    },
  },
  {
    id: 'ss-julip-strainer-tool',
    name: 'SS Julip Strainer',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/ss-julip-strainer.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Ideal for stirred cocktails, this sleek and sturdy strainer fits mixing glasses perfectly for smooth, mess-free pours.',
    description: 'Perfect for stirring and straining mint juleps and other classic stirred cocktails, this stainless steel Julip strainer offers a comfortable fit over mixing glasses.',
    features: ['Traditional design', 'Comfortable fit', 'Classic cocktails'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      style: 'Julep',
      customization: 'Logo and Color customizations of any kind are available',
    },
  },
  {
    id: 'ss-ice-tongs-1',
    name: 'SS Ice Tongs 1',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/ss-ice-tongs.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Shaped to easily pick up ice Heavy gauge stainless steel Mirror finish, Dishwasher safe',
    description: 'These robust stainless steel ice tongs provide a firm grip on ice cubes, ensuring hygienic and easy serving for all your beverages.',
    features: ['Durable', 'Firm grip', 'Hygienic'],
    galleryImages: [],
    specifications: {
      material: 'Heavy Gauge Stainless Steel',
      length: '18cm', // Example
      finish: 'Stainless Steel Mirror finish'
    },
  },
  {
    id: 'ss-ice-tongs-2',
    name: 'SS Ice Tongs 2',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/ss-ice-tongs.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Shaped to easily pick up ice Heavy gauge stainless steel Mirror finish, Dishwasher safe.',
    description: 'These robust stainless steel ice tongs provide a firm grip on ice cubes, ensuring hygienic and easy serving for all your beverages.',
    features: ['Durable', 'Firm grip', 'Hygienic'],
    galleryImages: [],
    specifications: {
      material: 'Heavy Gauge Stainless Steel',
      length: '18cm', // Example
      finish: 'Stainless Steel Mirror finish'
    },
  },
  {
    id: 'ss-ice-tongs-3',
    name: 'SS Ice Tongs 3',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/ss-ice-tongs.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Shaped to easily pick up ice Heavy gauge stainless steel Mirror finish, Dishwasher safe.',
    description: 'These robust stainless steel ice tongs provide a firm grip on ice cubes, ensuring hygienic and easy serving for all your beverages.',
    features: ['Durable', 'Firm grip', 'Hygienic'],
    galleryImages: [],
    specifications: {
      material: 'Heavy Gauge Stainless Steel',
      length: '18cm', // Example
      finish: 'Stainless Steel Mirror finish'
    },
  },
  {
    id: 'pvd-colored-ice-tongs',
    name: 'PVD Colored Ice Tongs',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/pvd-colored-ice-tongs.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Stylish ice tongs with a vibrant PVD coating shaped to easily pick up ice, Heavy gauge stainless steel Mirror finish, Dishwasher safe..',
    description: 'Add a splash of color to your barware with these PVD coated ice tongs. Combining practical functionality with a modern aesthetic, they are perfect for entertaining.',
    features: ['PVD coating', 'Stylish', 'Practical'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel, PVD Coated',
      colors: 'Gold, Rose Gold, Black', // Example
    },
  },
  {
    id: 'ss-coin-spoon-for-bar',
    name: 'SS Coin Spoon for Bar',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/ss-coin-spoon-for-bar.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'A twisted handle for smooth stirring and a flat coin end for muddling or layering cocktails with style and precision.',
    description: 'This distinctive stainless steel coin spoon is designed for measuring small quantities of ingredients or garnishes, adding a unique touch to your bar tools collection.',
    features: ['Unique design', 'Precise', 'Decorative'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      style: ' Trident/Hoffman/Spoon/Teardrop/Custom ',
      customization: 'customized designs, materials, size & colors available',
      length: ' 27/30/40/45cm,longer size is provided.',
    },
  },
  {
    id: 'bar-spoon-twisted-spoon-fork',
    name: 'Bar Spoon Twisted Spoon + Fork',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/bar-spoon-twisted-spoon-fork.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Dual-ended design featuring a spiral handle for smooth stirring and a fork tip for garnishing or picking ingredients with ease.',
    description: 'An indispensable tool for mixologists, this bar spoon features a long twisted handle for layering drinks, a spoon end for stirring, and a fork end for garnishes.',
    features: ['Multi-functional', 'Twisted handle', 'Fork end'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      style: ' Trident/Hoffman/Spoon/Teardrop/Custom ',
      customization: 'customized designs, materials, size & colors available',
      length: ' 27/30/40/45cm,longer size is provided.',
    },
  },
  
  {
    id: 'drop-spoon',
    name: 'Drop Spoon',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/drop-spoon.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Features a twisted handle for effortless stirring and a teardrop end for precise mixing and elegant cocktail presentation.',
    description: 'The drop spoon is engineered for creating beautifully layered cocktails, allowing for slow, controlled pouring of liquids to achieve distinct strata.',
    features: ['Precision pouring', 'Layering drinks', 'Delicate control'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      style: ' Trident/Hoffman/Spoon/Teardrop/Custom ',
      customization: 'customized designs, materials, size & colors available',
      length: ' 27/30/40/45cm,longer size is provided.',
    },
  },
  {
    id: 'sheet-twisted-spoon',
    name: 'Sheet Twisted Spoon',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/sheet-twisted-spoon.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Sleek and balanced with a twisted handle and drop-shaped end, perfect for stirring and layering cocktails with precision.',
    description: 'A stylish and functional bar spoon featuring a distinctive sheet-twisted handle, providing both an elegant look and comfortable grip for stirring cocktails.',
    features: ['Unique design', 'Elegant look', 'Comfortable grip'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      style: ' Trident/Hoffman/Spoon/Teardrop/Custom ',
      customization: 'customized designs, materials, size & colors available',
      length: ' 27/30/40/45cm,longer size is provided.',
    },
  },
  {
    id: 'heavy-nob-twisted-spoon',
    name: 'Heavy Nob Twisted Spoon',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/heavy-nob-twisted-spoon.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Durable bar spoon with a weighted knob for better control and a spiral handle for effortless, balanced stirring.',
    description: 'This heavy-duty bar spoon combines stirring capabilities with a weighty knob at the end, making it versatile for light muddling of herbs and fruits directly in the glass.',
    features: ['Heavy-duty', 'Versatile', 'Light muddling'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      style: ' Trident/Hoffman/Spoon/Teardrop/Custom ',
      customization: 'customized designs, materials, size & colors available',
      length: ' 27/30/40/45cm,longer size is provided.',
    },
  },
  {
    id: 'back-less-twisted-spoon-lip-twisted-spoon',
    name: 'Back Less Twisted Spoon Lip Twisted Spoon',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/back-less-twisted-spoon.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Sleek and lightweight with a spiral handle, ideal for quick and precise stirring in any bar setup.',
    description: 'An advanced bar spoon designed for precision, featuring a twisted handle and specialized ends for delicate stirring and layering in complex cocktails.',
    features: ['Advanced design', 'Precision stirring', 'Intricate work'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      style: ' Trident/Hoffman/Spoon/Teardrop/Custom ',
      customization: 'customized designs, materials, size & colors available',
      length: ' 27/30/40/45cm,longer size is provided.',
    },
  },
  {
    id: 'lip-twisted-spoon-lip-twisted-spoon',
    name: 'Lip Twisted Spoon Lip Twisted Spoon',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/lip-twisted-spoon.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Features a twisted handle and curved lip end for smooth stirring and easy pouring during cocktail preparation.',
    description: 'An advanced bar spoon designed for precision, featuring a twisted handle and specialized ends for delicate stirring and layering in complex cocktails.',
    features: ['Advanced design', 'Precision stirring', 'Intricate work'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      style: ' Trident/Hoffman/Spoon/Teardrop/Custom ',
      customization: 'customized designs, materials, size & colors available',
      length: ' 27/30/40/45cm,longer size is provided.',
    },
  },
  {
    id: 'bar-blade-beer-bottle-opener',
    name: 'Bar Blade/Beer Bottle Opener',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/bar-blade-beer-bottle-opener.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Professional bar blade for quick and easy bottle opening.',
    description: 'A staple for bartenders, this flat bar blade provides leverage for fast and efficient bottle opening, designed for speed and durability in high-volume environments.',
    features: ['Professional grade', 'Fast opening', 'Durable'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      type: 'Speed Opener',
      customization: 'LOGO can be silk sceen printed or lasered.'
    },
  },
  {
    id: 'ss-cork-opener',
    name: 'SS Cork Opener',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/ss-cork-opener.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Wine Corkscrew with Bottle Opener. A must-have for a true Wine enthusiast! Comes with a handy knife to cut the wrapper or seal. Sturdy and Strong body.',
    description: 'Effortlessly open wine bottles with this robust stainless steel cork opener. Its ergonomic design ensures a smooth and reliable cork extraction every time.',
    features: ['Durable', 'Ergonomic design', 'Reliable cork extraction'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      type: 'Winged Corkscrew', // Example
    },
  },
  {
    id: 'ss-bar-cocktail-stirrer',
    name: 'SS Bar Cocktail Stirrer',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/ss-bar-cocktail-stirrer.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Stainless steel bar cocktail stirrer. Hand type agitator, used for mixing juice, coffee, etc.',
    description: 'This long stainless steel stirrer is perfect for gently combining ingredients in tall glasses, ensuring perfectly mixed cocktails without excessive aeration.',
    features: ['Long handle', 'Gentle mixing', 'No aeration'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      length: '25cm', // Example
    },
  },
  {
    id: 'cream-spoon',
    name: 'Cream Spoon',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/cream-spoon.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Stainless steel Cream Spoons for frozen cocktails ice cream floats and Reusable.',
    description: 'Designed for precision, the cream spoon allows for the delicate addition and layering of cream, foams, or other toppings on cocktails and desserts.',
    features: ['Precision design', 'Delicate layering', 'Versatile'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      usage: 'Layering',
    },
  },
  {
    id: 'ss-muddler',
    name: 'SS Muddler',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/ss-muddler.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Stainless Steel Cocktail Muddler. Hand type agitator, used for mixing juice, coffee, etc',
    description: 'Crush fruits, herbs, and spices with ease using this robust stainless steel muddler. Essential for releasing maximum flavor into your mojitos, old fashioneds, and other muddled cocktails.',
    features: ['Durable', 'Flavor extraction', 'Essential bar tool'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      length: '21cm', // Example
    },
  },
  {
    id: 'pvd-coated-muddlers',
    name: 'PVD Coated Muddlers',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/pvd-coated-muddlers.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'PVD Coated Cocktail Muddler. Hand type agitator, used for mixing juice, coffee, etc.',
    description: 'Infuse color into your bar collection with PVD coated muddlers. These tools offer the same excellent functionality with an added touch of modern design and scratch resistance.',
    features: ['PVD coating', 'Stylish', 'Scratch resistant'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel, PVD Coated',
      colors: 'Gold, Rose Gold', // Example
    },
  },
  {
    id: 'ss-wine-pourer',
    name: 'SS Wine Pourer',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/ss-wine-pourer.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: ' Suitable for most of winebottle. Perfect design and convenient to use. Good gift for promotion. Costomized logo can be etched.',
    description: 'Ensure a smooth, drip-free pour every time with this elegant stainless steel wine pourer. It enhances aeration and prevents spills, perfect for wine enthusiasts.',
    features: ['Drip-free', 'Aerates wine', 'Prevents spills'],
    galleryImages: [],
    specifications: {
      material: '304 Stainless Steel, Rubber',
      feature: 'Pourer',
      customization: 'Laser Engraving available'
    },
  },
  {
    id: 'ss-whiskey-stone',
    name: 'SS Whiskey Stone',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/ss-whiskey-stone.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Reusable Stainless Steel Whiskey Stone Ice Cube, Chiller Stone, Whiskey Stone.',
    description: 'Chill your whiskey and other spirits without watering them down. These stainless steel whiskey stones are reusable, non-porous, and keep your drink perfectly cold.',
    features: ['Reusable', 'No dilution', 'Keeps drinks cold'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      quantity: 'Set of 6',
      customization: 'Laser Engraving available'
    },
  },
  {
    id: 'electro-plating-whiskey-stone',
    name: 'Electro Plating Whiskey Stone',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/electro-plating-whiskey-stone.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Electro Plating Whiskey Stone Ice Cube, Chiller Stone, Whiskey Stone.',
    description: 'Add a touch of flair to your spirits with electro-plated whiskey stones. They provide the same chilling benefits as standard stones but with a distinctive aesthetic.',
    features: ['Electro-plated finish', 'Unique aesthetic', 'Chills without dilution'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel, Electroplated',
      colors: 'Gold, Rainbow', // Example
      customization: 'Laser Engraving available'
    },
  },
  {
    id: 'ss-ice-scooper',
    name: 'SS Ice Scooper',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/ss-ice-scooper.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Durable stainless steel scooper for ice and dry goods.',
    description: 'A sturdy stainless steel ice scooper, essential for quickly and hygienically transferring ice from buckets to glasses, also useful for dry ingredients.',
    features: ['Durable', 'Hygienic', 'Versatile'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      capacity: '12oz', // Example
    },
  },
  {
    id: 'ss-lemon-squeezer',
    name: 'SS Lemon Squeezer',
    imageUrl: '/images/products/bar-accessories/bar-tools-accessories/ss-lemon-squeezer.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-tools-accessories',
    shortDescription: 'Efficient stainless steel lemon/lime squeezer.',
    description: 'Extract maximum juice from lemons and limes with minimal effort using this robust stainless steel squeezer, a must-have for fresh cocktail ingredients.',
    features: ['Efficient', 'Durable', 'Easy to use'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      type: 'Hand Press',
    },
  },

  // SubCategory: bartender-sets
  {
    id: 'stainless-steel-bartender-set-1',
    name: 'Stainless Steel Bartender Set 1',
    imageUrl: '/images/products/bar-accessories/bartender-sets/stainless-steel-bartender-set.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bartender-sets',
    shortDescription: 'Comprehensive stainless steel bartender kit for mixology enthusiasts.',
    description: 'Everything you need to start crafting cocktails, this stainless steel bartender set includes essential tools like a shaker, jigger, strainer, and more, perfect for aspiring or seasoned mixologists.',
    features: ['Comprehensive set', 'Essential tools', 'High-quality stainless steel'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      pieces: '5-piece set', // Example
    },
  },
  {
    id: 'stainless-steel-bartender-set-2',
    name: 'Stainless Steel Bartender Set 2',
    imageUrl: '/images/products/bar-accessories/bartender-sets/stainless-steel-bartender-set.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bartender-sets',
    shortDescription: 'Comprehensive stainless steel bartender kit for mixology enthusiasts.',
    description: 'Everything you need to start crafting cocktails, this stainless steel bartender set includes essential tools like a shaker, jigger, strainer, and more, perfect for aspiring or seasoned mixologists.',
    features: ['Comprehensive set', 'Essential tools', 'High-quality stainless steel'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      pieces: '5-piece set', // Example
    },
  },
  {
    id: 'stainless-steel-bartender-set-3',
    name: 'Stainless Steel Bartender Set 3',
    imageUrl: '/images/products/bar-accessories/bartender-sets/stainless-steel-bartender-set.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bartender-sets',
    shortDescription: 'Comprehensive stainless steel bartender kit for mixology enthusiasts.',
    description: 'Everything you need to start crafting cocktails, this stainless steel bartender set includes essential tools like a shaker, jigger, strainer, and more, perfect for aspiring or seasoned mixologists.',
    features: ['Comprehensive set', 'Essential tools', 'High-quality stainless steel'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      pieces: '5-piece set', // Example
    },
  },
  {
    id: 'stainless-steel-bartender-set-4',
    name: 'Stainless Steel Bartender Set 4',
    imageUrl: '/images/products/bar-accessories/bartender-sets/stainless-steel-bartender-set.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bartender-sets',
    shortDescription: 'Comprehensive stainless steel bartender kit for mixology enthusiasts.',
    description: 'Everything you need to start crafting cocktails, this stainless steel bartender set includes essential tools like a shaker, jigger, strainer, and more, perfect for aspiring or seasoned mixologists.',
    features: ['Comprehensive set', 'Essential tools', 'High-quality stainless steel'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      pieces: '5-piece set', // Example
    },
  },
  {
    id: 'ss-bar-tool-set-with-wooden-stand',
    name: 'SS Bar Tool Set with Wooden Stand',
    imageUrl: '/images/products/bar-accessories/bartender-sets/ss-bar-tool-set-with-wooden-stand.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bartender-sets',
    shortDescription: 'Elegant stainless steel bar tool set with a stylish wooden display stand.',
    description: 'Showcase your bar tools with pride. This premium stainless steel set comes with a beautifully crafted wooden stand, keeping your essential tools organized and accessible.',
    features: ['Elegant wooden stand', 'Organized storage', 'Premium tools'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel, Wood',
      pieces: '7-piece set', // Example
    },
  },

  // SubCategory: drinkware (for bar accessories related drinkware)
  {
    id: 'ss-mule-mug',
    name: 'SS Mule Mug',
    imageUrl: '/images/products/bar-accessories/drinkware/ss-mule-mug.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'drinkware',
    shortDescription: 'Classic stainless steel mule mug for Moscow Mules.',
    description: 'Enjoy your Moscow Mule or any cold beverage in this durable stainless steel mug. It keeps drinks colder for longer than traditional glass.',
    features: ['Durable', 'Keeps drinks cold', 'Classic design'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      capacity: '16oz', // Example
    },
  },
  {
    id: 'ss-hip-flask',
    name: 'SS Hip Flask',
    imageUrl: '/images/products/bar-accessories/drinkware/ss-hip-flask-main.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'drinkware',
    shortDescription: 'Discreet stainless steel hip flask for spirits on the go.',
    description: 'Perfect for outdoor adventures or discreet enjoyment, this sleek stainless steel hip flask securely carries your favorite spirits. Its compact design fits easily into a pocket or bag.',
    features: ['Compact', 'Leak-proof', 'Portable'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      capacity: '8oz', // Example
    },
  },

  // SubCategory: bar-table-service
  {
    id: 'ss-ash-tray',
    name: 'SS ASH TRAY',
    imageUrl: '/images/products/bar-accessories/bar-table-service/ss-ash-tray.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-table-service',
    shortDescription: 'Durable stainless steel ashtray for indoor or outdoor use.',
    description: 'A robust and easy-to-clean stainless steel ashtray, suitable for both indoor bar areas and outdoor patios. Its simple design blends seamlessly with any decor.',
    features: ['Durable', 'Easy to clean', 'Versatile'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      dimensions: 'Dia: 10cm', // Example
    },
  },
  {
    id: 'stainless-steel-bar-tray',
    name: 'Stainless Steel Bar Tray',
    imageUrl: '/images/products/bar-accessories/bar-table-service/stainless-steel-bar-tray-main.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-table-service',
    shortDescription: 'Professional bar tray for serving drinks and appetizers.',
    description: 'Serve with confidence using this sturdy stainless steel bar tray. Its sleek surface and raised edges prevent spills, making it ideal for busy bars and events.',
    features: ['Sturdy', 'Sleek design', 'Prevents spills'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      shape: 'Round', // Example
    },
  },
  {
    id: 'ss-round-drip-tray',
    name: 'SS Round Drip Tray',
    imageUrl: '/images/products/bar-accessories/bar-table-service/ss-round-drip-tray.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-table-service',
    shortDescription: 'Compact round drip tray for preventing spills.',
    description: 'Protect your bar surfaces from spills and condensation with this round stainless steel drip tray. Its compact size is perfect for under drink dispensers or coffee machines.',
    features: ['Compact', 'Prevents spills', 'Easy to clean'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      shape: 'Round',
    },
  },
  {
    id: 'ss-bubble-tissue-holder',
    name: 'SS Bubble Tissue Holder',
    imageUrl: '/images/products/bar-accessories/bar-table-service/ss-bubble-tissue-holder.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-table-service',
    shortDescription: 'Modern stainless steel tissue holder with a bubble design.',
    description: 'A stylish and functional tissue holder for your bar or dining area. Its unique bubble design in stainless steel adds a contemporary touch while keeping tissues easily accessible.',
    features: ['Stylish', 'Unique design', 'Functional'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      design: 'Bubble',
    },
  },
  {
    id: 'd-shape-tissue-holder',
    name: 'D Shape Tissue Holder',
    imageUrl: '/images/products/bar-accessories/bar-table-service/d-shape-tissue-holder-main.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-table-service',
    shortDescription: 'Minimalist D-shaped tissue holder for modern spaces.',
    description: 'This sleek D-shaped tissue holder offers a minimalist design that complements modern interiors. Crafted from durable stainless steel, it provides easy access to tissues.',
    features: ['Minimalist design', 'Durable', 'Easy access'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      shape: 'D-Shape',
    },
  },
  {
    id: 'ss-triangle-bubble-tissue-holder',
    name: 'SS Triangle Bubble Tissue Holder',
    imageUrl: '/images/products/bar-accessories/bar-table-service/ss-triangle-bubble-tissue-holder.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-table-service',
    shortDescription: 'Unique triangular tissue holder with bubble-textured stainless steel.',
    description: 'A distinctive tissue holder featuring a triangular shape and a textured bubble finish in stainless steel. It combines artistic design with everyday utility for your bar or table.',
    features: ['Unique design', 'Triangular shape', 'Bubble texture'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      design: 'Triangle Bubble',
    },
  },
  {
    id: 'ss-triangle-round-bubble-tissue-holder',
    name: 'SS Triangle Round Bubble Tissue Holder',
    imageUrl: '/images/products/bar-accessories/bar-table-service/ss-triangle-round-bubble-tissue-holder.jpg', // Placeholder
    category: 'bar-accessories',
    subCategory: 'bar-table-service',
    shortDescription: 'Hybrid design tissue holder combining triangle and round shapes with bubble texture.',
    description: 'An innovative tissue holder design that merges triangular and round elements with a unique bubble-textured stainless steel finish, providing a striking yet functional piece for your service area.',
    features: ['Hybrid design', 'Innovative', 'Functional'],
    galleryImages: [],
    specifications: {
      material: 'Stainless Steel',
      design: 'Triangle Round Bubble',
    },
  }
];
