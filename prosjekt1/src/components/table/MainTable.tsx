import {useState} from 'react';
import Row from './Row';
import { PokemonType } from '../../types/Pokemon';
import { useDataContext } from '../../contexts/DataContext';
import classes from '../../styles/table/MainTable.module.css';
import PageButtons from '../buttons/PageButtons';
import MainFilter from './filter/MainFilter';
import FavoritesToggle from '../buttons/FavoritesToggle';

const MainTable = () => {
  const { tablePokemons, totalPokemonCount, setTotalPokemonCount } = useDataContext();
  const [page, setPage] = useState<number>(1);

  return (
    <div className={classes.tableContainer}>
      <MainFilter page={page} setPage={setPage} setTotalPokemonCount={setTotalPokemonCount}/>
      <FavoritesToggle page={page} setPage={setPage} totalPokemonCount={totalPokemonCount} setTotalPokemonCount={setTotalPokemonCount}/>
      <div className={classes.grid}>
        {tablePokemons && tablePokemons.length === 0 && (
          <div className={classes.noResults}>No pokemon found</div>
        )}

        {tablePokemons?.map((pokemon: PokemonType) => (
          <div key={pokemon.number} className={classes.cell}>
            <Row {...pokemon} />
          </div>
        ))}
      </div>
      <PageButtons page={page} setPage={setPage} totalPokemonCount={totalPokemonCount}/>
    </div>
  );
};

export default MainTable;
