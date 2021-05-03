import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BreedPage({ breeds }) {
  const [dogFilter, setDogFilter] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleChange(e) {
    setDogFilter(e.target.value);
  }

  return (
    <div>
      <Link to="/">
        <button class="button" id="b2hButton">
          Back to Home
        </button>
      </Link>
      <p className="BPpara">
        <strong>You're on our Breed Page!</strong> <br />
        <br />
        Feel free to search for a specific breed you may be interested in or
        scroll through our list and see what catches your eye!
      </p>
      <form>
        <input
          className="inputField"
          placeholder="Search For Breed"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={dogFilter}
        />
      </form>

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
