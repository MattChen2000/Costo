import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({startLogout}) => (
    <header>
        <h1>Costo</h1>
        <NavLink to="/" activeClassName="is-active" exact>Go to Homepage</NavLink><br/>
        <NavLink to="/add" activeClassName="is-active">Go to Add Page</NavLink><br/>
        <NavLink to="/help" activeClassName="is-active">Go to Help Page</NavLink><br/>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispathToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispathToProps)(Header);