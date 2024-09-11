import { createContext, useContext } from "react";

interface DataContextProps {
    name: string;
    id: string;
    setName: (name: string) => void;
    setId: (id: string) => void;
}

export const DataContext = createContext<DataContextProps | undefined>(undefined);

export function useDataContext() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useDataContext must be used within a DataContextProvider");
    }
    return context;
}
