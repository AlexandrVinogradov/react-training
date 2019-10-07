import React from 'react';
import {reduxForm, Field} from 'redux-form';

const Messages = props => {
    let messageElement = props.messages.map(m => <NewItem id={m.id} text={m.text} key={m.id} />)

    const onAddMessage = (value) => {
        props.addMessage(value.messageForm)
    }
    return <div>
        {messageElement}
        <MessageForm onSubmit={onAddMessage}/>
    </div>
}
export default Messages;

const NewItem = props => {
    return <div>
        {props.text}
    </div>
}

const MessageReduxForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='messageForm' component='textarea' />
        </div>
        <div>
            <button>push</button>
        </div>
    </form>
}

export const MessageForm = reduxForm({ form: 'messageReduxForm' })(MessageReduxForm);
