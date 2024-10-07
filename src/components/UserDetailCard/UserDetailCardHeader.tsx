import { UserDetails } from '@/utils/api';
import React from 'react'
import Image from 'next/image';
import { Iconify } from '@/components/Iconify';

interface Props {
  user: UserDetails;
  isFavorite: boolean;
  toggleFavorite: (id: number) => void;
}

export function UserDetailCardHeader(
  { user, isFavorite, toggleFavorite }: Props
) {
  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-6">
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Image
          src={user.avatar_url}
          alt={user.login}
          width={80}
          height={80}
          className="rounded-full border-2 border-white"
        />
        <div className="text-center sm:text-left flex-grow">
          <h1 className="text-2xl font-bold text-white">{user.name || user.login}</h1>
          <p className="text-gray-300">{user.login}</p>
          <button
            onClick={() => toggleFavorite(user.id)}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            className={`mt-2 flex items-center justify-center px-2 py-1 rounded-lg transition duration-200 
              ${isFavorite ? 'bg-gray-500 text-white' : 'bg-gray-300 text-gray-800'}`}
          >
            <Iconify icon={isFavorite ? 'mdi:star' : 'mdi:star-outline'} className="mr-1" />
            <span className="text-sm">{isFavorite ? 'Favorited' : 'Add to Favorites'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

