import { useEffect, useState } from "react";
import TypeFilter from "./TypeFilter";
import FilterController from "./FilterController";
import classes from '../../../styles/table/MainFilter.module.css';
import NameFilter from "./NameFilter";

interface MainFilterProps {
    page: number;
    setPage: (page: number) => void;
    setTotalPokemonCount: (count: number) => void;
}

const MainFilter = ({page, setPage, setTotalPokemonCount}: MainFilterProps) => {
    const [type, setType] = useState<string>('');
    const [name, setName] = useState<string>('');


    useEffect(() => {
        setPage(1);
      }, [type, setPage]);

    return (
        <div className={classes.container}>
            <FilterController
            type={type} 
            page={page}
            name={name}
            setTotalPokemonCount={setTotalPokemonCount}
            />
            <NameFilter setName={setName}/>
            <TypeFilter setType={setType}/>
        </div>
    )
}

export default MainFilter;