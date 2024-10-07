import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface Props {
  avatar_url: string;
  login: string;
  id: number;
  favorites: Set<number>;
  toggleFavorite: (id: number) => void;
}

export function UserCard(
  {
    avatar_url,
    login,
    id,
    favorites,
    toggleFavorite,
  }: Props
) {
  return (
    <div
      key={id}
      className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105"
    >
      <Link href={`/user/${login}`} className="block p-4">
        <div className="flex items-center">
          <Image
            src={avatar_url}
            alt={login}
            width={64}
            height={64}
            className="rounded-full"
          />
          <h2 className="ml-4 text-xl font-semibold text-gray-800 font-poppins truncate">
            {login}
          </h2>
        </div>
      </Link>
      <button
        onClick={() => toggleFavorite(id)}
        className={`w-full py-2 text-sm font-medium transition duration-200 ${favorites.has(id)
          ? 'bg-gradient-to-r from-gray-600 to-gray-800 text-gray-100 hover:from-gray-500 hover:to-gray-700'
          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
      >
        {favorites.has(id) ? '★ Favorited' : '☆ Add to Favorites'}
      </button>
    </div>
  )
}


