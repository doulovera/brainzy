import getUserMovies from '@services/backend/getUserMovies';
import { getManyTitles } from '@services/movies';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Add (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { user } = req.query;

    if (!user) return res.status(400).json({ error: 'Missing user' });

    const moviesIDs = await getUserMovies({ userId: user as string });
    const movies = await getManyTitles({ ids: moviesIDs?.movies || [] });

    res.status(200).json({ movies });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Something went wrong' });
  }
}
