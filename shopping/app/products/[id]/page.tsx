import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById, products } from '@/lib/products';
import { ArrowLeft, Star } from 'lucide-react';
import { ProductDetailClient } from './product-detail-client';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Products
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-medium shadow-lg">
                {product.category}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>

                <div className="flex items-center mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">(128 reviews)</span>
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <div className="prose prose-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Description
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Product Features
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Premium quality materials
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Fast and free shipping
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      30-day money-back guarantee
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      1-year warranty included
                    </li>
                  </ul>
                </div>
              </div>

              <ProductDetailClient product={product} />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl mb-2">🚚</div>
            <h4 className="font-semibold text-gray-900 mb-2">Free Shipping</h4>
            <p className="text-gray-600 text-sm">On orders over $50</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl mb-2">🔒</div>
            <h4 className="font-semibold text-gray-900 mb-2">Secure Payment</h4>
            <p className="text-gray-600 text-sm">100% secure transactions</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl mb-2">↩️</div>
            <h4 className="font-semibold text-gray-900 mb-2">Easy Returns</h4>
            <p className="text-gray-600 text-sm">30-day return policy</p>
          </div>
        </div>
      </main>
    </div>
  );
}
