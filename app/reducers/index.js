import { combineReducers } from 'redux';
// Tis there you'd import reducers
// you'd use combineReducers to combine them into TheApp
// const TheApp = combineReducers({ reducer_1, reducer_2, ... });


const TheApp = (state = {}, action) => {
    switch (action.type) {
        case "SWITCH_TEXT":
            return {
                value: action.text == 'Hello' ? 'Bye' : 'Hello'
            };

        default:
            return state;
    }
};

export default TheApp;
