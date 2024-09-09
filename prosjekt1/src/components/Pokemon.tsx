import { fetchPokemon } from "../utils/apiUtils"
import { useQuery } from "@tanstack/react-query";
import classes from '../styles/Pokemon.module.css'

interface PokemonProps {
    name: string;
}

const Pokemon = ({name}: PokemonProps) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: [name],
        queryFn: fetchPokemon
    });

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Pokemon not found</div>

    return (
        <div className={classes.container}>
            {data?.sprites.front_default && <img src={data.sprites.front_default} alt={data.name} />}
            <h2>{data?.name}</h2>
            {data?.stats.map(stat => (
                <div key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}
                </div>
            ))}
        </div>
    )
}

export default Pokemon