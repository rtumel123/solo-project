import React, { Component } from 'react';
import Form from './Form';
import Buttons from './Buttons';
import Friends from './Friends';

class App extends Component {
  constructor() {
    super();
    this.state = {
      visible: true,
      name: '',
      friends: [],
      inputValues: {}
    };
    this.viewFriends = this.viewFriends.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  viewFriends() {
    this.setState({ visible: !this.state.visible });
  }

  handleInput(e) {
    e.preventDefault();
    let inputValues = this.state.inputValues;
    let name = e.target.name;
    let value = e.target.value;

    inputValues[name] = value;

    this.setState({inputValues})
    console.log(this.state);
  }

  componentDidMount() {
    fetch('/api')
    .then(res => res.json())
    .then(friends => this.setState({friends: friends}, () => console.log('fetched friends', friends)))
  }

  render() {
    let visible = this.state.visible;
    console.log('this is my current state', this.state);
    const friends = [];
    this.state.friends.forEach((el) => {
      friends.push(el.name)
    })
    if (visible) {
      return (
        <div className="App">
          <h1 className="title">FriendStore</h1>
          <h3>Welcome [name]!</h3>
          <Form
          handleInput={this.handleInput}
          name={this.state.name}
          />
          <Buttons 
          viewFriends={this.viewFriends}
          visible={this.visible}
          />
          <ul>
            <li>{friends}</li>
          </ul>
        </div>
        );
    } else {
      return (
        <Friends inputValues={this.state.inputValues}/>
      )
    }
  }
}
export default App;