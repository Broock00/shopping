'use client';

import { useState, useMemo } from 'react';
import { Product } from '@/lib/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  initialProducts: Product[];
  categories: string[];
  searchQuery?: string;
}

type SortOption = 'newest' | 'price-low' | 'price-high' | 'name';

export function ProductGrid({ initialProducts, categories, searchQuery = '' }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  const filteredProducts = useMemo(() => {
    let products = initialProducts;

    if (selectedCategory !== 'All') {
      products = products.filter((product) => product.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    const sorted = [...products].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'newest':
        default:
          return parseInt(b.id) - parseInt(a.id);
      }
    });

    return sorted;
  }, [initialProducts, selectedCategory, searchQuery, sortBy]);

  return (
    <div>
      <div className="mb-8 space-y-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors bg-white text-gray-700"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>
      </div>

      {filteredProducts.length > 0 && (
        <p className="text-center text-gray-600 mb-6">
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            {searchQuery ? 'No products match your search.' : 'No products found in this category.'}
          </p>
        </div>
      )}
    </div>
  );
}
