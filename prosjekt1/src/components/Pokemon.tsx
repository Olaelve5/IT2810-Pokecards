import { fetchPokemon } from '../utils/apiUtils';
import { useQuery } from '@tanstack/react-query';
import classes from '../styles/Pokemon.module.css';

interface PokemonProps {
  name: string;
}

const Pokemon = ({ name }: PokemonProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [name],
    queryFn: fetchPokemon,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Pokemon not found</div>;
  console.log(data);
  console.log(data?.images);

  return (
    <div className={classes.container}>
      {data?.images?.large && <img src={data.images.large} alt={data.name} />}
      <h2>{data?.name}</h2>
    </div>
  );
};

export default Pokemon;
