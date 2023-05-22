import React from 'react';
// class component
class Message extends React.Component {
  render() {
    return <h1>Message: {this.props.message}</h1>;
  }
}
export default Message;
