import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Button } from 'semantic-ui-react'

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
      <Button onClick={this.handleClick}> Party Button </Button>
      {this.state.active ?
        <Card
        image={this.state.users.avatar_url}
        header={this.state.users.login}
        meta={"Followers - " + this.state.users.followers}
        description={"Public Repos - " + this.state.users.public_repos}
      />
        : null}
        
    
    </div>
  }
}


export default App;
