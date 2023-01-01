import type { NextApiRequest, NextApiResponse } from 'next';
import { search } from '@services/backend/movies-api';
import { verifyToken } from '@services/backend/verifyToken';

export default async function Search (req: NextApiRequest, res: NextApiResponse) {
  try {
    const isValid = await verifyToken(req.cookies);
    if (isValid.error) return res.status(401).json({ error: 'Unauthorized', message: isValid.message });

    const { term, type } = req.query;

    if (!term || !type) return res.status(400).json({ error: 'Missing term or type' });

    if (type !== 'movie' && type !== 'series') return res.status(400).json({ error: 'Invalid type' });

    const response = await search({ term: term as string, type });

    if (response.results) {
      return res.status(200).json({ titles: response.titles });
    }

    return res.status(400).json({ error: 'No results found :(' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Something went wrong' });
  }
};
