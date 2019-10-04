import { createStore, combineReducers } from "redux";
import messagesReducer from './messages-reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    messagesPage: messagesReducer,
    form: formReducer
});
const store = createStore(reducers, devToolsEnhancer());
export default store;

window.__store__ = store;