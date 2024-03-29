import type { NextApiRequest, NextApiResponse } from 'next'
import { verifyToken } from '@/lib/api/verify-token'

export default async function Protected (req: NextApiRequest, res: NextApiResponse) {
  try {
    const isValid = await verifyToken(req.cookies)
    if (isValid.error) return res.status(401).json({ error: 'Unauthorized', message: isValid.message })

    return res.status(200).json({ ok: 'ok' })
  } catch (error) {
    console.error(error)
    return res.status(400).json({ error: 'Something went wrong' })
  }
};
