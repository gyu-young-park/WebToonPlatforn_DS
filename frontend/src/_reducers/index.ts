import { combineReducers } from 'redux'
import userLoginReducer from './user_reducer'

const rootReducer = combineReducers({
    userLoginReducer
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>