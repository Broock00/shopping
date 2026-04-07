export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 79.99,
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Premium wireless headphones with noise cancellation and 30-hour battery life. Experience crystal-clear audio quality with deep bass and comfortable ear cushions.',
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 199.99,
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Feature-rich smartwatch with fitness tracking, heart rate monitoring, and smartphone notifications. Water-resistant design with customizable watch faces.',
  },
  {
    id: '3',
    name: 'Leather Backpack',
    price: 89.99,
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Stylish genuine leather backpack with multiple compartments. Perfect for work or travel with padded laptop sleeve and water-resistant coating.',
  },
  {
    id: '4',
    name: 'Running Shoes',
    price: 129.99,
    category: 'Footwear',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for maximum comfort and performance during your runs.',
  },
  {
    id: '5',
    name: 'Coffee Maker',
    price: 149.99,
    category: 'Home',
    image: 'https://images.pexels.com/photos/6794952/pexels-photo-6794952.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Programmable coffee maker with thermal carafe. Brew up to 12 cups with customizable strength settings and auto-brew timer.',
  },
  {
    id: '6',
    name: 'Yoga Mat',
    price: 34.99,
    category: 'Fitness',
    image: 'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Premium non-slip yoga mat with extra cushioning. Eco-friendly materials with carrying strap included. Perfect for yoga, pilates, and stretching.',
  },
  {
    id: '7',
    name: 'Desk Lamp',
    price: 45.99,
    category: 'Home',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Modern LED desk lamp with adjustable brightness and color temperature. Touch control with USB charging port for convenience.',
  },
  {
    id: '8',
    name: 'Bluetooth Speaker',
    price: 59.99,
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/1279460/pexels-photo-1279460.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Portable Bluetooth speaker with 360-degree sound. Waterproof design with 12-hour battery life, perfect for outdoor adventures.',
  },
  {
    id: '9',
    name: 'Sunglasses',
    price: 119.99,
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Classic aviator sunglasses with UV protection. Lightweight metal frame with polarized lenses for superior glare reduction.',
  },
  {
    id: '10',
    name: 'Water Bottle',
    price: 24.99,
    category: 'Fitness',
    image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof design with wide mouth opening.',
  },
  {
    id: '11',
    name: 'Canvas Sneakers',
    price: 54.99,
    category: 'Footwear',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Classic canvas sneakers with comfortable cushioned insole. Versatile style that pairs well with any casual outfit.',
  },
  {
    id: '12',
    name: 'Table Lamp',
    price: 69.99,
    category: 'Home',
    image: 'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Elegant ceramic table lamp with linen shade. Adds warmth and style to any room with soft, ambient lighting.',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getCategories(): string[] {
  const categories = products.map((product) => product.category);
  return ['All', ...Array.from(new Set(categories))];
}

export function filterProductsByCategory(category: string): Product[] {
  if (category === 'All') {
    return products;
  }
  return products.filter((product) => product.category === category);
}
