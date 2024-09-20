import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchPokemonByNumber, fetchPokemonsBySearch } from '../utils/apiUtils'; // Juster stien etter behov

const mockPokemons = [
  {
    number: '1',
    name: 'Bulbasaur',
    images: {
      small: 'https://example.com/small.png',
      large: 'https://example.com/large.png',
    },
    types: ['Grass'],
  },
  {
    number: '2',
    name: 'Ivysaur',
    images: {
      small: 'https://example.com/small.png',
      large: 'https://example.com/large.png',
    },
    types: ['Grass']
  }
];


describe('API Calls', () => {

  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks();

    // Mock fetch implementation
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue({
        data: mockPokemons,
      }),
    });
  });

  it('should fetch Pokémon by number', async () => {
    const result = await fetchPokemonByNumber({ queryKey: [1] });

    expect(result).toEqual(mockPokemons[0]);
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('number:1'), {
      headers: { 'X-Api-Key': expect.any(String) },
    });
  });

  it('should fetch Pokémon by search', async () => {
    const mockSearchResult = {
      totalCount: 2,
      data: mockPokemons,
    };

    // Adjust fetch mock for search
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: vi.fn().mockResolvedValue(mockSearchResult),
    });

    const result = await fetchPokemonsBySearch({ queryKey: ['filter', 'pageQuery', 'Name', 'asc'] });

    expect(result).toEqual({ pokemons: mockPokemons, count: 2 });
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('filter'), {
      headers: { 'X-Api-Key': expect.any(String) },
    });
  });
});
