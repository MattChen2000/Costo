import { createStore } from 'redux';

// Reducer

/** Reducers are pure functions. 
 *    A. Output only depends on the input (state, action, etc., not on some global variables)
 *    B. Would not change things out of its scope (won't change state and actions)
*/
const countReducer = (state = { count: 0 }, action) => {
    console.log("Running");
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.payload
            };
        case 'DECREMENT':
            return {
                count: state.count - action.payload
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.value
            };
        default:
            return state;
    }
};

const toggleSubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Action Generators
// Increment
const incrementCount = ({ payload = 1 } = {}) => ({
    type: 'INCREMENT',
    payload: payload
})

// Decrement
const decrementCount = ({ payload = 1 } = {}) => ({
    type: 'DECREMENT',
    payload: payload
})

// Reset
const resetCount = (() => ({
    type: 'RESET'
}))

// SET
const setCount = ({ value }) => ({
    type: 'SET',
    value: value
});


store.dispatch(incrementCount({payload: 5}));
store.dispatch(decrementCount({payload: 10}));
store.dispatch(resetCount());
store.dispatch(setCount({ value: 50 }));