import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Radium, {StyleRoot} from 'radium'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`


class App extends Component {
  state = {
    persons: [
      {id: 'asdf', name: "Max", age: 28 },
      {id: 'fda', name: "Stephanie", age: 26 },
      {id: 'aszxcvdf', name: "AC", age: 24 }
    ],
    showPersons: false
  }



  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = e.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
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

  let persons = null

  if (this.state.showPersons) {
    persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click ={() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age} 
          key ={person.id}
          changed = {(e) => this.nameChangedHandler(e, person.id)}/>
        })}
        </div>
    )
    // style.backgroundColor = 'red'
    // style[':hover'] = {
    //   backgroundColor: 'salmon',
    //   color: 'black'
    // }
  }

  const classes = []
  if(this.state.persons.length <= 2){
    classes.push('red') // classes = ['red']
  }
  if(this.state.persons.length <= 1){
    classes.push('bold') // classes = ['red', 'bold']
  }


  return (
    <StyleRoot>
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
        Toggle Persons
      </StyledButton>
        {persons}
    </div>
    </StyleRoot>
  )}
  // the code above gets compiled to the javascript code below 
  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, "does this work now?"))
}


export default Radium(App);
