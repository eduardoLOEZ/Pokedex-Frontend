export interface Ability {
  name: string;
}

export interface Pokemon {
  name: string;
  image: string;
  abilities: Ability[];
}

export interface DetailedPokemon extends Pokemon {
  base_experience: number;
  height: number;
  weight: number;
}
