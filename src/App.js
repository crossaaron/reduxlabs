import React, { Component } from 'react';

import './App.css';

class Status extends Component {
  render() {
    return (
        <div className='status'>
            <p>Component Refresher</p>
            <p><button>Like</button></p>
        </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Status />
            <Status />
            <Status />
            <Status />
        </header>
      </div>
    );
  }
}

export default App;
