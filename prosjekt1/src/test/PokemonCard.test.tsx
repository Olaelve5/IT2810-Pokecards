import { describe, it, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PokemonCard from '../components/PokemonCard';
import DataProvider from '../providers/DataProvider';
import { tablePokemonsMock } from '../mocks/PokemonMock';

// Test if the PokemonCard component renders the active pokemon
describe('PokemonCard', () => {
  beforeEach(() => {
    vi.mock('../contexts/DataContext', async () => {
      const actual = await import('../contexts/DataContext');
      return {
        ...actual,
        useDataContext: () => ({
          activePokemon: tablePokemonsMock[0],
          tablePokemons: tablePokemonsMock,
        }),
      };
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders pokemon', async () => {
    const pokemonCard = render(
      <DataProvider>
        <PokemonCard />
      </DataProvider>,
    );

    expect(pokemonCard).toMatchSnapshot();

    // Test if mockPokemon1 is rendered correctly
    expect(screen.getByText(tablePokemonsMock[0].name)).toBeInTheDocument();

    // Test if the image of mockPokemon1 is rendered correctly
    const image = screen.getByAltText(`${tablePokemonsMock[0].name} image`);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', tablePokemonsMock[0].images.large);
  });
});
