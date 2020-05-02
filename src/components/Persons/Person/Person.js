import React, { Component, Fragment } from 'react'
//import classes from './Person.css'
//import Radium from 'radium'
// import styled from 'styled-components'
//const Button = styled.button``
class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            // Fragment is used as an empty wrapper
            <Fragment>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p key='i2'>{this.props.children}</p>
                <input
                    key='i3'
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Fragment>
        )
    }
}

export default Person;