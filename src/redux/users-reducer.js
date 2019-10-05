import {usersAPI} from '../api/api';

const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
    currentPage: 1, 
    pageSize: 5
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        default:
            return state;
    }
}

export const setUsers = (users) => ({type: SET_USERS, users});

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        const data = await usersAPI.requestUsers(page, pageSize);
        dispatch(setUsers(data.items));
    }
}



export default usersReducer;
        
