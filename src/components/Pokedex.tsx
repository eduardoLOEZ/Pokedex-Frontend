import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "../interfaces/pokemon.interface";
import { Link } from "react-router-dom";

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get<Pokemon[]>(
          "http://localhost:3001/api/pokemons",
          {
            params: { search },
          }
        );

        setPokemons(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemons();
  }, [search]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Pokedex</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar Pokémon"
        className="mb-4 p-2 border rounded"
      />
      {loading ? ( // Mostramos el indicador de carga si loading es true
        <div className="text-center text-gray-500">Loading Pokemons...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pokemons.map((pokemon) => (
            <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
