import React, { Component } from "react";
import "./navbar.css";

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
            src='./avatar.jpg'
            alt="Imagen de Nati Guida"
            style={this.state.loaded ? {} : { display: "none" }}
            onLoad={() => this.setState({ loaded: true })}
          />
        </div>
        <div className="contact-container">
          <h1>Nati Guida</h1>
          <p className="from">Buenos Aires, Argentina.</p>
          <div>
            <h2>
              Frontend Developer
              <span className="blink cursor"> |</span>
            </h2>
          </div>
          <h3>Actualmente en Mercado Libre.</h3>
          <div className="social-container">
            <a href="https://github.com/NatiGuida" target="_blank">
              <i className="fab fa-github social-icon-git" />
            </a>
            <a href="https://www.linkedin.com/in/natalia-guida-38505b14a/" target="_blank">
              <i className="fab fa-linkedin-in social-icon-linkedin" />
            </a>
            <a href="https://twitter.com/NatiGuidaa" target="_blank">
              <i className="fab fa-twitter social-icon-twitter" />
            </a>
            <a href="https://instagram.com/NatiGuida" target="_blank">
              <i className="fab fa-instagram social-icon-instagram"></i>
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
