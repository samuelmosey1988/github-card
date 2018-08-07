import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick=() => {
    console.log("party commenced")
  }
  render() {
    return <button onClick={this.handleClick}> party button </button> 
  }
}

export default App;
