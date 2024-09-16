import { useCallback, useEffect, useState } from "react";
import { fetchPokemonsBySearch } from "../../../utils/apiUtils";
import { useQuery } from "@tanstack/react-query";
import { useDataContext } from "../../../contexts/DataContext";
import { PokemonType } from "../../../types/Pokemon";

interface FilterControllerProps {
    type: string;
    page: number;
    setTotalPokemonCount: (count: number) => void;
    name: string;
}

const FilterController = ({...props}: FilterControllerProps) => {
    const {setTablePokemons} = useDataContext();

    const {type, page, 
        setTotalPokemonCount, 
        name} = props;

    const [query, setQuery] = useState<string>('');
    const [pageQuery, setPageQuery] = useState<string>('');

    const { refetch } = useQuery({
        queryKey: [query, pageQuery],
        queryFn: fetchPokemonsBySearch,
        enabled: false,
    });

    const queryBuilder = useCallback(() => {
        let newQuery = ``;

        if (type) {
            newQuery += ` types:${type}`;
        }

        if(name) {
            newQuery += ` name:${name}*`;
        }
        console.log(newQuery);
        setQuery(newQuery);
    }, [type, name]);

    const pageQueryBuilder = useCallback(() => {
        const newPageQuery = `&page=${page}`;
        setPageQuery(newPageQuery);
    }, [page]);

    useEffect(() => {
        queryBuilder();
    }, [queryBuilder, name, type]);

    useEffect(() => {
        pageQueryBuilder();
    }, [page, pageQueryBuilder]);

    useEffect(() => {
        const fetchData = async () => {
            const { data, status } = await refetch();
            if (status === 'success' && data) {
                setTablePokemons(data.pokemons as PokemonType[]);
                setTotalPokemonCount(data.count);
            } else {
                console.error('Failed to fetch data', status);
            }
        };
        if(query || pageQuery) {
          fetchData();
        }
        
    }, [query, pageQuery, refetch, setTablePokemons, setTotalPokemonCount]);

    return null;
}

export default FilterController;