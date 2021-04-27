import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <h1>Doggo App: Find Your Dog</h1>

                <h2>Check out our Breeds List!</h2>
                    <Link to="/breeds">
                        <button>Breeds</button>
                    </Link>

                <h2>Search by characteristic!</h2>
                    <Link to="/searchForm">
                        <button>Search</button>
                    </Link>
            
        </div>
    );
}

export default Header;