import React from "react";
import Color from "./Color";

function Colors({ colors }) {
  return (
    <ul>
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
}

export default Colors;
