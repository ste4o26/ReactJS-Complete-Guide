const redux = require('redux');

// i must return a NEW object every time becouse react compares them under the hood so it can reevaluate the component and 
// make changes to the UI. If i use a variable and only update it properties redux will updated the state correctly but react
// wont be able to due to the fact its the very same object every time and as said above react compares the object(i.e. their references);
const counterReducer = (state = { counter: 0, isHidden: false }, action) => {
    if (action.type === 'INCREMENT')
        return { counter: state.counter + 1, isHidden: state.isHidden };

    if (action.type === 'DECREMENT')
        return { counter: state.counter - 1, isHidden: state.isHidden };

    // i can pass a value(e.g object number string array ext) from the subsribed component using action property.
    // This allows me to dinamically set the redux state.
    // For example i can get some data from a form/input and do something with it here or 
    // i can either fetch something from a backend and do something else with that data here as well.
    if (action.type === 'INCREASE_BY_FIVE')
        return { counter: state.counter + action.value, isHidden: state.isHidden };

    if (action.type === 'TOGGLE') {
        return { counter: state.counter, isHidden: !state.isHidden }
    }

    return state;
}

const store = redux.createStore(counterReducer);
export default store;