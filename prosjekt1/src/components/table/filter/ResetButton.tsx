import { IconAdjustmentsOff } from '@tabler/icons-react';
import classes from '../../../styles/table/ResetButton.module.css';

interface ResetButtonProps {
  resetFilters: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ resetFilters }) => {
  return (
    <button className={classes.button} onClick={resetFilters}>
      <IconAdjustmentsOff size={20} />
      Reset
    </button>
  );
};

export default ResetButton;
