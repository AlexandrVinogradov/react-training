import React from 'react';
import MessageContainer from './components/Message/MessageContainer';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'; 
import store from './redux/redux-store';






class App extends React.Component {

  render() {
    return <>
    <MessageContainer /> ///////////////////////
      <Navbar />
      <div>
        <Route path='/messages'
        render={() => <MessageContainer />} />
      </div>
    </>
  }
}





const TrainingApp = props => {
  return <div>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  </div>
}
export default TrainingApp;








