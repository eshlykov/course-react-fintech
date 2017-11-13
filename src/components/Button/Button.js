import React from 'react';

export default class Button extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <button type={this.props.type} onClick={this.props.onClick}>{this.props.children}</button>
  }
}
