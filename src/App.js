import React from 'react';
import { Provider, connect } from "react-redux";
import store from './redux/redux-store';
import MessageContainer from './components/Message/MessageContainer';



class App extends React.Component {

  render() {
    return <>
      <MessageContainer />
    </>
  }
}
export default App;







