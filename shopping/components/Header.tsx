'use client';

import Link from 'next/link';
import { ShoppingBag, Heart, Search } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { useFavorites } from '@/lib/favorites-context';

interface HeaderProps {
  onSearchChange?: (query: string) => void;
}

export function Header({ onSearchChange }: HeaderProps) {
  const { totalItems } = useCart();
  const { favorites } = useFavorites();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="bg-blue-600 p-2 rounded-lg">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">ShopHub</h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/favorites"
              className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Heart className="h-6 w-6" />
              {favorites.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>

            <Link
              href="/cart"
              className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ShoppingBag className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {onSearchChange && (
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full md:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
            />
          </div>
        )}
      </div>
    </header>
  );
}
