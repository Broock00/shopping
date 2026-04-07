'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Product } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { useFavorites } from '@/lib/favorites-context';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const favorite = isFavorite(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product.id);
    }
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-xs font-medium text-gray-700">
              {product.category}
            </span>
          </div>

          <button
            onClick={handleToggleFavorite}
            className="absolute top-3 left-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          >
            <Heart
              className={`h-5 w-5 transition-colors ${
                favorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
              }`}
            />
          </button>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>

            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-700"
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
