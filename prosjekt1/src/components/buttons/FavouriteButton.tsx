import React, { useEffect, useState } from 'react';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import classes from '../../styles/buttons/FavouriteButton.module.css';
import { useDataContext } from '../../contexts/DataContext';
import { addFavoritePokemon, removeFavoritePokemon, isFavoritePokemon } from '../../utils/localStorageUtils';

const FavouriteButton = () => {
  const [isFavourite, setIsFavourite] = useState(false);
  const { activePokemon } = useDataContext();

  useEffect(() => {
    if (activePokemon) {
      setIsFavourite(isFavoritePokemon(activePokemon));
    }
  }, [activePokemon]);

  const toggleFavourite = () => {
    if (!activePokemon) {
      return;
    }
    if (isFavourite) {
      removeFavoritePokemon(activePokemon);
    } else {
      addFavoritePokemon(activePokemon);
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <button className={classes.favouriteButton} onClick={toggleFavourite}>
      {isFavourite ? <IconStarFilled color="rgb(255, 213, 0)" /> : <IconStar />}
    </button>
  );
};

export default FavouriteButton;
