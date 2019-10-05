import {reduxForm, Field} from 'redux-form';
import React from 'react';

const Messages = props => {
    let messagesElement = props.messages.map(n => <MessagesElement id={n.id} key={n.id} text={n.text} />)
    const onAddMessage = value => {
        props.addMessage(value.messagesReduxForm)
    }
    return <div>
        {messagesElement}
        <MessagesReduxForm onSubmit={onAddMessage}/>
    </div>
}
export default Messages;

const MessagesElement = props => {
    return <div>
        {props.text}
    </div>
} 
const messageReduxFormProp = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
        <Field name='messagesReduxForm' component='textarea' />
        </div>
        <div>
            <button>push</button>
        </div>
    </form>
}

const MessagesReduxForm = reduxForm( {form: 'messageReduxForm'})(messageReduxFormProp);