import React from "react";
import Square from "./Square";
class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      xPlayed: false,
      value: "",
      winner: false,
      currentPlayer: "",
    };
  }

  isGameOver = () => {
    const arr = this.state.arr;
    const flattened = arr.flat(1);
    const done = flattened.every((elem) => elem !== "");
    if (done) return done;
    else return null;
  };
  calcWinner = () => {
    const arr = this.state.arr;
    // console.log("arrfrom calc:", arr);
    let patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];
    const flattened = arr.flat(1);
    for (let i = 0; i < patterns.length; i++) {
      const [a, b, c] = patterns[i];
      if (
        flattened[a] &&
        flattened[a] === flattened[b] &&
        flattened[a] === flattened[c]
      ) {
        return flattened[a];
      }
    }
  };

  handleClick = (i, z) => {
    const duplicate = JSON.parse(JSON.stringify(this.state.arr));
    if (this.calcWinner() || this.isGameOver()) {
      return;
    } else {
      if (!this.state.xPlayed) {
        duplicate[i][z] = "x";
        this.setState({ xPlayed: true, arr: duplicate });
      } else {
        duplicate[i][z] = "o";
        this.setState({ xPlayed: false, arr: duplicate });
      }
    }
  };
  render() {
    const arr = this.state.arr;
    const draw = this.isGameOver();
    const winner = this.calcWinner();
    // console.log("winner:", winner, "draw:", draw);
    return (
      <>
        {winner ? <p>{winner} wins!</p> : null}
        {draw ? <p>It is a draw!</p> : null}
        {arr.map((row, i) => {
          return (
            <>
              <div key={i} className="boardRow">
                {row.map((elem, z) => {
                  return (
                    <button
                      key={z}
                      className="square"
                      onClick={() => this.handleClick(i, z)}
                    >
                      {arr[i][z]}
                    </button>
                  );
                })}
              </div>
            </>
          );
        })}
      </>
    );
  }
}

export default Board;
///0,1,2
///3,4,5
///6,7,8

///0,3,6
///1,4,7
///2,5,8

///0,4,8
