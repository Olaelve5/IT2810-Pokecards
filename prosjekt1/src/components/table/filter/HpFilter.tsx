import classes from '../../../styles/table/HpFilter.module.css';

interface HpFilterProps {
    setMinHp: (minHp: number) => void;
    setMaxHp: (maxHp: number) => void;
    minHp: number;
    maxHp: number;
}

const HpFilter = ({...props}: HpFilterProps) => {
    const {setMinHp, setMaxHp, minHp, maxHp} = props;

    const handleMinHpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setMinHp(value);
        if (value > maxHp) {
            setMaxHp(value);
        }
    };

    const handleMaxHpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setMaxHp(value);
        if (value < minHp) {
            setMinHp(value);
        }
    };

    return (
        <div className={classes.container}>
            <p>HP</p>
            <div className={classes.inputContainer}>
                <input
                    type="number"
                    min="0"
                    max="200"
                    value={minHp}
                    onChange={handleMinHpChange}
                />
                <span> - </span>
                <input
                    type="number"
                    min="0"
                    max="200"
                    value={maxHp}
                    onChange={handleMaxHpChange}
                />
            </div>
        </div>
    );
};

export default HpFilter;