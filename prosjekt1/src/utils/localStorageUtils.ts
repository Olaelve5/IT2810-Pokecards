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
