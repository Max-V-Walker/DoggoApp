import React, { useState, useEffect } from "react";

function AboutDoggo({ match, breeds, onload }) {
  const [doggo, setDoggo] = useState("");

  let breedId = match.params.id;

  const breed = breeds.filter((breed) => breed.id == breedId).pop();

  return (
    <div className="doggo-details">
      <img src={breed.image.url} alt={breed.name} />
      <h3>Name: {breed.name}</h3>
      <h3>
        {breed.description
          ? "Description: " + breed.description
          : "Description: N/A"}
      </h3>
      <h3>Bred For: {breed.bred_for}</h3>
      <h3>Breed Group: {breed.breed_group}</h3>
      <h3>Life Span: {breed.life_span}</h3>
      <h3>Temperament: {breed.temperament}</h3>
      <h3>Weight: {breed.weight.imperial}</h3>
      <h3>Height: {breed.height.imperial}</h3>
    </div>
  );
}
export default AboutDoggo;
