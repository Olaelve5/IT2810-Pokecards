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

export type PokemonType = {
    id: number;
    name: string;
    stats: Stat[];
    sprites: Sprites;
    // Add other properties as needed
};