import React, { useState } from 'react';
import classes from '../styles/Search.module.css';
import { useDataContext } from '../contexts/DataContext';

const Search = () => {
    const [input, setInput] = useState<string>('');
    const { setName } = useDataContext();

    const handleClick = () => {
        setName(input);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    return (
        <div className={classes.container}>
            <input
            type="text" 
            placeholder="Search..." 
            onChange={handleChange} 
            className={classes.input}
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