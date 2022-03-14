import React from "react";


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
      gameOver: false,
      modeAi: false,
     
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
      this.setState({ gameOver: true });
    } else if (duplicate[i][z] !== "") {
      return;
    } else if (this.state.modeAi) {
      this.playAi(i, z, duplicate);
    } else {
      if (!this.state.xPlayed) {
        duplicate[i][z] = "X";
        this.setState({ xPlayed: true, arr: [...duplicate] });
      } else {
        duplicate[i][z] = "O";
        this.setState({ xPlayed: false, arr: [...duplicate] });
      }
    }
  };
  resetGame = () => {
    const dup = JSON.parse(JSON.stringify(this.state.arr));
    let nestedArr;
    for (let i = 0; i < dup.length; i++) {
      nestedArr = dup[i].map((square) => (square = ""));
      dup[i] = nestedArr;
    }
    this.setState({ arr: dup, gameOver: false });
  };
  playAi = (i, z, duplicate) => {
    duplicate[i][z] = "X";
    const flattened = duplicate.flat(1);
    let isFound;
    for (let y = 0; y < patterns.length; y++) {
      const [a, b, c] = patterns[y];
      if (
        flattened[c] !== duplicate[i][z] &&
        flattened[a] === flattened[b] &&
        flattened[a] !== "" &&
        flattened[c] !== "O"
      ) {
        flattened[c] = "O";
        isFound = true;
        break;
      } else if (
        flattened[b] !== duplicate[i][z] &&
        flattened[a] === flattened[c] &&
        flattened[a] !== "" &&
        flattened[b] !== "O"
      ) {
        flattened[b] = "O";
        isFound = true;
        break;
      } else if (
        flattened[a] !== duplicate[i][z] &&
        flattened[b] === flattened[c] &&
        flattened[b] !== "" &&
        flattened[a] !== "O"
      ) {
        flattened[a] = "O";
        isFound = true;
        break;
      }
    }
    if (!isFound) {
      for (let y = 0; y < patterns.length; y++) {
        const [a, b, c] = patterns[y];
        if (flattened[c] !== duplicate[i][z] && flattened[c] !== "O") {
          flattened[c] = "O";
          break;
        } else if (flattened[b] !== duplicate[i][z] && flattened[b] !== "O") {
          flattened[b] = "O";
          break;
        } else if (flattened[a] !== duplicate[i][z] && flattened[a] !== "O") {
          flattened[a] = "O";
          break;
        }
      }
    }
    const newArray = [];
    while (flattened.length > 0) newArray.push(flattened.splice(0, 3));
    this.setState({ arr: [...newArray] });
  };
  render() {
    let draw;
    const arr = JSON.parse(JSON.stringify(this.state.arr));
    const winner = this.calcWinner();
    if (!winner) {
      draw = this.isGameOver();
    }

    const gameOn = !winner && !draw ? true : false;
    let turn;
    if (gameOn && this.state.xPlayed) {
      turn = "O";
    } else if (gameOn) {
      turn = "X";
    }
    return (
      <>
        <div className="container">
          <h1>Tic-Tac-Toe</h1>
          {this.state.modeAi ? (
            <h2>AI Game Mode</h2>
          ) : (
            <h2>2 Players Game Mode</h2>
          )}

          {winner ? <p>{winner} wins!</p> : null}
          {draw ? <p>It is a draw!</p> : null}
          {turn ? <p>It's {turn}'s turn</p> : null}
          {this.state.gameOver ? (
            <p>The game is over, press reset to start a new game</p>
          ) : null}
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
          <div className="btnsCont">
            <button onClick={this.resetGame} className="btns">
              Reset
            </button>
            <button
              className="btns"
              onClick={() => {
                this.resetGame();
                this.setState({ modeAi: true });
              }}
            >
              Versus AI
            </button>
            <button
              className="btns"
              onClick={() => {
                this.resetGame();
                this.setState({ modeAi: false });
              }}
            >
              2 players
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Board;
