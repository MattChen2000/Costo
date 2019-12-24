import moment from 'moment';

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createAtMoment = moment(expense.createAt);
        const startDateMatch = startDate ? createAtMoment.isSameOrAfter(startDate, 'day') : true;
        const endDateMatch = endDate ? createAtMoment.isSameOrBefore(endDate, 'day') : true;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return b.createAt - a.createAt;
        } else if (sortBy === 'amount') {
            if (b.amount === a.amount) {
                return b.createAt - a.createAt;
            }
            return b.amount - a.amount;
        }
    })
}

export default getVisibleExpenses;