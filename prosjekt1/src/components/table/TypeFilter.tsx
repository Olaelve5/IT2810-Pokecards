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
        <div>
            <select onChange={(e) => setType(e.target.value)}>
                <option value="">All</option>
                {types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
        </div>
    )
}

export default TypeFilter;