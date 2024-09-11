import classes from '../styles/Pokemon.module.css';
import { useDataContext } from '../contexts/DataContext';
import FavouriteButton from './buttons/FavouriteButton';

const Pokemon = () => {
  const { activePokemon } = useDataContext();

  if (!activePokemon) {
    return <div className={classes.container}>No Pokemon selected</div>;
  }

  return (
    <div className={classes.container}>
      {activePokemon.images.large && <img src={activePokemon.images.large} alt={activePokemon.name} />}
      <FavouriteButton pokemonId={''} />
    </div>
  );
};

export default Pokemon;
