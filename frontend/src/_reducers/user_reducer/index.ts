import { LOGIN_USER, REGISTER_USER ,AUTH_USER } from '../../_actions/action_types'
import { IAction } from '../../data/interface/IAction'
const userLoginReducer = (state : any = {}, action : IAction ) => {
    switch ( action.type ){
        //store에 정보가 저장된다. 즉, loginSuccess가 저장된다.
        case LOGIN_USER:
            return { ...state, loginSuccess : action.payload}
            break;
        case REGISTER_USER:
            return { ...state, register : action.payload}
            break;
        case AUTH_USER:
            return { ...state, userData : action.payload}
            break;
        default:
            return state
    }
}

export default userLoginReducer