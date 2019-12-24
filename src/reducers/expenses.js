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

export default expensesReducer;
