import React, { Component } from 'react';
import './App.css';
import Status from './Components/Status'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Status mytext="first line of text"/>
            <Status mytext="second line of text"/>
            <Status mytext="third line of text"/>
            <Status mytext="fourth line of text"/>
        </header>
      </div>
    );
  }
}

export default App;
