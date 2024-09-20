import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FavouriteButton from '../components/buttons/FavouriteButton';
import { useDataContext } from '../contexts/DataContext';
import { isFavoritePokemon } from '../utils/localStorageUtils';

vi.mock('../utils/localStorageUtils', () => ({
  isFavoritePokemon: vi.fn(),
}));

vi.mock('../contexts/DataContext', () => ({
  useDataContext: vi.fn(),
}));

describe('FavouriteButton Component', () => {
  const mockPokemon = { number: '1', name: 'Bulbasaur' };

  beforeEach(() => {
    vi.clearAllMocks();

    (useDataContext as jest.Mock).mockReturnValue({
      activePokemon: mockPokemon,
    });
  });

  it('should match the snapshot when Pokémon is not a favorite', () => {
    (isFavoritePokemon as jest.Mock).mockReturnValue(false); 
    const { asFragment } = render(<FavouriteButton />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match the snapshot when Pokémon is a favorite', () => {
    (isFavoritePokemon as jest.Mock).mockReturnValue(true); 
    const { asFragment } = render(<FavouriteButton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
