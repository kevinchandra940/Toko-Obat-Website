import { ADD_PAYMENT } from '../actions'

const INITIAL_STATE = {
    history : []
}

const paymentReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_PAYMENT :
            return { history : action.payload}
        default :
            return state
    }
}

export default paymentReducer