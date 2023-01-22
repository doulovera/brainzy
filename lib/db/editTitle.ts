import { logError, logSuccess } from '@/lib/log'
import { MovieModel } from './models/movies.model'

export default async function editTitle (
  { id, comment, userId }: { id: string, comment?: string, userId: string },
) {
  try {
    const movieRef = MovieModel(userId)

    await movieRef.doc(id).update({ comment })
    logSuccess('Document written')

    return movieRef.get()
  } catch (error) {
    logError('Error adding document: ', error)
  }
}
