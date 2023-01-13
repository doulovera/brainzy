import type { NextApiRequest, NextApiResponse } from 'next'
import { getTitleById, getTitleComments } from '@services/backend/movies-api'
import { verifyToken } from '@services/backend/verifyToken'

export default async function Title (req: NextApiRequest, res: NextApiResponse) {
  try {
    const isValid = await verifyToken(req.cookies)
    if (isValid.error) return res.status(401).json({ error: 'Unauthorized', message: isValid.message })
    if (!isValid.user) return res.status(401).json({ error: 'Unauthorized', message: 'No user' })

    const { id: titleId, comments: reqComments } = req.query

    if (!titleId) return res.status(400).json({ error: 'Missing title id' })

    const titleInfo = await getTitleById({ id: titleId as string })

    if (titleInfo) {
      let comments

      if (reqComments) {
        const { user } = isValid
        const { uid } = user

        comments = await getTitleComments({ titleId: titleId as string, userId: uid })
      }

      return res.status(200).json({ title: titleInfo, comments })
    }

    return res.status(400).json({ error: 'No results' })
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: 'Something went wrong' })
  }
};
