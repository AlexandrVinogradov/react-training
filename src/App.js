import React from 'react';
import MessageContainer from './components/Message/MessageContainer';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import UsersContainer from './components/UsersContainer/UsersContainer';






class App extends React.Component {
  render() {
    return <>
      <Navbar />
      <div>
        <Route path='/messages'
          render={() => <MessageContainer />} />
        <Route path='/users'
          render={() => <UsersContainer />} />
      </div>
    </>
  }
}



const TrainingApp = props => {
  return <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
}

export default TrainingApp;



