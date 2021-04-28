import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import BreedPage from "./components/BreedPage";
import SearchForm from "./components/SearchForm";
import AboutDoggo from "./components/AboutDoggo";
import SearchResults from "./components/SearchResults";
import { Route } from "react-router-dom";

function App() {
  const [breeds, setBreeds] = useState([]);
  const [onload, setOnload] = useState(true);

  let url = "https://api.TheDogAPI.com/v1/breeds";

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(url)
          .then((res) => res.json())
          .then((res) => {
            setOnload(false);
            setBreeds(res);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Route
        exact
        path="/breeds"
        render={() => <BreedPage breeds={breeds} />}
      />
      <Route exact path="/searchForm" component={SearchForm} breeds={breeds} />
      <Route exact path="/searchResults" component={SearchResults} />
      {/* <Route exact path="/searchForm" component={SearchForm} /> */}
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/aboutDoggo/:id"
        render={(routerProps) => (
          <AboutDoggo
            match={routerProps.match}
            breeds={breeds}
            onload={onload}
          />
        )}
      />
    </div>
  );
}

export default App;
