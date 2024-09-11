import { useState } from "react";
import { DataContext } from "../contexts/DataContext";

const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [name, setName] = useState<string>('ditto');
    const [id, setId] = useState<string>('base3-3');

    return (
        <DataContext.Provider value={{ name, id, setName, setId }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;

