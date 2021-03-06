import React from 'react';
import MessageContainer from './components/Message/MessageContainer';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import s from './App.module.css';
import { Provider } from 'react-redux';
import UsersContainer from './components/UsersContainer/UsersContainer';
import MessageLocalState from './components/MessageLocalState/MessageLocalState';
import MessagesWithHook from './components/MessagesWithHook/MessagesWithHook';

class App extends React.Component {
  render() {
    return <div className={s.App}>
      <Navbar />
      <div>
        <Route path='/messages'
          render={() => <MessageContainer />} />
        <Route path='/users'
          render={() => <UsersContainer />} />
        <Route path='/messagesLocalState'
          render={() => <MessageLocalState />} />
        <Route path='/hook'
          render={() => <MessagesWithHook />} />
      </div>
    </div>
  }
}
const TrainingApp = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
}
export default TrainingApp;