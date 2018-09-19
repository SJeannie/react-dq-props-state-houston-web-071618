import React, { Component } from 'react';
import Master from './assets/master-hog.png';
import BabyHog from './BabyHog';
// import offspring from './db.js'

export default class MasterHog extends Component {
  constructor() {
    super();
    this.state = {
      eyeColor: 'blue'
    }; // pass down only what's pertinent to babyHog
  }

  listOffspring = () => {
    return offspring.map((offspring) => {
      // return this map function (no implicit returns when using curly braces)
      return <BabyHog eyeColor={this.state.eyeColor} {...offspring} />; // * Passing in everything in offspring as PROPS; even the inherited state of the MasterPig gets passed along as a prop
      // return <BabyHog {this.state} {...offspring} />;    // * Passing in everything in offspring as props AND passing along the entire state
    });
  };

  changeEyeColor = (e) => {
    this.setState({
      eyeColor: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="radio"
          name="eyeColor"
          value="blue"
          onChange={this.changeEyeColor}
        />
        Blue
        <br />
        <input
          type="radio"
          name="eyeColor"
          value="sun"
          onChange={this.changeEyeColor}
        />
        Sun
        <br />
        <input
          type="radio"
          name="eyeColor"
          value="glowing"
          onChange={this.changeEyeColor}
        />
        Glowing
        <br />
        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>
        <ul className="hoglist">{this.listOffspring()}</ul>
      </div>
    );
  }
}
