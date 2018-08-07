import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={users: null, active: false}
  handleClick=() => {
    fetch("https://api.github.com/users/samuelmosey1988")
    .then(res => res.json())
    .then(data => {
      this.setState({users: data, active: true})
      //this.setState triggers re-render automatically
    })
  }
  render() {
    return <button onClick={this.handleClick}> party button </button> 
  }
}


export default App;
