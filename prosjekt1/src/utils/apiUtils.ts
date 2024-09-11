import { PokemonType } from '../types/Pokemon';
const ApiKey = '81667daf-d49d-4aae-8613-2a3c0347cc4b';
const url = 'https://api.pokemontcg.io/v2/cards?q=name:';

export const fetchPokemon = async ({ queryKey }: { queryKey: string[] }): Promise<PokemonType> => {
  const [id] = queryKey;
  const res = await fetch(url + id + "&pageSize=5", {
    headers: {
      'X-Api-Key': ApiKey,
    },
  });

  const data = await res.json();
  return data.data[0];
};
