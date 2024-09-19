import { PokemonType } from './../types/Pokemon';

const FAVORITES_KEY = 'favoritePokemons';

export const getFavoritePokemons = (): PokemonType[] => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

export const getFavoritePokemonsByPage = (page: number, pageSize: number): PokemonType[] => {
  const favorites = getFavoritePokemons();
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return favorites.slice(start, end);
}

export const addFavoritePokemon = (pokemon: PokemonType): void => {
  const favorites = getFavoritePokemons();
  const isAlreadyFavorite = favorites.some((fav) => fav.number === pokemon.number);

  if (!isAlreadyFavorite) {
    favorites.push(pokemon);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
};

export const removeFavoritePokemon = (pokemonToRemove: PokemonType): void => {
  const favorites = getFavoritePokemons();
  const updatedFavorites = favorites.filter((pokemon) => pokemon.number !== pokemonToRemove.number);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
};

export const isFavoritePokemon = (pokemon: PokemonType): boolean => {
  const favorites = getFavoritePokemons();
  for (const favorite of favorites) {
    if (favorite.number === pokemon.number) {
      return true;
    }
  }
  return false;
};

interface Filters {
  type: string;
  name: string;
  orderBy: string;
  sortDirection: 'asc' | 'desc';
}

export const saveFiltersToLocalStorage = (filters: Filters): void => {
    localStorage.setItem('filters', JSON.stringify(filters));
};  

export const getFiltersFromLocalStorage = (): Filters => {
    const filters = localStorage.getItem('filters');
    const defaultFilters = {type: '', name: '', orderBy: 'number', sortDirection: 'asc'};
    return filters ? JSON.parse(filters) : defaultFilters;
}

