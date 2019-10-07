import { usersAPI } from "../api/api";

const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initiaState = {
    users: [],
    currentPage: 1,
    pageSize: 10,
    isFetching: false
}

const usersReducer = (state = initiaState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users ////
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching 
            }
        default: 
            return state;
    }
}
export const setUsers = (users) => ({type: SET_USERS, users }); /////
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});


export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await usersAPI.requestUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
    }
}

export default usersReducer;