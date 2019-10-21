import React from 'react';
import { Field, reduxForm } from 'redux-form';


const Messages = props => {

    const messagesElement = props.messages.map(m => <MessageElement id={m.id} key={m.id} text={m.text} />)
    const onAddMessage = value => {
        props.addMessage(value.messageReduxForm)
    }

    return <div>
        {messagesElement}
        <MessageReduxForm onSubmit={onAddMessage} />
    </div>
}
export default Messages;
 const MessageElement = props => {
     return <div>
         {props.text}
     </div>
 }

const MessageForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='messageReduxForm' component='textarea' />
        </div>
        <div>
            <button>push</button>
        </div>
    </form>
}


export const MessageReduxForm = reduxForm( {form: 'messageReduxForm' } )(MessageForm);