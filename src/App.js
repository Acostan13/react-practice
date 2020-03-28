import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
import person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
          {name: "Max", age: 28},
          {name: "Stephanie", age: 26},
          {name: "AC", age: 24}
        ]
    })

  const [otherState, setOtherState] = useState('some other value')

  console.log(personsState, otherState)

  const switchNameHandler = () => {
    //console.log("was clicked")
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian'
    setPersonsState({ 
      persons: [
        {name: "Maximillian", age: 28},
        {name: "Stephanie", age: 27},
        {name: "ACdc", age: 21}
      ]
    })
  }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    )
    // the code above gets compiled to the javascript code below 
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, "does this work now?"))
  }


export default App;
