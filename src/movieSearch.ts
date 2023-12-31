import { Movie } from './types';
import { searchMovies, readMoviesData } from './utils';

export async function movieSearch(query: string): Promise<Movie[]> {
  try {
    const movies = await readMoviesData('../movies.json');

    const searchResult = searchMovies(query, movies);

    console.log(`Search Result for "${query}":`, searchResult);

    return searchResult.movies;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-throw the error
  }
}
