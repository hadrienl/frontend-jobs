import React, { Component } from 'react';

import Main from './components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div
        className="app">
        <header
          className="app-header">
          <h1 className="app-title">Frontend-jobs</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
