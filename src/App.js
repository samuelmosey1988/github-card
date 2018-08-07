import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={users: null, active: false}
  handleClick=() => {
    if(this.state.active === true){
      this.setState({users: null, active: false})

    } else {
      fetch("https://api.github.com/users/samuelmosey1988")
      .then(res => res.json())
      .then(data => {
        this.setState({users: data, active: true})
        //this.setState triggers re-render automatically
      }) 
    }
    
  }
  render() {
    return<div>
      <button onClick={this.handleClick}> Party Button </button>
      {this.state.active ?
        <div>
          <h1>{this.state.users.login}</h1>
          <img src={this.state.users.avatar_url}>
          </img>
          <h2>({"Public Repos - " + this.state.users.public_repos})</h2>
          <h2>({"Followers - " + this.state.users.followers})</h2>
        </div> : null}

    
    </div>
  }
}


export default App;
