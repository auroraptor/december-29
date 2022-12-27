import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {UserReducer} from "./reducers/user";
import messages from "./reducers/message";

const rootReducer = combineReducers({
    user: UserReducer,
    messages,
});

export default createStore(rootReducer, applyMiddleware(thunk));
