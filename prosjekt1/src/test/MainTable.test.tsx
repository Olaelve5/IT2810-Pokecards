import MainTable from '../components/table/MainTable';
import { tablePokemonsMock } from '../mocks/PokemonMock';
import { render, screen, waitFor } from '@testing-library/react';
import DataProvider from '../providers/DataProvider';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import userEvent from '@testing-library/user-event';

const setActivePokemon = vi.fn();

// Mocking the DataContext
vi.mock('../contexts/DataContext', async () => {
  const actual = await import('../contexts/DataContext');
  return {
    ...actual,
    useDataContext: () => ({
      activePokemon: tablePokemonsMock[0],
      tablePokemons: tablePokemonsMock,
      setActivePokemon,
      setTablePokemons: vi.fn(),
      setTotalPokemonCount: vi.fn(),
      setGlobalTotalPokemonCount: vi.fn(),
    }),
  };
});

// Test if the MainTable component renders the correct table and updates activePokemon on click
describe('MainTable', () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders table and updates displayName on click', async () => {
    const mainTable = render(
      <QueryClientProvider client={queryClient}>
        <DataProvider>
          <MainTable />
        </DataProvider>
      </QueryClientProvider>,
    );
    expect(mainTable).toMatchSnapshot();

    userEvent.click(screen.getByText(tablePokemonsMock[2].name));

    await waitFor(() => {
      expect(setActivePokemon).toHaveBeenCalledWith(tablePokemonsMock[2]);
    });
  });
});
