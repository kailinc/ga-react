import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
      <nav>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
      </nav>
  </header>
)


export default Header;
