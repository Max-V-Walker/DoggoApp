import React from 'react';
import { Link } from 'react-router-dom';


function SearchForm(props) {
    return (
        <div>
            <h1>You're on SearchForm!</h1>
            <Link to="/">
                <button>Home</button>
            </Link>

        </div>
    );
}

export default SearchForm;