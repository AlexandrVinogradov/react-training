import { connect } from 'react-redux';
import Messages from './Messages';
import { addMessage } from '../../redux/messages-reducer';

const mapStateToProps = state => {
    return {
        messages: state.messagesPage.messages
    }
}
export default connect(mapStateToProps, {addMessage})(Messages);