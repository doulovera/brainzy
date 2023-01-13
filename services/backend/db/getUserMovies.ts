import { MovieModel } from './models/movies'

export default async function getUserMovies (
  { userId }: { userId: string },
) {
  try {
    const moviesRef = MovieModel(userId)
    const movies = await moviesRef.get()

    if (movies.empty) {
      console.log('No matching documents.')
      return []
    }

    return movies.docs.map((doc) => doc.id)
  } catch (error) {
    console.error(error)
  }
}
