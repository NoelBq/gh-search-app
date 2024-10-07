import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getUserDetails, UserDetails } from '@/utils/api';
import { UserDetailCard } from '@/components/UserDetailCard';
import { BackButton } from '@/components/BackButton';
import { ImageBack } from '@/components/ImageBack';

export async function getServerSideProps(context: { params: { username: string } }) {
  const { username } = context.params;

  try {
    const user = await getUserDetails(username);

    if (!user) {
      return {
        props: { notFound: true },
      };
    }

    return {
      props: { data: user },
    };
  } catch (error) {
    console.log('Error fetching user details:', error);
    return {
      props: { notFound: true },
    };
  }
}

export default function UserDetail({ data, notFound }: { data?: UserDetails; notFound?: boolean }) {
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  };

  if (notFound) {
    return (
      <ImageBack
        imageUrl="/not-found.png"
        altText="user-not-found"
        message="User not found"
        buttonLabel="Back to Search"
        buttonAction={goToHome}
      />
    );
  }

  if (!data) {
    return (
      <ImageBack
        imageUrl="/user-not-found.png"
        altText="something-went-wrong"
        message="Oops! Something went wrong"
        buttonLabel="Back to Search"
        buttonAction={goToHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>{`${String(data.name || data.login || 'Default User')} - User Profile`}</title>
        <meta name="description" content={`Profile for user ${data.login}`} />
      </Head>

      <main className="max-w-3xl mx-auto">
        <BackButton label="Back to Search" icon="mdi:arrow-left" action={goToHome} />
        <UserDetailCard user={data} />
      </main>
    </div>
  );
}
