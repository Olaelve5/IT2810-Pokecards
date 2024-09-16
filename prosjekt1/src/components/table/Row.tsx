import React, { useState, useEffect } from 'react';
import { PokemonType } from '../../types/Pokemon';
import { useDataContext } from '../../contexts/DataContext';
import classes from '../../styles/table/Row.module.css';

const Row: React.FC<PokemonType> = (data) => {
  const [localData, setLocalData] = useState<PokemonType>(data);
  const { activePokemon, setActivePokemon } = useDataContext();

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  const handleClick = () => {
    if (activePokemon && activePokemon.id === localData.id) return;
    setActivePokemon(localData);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div onClick={handleClick} className={classes.container}>
      <h4>{localData.name}</h4>
      <img src={localData.images.small} alt={localData.name} className={classes.image} />
    </div>
  );
};

export default Row;