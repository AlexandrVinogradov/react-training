import React from 'react';
import MessageContainer from './components/Message/MessageContainer';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import {Provider} from 'react-redux';
import UsersContainer from './components/UsersContainer/UsersContainer';

class App extends React.Component {
  render() {
    return <div>
      <Navbar />
      <div>
        <Route path='/messages'
          render={() => <MessageContainer />} />
        <Route path='/users'
          render={() => <UsersContainer />} />
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