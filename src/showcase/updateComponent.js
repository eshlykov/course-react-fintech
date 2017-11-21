import React from 'react';

class UpdateComponent extends  React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.status !== nextProps.status || this.props.accounts !== nextProps.accounts;
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default UpdateComponent;
