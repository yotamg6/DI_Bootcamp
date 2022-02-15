import React from "react";
class SizeSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      heightTxt: "",
      weightTxt: "",
      tempeTxt: "",
      height: "",
      weight: "",
      temperament: "",
      matchIndexes: [],
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = () => {};
  render() {
    const breeds = JSON.parse(JSON.stringify(this.props.breeds));
    const { height, weight, temperament, matchIndexes } = this.state;
    let foundMatchIndex = [];
    const arrOfTemperIndexes = [];
    const arrOfHeightIndexes = [];
    const arrOfWeightIndexes = [];

    if (breeds.length > 0) {
      const heightMatch = breeds.filter((breed, i) => {
        if (breed.height) {
          const breedHeight = breed.height.metric
            .replaceAll(" ", "")
            .split("-");
          if (height < breedHeight[1] && height > breedHeight[0])
            arrOfHeightIndexes.push(i);
        }
      });

      const weightMatch = breeds.filter((breed, i) => {
        if (breed.weight) {
          const breedWeight = breed.weight.metric
            .replaceAll(" ", "")
            .split("-");

          if (weight < breedWeight[1] && weight > breedWeight[0])
            arrOfWeightIndexes.push(i);
        }
      });

      const weightnHeightMatches = arrOfHeightIndexes.filter((height) =>
        arrOfWeightIndexes.includes(height)
      );
      const tempArr = temperament
        .replaceAll(",", "")
        .replaceAll("  ", " ")
        .toLowerCase()
        .split(" ");
      const allTemps = breeds.map((breed) => {
        if (breed.temperament) {
          return breed.temperament.replaceAll(" ", "").toLowerCase().split(",");
        }
      });
      const matchTemp = allTemps.filter((breedTempArr, i) => {
        if (breedTempArr) {
          const x =
            breedTempArr.filter((temp) => {
              return tempArr.includes(temp);
            }).length === tempArr.length;
          if (x) arrOfTemperIndexes.push(i);
        }
      });
      foundMatchIndex = arrOfTemperIndexes.find((tempInd) =>
        weightnHeightMatches.includes(tempInd)
      );
    }

    return (
      <>
        <div>
          <input
            name="tempeTxt"
            type="text"
            placeholder="Desired temperament"
            onChange={this.handleChange}
          ></input>
          <input
            name="heightTxt"
            type="text"
            placeholder="Desired height"
            onChange={this.handleChange}
          ></input>
          <input
            name="weightTxt"
            type="text"
            placeholder="Desired weight"
            onChange={this.handleChange}
          ></input>
          <button
            onClick={() =>
              this.setState({
                weight: this.state.weightTxt,
                height: this.state.heightTxt,
                temperament: this.state.tempeTxt,
              })
            }
          >
            Get a match!
          </button>
        </div>
        {foundMatchIndex && foundMatchIndex.length > 0
          ? foundMatchIndex.map((index) => {
              return <div key={index}>{breeds[index]}</div>;
            })
          : null}
      </>
    );
  }
}

export default SizeSearch;

// const filteredCombinations = arrayOfArrays.filter((item, i) => {
//   const x =
//     item.filter((x) => {
//       return arrayToCheck.includes(x);
//     }).length === arrayToCheck.length;
//   if (x) console.log(i);
// });
