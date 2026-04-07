'use client';

import Link from 'next/link';
import { ArrowLeft, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { Header } from '@/components/Header';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

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

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some products to get started!</p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white rounded-lg shadow-md p-6 flex gap-6 items-start"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.product.category}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      ${item.product.price.toFixed(2)} each
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 items-end">
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-200 rounded transition-colors"
                      >
                        <Minus className="h-4 w-4 text-gray-600" />
                      </button>
                      <span className="w-8 text-center font-medium text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-200 rounded transition-colors"
                      >
                        <Plus className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>${(totalPrice * 0.08).toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-3xl font-bold text-blue-600">
                    ${(totalPrice * 1.08).toFixed(2)}
                  </span>
                </div>

                <button 
                  onClick={() => {
                    import('@/hooks/use-toast').then(({ toast }) => {
                      toast({
                        title: "Checkout Started",
                        description: "Preparing your order...",
                      });
                    });
                  }}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4"
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={() => clearCart()}
                  className="w-full border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors mb-4"
                >
                  Clear Cart
                </button>

                <Link
                  href="/"
                  className="block text-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
