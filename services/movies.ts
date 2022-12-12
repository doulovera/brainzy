import { MOVIE_API } from 'constants/API_KEYS';
import { get, post } from 'utils/fetch';

const API = (params: Record<string, string>) => ({
  url: 'http://www.omdbapi.com/',
  params: {
    apikey: MOVIE_API,
    ...params,
  },
});

export async function searchTitle (
  { term, type }: { term: string, type: 'movie' | 'series' },
) {
  const termToSearch = term.replace(' ', '+');
  try {
    const response = await get(
      API({ s: termToSearch, type }),
    );

    if (response.Response === 'False') {
      return {
        results: false,
        titles: [],
      };
    }

    return {
      results: true,
      titles: response.Search,
    };
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong');
  }
}

export async function getTitleById (
  { id }: { id: string },
) {
  try {
    const response = await get(
      API({ i: id }),
    );

    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong');
  }
}

export async function getManyTitles (
  { ids }: { ids: string[] },
) {
  const titles = await Promise.all(
    ids.map((id) => getTitleById({ id })),
  );

  return titles || [];
}

export async function getUserTitles (
  { userId }: { userId: string },
) {
  try {
    const response = await fetch(`/api/movies?user=${userId}`);
    return response.json();
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong');
  }
}

export async function addTitle (
  { userId, titleId }: { userId: string, titleId: string },
) {
  try {
    const response = await post({
      url: '/api/movies/add',
      body: {
        userId,
        titleId,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong');
  }
}
