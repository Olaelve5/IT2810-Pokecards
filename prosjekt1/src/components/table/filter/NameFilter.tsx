import React, { useMemo } from 'react';
import { debounce } from 'lodash';
import classes from '../../../styles/table/NameFilter.module.css';

interface NameFilterProps {
    setName: (name: string) => void;
}

const NameFilter = ({ setName }: NameFilterProps) => {
    // Function to delay the setName function, so it doesnt get called on every key press
    const debouncedSetName = useMemo(() => debounce(setName, 800), [setName]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        debouncedSetName(event.target.value);
    };

    return (
        <div className={classes.container}>
            <p>Name</p>
            <input
                type="text"
                placeholder="Ex: Pikachu"
                onChange={handleChange}
                className={classes.input}
            />
        </div>
    );
};

export default NameFilter;