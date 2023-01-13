import type { NextApiRequest, NextApiResponse } from 'next'
import getUserMovies from '@services/backend/db/getUserMovies'
import { getManyTitles } from '@services/backend/movies-api'
import { verifyToken } from '@services/backend/verifyToken'

export default async function Add (req: NextApiRequest, res: NextApiResponse) {
  try {
    const isValid = await verifyToken(req.cookies)
    if (isValid.error) return res.status(401).json({ error: 'Unauthorized', message: isValid.message })

    const { user } = req.query

    if (!user) return res.status(400).json({ error: 'Missing user' })

    const moviesIdsList = await getUserMovies({ userId: user as string })
    const movies = await getManyTitles({ ids: moviesIdsList || [] })

    res.status(200).json({ movies })
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: 'Something went wrong' })
  }
}
