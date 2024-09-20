import { describe, it, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PokemonCard from '../components/PokemonCard'; // Adjust the import path as needed
import DataProvider from '../providers/DataProvider'; // Adjust the import path as needed

const mockPokemon1 = {
  number: 1,
  name: 'Beedrill',
  images: {
    small: 'https://example.com/small.png',
    large: 'https://example.com/large.png',
  },
};

const mockPokemon2 = {
  number: 2,
  name: 'Butterfree',
  images: {
    small: 'https://example.com/small.png',
    large: 'https://example.com/large.png',
  },
};

const mockTablePokemons = [
  mockPokemon1,
  mockPokemon2,
];

// Test if the PokemonCard component renders the active pokemon

describe('PokemonCard', () => {
  beforeEach(() => {
    vi.mock('../contexts/DataContext', async () => {
      const actual = await import('../contexts/DataContext');
      return {
        ...actual,
        useDataContext: () => ({
          activePokemon: mockPokemon1,
          tablePokemons: mockTablePokemons,
        }),
      };
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders mockPokemon1', async () => {

    render(
      <DataProvider>
        <PokemonCard />
      </DataProvider>
    );
    
    screen.debug();

    // Test if mockPokemon1 is rendered correctly
    expect(screen.getByText(mockPokemon1.name)).toBeInTheDocument();

    // Test if the image of mockPokemon1 is rendered correctly
    const image = screen.getByAltText(`${mockPokemon1.name} image`);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockPokemon1.images.large);
  });
});