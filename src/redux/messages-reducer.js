const ADD_NEW = 'ADD_NEW';
let initialState = {
    messages: [
        { id: '1', text: 'one' },
        { id: '2', text: 'two' },
        { id: '3', text: 'three' },
        { id: '4', text: 'four' }
    ]
}
//
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW:
            let text = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, { id: 5, text: text }],
                newMessageText: ''
            };
        default:
            return state;
    }
}

export const addMessage = (newMessageText) => ({type: ADD_NEW, newMessageText});
export default messagesReducer;
        
