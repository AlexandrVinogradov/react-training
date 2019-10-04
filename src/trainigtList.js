import React from 'react';
import {reduxForm, Field}  from 'redux-form';

const Messages = props => {
    let messagesElements = props.messages.map(n => <NewElement id={n.id} text={n.text} key={n.key} /> )
    
    const onAddMessage = values => {
        props.addMessage(values.messageForm);
    }

    return <div>
        {messagesElements}
        <MessageReduxForm onSubmit={onAddMessage}/>
    </div>
}
export default Messages;

const NewElement = props => {
    return <div>
        {props.text}
    </div>
}

const MessageForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='messageForm' component='textarea' />
        </div>
        <div>
            <button>push</button>
        </div>

    </form>
}

const MessageReduxForm = reduxForm({ form:'reduxMessageFoim' })( MessageForm );










const ADD_NEW = 'ADD_NEW';
let initialState = {
    messages: [
        { id: '1', text: 'one' },
        { id: '2', text: 'two' },
        { id: '3', text: 'three' },
        { id: '4', text: 'four' }
    ]
}

const messageTrainingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW:
            let newText = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 5, text: newText }],
                newMessageText: ''
            };
        default:
            return state;
    }
}

export const addMessage = (newMessageText) => ({type: ADD_NEW, newMessageText});
export default messageTrainingReducer;
