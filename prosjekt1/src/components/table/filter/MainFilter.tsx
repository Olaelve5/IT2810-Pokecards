import { useEffect, useState } from 'react';
import TypeFilter from './TypeFilter';
import FilterController from './FilterController';
import classes from '../../../styles/table/MainFilter.module.css';
import NameFilter from './NameFilter';
import Sort from './Sort';
import { saveFiltersToLocalStorage, getFiltersFromLocalStorage } from '../../../utils/localStorageUtils';

interface MainFilterProps {
  page: number;
  setPage: (page: number) => void;
  setTotalPokemonCount: (count: number) => void;
}

const initialFilters = getFiltersFromLocalStorage();

const MainFilter = ({ page, setPage, setTotalPokemonCount }: MainFilterProps) => {
  const [type, setType] = useState<string>(initialFilters.type);
  const [name, setName] = useState<string>(initialFilters.name);
  const [orderBy, setOrderBy] = useState<string>(initialFilters.orderBy);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>(initialFilters.sortDirection);

  useEffect(() => {
    setPage(1);
  }, [type, setPage, name]);

  useEffect(() => {
    saveFiltersToLocalStorage({
      type: type,
      name: name,
      orderBy: orderBy,
      sortDirection: sortDirection,
    });
  }, [type, name, orderBy, sortDirection]);

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
      <h3 className={classes.title}>Find cards</h3>
      <div className={classes.filterContainer}>
        <NameFilter name={name} setName={setName} />
        <TypeFilter type={type} setType={setType} />
        <Sort
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
        />
      </div>
    </div>
  );
};

export default MainFilter;
