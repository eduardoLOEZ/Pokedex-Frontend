import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { generatePDF } from "../utils/generatePDF";
import { DetailedPokemon } from "../interfaces/pokemon.interface";
import { Link } from "react-router-dom";

export default function PokemonDetails() {
  const { name } = useParams<{ name: string }>();
  const [pokemon, setPokemon] = useState<DetailedPokemon | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/pokemons/${name}`
        );
        setPokemon(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  if (!pokemon) return <div className="text-center">Cargando Pokemon...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={pokemon.image}
              alt={pokemon.name}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {pokemon.name}
            </div>
            <ul className="mt-2 text-gray-500">
              <li>
                <span className="font-bold">Base Experience:</span>{" "}
                {pokemon.base_experience}
              </li>
              <li>
                <span className="font-bold">Height:</span> {pokemon.height}
              </li>
              <li>
                <span className="font-bold">Weight:</span> {pokemon.weight}
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-gray-700 font-bold">Habilidades:</p>
              <ul className="list-disc list-inside text-gray-500">
                {pokemon.abilities.map((ability, index) => (
                  <li key={index}>{ability.name}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => generatePDF(pokemon)} // Llama a la función generatePDF
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Generar PDF
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Link
          to="/"
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Regresar
        </Link>
      </div>
    </div>
  );
}
