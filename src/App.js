import React, { Component } from "react";
import Questions from "./data/questions";
import Nominees from "./data/nominees";

import acblogo from "./assets/acb-logo-small-blue.png";
import "./App.css";
class App extends Component {
  state = {
    activeNominee: null,
    questions: null,
    nominees: null
  };
  componentDidMount() {
    this.setState(
      {
        questions: Questions,
        nominees: Nominees
      },
      () => this.randomOrder(0, this.state.nominees.length)
    );
  }
  randomOrder = (min, max) => {
    const activeTemp = Math.floor(Math.random() * (max - min) + min);
    this.setState({ activeNominee: this.state.nominees[activeTemp] });
  };
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img
              src={acblogo}
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            Board Nominees
          </a>
        </nav>
      </div>
    );
  }
}

export default App;
