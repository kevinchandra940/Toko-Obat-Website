import { LOGIN, LOGOUT, REGISTER } from '../actions/helper'

const INITIAL_STATE = {
    username : "",
    email : "",
    role : "",
    id : null,
    register_status : false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOGIN : 
            return {
                ...state,
                username : action.payload.username,
                email : action.payload.email,
                role : action.payload.role,
                id : action.payload.id
                }
        case LOGOUT :
            return INITIAL_STATE
        case REGISTER : 
            return { ...state, register_status : true }
        default :
            return state
    }
}

export default userReducer