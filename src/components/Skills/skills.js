import React, { Component } from "react";
import { Line } from "rc-progress";
import "../Navbar/navbar.css";
import "./skills.css";

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      html: {
        maxValue: 100,
        currentValue: 0
      },
      css: {
        maxValue: 100,
        currentValue: 0
      },
      javascript: {
        maxValue: 80,
        currentValue: 0
      },
      node: {
        maxValue: 70,
        currentValue: 0
      },
      react: {
        maxValue: 50,
        currentValue: 0
      }
    };
    this.increase = this.increase.bind(this);
  }

  componentDidMount() {
    this.increase("html");
    this.increase("css");
    this.increase("javascript");
    this.increase("node");
    this.increase("react");
  }

  increase(name) {
    let percent = this.state[name]["currentValue"];
    const maxValue = this.state[name]["maxValue"];
    if (percent <= maxValue) {
      percent = this.state[name]["currentValue"] + 1;
    }

    if (percent >= 100) {
      clearTimeout(this.tm);
      return;
    }

    this.setState({
      [name]: {
        maxValue: maxValue,
        currentValue: percent
      }
    });
    this.tm = setTimeout(() => {
      this.increase(name);
    }, 10);
  }

  render() {
    return (
      <section className="skills-container container">
        <span className="skills-title">-Skills-</span>
        <div>
          <div>
            <span>HTML5</span>
            <div className="skills-line">
              <Line percent={this.state.html.currentValue} />
            </div>
            <span>CSS3</span>
            <div className="skills-line">
              <Line className="porcent" percent={this.state.css.currentValue} />
            </div>
            <span>JavaScript</span>
            <div className="skills-line">
              <Line percent={this.state.javascript.currentValue} />
            </div>
            <span>Node.js</span>

            <div className="skills-line">
              <Line percent={this.state.node.currentValue} />
            </div>
            <span>React</span>
            <div className="skills-line">
              <Line percent={this.state.react.currentValue} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
