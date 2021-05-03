import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homePage">
      <div className="homeHeader">
        <h1 className="doggoapp">Doggo App: Find Your Dog</h1>
        <ul className="nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Pets101</a>
          </li>
          <li>
            <a href="#">Training</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </div>
      <img
        className="puppers"
        src="https://patch.com/img/cdn20/users/23306266/20200701/034325/styles/patch_image/public/cute-dogs___01153249063.jpg?width=695"
        alt="puppers"
      />
      <div className="home">
        <p>
          DoggoApp was created to help you briefly learn about ceratin dog
          breeds for when you're in the market for a new companion or wanting to
          learn more about a furry friend of yours!
          <br />
          <br /> Take a look below at our created list of known dog breeds!
          Explore through our photos and characteristics of each to help with
          what you may need.
        </p>

        <h4>Check out our Breeds List!</h4>
        <Link to="/breeds">
          <button class="button" id="homebutton">
            Breeds
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
