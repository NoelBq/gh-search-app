export interface User {
  id: number;
  login: string;
  avatar_url: string;
}

export interface UserDetails extends User {
  name: string | null;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  location: string | null;
  company: string | null;
  blog: string | null;
  twitter_username: string | null;
  created_at: string;
  updated_at: string;
  public_gists: number;
  html_url: string;
  email: string | null;
  hireable: boolean | null;
}

export async function searchUsers(term: string): Promise<User[]> {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${term || 'a'}`
    );
    const data = await response.json();
    if (response.ok) {
      return data.items;
    }
    console.warn('Response not ok');
    return [];
  } catch {
    console.error('Error fetching data');
    return [];
  }
}

export async function getUserDetails(username: string): Promise<UserDetails> {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch user details for ${username}`);
  }

  const data: UserDetails = await response.json();
  return data;
}
