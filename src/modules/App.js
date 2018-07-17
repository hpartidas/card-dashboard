import React, { Component } from 'react';

import Cards from './Cards';

import logo from '../resources/logo.svg';
import '../resources/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Cards />
      </div>
    );
  }
}

export default App;
