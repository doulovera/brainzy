import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '@services/backend/verifyToken';

export default async function Protected (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { token } = req.cookies;

    const isValid = await verifyToken(token);

    if (isValid.error) return res.status(401).json({ error: 'Unauthorized', message: isValid.message });

    return res.status(200).json({ ok: 'ok' });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Something went wrong' });
  }
};
