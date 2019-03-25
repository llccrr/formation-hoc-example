import React from 'react';
import ReactDOM from 'react-dom';
import { Test } from './Test';
import { Test2 } from './Test2';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Test title="Compteur instance 1" />
      <Test title="Compteur instance 2" delay={3000} />
      <Test2 />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
