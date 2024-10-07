import React from 'react'
import { Iconify } from '@/components/Iconify'

interface Props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}

export function SearchBar(
  { searchTerm, setSearchTerm, handleSearch }: Props
) {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 font-poppins">
        GitHub User Search
      </h1>
      <form onSubmit={handleSearch} className="flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search users..."
            className="w-full px-4 py-2 pr-12 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full px-4 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-r-lg hover:from-gray-500 hover:to-gray-700 transition duration-200 flex items-center justify-center"
          >
            <Iconify icon="eva:search-fill" />
          </button>

        </div>
      </form>
    </>
  )
}
