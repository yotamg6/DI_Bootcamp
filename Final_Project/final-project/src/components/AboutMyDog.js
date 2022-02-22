import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

const AboutMyDog = () => {
  const { breeds, setBreeds, setUserBreed, setUserDogName } =
    useContext(AppContext);
  const breedsLength = breeds.length;

  useEffect(async () => {
    try {
      const response = await fetch("http://localhost:5000/api/breeds");
      const data = await response.json();
      console.log("data in usefect:", data);
      await setBreeds(data);
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  const handleChange = (e) => {
    if (e.target.value > -1) setUserBreed(breeds[e.target.value].name);
  };

  return (
    <>
      {/* {breedsLength > 0 ? ( */}
      <div>
        <select onChange={handleChange}>
          <option value="-2">Choose your breed</option>
          <option value="-1">Other</option>
          {breeds.map((breed, i) => {
            return (
              <option key={i} value={i}>
                {breed.name}
              </option>
            );
          })}
        </select>
      </div>
      {/* //   ) : null} */}

      <div>
        <input
          type="text"
          name="dogName"
          placeholder="Dog name"
          onChange={(e) => setUserDogName(e.target.value)}
        ></input>
      </div>
      {/* {userBreed ? (
        <div>
          My dog breed
          <p> {userBreed}</p>
        </div>
      ) : null}
      {userDogName ? <p> My dog name: {userDogName}</p> : null} */}
    </>
  );
};

export default AboutMyDog;

// get breed names from the api and let user choose what their dog is, or mark "other"
// input field with dog name
// free text on their dog (textfield?), that will be displayed next to their dog pic and name
