import React, { useEffect, useState } from 'react';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import classes from '../../styles/FavouriteButton.module.css';
import { useDataContext } from '../../contexts/DataContext';
import { addFavoritePokemon, removeFavoritePokemon, isFavoritePokemon } from '../../utils/localStorageUtils';

interface FavouriteButtonProps {
  pokemonId: string;
}

const FavouriteButton: React.FC<FavouriteButtonProps> = ({}) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const { activePokemon } = useDataContext();

  useEffect(() => {
    if (activePokemon) {
      setIsFavourite(isFavoritePokemon(activePokemon.id));
    }
  }, [activePokemon]);

  const toggleFavourite = () => {
    if (!activePokemon) {
      return;
    }
    if (isFavourite) {
      removeFavoritePokemon(activePokemon.id);
    } else {
      addFavoritePokemon(activePokemon.id);
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <button className={classes.favouriteButton} onClick={toggleFavourite}>
      {isFavourite ? <IconStarFilled color="lightblue" /> : <IconStar />}
    </button>
  );
};

export default FavouriteButton;
