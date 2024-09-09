import { PokemonType } from "../types/Pokemon";

export const fetchPokemon = async ({ queryKey }: { queryKey: string[] }): Promise<PokemonType> => {
    const [id] = queryKey;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res.json();
};