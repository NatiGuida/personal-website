import React, { Component } from "react";
import "./experience.css";
import "../Navbar/navbar.css";

class Experience extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section className='experience-container container'>
        <span className="experience-title">-Experience-</span>
        <div>
          <h3>Frontend Teacher Assistant</h3>
          <p>at <a href='https://ada.com.ar/' target="_blank">Ada ITW</a></p>
          <img src='./ada.png' alt='Logo Ada ITW' />
        </div>
      </section>
    )
  }
}

export default Experience;