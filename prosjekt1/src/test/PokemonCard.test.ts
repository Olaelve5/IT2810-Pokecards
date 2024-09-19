import { vi, describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import PokemonCard from '../components/PokemonCard'; // Ensure the path is correct

// Mock the entire module
vi.mock('../contexts/DataContext', () => ({
  useDataContext: vi.fn(),
}));

describe('PokemonCard', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<PokemonCard />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
