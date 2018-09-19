import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import normalBaby from './assets/unadulterated-hoglette.png';
import SunBaby from './assets/sun-eyes.png';
import BlueBaby from './assets/blue-eyes.png';
import GlowingBaby from './assets/glowing-eyes.png';

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 50
    };
  }

  static imageURLS = {
    glowing: GlowingBaby,
    sun: SunBaby,
    blue: BlueBaby,
    [undefined]: normalBaby
  };

  changeWeight(e) {
    // nothing needs to change here
    const newWeight =
      e.target.name === '+' ? this.state.weight + 10 : this.state.weight - 10;
    this.setState({
      weight: newWeight
    });
  }

  // * Adding new function eyeColorMapper
  eyeColorMapper = (e) => {
    return BabyHog.imageURLS[this.props.eyeColor];
    //const eyeColor = this.props.eyeColor;
    //if (eyeColor.toString().includes()? : )

    // if (this.props.eyeColor === 'glowing'){
    //   return GlowingBaby
    // }
    // if (this.props.eyeColor === 'blue'){
    //   return BlueBaby
    // }
    // if (this.props.eyeColor === 'sun'){
    //   return SunBaby
    // }
    // else {
    //   return normalBaby
    // }
  };

  changeEyeColor = (e) => {
    this.setState({
      eyeColor: e.target.value
    });
  };

  // 1) changed "Name" to this.props.name
  // 2) Added `onClick={this.changeWeight}>` to the buttons to call the changeWeight function on `this`
  render() {
    return (
      <li className="hogbabies">
        <h1>{this.props.name}</h1>
        <h3>{this.state.weight} Weight:</h3>
        <h3>
          {this.props.hobby}
          Hobby:
        </h3>
        <h4>Eye Color: {this.props.eyeColor}</h4>
        <Button name="+" onClick={(e) => this.changeWeight(e)}>
          {/* Either make this happen on click by passing the event, or... */}
          Increase Weight
        </Button>
        <Button name="-" onClick={this.changeWeight.bind(this)}>
          {/* ... bind (this) to the function. */}
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img
            src={this.eyeColorMapper()}
            style={{ height: '200px' }}
            alt="MasterBlasterJrJr"
          />
        </div>
      </li>
    );
  }
}
