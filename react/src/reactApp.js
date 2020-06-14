import React from "react";
import ReactDOM from "react-dom";
import FirstGame from "./containers/FirstGame";

export default class GameOne extends React.Component {
  render() {
    return <FirstGame />;
  }
}

export class GameTwo extends React.Component {
  render() {
    return (
      <div className="text-center text-info">
        This is my second react js game. Under construction....
      </div>
    );
  }
}

if (document.getElementById("react-js-first-game")) {
  ReactDOM.render(<GameOne />, document.getElementById("react-js-first-game"));
}

if (document.getElementById("react-js-second-game")) {
  ReactDOM.render(<GameTwo />, document.getElementById("react-js-second-game"));
}
