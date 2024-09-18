import React, { useEffect, useMemo, useState } from 'react';
import { IconXboxXFilled } from '@tabler/icons-react';
import { debounce } from 'lodash';
import { useDataContext } from '../../../contexts/DataContext';
import classes from '../../../styles/table/NameFilter.module.css';

interface NameFilterProps {
    name: string
    setName: (name: string) => void;
}

const NameFilter = ({ setName, name }: NameFilterProps) => {
    const { showFavorites } = useDataContext();
    const [localName, setLocalName] = useState(name);

    // Function to delay the setName function, so it doesnt get called on every key press
    const debouncedSetName = useMemo(() => debounce(setName, 800), [setName]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalName(event.target.value);
        debouncedSetName(event.target.value);
    };

    useEffect(() => {
        setLocalName(name);
    }, [name]);

    return (
        <div className={classes.container}>
            <p>Name</p>
            <input
                type="text"
                value={localName}
                disabled={showFavorites}
                placeholder="Ex: Pikachu"
                onChange={handleChange}
                className={classes.input}
            />
            {localName &&
            <IconXboxXFilled className={classes.xIcon} size={16} onClick={() => {
                setLocalName('');
                setName('');
            }} />
            }
        </div>
    );
};

export default NameFilter;