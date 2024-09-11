import React, { useEffect, useState } from 'react';
import classes from '../styles/Search.module.css';
import { useDataContext } from '../contexts/DataContext';
import { useQuery } from '@tanstack/react-query';
import { PokemonType } from '../types/Pokemon';
import { fetchPokemonByName } from '../utils/apiUtils';

const Search = () => {
    const [input, setInput] = useState<string>('');
    const { activePokemon, setActivePokemon } = useDataContext();

    const { refetch } = useQuery({
        queryKey: [input],
        queryFn: fetchPokemonByName,
        enabled: false, // Disable automatic query execution
    });

    const handleClick = async () => {
        const { data, status } = await refetch();
        if (status === 'success' && data) {
          setActivePokemon(data as PokemonType);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    useEffect(() => {
        setInput('');
    }, [activePokemon]);

    return (
        <div className={classes.container}>
            <input
            type="text" 
            placeholder="Search..." 
            onChange={handleChange} 
            className={classes.input}
            value={input}
            />

            <button
            type="submit" 
            onClick={handleClick}
            className={classes.button}
            >
                Search
            </button>
        </div>
    )
}

export default Search;