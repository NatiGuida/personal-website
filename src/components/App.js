import React, { Component } from "react";
import Navbar from "./Navbar/navbar";
// import Skills from "./Skills/skills";
import Experience from "./Experience/experience";
import Projects from "./Projects/projects";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Experience />
        {/* <Skills /> */}
        <Projects />
      </div>
    );
  }
}

export default App;
