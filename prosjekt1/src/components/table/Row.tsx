import React, { useState, useEffect } from 'react';
import { PokemonType } from '../../types/Pokemon';
import { useDataContext } from '../../contexts/DataContext';
import classes from '../../styles/table/Row.module.css';
import { IconStarFilled } from '@tabler/icons-react';
import { isFavoritePokemon } from '../../utils/localStorageUtils';

const Row: React.FC<PokemonType> = (pokemon) => {
  const [localData, setLocalData] = useState<PokemonType>(pokemon);
  const { activePokemon, setActivePokemon } = useDataContext();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    setLocalData(pokemon);
  }, [pokemon]);

  const handleClick = () => {
    if (activePokemon && activePokemon.number === localData.number) return;
    setActivePokemon(localData);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setIsFavorite(isFavoritePokemon(localData));    
  }, [localData]);

  return (
    <div onClick={handleClick} className={classes.container}>
      <div className={classes.nameIdContainer}>
        <h4>{localData.name}</h4>
        <p>#{localData.number}</p>
      </div>
      <img src={localData.images.small} alt={localData.name} className={classes.image} />
      {isFavorite && <IconStarFilled className={classes.star}/>}
    </div>
  );
};

export default Row;
