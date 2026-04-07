'use client';

import { useState } from 'react';
import { products, getCategories } from '@/lib/products';
import { ProductGrid } from '@/components/ProductGrid';
import { Header } from '@/components/Header';

export default function Home() {
  const categories = getCategories();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header onSearchChange={setSearchQuery} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our curated collection of premium products. Find exactly what you need with our easy category filters.
          </p>
        </div>

        <ProductGrid initialProducts={products} categories={categories} searchQuery={searchQuery} />
      </main>

      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">
            © 2026 ShopHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
