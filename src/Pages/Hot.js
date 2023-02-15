import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Hot.css";

const Hot = () => {
  const [random, setRandom] = useState([]);

  //Spin Button
  const nextShuffle = () => {
    const fetchRandom = async () => {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random/3");
      const data = res.data;
      setRandom(data.message);
    };
    fetchRandom();
  };

  useEffect(() => {
    // const fetchRandom = async () => {
    //   const res = await axios.get("https://dog.ceo/api/breeds/image/random/3");
    //   const data = res.data;
    //   setRandom(data.message);
    // };
    nextShuffle();
  }, []);
  // console.log(random);

  const randomImages = [];

  {
    random.forEach((element) => {
      randomImages.push({ element });
      // console.log(randomImages);
    });
  }

  return (
    <div className="randomContainer">
      <h1>HOT Sale!!!!</h1>
      {/* <marquee style={{ color: "red" }}>
        PICK ANY ONE BREED WITH 50% Discount hurry Up!!!!!!{" "}
      </marquee> */}
      <div className="randomShuffle">
        <button className="randomShuffleBtn" onClick={nextShuffle}>
          SPIN&gt;&gt;
        </button>
      </div>
      <div className="randomBox">
        {randomImages.map((image) => {
          return (
            <div className="randomImages" key={image.element}>
              <div className="randomImage">
                <img src={image.element} alt="randomImage" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hot;
