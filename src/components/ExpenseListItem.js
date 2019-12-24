import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createAt }) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createAt}</p>
        <Link to={`/edit/${id}`}>
            <button>Edit</button>
        </Link>
    </div>
);

export default ExpenseListItem;