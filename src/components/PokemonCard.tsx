import { Pokemon } from "../interfaces/pokemon.interface";

//Porps tipados que se pasaran a la card
interface PokemonCardsProps {
  pokemon: Pokemon;
}

/**
 * PokemonCard Component
 *
 * Componente que muestra la información de un Pokémon en una tarjeta.
 */

export default function PokemonCard({ pokemon }: PokemonCardsProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img
        src={pokemon.image}
        className="w-30 h-30 object-cover mb-4 rounded"
      />
      <h2 className="text-xl font-bold capitalize mb-2">{pokemon.name}</h2>
      <ul>
        {pokemon.abilities.map((ability, index) => (
          <li key={index} className="text-gray-700">
            {ability.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
