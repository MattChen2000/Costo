import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Costo</h1>
                <p>It's time to get your expenses under control.</p>
                <button onClick={startLogin} className="button">Login with Google</button>
            </div>
            
        </div>
);

const mapDispathToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispathToProps)(LoginPage);
