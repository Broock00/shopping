import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/lib/cart-context';
import { FavoritesProvider } from '@/lib/favorites-context';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ShopHub - Premium Products',
  description: 'Discover our curated collection of premium products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <FavoritesProvider>
            {children}
            <Toaster />
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  );
}
