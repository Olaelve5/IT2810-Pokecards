import {IconCircleArrowLeft, IconCircleArrowRight} from '@tabler/icons-react';
import classes from '../../styles/SideButtons.module.css';
import { useDataContext } from '../../contexts/DataContext';

const helper = (id: string, direction: number) => {
    const idName = id.split('-')[0];
    const idNumber = parseInt(id.split('-')[1]);
    if(idNumber + direction <= 0) return id;

    const newId = `${idName}-${idNumber + direction}`;
    return newId;
};


export const LeftButton = () => {
    const { setId, id } = useDataContext();

    const handleClick = () => {
        const newId = helper(id, -1);
        if(newId) setId(newId);
    };

    return (
        <button className={classes.button} onClick={handleClick}>
            <IconCircleArrowLeft size={40} color='white' className={classes.icon}/>
        </button>
    );
};

export const RightButton = () => {
    const { setId, id } = useDataContext();

    const handleClick = () => {
        const newId = helper(id, 1);
        if(newId) setId(newId);
    };

    return (
        <button className={classes.button} onClick={handleClick}>
            <IconCircleArrowRight size={40} color='white' className={classes.icon}/>
        </button>
    );
};