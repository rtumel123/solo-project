import React, { Component } from 'react';
import Form from './Form';
import Buttons from './Buttons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    <div className="App">
      <h1 className="title">FriendStore</h1>
      <h3>Welcome [user]!</h3>
      <Form />
      <Buttons />
    </div>
    );
  }
}
export default App;