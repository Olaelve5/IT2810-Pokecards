import React, { useState, useEffect } from 'react';
import { PokemonType } from '../../types/Pokemon';
import { useDataContext } from '../../contexts/DataContext';
import classes from '../../styles/table/Row.module.css';
import { IconStarFilled } from '@tabler/icons-react';
import { isFavoritePokemon } from '../../utils/localStorageUtils';

const Row: React.FC<PokemonType> = (pokemon) => {
  const [localPokemon, setLocalPokemon] = useState<PokemonType>(pokemon);
  const { activePokemon, setActivePokemon } = useDataContext();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    setLocalPokemon(pokemon);
  }, [pokemon]);

  const handleClick = () => {
    if (activePokemon && activePokemon.number === localPokemon.number) return;
    setActivePokemon(localPokemon);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setIsFavorite(isFavoritePokemon(localPokemon));
  }, [localPokemon]);

  return (
    <div onClick={handleClick} className={classes.container}>
      <div className={classes.nameIdContainer}>
        <h4>{localPokemon.name}</h4>
        <p>#{localPokemon.number}</p>
      </div>
      <img src={localPokemon.images.small} alt={localPokemon.name} className={classes.image} />
      {isFavorite && <IconStarFilled className={classes.star} />}
    </div>
  );
};

export default Row;
