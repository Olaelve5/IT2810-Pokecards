import { useEffect, useState } from "react";
import TypeFilter from "./TypeFilter";
import FilterController from "./FilterController";
import classes from '../../../styles/table/MainFilter.module.css';
import NameFilter from "./NameFilter";
import Sort from "./Sort";

interface MainFilterProps {
    page: number;
    setPage: (page: number) => void;
    setTotalPokemonCount: (count: number) => void;
}

const MainFilter = ({page, setPage, setTotalPokemonCount}: MainFilterProps) => {
    const [type, setType] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [orderBy, setOrderBy] = useState<string>('ID');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

    useEffect(() => {
        setPage(1);
      }, [type, setPage, name]);

    return (
        <div className={classes.container}>
            <FilterController
            type={type} 
            page={page}
            name={name}
            orderBy={orderBy}
            setTotalPokemonCount={setTotalPokemonCount}
            sortDirection={sortDirection}
            />
            <NameFilter name={name} setName={setName}/>
            <TypeFilter type={type} setType={setType}/>
            <Sort orderBy={orderBy} setOrderBy={setOrderBy} sortDirection={sortDirection} setSortDirection={setSortDirection}/>
        </div>
    )
}

export default MainFilter;