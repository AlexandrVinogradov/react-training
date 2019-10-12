import React from 'react';


class MessageLocalState extends React.Component {
    state = {
        messages: [
            { id: '1', text: 'one' },
            { id: '2', text: 'two' },
            { id: '3', text: 'three' },
            { id: '4', text: 'four' }
        ]
    }
    render() {
        return <div>
            {this.state.messages.map(t => <NewItemMessage key={t.id} message={t}/>)}
        </div>
    }
}
export default MessageLocalState;


const NewItemMessage = props => {
    return <div>
        {props.message.text}
    </div>
}


