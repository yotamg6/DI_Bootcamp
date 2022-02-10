import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//AIzaSyBqFQE6qyXbTsJPqBzlAt0AfdCniFwtzNM
import GoogleMapReact from "google-map-react";

const Map = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "#320DE8",
      padding: "8px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);

class App extends Component {
  static defaultProps = {
    center: {
      lat: 32.0853,
      lng: 34.7818,
    },
    zoom: 14,
  };

  render() {
    return (
      <div style={{ marginLeft: "30%" }}>
        <h1 style={{ marginLeft: "15%" }}> Tel Aviv</h1>
        <div style={{ height: "500px", width: "500px" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBqFQE6qyXbTsJPqBzlAt0AfdCniFwtzNM",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Map lat={32.0853} lng={34.7818} text={"Tel Aviv"} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
