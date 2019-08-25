import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

{/* Lifecycle Methods and APIs */}
class App extends Component{
  constructor(){
    super();

    {/* Array of objects with attribute name */}
    this.state = {
      monsters: [],
      searchField: ''
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
    /* input field */
      /* password */
      /* e.target = input field => then value = text field */
    
    /* filter out based on searchField */
    /* need a copy of monsters and searchfield to work on */
    const { monsters, searchField } = this.state;
    /* Array of filtered monsters (remember filter method returns array) */
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <input 
          type='search' 
          placeholder='Search monster' 
          /* onChange={ e => console.log( e.target.value ) } */
          /* setState = asyn function call => often one character behind */
          /* Single line js => {}, multiline {{}} */
          /* () => Callback of async call that runs after setState has finished */
          /* If we need something done when the state is set, do it in the callback */
          onChange= { e => {
            this.setState( { searchField: e.target.value }, () => 
            console.log(this.state.searchField));
            /* Use callback instead console.log(this.state); */
          }}
        /> 
        <CardList monsters={ filteredMonsters } />
        {/* <CardList monsters={ this.state.monsters } /> */}
      </div>
    );
  }
}

export default App;
