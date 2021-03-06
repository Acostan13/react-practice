import React, { PureComponent } from 'react'
import Person from './Person/Person'
//import AuthContext from '../../context/auth-context'

// Pure Component already implements shoudComponentUpdate with a complete props check
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return state
    // }

    // componentWillReceiveProps(props){
    //     console.log('[Perons.js] componentWillReceiveProps', props)
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] shouldComponentUpdate')
    //     if(
    //         nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked !== this.props.clicked
    //     ) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapShotBeforeUpdate')
        return { message: 'Snapshot!' }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
                return (
                    <Person
                        click={() => this.props.clicked(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(e) => this.props.changed(e, person.id)}
                    />
                )
            })
        
    }
}

export default Persons
