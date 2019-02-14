import React, { Component } from 'react';

import './App.css';

class Status extends Component {
    constructor () {
        super();
        this.state = {
            likes: 0
      }
      this.like = this.like.bind(this);
  }

  like() {
        this.setState({
            likes: this.state.likes + 1
        });
  }


    render() {
    return (
        <div className='status'>
            <p>{this.props.mytext}</p>
            <p>
                <button onClick={this.like}>
                    {this.state.likes} Likes
                </button>
            </p>
        </div>
    )
  }
}

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
