import type { NextApiRequest, NextApiResponse } from 'next'
import addMovie from '@/lib/db/addMovie'
import { getTitleById } from '@/lib/api/movies/movies-api'
import { verifyToken } from '@/lib/api/verify-token'

export default async function Add (req: NextApiRequest, res: NextApiResponse) {
  try {
    const isValid = await verifyToken(req.cookies)
    if (isValid.error) return res.status(401).json({ error: 'Unauthorized', message: isValid.message })

    const { titleId, comment, userId } = JSON.parse(req.body)

    // check for the type of request
    if (req.method === 'POST') {
      if (!titleId) {
        res.status(400).json({ error: 'Missing titleId' })
      } else {
        const { imdbID } = await getTitleById({ id: titleId })
        await addMovie({ id: imdbID, comment, userId })
        res.status(200).json({ ok: 'ok' })
      }
    }
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: 'Something went wrong' })
  }
};
