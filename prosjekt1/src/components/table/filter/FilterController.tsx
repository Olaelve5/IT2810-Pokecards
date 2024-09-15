import { useCallback, useEffect, useState } from "react";
import { fetchPokemonsBySearch } from "../../../utils/apiUtils";
import { useQuery } from "@tanstack/react-query";
import { useDataContext } from "../../../contexts/DataContext";
import { PokemonType } from "../../../types/Pokemon";

interface FilterControllerProps {
    type: string;
    minHp: number;
    maxHp: number;
    page: number;
    setTotalPokemonCount: (count: number) => void;
    shouldSearch: boolean;
    setShouldSearch: (shouldSearch: boolean) => void;
}

const FilterController = ({...props}: FilterControllerProps) => {
    const {setTablePokemons} = useDataContext();
    const {type, minHp, maxHp, page, setTotalPokemonCount, shouldSearch, setShouldSearch} = props;
    const [query, setQuery] = useState<string>('');
    const [pageQuery, setPageQuery] = useState<string>('');

    const { refetch } = useQuery({
        queryKey: [query, pageQuery],
        queryFn: fetchPokemonsBySearch,
        enabled: false,
    });

    const queryBuilder = useCallback(() => {
        let newQuery = ` hp:[${minHp} TO ${maxHp}]`;

        if (type) {
            newQuery += ` types:${type}`;
        }

        setQuery(newQuery);
    }, [type, minHp, maxHp]);

    const pageQueryBuilder = useCallback(() => {
        const newPageQuery = `&page=${page}`;
        setPageQuery(newPageQuery);
    }, [page]);

    useEffect(() => {
        if (shouldSearch) {
            queryBuilder();
            setShouldSearch(false);
        }
    }, [queryBuilder, shouldSearch, setShouldSearch]);

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