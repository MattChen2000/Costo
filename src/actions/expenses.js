import database from '../firebase/firebase';

// Add expense
export const addExpense = (expense) => ({
    type: 'POST',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description="", 
            note="", 
            amount=0, 
            createAt=0
        } = expenseData;
        const expense = { description, note, amount, createAt };

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
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

export const startRemoveExpense = ({ id }) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

// Edit expense
export const editExpense = (id, updates) => ({
    type: 'PUT',
    expense_id: id,
    expense_updates: updates
})

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

// Get Expenses
export const getExpenses = (expenses) => ({
    type: 'GET',
    expenses
});

export const startGetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
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