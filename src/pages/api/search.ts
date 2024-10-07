import { NextApiRequest, NextApiResponse } from 'next';
import { searchUsers } from '../../utils/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { term } = req.query;

  if (typeof term !== 'string') {
    res.status(400).json({ error: 'Invalid search term' });
    return;
  }

  try {
    const users = await searchUsers(term);
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}
