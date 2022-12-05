import { MOVIE_API } from 'constants/API_KEYS';

const API = `https://www.omdbapi.com/?apikey=${MOVIE_API}`;

export async function searchTitle (
  { term, type }: { term: string, type: 'movie' | 'series' | 'episode' },
) {
  const termToSearch = term.replace(' ', '+');
  try {
    const response = await fetch(`${API}&t=${termToSearch}&type=${type}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getManyTitles (
  { terms }: { terms: string[] },
) {
  const titles = await Promise.all(
    terms.map((term) => searchTitle({ term, type: 'movie' })),
  );

  return titles;
}
