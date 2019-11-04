import React from 'react';
import { Field, reduxForm  } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormControls';
import { required, maxLengthCreator } from '../../utils/validators';

const maxLength10 = maxLengthCreator(10)


const Messages = (props) => {
    const newItem = props.messages.map(m => <NewMessageItem key={m.id} id={m.id} text={m.text} /> )

    const onAddMessage = value => {
        props.addMessage(value.customTexarea)
    }
    return <div>
        {newItem}
        <OurReduxForm onSubmit={onAddMessage} messages={props.messages} />
    </div>
}
export default Messages;

const NewMessageItem = (props) => {
    return <ul>
        <li>{props.text}</li>
    </ul>
}

const ReduxForm = (props) => {
    return <form onSubmit={props.handleSubmit}> 
        <Field component={Textarea} name='customTexarea' validate={[required, maxLength10]}/>
        <div>
            <CustomBtn messages={props.messages}/>
        </div>
    </form>
}
const OurReduxForm = reduxForm( {form: 'our redux form'} )(ReduxForm);

const CustomBtn = props => {
    return <div>
        <button>push{props.messages.length + 1}</button>
    </div>
}