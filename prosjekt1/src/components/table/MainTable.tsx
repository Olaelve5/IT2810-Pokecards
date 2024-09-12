import React, { useState, useEffect, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPokemonsBySearch } from '../../utils/apiUtils'; // Adjust the import path as needed
import TypeFilter from './TypeFilter'; // Adjust the import path as needed
import Row from './Row'; // Adjust the import path as needed
import { PokemonType } from '../../types/Pokemon'; // Adjust the import path as needed

const MainTable: React.FC = () => {
    const [type, setType] = useState<string>('');
    const [pokemons, setPokemons] = useState<PokemonType[]>([]);
    const [query, setQuery] = useState<string>('');

    const { refetch } = useQuery({
        queryKey: [query],
        queryFn: fetchPokemonsBySearch,
        enabled: false, // Disable automatic query execution
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
            if (query) {
                const { data, status } = await refetch();
                if (status === 'success' && data) {
                    setPokemons(data as PokemonType[]);
                }
            }
        };

        fetchData();
    }, [query, refetch]);

    return (
        <div>
            <TypeFilter setType={setType} />
            {pokemons?.map((pokemon: PokemonType) => (
                <Row key={pokemon.id} {...pokemon} />
            ))}
        </div>
    );
};

export default MainTable;