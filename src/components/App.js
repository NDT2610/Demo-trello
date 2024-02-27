import "../styles/App.css";

import React, { Component } from "react";
import NavBar from  "./NavBar";
import Board from "./Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <NavBar />
        </div>

        <Board />
      </div>
    );
  }
}

export default App;
