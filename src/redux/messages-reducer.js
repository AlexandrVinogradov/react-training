const ADD_NEW = 'ADD_NEW';

let initialState = {
    messages: [
        { id: '1', text: 'YoYoYo' },
        { id: '2', text: 'This will hard' },
        { id: '3', text: 'but we will do it' },
        { id: '4', text: 'pfff' },
        { id: '5', text: 'easy' }
    ]
}

const messageReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW: 
            let newText = action.newMessageText;
            return {
                ...state, 
                messages: [...state.messages, {id: 6, text: newText} ],
                newMessageText: ''
            }
        default: 
        return state;
    }
}


export const addMessage  = (newMessageText) => ({type: ADD_NEW, newMessageText});
export default messageReduser; 


