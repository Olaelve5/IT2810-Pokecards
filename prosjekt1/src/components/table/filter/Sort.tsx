import { IconSortDescending, IconSortAscending } from '@tabler/icons-react';
import classes from '../../../styles/table/Sort.module.css';
import { useDataContext } from '../../../contexts/DataContext';

const sortOptions = [
    'ID',
    'Name',
    'HP',
]

interface SortProps {
    orderBy: string;
    setOrderBy: (orderBy: string) => void;
    sortDirection: 'asc' | 'desc';
    setSortDirection: (sortDirection: 'asc' | 'desc') => void;
}

const Sort = ({setOrderBy, sortDirection, setSortDirection}: SortProps) => {
    const { showFavorites } = useDataContext();

    const handleSortDirection = () => {
        if (sortDirection === 'asc') {
            setSortDirection('desc');
        } else {
            setSortDirection('asc');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let value = e.target.value;

        if (value === 'ID') {
            value = 'number';
        } 
        
        setOrderBy(value);
    }

    return (
        <div className={classes.container}>
            <p>Sort by</p>
            <div className={classes.buttonContainer}>
                <select onChange={handleChange} disabled={showFavorites}>
                    {sortOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
                <button onClick={handleSortDirection} disabled={showFavorites}>
                    {sortDirection === 'asc' ? <IconSortAscending size={20} /> : <IconSortDescending size={20} />}
                </button>
            </div>
        </div>
    )
}

export default Sort;