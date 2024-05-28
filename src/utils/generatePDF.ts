import jsPDF from "jspdf";
import { DetailedPokemon } from "../interfaces/pokemon.interface";

/**
 * Función para generar un archivo PDF con la información de un Pokémon detallado.
 *
 * @param pokemon - Objeto con los detalles del Pokémon
 */

export const generatePDF = (pokemon: DetailedPokemon) => {
  const doc = new jsPDF(); // Crea una nueva instancia de jsPDF
  // Establece el título del documento
  doc.setFontSize(20);

  // Agrega detalles del Pokémon al documento
  doc.text(pokemon.name.toUpperCase(), 20, 20);
  doc.setFontSize(12);
  doc.text(`Base Experience: ${pokemon.base_experience}`, 20, 30);
  doc.text(`Height: ${pokemon.height}`, 20, 40);
  doc.text(`Weight: ${pokemon.weight}`, 20, 50);
  doc.text("Abilities:", 20, 60);
  pokemon.abilities.forEach((ability, index) => {
    doc.text(`- ${ability.name}`, 20, 70 + index * 10);
  });

  // Agregamos la imagen del Pokémon al documento si está disponible
  if (pokemon.image) {
    const img = new Image();
    img.src = pokemon.image;
    img.onload = () => {
      doc.addImage(img, "JPEG", 150, 20, 50, 50);
      doc.save(`${pokemon.name}.pdf`); // Guarda el documento como un archivo PDF
    };
  } else {
    doc.save(`${pokemon.name}.pdf`); // Guarda el documento como un archivo PDF sin imagen
  }
};
