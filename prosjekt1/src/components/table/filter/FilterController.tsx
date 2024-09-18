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
    orderBy: string;
    sortDirection: 'asc' | 'desc';
}

const FilterController = ({...props}: FilterControllerProps) => {
    const {setTablePokemons, showFavorites} = useDataContext();

    const {type, page, orderBy, sortDirection,
        setTotalPokemonCount, name} = props;

    const [query, setQuery] = useState<string>('');
    const [pageQuery, setPageQuery] = useState<string>('');

    const { refetch } = useQuery({
        queryKey: [query, pageQuery, orderBy, sortDirection],
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
        setQuery(newQuery);
    }, [type, name]);

    const pageQueryBuilder = useCallback(() => {
        if(showFavorites) return;
        const newPageQuery = `&page=${page}`;
        setPageQuery(newPageQuery);
    }, [page, showFavorites]);

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
        
    }, [query, sortDirection, pageQuery, refetch, setTablePokemons, setTotalPokemonCount, orderBy]);

    return null;
}

export default FilterController;