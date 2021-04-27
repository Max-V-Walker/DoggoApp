import React, { useState, useEffect } from 'react';

function AboutDoggo({match, breeds, onload}) {
    const [doggo, setDoggo] = useState("");
    let breedId = match.params.id++
        
    console.log(breedId)
    console.log(breeds[breedId].name)
    
    return (
        <div className="doggo-details">
            <img
            src= {breeds[breedId].image.url}
            alt={breeds[breedId].name}
            />
            <h3>Name: {breeds[breedId].name}</h3>
            <h3>Description: {breeds[breedId].description}</h3>
            <h3>Bred For: {breeds[breedId].bred_for}</h3>
            <h3>Breed Group: {breeds[breedId].breed_group}</h3>
            <h3>Life Span: {breeds[breedId].life_span}</h3>
            <h3>Temperament: {breeds[breedId].temperament}</h3>
        </div>
    );
}
export default AboutDoggo;

            