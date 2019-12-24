import moment from 'moment';


// Filters Reducer
const defaultFilterState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
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

export default filtersReducer;