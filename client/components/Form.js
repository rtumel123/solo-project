import React, { Component, useState } from 'react';
import Input from './Input';

class Form extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Form">
        <p>Name</p>
        <Input name="name" handleInput={this.props.handleInput}/>
        <p>Age</p>
        <Input name="age" handleInput={this.props.handleInput}/>
        <p>Birthday</p>
        <Input name="bday" handleInput={this.props.handleInput}/>
        <p>Favorite Color</p>
        <Input name="favColor" handleInput={this.props.handleInput}/>
        <p>Favorite Food</p>
        <Input name="favFood" handleInput={this.props.handleInput}/>
        <p>Favorite Movie</p> 
        <Input name="favMovie" handleInput={this.props.handleInput}/>
      </div>
    )
  }
}
export default Form;