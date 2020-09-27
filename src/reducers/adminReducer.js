import { GET_HISTORY , GET_STOCK} from '../actions'

const INITIAL_STATE = {
    trans_history: [],
    stock:[]
}

const adminReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_HISTORY:
            return { trans_history: action.payload }
        case GET_STOCK:
            return { stock: action.payload }
        default:
            return state
    }
}

export default adminReducer