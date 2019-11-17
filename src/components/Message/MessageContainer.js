import react from 'react';
import {connect} from 'react-redux';
import Messages from '../Message/Messages';
import {addMessage} from '../../redux/messages-reducer';




const mapStareToProps = (state) => {
    return {
        messages: state.messagesPage.messages
    }
}
export default connect(mapStareToProps, {addMessage} )(Messages);