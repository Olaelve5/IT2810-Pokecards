import React, { useState } from 'react';
import { IconStar } from '@tabler/icons-react';
import classes from '../../styles/FavouriteButton.module.css';

interface FavouriteButtonProps {
  pokemonId: string;
}

const FavouriteButton: React.FC<FavouriteButtonProps> = ({ pokemonId }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
    // Here you can add logic to save the favorite state, e.g., to local storage or a backend
  };

  return (
    <button className={classes.favouriteButton} onClick={toggleFavourite}>
      <IconStar fill={isFavourite ? 'gold' : 'none'} />
    </button>
  );
};

export default FavouriteButton;
