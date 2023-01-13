import type { NextApiRequest, NextApiResponse } from 'next'
import { verifyToken } from '@services/backend/verifyToken'
import editTitle from '@services/backend/db/editTitle'

export default async function Add (req: NextApiRequest, res: NextApiResponse) {
  try {
    const isValid = await verifyToken(req.cookies)
    if (isValid.error) return res.status(401).json({ error: 'Unauthorized', message: isValid.message })

    const { titleId, comment, userId } = JSON.parse(req.body)

    if (!userId) return res.status(400).json({ error: 'Missing userId' })

    // check for the type of request
    if (req.method === 'POST') {
      if (!titleId) {
        res.status(400).json({ error: 'Missing titleId' })
      } else {
        await editTitle({ id: titleId, userId, comment })
        res.status(200).json({ ok: 'ok' })
      }
    }
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: 'Something went wrong' })
  }
};
