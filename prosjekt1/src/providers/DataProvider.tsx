import { useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { PokemonType } from "../types/Pokemon";

const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [activePokemon, setActivePokemon] = useState<PokemonType | null>(null);
    const [tablePokemons, setTablePokemons] = useState<PokemonType[]>([]);

    useEffect(() => {
        if (!activePokemon && tablePokemons.length > 0) {
            setActivePokemon(tablePokemons[0]);
        }
    }, [activePokemon, tablePokemons]);

    return (
        <DataContext.Provider value={{ 
            activePokemon, setActivePokemon, 
            tablePokemons, setTablePokemons}}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;

