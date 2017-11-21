import React from 'react';

const validateRequire = value => value === '';

class CreateAccount extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      currency: '',
      description: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validationsForm() {
    let status = true;

    Object.keys(this.state).forEach(item => {
      if(validateRequire(this.state[item])) {
        status = false;
        return false;
      }
    });

    return status;
  }

  formClear() {
    this.setState({
      name: '',
      currency: '',
      description: ''
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.validationsForm()) {
      return;
    }

    this.props.createAcoount(this.state);

    this.formClear();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
        <input name="currency" type="text" value={this.state.currency} onChange={this.handleChange} />
        <input name="description" type="text" value={this.state.description} onChange={this.handleChange} />
      </form>
    );
  }
}

export default CreateAccount;
