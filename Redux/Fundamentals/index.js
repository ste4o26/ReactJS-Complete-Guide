const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    let updatedState = state;
    if (action.type === 'INCREMENT') updatedState.counter++;
    if (action.type === 'DECREMENT') updatedState.counter--;

    return updatedState;
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const state = store.getState();
    console.log(state)
}

store.subscribe(counterSubscriber);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });


