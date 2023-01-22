import type { NextApiRequest, NextApiResponse } from 'next'
import { verifyToken } from '@/lib/api/verify-token'
import removeMovie from '@/lib/db/removeMovie'

export default async function Delete (req: NextApiRequest, res: NextApiResponse) {
  try {
    const isValid = await verifyToken(req.cookies)
    if (isValid.error) return res.status(401).json({ error: 'Unauthorized', message: isValid.message })
    if (!isValid.user) return res.status(401).json({ error: 'Unauthorized', message: 'No user' })

    const { titleId } = JSON.parse(req.body)
    const { uid: userId } = isValid.user

    if (!userId) return res.status(400).json({ error: 'Missing userId' })

    // check for the type of request
    if (req.method === 'POST') {
      if (!titleId) {
        res.status(400).json({ error: 'Missing titleId' })
      } else {
        await removeMovie({ id: titleId, userId })
        res.status(200).json({ ok: 'ok' })
      }
    }
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: 'Something went wrong' })
  }
};
