import axios from 'axios'
import { LOGIN_USER, REGISTER_USER } from './action_types'
import { loginType } from '../data/type/loginType'
import { registerType } from '../data/type/registerType'
//action -> reducer(preState, action) : nextState
export const loginUser = async (dataToSubmit : loginType) => {
    const res = await axios.post('/api/users/login' , dataToSubmit)
    return{
        type: LOGIN_USER,
        payload : res.data
    }
}

export const registerUser = async (dataToSubmit : registerType) => {
    const res = await axios.post('/api/users/register' , dataToSubmit)
    return{
        type: REGISTER_USER,
        payload: res.data
    }
}