import type { NextApiRequest, NextApiResponse } from 'next';
import { getTitleById } from '@services/backend/movies-api';
import { verifyToken } from '@services/backend/verifyToken';

export default async function Title (req: NextApiRequest, res: NextApiResponse) {
  try {
    const isValid = await verifyToken(req.cookies);
    if (isValid.error) return res.status(401).json({ error: 'Unauthorized', message: isValid.message });

    const { id } = req.query;

    if (!id) return res.status(400).json({ error: 'Missing title id' });

    const response = await getTitleById({ id: id as string });

    if (response) {
      return res.status(200).json({ title: response });
    }

    return res.status(400).json({ error: 'No results' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Something went wrong' });
  }
};
