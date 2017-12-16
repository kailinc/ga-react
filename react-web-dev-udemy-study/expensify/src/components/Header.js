import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
      <nav>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dash Board</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
      </nav>
  </header>
)


export default Header;
