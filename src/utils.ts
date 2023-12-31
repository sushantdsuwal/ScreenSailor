import { promises as fsPromises } from 'fs';
import { Movie, SearchResult } from './types';
import * as path from 'path';

/**
 * Reads movies data from the specified file path.
 * @param filePath The path to the movies data file.
 * @returns An array of Movie objects.
 */
export async function readMoviesData(filePath: string): Promise<Movie[]> {
  try {
    const moviePath = path.join(__dirname, filePath);
    const data = await fsPromises.readFile(moviePath, 'utf8');

    try {
      const moviesData: Movie[] = JSON.parse(data);
      return moviesData;
    } catch (jsonError) {
      console.error('Error parsing JSON:', jsonError);
      throw jsonError;
    }
  } catch (fileError) {
    console.error('Error reading file:', fileError);
    throw fileError; // Re-throw the file error
  }
}

// Search Term
export function searchMovies(searchTerm: string, movies: Movie[]): SearchResult {
  // Return all movies if searchTerm is empty
  if (!searchTerm.trim()) {
    return { searchTerm, movies };
  }

  // Convert searchTerm to lowercase for case-insensitive comparison
  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  // Filter movies based on multiple criteria
  let matchingMovies: Movie[] = movies.filter((movie) => {
    const { Title, Year, Released, Writer, Actors, Plot } = movie;

    // Check if any property contains the searchTerm (case-insensitive)
    return (
      Title.toLowerCase().includes(lowerCaseSearchTerm) ||
      Year.toLowerCase().includes(lowerCaseSearchTerm) ||
      Released.toLowerCase().includes(lowerCaseSearchTerm) ||
      Writer.toLowerCase().includes(lowerCaseSearchTerm) ||
      Writer.toLowerCase().includes(lowerCaseSearchTerm) ||
      Actors.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  return { searchTerm, movies: matchingMovies };
}
