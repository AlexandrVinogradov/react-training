const ADD_NEW = 'ADD_NEW';

let initislState = {
    messages: [
        { id: '1', message: 'one' },
        { id: '2', message: 'two' },
        { id: '3', message: 'three' },
        { id: '4', message: 'four' },
    ]
}

const messageTrainingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW:
            let newText = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: newText }],
                newMessageText: ''
            }
        default:
            return state;
    }
}

export const addNewMessage = (newMessageText) => ({ type: ADD_NEW, newMessageText });
export default messageTrainingReducer;