import React, { Component } from 'react';
import { hocCpt } from './hoc';

class PureTest extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h1>seconds: {this.props.seconds}</h1>
      </div>
    );
  }
}

export const Test = hocCpt(PureTest);
