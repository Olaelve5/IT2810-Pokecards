import { fetchPokemon } from '../utils/apiUtils';
import { useQuery } from '@tanstack/react-query';
import classes from '../styles/Pokemon.module.css';
import { useDataContext } from '../contexts/DataContext';
import FavouriteButton from './buttons/FavouriteButton';

const Pokemon = () => {
  const { name } = useDataContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: [name],
    queryFn: fetchPokemon,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Pokemon not found</div>;

  return (
    <div className={classes.container}>
      {data?.images?.large && <img src={data.images.large} alt={data.name} />}
      <h2>{data?.name}</h2>
      <FavouriteButton pokemonId={''} />
    </div>
  );
};

export default Pokemon;
