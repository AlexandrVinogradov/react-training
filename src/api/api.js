import * as axios from 'axios';

const instance = axios.create({
    withCredetial: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': 'ae4c3a01-1d12-4498-85df-24268c218e2b'
    }
})

export const usersAPI = {
    requestUsers(pageSize = 10, currentPage = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => {
                return responce.data;
            })
    }
    
}
