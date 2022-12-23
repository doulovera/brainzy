import { API_URL } from 'constants/API_KEYS';
import { get, post } from 'utils/fetch';

export async function getTitle (
  { id }: { id: string },
) {
  try {
    const response = await get({
      url: `${API_URL}/movies/title`,
      params: { id },
    });

    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong');
  }
}

export async function searchTitle (
  { term, type }: { term: string, type: 'movie' | 'series' },
) {
  const termToSearch = term.replace(' ', '+');
  try {
    const response = await get({
      url: `${API_URL}/movies/search`,
      params: { term: termToSearch, type },
    });

    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function getUserTitles ( // !!
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
      url: `${API_URL}/movies/add`,
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
