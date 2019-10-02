import React from 'react';
import { Provider, connect } from "react-redux";
import store from './redux/redux-store';
import MessageContainer from './components/Message/MessageContainer';
import MessageTrainingContainer from './components/MessageTraining/MessageTrainingContainer';




class App extends React.Component {

  render() {
    return <>
      <MessageContainer />
      {/* <MessageTrainingContainer /> */}
    </>
  }
}
export default App;







