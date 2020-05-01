import React, { Component } from 'react'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Auxiliary'
import classes from './Person.css'
import PropTypes from 'prop-types'
//import Radium from 'radium'
// import styled from 'styled-components'
//const Button = styled.button``
class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }

    componentDidMount(){
        //this.inputElement.focus()
        this.inputElementRef.current.focus()
    }
    render() {
        console.log('[Person.js] rendering...')
        return (
            // Fragment is used as an empty wrapper
            <Aux>
                {this.props.isAuth ? <p>Authenticated</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p key='i2'>{this.props.children}</p>
                <input
                    key='i3'
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        )
    }
}

// Consider using these when others are using your components
// and it might not be super clear which props your components take
// and which kind of data goes into which prop
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
}

export default withClass(Person, classes.Person);