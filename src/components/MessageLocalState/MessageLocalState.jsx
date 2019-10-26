import React from 'react';

class MessageLocalState extends React.Component {
    state = {
        messages: [
            { id: '1', text: 'one' },
            { id: '2', text: 'twop' },
            { id: '3', text: 'three' },
            { id: '4', text: 'four' }
        ],
        newText: ''
    }
    onChangeMessage = (e) => {
        this.setState({
            newText: e.currentTarget.value
        })  
    }
    onAddMessage = () => {
        const newItem = {
            id: Date.now(),
            text: this.state.newText
        }
        this.setState({
            messages: this.state.messages.concat(newItem),
            newText: ''
        })
    }
    render() {
        const newElement = this.state.messages.map(m => <NewElement id={m.id} key={m.id} message={m.text} />)
        return <div>
            {newElement}
            <textarea value={this.state.newText} onChange={this.onChangeMessage} />
            <div>
                <button onClick={this.onAddMessage}>push</button>
            </div>
        </div>
    }
}
const NewElement = props => {
    return <div>
        {props.message}
    </div>
}
export default MessageLocalState;
