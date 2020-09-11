import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div className="Input">
        <input type="text" name={this.props.name} onChange={ this.props.handleInput }></input>
      </div>
    )
  }
}
export default Input;