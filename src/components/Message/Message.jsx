import React from 'react';
import { reduxForm, Field } from 'redux-form';

const DataMessages = props => {
    let  newElements = props.messages.map(n => <NewItems text={n.text} id={n.id} />);

    const onAddMessage = values => {
        props.addMessage(values.newMessageText);
    }

    return <div>
        DataMessage:
        <div>
            {newElements}
        </div>
        <div>
            <AddMessageFormRedux onSubmit={onAddMessage} />
        </div>
    </div>
}
export default DataMessages;


const NewItems = props => {
    return <div>
        {props.text}
    </div>
}
const MessageForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder='tap-tap-tap' name='newMessageText' component='textarea' /> 
        </div>
        <div>
            <button>push</button> 
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm( {form: 'messageAddNewPostForm'})(MessageForm);