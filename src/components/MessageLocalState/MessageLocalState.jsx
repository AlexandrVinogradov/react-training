import React from 'react';


class MessageLocalState extends React.Component {
    state = {
        messages: [
            { id: '1', text: 'one' },
            { id: '2', text: 'two' },
            { id: '3', text: 'three' },
            { id: '4', text: 'four' }
        ],
        textareaValue: '123'
    }

    onAddMessage = () => {
        const newItem = {
            text: this.state.textareaValue,
            id: Date.now()
          };

        this.setState ({
            // messages: [this.messages, {id: 5, text: this.state.textareaValue }]
            messages: this.state.messages.concat(newItem)
        })
    }
    onChangeMessage = (e) => {
        this.setState ({
            textareaValue: e.currentTarget.value
        })
    }

    render() {
        let newText = this.state.textareaValue;

        return <div>
            {this.state.messages.map(t => <NewItemMessage key={t.id} message={t} />)}
            <div>
                <textarea value={newText} onChange={this.onChangeMessage}/>
            </div>
            <div>
                <button onClick={this.onAddMessage}>push</button>
            </div>
        </div>
    }
}
export default MessageLocalState;


const NewItemMessage = props => {
    return <div>
        {props.message.text}
    </div>
}


