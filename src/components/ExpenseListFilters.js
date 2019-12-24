import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
        }}/>
        <select>
            <option>Date</option>
            <option>Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps)(ExpenseListFilters);