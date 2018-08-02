import React, { Component } from "react";
import AvatarIcon from "../img/avatar.png";
import "../js/fontawesome-all";
import "../css/navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = { loaded: false };
  }

  render() {
    return (
      <nav className="navbar container">
        {this.state.loaded ? null : <div className="placeholder" />}
        <div className="avatar-container">
          <img
            src={AvatarIcon}
            alt="Imagen de Nati Guida"
            style={this.state.loaded ? {} : { display: "none" }}
            onLoad={() => this.setState({ loaded: true })}
          />
        </div>
        <div className="contact-container">
          <h1>Nati Guida</h1>
          <div>
            <h2>
              Frontend Developer
              <span className="blink cursor"> |</span>
            </h2>
          </div>
          <h3>
            Soy de Buenos Aires, Argentina. Actualmente estoy trabajando en{" "}
            <a href="https://tanintensa.com" target="_blank">
              @TanIntensa{" "}
            </a>en el desarrollo de nuevas funcionalidades y el mantenimiento de
            la página.
          </h3>
          <div className="social-container">
            <a href="https://github.com/NatiGuida" target="_blank">
              <i className="fab fa-github social-icon-git" />
            </a>
            <a href="https://twitter.com/NatiGuidaa" target="_blank">
              <i className="fab fa-twitter social-icon-twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/natalia-guida-38505b14a/"
              target="_blank"
            >
              <i className="fab fa-linkedin-in social-icon-linkedin" />
            </a>
            <a href="mailto:natiguida@gmail.com">
              <i className="far fa-envelope social-icon-mail" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
