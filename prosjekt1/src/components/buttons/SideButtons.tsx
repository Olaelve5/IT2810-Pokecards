import { IconCircleArrowLeft, IconCircleArrowRight } from '@tabler/icons-react';
import classes from '../../styles/buttons/SideButtons.module.css';
import { useDataContext } from '../../contexts/DataContext';
import { useQuery } from '@tanstack/react-query';
import { fetchPokemonByNumber } from '../../utils/apiUtils';


interface SideButtonProps {
  direction: number;
  Icon: typeof IconCircleArrowLeft | typeof IconCircleArrowRight;
}

const SideButton = ({ direction, Icon }: SideButtonProps) => {
  const { activePokemon, setActivePokemon, globalTotalPokemonCount } = useDataContext();
  const { number } = activePokemon || {};

  const getQueryKey = () => {
    if (number) {
      let value = parseInt(number) + direction;
      if (value < 1) {
        value = globalTotalPokemonCount;
      } else if (value > globalTotalPokemonCount) {
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
    <button className={classes.button} onClick={handleClick}>
      <Icon size={45} color="white" className={classes.icon} />
    </button>
  );
};

export const LeftButton = () => (
  <SideButton direction={-1} Icon={IconCircleArrowLeft} />
);

export const RightButton = () => (
  <SideButton direction={1} Icon={IconCircleArrowRight} />
);
