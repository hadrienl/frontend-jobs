import React, { Component } from 'react';

import FilesManager from './components/FilesManager';
import Main from './components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <FilesManager>
        <div
          className="app">
          <header
            className="app-header">
            <h1 className="app-title">Frontend-jobs</h1>
          </header>
          <Main />
        </div>
      </FilesManager>
    );
  }
}

export default App;
