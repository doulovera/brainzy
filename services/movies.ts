import { API_URL } from 'constants/API_KEYS';
import { get, post } from 'utils/fetch';

export async function getTitle (
  { id }: { id: string },
) {
  try {
    return get({
      url: `${API_URL}/movies/title`,
      params: { id },
    });
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
    return get({
      url: `${API_URL}/movies/search`,
      params: { term: termToSearch, type },
    });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function getUserTitles (
  { userId }: { userId: string },
) {
  try {
    return get({
      url: `${API_URL}/movies`,
      params: { user: userId },
    });
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong');
  }
}

export async function addTitle (
  { userId, titleId }: { userId: string, titleId: string },
) {
  try {
    return post({
      url: `${API_URL}/movies/add`,
      body: {
        userId,
        titleId,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong');
  }
}
