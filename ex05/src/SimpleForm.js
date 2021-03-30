import React, { Component } from 'react';

class SimpleForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "Yoda" };
    }

    onChangeHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    render() {
        return (
            <from>
                <h1>Name: {this.state.name}</h1>
                <p>First name:</p>
                <input
                    type='text'
                    onChange={this.onChangeHandler} />
            </from>
        )
    }
}

export default SimpleForm;