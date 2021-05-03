import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AboutDoggo({ match, breeds, onload }) {
  const [doggo, setDoggo] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let breedId = match.params.id;

  const breed = breeds.filter((breed) => breed.id == breedId).pop();

  return (
    <div className="doggo-details">
      <img src={breed.image.url} alt={breed.name} class="aboutPic" />

      <div class="details">
        <h3>
          <span>Name:</span> {breed.name}
        </h3>
        <h3>
          <span>"Description:</span> "
          {breed.description ? breed.description : "N/A"}
        </h3>
        <h3>
          <span>Bred For:</span> {breed.bred_for}
        </h3>
        <h3>
          <span>Breed Group:</span> {breed.breed_group}
        </h3>
        <h3>
          <span>Life Span:</span> {breed.life_span}
        </h3>
        <h3>
          <span>Temperament:</span> {breed.temperament}
        </h3>
        <h3>
          <span>Origin:</span> {breed.origin}
        </h3>
        <h3>
          <span>Weight (lbs):</span> {breed.weight.imperial}
        </h3>
        <h3>
          <span>Height ("):</span> {breed.height.imperial}
        </h3>

        <h3>
          <div class="disclaimer">
            <span>Disclaimer: </span>While the characteristics mentioned here
            may frequently represent this breed, dogs are individuals whose
            personalities and appearances will vary. Please consult the adoption
            organization for details on a specific pet.
          </div>
        </h3>

        <h3>
          For more information about the{" "}
          <span id="underline">{breed.name}</span>, please check out{" "}
          <a href="https://www.akc.org/dog-breeds/">
            The American Kennel Club's
          </a>{" "}
          website!
        </h3>

        <Link to="/breeds">
          <button class="button">Back to Breed List!</button>
        </Link>
      </div>
    </div>
  );
}
export default AboutDoggo;
