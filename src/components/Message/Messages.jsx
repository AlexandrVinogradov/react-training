import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Messages = props => {
    const newElement = props.messages.map(m => <NewItem id={m.id} key={m.id} text={m.text} />)
    const addNewMessage = value => {
        props.addMessage(value.reduxTextarea);
    }
    return <div>
        {newElement}
        <ReduxForm onSubmit={addNewMessage}/>
    </div>
}
export default Messages;

const NewItem = props => {
    return <div>
        {props.text}
    </div>
}

const Form = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component='textarea' name='reduxTextarea' />
        </div>
        <div>
            <button>push</button>
        </div>
    </form>
} 

export const ReduxForm = reduxForm({form: 'reduxForm'})(Form);