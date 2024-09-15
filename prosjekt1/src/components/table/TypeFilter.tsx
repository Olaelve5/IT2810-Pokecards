import classes from '../../styles/table/TypeFilter.module.css';

const types = [
    'Colorless',
    'Fighting',
    'Fire',
    'Grass',
    'Lightning',
    'Psychic',
    'Water',
];

interface TypeFilterProps {
    setType: (type: string) => void;
}

const TypeFilter = ({setType}: TypeFilterProps) => {
    return (
        <div className={classes.container}>
            <p>Type </p>
            <select onChange={(e) => setType(e.target.value)} className={classes.select}>
                <option value="">All</option>
                {types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
        </div>
    )
}

export default TypeFilter;