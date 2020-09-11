import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return (
      <div className="Buttons">
        <button onClick={ this.props.viewFriends }>Add Friend</button>
        <button onClick={ this.props.viewFriends }>View Friends</button>
      </div>
    )
  }
}
// this.props.viewFriends, () => 
export default Buttons;