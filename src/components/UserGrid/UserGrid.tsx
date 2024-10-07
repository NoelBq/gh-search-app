import React, { useEffect, useState } from 'react'
import { UserCard } from '@/components/UserCard'
import { User } from '@/utils/api';

interface Props {
  users: User[];

}

export function UserGrid({ users }: Props) {
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


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {users.map(user => (
        <UserCard
          key={user.id}
          id={user.id}
          login={user.login}
          avatar_url={user.avatar_url}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  )
}

export default UserGrid