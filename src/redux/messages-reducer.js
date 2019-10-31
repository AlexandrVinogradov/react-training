const ADD_NEW = 'ADD_NEW';

let iitialState = {
    messages: [
        { id: '1', text: 'one' },
        { id: '2', text: 'two' },
        { id: '3', text: 'three' },
        { id: '4', text: 'four' }
    ], 
    newText: '' 
}

const messagesReducer = (state = iitialState, action) => {
    switch (action.type) {
        case ADD_NEW:
            return {
                ...state,
                messages: [...state.messages, {id: 5, text: action.text}],
                newText: ''
            }
        default:
            return state
    }
}
export default messagesReducer;

export const addMessage = (text) => ({type: ADD_NEW, text});