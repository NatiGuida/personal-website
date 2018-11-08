import React, { Component } from "react";
import "./projects.css";

class Projects extends Component {
  render() {
    return (
      <section className="projects-container container">
        <span className="projects-title">-Projects-</span>
        <div className="container-web-projects">
          <a className="web-top" href="https://tanintensa.com" target="_blank">
            <img className="web" src='./tanintensa.png' alt="Web Tan Intensa" />
          </a>
          <a className="web-bot" target="_blank">
            <img className="web" src='./regalandolo.png' alt="Web Regalandolo" />
          </a>
        </div>
      </section>
    );
  }
}

export default Projects;
