import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {UserReducer} from "./reducers/user";

const rootReducer = combineReducers({
    user: UserReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
