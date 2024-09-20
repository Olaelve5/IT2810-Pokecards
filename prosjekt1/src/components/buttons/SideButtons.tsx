import { IconCircleArrowLeft, IconCircleArrowRight } from '@tabler/icons-react';
import classes from '../../styles/buttons/SideButtons.module.css';
import { useDataContext } from '../../contexts/DataContext';
import { useQuery } from '@tanstack/react-query';
import { fetchPokemonByNumber } from '../../utils/apiUtils';


interface SideButtonProps {
  direction: number;
  Icon: typeof IconCircleArrowLeft | typeof IconCircleArrowRight;
  testId?: string;
}

const SideButton = ({ direction, Icon, testId }: SideButtonProps) => {
  const { activePokemon, setActivePokemon } = useDataContext();
  const { number } = activePokemon || {};

  const getQueryKey = () => {
    if (number) {
      let value = parseInt(number) + direction;
      if (value < 1) {
        value = 116;
      } else if (value > 116) {
        value = 1;
      }
      return [value];
    }
    return [];
  }

  const { refetch } = useQuery({
    queryKey: getQueryKey(),
    queryFn: fetchPokemonByNumber,
    enabled: false,
  });

  const handleClick = async () => {
    if (number) {
      const { data, status } = await refetch();
      if (status === 'success' && data) {
        setActivePokemon(data);
      }
    }
  };

  return (
    <button 
    className={classes.button} 
    onClick={handleClick}
    data-testid={testId}
    >
      <Icon color="white" className={classes.icon} />
    </button>
  );
};

export const LeftButton = () => (
  <SideButton direction={-1} Icon={IconCircleArrowLeft} />
);

export const RightButton = () => (
  <SideButton direction={1} Icon={IconCircleArrowRight} testId='nextPokemonButton'/>
);
