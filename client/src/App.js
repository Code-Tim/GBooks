import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios"

class App extends Component {
  searchGoogs = searchTerm => {
    axios.get(`/api/googs/${searchTerm}`).then(res => {
      console.log("GOOGS!", res)
    })
  }
  //add a search form
  render() {
    return (
      <div onClick={() => this.searchGoogs("puppy")} className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
