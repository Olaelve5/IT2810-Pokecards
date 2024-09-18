import {useState} from 'react';
import Row from './Row';
import { PokemonType } from '../../types/Pokemon';
import { useDataContext } from '../../contexts/DataContext';
import classes from '../../styles/table/MainTable.module.css';
import PageButtons from '../buttons/PageButtons';
import MainFilter from './filter/MainFilter';

const MainTable = () => {
  const { tablePokemons } = useDataContext();
  const [totalPokemonCount, setTotalPokemonCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  return (
    <div className={classes.tableContainer}>
      <MainFilter page={page} setPage={setPage} setTotalPokemonCount={setTotalPokemonCount}/>
      <div className={classes.grid}>
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
