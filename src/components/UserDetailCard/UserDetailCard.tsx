import React, { useState, useEffect } from 'react';
import { UserDetails } from '@/utils/api';
import { UserDetailCardHeader } from './UserDetailCardHeader';
import { UserDetailCardInfo } from './UserDetailCardInfo';

interface Props {
  user: UserDetails | null;
}

export function UserDetailCard({ user }: Props) {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(new Set(JSON.parse(storedFavorites)));
    }
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      localStorage.setItem('favorites', JSON.stringify(Array.from(newFavorites)));
      return newFavorites;
    });
  };

  if (!user) return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );

  const isFavorite = favorites.has(user.id);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden min-h-[360px]">
      <UserDetailCardHeader user={user} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />

      <div className="p-6">
        <UserDetailCardInfo user={user} />
        {user.bio && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Bio</h2>
            <p className="text-gray-600">{user.bio}</p>
          </div>
        )}
      </div>
    </div>
  );
}
