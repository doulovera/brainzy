import { logError, logSuccess } from '@/lib/log'
import { MovieModel } from './models/movies.model'

export default async function removeMovie (
  { id, userId }: { id: string, userId: string },
) {
  try {
    const movieRef = MovieModel(userId)

    await movieRef.doc(id).delete()
    logSuccess('Document written')

    return movieRef.get()
  } catch (error) {
    logError('Error adding document: ', error)
  }
}
