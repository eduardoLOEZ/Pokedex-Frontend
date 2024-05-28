/**
 * Interface para representar una habilidad de un Pokémon.
 */
export interface Ability {
  name: string; // Nombre de la habilidad
}

/**
 * Interface para representar un Pokémon básico.
 */
export interface Pokemon {
  name: string; // Nombre del Pokémon
  image: string; // URL de la imagen del Pokémon
  abilities: Ability[]; // Lista de habilidades del Pokémon
}

/**
 * Interface extendida para representar un Pokémon con detalles adicionales.
 */
export interface DetailedPokemon extends Pokemon {
  base_experience: number; // Experiencia base del Pokémon
  height: number; // Altura del Pokémon
  weight: number; // Peso del Pokémon
}
