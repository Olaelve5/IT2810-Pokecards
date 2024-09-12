import { useState, useEffect } from "react";
import { PokemonType } from "../../types/Pokemon";
import { useDataContext } from "../../contexts/DataContext";
import classes from '../../styles/table/Row.module.css';

const Row = (data: PokemonType) => {
    const [localData, setLocalData] = useState<PokemonType>(data);
    const { activePokemon, setActivePokemon } = useDataContext();

    useEffect(() => {
        setLocalData(data);
    }, [data]);

    const handleClick = () => {
        if(activePokemon && activePokemon.id === localData.id) return;
        setActivePokemon(localData);
    }

    return (
        <tr onClick={handleClick} className={classes.container}>
            <td>{localData.name}</td>
            <td>{localData.id}</td>
            <td>{localData.types[0]}</td>
        </tr>
    )
}

export default Row;