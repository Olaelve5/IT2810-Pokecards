import { PokemonType } from '../types/Pokemon';

const ApiKey = '81667daf-d49d-4aae-8613-2a3c0347cc4b';
const url = 'https://api.pokemontcg.io/v2/cards?q=';
const set = 'set.id:ex6';

export const fetchPokemonByName = async ({ queryKey }: { queryKey: string[] }): Promise<PokemonType> => {
  const query =  set + 'name:' + queryKey + '&pageSize=5';
  const res = await fetch(url + query, {
    headers: {
      'X-Api-Key': ApiKey,
    },
  });

  const data = await res.json();
  const { name, id, types, images } = data.data[0] as PokemonType;
  return { name, id, types, images };
};

export const fetchPokemonById = async ({ queryKey }: { queryKey: string[] }): Promise<PokemonType> => {
  const query = 'id:' + queryKey;
  const res = await fetch(url + query, {
    headers: {
      'X-Api-Key': ApiKey,
    },
  });

  const data = await res.json();
  const { name, id, types, images } = data.data[0] as PokemonType;
  return { name, id, types, images };
};


interface FetchPokemonsBySearch {
  pokemons: PokemonType[];
  count: number;
}

export const fetchPokemonsBySearch = async ({ queryKey }: { queryKey: string[] }): Promise<FetchPokemonsBySearch> => {
  const [filters, pageQuery] = queryKey;
  const query = `${set}${filters}${pageQuery}&pageSize=12&orderBy=number`;
  const res = await fetch(url + query, {
    headers: {
      'X-Api-Key': ApiKey,
    },
  });

  const data = await res.json();
  const totalCount = data.totalCount;
  const pokemons = data.data.map((pokemon: PokemonType) => {
    const { name, id, types, images } = pokemon;
    if (!types) {
      return { name, id, types: ['none'], images };
    }
    return { name, id, types, images };
  });

  return { pokemons: pokemons, count: totalCount };
};
