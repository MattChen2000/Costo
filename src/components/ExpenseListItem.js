import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ history, dispatch, id, description, amount, createAt }) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>
        <Link to={`/edit/${id}`}>
            <button>Edit</button>
        </Link>
    </div>
);

export default connect()(ExpenseListItem);