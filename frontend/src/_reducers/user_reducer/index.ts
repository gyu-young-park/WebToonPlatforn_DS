import { LOGIN_USER, REGISTER_USER ,AUTH_USER } from '../../_actions/action_types'
import { IAction } from '../../data/interface/IAction'

type userLoginType = {
    isLogin : boolean,
    isRegister : boolean,
    isAuth : boolean
}

const initialState : userLoginType = {
    isAuth : false,
    isRegister: false,
    isLogin : false
    
}
const userLoginReducer = (state : userLoginType = initialState, action : IAction ) => {
    switch ( action.type ){
        //store에 정보가 저장된다. 즉, loginSuccess가 저장된다.
        case LOGIN_USER:
            return { ...state, isLogin : action.payload}
            break;
        case REGISTER_USER:
            return { ...state, isRegister : action.payload}
            break;
        case AUTH_USER:
            return { ...state, isAuth : action.payload}
            break;
        default:
            return state
    }
}

export default userLoginReducer