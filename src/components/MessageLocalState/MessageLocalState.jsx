import React from 'react';

class MessagesLocalState extends React.Component {
    state = {
        messages: [
            {id: "1", text: 'one'},
            {id: "2", text: 'two'},
            {id: '3', text: 'three'},
            {id: '4', text: 'four'}
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
            text: this.state.newText,
            id: Date.now()
        }

        this.setState({
            messages: this.state.messages.concat(newItem),
            newText: ''
        })
    }

    render() {
        return <div>
        
            {this.state.messages.map(m => <NewMessageElement key={m.id} text={m.text} />)}

            <NewMessageElement />
            <textarea onChange={this.onChangeMessage} value={this.state.newText}/>
            <div>
            <button onClick={this.onAddMessage}>push</button>
            </div>
        </div>
    }
}

const NewMessageElement = props => {
    return<div>
        {props.text}
    </div>
}

export default MessagesLocalState;