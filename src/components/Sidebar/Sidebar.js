import React from 'react';
import Money from '../Money/Money';

import {
  NavLink
} from 'react-router-dom';

import './Sidebar.css';

class Sidebar extends  React.Component {
  render() {
    const accountsList = (this.props.accounts ? Object.entries(this.props.accounts) : [])
      .map(([index, account]) => (
      <NavLink to={`/account/${index}`} className='Link' activeClassName='Link--active' key={`account-${index}`}>
        <div className='Sidebar__account'>
          <div className='Sidebar__account-name'>
            {account.name}
          </div>
          <div className='Sidebar__account-amount'>
            <Money value={account.amount} currency={account.currency} />
          </div>
        </div>
      </NavLink>
    ));

    return (
      <div className='Sidebar'>
        <div className='Sidebar__header'>
          Счета
        </div>

        {accountsList}

        <NavLink to='/create-account' className='Link' activeClassName='Link--active'>
          <div className='Sidebar__account'>
            <div className='Sidebar__account-name'>
              Добавить счет
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default Sidebar;
