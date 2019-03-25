import React, { Component } from 'react';
import { hocCpt } from './hoc';

class PureTest2 extends Component {
  render() {
    return (
      <div>
        <h2 style={{ color: 'grey ' }}>
          Je suis un autre composant et j'ai besoins d'un compteur aussi mais
          pour autre chose
        </h2>
        <h1 style={{ color: 'grey' }}>{this.props.seconds * 60 * 60}</h1>
      </div>
    );
  }
}

export const Test2 = hocCpt(PureTest2);
