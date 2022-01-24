import React from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

function App() {
  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp"
            alt="New York"
          />
          <Carousel.Caption>
            <h3>New York</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp"
            alt="Island"
          />
          <Carousel.Caption>
            <h3>Island</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
