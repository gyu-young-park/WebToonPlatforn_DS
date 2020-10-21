import axios from 'axios'
import { LOGIN_USER, REGISTER_USER, AUTH_USER, ADMIN_PAGE_ON , ADMIN_PAGE_OFF} from './action_types'
import { loginType } from '../data/type/loginType'
import { registerType } from '../data/type/registerType'
//action -> reducer(preState, action) : nextState
export const loginUser = async (dataToSubmit : loginType) => {
    const res = await axios.post('/api/users/login' , dataToSubmit)
    return{
        type: LOGIN_USER,
        payload : res.data.loginSuccess
    }
}

export const registerUser = async (dataToSubmit : registerType) => {
    const res = await axios.post('/api/users/register' , dataToSubmit)
    return{
        type: REGISTER_USER,
        payload: res.data.success
    }
}

export const auth = async () => {
    const res = await axios.get('/api/users/auth')
    return{
        type: AUTH_USER,
        payload: res.data.isAuth
    }
}

export const adminPageOn = () => {
    return{
        type: ADMIN_PAGE_ON,
        payload: false
    }
}

export const adminPageOff = () => {
    return{
        type: ADMIN_PAGE_OFF,
        payload: true
    }
}

// export type userAction = ReturnType<typeof loginUser> |  ReturnType<typeof registerUser> | ReturnType<typeof auth>