type Images = {
  small: string;
  large: string;
};

export type PokemonType = {
  id: string;
  name: string;
  images: Images;
  hp?: number;
  types: string[];
  // Add other properties as needed
};
