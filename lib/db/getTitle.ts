import { MovieModel } from './models/movies.model'

export default async function getTitleInDb (
  { userId, titleId }: { userId: string, titleId: string },
) {
  try {
    const movieRef = MovieModel(userId)
    const movie = await movieRef.doc(titleId).get()

    return movie.data()
  } catch (error) {
    console.error(error)
  }
}
