import logo from "./logo.svg";
import "./App.css";
import React from "react";
import supers from "./superheroes";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      highestScores: new Set(),
    };
  }

  shuffle = () => {
    const superheroes = supers.superheroes;
    let currentIndex = superheroes.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [superheroes[currentIndex], superheroes[randomIndex]] = [
        superheroes[randomIndex],
        superheroes[currentIndex],
      ];
    }
    return superheroes;
  };

  handleClick = (heroObj) => {
    if (heroObj.clicked) {
      supers.superheroes.map((hero) => {
        hero.clicked = false;
      });
      this.setState({ score: 0 });
    } else {
      heroObj.clicked = true;
      const score = this.state.score + 1;
      const highestScores = this.state.highestScores;
      highestScores.add(score);
      this.setState({ score: score, highestScores: highestScores });
    }
  };

  render() {
    const shuffled = this.shuffle();
    return (
      <div className="App">
        <header className="App-header">
          <p>Top score: {this.state.highestScores.size} </p>
          <p>Score: {this.state.score} </p>
          {shuffled.map((hero, i) => {
            return (
              <div
                key={i}
                className="card"
                onClick={() => this.handleClick(hero)}
              >
                <div className="imageContainer">
                  <img src={hero.image}></img>
                  <ul>
                    <li>
                      <strong>{hero.name}</strong>
                    </li>
                    <li>
                      <strong>Occupation:</strong>
                      {hero.occupation}
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;
