import React from "react";
import Board from "./Board";
class Game extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="game">
          <Board />
        </div>
      </>
    );
  }
}

export default Game;
