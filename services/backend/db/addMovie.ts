import { MovieModel } from './models/movies'

export default async function addMovie (
  { id, comment, userId }: { id: string, comment?: string, userId: string },
) {
  try {
    const moviesRef = MovieModel(userId)
    const movies = await moviesRef.doc(id).set({ comment })

    console.log('Document written')

    return movies
  } catch (error) {
    console.error('Error adding document: ', error)
  }
}
