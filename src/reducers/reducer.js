import { combineReducers } from 'redux';

const initialState = {};

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    recipes: recipeReducer,
});

export default rootReducer;
