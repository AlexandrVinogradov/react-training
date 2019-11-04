import React from 'react';
import {Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators';
import {Textarea} from '../common/FormsControls/FormControls';

const maxLengt10 = maxLengthCreator(10)

const Messages = props => {

    const messageElement = props.messages.map(m => <MessageElement id={m.id} key={m.id} text={m.text} />)

    const onAddMessage = value => {
        props.addMessage(value.customTextarea)
    }

    return <div>
        {messageElement}
        <MessageReduxForm onSubmit={onAddMessage} messages={props.messages} />
    </div>

}
export default Messages;

const MessageElement = props => {
    return <div>
        <li>{props.text}</li>
    </div>
}

const MessageForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name='customTextarea' validate={[required, maxLengt10]}/>
        </div>
        <div>
            <CustoBtn messages={props.messages}/>
        </div>
    </form>
}

const CustoBtn = props => {
    return <div>
        <button>push{props.messages.length + 1}</button>
    </div>
}

const MessageReduxForm = reduxForm( {form: 'our redux form'} )(MessageForm);