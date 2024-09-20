import { useEffect, useState } from 'react';
import classes from '../../styles/buttons/PageButtons.module.css';
import { useDataContext } from '../../contexts/DataContext';
import { getFavoritePokemonsByPage } from '../../utils/localStorageUtils';

interface PageButtonsProps {
  page: number;
  setPage: (page: number) => void;
  totalPokemonCount: number;
}

const PageButtons = ({ page, setPage, totalPokemonCount }: PageButtonsProps) => {
  const [totalPages, setTotalPages] = useState<number>(0);
  const { showFavorites, setTablePokemons } = useDataContext();

  useEffect(() => {
    setTotalPages(Math.ceil(totalPokemonCount / 12));
  }, [totalPokemonCount]);

  if (totalPokemonCount === 0) {
    return null;
  }

  const handleClick = (direction: number) => {
    if (!showFavorites) {
      setPage(page + direction);
      return;
    }
    const pokemons = getFavoritePokemonsByPage(page + direction, 12);
    setTablePokemons(pokemons);
    setPage(page + direction);
  };

  return (
    <div className={classes.container}>
      <button onClick={() => handleClick(-1)} disabled={page === 1} className={classes.button}>
        Previous
      </button>
      <div className={classes.textContainer}>
        <span>{page}</span>
        <span>/ {totalPages}</span>
      </div>
      <button onClick={() => handleClick(1)} disabled={page >= totalPages} className={classes.button}>
        Next
      </button>
    </div>
  );
};

export default PageButtons;
