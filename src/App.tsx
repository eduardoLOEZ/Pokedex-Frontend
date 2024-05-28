import Pokedex from "./components/Pokedex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonDetails from "./components/PokemonDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
