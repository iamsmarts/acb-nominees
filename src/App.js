import React, { Component } from "react";
import Questions from "./data/questions";
import Nominees from "./data/nominees";

import Nominee from "./components/nominee/nominee.component";

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
  handleClick = who => {
    this.setState({ activeNominee: this.state.nominees[who] });
  };
  render() {
    const isActive = this.state.activeNominee;
    let nomineeList;
    if (isActive) {
      nomineeList = this.state.nominees.map((nom, index) => {
        return (
          <li
            key={index}
            className="nav-item nav-link list-inline-item"
            onClick={() => {
              this.handleClick(index);
            }}
          >
            {" "}
            {nom.name}{" "}
          </li>
        );
      });
    } else {
      nomineeList = <p>Loading...</p>;
    }

    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img
              src={acblogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            Board Nominees
          </a>
          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav list-inline">{nomineeList}</ul>
          </div>
        </nav>
        <div className="row">
          <div className="col nominees-list"></div>
        </div>
        <Nominee
          nData={this.state.activeNominee}
          questions={this.state.questions}
        />
      </div>
    );
  }
}

export default App;
