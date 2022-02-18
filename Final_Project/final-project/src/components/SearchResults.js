import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import BtnSubmit from "./BtnSubmit";
const SearchResults = () => {
  const {
    breeds,
    //     setBreeds,
    //     height,
    //     weight,
    //     temper,
    matchIndexes,
    //     setMatchIndexes,
  } = useContext(AppContext);

  //   //   const [matchIndexes, setMatchIndexes] = useState([]);
  //   useEffect(async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/breeds");
  //       const data = await response.json();
  //       console.log("data in usefect:", data);
  //       await setBreeds(data);
  //     } catch (e) {
  //       throw new Error(e);
  //     }
  //   }, []);

  //   //   console.log(
  //   //     "height:",
  //   //     height,
  //   //     "weight:",
  //   //     weight,
  //   //     "temper:",
  //   //     temper,
  //   //     "allbreeds:",
  //   //     breeds
  //   //   );
  //   const calcFilters = () => {
  //     console.log("filters", breeds);
  //     if (breeds.length > 0) {
  //       //   let foundMatchIndex = [];
  //       const arrOfTemperIndexes = [];
  //       const arrOfHeightIndexes = [];
  //       const arrOfWeightIndexes = [];

  //       const heightMatch = breeds.filter((breed, i) => {
  //         if (breed.height) {
  //           const breedHeight = breed.height.metric
  //             .replaceAll(" ", "")
  //             .split("-");
  //           if (height < breedHeight[1] && height > breedHeight[0])
  //             arrOfHeightIndexes.push(i);
  //         }
  //       });
  //       const weightMatch = breeds.filter((breed, i) => {
  //         if (breed.weight) {
  //           const breedWeight = breed.weight.metric
  //             .replaceAll(" ", "")
  //             .split("-");

  //           if (weight < breedWeight[1] && weight > breedWeight[0])
  //             arrOfWeightIndexes.push(i);
  //         }
  //       });
  //       const weightnHeightMatches = arrOfHeightIndexes.filter((height) =>
  //         arrOfWeightIndexes.includes(height)
  //       );
  //       console.log("weightnheight:", weightnHeightMatches);
  //       const userTemperArr = temper
  //         .replaceAll(",", "")
  //         .replaceAll("  ", " ")
  //         .toLowerCase()
  //         .split(" ");
  //       const allTemps = breeds.map((breed) => {
  //         if (breed.temperament) {
  //           return breed.temperament.replaceAll(" ", "").toLowerCase().split(",");
  //         }
  //       });
  //       const userTemperLength = userTemperArr.length;
  //       const matchTemp = allTemps.filter((breedTempArr, i) => {
  //         if (breedTempArr) {
  //           const x =
  //             breedTempArr.filter((temp) => {
  //               return userTemperArr.includes(temp);
  //             }).length === userTemperLength;
  //           if (x) arrOfTemperIndexes.push(i);
  //         }
  //       });
  //       if (arrOfTemperIndexes.length > 0 && weightnHeightMatches.length > 0) {
  //         const foundMatchIndexes = arrOfTemperIndexes.filter(
  //           (tempInd) => weightnHeightMatches.includes(tempInd)
  //           // foundMatchIndex.push(foundMatch)
  //         );
  //         if (foundMatchIndexes) {
  //           console.log("all filters:", foundMatchIndexes);
  //           setMatchIndexes(foundMatchIndexes);
  //         }
  //       }
  //     }
  //   };

  return (
    <>
      <div>
        {matchIndexes.length > 0 ? (
          matchIndexes.map((index) => {
            console.log(breeds[index].name);
            return (
              <div key={index}>
                {breeds[index].name}
                <img src={breeds[index].image.url}></img>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
      {/* <BtnSubmit filterMatches={calcFilters} /> */}
    </>
  );
};

export default SearchResults;
