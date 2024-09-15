import React, { useState, useEffect, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPokemonsBySearch } from '../../utils/apiUtils';
import TypeFilter from './TypeFilter';
import Row from './Row';
import { PokemonType } from '../../types/Pokemon';
import { useDataContext } from '../../contexts/DataContext';
import classes from '../../styles/table/MainTable.module.css';
import PageButtons from '../buttons/PageButtons';

const MainTable: React.FC = () => {
  const { tablePokemons, setTablePokemons } = useDataContext();
  const [totalPokemonCount, setTotalPokemonCount] = useState<number>(0);
  const [type, setType] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');

  const { refetch } = useQuery({
    queryKey: [query],
    queryFn: fetchPokemonsBySearch,
    enabled: false,
  });

  const queryBuilder = useCallback(() => {
    let newQuery = '';

    if (type) {
      newQuery = ` types:${type}`;
    }
    if(page > 1) {
      newQuery += `&page=${page}`;
    }
    setQuery(newQuery);
  }, [type, page]);

  useEffect(() => {
    queryBuilder();
  }, [type, queryBuilder]);

  useEffect(() => {
    setPage(1);
  }, [type]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, status } = await refetch();
      if (status === 'success' && data) {
        setTablePokemons(data.pokemons as PokemonType[]);
        setTotalPokemonCount(data.count);
      } else {
        console.error('Failed to fetch data', status);
      }
    };

    fetchData();
  }, [query, refetch, setTablePokemons]);

  return (
    <div className={classes.tableContainer}>
      <TypeFilter setType={setType} />
      <div className={classes.grid}>
        {tablePokemons?.map((pokemon: PokemonType) => (
          <div key={pokemon.id} className={classes.cell}>
            <Row {...pokemon} />
          </div>
        ))}
      </div>
      <PageButtons page={page} setPage={setPage} totalPokemonCount={totalPokemonCount}/>
    </div>
  );
};

export default MainTable;
