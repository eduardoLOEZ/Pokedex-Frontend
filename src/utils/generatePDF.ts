import jsPDF from "jspdf";
import { DetailedPokemon } from "../interfaces/pokemon.interface";

export const generatePDF = (pokemon: DetailedPokemon) => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text(pokemon.name.toUpperCase(), 20, 20);
  doc.setFontSize(12);
  doc.text(`Base Experience: ${pokemon.base_experience}`, 20, 30);
  doc.text(`Height: ${pokemon.height}`, 20, 40);
  doc.text(`Weight: ${pokemon.weight}`, 20, 50);
  doc.text("Abilities:", 20, 60);
  pokemon.abilities.forEach((ability, index) => {
    doc.text(`- ${ability.name}`, 20, 70 + index * 10);
  });

  if (pokemon.image) {
    const img = new Image();
    img.src = pokemon.image;
    img.onload = () => {
      doc.addImage(img, "JPEG", 150, 20, 50, 50);
      doc.save(`${pokemon.name}.pdf`);
    };
  } else {
    doc.save(`${pokemon.name}.pdf`);
  }
};
