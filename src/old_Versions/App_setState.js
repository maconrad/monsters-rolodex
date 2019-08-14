import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

{/* Component Class allows for State */}
class App extends Component{
  constructor(){
    super();

    {/* State Variables */}
    this.state = {
      string: 'Hello Mario'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> {this.state.string} </p>
          {/* Anonymous function () that calls setState */}
          {/* everything inside curly brackets is JavaSCript */}
          {/* setState allows for rerender of virtualDOM in hierarchy */}
          <button onClick={() => this.setState({string: 'Hello xy'})}>Change Me</button>
        </header>
      </div>
    );
  }
}

export default App;
