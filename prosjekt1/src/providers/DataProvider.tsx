import { useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { PokemonType } from "../types/Pokemon";

const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [activePokemon, setActivePokemon] = useState<PokemonType | null>(null);
    const [tablePokemons, setTablePokemons] = useState<PokemonType[]>([]);
    const [showFavorites, setShowFavorites] = useState<boolean>(false);
    const [totalPokemonCount, setTotalPokemonCount] = useState<number>(0);
    const [globalTotalPokemonCount, setGlobalTotalPokemonCount] = useState<number>(0);

    useEffect(() => {
        if (!activePokemon && tablePokemons.length > 0) {
            setActivePokemon(tablePokemons[0]);
        }
    }, [activePokemon, tablePokemons]);

    return (
        <DataContext.Provider value={{ 
            activePokemon, setActivePokemon, 
            tablePokemons, setTablePokemons,
            showFavorites, setShowFavorites,
            totalPokemonCount, setTotalPokemonCount,
            globalTotalPokemonCount, setGlobalTotalPokemonCount
            }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;

