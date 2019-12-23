import { createStore, combineReducers} from 'redux';

// Expenses Reducer

const defaultExpenseState = []

const expensesReducer = (state=defaultExpenseState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Filters Reducer

const defaultFilterState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state=defaultFilterState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'asdfgdaflkg',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        // Date or Amount
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined 
    }
};

// Add expense

// Remove expense

// Edit expense

// Set text filter

// Sort by date

// Sort by amount

// Set start date

// Set end date
