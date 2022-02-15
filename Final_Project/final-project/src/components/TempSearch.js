// import React from "react";
// import SizeSearch from "./SizeSearch";

// class TempSearch extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       breedsArr: [],
//       selectedDog: {},
//     };
//   }

//   handleChange = (e) => {
//     const breeds = this.state.breedsArr;
//     const selected = breeds.find((breed) => breed.id == e.target.value);
//     this.setState({ selectedDog: selected }); //now render the result if Object.value(selectedDog).length>0. did it in the movie ithink
//   };

//   componentDidMount() {
//     fetch("https://api.TheDogAPI.com/v1/breeds", {
//       headers: {
//         "x-api-key": "17d937a1-c776-46bc-9dda-dc68574fbe31",
//       },
//     })
//       .then((res) => res.json())
//       //   .then((data) => console.log(data))
//       .then((data) => {
//         this.setState({ breedsArr: [...data] });
//       })
//       .catch((e) => console.log("fetch err:", e));
//   }

//   render() {
//     const selected = this.state.selectedDog;
//     // console.log(selected);
//     const breedsArr = JSON.parse(JSON.stringify(this.state.breedsArr));
//     // console.log(breedsArr);

//     return (
//       <>
//         {breedsArr.length > 1 ? (
//           <select onChange={this.handleChange}>
//             <option value="-1">Select temperament</option>
//             {breedsArr.map((breed, i) => {
//               if (breed.temperament) {
//                 const temperament = breed.temperament;

//                 const tempeArr = temperament.split(",").slice(0, 3);
//                 const tempeStringed = tempeArr.join(", ");

//                 return (
//                   <option key={i} value={breed.id}>
//                     {tempeStringed}
//                   </option>
//                 );
//               }
//             })}
//           </select>
//         ) : (
//           <div></div>
//         )}
//         <SizeSearch breeds={this.state.breedsArr} />
//         {Object.keys(selected).length > 0 ? (
//           <img src={selected.image.url}></img>
//         ) : null}
//       </>
//     );
//   }
// }

// export default TempSearch;
