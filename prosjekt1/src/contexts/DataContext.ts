import { createContext, useContext } from 'react';
import { PokemonType } from '../types/Pokemon';

interface DataContextProps {
  activePokemon: PokemonType | null;
  setActivePokemon: (pokemon: PokemonType) => void;
  tablePokemons: PokemonType[];
  setTablePokemons: (pokemons: PokemonType[]) => void;
  showFavorites: boolean;
  setShowFavorites: (show: boolean) => void;
  totalPokemonCount: number;
  setTotalPokemonCount: (count: number) => void;
}

export const DataContext = createContext<DataContextProps | undefined>(undefined);

export function useDataContext() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataContextProvider');
  }
  return context;
}
