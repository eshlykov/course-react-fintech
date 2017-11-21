import React, { Component } from 'react';

class CreateAccount extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      currency: '',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form>
        <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
        <input name="currency" type="text" value={this.state.currency} onChange={this.handleChange} />
        <input name="description" type="text" value={this.state.description} onChange={this.handleChange} />
      </form>
    );
  }
}

export default CreateAccount;
