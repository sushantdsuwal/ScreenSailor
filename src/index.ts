import { movieSearch } from './movieSearch';

// Fetch the search term from the command line arguments
const searchTerm = process.argv[2];

// Check if a search term is provided
if (searchTerm) {
  (async () => {
    try {
      const result = await movieSearch(searchTerm);
      console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error:', error.message);
      } else {
        console.error('An unexpected error occurred.');
      }
    }
  })();
} else {
  console.log('Please provide a search term.');
}
