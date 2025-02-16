import { createStore } from 'redux';

// Simple Reducer (Modify as needed)
const initialState = {};
const rootReducer = (state = initialState, action) => state;

const store = createStore(rootReducer);

export default store;
