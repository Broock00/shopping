'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';

interface FavoritesContextType {
  favorites: string[];
  addToFavorites: (productId: string) => void;
  removeFromFavorites: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch {
        setFavorites([]);
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites, isLoading]);

  const addToFavorites = (productId: string) => {
    setFavorites((prev) =>
      prev.includes(productId) ? prev : [...prev, productId]
    );
    toast({
      title: "Added to favorites",
      description: "Item saved to your favorites.",
    });
  };

  const removeFromFavorites = (productId: string) => {
    setFavorites((prev) => prev.filter((id) => id !== productId));
    toast({
      title: "Removed from favorites",
      description: "Item removed from your favorites.",
      variant: "destructive",
    });
  };

  const isFavorite = (productId: string) => {
    return favorites.includes(productId);
  };

  const clearFavorites = () => {
    setFavorites([]);
    toast({
      title: "Favorites cleared",
      description: "All items have been removed from your favorites.",
    });
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
