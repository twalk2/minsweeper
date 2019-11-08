import React from "react";
import "./App.css";

const App = () => {
  let display = false;
  const [bgColor, setBgColor] = React.useState("");
  const [matrix, setMatrix] = React.useState("");
  const [score, setScore] = React.useState(0);

  const neutralClick = event => {
    event.target.disabled = true;
    setScore(score + 1);
  };

  const alertDeath = () => {
    alert("You lost LMAO");
  };

  const betterArray = () => {
    let bestBetterArray = [];
    let exes = 0;
    for (let i = 0; i < 10; i++) {
      let betterArray = [];
      for (let j = 0; j < 10; j++) {
        let maybeMine = Math.ceil(Math.random() * 7);
        if (exes < 35) {
          if (maybeMine == 7) {
            exes += 1;
            betterArray.push(
              <button
                key={"x"}
                onClick={() => {
                  alertDeath();
                }}
                className="bomb"
                name={[i, j]}
              ></button>
            );
          } else {
            betterArray.push(
              <button
                className="neutral"
                disabled={false}
                onClick={neutralClick}
                name={[]}
              >
                {display ? maybeMine : null}
              </button>
            );
          }
        } else {
          betterArray.push(<button></button>);
        }
      }
      bestBetterArray.push(betterArray);
      console.log("The array", bestBetterArray);
    }
    return bestBetterArray;
  };
  const renderBetterArray = () => {
    let theThing = betterArray();
    return theThing.map(item => {
      return <div className="row">{item}</div>;
    });
  };

  return (
    <div className="App">
      <h1>Minesweeper</h1>
      <h2>Score: {score}</h2>
      <div className="mine-wrapper">
        {/* <div>{buttonRender()}</div>  */}

        <div>{renderBetterArray()}</div>
      </div>
    </div>
  );
};

export default App;
