import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Stephanie", age: 26 },
      { name: "AC", age: 24 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log("was clicked")
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian'
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Stephanie", age: 27 },
        { name: "ACdc", age: 21 }
      ]
    })
  }

  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: e.target.value, age: 27 },
        { name: "ACdc", age: 21 }
      ]
    })
  }

  togglePersonsHandler = () => {

  }

render() {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button> {/* Convenient syntax but can be inefficient*/}
        {this.state.showPersons ? 
        <div>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, "Max!")}
        changed={this.nameChangedHandler}>My Hobbies: Racing</Person> {/* This syntax is better for performance */}
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
        </div> 
        : null}
    </div>
  )}
  // the code above gets compiled to the javascript code below 
  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, "does this work now?"))
}


export default App;
