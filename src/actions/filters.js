// Set text filter
export const setTextFilter = (text="") => ({
    type: 'PUT_text',
    text: text
})

// Sort by date
export const sortByDate = () => ({type: 'PUT_date'});

// Sort by amount
export const sortByAmount = () => ({type: 'PUT_amount'});

// Set start date
export const setStartDate = (startDate) => ({
    type: "PUT_startDate",
    startDate: startDate
})

// Set end date
export const setEndDate = (endDate) => ({
    type: "PUT_endDate",
    endDate: endDate
})