import database from '../firebase/firebase';

// Add expense
export const addExpense = (expense) => ({
    type: 'POST',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description="", 
            note="", 
            amount=0, 
            createAt=0
        } = expenseData;
        const expense = { description, note, amount, createAt };
        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    }
};

// Remove expense
export const removeExpense = ({id}) => ({
    type: "DELETE",
    expense_id: id
});

// Edit expense
export const editExpense = (id, updates) => ({
    type: 'PUT',
    expense_id: id,
    expense_updates: updates
})

// Get Expenses
export const getExpenses = (expenses) => ({
    type: 'GET',
    expenses
});

export const startGetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(getExpenses(expenses));
        });
    };
};