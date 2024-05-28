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
          "https://pokedex-backend-ooi4.onrender.com/api/pokemons",
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
    <div>
      <nav className="bg-red-600 p-4">
        <h1 className="text-3xl font-bold text-white text-center">Pokédex</h1>
      </nav>
      <div className="container mx-auto p-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar Pokémon"
          className="mb-4 p-2 border rounded w-full md:w-1/2 lg:w-1/3 mx-auto block"
        />
        {loading ? (
          <div className="text-center text-gray-500">Cargando Pokémons...</div>
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
    </div>
  );
};

export default Pokedex;
