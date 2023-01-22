import { MOVIE_API } from '@/lib/constants'
import getTitleInDb from '@/lib/db/getTitle'
import { get } from '@/lib/fetch'

const URL = 'http://www.omdbapi.com/'

export const search = async (
  { term, type } : { term: string; type: 'movie' | 'series'; },
) => {
  const termToSearch = term.replace(' ', '+')
  try {
    const response = await get({
      url: URL,
      params: {
        apikey: MOVIE_API,
        s: termToSearch,
        type,
      },
    })

    if (response.Response === 'False') {
      return {
        results: false,
        titles: [],
      }
    }

    return {
      results: true,
      titles: response.Search,
    }
  } catch (error) {
    console.error(error)
    throw new Error('Something went wrong')
  }
}

export const getTitleById = async (
  { id } : { id: string; },
) => {
  try {
    const response = await get({
      url: URL,
      params: {
        apikey: MOVIE_API,
        i: id,
      },
    })

    return response
  } catch (error) {
    console.error(error)
    throw new Error('Something went wrong')
  }
}

export async function getManyTitles (
  { ids }: { ids: string[] },
) {
  const titles = await Promise.all(
    ids.map((id) => getTitleById({ id })),
  )

  return titles || []
}

export async function getTitleComments (
  { userId, titleId }: { userId: string; titleId: string },
) {
  const comments = await getTitleInDb({ userId, titleId })
  return comments?.comment
}
