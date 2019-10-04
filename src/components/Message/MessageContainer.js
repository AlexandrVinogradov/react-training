import {connect} from 'react-redux';
import {addMessage} from '../../redux/messages-reducer';
import Messages from './Messages';

const mapStateToProps = state => {
    return {
        messages: state.messagesPage.messages
    }
}
export default connect(mapStateToProps, {addMessage})(Messages);
