import classes from '../styles/PokemonCard.module.css';
import { useDataContext } from '../contexts/DataContext';
import FavouriteButton from './buttons/FavouriteButton';

const Pokemon = () => {
  const { activePokemon } = useDataContext();

  if (!activePokemon) {
    return <div className={classes.container}>No Pokemon selected</div>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.name}>{activePokemon.name}</div>
      {activePokemon.images.large && <img src={activePokemon.images.large} alt={activePokemon.name} className={classes.image}/>}
      <div className={classes.favoriteIdContainer}>
        <div className={classes.id}>#{activePokemon.number}</div>
        <FavouriteButton pokemonId={''} />
      </div>
    </div>
  );
};

export default Pokemon;
