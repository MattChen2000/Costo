import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h2>Costo</h2>
                </Link>
                <button className="button--log button--link button--logout" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
);

const mapDispathToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispathToProps)(Header);