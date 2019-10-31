import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

const MessagesWithHook = props => {
    return <div>
        {
        props.messages.map(t => <TextElement id={t.id} text={t.text} /> )
        }
    </div>
}
const TextElement= props => {
    return <div>
        {props.text}
    </div>
}


const mapStateToProps = state => {
    return {
        messages: state.messagesPage.messages
    }
}
export default connect(mapStateToProps, {})(MessagesWithHook)