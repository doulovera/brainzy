import { logError, logSuccess } from '@/lib/log'
import { MovieModel } from './models/movies.model'

export default async function addMovie (
  { id, comment, userId }: { id: string, comment?: string, userId: string },
) {
  try {
    const moviesRef = MovieModel(userId)
    const movies = await moviesRef.doc(id).set({ comment })

    logSuccess('Document written')

    return movies
  } catch (error) {
    logError('Error adding document: ', error)
  }
}
