import Link from 'next/link';
import { ArrowLeft, PackageX } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-8">
          <PackageX className="h-12 w-12 text-red-600" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Product Not Found
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the product you&apos;re looking for. It may have been removed or doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Products
        </Link>
      </div>
    </div>
  );
}
