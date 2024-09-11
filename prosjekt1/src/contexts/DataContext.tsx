import { createContext, useContext } from "react";
import { PokemonType } from '../types/Pokemon';

interface DataContextProps {
    activePokemon: PokemonType | null;
    setActivePokemon: (pokemon: PokemonType) => void;
}

export const DataContext = createContext<DataContextProps | undefined>(undefined);

export function useDataContext() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useDataContext must be used within a DataContextProvider");
    }
    return context;
}
