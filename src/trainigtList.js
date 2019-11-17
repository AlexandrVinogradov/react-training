import Messages from './Messages'; 
import {connect} from 'react-redux';
import {addMessage} from '../../redux/messages-reducer';


export const mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages
    }
}
export default connect(mapStateToProps, {addMessage} )(Messages)