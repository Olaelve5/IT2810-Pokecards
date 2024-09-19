
import { useState } from "react";
import { useDataContext } from "../../contexts/DataContext";
import { PokemonType } from "../../types/Pokemon";
import { getFavoritePokemons, getFavoritePokemonsByPage } from "../../utils/localStorageUtils";
import classes from "../../styles/buttons/FavoritesToggle.module.css";

interface FavoritesToggleProps {
    page: number;
    setPage: (page: number) => void;
    totalPokemonCount: number;
    setTotalPokemonCount: (count: number) => void;
}

const FavoritesToggle = ({page, setPage, setTotalPokemonCount, totalPokemonCount}: FavoritesToggleProps) => {
    const { showFavorites, setShowFavorites, tablePokemons, setTablePokemons } = useDataContext();
    const [originalPokemons, setOriginalPokemons] = useState<PokemonType[]>([]);
    const [originalPage, setOriginalPage] = useState<number>(1);
    const [originalTotalPokemonCount, setOriginalTotalPokemonCount] = useState<number>(0);

    const toggleFavorites = () => {

        if(!showFavorites) {
            setOriginalPage(page);
            setOriginalPokemons(tablePokemons);
            setOriginalTotalPokemonCount(totalPokemonCount);
            const favoritePokemons = getFavoritePokemonsByPage(1, 12);
            setTotalPokemonCount(getFavoritePokemons().length);
            setTablePokemons(favoritePokemons);
            setPage(1);
        } else {
            setTotalPokemonCount(originalTotalPokemonCount);
            setPage(originalPage);
            setTablePokemons(originalPokemons);
        }
        setShowFavorites(!showFavorites);
    }

    return (
        <div className={classes.container}>
            <button onClick={toggleFavorites}>{!showFavorites ? "Show only favorites" : "Show all pokemons"}</button>
        </div>
    )
}

export default FavoritesToggle;