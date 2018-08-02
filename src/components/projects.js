import React, { Component } from "react";
import Webtanintensa from "../img/tanintensa.png";
import Webregalandolo from "../img/regalandolo.png";
import "../css/projects.css";

class Projects extends Component {
  render() {
    return (
      <section className="projects-container container">
        <span className="projects-title">-Projects-</span>
        <div className="container-web-projects">
          <a className="web-top"  href="https://tanintensa.com" target="_blank">
            <img className="web" src={Webtanintensa} alt="Web Tan Intensa" />
          </a>
          <a className="web-bot"  href="https://test.regalandolo.com" target="_blank">
            <img className="web" src={Webregalandolo} alt="Web Regalandolo" />
          </a>
        </div>
      </section>
    );
  }
}

export default Projects;
