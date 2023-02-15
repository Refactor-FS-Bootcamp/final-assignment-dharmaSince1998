import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [dogs, setDogs] = useState([]);
  let breeds = [];

  useEffect(() => {
    const fetchDogs = async () => {
      const res = await axios.get("https://dog.ceo/api/breed/hound/images");
      const result = await res.data;
      console.log(result);
      setDogs(result.message);
    };
    fetchDogs();
  }, []);

  // console.log(dogs);

  {
    dogs.forEach((element) => {
      breeds.push({ element });
    });
  }

  return (
    <div className="container">
      <h1>ALL DOG BREEDS</h1>
      <div className="box">
        {breeds.map((breed) => {
          return (
            <div className="contain" key={breed.element}>
              <div className="image">
                <img src={breed.element} alt="dog" />
              </div>
            </div>
          );
          // console.log(breed.element);
        })}
      </div>

      {/* <img src={dogs[2]} /> */}
    </div>
  );
};

export default Home;
