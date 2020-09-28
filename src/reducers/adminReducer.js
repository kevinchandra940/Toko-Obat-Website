import { GET_HISTORY, GET_STOCK, HISTORY_JADI, HISTORY_RACIK } from '../actions'

const INITIAL_STATE = {
    trans_history: [],
    stock: [],
    historyRacik : [],
    historyJadi : [],
}

const adminReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_HISTORY:
            return { trans_history: action.payload }
        case GET_STOCK:
            return { stock: action.payload }
        case HISTORY_RACIK:
            return { ...state, historyRacik: action.payload }
        case HISTORY_JADI:
            return { ...state, historyJadi: action.payload }
        default:
            return state
    }
}

export default adminReducer