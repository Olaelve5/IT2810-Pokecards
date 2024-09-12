import React, { useState, useEffect, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPokemonsBySearch } from '../../utils/apiUtils';
import TypeFilter from './TypeFilter';
import Row from './Row';
import { PokemonType } from '../../types/Pokemon';
import classes from '../../styles/table/MainTable.module.css';

const MainTable: React.FC = () => {
  const [type, setType] = useState<string>('');
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [query, setQuery] = useState<string>('');

  const { refetch } = useQuery({
    queryKey: [query],
    queryFn: fetchPokemonsBySearch,
    enabled: false,
  });

  const queryBuilder = useCallback(() => {
    if (type) {
      setQuery(`types:${type.toLowerCase()}`);
    } else {
      setQuery('');
    }
  }, [type]);

  useEffect(() => {
    queryBuilder();
  }, [type, queryBuilder]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, status } = await refetch();
      if (status === 'success' && data) {
        setPokemons(data as PokemonType[]);
      } else {
        console.error('Failed to fetch data', status);
      }
    };

    fetchData();
  }, [query, refetch]);

  return (
    <div className={classes.tableContainer}>
      <TypeFilter setType={setType} />
      <div className={classes.grid}>
        {pokemons?.map((pokemon: PokemonType) => (
          <div key={pokemon.id} className={classes.cell}>
            <Row {...pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainTable;
