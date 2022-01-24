// import React, { Component } from "react";
// class Garage extends Component {
//   constructor() {
//     super();
//     this.state = {
//       size: "small",
//     };
//   }
// }

const Garage = (props) => {
  return (
    <>
      <div>My aunt lives in my {props.size} garage</div>
    </>
  );
};
// Create another component inside your Components folder, called Garage.js.

// Use an attribute to pass a size to the Garage component, <Garage size="small" />.

// Use the Garage component inside the Car component and pass the size ‘small’. The Garage component should render Who lives in my <size> Garage?

export default Garage;
