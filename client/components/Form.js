import React, { Component, useState } from 'react';
import Input from './Input';

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <p>Name</p>
        <Input />
        <p>Age</p>
        <Input />
        <p>Birthday</p>
        <Input />
        <p>Favorite Color</p>
        <Input />
        <p>Favorite Food</p>
        <Input />
        <p>Favorite Movie</p> 
        <Input />
      </div>
    )
  }
}
export default Form;