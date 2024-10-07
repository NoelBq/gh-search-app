import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { searchUsers, User } from '@/utils/api';
import { MainLayout } from '@/components/MainLayout';
import { UserGrid } from '@/components/UserGrid';
import { SearchBar } from '@/components/SearchBar';

export async function getServerSideProps() {
  const data = await searchUsers('');
  return { props: { data } };
}

export default function Home({ data }: { data: User[] }) {
  const [users, setUsers] = useState<User[]>(data);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`/api/search?term=${searchTerm}`);
    if (response.ok) {
      const results = await response.json();
      setUsers(results);
    } else {
      console.error('Failed to fetch users');
    }
  };

  return (
    <MainLayout>
      <Head>
        <title>GitHub User Search</title>
        <meta name="description" content="Search GitHub users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <Image
              src="/github-octocat-logo.png"
              alt="GitHub Logo"
              width={80}
              height={80}
              className="text-gray-800"
            />
          </div>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
          />
        </div>
        <UserGrid users={users} />
      </main>
    </MainLayout>
  );
}