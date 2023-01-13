import { MovieModel } from './models/movies'

export default async function removeMovie (
  { id, userId }: { id: string, userId: string },
) {
  try {
    const movieRef = MovieModel(userId)

    await movieRef.doc(id).delete()
    console.log('Document written')

    return movieRef.get()
  } catch (error) {
    console.error('Error adding document: ', error)
  }
}
