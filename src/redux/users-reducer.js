import { usersAPI } from '../api/api';

const GET_USERS = 'GET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    pageSize: 10,
    users: [],
    isFetching: false,
    currentPage: 1
}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.users
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
export default usersReduser;

export const getUsers = (users) => ({ type: GET_USERS, users });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await usersAPI.requestUsers(page, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(getUsers(data.items));
    }
}