import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
// import Radium, {StyleRoot} from 'radium'
// import styled from 'styled-components'

// const StyledButton = styled.button`

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
  let btnClass = [classes.button]

  if (this.state.showPersons) {
    persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <ErrorBoundary key = {person.id}>
            <Person 
              click ={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              changed = {(e) => this.nameChangedHandler(e, person.id)}/>
          </ErrorBoundary>
        })}
        </div>
    )
      btnClass.push(classes.Red)
  }

  const assignedClasses = []
  if(this.state.persons.length <= 2){
    assignedClasses.push(classes.red) // assignedClasses = ['red']
  }
  if(this.state.persons.length <= 1){
    assignedClasses.push(classes.bold) // assignedClasses = ['red', 'bold']
  }


  return (
   // <StyleRoot>
    <div className={classes.App}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
        Toggle Persons
      </button>
        {persons}
    </div>
   // </StyleRoot>
  )}
  // the code above gets compiled to the javascript code below 
  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, "does this work now?"))
}


export default App
