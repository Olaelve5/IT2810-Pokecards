// src/utils/localStorageUtils.ts

const FAVORITES_KEY = 'favoritePokemons';

export const getFavoritePokemons = (): string[] => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

export const addFavoritePokemon = (pokemonId: string): void => {
  const favorites = getFavoritePokemons();
  if (!favorites.includes(pokemonId)) {
    favorites.push(pokemonId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
};

export const removeFavoritePokemon = (id: string): void => {
  const favorites = getFavoritePokemons();
  const updatedFavorites = favorites.filter((id) => id !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
};

export const isFavoritePokemon = (id: string): boolean => {
  const favorites = getFavoritePokemons();
  return favorites.includes(id);
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
    return filters ? JSON.parse(filters) : {type: '', name: '', orderBy: 'Name', sortDirection: 'desc'};
}

