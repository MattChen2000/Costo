import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Costo</h1>
        <NavLink to="/" activeClassName="is-active" exact>Go to Homepage</NavLink><br/>
        <NavLink to="/add" activeClassName="is-active">Go to Add Page</NavLink><br/>
        <NavLink to="/help" activeClassName="is-active">Go to Help Page</NavLink><br/>
    </header>
)

export default Header;