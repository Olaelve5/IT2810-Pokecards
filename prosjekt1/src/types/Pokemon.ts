type StatDetail = {
  name: string;
  url: string;
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: StatDetail;
};

type Sprites = {
  front_default: string;
};

type Images = {
  small: string;
  large: string;
};

export type PokemonType = {
  id: string;
  name: string;
  stats: Stat[];
  sprites: Sprites;
  images: Images;
  hp: number;
  // Add other properties as needed
};
