import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createAt }) => (
    <div>
        <h3>{description}</h3>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
            -
            {moment(createAt).format('MMMM Do, YYYY')}
        </p>
        <Link to={`/edit/${id}`}>
            <button>Edit</button>
        </Link>
    </div>
);

export default ExpenseListItem;