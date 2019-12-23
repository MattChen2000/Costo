import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// Expenses Reducer
const defaultExpenseState = []

const expensesReducer = (state=defaultExpenseState, action) => {
    switch (action.type) {
        case 'POST':
            return [
                ...state,
                action.expense
            ];
        case 'DELETE':
            return state.filter(({ id }) => id !== action.expense_id);
        case 'PUT':
            return state.map((expense) => {
                if (expense.id === action.expense_id) {
                    return {
                        ...expense,
                        ...action.expense_updates
                    };
                } else {
                    return expense;
                }
            })
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
        case 'PUT_text':
            return {
                ...state,
                text: action.text
            }
        case 'PUT_amount':
            return {
                ...state,
                sortBy: "amount"
            };
        case 'PUT_date':
            return {
                ...state,
                sortBy: "date"
            }
        case 'PUT_startDate':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'PUT_endDate':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    });
}

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters) 
    console.log(visibleExpenses);
})

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
const addExpense = (
    { 
        description="", 
        note="", 
        amount=0, 
        createAt=0 
    } = {}) => ({
    type: 'POST',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
});

// Remove expense
const removeExpense = ({id}) => ({
    type: "DELETE",
    expense_id: id
});

// Edit expense
const editExpense = (id, updates) => ({
    type: 'PUT',
    expense_id: id,
    expense_updates: updates
})

// Set text filter
const setTextFilter = (text="") => ({
    type: 'PUT_text',
    text: text
})

// Sort by date
const sortByDate = () => ({type: 'PUT_date'});

// Sort by amount
const sortByAmount = () => ({type: 'PUT_amount'});

// Set start date
const setStartDate = (startDate) => ({
    type: "PUT_startDate",
    startDate: startDate
})

// Set end date
const setEndDate = (endDate) => ({
    type: "PUT_endDate",
    endDate: endDate
})

// Driver Code
const rent = store.dispatch(addExpense({description: 'rent', amount: 100, createAt: 3000}))
const coffee = store.dispatch(addExpense({description: 'coffee', amount: 300, createAt: -1000}))

// store.dispatch(removeExpense({ id: rent.expense.id }))
// store.dispatch(editExpense(coffee.expense.id, { amount: 500 }))

store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(5000));
