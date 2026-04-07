'use client';

import Link from 'next/link';
import { ArrowLeft, Heart } from 'lucide-react';
import { useFavorites } from '@/lib/favorites-context';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { Header } from '@/components/Header';

export default function FavoritesPage() {
  const { favorites, clearFavorites } = useFavorites();
  const favoriteProducts = products.filter((product) => favorites.includes(product.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Shopping
        </Link>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">My Wishlist</h1>
          {favorites.length > 0 && (
            <button
              onClick={() => clearFavorites()}
              className="text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              Clear Wishlist
            </button>
          )}
        </div>

        {favoriteProducts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="text-6xl mb-4">💔</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Add your favorite products to save them for later!</p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mb-6">
              You have {favoriteProducts.length} item{favoriteProducts.length !== 1 ? 's' : ''} in your wishlist
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favoriteProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
