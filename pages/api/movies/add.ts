import type { NextApiRequest, NextApiResponse } from 'next';
import addMovie from '@services/backend/addMovie';
import { getTitleById } from '@services/movies';

// !!: ADD SUPPORT TO JWT FOR SECURITY

export default async function Add (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { titleId, userId } = JSON.parse(req.body);

    // check for the type of request
    if (req.method === 'POST') {
      if (!titleId) {
        res.status(400).json({ error: 'Missing titleId' });
      } else {
        const { imdbID } = await getTitleById({ id: titleId });
        await addMovie({ id: imdbID, userId });
        res.status(200).json({ ok: 'ok' });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Something went wrong' });
  }
};
