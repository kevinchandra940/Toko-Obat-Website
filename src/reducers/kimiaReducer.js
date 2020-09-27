import { GET_KIMIA, KIMIA_ANTIBIOTIK } from '../actions'

const INITIAL_STATE = {
    kimia : [],
    kimia_antibiotik : []
}

const kimiaReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_KIMIA :
            return { kimia : action.payload}
        case KIMIA_ANTIBIOTIK : 
            return { ...state, kimia_antibiotik : action.payload }
        default :
            return state
    }
}

export default kimiaReducer