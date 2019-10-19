import React from 'react';

class MessageLocalStaet extends React.Component {
    state = {
        messages: [
            { id: '1', text: 'one' },
            { id: '2', text: 'two' },
            { id: '3', text: 'three' },
            { id: '4', text: 'four' }
        ],
        text: ''
    }
    onChangeMessage = (e) => {
        this.setState({
            text: e.currentTarget.value
        })
    }
    onAddMessage = () => {
        const newItem = {
            text: this.state.text,
            id: Date.now(),

        }
        this.setState({
            messages: this.state.messages.concat(newItem),
            text: ''

        });
    }

    render() {
        return <div>
            {this.state.messages.map(m => <NewItem key={m.id} text={m.text} />)}

            <div><NewItem /></div>

            <textarea value={this.state.text} onChange={this.onChangeMessage} />
            <button onClick={this.onAddMessage}>push</button>
        </div>
    }
}

const NewItem = props => {
    return <div>
        {props.text}
    </div>
}
export default MessageLocalStaet;