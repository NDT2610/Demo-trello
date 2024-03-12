import "../styles/App.css";

import React, { Component } from "react";
import Board from "./Board";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";


class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
              path="/register"
              Component={Register}
            ></Route>
            <Route
              path="/Login"
              Component={Login}
            ></Route>
            <Route
              path="/Home"
              Component={Board}
            ></Route>
          </Routes>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
