import { MovieModel } from './models/movies'

export default async function editTitle (
  { id, comment, userId }: { id: string, comment?: string, userId: string },
) {
  try {
    const movieRef = MovieModel(userId)

    await movieRef.doc(id).update({ comment })
    console.log('Document written')

    return movieRef.get()
  } catch (error) {
    console.error('Error adding document: ', error)
  }
}
