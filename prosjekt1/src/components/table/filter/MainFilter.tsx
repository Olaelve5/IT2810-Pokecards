import { useEffect, useState } from "react";
import HpFilter from "./HpFilter";
import TypeFilter from "./TypeFilter";
import FilterController from "./FilterController";
import classes from '../../../styles/table/MainFilter.module.css';

interface MainFilterProps {
    page: number;
    setPage: (page: number) => void;
    setTotalPokemonCount: (count: number) => void;
}

const MainFilter = ({page, setPage, setTotalPokemonCount}: MainFilterProps) => {
    const [type, setType] = useState<string>('');
    const [minHp, setMinHp] = useState<number>(0);
    const [maxHp, setMaxHp] = useState<number>(150);
    const [shouldSearch, setShouldSearch] = useState<boolean>(false);


    useEffect(() => {
        setPage(1);
      }, [type, setPage]);

    return (
        <div className={classes.container}>
            <FilterController
            type={type} 
            minHp={minHp} 
            maxHp={maxHp} 
            page={page}
            setTotalPokemonCount={setTotalPokemonCount}
            shouldSearch={shouldSearch}
            setShouldSearch={setShouldSearch}
            />
            <TypeFilter setType={setType}/>
            <HpFilter
            minHp={minHp}
            maxHp={maxHp}
            setMinHp={setMinHp}
            setMaxHp={setMaxHp}
            />
            <button 
            onClick={() => setShouldSearch(true)}
            className={classes.searchButton}
            >
                Search
            </button>
        </div>
    )
}

export default MainFilter;