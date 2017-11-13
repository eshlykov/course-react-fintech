import React from 'react';

export default class Money extends React.Component {
  constructor() {
    super();

    this.currencySign = {
      'RUB': '₽',
      'EUR': '€',
      'GBP': '£',
      'USD': '$'
    }
  }

  render() {
    const intValue = Math.floor(+this.props.value);

    const currency = this.currencySign[this.props.currency];
    const currencySpan = currency === undefined ? '' : <span>{currency}</span>;

    const fracValue = Math.round(100 * (+this.props.value - intValue));
    const fracSpan = fracValue === 0 ? '' : <span>,{fracValue}</span>;

    return <span><span>{intValue}</span>{fracSpan}{currencySpan}</span>;
  }
}
