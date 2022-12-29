import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {UserReducer} from "./reducers/user";
import messages from "./reducers/message";
import card from "./reducers/card";

const rootReducer = combineReducers({
    user: UserReducer,
    messages,
    card
});

export default createStore(rootReducer, applyMiddleware(thunk));
