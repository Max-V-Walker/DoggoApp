// Need a text input
// handle change
// filter breeds by input

import React, { useState } from "react";
import { Link } from "react-router-dom";

function BreedPage({ breeds }) {
  const [dogFilter, setDogFilter] = useState("");

  function handleChange(e) {
    setDogFilter(e.target.value);
  }

  return (
    <div>
      <h1>You're on BreedPage!</h1>
      <Link to="/">
        <button>Home</button>
      </Link>

      <form>
        <input
          placeholder="Search"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={dogFilter}
        />
      </form>

      <h1> {dogFilter} </h1>

      <section className="container">
        {breeds
          .filter((breed) => {
            const currentBreed = dogFilter
              ? breed.name.toLowerCase().startsWith(dogFilter.toLowerCase())
              : true;
            return currentBreed;
          })
          .map((breed) => {
            return (
              <div>
                <Link to={`/aboutDoggo/${breed.id}`} key={breed.id}>
                  <div className="card">
                    <div className="card-image">
                      <img src={breed.image.url} alt={breed.name} />
                    </div>
                    <div className="card-title">
                      <h3>{breed.name}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </section>
    </div>
  );
}

export default BreedPage;
