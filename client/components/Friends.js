import React, { Component } from 'react';

class Friends extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let inputValues = [];
    for (let key in this.props.inputValues) {
      inputValues.push(this.props.inputValues[key]);
    }
    return (
      <div className="Friends">
        <h3>Here is your friend!</h3>
        <ul>
        {inputValues.map(prop => <li>{prop}</li>)}
        </ul>
      </div>
    )
  }
}
export default Friends;