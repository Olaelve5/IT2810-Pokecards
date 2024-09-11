import { useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { PokemonType } from "../types/Pokemon";

const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [activePokemon, setActivePokemon] = useState<PokemonType | null>(null);

    return (
        <DataContext.Provider value={{ activePokemon, setActivePokemon}}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;

