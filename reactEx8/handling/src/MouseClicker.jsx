import React from "react";
import Egg from "../src/assets/brown-egg_2829-13453.avif"

function MouseClicker() {
  // Gestore evento per stampare l'attributo name del bottone
  const handleButtonClick = (event) => {
    console.log(`Button name: ${event.target.name}`);
  };

  // Gestore evento per stampare il src dell'immagine
  const handleImageClick = (event) => {
    // Evita che il click sull'immagine si propaghi al bottone
    event.stopPropagation();
    console.log(`Image source: ${event.target.src}`);
  };

  return (
    <div>
      <h1>MouseClicker</h1>
      {/* Bottone con attributo name "one" */}
      <button name="one" onClick={handleButtonClick}>
        Button One
      </button>

      {/* Bottone con attributo name "two" e immagine al suo interno */}
      <button name="two" onClick={handleButtonClick}>
        <img
          src={Egg}
          alt="Placeholder"
          onClick={handleImageClick}
        />
      </button>
    </div>
  );
}

export default MouseClicker;
