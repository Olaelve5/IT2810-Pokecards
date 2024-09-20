import classes from '../../../styles/table/TypeFilter.module.css';
import { useDataContext } from '../../../contexts/DataContext';

const types = ['Colorless', 'Fighting', 'Fire', 'Grass', 'Lightning', 'Psychic', 'Water'];

interface TypeFilterProps {
  type: string;
  setType: (type: string) => void;
}

const TypeFilter = ({ setType, type }: TypeFilterProps) => {
  const { showFavorites } = useDataContext();

  return (
    <div className={classes.container}>
      <p>Type </p>
      <select
        disabled={showFavorites}
        onChange={(e) => setType(e.target.value)}
        className={classes.select}
        value={type}
      >
        <option value="">All</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeFilter;
