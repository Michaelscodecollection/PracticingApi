import React from "react";

function Recipes({ title, image, calories }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} />
      <h3>{calories}</h3>
    </div>
  );
}

export default Recipes;
