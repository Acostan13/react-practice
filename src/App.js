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



  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: e.target.value, age: 27 },
        { name: "ACdc", age: 21 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

render() {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  let persons = null

  if (this.state.showPersons) {
    persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click ={() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age} />
        })}
        </div>
    )
  }
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
    </div>
  )}
  // the code above gets compiled to the javascript code below 
  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, "does this work now?"))
}


export default App;
