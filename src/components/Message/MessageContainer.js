import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../redux/messages-reducer';
import DataMessages from './Message';


const mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages
    }
}
export default connect(mapStateToProps, { addMessage })(DataMessages);



