import React, { useState } from 'react';
import classes from '../styles/Search.module.css';

interface SearchProps {
    setName: (name: string) => void;
}

const Search: React.FC<SearchProps> = ({ setName }) => {
    const [input, setInput] = useState<string>('');

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