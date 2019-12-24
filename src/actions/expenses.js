import uuid from 'uuid';

// Add expense
export const addExpense = (
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
