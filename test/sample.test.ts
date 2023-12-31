import { movieSearch } from '../src/movieSearch';
import { Movie } from '../src/types';

describe('movieSearch', () => {
  it('returns single result for exact match', async () => {
    const results = await movieSearch('Power');
    expect(results).toHaveLength(1);
    expect(results[0]).toHaveProperty('Title', 'Power');
  });
});
