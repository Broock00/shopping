'use client';

import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { useFavorites } from '@/lib/favorites-context';

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addToCart } = useCart();
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();

  const favorite = isFavorite(product.id);

  const handleToggleFavorite = () => {
    if (favorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product.id);
    }
  };

  return (
    <div className="space-y-4">
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
      >
        <ShoppingCart className="mr-2 h-6 w-6" />
        Add to Cart
      </button>

      <button
        onClick={handleToggleFavorite}
        className={`w-full border-2 py-4 px-8 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center ${
          favorite
            ? 'border-red-500 text-red-500 bg-red-50 hover:bg-red-100'
            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
        }`}
      >
        <Heart className="mr-2 h-6 w-6" fill={favorite ? 'currentColor' : 'none'} />
        {favorite ? 'Added to Wishlist' : 'Add to Wishlist'}
      </button>
    </div>
  );
}
