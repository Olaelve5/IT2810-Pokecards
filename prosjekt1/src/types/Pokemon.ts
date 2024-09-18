type Images = {
  small: string;
  large: string;
};

export type PokemonType = {
  number: string;
  name: string;
  images: Images;
  hp?: number;
  types: string[];
};
