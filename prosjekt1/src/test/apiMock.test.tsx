import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchPokemonByName, fetchPokemonByNumber, fetchPokemonsBySearch } from '../utils/apiUtils'; // Juster stien etter behov
import { PokemonType } from '../types/Pokemon';

describe('API Calls', () => {
  const mockPokemon: PokemonType = {
    name: 'Bulbasaur',
    number: '001',
    types: ['Grass', 'Poison'],
    images: {
      small: 'small_image_url',
      large: 'large_image_url',
    },
  };

  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks();

    // Mock fetch implementation
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue({
        data: [mockPokemon],
      }),
    });
  });

  it('should fetch Pokémon by name', async () => {
    const result = await fetchPokemonByName({ queryKey: ['Bulbasaur'] });

    expect(result).toEqual(mockPokemon);
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('name:Bulbasaur'), {
      headers: { 'X-Api-Key': expect.any(String) },
    });
  });

  it('should fetch Pokémon by number', async () => {
    const result = await fetchPokemonByNumber({ queryKey: [1] });

    expect(result).toEqual(mockPokemon);
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('number:1'), {
      headers: { 'X-Api-Key': expect.any(String) },
    });
  });

  it('should fetch Pokémon by search', async () => {
    const mockSearchResult = {
      totalCount: 1,
      data: [mockPokemon],
    };

    // Adjust fetch mock for search
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: vi.fn().mockResolvedValue(mockSearchResult),
    });

    const result = await fetchPokemonsBySearch({ queryKey: ['filters', 'pageQuery', 'Name', 'asc'] });

    expect(result).toEqual({ pokemons: [mockPokemon], count: 1 });
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('filters'), {
      headers: { 'X-Api-Key': expect.any(String) },
    });
  });
});
