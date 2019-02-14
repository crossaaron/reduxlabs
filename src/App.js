import React, { Component } from 'react';
import './App.css';
import StatusAll from './Components/StatusAll'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <StatusAll />
        </header>
      </div>
    );
  }
}

export default App;
