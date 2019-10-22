import messagesReducer from './messages-reducer';
import { reducer as formReducer } from 'redux-form';
import usersReducer from "./users-reducer";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";


const reducers = combineReducers({
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    form: formReducer
})

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
));
export default store;

window.__store__ = store;