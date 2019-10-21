const ADD_NEW = 'ADD_NEW';

let initialState = {
    messages: [
        {id: '1', text: 'one'},
        {id: '2', text: 'two'},
        {id: '3', text: 'three'},
        {id: '4', text: 'four'},
    ]
}

const messagesReducer = (state = initialState, action ) => {
    switch (action.type) {
        case ADD_NEW:
            return {
                ...state, 
                messages: [...state.messages, {id: 5, text: action.newText}],
                newText: '123'
            }
        default: 
        return state;
    }
}

export const addMessage = (newText) => ({type: ADD_NEW, newText});
export default messagesReducer;
