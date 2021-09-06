import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "967dded3-1026-4f79-8b5e-1f9b30397305"
    }
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    // getUserProfile(userId: string) {
    //     return instance.get(`profile/` + userId)
    //         .then(response => response.data);
    // },
    getUserUnFollow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },
    getUserFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status});
    }

}
