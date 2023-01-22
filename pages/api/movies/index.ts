import type { NextApiRequest, NextApiResponse } from 'next'
import getUserMovies from '@/lib/db/getUserMovies'
import { getManyTitles } from '@/lib/api/movies/movies-api'
import { verifyToken } from '@/lib/api/verify-token'

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
