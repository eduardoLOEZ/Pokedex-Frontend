import { Pokemon } from "../interfaces/pokemon.interface";

interface PokemonCardsProps {
  pokemon: Pokemon;
}

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
