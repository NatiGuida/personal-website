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
        <span className="experience-title">-Experiencia-</span>
        <section className='experience-jobs'>
          <div className='experience ada'>
            <h3>Frontend Teacher Assistant</h3>
            <p>en <a href='https://ada.com.ar/' target="_blank">Ada ITW</a></p>
            {/* <img src='./ada.png' alt='Logo Ada ITW' /> */}
          </div>
          <div className='experience regalandolo'>
            <h3>Frontend Teacher Assistant</h3>
            <p>en <a href='https://ada.com.ar/' target="_blank">Ada ITW</a></p>
            {/* <img src='./ada.png' alt='Logo Ada ITW' /> */}
          </div>
          <div className='experience tan-intensa'>
            <h3>Frontend Teacher Assistant</h3>
            <p>en <a href='https://ada.com.ar/' target="_blank">Ada ITW</a></p>
            {/* <img src='./ada.png' alt='Logo Ada ITW' /> */}
          </div>
        </section>
      </section>
    )
  }
}

export default Experience;