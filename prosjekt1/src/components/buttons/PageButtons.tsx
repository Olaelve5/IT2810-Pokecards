import { useEffect, useState } from 'react';
import classes from '../../styles/buttons/PageButtons.module.css';

interface PageButtonsProps {
    page: number;
    setPage: (page: number) => void;
    totalPokemonCount: number;
}

const PageButtons = ({page, setPage, totalPokemonCount}: PageButtonsProps) => {
    const [totalPages, setTotalPages] = useState<number>(0);

    useEffect(() => {
        setTotalPages(Math.ceil(totalPokemonCount / 10));
    }, [totalPokemonCount]);

    if (totalPokemonCount === 0) {
        return null;
    }

    return (
        <div className={classes.container}>
            <button onClick={() => setPage(page - 1)} disabled={page === 1} className={classes.button}>Forrige</button>
            <div className={classes.textContainer}>
                <span>{page}</span>
                <span>/ {totalPages}</span>
            </div>
            <button onClick={() => setPage(page + 1)} disabled={page >= totalPages} className={classes.button}>Neste</button>
        </div>
    );
};

export default PageButtons;