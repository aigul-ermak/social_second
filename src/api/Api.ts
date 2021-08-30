import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "01910c7f-850b-4fc4-806d-97b4d51a1f97"
    }
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    getUserProfile(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    },
    getUserAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    getUserUnFollow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },
    getUserFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    }
}
