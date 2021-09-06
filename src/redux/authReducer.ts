import {ActionType, setAuthUserDataAT} from '../types/dispatchTypes';
import {authAPI} from '../api/Api';


const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: true
}

type InitialStateType = {
    userId: null | string
    email: null | string
    login: null | string
    isFetching: boolean
    isAuth: boolean
}


const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;

    }
}

export const setAuthUserData = (userId: string | null, email: string | null, login: string | null): setAuthUserDataAT => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
})

export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let {userId, email, login} = data.data
                dispatch(setAuthUserData(userId, email, login));

            }
        })
}


export default authReducer;
