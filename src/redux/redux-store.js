import { createStore, combineReducers } from "redux";
import messagesReducer from './messages-reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import messageTrainingReducer from './messages-training-reducer';

const reducers = combineReducers({
    messagesPage: messagesReducer,
    messageTrainingPage: messageTrainingReducer,
    form: formReducer
});
const store = createStore(reducers, devToolsEnhancer());
export default store;
