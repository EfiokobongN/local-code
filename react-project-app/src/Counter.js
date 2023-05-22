import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  inCrease = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };
  render() {
    return (
      <div>
        <p>You click {this.state.count} time</p>
        <button onClick={this.inCrease}>Click me</button>
      </div>
    );
  }
}
