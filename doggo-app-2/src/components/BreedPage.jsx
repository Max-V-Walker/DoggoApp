import React from "react";
import { Link } from 'react-router-dom';

function BreedPage({breeds}) {
console.log(breeds);
console.log();
console.log();
console.log();

    return (
        <div>
            <h1>You're on BreedPage!</h1>
            <Link to="/">
                <button>Home</button>
            </Link>

            <section className="container">
                {breeds.map((breed) => {
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