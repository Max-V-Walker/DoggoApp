import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function SearchForm({breeds, breedId}) {

    const initialBreed = {
        breed: ''
    };
    const [breedState, setBreedState] = useState(initialBreed)

    return (
        <div>
            <Link to="/">
                <button>Home</button>
            </Link>
            {/* <h1>You're on SearchForm!</h1> */}
            <h2>Search by breed!</h2>

            <form>
                <label htmlFor="breedType">Breed Type:</label>

                <select id="breedType">
                    <option value="breed">xbgfbgf</option>
                </select>
                
                <button type="submit">Woof!</button>
            </form>

        </div>
    );
}

export default SearchForm;