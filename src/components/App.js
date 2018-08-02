import React, { Component } from "react";
import Navbar from "./navbar";
import Skills from "./skills";
import Projects from "./projects";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;
