import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Breeds.css";

const Breeds = () => {
  const [dogBreeds, setDogBreeds] = useState([]);
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    const fetchDogBreeds = async () => {
      const res = await axios.get("https://dog.ceo/api/breeds/list/all");
      const data = res.data;
      setDogBreeds(data.message);
    };
    fetchDogBreeds();
  }, []);

  const LoadByBreed = (event) => {
    if (event.target.value !== "Choose a breed") {
      const fetchImage = async () => {
        const res = await axios.get(
          `https://dog.ceo/api/breed/${event.target.value}/images`
        );
        setDogImages(res.data.message);
      };
      fetchImage();
    } else {
      alert("plzz select a breed");
    }
  };

  // console.log(dogImages);

  return (
    <div className="breedContainer">
      <div className="breedBox">
        <select onChange={LoadByBreed} className="breedHeader">
          <option>Choose a breed</option>
          {Object.keys(dogBreeds).map((breed) => {
            // console.log(breed);
            return <option key={breed}>{breed}</option>;
          })}
        </select>
      </div>
      <div className="breedDogs">
        {dogImages.map((image) => {
          return (
            <div className="breedImage" key={image}>
              <img src={image} alt="dog" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Breeds;
