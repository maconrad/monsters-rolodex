import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

{/* Lifecycle Methods and APIs */}
class App extends Component{
  constructor(){
    super();

    {/* Array of objects with attribute name */}
    this.state = {
      monsters: [
      ]
    }
  }

  componentDidMount(){
    {/* Fetch from API, returns a promise*/}
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
    {/* 
      .then(response => console.log(response))
      .then(users => console.log(users))
    */}
  }

  render() {
    return (
      <div className="App">
        <CardList name="Mario">
          {/* map returns function iterated over every element in array */}
          {/* Unique key -> react needs to know that element to update if value changes */}
          {/* Unique id needed for this */}
          {
            this.state.monsters.map(monster => (
              <h1 key={ monster.id }> { monster.name } </h1>))
          }
        </CardList>
      </div>
    );
  }
}

export default App;
