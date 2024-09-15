import { useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { PokemonType } from "../types/Pokemon";

const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [activePokemon, setActivePokemon] = useState<PokemonType | null>(null);
    const [tablePokemons, setTablePokemons] = useState<PokemonType[]>([]);

    return (
        <DataContext.Provider value={{ 
            activePokemon, setActivePokemon, 
            tablePokemons, setTablePokemons}}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;

