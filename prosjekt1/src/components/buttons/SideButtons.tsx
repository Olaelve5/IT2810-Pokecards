import { IconCircleArrowLeft, IconCircleArrowRight } from '@tabler/icons-react';
import classes from '../../styles/SideButtons.module.css';
import { useDataContext } from '../../contexts/DataContext';
import { useQuery } from '@tanstack/react-query';
import { fetchPokemonById } from '../../utils/apiUtils';

const getNewId = (id: string, direction: number) => {
    if (!id) return '';
    const [idName, idNumber] = id.split('-');
    const newIdNumber = parseInt(idNumber) + direction;
    if (newIdNumber <= 0) return id;

    return `${idName}-${newIdNumber}`;
};

interface SideButtonProps {
  direction: number;
  Icon: typeof IconCircleArrowLeft | typeof IconCircleArrowRight;
}

const SideButton = ({ direction, Icon }: SideButtonProps) => {
  const { activePokemon, setActivePokemon } = useDataContext();
  const { id } = activePokemon || {};

  const { refetch } = useQuery({
    queryKey: id ? [getNewId(id, direction)] : [],
    queryFn: fetchPokemonById,
    enabled: false,
  });

  const handleClick = async () => {
    if (id) {
      const { data, status } = await refetch();
      if (status === 'success' && data) {
        setActivePokemon(data);
      }
    }
  };

  return (
    <button className={classes.button} onClick={handleClick}>
      <Icon size={40} color="white" className={classes.icon} />
    </button>
  );
};

export const LeftButton = () => (
  <SideButton direction={-1} Icon={IconCircleArrowLeft} />
);

export const RightButton = () => (
  <SideButton direction={1} Icon={IconCircleArrowRight} />
);
